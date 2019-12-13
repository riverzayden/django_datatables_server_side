from musics.views import MusicViewSet, index
from rest_framework.routers import DefaultRouter
from django.urls import path, register_converter, include
from . import views

app_name = 'musics'

router = DefaultRouter()
#OCompraDetalleViewSet
router.register(r'list', views.MusicViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('new/', views.musics_new, name='musics_new'),
    path('', views.index,name='root'),
]

