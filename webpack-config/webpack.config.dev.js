const {merge} = require('webpack-merge');
const common = require('./webpack.config.common');

const config = {
    mode: 'development',
    devServer: {
        open: false,
        overlay: true,
        contentBase: __dirname + "/dist/",
        inline: true,
        hot: true,
        host: "localhost",
        historyApiFallback: true,
        port: 3000,
    },
}

module.exports = merge(common, config);