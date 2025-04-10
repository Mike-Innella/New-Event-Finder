const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Add this for HTML handling

module.exports = {
  entry: "./src/index.js", // Your entry point
  output: {
    path: path.resolve(__dirname, "dist"), // Output folder
    filename: "bundle.js", // Output file name
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
    static: path.resolve(__dirname, "dist"), // Serve static files from dist
    port: 3000, // Port to run the dev server
    open: true, // Automatically open the browser
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Template for HTML file
    }),
  ],
};
