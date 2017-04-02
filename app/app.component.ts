import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
    selector: 'app-root',
    template: `

    <meal-list [childMealList]="masterMealsList" (clickSender)= "editMeal($event)"></meal-list>
<hr>
    <edit-meals [childSelectedMeal] = "selectedMeal" (doneButtonClickedSender)="hideEdit()"></edit-meals>

    <new-meal (newMealSender)="addMeal($event)"></new-meal>
    <hr>


    `
})


export class AppComponent {
    meals : Meal[] = [];
    selectedMeal: Meal= null;


    masterMealsList : Meal[] = [
        new Meal("Maple-Glazed Chicken with Brussel Sprout", "Chicken cutlets are the key ingredient", 300),
        new Meal("Shrimp and Avocado Tacos", "Ready in a flash.", 275),
        new Meal("Fries", "I only ate half of them.", 365),
        new Meal("Hamburger", "Didn't get a soda or cheese on my burger!", 354),
        new Meal("Vegan Burger", "Ordered a salad on the side instead of fries.", 375),
        new Meal("Chocolate Chunk and Walnut Oatmeal Cookies", "I liked it.", 100)
    ];

    editMeal(clickedMeal:Meal){
        this.selectedMeal = clickedMeal;
    }

    hideEdit(){
        this.selectedMeal = null;
    }

    addMeal(newMealFromChild: Meal){
        this.masterMealsList.push(newMealFromChild);
    }

}
