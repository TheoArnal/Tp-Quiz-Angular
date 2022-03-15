const { join } = require("path");
const f = (glob) => join(__dirname, glob);

module.exports = {
  content: [
    f("src/**/*.{ts,html}"),
    f("src/assets/*")
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
