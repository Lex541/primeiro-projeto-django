from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello, world. Você está no index de enquetes.")

def detalhes(request, pergunta_id):
    return HttpResponse(f"você está acessando a questão {pergunta_id}")
    
def resultado(request,pergunta_id):
    return HttpResponse(f"Vocês está vendo os resultados da pergunta {pergunta_id}")

def votos(request,pergunta_id):
    return HttpResponse(f"Você está votando na questão {pergunta_id}")    








