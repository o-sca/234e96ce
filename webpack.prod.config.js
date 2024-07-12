const path = require("path");
const glob = require("glob");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniPlugin = require("mini-css-extract-plugin");
const PurgeCSSPlugin = require("purgecss-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const resolve = (filepath) => path.resolve(__dirname, filepath);

const PATHS = {
  src: path.join(__dirname, "src"),
};

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: resolve("dist"),
    filename: "scripts/[name].js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      { test: /\.js(|x)$/, loader: "babel-loader", exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: [
          MiniPlugin.loader,
          { loader: "css-loader", options: { sourceMap: true } },
          "postcss-loader",
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        extractComments: false,
      }),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new MiniPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[id].css",
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
    }),
    new OptimizeCssAssetsPlugin(),
  ],
};
