const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
  mode: 'development',
  entry: path.resolve('src/index.tsx'),
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    open: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      title: '橙子',
      favicon: resolveApp('public/orange.ico'),
      template: resolveApp('public/index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              cacheDirectory: true, // 开启 babel-loader 持久化缓存功能
              exclude: /node_modules/,
            },
          },
          {
            loader: require.resolve('ts-loader'),
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': resolveApp('src'),
      '@com': resolveApp('src/components'),
      '@assets': resolveApp('src/assets'),
    },
  },
};
