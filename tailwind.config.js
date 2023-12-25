/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '440px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
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
          300: 'rgb(89, 169, 250)',
          400: '#6cbbff'
        },
        'yellow-primary': {
          300: '#eac154'
        },
        'green-primary': {
          400: '#66dda1',
          700: '#04424c',
          900: '#05202b'
        },
        'pink-primary': {
          200: 'rgb(255, 186, 164)',
          800: 'rgb(253, 34, 92)'
        },
        'purple-primary': {
          400: '#c895f9',
          500: 'rgb(136, 40, 250)'
        },
        'brown-primary': {
          400: '#a67f36',
          800: '#624d2a'
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

