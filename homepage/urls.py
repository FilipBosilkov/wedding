from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, re_path
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    # API routes
    path('api/gallery-images/', views.gallery_images, name='gallery-images'),
    path('api/registry-items/', views.registry_items, name='registry-items'),
    path('submit-message/', views.submit_message, name='submit-message'),

    # Serve React frontend for all other routes
    re_path(r'^(?!static/|media/).*$', TemplateView.as_view(template_name='index.html'))  # Exclude static paths
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# Only in development: Serve static files
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
