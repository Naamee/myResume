/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-5': 'linear-gradient(5deg, var(--tw-gradient-stops))',
        'gradient-358': 'linear-gradient(358deg, var(--tw-gradient-stops))',
        'star-pattern': 'url("/src/assets/StarBackground.jpg")',

      },
      spacing: {
        '100': '25rem',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}