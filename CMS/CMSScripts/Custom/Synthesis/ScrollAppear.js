$(document).scroll(function () {
    if ($(document).height() <= ($(window).height() + $(window).scrollTop())) {
            $('.poll').fadeIn();
    } else {
        $('.poll').fadeOut();
    }

});


