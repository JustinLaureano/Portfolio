from django.shortcuts import render
from .models import LunchMenu, DinnerMenu, WineMenu, AnvilMenu, LiveEvent


def home_page(request):
        return render(request, 'the_gathering/index.html', {})


def eat_page(request):
    return render(request, 'the_gathering/eat.html', {})


def drink_page(request):
    return render(request, 'the_gathering/drink.html', {})


def shop_page(request):
    return render(request, 'the_gathering/shop.html', {})


def events_page(request):
    live_event = LiveEvent.objects.all()
    return render(request, 'the_gathering/events.html', {'live_event':
                                                        live_event})


def about_page(request):
    return render(request, 'the_gathering/about.html', {})


def menus_page(request):
    lunch_menu = LunchMenu.objects.all()
    dinner_menu = DinnerMenu.objects.all()
    wine_menu = WineMenu.objects.all()
    anvil_menu = AnvilMenu.objects.all()

    content = {'lunch_menu': lunch_menu, 'dinner_menu': dinner_menu,
               'wine_menu': wine_menu, 'anvil_menu': anvil_menu}
    return render(request, 'the_gathering/menus.html', content)


def private_events_page(request):
    return render(request, 'the_gathering/private_events.html', {})


def reservations_page(request):
    return render(request, 'the_gathering/reservations.html', {})


def contact_page(request):
    return render(request, 'the_gathering/contact.html', {})