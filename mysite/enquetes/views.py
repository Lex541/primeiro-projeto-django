from django.http import HttpResponse, Http404
from .models import Pergunta
from django.shortcuts import render

def index(request):
    ultimas_perguntas = Pergunta.objects.order_by('-data_publicacao')[:5]
    contexto = { 'ultimas_perguntas': ultimas_perguntas }
    return render(request,'enquetes/index.html',contexto)

def detalhes(request,pergunta_id):
    try:
        pergunta = Pergunta.objects.get(pk=pergunta_id)
    except:
        raise Http404("A pergunta não existe!")
    return render(request, 'enquetes/detalhes.html',{'pergunta': pergunta})

def resultados(request,pergunta_id):
    pergunta = get_object_or_404(Pergunta, pk=pergunta_id)
    return render(request, "enquetes/resultados.html", {"pergunta": pergunta})
def votos(request,pergunta_id):
    return HttpResponse(f"Você está votando na questão {pergunta_id}")


