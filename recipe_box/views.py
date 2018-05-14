from django.shortcuts import render

def home_page(request):
    return render(request, 'recipe_box/index.html', {})
