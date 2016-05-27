(function() {
    "use strict";

    angular
        .module("gbBlog.layout")
        .controller("LogoController", LogoController);

    LogoController.$inject = ["LogoService"];

    function LogoController(LogoService) {
        var logo = this;

        logo.logos = LogoService.query();
    }
})();