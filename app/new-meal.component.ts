import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
    selector: 'new-meal',
    template: `
    <h1></h1>

    <div class="meal-form">

    <h3>Enter your Meal:</h3>
    <div class="form-group col-md-4">
    <label for="name">Name:</label>
    <input class="form-control input-md" placeholder="Name" #newName>
    </div>

    <div class="form-group col-md-4">
    <label for="name">Details:</label>
    <input class="form-control input-md" placeholder="Details" #newDetails>

    </div>
    <div class="form-group col-md-4">
    <label for="name">Calories:</label>
    <input class="form-control input-md" placeholder="Calories" type="number" #newCalories>
    </div>

    <br>
    <button class=" btn btn-new-meal btn-success" (click)="submitForm(newName.value, newDetails.value, newCalories.value);newName.value = '',
    newDetails.value = '', newCalories.value = '';">Add</button>
    </div>
    `
})

export class NewMealComponent {
    @Output() newMealSender = new EventEmitter();

    submitForm(name: string, details: string, calories: number){
        var newMealToAdd : Meal = new Meal(name, details, calories);
        this.newMealSender.emit(newMealToAdd);
    }
}
