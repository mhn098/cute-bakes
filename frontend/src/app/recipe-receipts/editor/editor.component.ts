import { Component } from '@angular/core';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent {
  public static Route = {
    path: 'editor/',
    title: 'Recipe Editor',
    component: EditorComponent,
    canActivate: []
  };
  constructor(
    // private cbService: CBService,
    // protected formBuilder: FormBuilder
  ) { }
}
