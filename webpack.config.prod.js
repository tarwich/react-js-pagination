var path = require("path");
var webpack = require("webpack");

module.exports = {
  devtool: "source-map",
  entry: [
    "./src/example/App"
  ],
  output: {
    path: path.join(__dirname, "src/example/dist"),
    filename: "bundle.js",
    publicPath: "/src/example/dist/"
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
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
