import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { ParentComponent } from "./components/parent/parent.component";
import { TemplateFormComponent } from "./components/template-form/template-form.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InterpolationComponent, ParentComponent, TemplateFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'angularAllTopic';




}
