/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/
/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<div class="row name"><h1 class="name">%data%</h1></div>';
var HTMLheaderRole = '<span>%data%</span><hr/>';

var HTMLcontactGeneric = '<li class="col-sm-3"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="col-sm-3"><span class="orange-text">mobile</span><span class="white-text contact-data"><a href="tel:+1-%data%">%data%</a></span></li>';
var HTMLemail = '<li class="col-sm-3"><span class="orange-text">email</span><span class="white-text contact-data"><a href="mailto:%data%">%data%</a></span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text contact-data">%data%</span></li>';
var HTMLgithub = '<li class="col-sm-3"><span class="orange-text">github</span><span class="white-text contact-data"><a href="%data%">%data%</a></span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text contact-data">%data%</span></li>';
var HTMLlocation = '<li class="col-sm-3"><span class="orange-text">location</span><span class="white-text contact-data">%data%</span></li>';

var HTMLbioPic = '<div class="col-sm-2 cent"><img src="%data%" class="img-circle bio-pic"></div>';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<div class="col-sm-2 cent "><h3 class="skills-h3">Skills at a Glance:</h3><ul class="skills"></ul></div>';
var HTMLskills = '<li><span class="white-text">%data%</span></li>';
var HTMLskillsChart = '<div class="col-sm-2 cent"><canvas class="skills-chart" width="300" height="300"></canvas></div>';

var HTMLworkStart = '<div class="row work-entry"></div>';
var HTMLworkEmployer = '<div class="row"><a class="col-xs-4" href="#">%data%';
var HTMLworkTitle = ' - %data%</a></div>';
var HTMLworkDates = '<div class="row"><div class="col-xs-1 date-text">%data%</div></div>';
var HTMLworkLocation = '<div class="row"><div class="col-xs-2 location-text">%data%</div></div>';
var HTMLworkDescription = '<div class="row"><div class="col-xs-8"><p><br>%data%</p></div></div>';

var HTMLprojectStart = '<div class="col-md-6 project-entry"></div>';
var HTMLprojectTitle = '<div class="row"><a class="col-xs-6" href="%urlData%">%titleData%</a></div>';
var HTMLprojectDates = '<div class="row"><div class="col-xs-6 date-text">%data%</div></div>';
var HTMLprojectDescription = '<div class="row"><div class="col-xs-6"><p><br>%data%</p></div></div>';
var HTMLprojectImage = '<div class="row"><div class="col-xs-6"><img class="img-rounded img-responsive project_img" srcset="%srcSetData%"' +
    ' sizes="(min-width: 766px) 33vw, 100vw" src="%srcData%" alt="%altData%"></a></div></div>';

var HTMLschoolStart = '<div class="row education-entry"></div>';
var HTMLschoolName = '<div class="row"><div class="col-xs-4 school"><a href="#">%data%</a>';
var HTMLschoolDegree = ' -- %data%</div></div>';
var HTMLschoolDates = '<div class="row"><div class="col-xs-1 date-text">%data%</div></div>';
var HTMLschoolLocation = '<div class="row"><div class="col-xs-2 location-text">%data%</div></div>';
var HTMLschoolMajor = '<div class="row"><div class="col-xs-2"><em>Major: %data%</em></div></div><br>';

var HTMLonlineStart = '<div class="col-md-4 online-entry"></div>';
var HTMLonlineClasses = '<div class="row"><div class="col-md-4"><h3 class="pad">Online Classes</h3></div></div>';
var HTMLonlineTitle = '<div class="row"><a class="col-md-12 online-school" href="#">%data%';
var HTMLonlineSchool = ' - %data%</a></div>';
var HTMLonlineDates = '<div class="row"><div class="col-md-12 date-text">%data%</div></div>';
var HTMLonlineURL = '<div class="row"><div class="col-md-12"><a href="#">%data%</a></div></div><br>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div class="map"></div>';


/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map; // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

    var locations;

    var mapOptions = {
        disableDefaultUI: true
    };

    /*
    For the map to be displayed, the googleMap var must be
    appended to .mapDiv in resumeBuilder.js.
    */
    map = new google.maps.Map(document.querySelector('.map'), mapOptions);


    /*
    locationFinder() returns an array of every location string from the JSONs
    written for bio, education, and work.
    */
    function locationFinder() {

        // initializes an empty array
        var locations = [];

        // adds the single location property from bio to the locations array
        locations.push(bio.contacts.location);

        // iterates through school locations and appends each location to
        // the locations array
        for (var school in education.schools) {
            if (education.schools.hasOwnProperty(school)) {
                locations.push(education.schools[school].location);
            }
        }

        // iterates through work locations and appends each location to
        // the locations array
        for (var job in work.jobs) {
            if (work.jobs.hasOwnProperty(job)) {
                locations.push(work.jobs[job].location);
            }
        }

        return locations;
    }

    /*
    createMapMarker(placeData) reads Google Places search results to create map pins.
    placeData is the object returned from search results containing information
    about a single location.
    */
    function createMapMarker(placeData) {

        // The next lines save location data from the search result object to local variables
        var lat = placeData.geometry.location.lat(); // latitude from the place service
        var lon = placeData.geometry.location.lng(); // longitude from the place service
        var name = placeData.formatted_address; // name of the place from the place service
        var bounds = window.mapBounds; // current boundaries of the map window

        // marker is an object with additional data about the pin for a single location
        var marker = new google.maps.Marker({
            map: map,
            position: placeData.geometry.location,
            title: name
        });

        // infoWindows are the little helper windows that open when you click
        // or hover over a pin on a map. They usually contain more information
        // about a location.
        var infoWindow = new google.maps.InfoWindow({
            content: name

        });

        // hmmmm, I wonder what this is about...
        google.maps.event.addListener(marker, 'click', function() {
            infoWindow.open(map, marker);
        });

        // this is where the pin actually gets added to the map.
        // bounds.extend() takes in a map location object
        bounds.extend(new google.maps.LatLng(lat, lon));
        // fit the map to the new marker
        map.fitBounds(bounds);
        // center the map
        map.setCenter(bounds.getCenter());
    }

    /*
    callback(results, status) makes sure the search returned results for a location.
    If so, it creates a new map marker for that location.
    */
    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            createMapMarker(results[0]);
        }
    }

    /*
    pinPoster(locations) takes in the array of locations created by locationFinder()
    and fires off Google place searches for each location
    */
    function pinPoster(locations) {

        // creates a Google place search service object. PlacesService does the work of
        // actually searching for location data.
        var service = new google.maps.places.PlacesService(map);

        // Iterates through the array of locations, creates a search object for each location
        for (var place in locations) {
            if (locations.hasOwnProperty(place)) {
                // the search request object
                var request = {
                    query: locations[place]
                };

                // Actually searches the Google Maps API for location data and runs the callback
                // function with the search results after each search.
                service.textSearch(request, callback);
            }
        }
    }

    // Sets the boundaries of the map based on pin locations
    window.mapBounds = new google.maps.LatLngBounds();

    // locations is an array of location strings returned from locationFinder()
    locations = locationFinder();

    // pinPoster(locations) creates pins on the map for each location in
    // the locations array
    pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
    // Make sure the map bounds get updated on page resize
    map.fitBounds(mapBounds);
});