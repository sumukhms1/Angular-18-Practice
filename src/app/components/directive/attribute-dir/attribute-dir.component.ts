import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-attribute-dir',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './attribute-dir.component.html',
  styleUrl: './attribute-dir.component.css'
})
export class AttributeDirComponent {

div1bBgColor : string = 'bg-primary';

addRedClass(){
  this.div1bBgColor='bg-danger'
}

addBlueClass(){
  this.div1bBgColor='bg-primary'
}

isDiv2Active:boolean=false

toggleDiv2Class(){
  this.isDiv2Active = !this.isDiv2Active
}

num1:string='';
num2:string='';

isActive:boolean = false;

studentList:any [] = [
    {studId:12, name:'AA',totalMarks:25,city:'Pune',isActive:false},
    {studId:22, name:'BB',totalMarks:45,city:'Mumbai',isActive:false},
    {studId:32, name:'CC',totalMarks:95,city:'Karnataka',isActive:true},
    {studId:42, name:'DD',totalMarks:65,city:'Goa',isActive:false},
    {studId:52, name:'EE',totalMarks:15,city:'Rajasthan',isActive:false},
    {studId:62, name:'FF',totalMarks:55,city:'Delhi',isActive:true}
]
}
