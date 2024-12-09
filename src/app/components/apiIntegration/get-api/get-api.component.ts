import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { AlertComponent } from '../../reusableComponents/alert/alert.component';
import { Customer } from '../../../Models/Class/Customer';
import { IUser } from '../../../Models/Interface/IUser';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetAPIComponent {

  userList: IUser [] = [];
  customerList: Customer [] = [];

  constructor(private http: HttpClient) {
    this.getAllUser();
  } 



  getAllUser() {
    debugger;
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any)=>{
      debugger;
      this.userList = result;
    })
  }
  

  // getAllCustomer() {
  //   this.http.get('/api/PropertyBookingController/GetAllCustomer')
  // .subscribe((res: any) => {
  //   debugger
  //   this.customerList = res.data;
  // });

  // }

  getAllCustomer() {
    debugger;
    this.http.get("https://projectapi.gerasim.in/api/PropertyBookingController/GetAllCustomer").subscribe((res:any)=>{
      debugger;
      this.customerList =  res.data;
    }, error=>{
      debugger;
    })
  }

  // getAllCustomer() {
  //   this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res: any) => {
  //     this.customerList = res; // Assuming the mock "users" are like customers
  //   }, error => {
  //     console.error('Error fetching customer data', error);
  //   });
  // }
  



}