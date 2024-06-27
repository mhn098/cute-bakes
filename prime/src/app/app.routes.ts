import { Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './main-page/main-page.component';

export const routes: Routes = [
  MainPageComponent.Route,
{
  path: 'main-page',
  title: 'Main Page',
  loadComponent: () =>
    import('./main-page/main-page.component').then(
      (m) => m.MainPageComponent
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