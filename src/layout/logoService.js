(function() {
    "use strict";

    angular
        .module("gbBlog")
        .factory("LogoService", LogoService);

    LogoService.$inject = [];

    function LogoService() {
        var factory = [
            {
                name: "HTML",
                img: "src/assets/images/icons/html5.png"
            },
            {
                name: "CSS",
                img: "src/assets/images/icons/css.png"
            }
        ];


        return factory;

    }
})();