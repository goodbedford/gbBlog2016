(function() {
    "use strict";

    angular
        .module("gbBlog")
        .filter("greaterThan", greaterThan);

    greaterThan.$inject = [];

    // takes a start index at zero based and
    // end up to but not including end
    function greaterThan(arr, start,end){

        var result = arr.slice(start, end);
        return result;
    }
})();