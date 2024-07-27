import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [ 
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent {
  public static Route = {
    path: 'dessert/:slug/editor',
    title: 'Recipe Editor',
    component: EditorComponent,
    canActivate: []
  };

  // public recipe: Recipe;
  // public editedNews: News | undefined;
  news_slug: string = 'new';

  slug = new FormControl('');
  name = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  directions = new FormControl('', [Validators.required]);
  notes = new FormControl('');

  public recipeForm = this.formBuilder.group({
    slug: this.slug,
    name: this.name,
    description: this.description,
    directions: this.directions,
    notes: this.notes
  });

// send form data 

  constructor(
    private cbService: RecipeService,
    protected formBuilder: FormBuilder
  ) { }

  generateSlug(): string {
    var generatedSlug = this.recipeForm.value
      .name!.toLowerCase()
      .replace(/[^a-zA-Z0-9]/g, '-');
    return generatedSlug;
  }

  onSubmit(): void {
    console.log('onSubmit()');
  }
}
