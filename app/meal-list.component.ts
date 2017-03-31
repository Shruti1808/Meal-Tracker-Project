import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <div class = "meal-panel">
  <ul>
    <li *ngFor="let currentMeal of meals">{{currentMeal.mealName}}</li>
    <p >Details: {{currentMeal.details}}</p>
    <p>Calories: {{currentMeal.calories}}</p>
    </ul>
</div>


  `
})

export class MealListComponent {
    meals : Meal[] = [
      new Meal("Maple-Glazed Chicken with Brussel Sprout", "Chicken cutlets are the key ingredient to making this meal extra speedy. The maple syrup creates a sweet glaze for the chicken that complements the apples and Brussels sprout in the slaw.", 300),
      new Meal("Shrimp and Avocado Tacos", "Start with cooked, peeled shrimp then combine with other fresh ingredients like tomatoes, cilantro, avocado, and lime juice for tacos that are ready in a flash.", 275),
      new Meal("Fries", "I only ate half of them.", 365),
      new Meal("Hamburger", "Didn't get a soda or cheese on my burger!", 354),
      new Meal("Vegan Burger", "Ordered a salad on the side instead of fries.", 375),
      new Meal("Chocolate Chunk and Walnut Oatmeal Cookies", "Ordered a salad on the side instead of fries.", 100)
    ];


}