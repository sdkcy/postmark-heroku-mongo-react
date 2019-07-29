/**
 * Backend
 * app.js
 * Created by Sıdıka ÇAY on 2019-07-02
 */

const express = require("express");
const app = express();
const cors = require("cors");

const router = require("./backend/routes");
const middleware = require("./backend/middlewares");
const server = require("./backend/config/app.json").server;
const port = process.env.PORT || server.port;

if (process.env.mode === "development") {
    const middleware = require("webpack-dev-middleware");
    const webpack = require("webpack");

    const config = require("./webpack.dev.config");
    const compiler = webpack(config);
    const options = {
        contentBase: "./public",
        publicPath: config.output.publicPath,
        hot: true,
        watchOptions: {
            poll: 300,
            ignored: /node_modules/
        },
        historyApiFallback: true
    };
    app.use(middleware(compiler, options));
    app.use(require("webpack-hot-middleware")(compiler));
    app.use("/", express.static("./public"));
}

app.use(cors());
app.use(express.json());
app.use(express.static("./public"));

if (process.env.mode === "development") {
    app.use(middleware.logger);
}

app.use(router);

if (process.env.mode === "development") {
    app.use(middleware.errorLogger);
}

app.listen(port, () => {
    console.log("Server listening...", port);
});

module.exports = app;
