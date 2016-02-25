var path = require('path');
var webpack = require('webpack');

var publicPath = "/assets/";

var srcPath = path.join(__dirname, '/src');

var port = 9100;

module.exports = {
    port: port,
    entry: [
      'webpack-hot-middleware/client',
      './src/js/Main.jsx'
    ],
    devtool: 'eval',
    cache: true,
    output: {
        path: path.join(__dirname, '/dist/assets'),
        filename: 'bundle.js',
        publicPath: publicPath
    },
    devServer: {
      contentBase: './src/',
      historyApiFallback: true,
      hot: true,
      port: port,
      publicPath: publicPath,
      noInfo: false,
      stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false
      }
    },
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: ["react-hot", "babel-loader?{'presets':['react','es2015']}"],
                include: srcPath
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!resolve-url!sass-loader?sourceMap&outputStyle=expanded'
            },
            {
                test: /\.svg$/,
                loader: 'url-loader'
            },
            {
                test: /\.json$/,
                loader: "json"
            }
        ]
    }
};
