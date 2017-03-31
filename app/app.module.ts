import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { MealListComponent }  from './meal-list.component';
import { FormsModule }  from '@angular/forms';
import { MealFormComponent } from './meal-form.component';
import { EditMealComponent } from './edit-meal.component';


@NgModule({
  imports: [ BrowserModule , FormsModule ],
  declarations: [ AppComponent, MealListComponent, MealFormComponent, EditMealComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
