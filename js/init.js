$('document').ready(function() {
    $('select').formSelect();
    //   $('.modal').modal();
    $('.dropdown-trigger').dropdown();
    $('.sidenav').sidenav();
    $('.pushpin').pushpin();
    $('.collapsible').collapsible();
    $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });
    $('.parallax').parallax();
    $('.tooltipped').tooltip();
    $('.tabs').tabs();
    $('.parallax').parallax();
    //$('.materialboxed').materialbox();
    //$('.modal').modal();

    var elems = document.querySelectorAll('.modal');

    var options = {
        opacity: 0.3,
        onCloseEnd: function(params) {
            $("tr").remove(".new_row");
        },

        dismissible: false
    }

    M.Modal.init(elems, options);

});