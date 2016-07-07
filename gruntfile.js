(function () {
	module.exports = function (grunt) {
		"use strict";

		require("load-grunt-tasks")(grunt);

		grunt.initConfig({
			watch: {
				all: {
					files: ["index.html", "src/**/*", "test/**/*.js"],
					tasks: ["default"],
				},
			},
			jshint: {
				files: {
					src: ["src/**/*.js"]
				}
			},
			clean: ["dist/**/*"],
			sass: {
				dist: {
					files: {
						"src/assets/css/styles.css": "src/assets/sass/*.scss"
					}
				},
				options: {
					sourceMap: true
				}
			},
			uglify: {
				dist: {
					files: {
						"dist/js/package.min.js": [
							"node_modules/angular/angular.js",
							"node_modules/ui-router/release/angular-ui-router.js",
							//"node_modules/angular-bootstrap/ui-bootstrap.js",
							"node_modules/angular-sanitize/angular-sanitize.js",
							"src/app.module.js",
							"src/app.config.js",
							"src/core/core.module.js",
							"src/core/*.js",
							// "src/**/*.js"
							"src/components/blog/blog.module.js",
							"src/components/blog/blog.config.js",
							"src/components/home/home.module.js",
							"src/components/home/home.config.js",
							"src/components/projects/projects.module.js",
							"src/components/projects/projects.config.js",
							"src/components/resume/resume.module.js",
							"src/components/resume/resume.config.js",
							"src/components/community/community.module.js",
							"src/components/community/community.config.js",
							"src/components/contact/contract.module.js",
							"src/components/contact/contract.config.js",
							// "src/components/blog/blogService.js",
							// "src/components/blog/blogController.js",
							"src/components/**/*.js",
							// "src/layout/**/*.js"
							"src/layout/layout.module.js",
							"src/layout/layout.config.js",
							"src/layout/**/*.js"
							
							
						]
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
		grunt.registerTask("default", ["jshint", "clean", "sass", "cssmin", "uglify", "karma"])
	};
})();
