(function() {
    "use strict";

    describe("LogoService", function() {

        beforeEach(module("gbBlog"));

        it("should be defined", inject(function(LogoService) {
            expect(LogoService).toBeDefined();
        }));

        describe("LogoService.query", function() {
            it("should return array", inject(function(LogoService) {
                expect(LogoService.query()).toBeArray();
            }));
            it("should return an array have length greater than -1", inject(function(LogoService) {
                expect(LogoService.query().length).toBeGreaterThan(-1);
            }));
            it("should return an array of objects", inject(function(LogoService) {
                expect(LogoService.query()).toBeArrayOfObjects();
            }));
        });


    });
})();