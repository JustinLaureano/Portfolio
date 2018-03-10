from django.shortcuts import render
from .models import Project


def home_page(request):
    return render(request, 'justin_laureano/index.html', {})


def about_page(request):
    return render(request, 'justin_laureano/about.html', {})


def project_page(request):
    return render(request, 'justin_laureano/project.html', {})


def contact_page(request):
    return render(request, 'justin_laureano/contact.html', {})
