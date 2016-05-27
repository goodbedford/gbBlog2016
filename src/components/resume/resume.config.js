(function () {
	"use strict";

	angular
		.module("gbBlog.resume")
		.config(config);

	config.$inject = ["$stateProvider", "$urlRouterProvider"];

	function config($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state("site.resume", {
				url: "/resume",
				views: {
					"content": {
						controller: "ResumeController",
						controllerAs: "resume",
						templateUrl: "src/components/resume/resume.tpl.html"
					}
				}
			});
	}
})();