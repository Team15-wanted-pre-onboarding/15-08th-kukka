const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'PRODUCTION';
module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                  "style-loader", 
                  "css-loader", 
                  "sass-loader" 
                ]  
            }, {
                test: /\.hbs$/,
                use: ['handlebars-loader']
            }, {
                test: /\.(png|jpg?g|gif)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name() {
                            if(!isProduction) {
                                return '[path][name].[ext]';
                            } 
                            return '[contenthash].[ext]';
                        },
                        publicPath: 'img/',
                        outpath: 'img/'
                    }
                }]
            }, {
                test: /\.svg/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            }, {
                test: / .js/,
                exclude: /node-modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'kukka-project',
            template: './template.hbs',
            meta: {
                author: "CHOI",
                description: "This site is where people see a various of flower's info",
                viewport: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1'
            },
            minify: isProduction ? {
                collapseWhitespace: true,
                useShortDoctype: true,
                removeScriptTypeAttributes: true
            } : false
        }),
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            IS_PRODUCTION: isProduction
        }),
        new MiniCssExtractPlugin()
    ]
}
