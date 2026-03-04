import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { ParentComponent } from "./components/parent/parent.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InterpolationComponent, ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'angularAllTopic';




}
