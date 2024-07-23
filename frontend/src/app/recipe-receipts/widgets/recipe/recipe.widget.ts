import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
    selector: 'recipe-widget',
    templateUrl: './recipe.widget.html',
    styleUrls: ['./recipe.widget.css']
  })
  export class NewsPostWidget {
    @Input() recipe!: Recipe;
  
    constructor(
      public rs: RecipeService,
    //   private router: Router,
    ) { }

  }
  