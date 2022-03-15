const { join } = require("path");
const f = (glob) => join(__dirname, glob);

module.exports = {
  content: [
    f("src/**/*.{ts,html}"),
    f("src/assets/*")
  ],
  theme: {
    extend: {
      colors: {
        "ecogreen": '#28592B'
      },
      animation: {
        flip: 'flip 500ms ease-in-out infinite'
      },
      keyframes: {
        flip: {
          '0%': { transform: 'rotateY(0)' },
          '50%': { background: "url('assets/feuilles-vertes-carres-06.png')" },
          '100%': { transform: 'rotateY(180deg)' },
        }
      }
    },
  },
  plugins: [],
}
