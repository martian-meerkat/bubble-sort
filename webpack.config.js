const path = require('path');

module.exports = {
   mode: "development",
   entry: "./script/app.js",
   output: {
      path: path.resolve(__dirname, 'build'),
      filename: "app.js"
   },
   module: {
      rules: [{
         test: /\.less$/,
         include: [
            path.resolve(__dirname, "style")
         ],
         use: [{
            loader: 'style-loader'
         }, {
            loader: 'css-loader'
         }, {
            loader: 'less-loader'
         }]
      }, {
         test: /\.(png|jpg)$/,
         include: [
            path.resolve(__dirname, "image")
         ],
         loader: 'url-loader'
      }]
   }
};