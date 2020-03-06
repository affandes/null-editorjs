const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/null-editor.js",
    output: {
        umdNamedDefine: true,
        path: path.resolve(__dirname, "dist"),
        filename: "null-editor.js",
        library: "NullEditor",
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        query: {
                            presets: ["@babel/preset-env"],
                        },
                    },
                ]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                ]
            }
        ]
    },
    externals: [],
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.join(__dirname, "app")
    }
};