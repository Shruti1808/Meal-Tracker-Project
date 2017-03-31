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
    <p>Details: {{currentMeal.details}}</p>
    <p>Calories: {{currentMeal.calories}}</p>
    </ul>
  </div>

<div class ="container">
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
    </div>
<div class ="container">
    <div class="table-responsive">
    <table class="table table-hover">
   <thead>
     <tr>
       <th>#</th>
       <th>Name</th>
       <th>Details</th>
       <th>Calories</th>
     </tr>
   </thead>
   <tbody>
     <tr>
       <th scope="row">1</th>
       <td>Maple-Glazed Chicken</td>
       <td>Chicken cutlets are the key ingredient</td>
       <td>300</td>
     </tr>
     <tr>
       <th scope="row">2</th>
       <td>Shrimp and Avocado Tacos</td>
       <td>Ready in a flash.</td>
       <td>275</td>
     </tr>
     <tr>
       <th scope="row">3</th>
       <td>Fries</td>
       <td>I only ate half of them.</td>
       <td>365</td>
     </tr>
     <tr>
       <th scope="row">4</th>
       <td>Hamburger</td>
       <td>Didn't get a soda or cheese on my burger!</td>
       <td>354</td>
     </tr>
     <tr>
       <th scope="row">5</th>
       <td>Vegan Burger</td>
       <td>Ordered a salad on the side instead of fries.</td>
       <td>375</td>
     </tr>
     <tr>
       <th scope="row">6</th>
       <td>Chocolate Chunk and Walnut Oatmeal Cookies</td>
       <td>Ordered a salad on the side instead of fries</td>
       <td>100</td>
     </tr>
   </tbody>
 </table>
    </div>
    </div>
  `
})

export class MealListComponent {
    @Input() childMealList: Meal[];
    @Output() clickSender = new EventEmitter();


    // filterByCalories: string = "allFoods"
}
