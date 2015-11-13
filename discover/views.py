import json
from django.core import serializers
from django.http import HttpResponse
from django.template import RequestContext, loader
from .models import Product

def index(request):
    template = loader.get_template('discover/index.html')
    context = RequestContext(request, {})
    return HttpResponse(template.render(context))


def json_data(request):
    data = serializers.serialize('json', Product.objects.all()[0:20])
    return HttpResponse(data, content_type='application/json')
