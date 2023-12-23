/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange-primary': {
          200: '#fdede9',
          500: '#ff7f22'
        },
        'status-blue': {
          500: '#3ea6ff'
        }
      },
      animation: {
        fade: 'fadeOut 0.5s ease-in-out',
      },
      keyframes: theme => ({
        fadeOut: {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100% ' },
        },
      }),
    },
  },
  plugins: [],
}

