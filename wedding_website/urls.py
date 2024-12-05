from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('homepage.urls')),  # Including your homepage app's urls
    path('registry/', include('homepage.urls')),
    path('gallery/', include('homepage.urls'))
    # index add
]

# Add static and media URL serving only in development mode (DEBUG=True)
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
