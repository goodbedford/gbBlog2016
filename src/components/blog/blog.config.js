(function() {
  "use strict";

  angular
    .module("gbBlog.blog")
    .config(config);

  config.$inject = ["$stateProvider", "$urlRouterProvider"];

  function config($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state("site.blog", {
        url: "/goodblog",
        views: {
          "content": {
            controller: "BlogController",
            controllerAs: "blog",
            templateUrl: "src/components/blog/blog.tpl.html"
          }
        }
      })
      .state("site.blogDetails", {
        url: "/goodblog/:blogId",
        views: {
          "content": {
            controller: "BlogDetailsController",
            controllerAs: "blogDetails",
            templateUrl: "src/components/blog/blogDetails.tpl.html"
          }
        }
      });
  }
})();
