$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').fadeOut();
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').fadeIn();
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    $('#reservation-submit').on('click', function () {
        var name = $('#reservation-name').val();
        var phone = $('#reservation-phone').val();
        var date = $('#reservation-date').val();
        var time = $('#reservation-time').val();
        var size = $('#reservation-size').val();
        var venue = $('#reservation-venue').val();

        $('#confirmation-name').text(name);
        $('#confirmation-phone').text(phone);
        $('#confirmation-date').text(date);
        $('#confirmation-time').text(time);
        $('#confirmation-size').text(size);
        $('#confirmation-venue').text(venue);

        $('#confirmation').css('display', 'block');

    });

    $('.close').on('click', function () {
        $('#confirmation').css('display', 'none');
        console.log("Yes");
    });

});
