(function() {
    "use strict";

    angular
        .module("gbBlog")
        .factory("BlogService", BlogService);

    BlogService.$inject = [];

    function BlogService() {
        var factory = {
                query:query
        };

        function query() {

            return [
                    {
                        title: "Whole new dimension to being a web developer",
                        date: "2015-29-07",
                        author: "Goodbedford",
                        content: {
                            thanks: "I must do a quick thank you to all my friends and family. "+
                            "This article is dedicated to some local organizers and Yassin at "+
                            "<a href='http://www.meetup.com/Ionic-SF/'>SF Ionic Meet Up</a>" +
                            "and Ruben from <a href='https://codeclass.io/#/'>Code.io</a>. "+
                            "Thanks for a great event.",

                            body:   "I got stickers from Max from <a href='http://drifty.com/'>Drifty</a>. I thought that was coolness. "+
                            "I know I’m new to the game but I hope it last forever. I hope to always be inspired and humbled " +
                            "by our work. The programming community is large and small much like San Francisco and the Bay Area. "+
                            "I was at a meet up at <a href='http://www.hackreactor.com/program'>HR</a> "+
                            "for <a href='http://ionicframework.com/getting-started/'>Ionic</a> with my instructor "+
                            "from <a href='https://generalassemb.ly/education/web-development-immersive' >GA</a>. "+
                            "We got to hear some great announcements Ionic Market Place and Ionic 2. "+
                            "It seems like version 2 is right on time for <a href='https://angular.io/docs/js/latest/guide/'> Angular 2</a>. "+
                            "Ionic 2 had mostly the same components with enhanced physics and improved performance. "+
                            "Max didn’t give a hard time table but hinted about shorter Alpha and Beta timelines." +
                            "I think Ionic is powerful because it brings a <span class='highlight'>whole new dimension to being a web developer</span>. "+
                            "<a href='http://johnpolacek.github.io/scrolldeck.js/decks/responsive/'> Mobile First</a> developers can actually " +
                            "put apps up on <a href='https://itunes.apple.com/us/app/apple-store/id375380948?mt=8'>Apple Store</a>" +
                            "and <a href='https://play.google.com/store/apps?hl=en'> Google Play</a>. That opens up" +
                            "so many possibilities.  I need to work on an Ionic projectSpec and give it a spin. I also want "+
                            "to give a shot out to the opening speaker <a href='https://blog.nraboy.com/'> Nic Raboy</a>. "+
                            "He gave a live coding demo of an Ionic app. I he spoke about a interesting nosql database "+
                            "<a href='http://www.couchbase.com/'> couchbase db</a>. "+
                            "He said they are currently looking to <a href='http://www.couchbase.com/careers'>hire</a> "+
                            "but what I really found interesting was his <a href='https://blog.nraboy.com/2015/07/my-first-year-of-blogging-and-the-stats-around-it/'> blog</a>. "+
                            "He has some really tight posts. All in all a good day.",
                        },

                        img: "src/assets/images/gb-logos/gblogo8.png"
                    },
                    {
                        title: "Code of Conduct",
                        date: "2015-28-06",
                        author: "Goodbedford",
                        content: {
                            thanks: "I would like to give thanks to everyone who helped me this week. In no particular order " +
                            "Rich and Steve from <a href='http://nodeschool.io/sanfrancisco/'>Node School SF</a>.",

                            body:   "I loved when Rich read the <a href='https://github.com/nodeschool/sanfrancisco/blob/gh-pages/code-of-conduct.md'>code of conduct</a> for each "+
                            "person who arrived late. The <span class='highlight'>code of conduct</span> made me feel welcomed and set the tone for a safe enviroment to learn. "+
                            "Traffic was crazy this weekend. It's Pride weekend and the Supreme Court decision was " +
                            "right on time. I have to thank <a href='https://github.com/smallhaxe'>@smallhaxe</a> for the welcome. We had a few talks about node and " +
                            "file structures. My classmates are awesome and the instructors a just wonderful people. " +
                            "This was my first week of bootcamp and it was amazing how much information we that is floating "+
                            "out there. Here are a few resources that helped me. "+
                            "<a href='https://developer.mozilla.org/en-US/'>MDN</a> great for Javascript. "+
                            "<a href='http://getbootstrap.com/css/'>Bootstrap</a> great for CSS.",
                        },

                        img: "src/assets/images/gb-logos/gblogo9.png"
                    },
                    {
                        title: "Add these details to the plan",
                        date: "2015-29-05",
                        author: "Goodbedford",
                        content: {
                            thanks: "I would like to give thanks to Joe Blau and Maurice Cherry. "+
                            "To all the listeners and my family. I am inspired and filled "+
                            "with creation.",

                            body:   "I was listening to this podcast and I was like, "+
                            "Yo I really like what Joe is saying. I  can relate to his hustle "+
                            "and fascination. The curiosity and amazement of riding the wave of "+
                            "intense education. A wealth of experience from all angles of his life. "+
                            "It made me think of a lot of things. One of which was to keep at the "+
                            "blogcast and be thankful to those that helped me. I find it honestly "+
                            "refreshing to me when a person give some acknowledgement to whom "+
                            "they grew and fellowshipped with. Which reminds me to <span class='highlight'>add these "+
                            "details to my plan</span>.<br />" +
                            "<a href='https://joeblau.com/'>Joe Blau</a> was on <a href='http://revisionpath.com/'>Revision Path</a> podcast. "+
                            "<a href='http://revisionpath.com/?s=joe+blau'>Episode 65</a>",
                        },

                        img: "src/assets/images/gb-logos/gblogo14.png"
                    },
                    {
                        title: "Accepted",
                        date: "2015-08-05",
                        author: "Goodbedford",
                        content:{
                            thanks: "I would like to thank my family and friends for their help and"+
                            "encouragement to purse my dreams of being a developer",

                            body:   "I got <span class='highlight'>accepted</span> into a Web Development Immersive Bootcamp."+
                            "I am glad my previous work has paid off. Now, as I look into"+
                            "the future there is so much further to go. I could be"+
                            "daunting when thinking about where to begin.  So I will"+
                            "have to make a list of goals. In my school I am going to"+
                            "learn Javascript and Ruby.  I will also learn the Rails,"+
                            "Angular, Express, Node, Mongodb, Postgres, and testing in"+
                            "Mocha.  I am also interested in Famous.js, React.js and"+
                            "ES6 compilers like Babel. I don’t want to get stuck in"+
                            "liking everything new and not mastering the current."+
                            "It will be a twelve week intensive program. I need to"+
                            "have a job at the other end.  I have quit both my jobs"+
                            "making over lets just say 75 grand to go back to school."+
                            "I am honestly giving it my best chance. Wish me luck."
                        },
                        img: "src/assets/images/gb-logos/gblogo15.png"
                    },
                    {
                        title: "Hacker School",
                        date: "2015-29-01",
                        author: "Goodbedford",
                        content:{
                            thanks: "This is relaunch of my personal blog. I would like to " +
                            "remember to thank people who have added to my growth. So, I say thanks!",

                            body:   "Today I went to my <span class='highlight'>hacker school</span>. I said I can do this,"+
                            "the people are there. The craziest thing about it,"+
                            "was a good feeling. Just walking in there I knew I could"+
                            "just bring a lot to the cohort. I am already envisioning them."+
                            "A few good thoughts came to me, why doesn\'t this text editor"+
                            "not have the a dictionary/thesaurus? Not that thought but I" +
                            "walked in and the front was very low key. I missed the first" +
                            "time up the block. I liked that quality. The thing that got me" +
                            "most, I saw people I saw on the internet. Amazing. I mean I" +
                            "saw someone who answered the online group video conference" +
                            "question. Peace, I gotta go put in work."
                        },
                        img: "src/assets/images/gb-logos/gblogo25.png"
                    }
            ];
        }
        return factory;
    }
})();