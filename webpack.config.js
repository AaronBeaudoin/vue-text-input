const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: "./src/main.js",
  output: {
    library: "VueTextInput",
    libraryTarget: "umd"
  },
  externals: {
    lodash: {
      commonjs: "lodash",
      commonjs2: "lodash",
      amd: "lodash",
      root: "_"
    }
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
