const WebpackShellPlugin = require('webpack-shell-plugin');
const path = require('path');
const nodemodulesPath = path.resolve('node_modules');

const devWebpackConfig = {
  optimization: {
    noEmitOnErrors: true,
    nodeEnv: 'development',
  },
  module: {
    rules: [],
  },
  devtool: 'eval-source-map',
  stats: {
    modules: false,
    assets: false,
    colors: true,
    chunks: false,
    chunkOrigins: false,
    chunkModules: false,
    depth: false,
    entrypoints: false,
    env: true,
    errors: true,
    errorDetails: true,
    performance: false,
    timings: true,
    version: true,
    warnings: true,
  },
  mode: 'development',
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: nodemodulesPath,
  },
  plugins: [new WebpackShellPlugin({ onBuildEnd: ['npm run nodemon'] })],
};

module.exports = devWebpackConfig;
