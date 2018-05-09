import webpack from 'webpack';
import htmlWebpackPlugin from 'html-webpack-plugin';
import liveReloadPlugin from 'webpack-livereload-plugin';

export default {
    mode : 'none',
    entry : './src/index.js',
    output : {
        path: __dirname,
        filename : './public/javascripts/bundle.js'
    },
    module : {
        rules : [
            {
                use : 'babel-loader',
                test : /\.js$/,
                exclude : /node_modules/
            },
            {
                use : ['style-loader','css-loader'],
                test : /\.css$/,
            },
            {
                test: [/\.svg$/, /\.gif$/, /\.jpeg$/, /\.png$/],
                loader: "file-loader",
            },
            {
                test : /\.scss$/,
                use : [
                    {
                        loader : 'style-loader'
                    },
                    {
                        loader : 'css-loader', options: {
                            sourceMap : true
                        }
                    },
                    {
                        loader : 'sass-loader', options: {
                            sourceMap : true
                        }
                    }
                ]
            }
        ]
    },
    plugins : [
        new htmlWebpackPlugin({
            template: './public/index.html'
        }),
        new liveReloadPlugin()
    ]
}