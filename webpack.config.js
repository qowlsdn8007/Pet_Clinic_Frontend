const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

const prod = process.env.NODE_ENV === "production";

module.exports = {
  mode: prod ? "production" : "development",
  devtool: prod ? "hidden-source-map" : "eval",
  entry: "./index.tsx",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },

  ///webpack-dev-server
  devServer: {
    historyApiFallback: true,
    inline: true,
    port: 3000,
    hot: true,
    publicPath: "/",
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: ["babel-loader", "ts-loader"],
      },
      {
        test: /\.(css)$/, // 순수한 CSS 파일과 구분하고 싶다면 pcss를 사용해도 좋다. 대개 그냥 .css 확장자를 사용한다.
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },

  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new webpack.HotModuleReplacementPlugin(), // 핫팩 설정
  ],
};
