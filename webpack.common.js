/**
 * DemoApp
 * webpack.common.js
 * Created by Sıdıka ÇAY on 2019-06-25
 */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.jsx",
    output: {
        filename: "bundle.js",
        chunkFilename: "[name].bundle.js",
        path: path.resolve(__dirname, "public"),
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true
                    }
                }]
            },
            {
                test: /\.jsx?$/,
                loader: "react-hot-loader/webpack"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./templates/index.html"
        }),
        new webpack.DefinePlugin({
            "process.env.mode": JSON.stringify(process.env.mode)
        })
    ],
    resolve: {
        alias: {
            "react-dom": "@hot-loader/react-dom"
        },
        extensions: [".js", ".jsx", ".json"]
    }
};
