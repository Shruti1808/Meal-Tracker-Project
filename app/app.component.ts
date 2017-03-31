import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
    selector: 'app-root',
    template: `

    <div class="container">
    <div class="jumbotron">
    <h1>Meal Tracker</h1>
    </div>
    </div>

    <meal-list [childMealList]="masterMealsList" (clickSender)= "editMeal($event)"></meal-list>
    <new-meal (newMealSender)="addMeal($event)"></new-meal>
    <hr>
    <edit-meals[childSelectedMeal] = "selectedMeal" (doneButtonClickedSender)="hideEdit()"></edit-meals>

    `
})

export class AppComponent {
    meals : Meal[] = [];
    selectedMeal= null;


    masterMealsList : Meal[] = [
        new Meal("Maple-Glazed Chicken with Brussel Sprout", "Chicken cutlets are the key ingredient", 300),
        new Meal("Shrimp and Avocado Tacos", "Ready in a flash.", 275),
        new Meal("Fries", "I only ate half of them.", 365),
        new Meal("Hamburger", "Didn't get a soda or cheese on my burger!", 354),
        new Meal("Vegan Burger", "Ordered a salad on the side instead of fries.", 375),
        new Meal("Chocolate Chunk and Walnut Oatmeal Cookies", "Ordered a salad on the side instead of fries.", 100)
    ];

    editMeal(clickedMeal){
        this.selectedMeal = clickedMeal;
    }

    hideEdit(){
        this.selectedMeal = null;
    }

    addMeal(newMealFromChild: Meal){
        this.masterMealsList.push(newMealFromChild);
    }

}
