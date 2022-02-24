from django.shortcuts import render, HttpResponse, loader

# Create your views here.
def index(request):
    template = loader.get_template("index.html")
    context = {

    }
    return HttpResponse(template.render(context, request))
