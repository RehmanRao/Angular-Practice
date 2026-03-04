import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf,CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css',
  standalone: true
})
export class TemplateFormComponent {

  //step1: import FormsModule
  // create a template like all the fields
  // we can also crete an interface all the fields
  //  #myForm="ngForm"    --->   Template reference to form
  // ngSubmit-> it is an event for submitting 
  // some validation: what happens:
  
// Situation	         touched	   invalid    	Error shows?
// Page load          	false	      true	       ❌ No
// Click & leave empty	true	      true	       ✅ Yes
// Type valid value	    true	      false	       ❌ No 



    user = {
    name: '',
    age: null
  };

  
   submitForm(form: any) {
    console.log(this.user);
    console.log(form);
  }



}
