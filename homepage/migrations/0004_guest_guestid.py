# Generated by Django 5.1.1 on 2024-10-02 19:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('homepage', '0003_remove_guest_registryitem'),
    ]

    operations = [
        migrations.AddField(
            model_name='guest',
            name='guestId',
            field=models.IntegerField(default='0000'),
            preserve_default=False,
        ),
    ]