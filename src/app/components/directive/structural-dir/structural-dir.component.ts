import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-structural-dir',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.css'
})
export class StructuralDirComponent {

  //*ngIf :-
  isDiv1Visible:boolean = false;

  idDiv2Visible:boolean=false;

  num1:string='';
  num2:string='';

  isActive:boolean=true
  selectedState:string='';

  constructor(private router:Router){
  }

  //*ngFor:-
  cityArray:string []= ['Pune','Mumbai','Namgpur','Thane']

  studentList:any[] = [
    {studId:12, name:'AA',city:'Pune',isActive:false},
    {studId:22, name:'BB',city:'Mumbai',isActive:false},
    {studId:32, name:'CC',city:'Karnataka',isActive:true},
    {studId:42, name:'DD',city:'Goa',isActive:false},
    {studId:52, name:'EE',city:'Rajasthan',isActive:false},
    {studId:62, name:'FF',city:'Delhi',isActive:true}
  ] 




  showDiv1(){
    this.isDiv1Visible=true;
  }

  hideDiv1(){
    this.isDiv1Visible=false;
  }

  toggleDiv2(){
    this.idDiv2Visible = !this.idDiv2Visible;
  }

  naviagteToAttribute(){
    this.router.navigateByUrl("attributedirective")
  }
}
