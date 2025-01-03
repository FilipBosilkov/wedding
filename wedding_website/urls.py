from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from homepage import views

urlpatterns = [
    path('secure-admin-page-jonkler-cart/', admin.site.urls),
    path("verify-captcha/", views.verify_captcha, name="verify_captcha"),
    path('', include('homepage.urls')),  # Route all requests to the homepage app
]

# Add static and media URL serving only in development mode (DEBUG=True)
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
