from django.shortcuts import render
# from .models import Project


def home_page(request):
    return render(request, 'justin_laureano/index.html', {})

def recipe_box(request):
    return render(request, 'justin_laureano/recipe_box.html', {})

def the_gathering(request):
    return render(request, 'justin_laureano/the_gathering.html', {})

def news(request):
    return render(request, 'justin_laureano/news.html', {})

def trivia(request):
    return render(request, 'justin_laureano/trivia.html', {})

def design(request):
    return render(request, 'justin_laureano/design.html', {})