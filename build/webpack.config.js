const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html，并将最终生成的js，css等动态插入其中
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? false : '#cheap-module-source-map',
  entry: {
    app: isProd ? path.resolve(__dirname, '../src/main.js') : ['webpack-hot-middleware/client?noInfo=true&reload=true', path.resolve(__dirname, '../src/main.js')],
  },

  output: {
    path: path.resolve(__dirname, '../dist/'),
    publicPath: '/dist/',
    filename: '[name].[chunkhash].js',
  },

  resolve: {
    extensions: ['.json', '.js', '.vue'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },

  stats: { children: false },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
        options: {
          compilerOptions: {
            preserveWhitespace: true,
          }
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash:7]',
        },
      },
      {
        test: /\.(le|c)ss$/,
        oneOf: [
          {
            test: /App/,
            resourceQuery: /\?vue/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
          },
          {
            use: ['vue-style-loader', 'css-loader', 'less-loader'],
          }
        ],
      },
      {
        test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
        loader: 'file-loader',
        query: {
          limit: 10000,
          name: '/[name].[ext]?[hash:7]',
          prefix: 'font',
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../index.template.html'),
      chunks: ['manifest', 'commons', 'app', 'vendor'],
    }),
    new MiniCssExtractPlugin({
      filename: 'common.[chunkhash].css',
    }),
  ],
  optimization: {
    runtimeChunk: {
      name: 'manifest',
    },
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
        vendor:{
          name: 'vendor',
          test(module) {
            return (
              /node_modules/.test(module.context) &&
              !/\.css$/.test(module.request)
            );
          },
        },
      },
    },
    minimizer: [new OptimizeCssAssetsPlugin({}), new UglifyJsPlugin({})],
    minimize: isProd,
  },
  performance: {
    maxEntrypointSize: 300000,
    hints: isProd ? 'warning' : false,
  },
};
