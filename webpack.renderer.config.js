const rules = require("./webpack.rules");
const plugins = require("./webpack.plugins");

rules.push({
  test: /\.(sc|c)ss$/i,
  use: [{
      loader: "style-loader"
    },
    {
      loader: "css-loader"
    },
    {
      loader: "sass-loader"
    }
  ]
});

rules.push({
  test: /\.(png|jpg|gif|ttf)$/i,
  use: [{
    loader: "file-loader",
    options: {
      name: '[name]-[hash].[ext]',
      outputPath: 'static',
      publicPath: '../static'
    }
  }]
});

module.exports = {
  module: {
    rules
  },
  plugins: plugins,
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css"]
  }
};