//(function() {
//    "use strict";

    describe("HomeController Unit:Test", function() {
        //add app module
        beforeEach(module("gbBlog"));

        //add controller
        var $controller;
        beforeEach(inject(function(_$controller_){
            $controller = _$controller_;
        }));

        describe("home.test is real", function(){
            var $scope;
            var home;
            beforeEach(function() {
                $scope = {};
                home = $controller("HomeController", {$scope: $scope});
            });

            it("home.test is working", function() {
                expect(home.test).toEqual("beddy");

            });

            it("testy should return 0", function(){
                expect(home.testy()).toEqual(0);
            });
        });



        //it statement testing scope
    })
//})();