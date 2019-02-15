// Autogenerated by @xamdes/project-generator
const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const crypto = require("crypto");
const crypto_orig_createHash = crypto.createHash;
crypto.createHash = algorithm => crypto_orig_createHash(algorithm == "md4" ? "sha256" : algorithm);

const configApiUrl = '';

module.exports = [
  {
    name: 'production',
    //development, production or none
    mode: 'production',

    entry: [
      'react-hot-loader/patch',
      './src/index.jsx',
      resolve(__dirname, 'src') + '/index.jsx',
    ],

    output: {
      filename: 'app.bundle.js',
      path: resolve(__dirname, 'public'),
      publicPath: '',
    },

    resolve: {
      extensions: ['.js', '.jsx'],
    },

    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
        ],
    },

    performance: {
      maxEntrypointSize: 1024000,
      maxAssetSize: 1024000,
    },

    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        React: 'react',
        ReactDOM: 'react-dom',
        PropTypes: 'prop-types',
        Redux: 'redux',
      }),
      new webpack.DefinePlugin({
        APINAME: JSON.stringify(configApiUrl),
      }),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: 'template.ejs',
        appMountId: 'react-app-root',
        title: 'Shadowrun 5e Fansite',
        filename: resolve(__dirname, 'public', 'index.html'),
        favicon: 'src/images/favicon.ico',
      }),
    ],

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          enforce: 'pre',
          loader: 'eslint-loader',
          exclude: /node_modules/,
          options: {
            emitWarning: true,
            configFile: './.eslintrc.json',
          },
        },
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: [
              'react-hot-loader/babel',
              'styled-jsx/babel',
            ],
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader'],
        },
      ],
    },
  },
  {
    name: 'dev-server',
    //development, production or none
    mode: 'development',

    entry: [
      'react-hot-loader/patch',
      './src/index.jsx',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      resolve(__dirname, 'src') + '/index.jsx',
    ],

    output: {
      filename: 'app.bundle.js',
      path: resolve(__dirname, 'public'),
      publicPath: '',
    },

    resolve: {
      extensions: ['.js', '.jsx'],
    },

    devtool: 'eval-source-map',

    devServer: {
      hot: true,
      contentBase: resolve(__dirname, 'public'),
      publicPath: '/',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      },
      proxy: {
        '/default': {
          target: configApiUrl,
          secure: false,
          changeOrigin: true,
        },
      },
    },

    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        React: 'react',
        ReactDOM: 'react-dom',
        PropTypes: 'prop-types',
        Redux: 'redux',
      }),
      new webpack.DefinePlugin({
        APINAME: JSON.stringify(''),
      }),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: 'template.ejs',
        appMountId: 'react-app-root',
        title: 'Shadowrun 5e Fansite',
        filename: resolve(__dirname, 'public', 'index.html'),
        favicon: 'src/images/favicon.ico',
      }),
    ],

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          enforce: 'pre',
          loader: 'eslint-loader',
          exclude: /node_modules/,
          options: {
            emitWarning: true,
            configFile: './.eslintrc.json',
          },
        },
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: [
              'react-hot-loader/babel',
              'styled-jsx/babel',
            ],
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader'],
        },
      ],
    },
  },
];
