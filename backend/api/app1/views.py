from django.shortcuts import render
from .models import Post
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from .serializers import Postseralizer
# Create your views here.
class PostModelview(ModelViewSet):
    serializer_class=Postseralizer
    queryset=Post.objects.all()
    lookup_field="slug"

    @action(detail=False,methods=['GET'])
    def recent(self,request):
        posts=Post.objects.all()[:]
        serializer=Postseralizer(posts,many=True)
        return Response(serializer.data)