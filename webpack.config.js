var webpack = require("webpack"),
    path = require("path");


var options = {
  entry: {
    plugins: path.join(__dirname, "pluginbuilder.ts"),
  },

  // All file outputs from webpack will be under the 'build/' directory.
  output: {
    path: __dirname,
    filename: 'index.bundle.js'
  },

  module: {
    rules: [
      {
        // Handles compiling TypeScript files into JS
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};

module.exports = options;
