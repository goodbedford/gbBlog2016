(function() {
    "use strict";

    describe("BlogController Unit:Test", function() {
        //add module to test
        beforeEach(module("gbBlog"));

        var $controller;
        beforeEach(inject(function(_$controller_) {
            $controller = _$controller_;
        }));

        describe("BlogController.scope", function() {
            var $scope;
            var blog;

            //add controller to each test
            beforeEach(function() {
                $scope = {};
                blog = $controller("BlogController", {$scope: $scope});
            });

            it("should be defined", function() {
                expect(blog.blogs).toBeDefined();
            });

        });

    });
})();