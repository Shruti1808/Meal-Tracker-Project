import { Component } from '@angular/core';
import { Meal } from './meal.model';
import { MealFormComponent } from './meal-form.component';
import { EditMealComponent } from './edit-meal.component';


@Component({
  selector: 'app-root',
  template: `

  <div class="container">
  <div class="jumbotron">
  <h1>Meal Tracker</h1>
  </div>
  </div>

  <meal-list></meal-list>
  <meal-form></meal-form>
  <edit-meals></edit-meals>

  `
})

export class AppComponent {
    meals : Meal[] = [];
    selectedMeal= null;



}
