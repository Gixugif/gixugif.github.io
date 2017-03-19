var bio = {
    'name': 'Jeff',
    'role': 'Network Administrator',
    'contacts': {
        'mobile': '845-309-7576',
        'email': 'zic.jeffrey@gmail.com',
        'github': 'https://github.com/JeffreyZic',
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
        'value': 1,
        'color': "#7D1662",
        'highlight': "#902D76",
        'label': 'Git/ GitHub'
    }, {
        'value': 1,
        'color': "#04C991",
        'highlight': "#00FFB7",
        'label': 'Bootstrap'
    }, {
        'value': 1,
        'color': "#000",
        'highlight': "#484848",
        'label': 'jQuery'
    }, {
        'value': 1,
        'color': "#2e5d03",
        'highlight': "#428603",
        'label': 'Knockout'
    }, {
        'value': 1,
        'color': "#a45100",
        'highlight': "#d16700",
        'label': 'Jasmine'
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

        $about.prepend(HTMLheaderRole.replace('%data%', bio.role))
        .prepend(HTMLheaderName.replace('%data%', bio.name));

        $contacts.append(HTMLmobile.replace(/%data%/gi, bio.contacts.mobile))
        .append(HTMLemail.replace(/%data%/gi, bio.contacts.email))
        .append(HTMLgithub.replace(/%data%/gi, bio.contacts.github))
        .append(HTMLlocation.replace('%data%', bio.contacts.location));

        $footer.append(HTMLmobile.replace(/%data%/gi, bio.contacts.mobile))
        .append(HTMLemail.replace(/%data%/gi, bio.contacts.email))
        .append(HTMLgithub.replace(/%data%/gi, bio.contacts.github))
        .append(HTMLlocation.replace('%data%', bio.contacts.location));

        $('.bio').append(HTMLbioPic.replace('%data%', bio.biopic));

        if (bio.skills.length > 0) {
            $('.bio').append(HTMLskillsStart);
            bio.skills.forEach(function(skill) {
                $('.skills').append(HTMLskills.replace('%data%', skill.label));

            });
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
        'dates': 'September 2008 - May 2010 (Not Gruaduated)',
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

        education.schools.forEach(function(school) {

            $('.education').append(HTMLschoolStart);

            var newHTMLschoolName = HTMLschoolName;
            newHTMLschoolName = newHTMLschoolName.replace('#', school.url);
            newHTMLschoolName = newHTMLschoolName.replace('%data%', school.name);

            $('.education-entry:last').append(newHTMLschoolName);
            $('.school').append(HTMLschoolDegree.replace('%data%', school.degree));
            $('.education-entry:last').append(HTMLschoolDates.replace('%data%', school.dates));
            $('.education-entry:last').append(HTMLschoolLocation.replace('%data%', school.location));
            $('.education-entry:last').append(HTMLschoolMajor.replace('%data%', school.majors));
        });

        $('.online').append(HTMLonlineClasses);

        education.onlineCourses.forEach(function(onlineCourse) {
            $('.online').append(HTMLonlineStart);

            var newHTMLonlineTitle = HTMLonlineTitle.replace('#', "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001");
            newHTMLonlineTitle = newHTMLonlineTitle.replace('%data%', onlineCourse.title);

            $('.online-entry:last').append(newHTMLonlineTitle);

            $('.online-school:last').append(HTMLonlineSchool.replace('%data%', onlineCourse.school));
            $('.online-entry:last').append(HTMLonlineDates.replace('%data%', onlineCourse.date));

            var newHTMLonlineURL = HTMLonlineURL;

            newHTMLonlineURL = newHTMLonlineURL.replace('#', onlineCourse.url);
            newHTMLonlineURL = newHTMLonlineURL.replace('%data%', onlineCourse.url);

            $('.online-entry:last').append(newHTMLonlineURL);
        });
    }
};

var work = {
    'jobs': [{
        'employer': 'Rhinebeck Animal Hospital',
        'title': 'Network Administrator',
        'location': 'Rhinebeck, NY',
        'dates': 'July 2012-current',
        'description': '<ul><li>Provide technical support to a staff of over 30 people, with 30 VoIP Phones and over 20 computers</li>' +
            '<li>Improved documentation for building and running systems to increase clarity and efficiency</li>' +
            '<li>Wrote script to analyze phone call metadata</li></ul>'
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
        'title': 'Feed Reader',
        'url': 'https://github.com/JeffreyZic/frontend-nanodegree-feedreader',
        'dates': 'May 2016',
        'description':  '<ul><li>Built tests using Jasmine framework</li>' +
                        '<li>Uses asynchronous tests</li></ul>',
        'images': ['./img/feedReader-600_small.jpg 600w', './img/feedReader-1000_medium.jpg 1000w', './img/feedReader-1600_large.jpg 1600w']
    }, {
        'title': 'Neighborhood Map',
        'url': 'https://github.com/JeffreyZic/neighborhood-map',
        'dates': 'May 2016',
        'description': '<ul><li>Created web app using Google Maps and Yelp Search API</li>' +
                        '<li>Makes asynchronous calls to 3rd party APIs</li>' +
                        '<li>Responsive, practical user experience</li></ul>',
        'images': ['./img/neighborhood-600_small.jpg 600w', './img/neighborhood-1000_medium.jpg 1000w', './img/neighborhood-1600_large.jpg 1600w']
    }, {
        'title': 'Space Invaders',
        'url': 'https://github.com/JeffreyZic/Space-Invaders',
        'dates': 'January 2016',
        'description':  '<ul><li>Created bug-free, object-oriented JavaScript game in HTML5 canvas</li>' +
                        '<li>Game loop able to enter different states</li></ul>',
        'images': ['./img/galaga-600_small.jpg 600w', './img/galaga-1000_medium.jpg 1000w', './img/galaga-1600_large.jpg 1600w']
    }, {
        'title': 'Call Detail Recording',
        'url': 'https://github.com/JeffreyZic/CDRecording',
        'dates': 'Nov 2015',
        'description': '<ul><li>Built extendable script with Python 3.x</li>' +
                        '<li>Quickly analyzes 10,000s of phone call metadata</li></ul>',
        'images': ['./img/cdr-600_small.jpg 600w', './img/cdr-1000_medium.jpg 1000w', './img/cdr-1600_large.jpg 1600w']
    }],
    'display': function() {
        projects.project.forEach(function(proj) {
            $('.projects').append(HTMLprojectStart);
            var projectTitle = HTMLprojectTitle.replace('%titleData%', proj.title);
            projectTitle = projectTitle.replace('%urlData%', proj.url);
            $('.project-entry:last').append(projectTitle);
            $('.project-entry:last').append(HTMLprojectDates.replace('%data%',proj.dates));
            $('.project-entry:last').append(HTMLprojectDescription.replace('%data%', proj.description));
            imgSrcStr = HTMLprojectImage.replace('%srcSetData%', proj.images.join(','));
            imgSrcStr = imgSrcStr.replace('%srcData%',proj.images[0]);
            imgSrcStr = imgSrcStr.replace('%altData%', proj.title);
            $('.project-entry:last').append(imgSrcStr);
        });
    }
};

bio.display();
education.display();
work.display();
projects.display();
$('.mapDiv').append(googleMap);


var biofr = {
    'name': 'Jeff',
    'role': 'Adminastrateur rèseau',
    'contacts': {
        'mobile': '+1 845.309.7576',
        'email': 'zic.jeffrey@gmail.com',
        'github': 'https://github.com/JeffreyZic',
        'twitter': 'https://twitter.com/gixugif',
        'location': 'Red Hook, NY'
    },
    'welcomeMessage': 'Salut, bienvenue chez mon CV!',
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
        'label': 'developpment front'
    }, {
        'value': 1,
        'color': "#7D1662",
        'highlight': "#902D76",
        'label': 'Git/ GitHub'
    }, {
        'value': 1,
        'color': "#04C991",
        'highlight': "#00FFB7",
        'label': 'Bootstrap'
    }, {
        'value': 1,
        'color': "#000",
        'highlight': "#484848",
        'label': 'jQuery'
    }, {
        'value': 1,
        'color': "#2e5d03",
        'highlight': "#428603",
        'label': 'Knockout'
    }, {
        'value': 1,
        'color': "#a45100",
        'highlight': "#d16700",
        'label': 'Jasmine'
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

        $about.prepend(HTMLheaderRole.replace('%data%', bio.role))
        .prepend(HTMLheaderName.replace('%data%', bio.name));

        $contacts.append(HTMLmobile.replace(/%data%/gi, bio.contacts.mobile))
        .append(HTMLemail.replace(/%data%/gi, bio.contacts.email))
        .append(HTMLgithub.replace(/%data%/gi, bio.contacts.github))
        .append(HTMLlocation.replace('%data%', bio.contacts.location));

        $footer.append(HTMLmobile.replace(/%data%/gi, bio.contacts.mobile))
        .append(HTMLemail.replace(/%data%/gi, bio.contacts.email))
        .append(HTMLgithub.replace(/%data%/gi, bio.contacts.github))
        .append(HTMLlocation.replace('%data%', bio.contacts.location));

        $('.bio').append(HTMLbioPic.replace('%data%', bio.biopic));

        if (bio.skills.length > 0) {
            $('.bio').append(HTMLskillsStart);
            bio.skills.forEach(function(skill) {
                $('.skills').append(HTMLskills.replace('%data%', skill.label));

            });
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
        'dates': 'September 2008 - May 2010 (Not Gruaduated)',
        'url': 'http://www.hofstra.edu/home/'

    }],
    'onlineCourses': [{
        'title': 'Frontend Development Nanodegree',
        'school': 'Udacity',
        'date': 2016,
        'url': 'https://www.udacity.com/'
    }, {
        'title': 'Developpement web',
        'school': 'Udacity',
        'date': 2012,
        'url': 'https://www.udacity.com/'
    }],
    'display': function() {

        education.schools.forEach(function(school) {

            $('.education').append(HTMLschoolStart);

            var newHTMLschoolName = HTMLschoolName;
            newHTMLschoolName = newHTMLschoolName.replace('#', school.url);
            newHTMLschoolName = newHTMLschoolName.replace('%data%', school.name);

            $('.education-entry:last').append(newHTMLschoolName);
            $('.school').append(HTMLschoolDegree.replace('%data%', school.degree));
            $('.education-entry:last').append(HTMLschoolDates.replace('%data%', school.dates));
            $('.education-entry:last').append(HTMLschoolLocation.replace('%data%', school.location));
            $('.education-entry:last').append(HTMLschoolMajor.replace('%data%', school.majors));
        });

        $('.online').append(HTMLonlineClasses);

        education.onlineCourses.forEach(function(onlineCourse) {
            $('.online').append(HTMLonlineStart);

            var newHTMLonlineTitle = HTMLonlineTitle.replace('#', "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001");
            newHTMLonlineTitle = newHTMLonlineTitle.replace('%data%', onlineCourse.title);

            $('.online-entry:last').append(newHTMLonlineTitle);

            $('.online-school:last').append(HTMLonlineSchool.replace('%data%', onlineCourse.school));
            $('.online-entry:last').append(HTMLonlineDates.replace('%data%', onlineCourse.date));

            var newHTMLonlineURL = HTMLonlineURL;

            newHTMLonlineURL = newHTMLonlineURL.replace('#', onlineCourse.url);
            newHTMLonlineURL = newHTMLonlineURL.replace('%data%', onlineCourse.url);

            $('.online-entry:last').append(newHTMLonlineURL);
        });
    }
};

var workfr = {
    'jobs': [{
        'employer': 'Rhinebeck Animal Hospital',
        'title': 'Adminastrateur Rèseau',
        'location': 'Rhinebeck, NY',
        'dates': 'Depuis juillet 2012',
        'description': '<ul><li>Support technique à une équipe de 30 employées, avec 30 téléphones VoIP et 20 ordinateurs. Amélioration de la documentation de mis en place et utilisation des systèmes pour améliorer la clarté et l’efficacité. Amélioration de le fiabilité et l’efficacité de le sauvegarder automatique et les scriptes pour contrôler. Recherche et test des nouvelles technologies et réaliser le plus efficace.</li></ul>'
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


var projectsfr = {
    'project': [{
        'title': 'Feed Reader',
        'url': 'https://github.com/JeffreyZic/frontend-nanodegree-feedreader',
        'dates': 'Mais 2016',
        'description':  '<ul><li>Construition de tests en utilisant le framework Jasmine</li>' +
                        '<li>Utilisation de tests asynchrone</li></ul>',
        'images': ['./img/feedReader-600_small.jpg 600w', './img/feedReader-1000_medium.jpg 1000w', './img/feedReader-1600_large.jpg 1600w']
    }, {
        'title': 'Carte de quartier',
        'url': 'https://github.com/JeffreyZic/neighborhood-map',
        'dates': 'Mais 2016',
        'description': "<ul><li>Construition d'application web en utilisant le Google Maps et API Yelp search</li>" +
                        "<li>Utilisation  d'appells asynchrones à APIs 3eme partie</li>" +
                        "<li>Responsive, practique  experience de l'user</li></ul>",
        'images': ['./img/neighborhood-600_small.jpg 600w', './img/neighborhood-1000_medium.jpg 1000w', './img/neighborhood-1600_large.jpg 1600w']
    }, {
        'title': 'Space Invaders',
        'url': 'https://github.com/JeffreyZic/Space-Invaders',
        'dates': 'Janvier 2016',
        'description':  '<ul><li>Construition de sans bug, objet-orientée jeux en canvas HTML5</li></ul>',
        'images': ['./img/galaga-600_small.jpg 600w', './img/galaga-1000_medium.jpg 1000w', './img/galaga-1600_large.jpg 1600w']
    }, {
        'title': 'Call Detail Recording',
        'url': 'https://github.com/JeffreyZic/CDRecording',
        'dates': 'Nov 2015',
        'description': "<ul><li>Construition d'un script extensible en utilisant Python 3.x</li>" +
                        '<li>Analyse rapidement 10,000s de metadonnées de appells téléphones</li></ul>',
        'images': ['./img/cdr-600_small.jpg 600w', './img/cdr-1000_medium.jpg 1000w', './img/cdr-1600_large.jpg 1600w']
    }],
    'display': function() {
        projects.project.forEach(function(proj) {
            $('.projects').append(HTMLprojectStart);
            var projectTitle = HTMLprojectTitle.replace('%titleData%', proj.title);
            projectTitle = projectTitle.replace('%urlData%', proj.url);
            $('.project-entry:last').append(projectTitle);
            $('.project-entry:last').append(HTMLprojectDates.replace('%data%',proj.dates));
            $('.project-entry:last').append(HTMLprojectDescription.replace('%data%', proj.description));
            imgSrcStr = HTMLprojectImage.replace('%srcSetData%', proj.images.join(','));
            imgSrcStr = imgSrcStr.replace('%srcData%',proj.images[0]);
            imgSrcStr = imgSrcStr.replace('%altData%', proj.title);
            $('.project-entry:last').append(imgSrcStr);
        });
    }
};

bio.display();
education.display();
work.display();
projects.display();
$('.mapDiv').append(googleMap);
