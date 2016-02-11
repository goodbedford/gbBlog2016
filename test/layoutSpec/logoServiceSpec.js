(function() {
    "use strict";

    describe("LogoService", function() {

        beforeEach(module("gbBlog"));

        it("should be defined", inject(function(LogoService) {
            expect(LogoService).toBeDefined();
        }));
        it("should have length greater than -1", inject(function(LogoService) {
            expect(LogoService.length).toBeGreaterThan(-1);
        }));
        it("should be an array", inject(function(LogoService) {
            expect(LogoService).toBeArray();
        }));
        it("should be an array of objects", inject(function(LogoService) {
            expect(LogoService).toBeArrayOfObjects();
        }));
    });
})();