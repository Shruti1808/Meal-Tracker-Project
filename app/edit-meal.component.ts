import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';


@Component({
    selector: 'edit-meals',
    template:`
    <div class="edit" *ngIf ="childSelectedMeal">
        <h3>Edit Meal:</h3>
        <h3>{{selectedMeal.mealName}}</h3>
        <hr>

        <label for="meal-name">Enter Name: </label>
        <input [(ngModel)] = "childSelectedMeal.mealName" type="text" >

        <label for="meal-details">Enter Details: </label>
        <input [(ngModel)] = "childSelectedMeal.details" type="text" >

        <label for="meal-name">Enter Calories: </label>
        <input [(ngModel)] = "childSelectedMeal.calories" type="number">

        <button  class= "col-md-4 btn btn-success" (click)="doneButtonClicked()" name="button">Done</button>
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
