const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base = require('./webpack.base.config');

const getConfig = (moduleName, port, entry) => ({
  context: path.resolve(__dirname, '../'),
  devtool: 'eval-source-map',
  entry: {
    hot: [
      // bundle the client for webpack-dev-server
      // and connect to the provided endpoint
      // `webpack-dev-server/client?http://localhost:${port}`,
      // activate HMR for React
      'webpack/hot/dev-server',
      'react-hot-loader/patch',
      // bundle the client for hot reloading
      // only- means to only hot reload for successful updates
    ],
    main: [
      // the entry point of our app
      // './core/src/index.js',
      entry,
    ],
  },
  mode: 'development',
  output: {
    path: `${__dirname}/__build__${moduleName || ''}`,
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].chunk.js',
    publicPath: '/',
    globalObject: 'this',
  },
  target: 'web',
  cache: true,
  module: base,
  resolve: {
    unsafeCache: true,
    extensions: ['.js'],
    modules: [
      'node_modules',
      path.join(__dirname, '../src'),
    ],
  },
  plugins: [
    {
      apply: (compiler) => {
        compiler.hooks.done.tap('Progress', (compilation) => {
          console.log(`\n Compilation took ${((compilation.endTime - compilation.startTime) / 1000)} s`);
        });
      },
    },
    new webpack.HotModuleReplacementPlugin(),
    new webpack.SourceMapDevToolPlugin(),
    // new webpack.NamedModulesPlugin(),
    //    new webpack.ContextReplacementPlugin(
    //      /.*lib/,
    //      "../../../../../lib/",
    //      true,
    //      /^\.\/.*.src.*\..*js/
    //    ),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NO_AUTH: process.env.NO_AUTH ? process.env.NO_AUTH : false,
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      },
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: true, // Inject all files that are generated by webpack, e.g. bundle.js
      chunksSortMode: 'dependency',
    }),
    new CopyWebpackPlugin([
      { from: 'src/images/favicon.png', to: 'favicon.png' },
//      { from: 'scripts/injectExternalScripts.js', to: 'injectExternalScripts.js' },
//      { from: 'analytics_tools', to: 'analytics_tools' },
    ], { copyUnmodified: true }),
  ],
  externals: {
    'css-loader': 'css-loader',
    cheerio: 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
});

module.exports = getConfig;
