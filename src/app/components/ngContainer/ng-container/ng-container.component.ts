import { CommonModule } from '@angular/common';
import { Component,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ng-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-container.component.html',
  styleUrl: './ng-container.component.css'
})
export class NgContainerComponent {

  isConatiner: boolean = true;

  http = inject(HttpClient);

  userList: any[]=[];
  isApi: boolean = false;
  btnDisable:boolean = false;

  getUser(){
    this.isApi = true;
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{
      this.userList = res;
      this.isApi = false;
      this.btnDisable = true;

    })
  }
 

}
