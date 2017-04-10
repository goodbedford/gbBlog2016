(function() {
    "use strict";

    angular
        .module("gbBlog.projects")
        .controller("ProjectController", ProjectController);

    ProjectController.$inject = ["BioService"];

    function ProjectController(BioService) {
        var project = this;


        BioService.getBio()
        .then(function(bio) {
          project.bio = bio;
        });



    }

})();
