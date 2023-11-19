// webpack.config.js
const path = require('path');

module.exports = {
  // other webpack configurations...

  module: {
    rules: [
      // other rules...

      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
};
