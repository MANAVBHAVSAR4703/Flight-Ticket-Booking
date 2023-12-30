# Generated by Django 4.1.7 on 2023-10-07 00:26

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('base', '0005_bookticket_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bookticket',
            name='flight',
            field=models.ForeignKey(default='', null=True, on_delete=django.db.models.deletion.CASCADE, related_name='booked_seats', to='base.flight'),
        ),
        migrations.AlterField(
            model_name='bookticket',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]