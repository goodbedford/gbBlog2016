(function() {
  "use strict";

  angular
    .module("gbBlog.blog")
    .factory("BlogService", BlogService);

  BlogService.$inject = ["$http"];

  function BlogService($http) {
    var factory = {
      getBlogs: getBlogs
    };

    function getBlogs() {
      return $http.get("https://s3.amazonaws.com/gb-bio-data/blog.js")
        .then(function(blogs) {
          return blogs.data.data;
        })
        .catch(function(error) {
          console.error("Error with getting blogs", error);
        });
    }

    factory.getDetails = getDetails;

    function getDetails(id) {
      var blog;
      return factory.getBlogs()
      .then(function(blogs) {
        blog = blogs.filter(function(blog) {
          return blog.id == id;
        })[0];
        return blog;
      });
    }

    return factory;
  }
})();
