const tailwindcss = require('tailwindcss');
const nesting =  require('postcss-nested');
const autoprefixer = require('autoprefixer');

const config = {
  plugins: [
    nesting(),
    tailwindcss(),
    autoprefixer
  ]
};

module.exports = config;