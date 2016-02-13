(function() {
    "use strict";

    describe("BlogService", function() {

        beforeEach(module("gbBlog"));

        it("should be defined", inject(function(BlogService) {
            expect(BlogService).toBeDefined();
        }));
        it("should have length greater than -1", inject(function(BlogService) {
            expect(BlogService.length).toBeGreaterThan(-1);
        }));
        it("should be an array", inject(function(BlogService) {
            expect(BlogService).toBeArray();
        }));
        it("should be an array of objects", inject(function(BlogService) {
            expect(BlogService).toBeArrayOfObjects();
        }));
    });
})();