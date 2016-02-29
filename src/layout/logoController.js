(function() {
    "use strict";

    angular
        .module("gbBlog")
        .controller("LogoController", LogoController);

    LogoController.$inject = ["LogoService"];

    function LogoController(LogoService) {
        var logo = this;

        logo.logos = LogoService.query();
    }
})();