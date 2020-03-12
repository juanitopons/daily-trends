const webpack = require('webpack');
const path = require('path');

const prodWebpackConfig = {
  output: {
    path: path.resolve('./dist'),
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [],
  },
  devtool: 'hidden-source-map',
  stats: 'errors-only',
  mode: 'production',
  optimization: {
    nodeEnv: 'production',
    runtimeChunk: 'single',
    occurrenceOrder: true,
    noEmitOnErrors: true,
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin({
      hashFunction: 'sha256',
      hashDigest: 'hex',
      hashDigestLength: 4,
    }),
  ],
};

module.exports = prodWebpackConfig;
