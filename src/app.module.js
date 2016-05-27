(function() {
    "use strict";

    angular
        .module("gbBlog", [

         // core
          "gbBlog.core",
					"gbBlog.blog",
					"gbBlog.home",
					"gbBlog.layout",
					"gbBlog.projects",
					"gbBlog.resume",
					"gbBlog.community"

        ]);

})();