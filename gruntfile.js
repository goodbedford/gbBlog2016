(function() {
    module.exports = function(grunt) {
        "use strict";

        require("load-grunt-tasks")(grunt);

        grunt.initConfig({
            jshint: {
               files: {
                   src: ["src/**/*.js"]
               }
            },
            clean: ["dist/**/*"],
            sass: {
                dist: {
                    files: {
                        "src/css/styles.css": "src/assets/sass/*.scss"
                    }
                },
                options: {
                    sourceMap: true
                }
            },
            uglify: {
                dist: {
                    files: {
                        "dist/js/package.min.js": ["node_modules/angular/angular.js",
                                                   "node_modules/ui-router/release/angular-ui-router.js",
                                                   "node_modules/angular-bootstrap/ui-bootstrap.js",
                                                   "src/app.module.js",
                                                   "src/app.config.js",
                                                   "src/layout/homeController.js"]
                    }
                },
                options: {
                    sourceMap: true
                }
            },
            cssmin: {
                dist: {
                    files: {
                        "dist/css/styles.min.css": ["src/assets/css/*.css"]
                    }
                }
            },
            karma: {
                options: {
                    configFile: "karma-config.js",
                    autoWatch: true
                }
            }
        });

        //start default task
        grunt.registerTask("default", ["jshint", "clean", "sass", "uglify", "cssmin", "karma"])
    };
})();
