/**
 * @typedef {Object} TrackingData
 * @property {string} website_id
 * @property {string} visitor_id
 * @property {string} session_id
 * @property {'pageview' | 'pagevisit'} event_type
 * @property {string} url_path
 * @property {string | null} url_query
 * @property {string | null} referrer
 * @property {string | null} user_agent
 * @property {{ width: number; height: number } | null} viewport
 * @property {number} duration
 */

/**
 * @typedef {Object} CallbackResponse
 * @property {number} status
 */

!function () {
  "use strict";

  if (/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(window.location.hostname) ||
    "file:" === window.location.protocol ||
    window !== window.parent) {
    return console.warn("Tracker: Disabled on localhost, file protocol, or iframe");
  }

  const script = document.currentScript;
  const websiteId = script.getAttribute('data-website-id');
  if (!websiteId) {
    return console.warn("Tracker: Missing data-website-id attribute");
  }

  const endpoint = 'https://api.ansh.life/track';

  function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

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

  function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0;
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }

  function getVisitorId() {
    let visitorId = getCookie('tracker_visitor_id');
    const isNewVisitor = !visitorId;
    if (isNewVisitor) {
      visitorId = generateUUID();
      setCookie('tracker_visitor_id', visitorId, 365);
    }
    return { visitorId, isNewVisitor };
  }

  function getSessionId() {
    let sessionId = getCookie('tracker_session_id');
    if (!sessionId) {
      sessionId = generateUUID();
      setCookie('tracker_session_id', sessionId, 1 / 48);
    }
    return sessionId;
  }

  let startTime = Date.now();

  function collectData(isNewVisitor = false) {
    const href = window.location.href;
    if (!href) {
      console.warn("Tracker: Unable to collect href");
      return null;
    }

    const duration = Math.round((Date.now() - startTime) / 1000);
    return {
      website_id: websiteId,
      visitor_id: getVisitorId().visitorId,
      session_id: getSessionId(),
      event_type: isNewVisitor ? 'pagevisit' : 'pageview', // Differentiate here
      url_path: window.location.pathname,
      url_query: window.location.search || "",
      referrer: document.referrer || "",
      user_agent: navigator.userAgent || null,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      duration: duration >= 0 ? duration : 0,
    };
  }

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
        console.log("Tracker: Data sent successfully:", await response.json());
        setCookie('tracker_session_id', getSessionId(), 1 / 48);
      } else {
        console.error("Tracker: Failed to send data, status:", response.status);
      }
      callback && callback({ status: response.status });
    } catch (error) {
      console.error("Tracker: Error sending data:", error);
      callback && callback({ status: 500 });
    }
  }

  function trackPageView(callback, isNewVisitor = false) {
    const data = collectData(isNewVisitor);
    if (data) {
      sendData(data, (response) => {
        if (response.status === 200) startTime = Date.now();
        callback && callback(response);
      });
    }
  }

  // Initial page view/visit
  const { isNewVisitor } = getVisitorId();
  trackPageView(null, isNewVisitor);

  // SPA support
  let lastPath = window.location.pathname;
  const originalPushState = window.history.pushState;
  window.history.pushState = function () {
    originalPushState.apply(this, arguments);
    if (lastPath !== window.location.pathname) {
      lastPath = window.location.pathname;
      trackPageView(); // Always pageview for SPA navigation
    }
  };
  window.addEventListener('popstate', () => {
    if (lastPath !== window.location.pathname) {
      lastPath = window.location.pathname;
      trackPageView(); // Always pageview for SPA navigation
    }
  });

  window.addEventListener('beforeunload', () => {
    const data = collectData();
    if (data) {
      navigator.sendBeacon(endpoint, JSON.stringify(data));
    }
  });
}();