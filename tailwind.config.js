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
        'akame' : "url('/src/img/akame.webp')",
        'footer' : "url('/src/img/footer.webp')",
        'girl' : "url('/src/img/girl_black.webp')",
        'frieren' : "url('/src/img/frieren_wp.webp')",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

