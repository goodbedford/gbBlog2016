(function () {
	"use strict";

	angular
		.module("gbBlog")
		.config(config);

	config.$inject = ["$locationProvider", "$stateProvider", "$urlRouterProvider"];

	function config($locationProvider, $stateProvider, $urlRouterProvider) {

		$stateProvider
			.state("site.contact", {
				url: "/contact",
				views: {
					"content": {
						controller: "ResumeController",
						controllerAs: "contact",
						templateUrl: "src/components/contact/contact.tpl.html"
					}
				}
			});
		$urlRouterProvider.otherwise("/site/home");

		//remove hash in urls
		$locationProvider.html5Mode({
			enabled: false,
			requireBase: false
		});
	}

})();