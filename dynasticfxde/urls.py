
from django.contrib import admin
from django.urls import path, include

import fastread.urls


urlpatterns = [
   
    path('admin/', admin.site.urls),
   
    path('fastread',include('fastread.urls')),  
]
