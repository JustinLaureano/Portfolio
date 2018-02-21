from django.contrib import admin
from .models import LunchMenu, DinnerMenu, WineMenu, AnvilMenu

admin.site.register(LunchMenu)
admin.site.register(DinnerMenu)
admin.site.register(WineMenu)
admin.site.register(AnvilMenu)
