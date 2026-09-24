/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#000000",
        "ink-soft": "#262626",
        line: "#E8E9E7",
        "line-soft": "#E8E8E5",
        surface: "#F7F7F5",
        "surface-2": "#F0F0ED",
        muted: "#6B6B68",
        "muted-2": "#787875",
        faint: "#A8A8A5",
        "green-bg": "#F0F4EE",
        "green-text": "#445F2C",
        "amber-bg": "#FFF8F0",
        "amber-text": "#9E601C",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
