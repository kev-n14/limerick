from django.shortcuts import render

def home(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def contact(request):
    return render(request, 'contact.html')

def attactions(request):
    return render(request, 'attactions.html')

def cart(request):
    return render(request, 'cart.html')