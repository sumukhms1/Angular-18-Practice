import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

//Data Types In TS
// string, number, boolean, date

courseName:string = "Angular 18";

inputType = "radio";

rollNo:number = 123;

isIndian:boolean = true;

myClassName:string = "bg-primary";

selectState = "Goa";

//new type -signal
firstName = signal("Sumukh M S")

currentDate:Date = new Date();

constructor(){
  
}

showAlert(message:string){
  alert(message)
}

changeCourseName(){
  this.courseName="React Js"
  this.firstName.set("Shiva Shankar") //signal
}



}
