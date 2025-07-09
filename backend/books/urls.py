from django.urls import path
from .views import RegisterView, BookListCreateView
from django.http import JsonResponse

urlpatterns = [
    path('', lambda request: JsonResponse({'message': 'API is working!'})),  # ✅ Root path
    path('register/', RegisterView.as_view(), name='register'),
    path('books/', BookListCreateView.as_view(), name='books'),
]
