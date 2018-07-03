const path = require('path');

module.exports = {
   mode: "development",
   entry: "./script/app.js",
   output: {
      path: path.resolve(__dirname, 'build'),
      filename: "app.js"
   }
};