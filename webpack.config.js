// Autogenerated by @xamdes/project-generator
const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
require('@babel/polyfill');

const configApiUrl = '';

module.exports = [
  {
    name: 'production',
    //development, production or none
    mode: 'production',

    entry: [
      'react-hot-loader/patch',
      '@babel/polyfill',
      './src/index.jsx',
      resolve(__dirname, 'src') + '/index.jsx',
    ],

    output: {
      filename: 'app.bundle.js',
      path: resolve(__dirname, 'build'),
      publicPath: '',
    },

    resolve: {
      extensions: ['.js', '.jsx'],
    },

    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          parallel: true,
          uglifyOptions: {
            drop_console: true,
            keep_infinity: true,
            mangle: true,
            compress: {
              passes: 3,
            },
            warnings: false,
            output: {
              comments: false,
            },
          },
        }),
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
      new webpack.NamedModulesPlugin(),
      new HtmlWebpackPlugin({
        template: 'template.ejs',
        appMountId: 'react-app-root',
        title: 'Shadowrun 5e Fansite',
        filename: resolve(__dirname, 'build', 'index.html'),
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
              ['@babel/plugin-proposal-class-properties', { loose: true }],
            ],
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
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
      '@babel/polyfill',
      './src/index.jsx',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      resolve(__dirname, 'src') + '/index.jsx',
    ],

    output: {
      filename: 'app.bundle.js',
      path: resolve(__dirname, 'build'),
      publicPath: '',
    },

    resolve: {
      extensions: ['.js', '.jsx'],
    },

    devtool: 'eval-source-map',

    devServer: {
      hot: true,
      contentBase: resolve(__dirname, 'build'),
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
      new webpack.NamedModulesPlugin(),
      new HtmlWebpackPlugin({
        template: 'template.ejs',
        appMountId: 'react-app-root',
        title: 'Shadowrun 5e Fansite',
        filename: resolve(__dirname, 'build', 'index.html'),
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
              ['@babel/plugin-proposal-class-properties', { loose: true }],
            ],
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  },
];
