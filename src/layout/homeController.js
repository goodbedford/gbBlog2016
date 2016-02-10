(function() {
    "use strict";

    angular
        .module("gbBlog")
        .controller("HomeController", HomeController);

    HomeController.$inject = ["BioService"];

    function HomeController(BioService) {
        var home = this;

        home.bio = BioService;
    }
})();