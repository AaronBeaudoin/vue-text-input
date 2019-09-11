const { join: joinPath } = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: joinPath(__dirname, "dist"),
    filename: "vue-dynamic-input.js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".vue"]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
