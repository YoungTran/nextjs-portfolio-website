module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 7s linear infinite",
      },
      fontFamily: {},
      colors: {
        "theme-deep-blue": "#1A1E2C",
        "theme-dark-blue": "#252B3F",
        "theme-dark-gray": "#616977",
        "theme-light-blue": "#76A8F9",
        "theme-light-gray": "#B1B6CD",
        "theme-regular-white": "#EFEFF0",
        "theme-azure-blue": "#3C83F6",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    // ...
  ],
};
