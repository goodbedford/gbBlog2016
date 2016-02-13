(function() {
    "use strict";

    describe("ProjectController", function() {
        //add module that controller belongs to
        beforeEach(module("gbBlog"));

        var $controller;
        beforeEach(inject(function(_$controller_) {
            $controller = _$controller_;
        }));

        describe("ProjectController.scope", function() {
            var $scope = {};
            var project;

            beforeEach(function() {

                project = $controller("ProjectController", {$scope: $scope});
            });

            it("should be defined", function() {
                expect(project.bio).toBeDefined();
            });


        });

    });
})();