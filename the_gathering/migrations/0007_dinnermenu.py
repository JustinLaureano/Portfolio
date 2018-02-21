# Generated by Django 2.0.2 on 2018-02-21 19:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('the_gathering', '0006_auto_20180221_1724'),
    ]

    operations = [
        migrations.CreateModel(
            name='DinnerMenu',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(blank=True, choices=[('Appetizers', 'Appetizers'), ('Petite Salads', 'Petite Salads'), ('Entrees', 'Entrees'), ('A la Carte', 'A la Carte'), ('Desserts', 'Desserts')], max_length=50)),
                ('item', models.CharField(max_length=120)),
                ('description', models.TextField(blank=True, max_length=800)),
                ('price', models.CharField(blank=True, max_length=15)),
                ('add_on', models.TextField(blank=True, max_length=120)),
                ('add_on_price', models.CharField(blank=True, max_length=120)),
            ],
        ),
    ]
