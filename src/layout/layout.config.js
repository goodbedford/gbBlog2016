(function () {
	"use strict";

	angular
		.module("gbBlog.layout")
		.config(config);

	config.$inject = ["$stateProvider", "$urlRouterProvider"];

	function config($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state("site", {
				url: "/site",
				abstract: true,
				views: {
					"": {
						templateUrl: "src/layout/layout.tpl.html",
					},
					"nav@site": {
						controller: "NavController",
						controllerAs: "nav",
						templateUrl: "src/layout/nav.tpl.html"
					},
					"footer@site": {
						controller: "LogoController",
						controllerAs: "logo",
						templateUrl: "src/layout/logoFooter.tpl.html"
					}
				}
			});
	}
})();