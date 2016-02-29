(function() {
    "use strict";

    angular
        .module("gbBlog")
        .factory("LogoService", LogoService);

    LogoService.$inject = [];

    function LogoService() {
        var factory = {};

        factory.query = function()  {
            return [
                    {
                        name: "HTML",
                        img: "src/assets/images/icons/html5.png",
                        type: "Language"
                    },
                    {
                        name: "CSS",
                        img: "src/assets/images/icons/css.png",
                        type: "Language"

                    },
                    {
                        name: "Javascript",
                        img: "src/assets/images/icons/javascript.png",
                        type: "Language"
                    },
                    {
                        name: "Ajax",
                        img: "src/assets/images/icons/ajax.png",
                        type: "Technology"
                    },
                    {
                        name: "Angular 1.x",
                        img: "src/assets/images/icons/angular.png",
                        type: "Framework"
                    },
                    {
                        name: "Bootstrap",
                        img: "src/assets/images/icons/bootstap.jpeg",
                        type: "Framework"
                    },
                    {
                        name: "Bower",
                        img: "src/assets/images/icons/bower.png",
                        type: "Technology"
                    },
                    {
                        name: "C3.js",
                        img: "src/assets/images/icons/c3.jpeg",
                        type: "Library"
                    },
                    {
                        name: "D3.js",
                        img: "src/assets/images/icons/d3.jpeg",
                        type: "Library"
                    },
                    {
                        name: "Emmet",
                        img: "src/assets/images/icons/emmet.png",
                        type: "Technology"
                    },
                    {
                        name: "Express",
                        img: "src/assets/images/icons/express.png",
                        type: "Framework"
                    },
                    {
                        name: "Github",
                        img: "src/assets/images/icons/github.png",
                        type: "Technology"
                    },
                    {
                        name: "Grunt",
                        img: "src/assets/images/icons/grunt.png",
                        type: "Library"
                    },
                    {
                        name: "Heroku",
                        img: "src/assets/images/icons/heroku.png",
                        type: "Technology"
                    },
                    {
                        name: "Jasmine",
                        img: "src/assets/images/icons/jasmine.png",
                        type: "Library"
                    },
                    {
                        name: "Jquery",
                        img: "src/assets/images/icons/jquery.png",
                        type: "Library"
                    },
                    {
                        name: "JSON",
                        img: "src/assets/images/icons/jsonlogo.png",
                        type: "Technology"
                    },
                    {
                        name: "Karma",
                        img: "src/assets/images/icons/karma.png",
                        type: "Library"
                    },
                    {
                        name: "Mocha",
                        img: "src/assets/images/icons/mocha.png",
                        type: "Library"
                    },
                    {
                        name: "MongoDB",
                        img: "src/assets/images/icons/mongoDB.png",
                        type: "Database"
                    },
                    {
                        name: "Mongoose",
                        img: "src/assets/images/icons/mongoose.png",
                        type: "Library"
                    },
                    {
                        name: "SqLite",
                        img: "src/assets/images/icons/sqlite.jpeg",
                        type: "Database"
                    },
                    {
                        name: "Node",
                        img: "src/assets/images/icons/node.png",
                        type: "Langauge"
                    },
                    {
                        name: "NPM",
                        img: "src/assets/images/icons/npm.png",
                        type: "Technology"
                    },
                    {
                        name: "PostgreSQL",
                        img: "src/assets/images/icons/postgresql.png",
                        type: "Database"
                    },
                    {
                        name: "Ruby on Rails",
                        img: "src/assets/images/icons/rails.jpeg",
                        type: "Framework"
                    },
                    {
                        name: "Rspec",
                        img: "src/assets/images/icons/rspec.jpeg",
                        type: "Library"
                    },
                    {
                        name: "Ruby",
                        img: "src/assets/images/icons/ruby.jpeg",
                        type: "Language"
                    },
                    {
                        name: "Slack",
                        img: "src/assets/images/icons/slack.png",
                        type: "Technology"
                    },
                    {
                        name: "Underscore",
                        img: "src/assets/images/icons/underscore.png",
                        type: "Library"
                    },
                    {
                        name: "Trello",
                        img: "src/assets/images/icons/trello.png",
                        type: "Technology"
                    }
            ];
        };

        return factory;
    }
})();