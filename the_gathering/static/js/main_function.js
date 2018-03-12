$(document).ready(function () {
    var windowHeight = $(window).height();
    var bodyHeight = $('.container-fluid').height() - $('footer').height();
    var footerHeight = $('footer').height();
    console.log(windowHeight);
    console.log(bodyHeight);
    console.log(footerHeight);

    if (windowHeight > bodyHeight) {
        $('footer').addClass('short');
    };

    $(window).resize(function() {
        var windowHeight = $(window).height();
        var docHeight = bodyHeight;

        console.log("windowheight" + windowHeight);
        console.log("bodyheight" + docHeight);

        if (windowHeight > docHeight) {
            $('footer').addClass('short');
        } else {
            $('footer').removeClass('short');
        }

        if(windowHeight < 1024) {
            $('#index').addClass('m-t-10');
        } else {
            $('#index').removeClass('m-t-10');
        }
    });


});