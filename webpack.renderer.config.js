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
  test: /\.(ttf|otf)$/,
  use: [{
    loader: "url-loader",
    options: {
      limit: 100000
    }
  }]
}, {
  test: /\.(png|jpg|gif)$/i,
  use: [{
    loader: "url-loader",
    options: {
      limit: 8192
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