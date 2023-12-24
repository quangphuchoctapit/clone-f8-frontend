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
          400: 'rgb(253, 144, 4)',
          500: '#ff7f22'
        },
        'status-blue': {
          500: '#3ea6ff'
        },
        'blue-primary': {
          300: 'rgb(89, 169, 250)'
        },
        'pink-primary': {
          200: 'rgb(255, 186, 164)',
          800: 'rgb(253, 34, 92)'
        },
        'purple-primary': {
          500: 'rgb(136, 40, 250)'
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

