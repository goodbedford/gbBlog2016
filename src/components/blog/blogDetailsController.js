(function() {
  "use strict";

  angular
    .module("gbBlog.blog")
    .controller("BlogDetailsController", BlogDetailsController);

  BlogDetailsController.$inject = ["$stateParams", "BlogService"];

  function BlogDetailsController($stateParams, BlogService) {
    var blogDetails = this;

    activate();

    function activate() {
      var blogId = $stateParams.blogId;

      blogDetails.blog = BlogService.getDetails(blogId);
      console.log("blog details controllerrrr");
    }
  }
})();
