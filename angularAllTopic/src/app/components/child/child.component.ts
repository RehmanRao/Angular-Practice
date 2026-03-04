import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  standalone: true
})
export class ChildComponent {

@Input() message!: string;

transformValue:number=0;

@Input() 
set num(value:number){
  this.transformValue= value*10;
}

@Input()namee!:string;




}
