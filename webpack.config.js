/*
 * this config file helps configure webpack
 * instead of writting in cli pretty much
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const isProd = process.env.NODE_ENV === "production";
// const webpack = require('webpack')
module.exports = {
  // entry tells us where the app starts
  mode: isProd ? "production" : "development",
  entry: "./src/index.js",
  // output as clear as day tells us where the distribution file goes
  // and what the dist file is gonna be (main.js)
  output: { filename: "main.js", path: path.resolve(__dirname, "dist") },

  // DEV TOOLS
  // pretty much better for me to debug and hot reload goes here
  devtool: isProd ? "source-map" : "eval-source-map",
  devServer: {
    port: 5000,
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    hot: true,
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  // over here i defined the modules
  // basically what they do is the scan the file in the tree
  // and based on the test case
  // they apply the transformations by the loader defined in use
  // so for js -> babel
  // for css related things -> post css, css loader , style loader
  // and apparently i can use multiple ones like done in the css and
  // it applies them chained from last to first
  //
  module: {
    rules: [
      /* {
        test: /\.css$/i,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      }, */
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        exclude: /node_modules/,
        type: "asset/resource",
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [require("@emotion/babel-plugin")],
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Umm something?",
      template: "./src/index.html",
    }),
    new Dotenv({ path: isProd ? "./.env.prod" : "./.env.dev" }),
  ],
};
