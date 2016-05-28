(function () {
	"use strict";

	angular
		.module("gbBlog.projects")
		.config(config);

	config.$inject = ["$stateProvider", "$urlRouterProvider"];

	function config($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state("site.projects", {
				url: "/projects",
				views: {
					"content": {
						controller: "ProjectController",
						controllerAs: "project",
						templateUrl: "src/components/projects/projects.tpl.html"
					}
				}
			})
			.state("site.details", {
				url: "/projects/:projectId",
				views: {
					"content": {
						controller: "ProjectDetailsController",
						controllerAs: "projectDetails",
						templateUrl: "src/components/projects/projectDetails.tpl.html"
					}
				}
			});
	}
})();