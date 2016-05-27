(function () {
	"use strict";

	angular
		.module("gbBlog.community")
		.config(config);

	config.$inject = ["$stateProvider", "$urlRouterProvider"];

	function config($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state("site.community", {
				url: "/community",
				views: {
					"content": {
						controller: "ResumeController",
						controllerAs: "community",
						templateUrl: "src/components/community/community.tpl.html"
					}
				}
			});
	}
})();