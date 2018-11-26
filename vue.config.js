const webpack = require('webpack')
const DllPlugin = require("dll-webpack-plugin");
module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  configureWebpack:{
    plugins:[
      new DllPlugin({
        dllConfig: require("./dll.config.js")
    }),
    ]
  }
};
