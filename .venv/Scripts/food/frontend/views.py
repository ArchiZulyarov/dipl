from django.core import serializers
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework import generics
from django.db import connection, connections



# Create your views here.
def index(request):
    return render(request, 'index.html')


def card(request):
    cursor = connections['default'].cursor()
    cursor.execute(
        "SELECT d.id, d.name as title, d.image, r.description as text, d.name AS category" +
        " FROM dishes_dish d " +
        " JOIN dishes_recipe r " +
        " ON d.id = r.dish_id " 
        )
    objs = cursor.fetchall()
    json_data = []
    for obj in objs:
        json_data.append({"id": obj[0],
                          "title": obj[1],
                          "image": obj[2],
                          "text": obj[3],
                          "category": obj[4],
                          })
    return JsonResponse(json_data, safe=False)


def ingredientList(request):
    cursor = connections['default'].cursor()
    cursor.execute("SELECT id, name FROM dishes_ingredient")
    objs = cursor.fetchall()
    json_data = []
    for obj in objs:
        json_data.append({"id": obj[0],
                          "name": obj[1],
                          })
    return JsonResponse(json_data, safe=False)


def getdish(request):


    # print(request.GET['arr'])
    # return HttpResponse(request.GET.get('arr'))
    arr = request.GET['arr']
    cursor = connections['default'].cursor()
    cursor.execute("SELECT distinct d.id, d.name as title " +
                   "FROM dishes_dish d " +
                   "JOIN dishes_recipe r " +
                   "ON d.id = r.dish_id " +
                   "JOIN dishes_recipe_ingredients ri ON r.id = ri.recipe_id " +
                   "JOIN dishes_ingredient i ON ri.ingredientcalculation_id = i.id " +
                   "WHERE i.NAME IN("+request.GET.get('arr')+")")
    objs = cursor.fetchall()
    json_data = []
    for obj in objs:
        json_data.append({
                          "id": obj[0],
                          "name": obj[1],
                          })
        print(request.GET.get('arr'))
    return JsonResponse(json_data, safe=False)


