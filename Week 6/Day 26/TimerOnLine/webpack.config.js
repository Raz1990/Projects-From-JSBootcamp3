const path = require('path');

const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './app.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },
    resolve : {
        extensions: ['.ts','.tsx','.js']
    },
    plugins: [
        new OpenBrowserPlugin({ url: 'http://localhost:3000' })
    ]
};