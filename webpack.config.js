const path = require('path');
//to make path need generate absolute path 

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'), //build == dist
    filename: 'bundle.js'
  }
};


module.exports = config;