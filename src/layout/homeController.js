(function() {
    "use strict";

    angular
        .module("gbBlog")
        .controller("HomeController", HomeController);

    HomeController.$inject = [];

    function HomeController() {
        var home = this;

        home.test = "hi Im from home controller";
    }
})();