const path = require('path');

module.exports = {
    mode: 'development',
    entry: './firebase.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './dist/bundle.js',
    },
    watch: true,
}