const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const { dependencies } = require('./package.json')
module.exports = {
  entry: "./lib.js",
  mode: "development",
  devtool: "hidden-source-map",
  output: {
    path: path.join(__dirname, 'public/lib'),
    clean: true,
  },
  resolve: {
    extensions: [
      ".jsx",
      ".js",
      ".json",
      ".css",
      ".scss",
      ".jpg",
      "jpeg",
      "png",
    ],
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        loader: "url-loader",
      },
      {
        test: /\.(css)$/,
        use: [
          require.resolve('style-loader'),
          require.resolve('css-loader'),
        ],
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "lib_app",
      filename: "remoteEntry.js",
      exposes: Object.keys(dependencies).reduce((map, key) => ({
          ...map,
          [`./${key}`]: [key]
      }), {})
    }),
  ],
};
