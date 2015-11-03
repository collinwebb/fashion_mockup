# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, primary_key=True, auto_created=True)),
                ('title', models.CharField(max_length=50)),
                ('blurb', models.CharField(max_length=200)),
                ('author', models.CharField(max_length=50)),
                ('thumbnail_url', models.CharField(max_length=200)),
                ('details_url', models.CharField(max_length=200)),
            ],
        ),
    ]
