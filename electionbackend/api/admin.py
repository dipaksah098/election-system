from django.contrib import admin

from api.models import About, Candidate, Service, Voters

# Register your models here.

admin.site.site_header = 'Election Backend'
admin.site.site_title = 'Election Backend'
admin.site.index_title = 'Election Backend'

admin.site.register(Candidate)
admin.site.register(Voters)
admin.site.register(Service)
admin.site.register(About)