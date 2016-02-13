(function() {
    "use strict";

    describe("ResumeController Unit:Test", function() {
        //add module to test
        beforeEach(module("gbBlog"));

        var $controller;
        beforeEach(inject(function(_$controller_) {
            $controller = _$controller_;
        }));

        describe("ResumeController.scope", function() {
            var $scope;
            var resume;

            //add controller to each test
            beforeEach(function() {
                $scope = {};
                resume = $controller("ResumeController", {$scope: $scope});
            });

            it("should be defined", function() {
                expect(resume.bio).toBeDefined();
            });

        });

    });
})();