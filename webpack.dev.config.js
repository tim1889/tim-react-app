const path = require("path");
const webpack = require('webpack');
const node_modules = path.resolve(__dirname, 'node_modules');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname,'./src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'js/bundle.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            "env",
            "stage-3",
            "react",
            "es2015",
          ]
        }
      },
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: [ "style-loader", "css-loader" ]
    }, {
      test: /\.html$/,
      use: ['html-loader']
    }, {
      test: /\.(scss|sass)$/,
      use: [ "style-loader", "css-loader", "sass-loader?indentedSyntax" ]
    }, {
      test: /\.(png|jpeg|jpg|svg|gif|mp3|mp4)(\?.*)$/,
      use: [{
        loader: "file-loader",
        options: {
          limit: 10000,
          name: "[name].[ext]?[hash:7]",
        }
      }]
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'file-loader',
      options: {
        limit: 10000,
        name: '[name].[ext]?[hash]',
      }
    }]
  },
  resolve: {
    // alias: {
    //   'react': path.resolve(node_modules, 'react/cjs/react.development.js'),
    //   'react-dom': path.resolve(node_modules, 'react/dist/react-dom.min.js'),
    //   'react-router': path.resolve(node_modules, 'react-router-dom/umd/react-router-dom.js')
    // },
    extensions: [ "*", ".js", ".json", ".jsx", ".css" ],
  },
  devServer: {
    port: 3000,
    proxy: {
      '/api': 'http://localhost:3000'
    },
    historyApiFallback: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: 'Tim`is web',
  //     template: 'index.html', // 源模板文件
  //     filename: 'index.html',
  //     showErrors: true,
  //     inject: true,
  //   })
  // ]
}