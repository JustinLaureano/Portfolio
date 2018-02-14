from django.urls import path
from . import views

app_name = 'the_gathering'

# /the_gathering/
urlpatterns = [
    path('', views.home_page, name='home'),
    path('eat/', views.eat_page, name='eat'),
]