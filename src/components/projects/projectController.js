(function() {
    "use strict";

    angular
        .module("gbBlog.projects")
        .controller("ProjectController", ProjectController);

    ProjectController.$inject = ["BioService"];

    function ProjectController(BioService) {
        var project = this;

        project.bio = BioService;


    }

})();