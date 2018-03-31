from django.urls import path
from . import views

app_name = 'justin_laureano'

# /justin_laureano/
urlpatterns = [
    path('', views.home_page, name='home'),
    path('project_1/', views.the_gathering, name='project_1'),
    path('project_2/', views.news, name='project_2'),
    path('project_3/', views.trivia, name='project_3'),
]
