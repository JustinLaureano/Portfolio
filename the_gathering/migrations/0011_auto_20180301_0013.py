# Generated by Django 2.0.2 on 2018-03-01 00:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('the_gathering', '0010_liveevent'),
    ]

    operations = [
        migrations.AlterField(
            model_name='liveevent',
            name='event_venue',
            field=models.CharField(blank=True, choices=[('The Gathering', 'The Gathering'), ('The Gathering Wine', 'The Gathering Wine'), ('The Anvil', 'The Anvil'), ('The Courtyard Patio', 'The Courtyard Patio')], max_length=30),
        ),
    ]