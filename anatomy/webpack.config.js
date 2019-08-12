const path = require('path');

module.exports = {
  entry: {
    ['aetna-button']: path.resolve(__dirname, 'src/aetna-button.js'),
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      // Global styles css configuration
      {
        test: /\.css$/,
        use: [
          {
            loader: 'raw-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        include: path.resolve(__dirname, 'node_modules/@aetnadigital'),
        use: [
          { loader: 'svg-sprite-loader' },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                { removeTitle: false },
              ],
            },
          },
        ],
      },
    ],
  },
};
