const path = require('path');

module.exports = {
  entry: path.resolve(__dirname + '/src/vue-sauce.js'),
  output: {
    path: path.resolve(__dirname + '/dist/'),
    filename: 'vue-sauce.js',
    library: 'vue-sauce',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
