/* eslint-disable no-console */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const getConfig = require('./webpack/webpack.dev.config.js');

const PORT = (process.env.PORT || 8000);
const API_HOST = (process.env.API_HOST || '52.90.104.163');
const API_PORT = (process.env.API_PORT || '');
const MODULE_NAME = (process.env.MODULE_NAME || 'Default');
const apiProtocol = process.env.API_PROTOCOL || 'http';
const api = `${apiProtocol}://${API_HOST}${API_PORT ? `:${API_PORT}` : ''}`;
const config = getConfig(MODULE_NAME, PORT, process.env.ENTRY || './src/index.js');
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
    '/rest/roles': {
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
