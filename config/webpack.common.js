const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appDirectory = fs.realpathSync(process.cwd());
const resolve = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
  /**
   * 告知 webpack 为目标(target)指定一个环境:
   *  如果一个项目有 browserslist 配置，那么 webpack 将会使用它：
   *    1、确定可用于运行时代码的 ES 特性。
   *    2、推断环境
   * */
  target: ['browserslist'],
  entry: resolve('src/index.tsx'),
  output: {
    path: resolve('dist'),
    filename: 'static/js/[name].[contenthash:8].js',
    clean: true,
    chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
    assetModuleFilename: 'static/media/[name].[hash][ext]',
  },
  infrastructureLogging: {
    level: 'none',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': resolve('src'),
      '@com': resolve('src/components'),
      '@assets': resolve('src/assets'),
    },
  },
  module: {
    strictExportPresence: true,
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
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      title: '橙子',
      favicon: resolve('public/orange.ico'),
      template: resolve('public/index.html'),
    }),
  ],
};
