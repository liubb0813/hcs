const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/index.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "env",
                            "stage-1"
                        ],
                        plugins: [
                            "syntax-dynamic-import"
                        ]
                    }
                },
                include: path.resolve(__dirname, '../src')
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        },
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.(jpg|png|svg|jpeg|gif|ttf|woff)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        name: 'assets/[name].[ext]',
                        limit: 1024 * 20
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            'vue': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
        }
    }
}