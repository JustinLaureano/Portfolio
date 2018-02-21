# Generated by Django 2.0.2 on 2018-02-21 20:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('the_gathering', '0007_dinnermenu'),
    ]

    operations = [
        migrations.CreateModel(
            name='WineMenu',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(blank=True, choices=[('Food', 'Food'), ('Red Wine', 'Red Wine'), ('White Wine', 'White Wine')], max_length=50)),
                ('item', models.CharField(max_length=120)),
                ('description', models.TextField(blank=True, max_length=800)),
                ('taste_price', models.CharField(blank=True, max_length=15)),
                ('glass_price', models.CharField(blank=True, max_length=15)),
                ('bottle_price', models.CharField(blank=True, max_length=15)),
            ],
        ),
    ]