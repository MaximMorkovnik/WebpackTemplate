module.exports = {
    entry: {
        index: "./src/scripts/index.js",
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpeg|jpg|gif)$/i,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "images"
                    }
                }
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "fonts"
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
}