// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("path");

module.exports = {
    entry: "./src/javascript/script.ts",
    output: {
        path: path.resolve(__dirname, "src"),
        filename: "main.js",
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "./"),
        },
        devMiddleware: {
            writeToDisk: (filePath) => {
                return !/hot-update/.test(filePath);
            },
        },
        port: 3000,
        open: true,
        liveReload: true,
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-typescript"],
                        plugins: ["@babel/plugin-transform-runtime"],
                    },
                },
            },
        ],
    },
};
