module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      colors: {
        success: {
          100: "#F2F8F7",
          200: "#DFF1F0",
          300: "#E8F3F3",
          400: "#00AAA1",
        },
        secondary: {
          100: "#666666",
          200: "#777777",
          300: "#555555",
          400: "#1C1C1C",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
