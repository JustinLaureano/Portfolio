from django.urls import path
from . import views

app_name = 'trivia'

# /trivia/
urlpatterns = [
    path('', views.home_page, name='home'),
]
