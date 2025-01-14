var debug = process.env.NODE_ENV !== "production";
var webpack = require("webpack");
var path = require("path");

module.exports = {
  mode: "development",
  context: path.join(__dirname, "src"),
  entry: "./js/App.jsx",
  // entry: "./demoJs/index.tsx",
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".jsx", "css"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react", "@babel/preset-env"],
            },
          },
        ],
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
      { test: /\.ts$/, use: "ts-loader" },
      { test: /\.tsx$/, use: "ts-loader" },
    ],
  },
  output: {
    // path: __dirname + "/src/demoJs/",
    path: __dirname + "/src/js/",
    libraryTarget: "commonjs2",
    filename: "bundle.min.js",
    // filename: "demo.min.js",
    chunkFilename: "go-react.min.js",
  },
  plugins: debug
    ? []
    : [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
          mangle: false,
          sourcemap: false,
        }),
      ],
};
