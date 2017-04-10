(function () {
	"use strict";

	angular
		.module("gbBlog.projects")
		.controller("ProjectDetailsController", ProjectDetailsController);

	ProjectDetailsController.$inject = ["$stateParams", "BioService"];

	function ProjectDetailsController($stateParams, BioService) {
		var projectDetails = this;

		activate();

		function activate() {
			var projectId = $stateParams.projectId;


      BioService.getDetail(projectId)
        .then(function(project) {
          projectDetails.project = project;
          return projectDetails;
        });
			console.log("details controllerrrr");
		}
	}
})();
