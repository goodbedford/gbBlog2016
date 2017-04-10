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
      BlogService.getDetails(blogId)
      .then(function(blog) {
        console.log("xxx", blog);
        blogDetails.blog = blog;
      })
      .catch(function(error) {
        console.error("Error with get blog id", error);
      });
      console.log("blog details controllerrrr");
    }
  }
})();
