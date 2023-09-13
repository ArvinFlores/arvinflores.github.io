const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'AmmaTek',
      template: path.join(__dirname, '../static', 'index.html'),
      inject: 'body',
      scriptLoading: 'blocking'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(?:js|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }],
            ]
          }
        }
      },
      {
        test: /\.(ts)$/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: { plugins: ['autoprefixer'] }
            }
          }
        ],
      }
    ]
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, '../src/'),
    },
    extensions: ['.js', '.ts']
  }
};
