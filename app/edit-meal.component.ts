import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';


@Component({
    selector: 'edit-meals',
    template:`
    <div class="edit" *ngIf ="selectedMeal">
        <h3>Edit Description:</h3>
        <h3>{{selectedMeal.mealName}}</h3>
        <hr>
        <label for="meal-name">Enter Name: </label>
        <input [(ngModel)] = "selectedMeal.mealName" type="text" name = "selected-name">

        <label for="meal-details">Enter Details: </label>
        <input [(ngModel)] = "selectedMeal.details" type="text" name = "selected-detail">

        <label for="meal-name">Enter Calories: </label>
        <input [(ngModel)] = "selectedMeal.calories" type="number" name = "selected-calories">

        <button (click)="editMeal(clickedMeal)" name="button">Edit</button>
        <button (click)="hideEdit()" name="button">Save</button>


    </div>
    `
})

export class EditMealComponent {
    @Input() selectedMeal = Meal;

    editMeal(clickedMeal){
        this.selectedMeal = clickedMeal;
    }

    hideEdit(){
        this.selectedMeal = null;
    }
}
