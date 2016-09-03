(function() {
  "use strict";

  angular
    .module("gbBlog.home")
    .config(config);

  config.$inject = ["$stateProvider", "$urlRouterProvider"];

  function config($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("site.home", {
        url: "/home",
        views: {
          "content": {
            controller: "HomeController",
            controllerAs: "home",
            templateUrl: "src/components/home/home.tpl.html"
          },
          // "footer@site": {
          //   template: "<div></div>"
          // }
        }
      });
  }
})();
