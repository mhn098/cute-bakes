import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' 
})

export class RecipeService {
    private apiUrl = 'http://localhost:8000/api/recipes';
    recipeList: Recipe[] = [];
    recipeList$: Observable<Recipe[]> = this.get_all_recipes_api();
    // newsList$: Observable<News[]> = this.get_all_published_api();
    // adminList$: Observable<News[]> = this.get_all_news_api();

    constructor(private http: HttpClient) {}
  
    get_all_recipes_api(): Observable<Recipe[]> {
      return this.http.get<Recipe[]>(this.apiUrl);
    }
  
    get_recipe_api(id: number): Observable<Recipe> {
      return this.http.get<Recipe>(`${this.apiUrl}/${id}`);
    }
  
    create_recipe_api(recipe: Recipe): Observable<Recipe> {
      return this.http.post<Recipe>(this.apiUrl, recipe);
    }
  
    update_recipe_api(id: number, recipe: Recipe): Observable<Recipe> {
      return this.http.put<Recipe>(`${this.apiUrl}/${id}`, recipe);
    }
  
    delete_recipe_api(id: number): Observable<Recipe> {
      return this.http.delete<Recipe>(`${this.apiUrl}/${id}`);
    }
}