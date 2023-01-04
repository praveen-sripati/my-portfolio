/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        /* HSL color mode */
        "ps-first-color": "var(--ps-first-color)",
        "ps-first-color-second": "var(--ps-first-color-second)",
        "ps-first-color-alt": "var(--ps-first-color-alt)",
        "ps-first-color-lighter": "var(--ps-first-color-lighter)",
        "ps-title-color": "var(--ps-title-color)",
        "ps-text-color": "var(--ps-text-color)",
        "ps-text-color-light": "var(--ps-text-color-light)",
        "ps-input-color": "var(--ps-input-color)",
        "ps-body-color": "var(--ps-body-color)",
        "ps-container-color": "var(--ps-container-color)",
        "ps-scroll-bar-color": "var(--ps-scroll-bar-color)",
        "ps-scroll-thumb-color": "var(--ps-scroll-thumb-color)",
      },
      fontSize: {
        "ps-big-font-size": "var(--ps-big-font-size)",
        "ps-h1-font-size": "var(--ps-h1-font-size)",
        "ps-h2-font-size": "var(--ps-h2-font-size)",
        "ps-h3-font-size": "var(--ps-h3-font-size)",
        "ps-normal-font-size": "var(--ps-normal-font-size)",
        "ps-small-font-size": "var(--ps-small-font-size)",
        "ps-smaller-font-size": "var(--ps-smaller-font-size)",
      },
      screens: {
        'desktop': {'min': '1280px'},
        // => @media (min-width: 1280px) { ... }
  
        'laptop': {'min': '1024px'},
        // => @media (min-width: 1024px) { ... }
  
        'tablet': {'min': '768px'},
        // => @media (min-width: 768px) { ... }

        'mobile-lg': {'min': '568px'},
        // => @media (min-width: 568px) { ... }
  
        // `mobile-md` is default

        'mobile-sm': {'max': '350px'},
        // => @media (max-width: 350px) { ... }
      }
    },
  },
  plugins: [],
}
