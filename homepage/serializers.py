# serializers.py
from rest_framework import serializers
from .models import RegistryItem, Table, Message, News, GalleryImage

from rest_framework import serializers
from .models import RegistryItem


class RegistryItemSerializer(serializers.ModelSerializer):
    picture = serializers.SerializerMethodField()

    class Meta:
        model = RegistryItem
        fields = ['id', 'name', 'price', 'available', 'picture', 'url']  # Removed 'url' if it's unnecessary

    def get_picture(self, obj):  # Updated method name to match field
        request = self.context.get('request')
        if obj.picture and request is not None:  # Check that the picture exists
            return request.build_absolute_uri(obj.picture.url)
        return None


class GalleryImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryImage
        fields = '__all__'


class TableSerializer(serializers.ModelSerializer):
    class Meta:
        model = Table
        fields = '__all__'


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'


class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = '__all__'



