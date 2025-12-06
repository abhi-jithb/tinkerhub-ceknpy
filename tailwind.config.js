/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        thGreen: "#9BE15D",
        thCyan: "#00E3FF",
        thPurple: "#A855F7",
        thOrange: "#FFB347",
        thDark: "#111827",
        thLight: "#F9FAFB",
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
