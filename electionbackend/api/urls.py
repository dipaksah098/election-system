from django.urls import path, include
from api import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('api/candidate/', views.CandidateList.as_view(), name='candidate'),
    
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

