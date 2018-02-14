from django.shortcuts import render


def home_page(request):
        return render(request, 'the_gathering/index.html', {})


def eat_page(request):
    return render(request, 'the_gathering/eat.html', {})
