/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/images/hero.jpg')",
        "search-pattern": "url('/src/assets/images/search.jpg')",
      },
      fontFamily: {
        nunito: ["Nunito", "serif"],
      },
      colors: {
        primary: "#ff5b0a",
        secondary: "#ffffff",
      },
    },
  },
  plugins: [],
};
