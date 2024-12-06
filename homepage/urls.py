from django.urls import path, re_path
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    # API routes
    path('api/gallery-images/', views.gallery_images, name='gallery-images'),
    path('api/registry-items/', views.registry_items, name='registry-items'),
    path('submit-message/', views.submit_message, name='submit-message'),

    # Serve React frontend for all other routes
    re_path(r'^.*$', TemplateView.as_view(template_name='index.html')),
]
