import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' 
})

export class RecipeService {
    private apiUrl = 'http://localhost:8000/api/recipes';

    constructor(private http: HttpClient) {}
  
    getRecipes(): Observable<Recipe[]> {
      return this.http.get<Recipe[]>(this.apiUrl);
    }
  
    getRecipe(id: number): Observable<Recipe> {
      return this.http.get<Recipe>(`${this.apiUrl}/${id}`);
    }
  
    createRecipe(recipe: Recipe): Observable<Recipe> {
      return this.http.post<Recipe>(this.apiUrl, recipe);
    }
  
    updateRecipe(id: number, recipe: Recipe): Observable<Recipe> {
      return this.http.put<Recipe>(`${this.apiUrl}/${id}`, recipe);
    }
  
    deleteRecipe(id: number): Observable<Recipe> {
      return this.http.delete<Recipe>(`${this.apiUrl}/${id}`);
}