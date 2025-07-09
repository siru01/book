from django.urls import path
from .views import RegisterView, BookListCreateView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('books/', BookListCreateView.as_view(), name='books'),
]
