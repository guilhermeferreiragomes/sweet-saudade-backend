from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Encomenda

@api_view(['POST'])
def criar_encomenda(request):
    # Apenas cria uma encomenda vazia para gerar o ID
    encomenda = Encomenda.objects.create()
    return Response({
        'id': encomenda.id,
        'orderNumber': f"{encomenda.id:04d}"
    }, status=status.HTTP_201_CREATED)
