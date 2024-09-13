from django.urls import path, include
from api import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('api/candidate/', views.CandidateList.as_view(), name='candidate'),
    path ('api/service/', views.ServiceList.as_view(), name='service'),
    path ('api/about/', views.AboutList.as_view(), name='about'),
    path ('api/slider/', views.SliderList.as_view(), name='slider'),
    path ('api/voters/', views.VotersList.as_view(), name='voters'),
    
    
    
    
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

