(function() {
    "use strict";

    angular
        .module("gbBlog")
        .controller("NavController", NavController);

    NavController.$inject = [];

    function NavController() {
        var nav = this;

        nav.isClosed = true;
        nav.toggleMenu = function() {
            if(nav.isClosed) {
                nav.isClosed = false;
            } else {
                nav.isClosed = true;
            }
        };
    }
})();