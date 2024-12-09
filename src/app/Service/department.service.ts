import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Department } from '../Models/Class/Customer';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  apiURL:string = 'https://projectapi.gerasim.in/api/Complaint/';

  public onRoleChange$ : Subject<string> = new Subject<string>;
  
  public role$ : BehaviorSubject<string> = new BehaviorSubject<string>("");

  constructor(private http:HttpClient) { }

  getAllDept(){
    return this.http.get(this.apiURL + "GetParentDepartment");
  }

  saveNewDept(obj:any){
   return this.http.post(`${this.apiURL}AddNewDepartment`,obj)
  }

  addTwoNo(num1:number,num2:number){
    debugger;
    return num1 + num2;
  }
}
