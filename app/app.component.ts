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

  <meal-list></meal-list>
  `
})

export class AppComponent {



}
