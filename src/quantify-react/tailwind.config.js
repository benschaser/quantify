const {heroui} = require("@heroui/react");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    heroui({
      layout: {
        radius: {
          small: '2px',
          medium: '6px',
          large: '10px'
        },
      }
    })
  ],
}

