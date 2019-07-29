/**
 * DemoApp
 * webpack.dev.config.js
 * Created by Sıdıka ÇAY on 2019-06-20
 */

const config = require("./webpack.common");
const webpack = require("webpack");

config.mode = "development";

config.entry = [
    "webpack-hot-middleware/client",
    "webpack/hot/only-dev-server"
].concat(config.entry);

config.plugins = [
    ...config.plugins,
    new webpack.HotModuleReplacementPlugin(),
];

module.exports = config;
