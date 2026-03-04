import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
  standalone:true
})
export class ParentComponent {

message1:string = "parentMessage";
value:number=10;

name:string='';
namePass(){
this.name= "rema";
}
// variable : string and number 
// object 
// array
// in child component we can take transform varaible if we wanna transform in input 
// sytanx   set num(value: type){ this.transformvalue = value*10}

childMessage: string = '';

receiveMessage(data: string) {
  this.childMessage = data;
}

childNumber: number=0;
receiveNumber(data:number){
  this.childNumber= data;
}


}
   