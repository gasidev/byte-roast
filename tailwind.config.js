/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "navy-blue": "#2c2c54",
        brown: "#6f4e37",
        green: "#23d160",
        latte: "#f3e9dc",
      },
    },
  },
  plugins: [],
};
