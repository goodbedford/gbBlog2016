(function() {
    "use strict";

    angular
        .module("gbBlog")
        .controller("HomeController", HomeController);

    HomeController.$inject = ["BioService", "LogoService"];

    function HomeController(BioService, LogoService) {
        var home = this;

        home.bio = BioService;
        home.test="beddy";
        home.logos = LogoService;
        home.testy = function() {
            return 0;
        };
    }
})();