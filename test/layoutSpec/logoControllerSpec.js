(function() {
    "use strict";

    describe("LogoController Unit:Test", function() {
        //add app module
        beforeEach(module("gbBlog"));

        //add controller service need to inject controller to test
        var $controller;
        beforeEach(inject(function(_$controller_){
            $controller = _$controller_;
        }));

        describe("LogoController.scope", function(){
            var $scope;
            var logo;

            // instantiate scope and pass it to controller
            beforeEach(function() {
                $scope = {};
                logo = $controller("LogoController", {$scope: $scope});
            });

            it("should verify that LogoService is truthy", function() {
                expect(logo.logos).toBeTruthy();
            });
            it("should verify that LogoService is an array with items", function() {
                expect(logo.logos.length).toBeGreaterThan(-1);
            });
        });
    });
})();