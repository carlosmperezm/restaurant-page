const { merge } = require("webpack-merge");
const commonFile = require("./webpack.common.js");

module.exports = merge(commonFile, {
  mode: "production",
})
