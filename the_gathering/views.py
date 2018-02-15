from django.shortcuts import render


def home_page(request):
        return render(request, 'the_gathering/index.html', {})


def eat_page(request):
    return render(request, 'the_gathering/eat.html', {})


def drink_page(request):
    return render(request, 'the_gathering/drink.html', {})


def shop_page(request):
    return render(request, 'the_gathering/shop.html', {})


def listen_page(request):
    return render(request, 'the_gathering/listen.html', {})


def about_page(request):
    return render(request, 'the_gathering/about.html', {})


def menus_page(request):
    return render(request, 'the_gathering/about.html', {})


def private_events_page(request):
    return render(request, 'the_gathering/private_events.html', {})


def reservations_page(request):
    return render(request, 'the_gathering/reservations.html', {})


def contact_page(request):
    return render(request, 'the_gathering/contact.html', {})