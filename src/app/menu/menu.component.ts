import { Component } from '@angular/core';
import { Food } from '../food';
import { FOODS } from '../mock-food';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  title='Menu';
  foods=FOODS;
  selectedFood?: Food;

  onSelect(food: Food): void {
    this.selectedFood = food;
  }
}
