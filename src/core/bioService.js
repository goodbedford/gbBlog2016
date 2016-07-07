(function () {
	"use strict";

	angular
		.module("gbBlog.core")
		.factory("BioService", BioService);

	BioService.$inject = [];

	function BioService() {
		var factory = {};

		factory.tagLine = "Confident and respected web developer with experience in front and back end development.  Conceptualized, developed and deployed over 10 web sites built using a mix of languages, libraries and frameworks.  Knowledgeable about implementations of different databases and benefits of using specific technologies to solve complex problems.  Active in the open source and tech communities, both of which I feel very passionate about.";
		factory.tagline2 = "SFUSD Educator transitioning to a web application developer & tech inclusion advocate. " +
			"I am seeking a role where I can build upon skills and experiences gained as an educator, " +
			"while dedicating myself to continuously learning and excelling in a web developer career.";
		factory.name = "Bedford Franklin Williamson IV";
		factory.location = "San Francisco";
		factory.email = "goodbedford@gmail.com";
		factory.website = "http://www.goodbedford.com";
		factory.occupation = "Front End Developer";
		factory.img = ["src/assets/images/gb-logos/gblogo40.png"];
		factory.workExperience = [
			{
				company: "Oakland Digital & Literacy Center (Google.org Non-Profit Recipient)",
				title: "Front End Developer",
				location: "1224 Harrison St. Oakland, CA 94612",
				phone: "510-435-2945",
				url: "http://oaklanddigital.org/",
				description: [
					"Create UI wireframes & documentation for BRIDGEGOOD.com.",
					"Design & Implement responsive site UI utilizing HTML5, CSS, Bootstrap, Angular 1.x, JSON.",
					"Manage version control with Git software."
				],
				timePeriod: {
					start: "2016-05",
					end: "current"
				},
				supervisor: "Shaun Tai"
			},
			{
				company: "General Assembly",
				title: "Workshop Instructor",
				location: "225 Bush St. Fl. 5, San Francisco, CA 94104",
				phone: "415-592-6885",
				url: "https://generalassemb.ly/",
				description: [
					"Develop lessons for Intro to Javascript that prepare students for making interactive web apps.",
					"Teach Javascript & Jquery to ensure understanding of programming fundamentals.",
					"Foster General Assembly culture and team building to produce a vigorous working & learning environment."
				],
				timePeriod: {
					start: "2016-04",
					end: "current"
				},
				supervisor: "Anya Vo"
			},
			{
				company: "General Assembly",
				title: "Teaching Assistant",
				location: "225 Bush St. Fl. 5, San Francisco, CA 94104",
				phone: "415-592-6885",
				url: "https://generalassemb.ly/",
				description: [
					"Advocate and Mentor 30 Jr. Web Developers.",
					"Develop materials for front end development lessons that ensure mastery of materials.",
					"Foster General Assembly culture and team building to produce a vigorous working & learning environment.",
					"Recruit & Interview applicants seeking to enroll in Web Development Immersive programs."
				],
				timePeriod: {
					start: "2015-09",
					end: "2015-12"
				},
				supervisor: "Alexandra Pisano"
			},
			{
				company: "San Francisco Unified School District",
				title: "Transition Specialist",
				location: "555 Franklin St. San Francisco, CA 94102",
				phone: "415-241-3030",
				url: "http://www.sfusd.edu/",
				description: [
					"Provided specialized employment training to 350+ people with disabilities.",
					"Maintain Moodle CMS website, Microsoft Access database and social media.",
					"Managed 20 internship training sites that provided the skills to successfully transition people with disabilities to meaningful employment.",
					"Filed monthly and annual reports and budgets up to $200,000."
				],
				timePeriod: {
					start: "2007-08",
					end: "2015-05"
				},
				supervisor: "N/A"
			}
		];
		factory.education = [
			{
				school: "General Assembly",
				url: "https://generalassemb.ly/",
				description: [
					"Completed 12 week course of intense software engineering.",
					"Design rich web applications utilizing REST APIs, HTML, CSS, JS, Node, Ruby, Rails & modern build process.",
					"Utilized pair programming and individual study for rapid advancement in a short period of time."
				],
				location: "225 Bush St. Fl. 5, SF CA 94104",
				major: "Advanced Web Application Development and Front End Engineering",
				degree: "Full Stack Web Developer Certificate",
				timePeriod: {
					start: "2015-06",
					end: "2015-09"
				},
			},
			{
				school: "City College of San Francisco",
				url: "http://www.ccsf.edu/",
				description: [
					"Develop and maintain web sites according to industry standards",
					"Add interactivity to web pages via scripting programs and/or server-side technologies",
					"Recognize and use appropriate Web 2.0 technologies to promote or enhance the work environment"
				],
				location: "50 Phelan Ave, San Francisco, CA 94112",
				major: "Computer Science",
				degree: "Web Site Development Techniques",
				timePeriod: {
					start: "year-month",
					end: "year-month"
				},
			},
			{
				school: "Robert Morris University",
				url: "http://www.rmu.edu/",
				description: ["Business Administration", "Intro to Information Systems", "Business Math"],
				location: "6001 University Blvd, Moon, PA 15108",
				major: "Management Information Systems",
				degree: "Associate Degree in Business Administration",
				timePeriod: {
					start: "year-month",
					end: "year-month"
				},
			}
		];
		factory.projects = [
			{
				title: "Awwwards-clone",
				url: "https://goodbedford.github.io/awards/",
				repo: "https://github.com/goodbedford/awards",
				description: "This site is an demo clone of http://www.awwwards.com/",
				stack: "HTML5,CSS3, Javascript, SASS, Gulp",
				role: "Front End Developer, I looked at Awwwards.com and made a clone of it. Pay attention to the responsive layout created with flexbox.",
				img: "src/assets/images/projects/awards/main-page.png",
				date: "2016-06"
			},
			{
				title: "BRIDGEGOOD.com",
				url: "http://bridgegood.com/",
				repo: "",
				description: "Responsive HTML5 app that connects early stage designers with professional opportunities.",
				stack: "REST API, HTML, CSS, JavaScript, JSON, Angular 1.x, Rails, Heroku, PostgreSQL",
				role: "Front-End redesign of desktop and mobile layout",
				img: "src/assets/images/projects/bridgegood/5-19-16-profile-screenshot.png",
				date: "2016-05"
			},
			{
				title: "#OOTD (outfit of the day)",
				url: "https://ootd-app.herokuapp.com/#/",
				repo: "https://github.com/goodbedford/ootd2016",
				description: "Responsive Mobile First application designed to save outfits into a personal lookbook. Demonstrates proficient use of third-party APIs (Instagram) and effective code.NOTE:*Instagram has changed its API Policy so this Errors.",
				stack: "REST API, HTML, CSS, JavaScript, JSON, Angular 1.x, Heroku, MongoDB(NoSql), Node & Express",
				role: "Conceptualization, Front-End & Back-End Development",
				img: "src/assets/images/projects/ootd2016/ootd2016-screenshot.png",
				date: "2016-03"
			},
			{
				title: "Goodbedford.com",
				url: "http://www.goodbedford.com/",
				repo: "https://github.com/goodbedford/gbBlog2016",
				description: "Portfolio and Blog showcasing present and past projects.",
				stack: "HTML5, CSS, Javascript, Jquery, Bootstrap, Sass, Karma, Grunt, Jasmine, NPM, Emmet, Sketch, Webstorm",
				role: "Conceptualization, Front-End & Back-End Development, Testing",
				img: "src/assets/images/projects/gbBlog/projects-page.png",
				date: "2016-02"
			},
			{
				title: "Duplicate Finder",
				url: "http://duplicatefinder.bitballoon.com/",
				repo: "https://github.com/goodbedford/Finder",
				description: "Duplicate Finder is a small demonstration of finding matching strings in another string algorithm.",
				stack: "Angular, Material Design, UI Router, Bower, Emmet, Webstorm, BitBallon",
				role: "Conceptualization & Front-End Development",
				img: "src/assets/images/projects/duplicateFinder/duplicate-finder.png",
				date: "2016-01"
			},
			{
				title: "Movie Rating Stars",
				url: "http://gb-movie-rating.bitballoon.com/",
				repo: "https://github.com/goodbedford/ratings",
				description: "UI demo of movie rating stars",
				stack: "HTML5, CSS, Javascript, Jquery, Grunt, NPM, Webstorm, Bitballon",
				role: "Conceptualization, Front-End Development",
				img: "src/assets/images/projects/movieRatingStars/star-rating-screenshot.png",
				date: "2016-01"
			},
			{
				title: "atCon",
				url: "https://atcon.herokuapp.com/",
				repo: "https://github.com/sswbelser/atCon",
				description: "A Rich web application built for creating one-off events similar to Eventbrite.",
				stack: "REST API, HTML, CSS, JavaScript, JSON, Heroku, Ruby, Ruby on Rails, PostgreSQL, AWS S3",
				role: "Conceptualization, Git Management & Back-End Development(Routing & Modeling)",
				img: "src/assets/images/projects/atcon/atCon-screenshot.jpg",
				date: "2015-08"
			},
			{
				title: "Enrollment Data Viz",
				url: "https://enrollment-data.herokuapp.com/",
				repo: "https://github.com/goodbedford/enrollment",
				description: "A Data visualization projectSpec showcasing various chart types including animated line, bar, pie, donut and small multiples.",
				stack: "C3, D3, HTML, CSS, Javascript, Node, Express & Heroku",
				role: "Conceptualization, Front-End & Back-End Development",
				img: "src/assets/images/projects/enrollment/enrollment-screenshot.jpg",
				date: "2015-12"
			}
		];
		factory.skills = {
			languages: "JavaScript, Ruby, HTML, CSS, Markdown",
			libraries: "Jquery, Bootstrap, Sass, Underscore, Templating, C3, D3, Rspec, Jasmine, Mocha",
			frameworks: "Angular 1.x, Node, Express, Rails",
			database: "MongoDB, Mongoose, PostgreSQL, MySQL, NoSQL",
			technologies: "Slack, Heroku, Trello, GitHub, REST API, JSON, Karma, Grunt, RWD, HTTP, MVC, AJAX, UI, UX,Bower, NPM, Emmet",
			personal: "Team Building, Communication, Goal-Setting, Leadership, Conflict Resolution, Organization"
		};
		factory.community = [
			{
				title: "Node School/SF/OAK",
				url: "http://nodeschool.io/sanfrancisco/",
				img: "src/assets/images/community/nodeschool-screenshot.png",
				description: "NodeSchool is for people totally new to programming, as well as experienced programmers looking to try a new language or skillset. Knowing some JavaScript will help, but is not necessary."
			},
			{
				title: "SF HTML5 Meet Up",
				url: "http://www.meetup.com/sfhtml5/",
				img: "src/assets/images/community/sfhtml5-screenshot.png",
				description: "Welcome to the San Francisco HTML5 Developer Group: the largest Web Development Meetup in the world! We host monthly events in San Francisco with presentations by the industry's leading experts in cutting-edge web technologies. Past speakers include superstars like Paul Irish, Parisa Tabriz, Jen Simmons, Bruce Lawson, Steve Souders, Divya Manian, Brian Leroux, Pamela Fox, Christian Heilmann, Rachel Nabors, and many more. We also record all of the talks so you can watch the videos later. Check out videos from our past events at bit.ly/sfhtml5videos."

			},
			{
				title: "General Assembly",
				url: "https://generalassemb.ly/",
				img: "src/assets/images/community/general-assembly-screenshot.png",
				description: "At General Assembly, we are creating a global community of individuals empowered to pursue work they love, by offering full-time immersive programs, long-form courses, and classes and workshops on the most relevant skills of the 21st century – from web development and user experience design, to business fundamentals, to data science, to product management and digital marketing."
			},
			{
				title: "Developer Week 2016",
				url: "http://www.developerweek.com/about/",
				img: "src/assets/images/community/HiringMixer-DeveloperWeek2016-screenshot.png",
				description: "DeveloperWeek 2016 is San Francisco’s largest one-week tech event series with over 60 week-long events including the DeveloperWeek 2016 Conference & Expo, the DeveloperWeek Hackathon (1,000+ attendees), Official Hiring Mixer (800+ hirable developers and 50+ hiring companies), and dozens of city-wide partner events. "
			},
			{
				title: "TechUP 2016",
				url: "https://www.facebook.com/lesbianswhotech/posts/1253203418026374",
				img: "src/assets/images/community/techup-hiring.png",
				description: "TechUP connects diverse tech talent with companies who believe diversity is an advantage, and that inclusive teams are stronger, smarter, and better." +
				"TechUP intentionally recruits badass, underrepresented and talented tech professionals with a variety of skills. We especially seek women, people of color, LGBTQ individuals, and people who live with a disability." +
				"TechUP Career Fair Hosted @Twitter HQ Feb 27th"
			}
		];

		factory.getDetail = getDetail;

		function getDetail(id) {
			var project = factory.projects[id];
			return project;
		}
		return factory;
	}
})();