const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: './src/app/main.js',
  output: {
    path: path.join(__dirname, 'src/public/js'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: {
          loader: 'vue-loader'
        }
      }
    ]
  },
  devServer: {
    port: 3000
  },
  plugins: [
      new VueLoaderPlugin()
  ]
};