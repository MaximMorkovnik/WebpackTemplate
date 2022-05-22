const path = require('path');
const commonConfig = require('./webpack.common');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = webpackMerge.merge(commonConfig, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
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
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
            chunks: ['index'],
            base: './'
        })
    ]
});