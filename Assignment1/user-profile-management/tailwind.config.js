/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#03045e",
        blue: "#0077b6",
        skyBlue: "#00b4d8",
        lightBlue: "#90e0ef",
        veryLightBlue: "#caf0f8",
      },
    },
  },
  plugins: [],
};
