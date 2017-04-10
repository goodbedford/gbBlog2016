(function() {
    "use strict";

    angular
        .module("gbBlog.resume")
        .controller("ResumeController", ResumeController);

    ResumeController.$inject = ["BioService"];

    function ResumeController(BioService) {
        var resume = this;

        BioService.getBio()
        .then(function(bio) {
          resume.bio = bio;
        });

        resume.placeCssHeader = function(index, arr, cssProp) {
            if(index === arr.length -1) {
                return "";
            } else {
                return cssProp;
            }
        };
        resume.placeCssHeaderNo1st = function(index, arr, cssProp) {
            if(index === 0) {
                return "";
            } else {
                return cssProp;
            }
        };
    }
})();
