module.exports = {
  input: "./src/css/app.css",
  output: "./static/css/bundle.css",
  use: [
    "postcss-import",
    "postcss-custom-properties",
    "postcss-custom-media",
    "postcss-nesting",

    "autoprefixer",
    "postcss-flexbugs-fixes",
    "postcss-sorting",
    "csswring"
  ],
  autoprefixer: {
    browsers: [
      "last 2 versions",
      "safari >= 7"
    ]
  }
};