(function() {
    "use strict";

    describe("BlogController Unit:Test", function() {
        //add module to test
        beforeEach(module("gbBlog"));

        var $controller;
        var BlogService;
        beforeEach(inject(function(_$controller_, _BlogService_, $injector) {
            $controller = _$controller_;
            BlogService = _BlogService_;



         }));



        describe("BlogController.scope", function() {
            var $scope;
            var mockBlogService;
            //add controller to each test
            beforeEach(function() {
                $scope = {};
                spyOn(BlogService, "query").and.returnValue([{"name": "bedford"}]);
                this.blog = $controller("BlogController", {$scope: $scope});
            });

            it("should name be bedford", function() {
                expect(this.blog.blogs).toEqual([{"name": "bedford"}]);
            });

            describe("blog.placeCssHeader", function() {
                it("should return empty string", function() {
                    expect(this.blog.placeCssHeader(0,[1], "cssProp")).toEqual("");
                });

                it("should return cssProp", function() {
                    expect(this.blog.placeCssHeader(0,[],"cssProp")).toEqual("cssProp");
                });

            });

            describe("blog.placeCssHeaderNo1st", function() {

                it("should return empty string", function() {
                    expect(this.blog.placeCssHeaderNo1st(0,[], "cssProp")).toEqual("");
                });

                it("should return cssProp", function() {
                    expect(this.blog.placeCssHeaderNo1st(4,[],"cssProp")).toEqual("cssProp")
                });
            });

            xit("should be defined", function() {
                console.log(blogService)
                expect(this.blog.blogs).toBeDefined();
            });


        });

    });
})();