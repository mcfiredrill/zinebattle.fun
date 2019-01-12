// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'app.js': /^app/
    }
  },
  stylesheets: {joinTo: 'app.css'}
};

exports.plugins = {
  babel: {presets: ['latest']},
  sass: {
    options: {
      includePaths: [
        "node_modules/bootstrap-sass/assets/stylesheets",
        "node_modules/font-awesome/scss"
      ], // tell sass-brunch where to look for files to @import
      precision: 8 // minimum precision required by bootstrap-sass
    }
  },
  copycat: {
    "fonts": [
      "node_modules/font-awesome/fonts",
      "node_modules/bootstrap-sass/assets/fonts"
    ] // copy node_modules/font-awesome/fonts/* to priv/static/fonts/
  },
};
