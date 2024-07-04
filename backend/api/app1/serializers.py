from rest_framework import serializers
from .models import Post

class Postseralizer(serializers.ModelSerializer):
    class Meta:
        model=Post
        fields=["id","title","content","slug"]