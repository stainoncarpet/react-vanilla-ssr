const path = require("path");

module.exports = {
    entry: './src/server/server.js',
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'server'),
    },
    mode: 'production',
    target: 'node',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    }
};