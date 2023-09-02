/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'very-dark-blue': '#0B0D17',
        'very-light-grayish-blue': '#D0D6F9',
      },
      fontFamily: {
        'bellefair': ['Bellefair', 'serif'],
        'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
        'barlow': ['Barlow', 'sans-serif']
      },
    },
    letterSpacing: {
      'sm': '2.35px',
      'md': '2.7px',
      'lg': '4.75px'
    }
  },
  plugins: [],
}

