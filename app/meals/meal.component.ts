import { Component } from '@angular/core';
import { Meal } from './meal.model';


@Component({
 selector:'show-meals',
 template:`

 <p>{{Name: meal.mealName}}</p>
 <p>{{Details: meal.details}}</p>
 <p>{{Calories: meal.calories}}</p>




 `

})

export class MealComponent {
    public meal : Meal;

}
