# Generated by Django 4.1.7 on 2023-09-28 09:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_alter_bookticket_flight'),
    ]

    operations = [
        migrations.AddField(
            model_name='bookticket',
            name='age',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='bookticket',
            name='name',
            field=models.CharField(default='', max_length=100),
        ),
    ]