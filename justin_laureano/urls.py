from django.urls import path
from . import views

app_name = 'justin_laureano'

# /justin_laureano/
urlpatterns = [
    path('', views.home_page, name='home'),
    path('about/', views.about_page, name='about'),
    path('project/', views.project_page, name='project'),
    path('contact/', views.contact_page, name='contact'),
]
