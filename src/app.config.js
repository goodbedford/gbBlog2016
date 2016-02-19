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
                views: {
                    "nav": {
                        controller: "NavController",
                        controllerAs: "nav",
                        templateUrl: "src/layout/nav.tpl.html"
                    },
                    "content": {
                        controller: "HomeController",
                        controllerAs: "home",
                        templateUrl: "src/layout/home.tpl.html"
                    },
                    "footer": {
                        controller: "LogoController",
                        controllerAs: "logo",
                        templateUrl: "src/layout/logoFooter.tpl.html"
                    }
                }
            })
            .state("resume", {
                url: "/resume",
                views: {
                    "nav": {
                        controller: "NavController",
                        controllerAs: "nav",
                        templateUrl: "src/layout/nav.tpl.html"
                    },
                    "content": {
                        controller: "ResumeController",
                        controllerAs: "resume",
                        templateUrl: "src/components/resume/resume.tpl.html"
                    },
                    "footer": {
                        controller: "LogoController",
                        controllerAs: "logo",
                        templateUrl: "src/layout/logoFooter.tpl.html"
                    }
                }
            })
            .state("contact", {
                url: "/contact",
                views: {
                    "nav": {
                        controller: "NavController",
                        controllerAs: "nav",
                        templateUrl: "src/layout/nav.tpl.html"
                    },
                    "content": {
                        controller: "ResumeController",
                        controllerAs: "contact",
                        templateUrl: "src/components/contact/contact.tpl.html"
                    },
                    "footer": {
                        controller: "LogoController",
                        controllerAs: "logo",
                        templateUrl: "src/layout/logoFooter.tpl.html"
                    }
                }
            })
            .state("community", {
                url: "/community",
                views: {
                    "nav": {
                        controller: "NavController",
                        controllerAs: "nav",
                        templateUrl: "src/layout/nav.tpl.html"
                    },
                    "content": {
                        controller: "ResumeController",
                        controllerAs: "community",
                        templateUrl: "src/components/community/community.tpl.html"
                    },
                    "footer": {
                        controller: "LogoController",
                        controllerAs: "logo",
                        templateUrl: "src/layout/logoFooter.tpl.html"
                    }
                }
            })
            .state("projects", {
                url: "/projects",
                views: {
                    "nav": {
                        controller: "NavController",
                        controllerAs: "nav",
                        templateUrl: "src/layout/nav.tpl.html"
                    },
                    "content": {
                        controller: "ProjectController",
                        controllerAs: "project",
                        templateUrl: "src/components/projects/projects.tpl.html"
                    },
                    "footer": {
                        controller: "LogoController",
                        controllerAs: "logo",
                        templateUrl: "src/layout/logoFooter.tpl.html"
                    }
                }

            })
            .state("blog", {
                url: "/goodblog",
                views: {
                    "nav": {
                        controller: "NavController",
                        controllerAs: "nav",
                        templateUrl: "src/layout/nav.tpl.html"
                    },
                    "content": {
                        controller: "BlogController",
                        controllerAs: "blog",
                        templateUrl: "src/components/blog/blog.tpl.html"
                    },
                    "footer": {
                        controller: "LogoController",
                        controllerAs: "logo",
                        templateUrl: "src/layout/logoFooter.tpl.html"
                    }
                }

            });

        $urlRouterProvider.otherwise("/");

        //remove hash in urls
        $locationProvider.html5Mode({
            enabled: false,
            requireBase: false
        });
    }

})();