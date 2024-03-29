# Generated by Django 4.2.4 on 2023-10-02 02:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0018_merge_20230930_0026'),
    ]

    operations = [
        migrations.AddField(
            model_name='postanalysis',
            name='calibrate',
            field=models.TextField(default='Automatic'),
        ),
        migrations.AddField(
            model_name='postanalysis',
            name='max_adducts',
            field=models.FloatField(default=2),
        ),
        migrations.AddField(
            model_name='postanalysis',
            name='max_primaries',
            field=models.FloatField(default=3),
        ),
        migrations.AddField(
            model_name='postanalysis',
            name='min_primaries',
            field=models.FloatField(default=1),
        ),
        migrations.AddField(
            model_name='postanalysis',
            name='multi_protein',
            field=models.TextField(default='off'),
        ),
        migrations.AddField(
            model_name='postanalysis',
            name='only_best',
            field=models.TextField(default='off'),
        ),
        migrations.AddField(
            model_name='postanalysis',
            name='peak_height',
            field=models.FloatField(default=0.01),
        ),
        migrations.AddField(
            model_name='postanalysis',
            name='tolerance',
            field=models.FloatField(default=3.1),
        ),
        migrations.AddField(
            model_name='postanalysis',
            name='valence',
            field=models.FloatField(default=4),
        ),
    ]
