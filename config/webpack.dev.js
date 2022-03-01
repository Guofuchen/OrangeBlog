const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  cache: true,
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    open: true,
    host: process.env.HOST || '127.0.0.1',
    port: parseInt(process.env.PORT, 10) || 3000,
    hot: true,
    historyApiFallback: true, // 所有的404都到index.html
    proxy: {
      '/api': {
        target: 'http://baidu.com',
        changeOrigin: true,
      },
    }
  }
});
