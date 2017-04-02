import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'edit-meals',
  template:`
  <div *ngIf ="childSelectedMeal">
  <h3>Edit Meal:</h3>
  <h3>{{childSelectedMeal.mealName}}</h3>
  <hr>
<div class ="form-group  row ">
  <label class="col-xs-2 col-form-label">Enter Name: </label>
  <div class="col-xs-4">
  <input [(ngModel)] = "childSelectedMeal.mealName" class="form-control" type="text" >
  </div>
  </div>

<div class ="form-group row">
  <label class="col-xs-2 col-form-label">Enter Details: </label>
  <div class="col-xs-4">
  <input [(ngModel)] = "childSelectedMeal.details" class="form-control" type="text" >
  </div>
  </div>

<div class ="form-group row">
  <label class="col-xs-2 col-form-label">Enter Calories: </label>
  <div class="col-xs-4">
  <input [(ngModel)] = "childSelectedMeal.calories"
  class="form-control" type="number">
  </div>
  </div>

  <button  class= "btn-sm-4 btn btn-success" (click)="doneButtonClicked()" name="button">Done</button>
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
