(function() {
    "use strict";

    angular
        .module("gbBlog.blog")
        .controller("BlogController", BlogController);

    BlogController.$inject = ["BlogService"];

    function BlogController(BlogService) {
        var blog = this;

        // blog.blogs = BlogService.query();
        BlogService.getBlogs()
        .then(function(blogs) {
          blog.blogs = blogs;
        });
        blog.placeCssHeader = function(index, arr, cssProp) {
            if(index === arr.length -1) {
                return "";
            } else {
                return cssProp;
            }
        };
        blog.placeCssHeaderNo1st = function(index, arr, cssProp) {
            if(index === 0) {
                return "";
            } else {
                return cssProp;
            }
        };
    }
})();
