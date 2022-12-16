from django.contrib import admin
from dishes.models import Dish, Ingredient, Recipe, IngredientCalculation


class DishAdmin(admin.ModelAdmin):
    pass


class IngredientAdmin(admin.ModelAdmin):
    pass


class IngredientCalculationAdmin(admin.ModelAdmin):
    pass


class RecipeAdmin(admin.ModelAdmin):
    pass


admin.site.register(Dish, DishAdmin)
admin.site.register(Ingredient, IngredientAdmin)
admin.site.register(Recipe, RecipeAdmin)
admin.site.register(IngredientCalculation, IngredientCalculationAdmin)
