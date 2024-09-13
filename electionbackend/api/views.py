from rest_framework import generics
from .models import *
from .serializers import *

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
