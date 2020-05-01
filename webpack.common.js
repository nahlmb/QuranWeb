const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        main: ["@babel/polyfill", "./src/index.js"],
        detail: ["@babel/polyfill", "./src/detail.js"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            chunks: ["main"],
            filename: "index.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/detail.html",
            chunks: ["detail"],
            filename: "detail.html"
        }),
        new CopyPlugin([
            {
                from: path.resolve(__dirname, 'src/image'),
                to: path.resolve(__dirname, 'dist/src/image')
            }
        ])
    ]
};