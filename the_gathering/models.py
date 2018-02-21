from django.db import models


class LunchMenu(models.Model):
    LUNCH_TYPE = (
        ('Lunch Soups', 'Lunch Soups'),
        ('Lunch Salads', 'Lunch Salads'),
        ('Lunch Fare', 'Lunch Fare'),
        ('Lunch Sides', 'Lunch Sides'),
        ('Lunch Sweets', 'Lunch Sweets')
    )

    type = models.CharField(max_length=50, choices=LUNCH_TYPE, blank=True)
    item = models.CharField(max_length=120)
    description = models.TextField(max_length=800, blank=True)
    price = models.CharField(max_length=15, blank=True)
    add_on = models.TextField(max_length=120, blank=True)
    add_on_price = models.CharField(max_length=120, blank=True)

    def __str__(self):
        return self.item


class DinnerMenu(models.Model):
    DINNER_TYPE = (
        ('Appetizers', 'Appetizers'),
        ('Petite Salads', 'Petite Salads'),
        ('Entrees', 'Entrees'),
        ('A la Carte', 'A la Carte'),
        ('Desserts', 'Desserts')
    )

    type = models.CharField(max_length=50, choices=DINNER_TYPE, blank=True)
    item = models.CharField(max_length=120)
    description = models.TextField(max_length=800, blank=True)
    price = models.CharField(max_length=15, blank=True)
    add_on = models.TextField(max_length=120, blank=True)
    add_on_price = models.CharField(max_length=120, blank=True)

    def __str__(self):
        return self.item


class WineMenu(models.Model):
    WINE_TYPE = (
        ('Food', 'Food'),
        ('Red Wine', 'Red Wine'),
        ('White Wine', 'White Wine')
    )

    type = models.CharField(max_length=50, choices=WINE_TYPE, blank=True)
    item = models.CharField(max_length=120)
    description = models.TextField(max_length=800, blank=True)
    taste_price = models.CharField(max_length=15, blank=True)
    glass_price = models.CharField(max_length=15, blank=True)
    bottle_price = models.CharField(max_length=15, blank=True)

    def __str__(self):
        return self.item


class AnvilMenu(models.Model):
    ANVIL_TYPE = (
        ('Food', 'Food'),
        ('Kentucky Straight Bourbon', 'Kentucky Straight Bourbon'),
        ('Bourbon Whiskey, Blends, Irish, Miscreants',
         'Bourbon Whiskey, Blends, Irish, Miscreants'),
        ('Rye Whiskey', 'Rye Whiskey'),
        ('Single Malt Scotch Whisky', 'Single Malt Scotch Whisky'),
        ('Blended Scotch Whisky', 'Blended Scotch Whisky'),
        ('The Elite', 'The Elite')
    )

    type = models.CharField(max_length=50, choices=ANVIL_TYPE, blank=True)
    item = models.CharField(max_length=120)
    description = models.TextField(max_length=800, blank=True)
    price = models.CharField(max_length=15, blank=True)

    def __str__(self):
        return self.item
