const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
// const node_modules = path.resolve(__dirname, 'node_modules');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname,'./src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'bundle.js'
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
            "react"
          ]
        }
      },
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      // use: ExtractTextWebpackPlugin.extract({
      //   fallback: "style-loader",
      //   use: "css-loader"
      // })
      use: [ "style-loader", "css-loader"]
    }, {
      test: /\.(scss|sass)$/,
      // use: ExtractTextWebpackPlugin.extract({
      //   fallback: "style-loader",
      //   use: [ "css-loader", "sass-loader" ]
      // })
      use: [ "style-loader", "css-loader", "sass-loader" ]
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
    proxy: {
      '/api': 'http://localhost:3000'
    },
    publicPath: '/',
    historyApiFallback: true,
    overlay: true,
    port: 3000
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Tim`is web',
      template: path.resolve(__dirname, 'index.html'),
      showErrors: true,
    }),
    // new ExtractTextWebpackPlugin("styles.css")
  ]
}
