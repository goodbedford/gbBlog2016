(function() {
  "use strict";

  angular
    .module("gbBlog.core")
    .factory("BioService", BioService);

  BioService.$inject = ["$http"];

  function BioService($http) {

    var factory = {
      getBio: getBio,
      getDetail: getDetail
    };
    function getBio() {
      return $http.get("https://s3.amazonaws.com/gb-bio-data/bio.js")
        .then(function(data) {
          return data.data;
          // console.log("data", data.data);
        });
    }

    function getDetail(projectId) {
      var project;
      return factory.getBio()
      .then(function(bios) {
        project = bios.projects.filter(function(project) {
          return project.id == projectId;
        })[0];
        return project;
      });
    }
    return factory;
  }
})();
