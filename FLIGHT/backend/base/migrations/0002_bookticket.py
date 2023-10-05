# Generated by Django 4.2.5 on 2023-09-07 15:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='BookTicket',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('seat', models.CharField(max_length=2)),
                ('flight', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.flight')),
            ],
        ),
    ]