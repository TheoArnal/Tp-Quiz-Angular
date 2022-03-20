module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./projects/**/*.{html,ts}",
    "src/assets/*",
  ],
  theme: {
    maxWidth: {
      "1/4": "25%",
    },
    extend: {
      colors: {
        primary: "#28592B",
      },
    },
  },
  plugins: [],
};
