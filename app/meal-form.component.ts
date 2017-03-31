import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
    selector: "meal-form",
    template: `
    <div class="container">
        <div class="meal-form">
        <form>
        <h3>Enter your Meal:</h3>

    <div class="form-group">
        <label for="name">Name</label>
        <input [(ngModel)]="meals.mealName" class= "form-control" id="name"  placeholder="Name"  name="name" type ="text">
    </div>

    <div class="form-group">
        <label for="name">Name</label>
        <input [(ngModel)]="meals.details" id="details" placeholder="Details" name ="details" >
    </div>

    <div class="form-group">
        <label for="name">Name</label>
        <input [(ngModel)]="meals.calories" id="calories" placeholder="Calories" name= "calories" type="number">
    </div>

    <button (click) = "submitMeal()" class=" btn btn-success">Submit</button>
        </form>
        </div>
    </div>
    `

})


export class MealFormComponent {
    meals = Meal[];

    submitMeal(){
        this.meals = new Meal;
    }


}
