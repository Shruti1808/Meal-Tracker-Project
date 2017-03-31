import { Component } from '@angular/core';
import { Meal } from './meal.model';
import { MealFormComponent } from './meal-form.component';



@Component({
  selector: 'app-root',
  template: `

  <meal-list></meal-list>
  <meal-form></meal-form>
  
  <div class="container">
  <div class="jumbotron">
  <h1>Meal Tracker</h1>
  </div>
  </div>




  `
})

export class AppComponent {

    selectedMeal= null;

    editMeal(clickedMeal){
        this.selectedMeal = clickedMeal;
    }

}
