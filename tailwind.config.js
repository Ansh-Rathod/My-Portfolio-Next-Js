/** @type {import('tailwindcss').Config} */


// const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./contexts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true
    },
    fontFamily: {
      mono: ['var(--font-space-mono)', 'Space Mono', 'monospace'],
      sans: ['var(--font-space-mono)', 'Space Mono', 'monospace'],
      serif: ['var(--font-space-mono)', 'Space Mono', 'monospace'],
    },

    // screens: {
    //   'mobile': { 'min': '100px', 'max': '500px' },
    //   'tablet': { 'min': '500px', 'max': '750px' },
    //   'mini-laptop': { 'min': '750px', 'max': '874px' },
    //   'laptop': { 'min': '874px', 'max': '1900px' },
    //   'c-laptop': { 'min': '880px', 'max': '1080px' },
    //   'desktop': { 'min': '1500px' },
    // },
    borderWidth: {
      DEFAULT: '0.5px',
      '0': '0.5px'

    },
    extend: {},

  },
  plugins: [
    // require('tailwind-scrollbar-hide')
  ],
}
