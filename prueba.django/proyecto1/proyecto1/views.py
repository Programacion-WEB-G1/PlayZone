from django.shortcuts import render

def home(request):
    return render(request,'proyecto1/index.html')
