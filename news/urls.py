from django.urls import path
from . import views

app_name = 'news'

# /news/
urlpatterns = [
    path('', views.home_page, name='home'),
]
