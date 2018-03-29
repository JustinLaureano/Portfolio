from django.shortcuts import render
# from .models import Project

def home_page(request):
    return render(request, 'news/index.html', {})