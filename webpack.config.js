const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

const config = {
    mode: "development",
    entry: {
        app: "./src/js/gochiucycle.js",
    },
    output: {
        path: path.resolve(__dirname + "/dist"),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.scss/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                            importLoaders: 2
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "./src/image",
                    to: "./image"
                },
                {
                    from: "./src/js/config.json",
                    to: "./js",
                },
            ],
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
        }),
    ],
};
module.exports = config;
