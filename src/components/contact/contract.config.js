(function () {
	"use strict";

	angular
		.module("gbBlog.contract")
		.config(config);

	config.$inject = ["$stateProvider", "$urlRouterProvider"];

	function config($stateProvider, $urlRouterProvider) {

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
	}
})();