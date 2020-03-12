const webpack = require('webpack');
const path = require('path');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const nodeExternals = require('webpack-node-externals');
const { magenta, green, white, bgCyan } = require('chalk');
const { info } = require('log-symbols');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

function getProgressBarEnvFormat(env) {
  const barLeft = magenta.dim.bold('[');
  const barRight = magenta.dim.bold(']');
  const envChalk = magenta.dim(env);
  const preamble = `${green(
    '  building dailytrends server',
  )} ${barLeft}${envChalk}${barRight} ${info}`;
  return preamble + ' :bar' + white.bold(' :percent') + '\n';
}

function getCleanEnvOptions(env) {
  const cleanOptions = {
    root: path.resolve('dist'),
    verbose: env === 'development',
    dry: false,
  };

  return cleanOptions;
}

module.exports = (env) => {
  const cleanOptions = getCleanEnvOptions(env);
  const barFormat = getProgressBarEnvFormat(env);
  const nodemodulesPath = path.resolve('node_modules');

  return {
    entry: path.resolve('src') + '/server.ts',
    output: {
      path: path.resolve('dist'),
      filename: 'server.js',
    },
    target: 'node',
    externals: [nodeExternals()],
    node: {
      __dirname: false, // if you don't put this is, __dirname
      __filename: false, // and __filename return blank or /
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: nodemodulesPath,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                cacheDirectory: env !== 'production',
                compact: false,
              },
            },
            {
              loader: 'ts-loader',
              options: {
                // disable type checker - we will use it in fork plugin
                transpileOnly: true,
                configFile: 'tsconfig.webpack.json',
              },
            },
          ],
        },
        {
          test: /\.(js|jsx)$/,
          enforce: 'pre',
          use: [
            {
              options: {
                eslintPath: require.resolve('eslint'),
              },
              loader: require.resolve('eslint-loader'),
            },
          ],
          exclude: nodemodulesPath,
        },
        {
          test: /\.(js|jsx)$/,
          exclude: nodemodulesPath,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                cacheDirectory: env !== 'production',
                compact: false,
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    plugins: [
      new CleanWebpackPlugin(cleanOptions),
      new ForkTsCheckerWebpackPlugin({ eslint: true }),
      new FriendlyErrorsWebpackPlugin(),
      new ProgressBarPlugin({
        format: barFormat,
        complete: bgCyan(' '),
        imcomplete: ' ',
      }),
      new HardSourceWebpackPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new Dotenv({
        path: path.resolve('./config/env/.env'),
        safe: path.resolve('./config/env/.env.example'),
        systemvars: true,
        silent: false,
        defaults: false,
      }),
    ],
  };
};
