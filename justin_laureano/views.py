from django.shortcuts import render
# from .models import Project


def home_page(request):
    return render(request, 'justin_laureano/index.html', {})


def the_gathering(request):
    return render(request, 'justin_laureano/the_gathering.html', {})

def news(request):
    return render(request, 'justin_laureano/news.html', {})