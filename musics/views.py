from musics.models import Music
from musics.serializers import MusicSerializer
# Create your views here.
from rest_framework import viewsets, status
from rest_framework.response import Response

from django.template.response import TemplateResponse
from django.http.response import HttpResponse
from musics.models import query_musics_by_args
import json
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend


def index(request):
    html = TemplateResponse(request, 'musics/index.html')
    return HttpResponse(html.render())



class MusicViewSet(viewsets.ModelViewSet):
    queryset = Music.objects.all()
    serializer_class = MusicSerializer

    def list(self, request, **kwargs):
        try:
            music = query_musics_by_args(**request.query_params)
            print("----------------------------")
            print("뮤직", music)
            serializer = MusicSerializer(music['items'], many=True)
            print(serializer)
            result = dict()
            result['data'] = serializer.data
            result['draw'] = music['draw']
            result['recordsTotal'] = music['total']
            result['recordsFiltered'] = music['count']
            print(result)
            return Response(result, status=status.HTTP_200_OK, template_name=None, content_type=None)

        except Exception as e:
            return Response(str(e), status=status.HTTP_404_NOT_FOUND, template_name=None, content_type=None)

from django.views.generic import CreateView
from .forms import MusicsForm
class MusicsCreateView(CreateView):
    model = Music
    form_class = MusicsForm
    template_name = 'musics/musics_form.html'

    def form_valid(self, form):
        res = super().form_valid(form)
        # messages.success(self.request, '새 글을 저장했습니다.')
        return res

musics_new = MusicsCreateView.as_view()