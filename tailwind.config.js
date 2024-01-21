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
        'kirito': "url('/src/img/kiri-minimal.webp')",
        'oshi-no-ko' : "url('/src/img/oshi-no-ko.webp')",
        'akame' : "url('/src/img/akame.webp')"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

