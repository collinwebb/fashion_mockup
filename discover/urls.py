from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^json_data/([0-9]+)/$', views.json_data, name='json_data'),
]
