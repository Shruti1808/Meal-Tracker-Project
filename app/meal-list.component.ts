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


  `
})

export class MealListComponent {
    @Input() childMealList: Meal[];
    @Output() clickSender = new EventEmitter();
}
