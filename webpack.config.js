const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

const config = {
    mode: "development",
    entry: {
        app: "./src/ts/gochiucycle.ts",
    },
    output: {
        path: path.resolve(__dirname + "/dist"),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: [
                    /node_modules/,
                    /dist/
                ]
            },
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
    resolve: {
        extensions: ['.tsx','.ts','.js']
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "./src/image",
                    to: "./image"
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
