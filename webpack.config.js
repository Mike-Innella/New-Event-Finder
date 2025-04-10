const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Your entry point
  output: {
    path: path.resolve(__dirname, "dist"), // Output folder
    filename: "bundle.js", // Output file name
    publicPath: "/", // Make sure assets are served from the root of the server
  },
  resolve: {
    extensions: [".js", ".jsx"], // Handle .js and .jsx extensions
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Transpile JSX and JS files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], // Use Babel presets
          },
        },
      },
      {
        test: /\.css$/, // Handle CSS files
        use: ["style-loader", "css-loader"], // Inject styles into the DOM
      },
    ],
  },
  devServer: {
    static: path.resolve(__dirname, "public"), // Serve static files from the public folder
    port: 3000, // Port to run the dev server
    open: true, // Automatically open the browser
    historyApiFallback: true, // Handle client-side routing in React
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Template for HTML file
    }),
  ],
};
