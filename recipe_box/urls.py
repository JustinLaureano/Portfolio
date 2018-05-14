from django.urls import path
from . import views

app_name = 'recipe_box'

# /justin_laureano/
urlpatterns = [
    path('', views.home_page, name='home')
]