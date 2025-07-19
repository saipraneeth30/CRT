from django.http import HttpResponse
def home(response):
    return HttpResponse("this is my home page")
def about(response):
    return HttpResponse("this is my about page")
def contact(response):
     return HttpResponse("this is my contact page")