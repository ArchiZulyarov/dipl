from django.shortcuts import render
from django.http import HttpResponse
from .models import Person
from django.contrib.auth.hashers import make_password
from django.contrib import auth
from django.contrib.auth import authenticate
#user = authenticate(username='john', password='password to check')
# Create your views here.


# def index(request):
#     return render(request,  "my-app/public/index.html")



# def saveData(request):
#     qwe = make_password('qweqweqwe')
#     return HttpResponse(qwe)
#
# def mySave(request):
#     user = User.objects.create_user('myusername', 'myemail@crazymail.com', 'mypassword')
#
#     # Обновите поля и сохраните их снова
#     # user.first_name = 'John'
#     # user.last_name = 'Citizen'
#     user.save()
#     return HttpResponse("saved")
#
# def getData(request):
#     people = Person.objects.raw("SELECT * FROM hello_person")
#     return HttpResponse(people)