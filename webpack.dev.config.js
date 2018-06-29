// "start": "cross-env NODE_ENV=development webpack-dev-server --config webpack.dev.config.js --open --hot",

const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client?noInfo=true&reload=true',
    path.resolve(__dirname, './src/index.js')
  ],
  output: {
    path: path.resolve(__dirname, './dist/'),
    publicPath: 'http://localhost:3000/',
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
      use: [ "style-loader", "css-loader" ]
    }, {
      test: /\.(scss|sass)$/,
      use: [ "style-loader", "css-loader", "sass-loader" ]
    }, {
      test: /\.(png|jpg|jpeg|svg|gif|mp3|mp4)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
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
  /*
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
      '/api': 'http://localhost:3000',
    },
    host: 'localhost',
    port: 3000,
    hot: true,
    historyApiFallback: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  */
  devtool: '#eval-source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Tim`is web',
      template: path.resolve(__dirname, 'index.html'),
      showErrors: true,
    }),
    // new MiniCssExtractPlugin({
    //   filename: "[name].css",
    //   chunkFilename: "[id].css"
    // })
  ]
}