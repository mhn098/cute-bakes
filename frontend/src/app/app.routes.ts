import { Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './main-page/main-page.component';
import { DessertComponent } from './dessert/dessert.component';

export const routes: Routes = [
  MainPageComponent.Route,
  DessertComponent.Route,
{
  path: '',
  title: 'Main Page',
  loadComponent: () =>
    import('./main-page/main-page.component').then(
      (m) => m.MainPageComponent
    )
},
{
  path: 'dessert',
  title: 'dessert',
  loadComponent: () =>
    import('./dessert/dessert.component').then(
      (m) => m.DessertComponent
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