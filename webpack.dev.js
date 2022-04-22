const { merge } = require("webpack-merge");
const common = require("./webpack.common.config");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    hot: true,
    open: true,
  },
  devtool: "eval-source-map",
});
