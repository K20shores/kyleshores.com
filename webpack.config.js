/* sharing variables in javascript and css: https://www.bluematador.com/blog/how-to-share-variables-between-js-and-sass */
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
}
