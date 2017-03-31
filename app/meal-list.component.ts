import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';
import { EditMealComponent } from './edit-meal.component';
import { NewMealComponent } from './new-meal.component';



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

  <div class="form">
      <div class="form-fields">
        <label>By Calories:</label>
        <select (change)="onChangeCalories($event.target.value)" class="filter">
          <option value="all"  selected="selected">Show All</option>
          <option value="low">Meals with less than 300 calories</option>
          <option value="high">Meals with more than 300 calories</option>
        </select>
      </div>
    </div>


  `
})

export class MealListComponent {
    @Input() childMealList: Meal[];
    @Output() clickSender = new EventEmitter();


    // filterByCalories: string = "allFoods"
}
