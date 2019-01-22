const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: 'PopupInfo.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            { 
                test:/\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                  ]
            }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    plugins: [
        new WriteFilePlugin(),
        new MiniCssExtractPlugin({ filename: "PopupInfo.css"})
    ]
};