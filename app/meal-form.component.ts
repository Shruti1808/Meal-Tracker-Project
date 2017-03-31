import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
    selector: "meal-form",
    templateUrl: 'app/meal-form.component.html'



})


export class MealFormComponent {
     meals : Meal[];


    // submitMeal(){
    //     // this.meals = new Meal();
    // }


}
