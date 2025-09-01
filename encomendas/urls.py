from django.urls import path
from . import views

app_name ='encomendas'

urlpatterns = [
    path('api/encomendas/', views.criar_encomenda, name='criar_encomenda'),
]