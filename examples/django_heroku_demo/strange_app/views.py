from django.shortcuts import render
from strange_app.models import Counter


def index(request):
    return render(request, "strange_app/index.html",
                  { "counter": Counter.objects.next_count() })
