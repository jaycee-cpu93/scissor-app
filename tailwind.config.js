/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0065FE",
        secondary: "#141414",
        tertiary: "#005AE2",
      },
      fontFamily: {
        gilroyBold: ["gilroy-bold", "sans-serif"],
        gilroySemiBold: ["gilroy-semibold", "sans-serif"],
        gilroyMedium: ["gilroy-medium", "sans-serif"],
        proximaNova: ["proxima-nova", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
