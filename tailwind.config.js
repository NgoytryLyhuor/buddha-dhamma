/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Moul"', '"Playfair Display"', 'serif'],
        body: ['"Noto Serif Khmer"', '"Lora"', 'serif'],
        kh: ['"Kantumruy Pro"', 'sans-serif'],
      }
    }
  },
  plugins: [],
}

