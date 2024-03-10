/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'custom': ['ocra', 'inter'], // Add your font as the first option, followed by fallbacks
      },
      colors: {
        white: '#bfc2c2 ', // Replace with your desired white color code
        green: {
          DEFAULT: '#2bac94',
        },
        red: {
          DEFAULT: '#973437',
        },
        blue: {
          DEFAULT: '#206995',
        },
        gray: {
          DEFAULT: '#636060',
        },
      },
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        '@font-face': {
          fontFamily: 'ocra',
          fontWeight: 'normal',
          fontStyle: 'normal',
          fontDisplay: 'swap',
          src: `url('/fonts/ocr-a.woff2') format('woff2')`,
        },
        'html': {
          fontFamily: theme('fontFamily.custom'),
        },
        // ... you can add more global styles here
      });
    }),
  ],
}



// 
