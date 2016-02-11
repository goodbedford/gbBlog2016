(function() {
    "use strict";

    describe("HomeController Unit:Test", function() {
        //add app module
        beforeEach(module("gbBlog"));

        //add controller service need to inject controller to test
        var $controller;
        beforeEach(inject(function(_$controller_){
            $controller = _$controller_;
        }));

        describe("HomeController.scope", function(){
            var $scope;
            var home;

            // instantiate scope and pass it to controller
            beforeEach(function() {
                $scope = {};
                home = $controller("HomeController", {$scope: $scope});
            });

            it("home.test is working", function() {
                expect(home.test).toEqual("beddy");
            });
            it("should verify that LogoService is truthy", function() {
                expect(home.logos).toBeTruthy();
            });
            it("should verify that LogoService is an array with items", function() {
                expect(home.logos.length).toBeGreaterThan(-1);
            });
            it("should verify that BioService is transfered to scope", function() {
                expect(home.bio).toBeTruthy();
            });
        });
    })
})();