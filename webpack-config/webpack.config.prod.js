const {merge} = require('webpack-merge');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const common = require('./webpack.config.common');

const cleanCSS = require('clean-css');


const config = {
    plugins: [
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: cleanCSS,
            cssProcessorPluginOptions: {
                preset: ['default', {discardComments: {removeAll: true}}]
            },
            canPrint: true
        })
    ],
    optimization: {
        runtimeChunk: {
            name: 'runtime'
        },
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'venders',
                    chunks: 'all'
                }
            }
        },
        minimize: true,
        minimizer: [new TerserWebpackPlugin({
            cache: true
        })]
    },
    mode: 'production'
}

module.exports = merge(common, config);