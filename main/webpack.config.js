const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  entry: [
    'webpack/hot/poll?1000',
    path.resolve(__dirname, 'src', 'index.js'),
  ].filter(Boolean),
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, '..'),
      'node_modules'
    ],
    extensions: [ '.js' ]
  },
  target: 'node',
  watch: true,
  externals: [
    nodeExternals({
      whitelist: [
        'webpack/hot/poll?1000'
      ]
    })
  ],
  plugins: [
    new StartServerPlugin('index.js'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ].filter(Boolean)
};
