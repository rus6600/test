const path = require('path');

module.exports = [
    {
        entry: "./src/client/index.tsx",
        mode: 'development',
        target: "web",
        output: {
            path: path.resolve(__dirname, 'dist/client'),
            filename: "client_bundle.js"
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js", "jsx"]
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    use: 'ts-loader',
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', "@babel/preset-react","@babel/preset-typescript"]
                        }
                    },
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.(png|jpg|gif|svg|ttf)$/i,
                    type: 'asset/resource',
                }
            ]
        }
    }

]