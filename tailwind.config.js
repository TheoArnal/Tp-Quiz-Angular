const { join } = require("path");
const f = (glob) => join(__dirname, glob);

module.exports = {
  content: [
    f("src/**/*.{ts,html}")
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
