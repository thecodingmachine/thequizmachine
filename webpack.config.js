var path = require('path'),
    CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {
    entry: path.resolve(__dirname, 'src/app/app.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: [ 'react', 'es2015', 'stage-3' ]
                }
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'src/index.html'),
                to: path.resolve(__dirname, 'dist/index.html')
            },
            {
                from: path.resolve(__dirname, 'src/vendor'),
                to: path.resolve(__dirname, 'dist/vendor'),
            }
        ])
    ]
};

module.exports = config;
