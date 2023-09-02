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
      fontSize: {
        'heading-1': '150px',
        'heading-2': '100px',
        'heading-3': '56px',
        'heading-4': '32px',
        'heading-5': '28px',
        'subheading-1': '28px',
        'subheading-2': '14px',
        'nav-text': '16px',
        'body-text': '18px'
      }
    },
    letterSpacing: {
      'sm': '2.35px',
      'md': '2.7px',
      'lg': '4.75px'
    },

  },
  plugins: [],
}

