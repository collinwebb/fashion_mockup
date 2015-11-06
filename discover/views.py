from django.http import HttpResponse
from django.template import RequestContext, loader
from .models import Product

def index(request):
    product_list = Product.objects.all()
    output = ', '.join([p.title for p in product_list])
    template = loader.get_template('discover/index.html')
    context = RequestContext(request, {
        'product_list': product_list,
    })
    return HttpResponse(template.render(context))
