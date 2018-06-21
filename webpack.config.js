var path = require('path');
var webpack = require('webpack');
// const node_modules = path.resolve(__dirname, 'node_modules');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ParallelUglifyPlugin  = require('webpack-parallel-uglify-plugin');

module.exports = {
  mode: 'production',
  entry: {
    bundle: path.resolve(__dirname,'./src/index.js')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'js/[name].[hash].js',
    library: 'tim', //指定的使用 require 时的模块名
    libraryTarget: 'umd', //生成不同 umd 的代码,可以只是 commonjs 标准的，也可以是指 amd 标准的，也可以只是通过 script 标签引入的
    umdNamedDefine: true //会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            'env',
            'stage-3',
            'react'
          ]
        }
      },
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
    }, {
      test: /\.(scss|sass)$/,
      use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
    }, {
      test: /\.(png|jpeg|jpg|svg|gif|mp3|mp4)(\?.*)$/,
      use: [{
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash:7]',
          outputPath: 'imgs/',
          publicPath: 'dist/'
        }
      }]
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'file-loader',
      options: {
        limit: 10000,
        name: '[name].[ext]?[hash:7]',
        outputPath: 'imgs/',
        publicPath: 'dist/'
      }
    }]
  },
  resolve: {
    // alias: {
    //   'react': path.resolve(node_modules, 'react/umd/react.production.min.js'),
    //   'react-dom': path.resolve(node_modules, 'react-dom/umd/react-dom.production.js'),
    //   'react-router': path.resolve(node_modules, 'react-router-dom/umd/react-router-dom.min.js')
    // },
    // module: [ 'node_modules', path.resolve(__dirname, 'src') ],
    extensions: [ '*', '.js', '.json', '.jsx', '.css' ],
  },
  /**externals 编译模块的优势：
   * dll 预编译的模块可做静态资源库重复使用
   * 有效解决循环依赖的问题
   */
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    'react-router': 'react-router',
  },
  devtool: '#eval-source-map',
  optimization: {
    minimize: false,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        },
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
    new HtmlWebpackPlugin({
      title: 'Tim`is web',
      template: path.resolve(__dirname, 'index.html'), // 源模板文件
      filename: 'index.html',
      showErrors: true,
      inject: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: 'production'
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new CleanPlugin('./dist/*', {
      root: __dirname,
      verbose:  true, //开启在控制台输出信息
      dry: false, //启用删除文件
    }),
    new ParallelUglifyPlugin({
      // cacheDir: '.cache/',
      uglifyJS:{
        output: {
          comments: false
        },
        compress: {
          warnings: false
        }
      }
    })
  ]
}