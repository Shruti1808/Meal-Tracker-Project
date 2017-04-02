import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'edit-meals',
  template:`
  <div class="edit" *ngIf ="childSelectedMeal">
  <h3>Edit Meal:</h3>
  <h3>{{childSelectedMeal.mealName}}</h3>
  <hr>
  <div class ="fieldset">
<div class ="form-group col-xs-3">
  <label >Enter Name: </label>
  <input [(ngModel)] = "childSelectedMeal.mealName" class="form-control" type="text" >
  </div>

<div class ="form-group col-xs-3">
  <label>Enter Details: </label>
  <input [(ngModel)] = "childSelectedMeal.details" class="form-control" type="text" >
  </div>

<div class ="form-group col-xs-4">
  <label>Enter Calories: </label>
  <input [(ngModel)] = "childSelectedMeal.calories"
  class="form-control" type="number">
  </div>

  <button  class= "btn-sm-4 btn btn-success" (click)="doneButtonClicked()" name="button">Done</button>
  </div>
  </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal : Meal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }

}
