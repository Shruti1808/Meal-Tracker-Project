import {Pipe, PipeTransform} from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
    name: "filterCalories",
    pure: false

})


export class CaloriesPipe implements PipeTransform {

    transform(input: Meal[], desiredCalories) {
        var output: Meal[] = [];
        if(desiredCalories === "low") {
            for (var i = 0; i < input.length; i++) {
                if (input[i].calories < 300) {
                    output.push(input[i]);
                }
            }
            return output;
        } else if (desiredCalories === "high") {
            for (var i = 0; i < input.length; i++) {
                if (input[i].calories > 300) {
                    output.push(input[i]);
                }
            }
            return output;
        } else {
            return input;
        }
    }
}
