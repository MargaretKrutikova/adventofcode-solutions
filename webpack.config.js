var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./scripts/index.js",
  output: {
    path: __dirname + "/build",
    filename: "compiled.js"
  },
  module: {
    rules: [{
      test: /\.js$/, 
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env', 'stage-2']
        }
      } 
    }]
  }
};