# Generated by Django 2.0.2 on 2018-02-21 17:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('the_gathering', '0005_auto_20180221_1723'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lunchmenu',
            name='add_on',
            field=models.TextField(blank=True, max_length=120),
        ),
    ]
