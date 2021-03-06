var path = require("path");
var webpack = require("webpack");

module.exports = {
  devtool: "eval",
  entry: [
    "webpack-hot-middleware/client",
    "./src/example/App"
  ],
  output: {
    path: path.join(__dirname, "src/example/dist"),
    filename: "bundle.js",
    publicPath: "/src/example/dist/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolveLoader: { root: path.join(__dirname, "node_modules") },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ["babel"],
      include: path.join(__dirname, "src")
    }, {
      test: /\.less$/,
      loader: "style!css!less"
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: "url-loader?limit=100000" 
    }]
  }
};
