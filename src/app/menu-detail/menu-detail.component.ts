
import { Food } from '../food';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../food.service';
import { FOODS } from '../mock-food';



@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.css']
})
export class MenuDetailComponent {
  selectedFood?: Food;
  @Input() food?: Food;
  // constructor(private route: ActivatedRoute, private foodService: FoodService) { }
  // onSelect(food: Food): void {
  //   this.selectedFood = food;
  // }
  // ngOnInit() {
  //   this.route.paramMap.subscribe(params => {
  //     const productId = params.get('productId');
  //     this.selectedFood = this.foodService['getFoodById'](productId);
  //   });
  // }
}
