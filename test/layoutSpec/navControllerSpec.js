(function() {
    "use strict";

    describe("NavController Unit:Test", function() {
        //add app module
        beforeEach(module("gbBlog"));

        //add controller service need to inject controller to test
        var $controller;
        beforeEach(inject(function(_$controller_){
            $controller = _$controller_;
        }));

        describe("NavController.scope", function(){
            var $scope;
            var nav;

            // instantiate scope and pass it to controller
            beforeEach(function() {
                $scope = {};
                nav = $controller("NavController", {$scope: $scope});
            });

            it("should verify that nav.isClosed is default", function() {
                expect(nav.isClosed).toEqual(true);
            });

        });
    });
})();