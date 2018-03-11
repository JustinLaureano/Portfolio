$(document).ready(function () {
    var windowHeight = $(window).height();
    var bodyHeight = $(this).height() - $('footer').height();
    var footerHeight = $('footer').height();
    console.log(windowHeight);
    console.log(bodyHeight);
    console.log(footerHeight);

    if (windowHeight > bodyHeight) {
        $('footer').addClass('short');
    };
});