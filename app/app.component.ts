import { Component } from '@angular/core';
import { Meal } from './meal.model';
import { MealFormComponent } from './meal-form.component';



@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <div class="jumbotron">
  <h1>Meal Tracker</h1>
  </div>
  </div>

  <meal-list></meal-list>
  <meal-form></meal-form>


  `
})

export class AppComponent {



}
