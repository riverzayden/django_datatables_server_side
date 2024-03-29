
from django.db import models
from django.db.models import Q
from model_utils import Choices
from django.urls import reverse

ORDER_COLUMN_CHOICES = Choices(
    ('0', 'id'),
    ('1', 'song'),
    ('2', 'singer'),
    ('3', 'last_modify_date'),
    ('4', 'created'),
)


# Create your models here.
class Music(models.Model):
    song = models.TextField()  # blank=False
    singer = models.TextField()  # blank=False
    place = models.TextField()  # blank=False

    # setting auto_now or auto_now_add to True will cause the field to have editable=False and blank=True set.
    last_modify_date = models.DateTimeField(auto_now=True, null=True)
    created = models.DateTimeField(auto_now_add=True, null=True)

    class Meta:
        db_table = "music"
    
    def get_absolute_url(self):
        return reverse('musics:root')


def query_musics_by_args(**kwargs):
    print('-$$$$$$$$$$$$$$$$$$$$$$$$ ', kwargs)
    draw = int(kwargs.get('draw', None)[0])
    length = int(kwargs.get('length', None)[0])
    start = int(kwargs.get('start', None)[0])
    search_value = kwargs.get('search[value]', None)[0]
    order_column = kwargs.get('order[0][column]', None)[0]
    order = kwargs.get('order[0][dir]', None)[0]
    song_name =kwargs.get('song', None)[0]
    singer_name =kwargs.get('singer', None)[0]

    order_column = ORDER_COLUMN_CHOICES[order_column]
    # django orm '-' -> desc
    if order == 'desc':
        order_column = '-' + order_column

    queryset = Music.objects.all()
    total = queryset.count()

    if song_name!='' or singer_name!='':
        queryset = queryset.filter( song__icontains=song_name, singer__icontains=singer_name)
    elif search_value:
        queryset = queryset.filter(Q(id__icontains=search_value) |
                                        Q(song__icontains=search_value) |
                                        Q(singer__icontains=search_value) |
                                        Q(last_modify_date__icontains=search_value) |
                                        Q(created__icontains=search_value))

    count = queryset.count()
    if length!=-1:
        queryset = queryset.order_by(order_column)[start:start + length]
    else:
        queryset = queryset.order_by(order_column)[start:]
    return {
        'items': queryset,
        'count': count,
        'total': total,
        'draw': draw
    }
