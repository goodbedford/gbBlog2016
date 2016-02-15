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
            })
            .state("resume", {
                url: "/resume",
                controller: "ResumeController",
                controllerAs: "resume",
                templateUrl: "src/components/resume/resume.tpl.html"
            })
            .state("contact", {
                url: "/contact",
                controller: "ResumeController",
                controllerAs: "contact",
                templateUrl: "src/components/contact/contact.tpl.html"
            })
            .state("community", {
                url: "/community",
                controller: "ResumeController",
                controllerAs: "community",
                templateUrl: "src/components/community/community.tpl.html"
            })
            .state("projects", {
                url: "/projects",
                controller: "ProjectController",
                controllerAs: "project",
                templateUrl: "src/components/projects/projects.tpl.html"
            })
            .state("blog", {
                url: "/goodblog",
                controller: "BlogController",
                controllerAs: "blog",
                templateUrl: "src/components/blog/blog.tpl.html"
            });

        $urlRouterProvider.otherwise("/");

        //remove hash in urls
        $locationProvider.html5Mode({
            enabled: false,
            requireBase: false
        });
    }

})();