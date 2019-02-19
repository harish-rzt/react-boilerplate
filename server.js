/* eslint-disable no-console */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const getProdConfig = require('./webpack/webpack.prod.config.js');
const getDevConfig = require('./webpack/webpack.dev.config.js');

const PORT = (process.env.PORT || 8000);
const API_HOST = (process.env.API_HOST || '192.168.60.68');
const API_PORT = (process.env.API_PORT || '');
const MODULE_NAME = (process.env.MODULE_NAME || 'Default');
const apiProtocol = process.env.API_PROTOCOL || 'http';
const api = `${apiProtocol}://${API_HOST}${API_PORT ? `:${API_PORT}` : ''}`;
const config = process.env.NODE_ENV=='development'?getDevConfig(
  MODULE_NAME,
  PORT,
  process.env.ENTRY || ['./src/index.js', './src/containers/App/App.js'],
  ['react', 'react-dom', 'redux', 'react-redux', 'immutable']
):getProdConfig({
  moduleName: MODULE_NAME,
  buildFolder:'dist',
  entry:process.env.ENTRY || ['./src/index.js', './src/containers/App/App.js'],
  vendor:['react', 'react-dom', 'redux', 'react-redux', 'immutable']});
process.on('uncaughtException', (err) => {
  console.error(err.stack);
  console.log('Node NOT Exiting...');
});

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: false,
  historyApiFallback: true,
  noInfo: false,
  stats: 'minimal',
  inline: true,
  overlay: {
    warnings: false,
    errors: true,
  },
  // host: API_HOST,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/,
  },
  proxy: {
    '/rest/permissions': {
      target: 'http://192.168.50.97:9000/',
      changeOrigin: true,
    },
  },
}).listen(PORT, '0.0.0.0', (err) => {
  if (err) console.error(err);
  console.info(`Starting ${MODULE_NAME}`);
  console.info(`Listening at http://localhost:${PORT}`);
  console.info('API: ', api);
}).timeout = 240000;
