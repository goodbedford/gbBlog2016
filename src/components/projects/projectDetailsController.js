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

			projectDetails.project = BioService.getDetail(projectId);
			console.log("details controllerrrr");
		}
	}
})();
