var fs = require("fs");
var browserify = require("browserify");
var babelify = require("babelify");
var resolutions = require('browserify-resolutions');
var shim = require('browserify-shim');


browserify({ debug: true })
  .transform(babelify)
    .require("./app.js", { entry: true })
      .plugin(resolutions, ['react'])
       .bundle()
        .on("error", function (err) { console.log("Error: " + err.message); })
          .pipe(fs.createWriteStream("../app/assets/javascripts/bundle.js"));
