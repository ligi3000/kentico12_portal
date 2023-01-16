$( document ).ready(function() {
 var fixmeTop = $('.ServicesInPageLinks').offset().top;       // get initial position of the element

$(window).scroll(function() {                  // assign scroll event listener

    var currentScroll = $(window).scrollTop(); // get current position

    if (currentScroll >= fixmeTop) {           // apply position: fixed if you
        $('.ServicesInPageLinks').addClass("stick")
    } else {                                   // apply position: static
        $('.ServicesInPageLinks').removeClass("stick")
    }

});
});
