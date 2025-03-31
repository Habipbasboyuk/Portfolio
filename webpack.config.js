const path = require('path');

module.exports = {
    mode: 'development', // Zet op 'production' voor optimalisatie
    entry: './scripts/css/main.css', // Je CSS-bestand als entrypoint
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js', // Dit is verplicht door Webpack, zelfs als je geen JavaScript hebt
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'] // Gebruik de loaders voor CSS
            }
        ]
    }
};

