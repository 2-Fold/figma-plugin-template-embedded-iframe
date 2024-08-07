const HtmlWebpackPlugin = require("html-webpack-plugin");
const InlineChunkHtmlPlugin = require("inline-chunk-html-plugin");
const DefinePlugin = require("webpack").DefinePlugin;
const path = require("path");

module.exports = (env, argv) => {
  console.log("THIS IS THE ENV", env);
  console.log("THIS IS THE ARGV", argv);
  return {
    mode: argv.mode === "production" ? "production" : "development",

    // This is necessary because Figma's 'eval' works differently than normal eval
    devtool: argv.mode === "production" ? false : "inline-source-map",

    entry: {
      ui: "./src/app/index.tsx", // The entry point for your UI code
      code: "./src/plugin/controller.ts", // The entry point for your plugin code
    },

    module: {
      rules: [
        { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },

        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
              },
            },
            "postcss-loader",
          ],
        },

        { test: /\.(png|jpg|gif|webp|svg)$/, loader: "url-loader" },
      ],
    },

    resolve: { extensions: [".tsx", ".ts", ".jsx", ".js", ".d.ts"] },

    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "dist"),
    },

    plugins: [
      new HtmlWebpackPlugin({
        inject: "body",
        template: "./src/app/index.html",
        filename: "ui.html",
        cache: false,
      }),
      new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/ui/]),
      new DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(argv.mode),
        "process.env.URL": JSON.stringify(env.URL),
      }),
    ],
  };
};
