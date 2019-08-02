const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "js/bundle.js",
    path: __dirname + "/docs"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader"
        ]
      },
      {
        test: /\.(svg|png)$/,
        use: [
          {
            loader: "url-loader",
            options: { name: "assets/[name].[ext]", limit: true }
          }
        ]
      },
      {
        test: /\.ttf$/,
        use: [
          {
            loader: "url-loader",
            options: { name: "css/fonts/[name].[ext]", limit: true }
          }
        ]
      },
      { test: /\.html$/, loader: "html-loader" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html", inject: true }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    }),
    new CleanWebpackPlugin()
  ],
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin({}), new TerserJSPlugin({})]
  }
};
