import { Component, Input, Output,EventEmitter } from '@angular/core';

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

// child to parent

 @Output() messageEvent = new EventEmitter<string>();

  sendData() {
    this.messageEvent.emit("Hello Parent");
  }
  // we can make the combination like we can send the object or array oer form data same way
  @Output() numberEvent = new EventEmitter<number>();
  sendNumber(){
    this.numberEvent.emit(10);
  }

}
