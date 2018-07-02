/*
This is empty on purpose! Your code to build the resume will go here.
 */

(function () 
	var bio = {
	 	name: 'Krittiya Clark',
	    role: 'Front End Software Engineer',
	    contacts: {
	        mobile: '+1 914-262-3909',
	        email: 'krittiyaclark@gmail.com'
	        github: 'https://github.com/krittiyaclark',
	        twitter: 'https://twitter.com/krittiyaClark',
	        location: 'Vermont, USA'
	        },
	    welcomeMessage: 'Welcome to my resume',
	    skills: ['JavaScript', 'SASS', 'Gulp', 'Webpack', 'Jamine', 'Git', 'GitHub'],
	    biopic: 'images/Krittiya_Clark.png',
	    display: function () {
	    	var formattedName = HTMLheaderName.replace(%data%, bio.name);
	    	var formattedRole = HTMLheaderRole.replace(%data%, bio.role);

	    	var formattedMobile = HTMLheaderMobile.replace(%data%, bio.contacts.mobile);
	    	var formattedEmail = HTMLheaderEmail.replace(%data%, bio.contacts.email);
	    	var formattedGithub = HTMLheaderGithub.replace(%data%, bio.contacts.github;
	    	var formattedTwitter = HTMLheaderTwitter.replace(%data%, bio.contacts.twitter);
	    	var formattedLocation = HTMLheaderLocation.replace(%data%, bio.contacts.location);

	    	var formattedWelcomeMessage = HTMLheaderWelcomeMessage.replace(%data%, bio.welcomeMessage);
	    	var formattedBiopic = HTMLheaderBiopic.replace(%data%, bio.biopic);

	    	$('#header').prepend(formattedName + formattedRole);
	    	$('#topContact, #footerContacts').append(formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedLocation);
	    	$('#header').append(formattedWelcomeMessage);
	    	$('#header').append(formattedBio);


	    	if (bio.skills.length > 0) {
	    		$('#header').append(HTMLskillsStart);

		    	for (var i = 0, i < bio.skills.length; i++) {
		    		var formattedSkills = HTMLskills.replace(%data%, bio.skill[i]);

		    		$('#skills').append(formattedSkills);
		    	}
		    }
	    }
 };

	var education = {
		schools: [
			{
		        name: 'Udacity',
		        location: 'San Francisco, USA',
		        degree: 'Certificate',
		        majors: ['Grow with Google Nanodegree Front-End- Webdevelopment'],
		        dates: '2018',
		        url: 'http://www.udacity.com'
     		}
     	],
	    onlineCourses: [
	    	{
		        title: 'Grow with Google Nanodegree Front-End- Webdevelopment',
		        school: 'Udacity',
		        dates: '2018',
		        url: 'http://www.udacity.com'
		    }
		],
	    display: function () {
	    	if (education.schools.length > 0 || education.onlineCourses.length > 0) {
	    		for (var i = 0; i < education.schools; i++) {
	    			var formattedName = HTMLschoolName.replace(%data%, education.schools[i].name);
	    			var formattedLocation = HTMLschoolLocation.replace(%data%, education.schools[i].location;
	    			var formattedDegree = HTMLschoolDegree.replace(%data%, education.schools[i].degree);
	    			var formattedSchoolDate = HTMLschoolSchoolDate.replace(%data%, education.schools[i].dates);
	    			var formattedNameDegree = formattedName + formattedDegree;

	    			$('#education').append(HTMLschoolStart);
			        $('.education-entry:last').append(formattedNameDegree);
			        $('.education-entry:last').append(formattedSchoolDates);
			        $('.education-entry:last').append(formattedLocation);

	    		for (var j = 0, jLen = education.schools[i].majors.length; j < jLen; j++) {
          			var formattedMajor = HTMLschoolMajor.replace(%data%, education.schools[i].majors[j]);

          			$('.education-entry:last').append(formattedMajor);
        		}
      		}

      		$('#education').append(HTMLonlineClasses);

			for (var k = 0, len = education.onlineCourses.length; k < len; k++) {
				var formattedTitle = HTMLonlineTitle.replace(%data%, education.onlineCourses[k].title).replace('#', education.onlineCourses[k].url);
				var formattedSchool = HTMLonlineSchool.replace(%data%, education.onlineCourses[k].school);
				var formattedOnlineDates = HTMLonlineDates.replace(%data%, education.onlineCourses[k].dates);
				var formattedUrl = HTMLonlineURL.replace(%data%, education.onlineCourses[k].url);
				var formattedTitleSchool = formattedTitle + formattedSchool;

				$('#education').append(HTMLschoolStart);
				$('.education-entry:last').append(formattedTitleSchool);
				$('.education-entry:last').append(formattedOnlineDates);
				$('.education-entry:last').append(formattedUrl);
			}
	    }
	}
	};

	var work = {
		jobs: {
	        employer: 'Learn-To-Code', 
	        title: 'Founder/Facilitator',
	        location: 'Online',
	        dates: '2018',
	        description: 'I help facilitate collaboration at Learn-To-Code, a community-powered (coding). We are motivated individuals with shared goals and group them intentionally. The mission is to learn, help and build a project.'
	        }
    display: function taking no parameters
 }

	var projects = {
		projects: {
	        title: 'Memory Game', 
	        dates: '2018'
	        description: 'This is a game built to test a user memory. There is a deck of cards with different icons.',
	        images: 'https://krittiyaclark.github.io/Udacity-Memory-Game/'
	        }
    display: function taking no parameters
 }

bio.display();
})();
