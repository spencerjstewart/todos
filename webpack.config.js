// webpack.config.js
const path = require("path");

module.exports = {
  entry: "./js/index.js", // Update this if your entry file is different
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "development", // Use 'production' for production build
};