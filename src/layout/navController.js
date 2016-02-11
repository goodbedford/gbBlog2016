(function() {
    "use strict";

    angular
        .module("gbBlog")
        .controller("NavController", NavController);

    NavController.$inject = [];

    function NavController() {
        var nav = this;

        nav.isClosed = true;
        //may decide to add this fn instead of ngClick
        //nav.toggleMenu = function() {
        //    if(nav.isClosed) {
        //        nav.isClosed = false;
        //    } else {
        //        nav.isClosed = true;
        //    }
        //};
    }
})();