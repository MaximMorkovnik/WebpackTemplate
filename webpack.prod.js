const path = require('path');
const commonConfig = require('./webpack.common');
const webpackMerge = require('webpack-merge');
const clean = require('clean-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = webpackMerge.merge(commonConfig, {
    mode: "production",
    output: {
        filename: "scripts/[name].[contentHash].bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: './'
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        minimizer: [
            new CssMinimizerWebpackPlugin(),
            new TerserPlugin()
        ]
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
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
            base: './',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: "styles/[name].[contentHash].css"
        }),
        new clean.CleanWebpackPlugin()
    ]
});