const { join: joinPath } = require("path"); 
const { VueLoaderPlugin } = require("vue-loader");

let config = {
  entry: "./src/main.js",
  output: {
    filename: "vue-text-input.js",
    path: joinPath(__dirname, "dist"),
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
  ],
  optimization: {
    minimize: false
  }
};

module.exports = env => {
  if (env === "minified") {
    let filename = config.output.filename;
    config.output.filename = filename.replace(/\.js$/, ".min.js");
    config.optimization.minimize = env === "minified";
  }
  
  config.mode = env === "development" ? "development" : "production";
  config.watch = env === "development";
  return config;
};
