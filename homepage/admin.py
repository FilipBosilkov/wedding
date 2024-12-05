from django.contrib import admin
from .models import RegistryItem, GalleryImage, Table, News, Message


# Register your models here.


@admin.register(RegistryItem)
class RegistryItemAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'available')


@admin.register(Table)
class TableAdmin(admin.ModelAdmin):
    list_display = ('name',)


@admin.register(GalleryImage)
class GalleryImageAdmin(admin.ModelAdmin):
    list_display = ('title', 'uploaded_at')


@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ('text', 'date')


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'content')
