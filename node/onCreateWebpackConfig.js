const WebpackWindiCSSPlugin = require("windicss-webpack-plugin");
const merge = require("defu").arrayFn;

const defaultOptions = {
  scan: {
    exclude: ["node_modules", ".git", "dist", ".cache", ".temp"],
  },
};

module.exports = function onCreateWebpackConfig({ actions }, options) {
  actions.setWebpackConfig({
    plugins: [new WebpackWindiCSSPlugin(merge(options, defaultOptions))],
  });
};
