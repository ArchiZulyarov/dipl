from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
                  path('foodood/', views.index),
                 
                  path('foodood/api/card/', views.card),  # для запросов json
                  path('foodood/api/ingredientList/', views.ingredientList) , # для запросов json
                  path('api/getdish/', views.getdish)  # для запросов json
              ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
