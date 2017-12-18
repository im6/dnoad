const webpack = require('webpack');
const path = require('path');

module.exports = {
  watch: true,
  entry: `./src/index.js`,
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js'
  },
};