const path = require('path');

module.exports = {
  entry: {
    anatomy: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
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
            loader: 'css-loader',
            options: {
              localIdentName: '[name]__[local].[hash:base64:5]',
              modules: true,
              importLoaders: 1,
              sourceMap: true,
            },
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
