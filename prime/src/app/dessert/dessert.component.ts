import { Component } from '@angular/core';

@Component({
  selector: 'app-dessert',
  standalone: true,
  imports: [],
  templateUrl: './dessert.component.html',
  styleUrl: './dessert.component.css'
})
export class DessertComponent {
  public static Route = {
    path: 'dessert/',
    title: 'Dessert Page',
    component: DessertComponent,
    canActivate: []
  };
constructor(
) {}
}