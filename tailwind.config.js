/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      animation: {
        spin: "spin 1s linear infinite",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      colors: {
        purple: {
          1000: "#635FC7",
          5000: "rgba(99, 95, 199, 0.1)",
        },
        grey: {
          100: " #F4F7FD",
          200: "#E9EFFA",
          1000: "#828FA3",
        },
      },
    },
  },
  plugins: [],
};
