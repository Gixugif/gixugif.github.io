var bootstrapMenu = "<div class='no-padding col-xs-12'>" +
    "<nav class='navbar navbar-default no-bottom-margin'>" +
    "<div class='container-fluid'>" +
    "<div class='navbar-header'>" +
    "<button type='button' class='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>" +
    "<span class='icon-bar'></span>" +
    "<span class='icon-bar'></span>" +
    "<span class='icon-bar'></span>" +
    "</button>" +
    "<a class='navbar-brand' href='http://jeffreyzic.github.io/gixugif.github.io'>My Portfolio</a>" +
    "</div>" +
    "<div class='collapse navbar-collapse' id='myNavbar'>" +
    "<ul class='nav navbar-nav'>" +
    "<li class='active'><a href='http://jeffreyzic.github.io/gixugif.github.io'>Home</a>" +
    "</li>" +
    "<li><a href='http://jeffreyzic.github.io/gixugif.github.io/#bio'>About Me</a>" +
    "</li>" +
    "<li><a class='dropdown-toggle' data-toggle='dropdown' href='#'>Porfolio" +
    "<span class='caret'></span></a>" +
    "<ul class='dropdown-menu'>" +
    "<li><a href='http://jeffreyzic.github.io/gixugif.github.io/index.html'>Portfolio</a>" +
    "</li>" +
    "<li><a href='http://jeffreyzic.github.io/gixugif.github.io/Resume/index.html'>Resume</a>" +
    "</li>" +
    "<li><a href='http://jeffreyzic.github.io/gixugif.github.io/frontend-nanodegree-arcade-game-master/index.html'>Classic Arcade Game</a>" +
    "</li>" +
    "<li><a href='http://jeffreyzic.github.io/gixugif.github.io/neighborhood-map/index.html'>Neighborhood Map</a>" +
    "</li>" +
    "<li><a href='http://jeffreyzic.github.io/gixugif.github.io/Website_Optimization/views/pizza.html'>Website Optimization</a>" +
    "</li>" +
    "<li><a href='http://jeffreyzic.github.io/gixugif.github.io/Feedreader_Testing/index.html'>Feedreader Testing</a>" +
    "</li>" +
    "</ul>" +
    "</li>" +
    "<li><a class='dropdown-toggle' data-toggle='dropdown' href='#'>Share" +
    "<span class='caret'></span></a>" +
    "<ul class='dropdown-menu'>" +
    "<li><a class='brandico-facebook-rect' href='https://www.facebook.com/?_rdr=p' target='_blank'>facebook</a>" +
    "</li>" +
    "<li><a class='brandico-twitter-bird' href='https://twitter.com/' target='_blank'>twitter</a>" +
    "</li>" +
    "<li><a class='brandico-googleplus-rect' href='https://plus.google.com/' target='_blank'>google-plus</a>" +
    "</li>" +
    "<li><a class='brandico-github' href='https://github.com/' target='_blank'>github</a>" +
    "</li>" +
    "</ul>" +
    "</li>" +
    "</ul>" +
    "</div>" +
    "</div>" +
    "</nav>" +
    "</div>";


var addMenu = function (bootstrapMenu) {
    var menuLoc = $('.navigation-row');
    menuLoc.append(bootstrapMenu);
};

addMenu(bootstrapMenu);
