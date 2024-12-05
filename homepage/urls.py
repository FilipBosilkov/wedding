from django.urls import path
from . import views

from django.urls import path
from . import views

urlpatterns = [
    path('api/gallery-images/', views.gallery_images, name='gallery-images'),  # Define the route here
    path('api/registry-items/', views.registry_items, name='registry_items'),
    path('submit-message/', views.submit_message, name='submit_message'),  # URL to access the view    # add more paths as needed
]

