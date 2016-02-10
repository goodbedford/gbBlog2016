(function() {
    "use strict";

    angular
        .module("gbBlog")
        .factory("BioService", BioService);

    BioService.$inject = [];

    function BioService() {
        var factory = {
        };

        factory.tagLine = "Confident and respected web developer with experience in front and back end development.  Conceptualized, developed and deployed over 10 web sites built using a mix of languages, libraries and frameworks.  Knowledgeable about implementations of different databases and benefits of using specific technologies to solve complex problems.  Active in the open source and tech communities, both of which I feel very passionate about.";
        factory.tagline2 = "SFUSD Educator transitioning to a web application developer & tech inclusion advocate. " +
                            "I am seeking a role where I can build upon skills and experiences gained as an educator, " +
                            "while dedicating myself to continuously learning and excelling in a web developer career.";
        factory.name = "Bedford Franklin Williamson IV";
        factory.location = "San Francisco";
        factory.occupation = "Front End Developer";


        return factory;
    }
})();