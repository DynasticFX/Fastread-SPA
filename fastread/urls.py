from django.urls import path
from . import views

app_name = 'fastread'
urlpatterns = [
    path('',views.index),
    path('/start',views.start),
    
]
