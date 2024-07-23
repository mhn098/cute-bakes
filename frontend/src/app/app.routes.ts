import { Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './recipe-receipts/main-page/main-page.component';
import { DessertComponent } from './recipe-receipts/dessert/dessert.component';
import { EditorComponent } from './recipe-receipts/editor/editor.component';

export const routes: Routes = [
  MainPageComponent.Route,
  DessertComponent.Route,
  EditorComponent.Route,
{
  path: '',
  title: 'Main Page',
  loadComponent: () =>
    import('./recipe-receipts/main-page/main-page.component').then(
      (m) => m.MainPageComponent
    )
},
{
  path: 'dessert',
  title: 'Dessert',
  loadComponent: () =>
    import('./recipe-receipts/dessert/dessert.component').then(
      (m) => m.DessertComponent
    )
},
{
  path: 'editor',
  title: 'Editor',
  loadComponent: () =>
    import('./recipe-receipts/editor/editor.component').then(
      (m) => m.EditorComponent
    )
},];
// { path: '', redirectTo: 'main-page', pathMatch: 'full' }, // default route
// { path: '**', redirectTo: 'main-page' }]; // wildcard route

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }