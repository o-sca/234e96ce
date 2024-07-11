/*
 * @Author: 张棱隆
 * @Date: 2020-08-05 13:38:24
 * @LastEditors: 张棱隆
 * @LastEditTime: 2020-08-05 15:50:39
 * @Description: development
 */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const resolve = (filepath) => path.resolve(__dirname, filepath);
const path = require("path");

module.exports = {
  mode: "development",
  devServer: {
    port: 3000,
    open: false,
    hot: true,
    quiet: false
  },
  entry: "./src/index.js",
  output: {
    path: resolve("dist"),
    filename: "scripts/[name].js"
  },
  resolve: {},
  module: {
    rules: [
      { test: /\.js(|x)$/, loader: "babel-loader", exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new webpack.HotModuleReplacementPlugin({})
  ]
};
