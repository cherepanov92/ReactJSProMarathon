const webpackClientConfig = require('./webpack.client.conf');
const webpackServerConfig = require('./webpack.server.conf');

module.exports = [
    webpackClientConfig,
    webpackServerConfig
]