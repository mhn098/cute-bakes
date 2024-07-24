import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

  
  @Component({
    selector: 'top-bar-widget',
    templateUrl: './top-bar.widget.html',
    styleUrls: ['./top-bar.widget.css']
  })
  export class TopBarWidget {
    @Input() recipe!: Recipe;
  
    constructor(
      public router: Router,
      public recipeService: RecipeService,
      protected snackBar: MatSnackBar,
    ) {}
  }