/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
 	name: "Krittiya Clark",
    role: "Front-End Web Developer",
    contacts: {
        mobile: "+1 914-262-3909",
        email: "krittiyaclark@gmail.com",
        github: "https://github.com/krittiyaclark",
        linkedin: "https://www.linkedin.com/in/krittiya-clark-front-end",
        location: "Vermont, USA"
        },
    welcomeMessage: "I am a self-taught Front-end web developer passion for learning and eager to use my web development experience to create clean, modern, and responsive web applications.",
    skills: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "SASS", "Gulp", "Webpack", "Jamine", "Git", "GitHub"],
    biopic: "images/Krittiya_Clark.png",
    display: function () {
    	var formattedName = HTMLheaderName.replace("%data%", bio.name);
    	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    	var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
    	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    	var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);

    	$("#header").prepend(formattedName + formattedRole);
    	$("#topContact, #footerContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedLinkedin+ formattedLocation);
    	$("#header").append(formattedWelcomeMessage);
    	$("#header").append(formattedBiopic);


    	if (bio.skills.length > 0) {
    		$("#header").append(HTMLskillsStart);

	    	for (var i = 0, LEN = bio.skills.length; i < LEN; i++) {
	    		var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);

	    		$("#skills").append(formattedSkills);
	    	}
	    }
    }
};

var education = {
	schools: [
		{
	        "name": "Comunity College of Vermont",
	        "location": "Vermont, USA",
	        "degree": "Certificate",
	        "majors": ["Web design"],
	        "dates": "2010 - 2011",
	        "url": "http://ccv.edu"
 		},
 		{
	        "name": "School of Visual Art",
	        "location": "New York, New York, USA",
	        "degree": "Continue Education",
	        "majors": ["Film"],
	        "dates": "2008 - 2009",
	        "url": "http://www.sva.edu"
 		}
 	],
    onlineCourses: [
    	{
	        title: "Grow with Google Nanodegree Front-End- Webdevelopment",
	        school: "Udacity",
	        dates: "Apr 2018 - Oct 2018",
	        url: "http://www.udacity.com"
	    },
	    {
	        title: "Grow with Google Challenge Scholarship",
	        school: "Udacity",
	        dates: "Jan 2018 - March 2018",
	        url: "http://www.udacity.com"
	    }
	],
    display: function () {
    	if (education.schools.length > 0 || education.onlineCourses.length > 0) {
			for (var i = 0, iLEN = education.schools.length; i < iLEN; i++) {
				var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
				var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
				var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
				var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
				var formattedNameDegree = formattedName + formattedDegree;

				$('#education').append(HTMLschoolStart);
				$('.education-entry:last').append(formattedNameDegree);
				$('.education-entry:last').append(formattedSchoolDates);
				$('.education-entry:last').append(formattedLocation);

    		for (var j = 0, jLen = education.schools[i].majors.length; j < jLen; j++) {
      			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);

      			$(".education-entry:last").append(formattedMajor);
    		}
  		}

  		$("#education").append(HTMLonlineClasses);

		for (var k = 0, LEN = education.onlineCourses.length; k < LEN; k++) {
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[k].title).replace("#", education.onlineCourses[k].url);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[k].school);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[k].dates);
			var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[k].url);
			var formattedTitleSchool = formattedTitle + formattedSchool;

			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(formattedTitleSchool);
			$(".education-entry:last").append(formattedOnlineDates);
			$(".education-entry:last").append(formattedUrl);
			}
    	}
	}
};

var work = {
	jobs: [
		{
	        employer: "Learn-To-Code", 
	        title: "Founder/Facilitator",
	        location: "Online",
	        dates: "2018",
	        description: "I help facilitate collaboration at Learn-To-Code, a community-powered (coding). We are motivated individuals with shared goals and group them intentionally. The mission is to learn, help and build a project."
        }
    ],
	display: function () {
		if (work.jobs.length > 0) {
			for (var i = 0, LEN = work.jobs.length; i < LEN; i++) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;

			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append(formattedEmployerTitle);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDescription);
			}
    	}
  	}
};

var projects = {
	projects: [ 
		{
	        title: "Memory Game", 
	        dates: "2018",
	        description: "This is a game built to test a user memory. There is a deck of cards with different icons.",
	        images: ["images/memory-game.png"]
        },
        {
	        title: "Arcade-Game", 
	        dates: "2018",
	        description: "this game you have a Player and Enemy. You are the Player, the goal is the Player reaches to the water without colliding with the enemies. If you are colliding with the enemies, the game will reset. On the other hand, if the Player reaches to the water, you won! You can move left, right, up or down with arrow keys.",
	        images: ["images/arcade-game.png"]
        }
    ],
	display: function () {
		    if (projects.projects.length > 0) {
				for (var i = 0, iLEN = projects.projects.length; i < iLEN; i++) {
					var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
					var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
					var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

					$("#projects").append(HTMLprojectStart);
					$(".project-entry:last").append(formattedTitle);
					$(".project-entry:last").append(formattedDates);
					$(".project-entry:last").append(formattedDescription);

				for (var j = 0, jLEN = projects.projects[i].images.length; j < jLEN; j++) {
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);

					$(".project-entry:last").append(formattedImage);
				}
			}
		}
    }
};


bio.display();
education.display();
work.display();
projects.display();
$("#mapDiv").append(googleMap);



