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

    var menuNav = $('.menu-nav');

    $(window).scroll(function () {
        if( $(this).scrollTop() > 350 ) {
            menuNav.addClass('menu-nav-scrolled');
        } else {
            menuNav.removeClass('menu-nav-scrolled');
        }
    });

    $(window).resize(function() {
        let inline =    `
        <div class="col-12 footer-nav">
            <ul class="list-inline" >
                <li class="list-inline-item px-3"><a href="{% url 'the_gathering:eat' %}">Eat</a></li>
                <li class="list-inline-item px-3"><a href="{% url 'the_gathering:drink' %}">Drink</a></li>
                <li class="list-inline-item px-3"><a href="{% url 'the_gathering:shop' %}">Shop</a></li>
                <li class="list-inline-item px-3"><a href="{% url 'the_gathering:events' %}">Events</a></li>
                <li class="list-inline-item px-3"><a href="{% url 'the_gathering:about' %}">About</a></li>
                <li class="list-inline-item px-3"><a href="{% url 'the_gathering:menus' %}">Menus</a></li>
                <li class="list-inline-item px-3"><a href="{% url 'the_gathering:private_events' %}">Private</a></li>
                <li class="list-inline-item px-3"><a href="{% url 'the_gathering:reservations' %}">Reservations</a></li>
            </ul>        
        </div>
        `;

        let oneColumn = `
        <div class="col-12 footer-nav">
        <ul class="list-unstyled" >
            <li class="px-3"><a href="{% url 'the_gathering:eat' %}">Eat</a></li>
            <li class="px-3"><a href="{% url 'the_gathering:drink' %}">Drink</a></li>
            <li class="px-3"><a href="{% url 'the_gathering:shop' %}">Shop</a></li>
            <li class="px-3"><a href="{% url 'the_gathering:events' %}">Events</a></li>
            <li class="px-3"><a href="{% url 'the_gathering:about' %}">About</a></li>
            <li class="px-3"><a href="{% url 'the_gathering:menus' %}">Menus</a></li>
            <li class="px-3"><a href="{% url 'the_gathering:private_events' %}">Private</a></li>
            <li class="px-3"><a href="{% url 'the_gathering:reservations' %}">Reservations</a></li>
        </ul>        
    </div>
        `;

        let twoColumn = `
        <div class="col-12 footer-nav">
            <ul class="list-inline" >
                <li class="list-inline-item px-3"><a href="{% url 'the_gathering:eat' %}">Eat</a></li>
                <li class="list-inline-item px-3"><a href="{% url 'the_gathering:drink' %}">Drink</a></li>
                <li class="list-inline-item px-3"><a href="{% url 'the_gathering:shop' %}">Shop</a></li>
                <li class="list-inline-item px-3"><a href="{% url 'the_gathering:events' %}">Events</a></li>
            </ul>        
        </div>
        <div class="col-12 footer-nav">
            <ul class="list-inline" >
                <li class="list-inline-item px-3"><a href="{% url 'the_gathering:about' %}">About</a></li>
                <li class="list-inline-item px-3"><a href="{% url 'the_gathering:menus' %}">Menus</a></li>
                <li class="list-inline-item px-3"><a href="{% url 'the_gathering:private_events' %}">Private</a></li>
                <li class="list-inline-item px-3"><a href="{% url 'the_gathering:reservations' %}">Reservations</a></li>
            </ul>        
        </div>
        `;

        if ($(window).width() < 580) {
           console.log('less');
           $('#footer-nav-list').text('');
           $('#footer-nav-list').append(oneColumn);

        } else if ($(window).width() < 880) {
            console.log('more');
            $('#footer-nav-list').text('');
            $('#footer-nav-list').append(twoColumn);
       } else {
            $('#footer-nav-list').text('');
            $('#footer-nav-list').append(inline);
       }
       
    });

});
