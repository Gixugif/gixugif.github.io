var bootstrapMenu = "<div class='no-padding col-xs-12'>" +
    "<nav class='navbar navbar-default no-bottom-margin'>" +
    "<div class='container-fluid'>" +
    "<div class='navbar-header'>" +
    "<button type='button' class='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>" +
    "<span class='icon-bar'></span>" +
    "<span class='icon-bar'></span>" +
    "<span class='icon-bar'></span>" +
    "</button>" +
    "<a class='navbar-brand' href='http://jeffreyzic.github.io/gixugif.github.io/index.fr.html'>Mon Portfolio</a>" +
    "</div>" +
    "<div class='collapse navbar-collapse' id='myNavbar'>" +
    "<ul class='nav navbar-nav'>" +
    "<li class='1'><a href='http://jeffreyzic.github.io/gixugif.github.io/index.fr.html'>Accueil</a>" +
    "</li>" +
    "<li><a href='http://jeffreyzic.github.io/gixugif.github.io/#bio'>À propos de moi</a>" +
    "</li>" +
    "<li><a class='dropdown-toggle' data-toggle='dropdown' href='#'>Porfolio" +
    "<span class='caret'></span></a>" +
    "<ul class='dropdown-menu'>" +
    "<li class='1'><a href='http://jeffreyzic.github.io/gixugif.github.io/index.fr.html'>Portfolio</a>" +
    "</li>" +
    "<li class='2'><a href='http://jeffreyzic.github.io/gixugif.github.io/Resume/index.fr.html'>CV</a>" +
    "</li>" +
    "<li class='3'><a href='http://jeffreyzic.github.io/gixugif.github.io/frontend-nanodegree-arcade-game-master/index.html'>Jeux d'arcade classique</a>" +
    "</li>" +
    "<li class='4'><a href='http://jeffreyzic.github.io/gixugif.github.io/neighborhood-map/index.html'>Carte de quartier</a>" +
    "</li>" +
    "<li class='5'><a href='http://jeffreyzic.github.io/gixugif.github.io/Website_Optimization/views/pizza.html'>Optimisation d'un site</a>" +
    "</li>" +
    "<li class='6'><a href='http://jeffreyzic.github.io/gixugif.github.io/Feedreader_Testing/index.html'>Testing d'un feedreader</a>" +
    "</li>" +
    "</ul>" +
    "</li>" +
    "<li><a class='dropdown-toggle' data-toggle='dropdown' href='#'>Partagez" +
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
