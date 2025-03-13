/**
 * @typedef {Object} TrackingData
 * @property {string} website_id
 * @property {string} visitor_id
 * @property {string} session_id
 * @property {'pageview'} event_type
 * @property {string} url_path
 * @property {string | null} url_query
 * @property {string | null} referrer
 * @property {string | null} user_agent
 * @property {{ width: number; height: number } | null} viewport
 */

/**
 * @typedef {Object} CallbackResponse
 * @property {number} status
 */

!function () {
  "use strict";

  // // Disable on localhost, file protocol, or iframe
  // if (/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(window.location.hostname) ||
  //   "file:" === window.location.protocol ||
  //   window !== window.parent) {
  //   return console.warn("Tracker: Disabled on localhost, file protocol, or iframe");
  // }

  const script = document.currentScript;
  const websiteId = script.getAttribute('data-website-id');
  if (!websiteId) {
    return console.warn("Tracker: Missing data-website-id attribute");
  }

  // Update this to your deployed domain
  const endpoint = 'https://api.ansh.life/track'; // Replace with your actual domain

  /** @type {(name: string, value: string, days: number) => void} */
  function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  /** @type {(name: string) => string | null} */
  function getCookie(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) === ' ') cookie = cookie.substring(1);
      if (cookie.indexOf(nameEQ) === 0) return cookie.substring(nameEQ.length);
    }
    return null;
  }

  /** @type {() => string} */
  function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0;
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }

  /** @type {() => string} */
  function getVisitorId() {
    let visitorId = getCookie('tracker_visitor_id');
    if (!visitorId) {
      visitorId = generateUUID();
      setCookie('tracker_visitor_id', visitorId, 365);
    }
    return visitorId;
  }

  /** @type {() => string} */
  function getSessionId() {
    let sessionId = getCookie('tracker_session_id');
    if (!sessionId) {
      sessionId = generateUUID();
      setCookie('tracker_session_id', sessionId, 1 / 48); // 30 minutes
    }
    return sessionId;
  }

  /** @type {() => TrackingData | null} */
  function collectData() {
    const href = window.location.href;
    if (!href) {
      console.warn("Tracker: Unable to collect href");
      return null;
    }

    return {
      website_id: websiteId,
      visitor_id: getVisitorId(),
      session_id: getSessionId(),
      event_type: 'pageview',
      url_path: window.location.pathname,
      url_query: window.location.search || "",
      referrer: document.referrer || "",
      user_agent: navigator.userAgent || null,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    };
  }

  /** @type {(data: TrackingData, callback?: (response: CallbackResponse) => void) => Promise<void>} */
  async function sendData(data, callback) {
    if (localStorage.getItem('tracker_ignore') === 'true') {
      console.log("Tracker: Disabled via localStorage flag");
      callback && callback({ status: 200 });
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("Tracker: Data sent successfully");
        setCookie('tracker_session_id', getSessionId(), 1 / 48);
      } else {
        console.error("Tracker: Failed to send data, status:", await response.json());
        console.error("Tracker: Failed to send data, status:", response.status);
      }
      callback && callback({ status: response.status });
    } catch (error) {
      console.error("Tracker: Error sending data:", error);
      callback && callback({ status: 500 });
    }
  }

  /** @type {(callback?: (response: CallbackResponse) => void) => void} */
  function trackPageView(callback) {
    const data = collectData();
    if (data) sendData(data, callback);
  }

  // Initial page view
  trackPageView();

  // SPA support
  let lastPath = window.location.pathname;
  const originalPushState = window.history.pushState;
  window.history.pushState = function () {
    originalPushState.apply(this, arguments);
    if (lastPath !== window.location.pathname) {
      lastPath = window.location.pathname;
      trackPageView();
    }
  };
  window.addEventListener('popstate', () => {
    if (lastPath !== window.location.pathname) {
      lastPath = window.location.pathname;
      trackPageView();
    }
  });
}();