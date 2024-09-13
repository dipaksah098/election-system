from rest_framework import generics
from .models import *
from .serializers import *


class SliderList(generics.ListCreateAPIView):
    queryset = Slider.objects.all()
    serializer_class = SliderSerializer
class CandidateList(generics.ListCreateAPIView):
    queryset = Candidate.objects.all()
    serializer_class = CandidateSerializer
    
class AboutList(generics.ListCreateAPIView):
    queryset = About.objects.all()
    serializer_class = AboutSerializer

class VotersList(generics.ListCreateAPIView):
    queryset = Voters.objects.all()
    serializer_class = VotersSerializer

class ServiceList(generics.ListCreateAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
