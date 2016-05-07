var bio = {
    'name': 'Jeff',
    'role': 'Jr. System Administrator',
    'contacts': {
        'mobile': '845-309-7576',
        'email': 'zic.jeffrey@gmail.com',
        'github': 'https://github.com/gixugif',
        'twitter': 'https://twitter.com/gixugif',
        'location': 'Red Hook, NY'
    },
    'welcomeMessage': 'Hello, welcome to my resume!',
    'skills': [{
        'value': 2,
        'color': "#00cc00",
        'highlight': "#00ff00",
        'label': 'python 3.x'
    }, {
        'value': 1,
        'color': "#663300",
        'highlight': "#996600",
        'label': 'javascript'
    }, {
        'value': 2,
        'color': "#3366ff",
        'highlight': "#6699ff",
        'label': 'HTML5'
    }, {
        'value': 2,
        'color': "#ffff00",
        'highlight': "#ffff99",
        'label': 'CSS'
    }, {
        'value': 1,
        'color': "#F7464A",
        'highlight': "#FF5A5E",
        'label': 'frontend development'
    }, {
        'value': 3,
        'color': '#cc00ff',
        'highlight': '#ff00ff',
        'label': 'Barracuda Communications Server'
    }],
    'biopic': './img/me-600_small.jpg',
    'polarChart': function(data) {
        var ctx = $(".skills-chart").get(0).getContext('2d');
        var myNewChart = new Chart(ctx);
        new Chart(ctx).PolarArea(data, {
            responsive: true
        });
    },
    'display': function() {
        var $about = $('.about-me');
        var $contacts = $('.topContacts');
        var $footer = $('.footer-contacts');

        $about.prepend(HTMLheaderRole.replace('%data%', bio.role));
        $about.prepend(HTMLheaderName.replace('%data%', bio.name));
        $contacts.append(HTMLmobile.replace(/%data%/gi, bio.contacts.mobile));
        $contacts.append(HTMLemail.replace(/%data%/gi, bio.contacts.email));
        $contacts.append(HTMLgithub.replace(/%data%/gi, bio.contacts.github));
        $contacts.append(HTMLlocation.replace('%data%', bio.contacts.location));

        $footer.append(HTMLmobile.replace(/%data%/gi, bio.contacts.mobile));
        $footer.append(HTMLemail.replace(/%data%/gi, bio.contacts.email));
        $footer.append(HTMLgithub.replace(/%data%/gi, bio.contacts.github));
        $footer.append(HTMLlocation.replace('%data%', bio.contacts.location));

        $('.bio').append(HTMLbioPic.replace('%data%', bio.biopic));

        if (bio.skills.length > 0) {
            $('.bio').append(HTMLskillsStart);
            for (var skill in bio.skills) {
                if (bio.skills.hasOwnProperty(skill)) {
                    $('.skills').append(HTMLskills.replace('%data%', bio.skills[skill].label));
                }
            }
            $('.bio').append(HTMLskillsChart);
            bio.polarChart(bio.skills);
        }
    }
};

var education = {
    'schools': [{
        'name': 'Hofstra',
        'location': 'Hempstead, NY',
        'degree': 'B.S. of Computer Science',
        'majors': ['Comp. Sci'],
        'dates': 2010,
        'url': 'http://www.hofstra.edu/home/'

    }],
    'onlineCourses': [{
        'title': 'Frontend Development Nanodegree',
        'school': 'Udacity',
        'date': 2016,
        'url': 'https://www.udacity.com/'
    }, {
        'title': 'Web Development',
        'school': 'Udacity',
        'date': 2012,
        'url': 'https://www.udacity.com/'
    }],
    'display': function() {

        for (var schoolKey in education.schools) {

            if (education.schools.hasOwnProperty(schoolKey)) {
                $('.education').append(HTMLschoolStart);

                var newHTMLschoolName = HTMLschoolName;
                newHTMLschoolName = newHTMLschoolName.replace('#', education.schools[schoolKey].url);
                newHTMLschoolName = newHTMLschoolName.replace('%data%', education.schools[schoolKey].name);

                $('.education-entry:last').append(newHTMLschoolName);
                $('.school').append(HTMLschoolDegree.replace('%data%', education.schools[schoolKey].degree));
                $('.education-entry:last').append(HTMLschoolDates.replace('%data%', education.schools[schoolKey].dates));
                $('.education-entry:last').append(HTMLschoolLocation.replace('%data%', education.schools[schoolKey].location));
                $('.education-entry:last').append(HTMLschoolMajor.replace('%data%', education.schools[schoolKey].majors));
            }
        }

        $('.online').append(HTMLonlineClasses);

        for (var onlineCourse in education.onlineCourses) {

            if (education.onlineCourses.hasOwnProperty(onlineCourse)) {
                $('.online').append(HTMLonlineStart);

                var newHTMLonlineTitle = HTMLonlineTitle.replace('#', "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001");
                newHTMLonlineTitle = newHTMLonlineTitle.replace('%data%', education.onlineCourses[onlineCourse].title);

                $('.online-entry:last').append(newHTMLonlineTitle);

                $('.online-school').append(HTMLonlineSchool.replace('%data%', education.onlineCourses[onlineCourse].school));
                $('.online-entry:last').append(HTMLonlineDates.replace('%data%', education.onlineCourses[onlineCourse].date));

                var newHTMLonlineURL = HTMLonlineURL;

                newHTMLonlineURL = newHTMLonlineURL.replace('#', education.onlineCourses[onlineCourse].url);
                newHTMLonlineURL = newHTMLonlineURL.replace('%data%', education.onlineCourses[onlineCourse].url);

                $('.online-entry:last').append(newHTMLonlineURL);
            }
        }
    }
};

var work = {
    'jobs': [{
        'employer': 'Rhinebeck Animal Hospital',
        'title': 'Jr. Sysadmin',
        'location': 'Rhinebeck, NY',
        'dates': 'July 2012-current',
        'description': 'Provided technical support to a staff of over 30 people, ' +
            'with 30 VoIP Phones and over 20 computers; improved documentation for building and running systems to increase clarity and efficiency; wrote script to analyze phone call data'
    }],
    'display': function() {

        for (var job in work.jobs) {
            if (work.jobs.hasOwnProperty(job)) {
                $('.workExperience').append(HTMLworkStart);
                var formatEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
                var formatTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
                var formatLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
                var formatDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
                var formatDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
                $('.work-entry:last').append(formatEmployer + formatTitle,
                                            formatLocation,
                                            formatDates,
                                            formatDescription);
            }
        }
    }
};


var projects = {
    'project': [{
        'title': 'Portfolio',
        'url': 'http://gixugif.github.io',
        'dates': 'Oct 2015',
        'description': 'Showing off HTML, CSS, and web page design. This project serves as a front page to show off other projects',
        'images': ['./img/portfolio-600_small.jpg 600w', './img/portfolio-1000_medium.jpg 1000w', './img/portfolio-1600_large.jpg 1600w']
    }, {
        'title': 'Resume',
        'url': '#',
        'dates': 'Oct 2015',
        'description': 'Showing off JS, JQuery and JSON. This project serves as an online resume',
        'images': ['./img/resume-600_small.jpg 600w', './img/resume-1000_medium.jpg 1000w', './img/resume-1600_large.jpg 1600w']
    }, {
        'title': 'Call Detail Recording',
        'url': 'https://github.com/Gixugif/CDRecording',
        'dates': 'Nov 2015',
        'description': 'Analyzes phone call metadata',
        'images': ['./img/cdr-600_small.jpg 600w', './img/cdr-1000_medium.jpg 1000w', './img/cdr-1600_large.jpg 1600w']
    }],
    'display': function() {
        for (var proj in projects.project) {
            if (projects.project.hasOwnProperty(proj)) {
                $('.projects').append(HTMLprojectStart);
                var projectTitle = HTMLprojectTitle.replace('%titleData%', projects.project[proj].title);
                projectTitle = projectTitle.replace('%urlData%', projects.project[proj].url);
                $('.project-entry:last').append(projectTitle);
                $('.project-entry:last').append(HTMLprojectDates.replace('%data%', projects.project[proj].dates));
                $('.project-entry:last').append(HTMLprojectDescription.replace('%data%', projects.project[proj].description));
                imgSrcStr = HTMLprojectImage.replace('%srcSetData%', projects.project[proj].images.join(','));
                imgSrcStr = imgSrcStr.replace('%srcData%', projects.project[proj].images[0]);
                imgSrcStr = imgSrcStr.replace('%altData%', projects.project[proj].title);
                $('.project-entry:last').append(imgSrcStr);
            }
        }
    }
};

bio.display();
education.display();
work.display();
projects.display();
$('.mapDiv').append(googleMap);