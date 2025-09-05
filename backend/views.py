from django.http import JsonResponse

def home(request):
    return JsonResponse({
        'message': 'Sweet Saudade API está funcionando! 🚀',
        'status': 'online',
        'endpoints': {
            'admin': '/admin/',
            'api': '/api/',
        }
    })