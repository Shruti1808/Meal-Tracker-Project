import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
    selector: 'new-meal',
    template: `

    <h3>Enter your Meal:</h3>
    <hr>
    <fieldset>
    <div class="form-group row">
    <label for="name" class="col-xs-2 col-form-label">Name:</label>
    <div class="col-xs-4">
    <input class="form-control" placeholder="Name" #newName>
    </div>
    </div>

    <div class="form-group  row">
    <label for="details" class="col-sm-2 col-form-label">Details:</label>
    <div class="col-xs-4">
    <input class="form-control" placeholder="Details" #newDetails>
    </div>
    </div>

    <div class="form-group  row">
    <label for="calories"  class="col-sm-2 col-form-label">Calories:</label>
    <div class="col-xs-4">
    <input class="form-control" placeholder="Calories" type="number" #newCalories>
    </div>
    </div>
     <button class=" btn btn-sm-4 btn-success" (click)="submitForm(newName.value, newDetails.value, newCalories.value); newName.value=''; newDetails.value=''; newCalories.value='';">Add</button>
     </fieldset>
    `
})

export class NewMealComponent {
    @Output() newMealSender = new EventEmitter();

    submitForm(name: string, details: string, calories: number){
        var newMealToAdd : Meal = new Meal(name, details, calories);
        this.newMealSender.emit(newMealToAdd);
    }
}
