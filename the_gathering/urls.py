from django.urls import path
from . import views

app_name = 'the_gathering'

# /the_gathering/
urlpatterns = [
    path('', views.home_page, name='home'),
    path('eat/', views.eat_page, name='eat'),
    path('drink/', views.drink_page, name='drink'),
    path('shop/', views.shop_page, name='shop'),
    path('events/', views.events_page, name='events'),
    path('about/', views.about_page, name='about'),
    path('menus/', views.menus_page, name='menus'),
    path('private_events/', views.private_events_page, name='private_events'),
    path('reservations/', views.reservations_page, name='reservations'),
    path('contact/', views.contact_page, name='contact'),
]