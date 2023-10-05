# Generated by Django 4.2.5 on 2023-09-07 12:02

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Flight',
            fields=[
                ('id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=200)),
                ('froml', models.CharField(max_length=200)),
                ('tol', models.CharField(max_length=200)),
                ('departure', models.TimeField()),
                ('date', models.DateField()),
                ('fprice', models.DecimalField(decimal_places=2, max_digits=7)),
                ('bprice', models.DecimalField(decimal_places=2, max_digits=7)),
                ('eprice', models.DecimalField(decimal_places=2, max_digits=7)),
            ],
        ),
    ]
