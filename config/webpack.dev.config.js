const path = require('path');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
  mode:'development',
  entry: {
    entry: path.join(__dirname, '../src/app/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use:['style-loader','css-loader','less-loader']
      },
      {
        test: /\.(jsx|js)$/,
        use: {
          loader:'babel-loader'
        },
        exclude:/node_modules/
      }
    ]
  },
  plugins: [
    new htmlPlugin({
      minify: {
          removeAttributeQuotes: true
      },
      hash: true,
      template: path.join(__dirname,'../static/index.html')
  })
  ],
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    host: 'localhost',
    compress: true,
    port: 1717
  }
};