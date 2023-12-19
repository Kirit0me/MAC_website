/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anime: ['Space Mono']
      }, 
      backgroundImage: {
        'frieran': "url('src/img/frieran.jpg')"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

