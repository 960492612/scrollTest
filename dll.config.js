const webpack = require("webpack");
const path = require("path");
const joinDir = p => path.join(__dirname, p);
const config = {
    entry: {
        bundle1: [
            "vuex"
        ],
    },
    output: {
        path: joinDir("./dist/js"),
        filename: "[name].[hash].js",
        library: "[name]_[hash]"
    },
    mode: process.env.NODE_ENV,
    plugins: [
        new webpack.DllPlugin({
            path: joinDir(`./dllWebpckPlugin/${process.env.NODE_ENV}/[name].manifest.json`),
            name: "[name]_[hash]",
        })
    ]
};
module.exports = config;