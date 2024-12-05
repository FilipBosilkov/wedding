from django.urls import path
from . import views

from django.urls import path
from . import views

urlpatterns = [
    path('api/gallery-images/', views.gallery_images, name='gallery-images'),  # API route
    path('api/registry-items/', views.registry_items, name='registry_items'),  # API route
    path('submit-message/', views.submit_message, name='submit_message'),  # API route

    # Serve React frontend for all other routes
    re_path(r'^.*$', TemplateView.as_view(template_name='index.html')),
]

