import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ifelse',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.css'
})
export class IfelseComponent {

  div1Visiable:boolean = false;

showDiv1(){
  this.div1Visiable = true;
}

hideDiv1(){
  this.div1Visiable = false;
}

isWarnigDivVisiable:boolean = false;

toggleDiv2(){
  this.isWarnigDivVisiable = !this.isWarnigDivVisiable;
}

num1:string='';
num2:string='';

selectedStatus:string='';
}
