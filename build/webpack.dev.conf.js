const baseWebpackConfig = require('./webpack.base.conf');
const merge = require('webpack-merge');

module.exports = merge(baseWebpackConfig, {
    devServer: {
        port: 8080,
        host: '0.0.0.0',
        overlay: {
            errors: true
        },
        historyApiFallback: {
            index: '/index.html'
        }
    }
});