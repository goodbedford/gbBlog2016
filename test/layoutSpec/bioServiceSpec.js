(function() {
    "use strict";

    describe("BioService", function() {

        beforeEach(module("gbBlog"));

        it("should be defined", inject(function(BioService){
            expect(BioService).toBeDefined();
        }));
        it("should be object", inject(function(BioService) {
            expect(typeof BioService).toEqual("object");
        }));
        it("should have prop name:", inject(function(BioService) {
            expect(BioService.name).toEqual("Bedford Franklin Williamson IV");
        }));
        it("should have prop location:", inject(function(BioService) {
            expect(BioService.location).toEqual("San Francisco");
        }));
        it("should have prop tagLine", inject(function(BioService) {
            expect(BioService.tagLine.length).toBeGreaterThan(0);
        }));


    });
})();