from django.urls import path
from . import views

urlpatterns = [
    path('home/', views.HomeView.as_view(), name='extractor_home'),
<<<<<<< HEAD
]
=======
]
>>>>>>> c7fb2153d5e3a52134ff62c057546c05c5cde01b
