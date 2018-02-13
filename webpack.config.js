const path = require('path');

const CLIENT_DEST = path.join(__dirname, './client/dist');

module.exports = {
    entry: './client/src/index.js',
    output: { path: CLIENT_DEST, filename: 'bundle.js' },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['env', 'react']
                }
            }, {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ], 
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}