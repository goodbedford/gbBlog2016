(function() {
    "use strict";

    angular
        .module("gbBlog")
        .config(config);

    config.$inject = ["$locationProvider", "$stateProvider", "$urlRouterProvider"];

    function config($locationProvider, $stateProvider,$urlRouterProvider  ) {

        $stateProvider
            .state("home", {
                url: "/",
                controller: "HomeController",
                controllerAs: "home",
                templateUrl: "src/layout/home.tpl.html"
            });

        $urlRouterProvider.otherwise("/");

        //remove hash in urls
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true
        });
    }

})();