import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';
import { EditMealComponent } from './edit-meal.component';
import { NewMealComponent } from './new-meal.component';



@Component({
  selector: 'meal-list',
  template: `
<div class ="container">

<br>
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

       <th>Name</th>
       <th>Details</th>
       <th>Calories</th>
     </tr>
   </thead>
   <tbody>
     <tr *ngFor='let meal of childMealList |filterCalories: filterByCalories'>

       <td>{{meal.mealName}}</td>
       <td>{{meal.details}}</td>
       <td>{{meal.calories}}</td>
       <td><button (click)="editMealHasBeenClicked(meal)">Edit</button></td>
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

    editMealHasBeenClicked(mealToEdit : Meal){
      this.clickSender.emit(mealToEdit);
    }


    filterByCalories: string = "all";

    onChangeCalories(optionFromMenu){
      this.filterByCalories = optionFromMenu;

    }
}
