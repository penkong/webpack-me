//to make path need generate absolute path 
const path = require('path');
//that make css files or any text file from js files separate in html and
// import there.
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'), //build == dist
    filename: 'bundle.js',
    //add public path for large files and stuffs
    publicPath: 'build/'
  },
  module: { //loaders ==   also use == loader
    rules: [{
        use: 'babel-loader',
        test: /\.js$/
      },
      { //order is from right to left, to load on html, to load css by webpack
        //plugin word use with loader help separation
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader'
        }),
        test: /\.css$/
      },
      { //image webpack loader is image resized url-loader make decision dou to size put it in bundle or not
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [ //url need more configuration define size here
          {
            loader: 'url-loader',
            options: {
              limit: 40000
            } //40kb > make new file for it
          },
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [ //any file by top processed catch and export it to style.css file by yourself
    new ExtractTextPlugin('style.css')
  ]

};


module.exports = config;