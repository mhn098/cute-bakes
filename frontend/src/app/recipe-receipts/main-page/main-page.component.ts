import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  public static Route = {
    path: 'main-page',
    title: 'Main Page',
    component: MainPageComponent,
    canActivate: []
  };
  constructor(
    public router: Router
  ) {}

  publishNews() {
    this.router.navigate(['/recipe/new/editor']);
  }
}
