const config = require('./config');

const {
  hotLoader: {
    host: hotHost,
    port: hotPort,
  },
} = config;

module.exports = {
  entry: [
    // `webpack-dev-server/client?http://${hotHost}:${hotPort}`,
    'babel-polyfill',
    './src/index.js',
  ],
  output: {
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader?cacheDirectory',
      }, {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(scss|sass|css)$/,
        loader: 'style-loader!css-loader!sass-loader?cacheDirectory',
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.scss'],
    modules: [
      'src',
      'node_modules',
    ],
  },
  devServer: {
    open: true,
  },
};
