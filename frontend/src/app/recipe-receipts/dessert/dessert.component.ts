import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-dessert',
  standalone: true,
  imports: [],
  templateUrl: './dessert.component.html',
  styleUrl: './dessert.component.css'
})
export class DessertComponent {
  recipe: Recipe;
  public static Route = {
    path: 'dessert/:slug',
    title: 'Dessert Page',
    component: DessertComponent,
    canActivate: []
  };
constructor(
  public recipeService: RecipeService,
) {
  this.recipe = new Recipe(1, 'name', '', '', '');
}
}