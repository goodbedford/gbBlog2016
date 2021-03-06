// Karma configuration
// Generated on Mon Feb 08 2016 21:49:03 GMT-0800 (PST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "",


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["jasmine", "jasmine-matchers"],


    // list of files / patterns to load in the browser
    files: [
      // angular dependencies
      "node_modules/angular/angular.js",
      "node_modules/angular-mocks/angular-mocks.js",
      "node_modules/ui-router/release/angular-ui-router.js",
      "node_modules/angular-bootstrap/ui-bootstrap.js",
      "node_modules/angular-sanitize/angular-sanitize.js",
      "src/app.module.js",
      "src/app.config.js",
      "src/layout/**/*.js",
      "src/components/**/*.js",
      "test/**/*.js"
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      "src/**/*.js": ["coverage"]
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ["progress", "coverage"],

    coverageReporter: {
      type : 'html',
      dir : 'test/'
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    plugins: [
        "karma-chrome-launcher",
        "karma-jasmine",
        "karma-jasmine-matchers",
        "karma-coverage"
    ],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
