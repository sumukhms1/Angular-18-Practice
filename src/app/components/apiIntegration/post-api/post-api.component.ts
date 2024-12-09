import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../../Service/department.service';
import { AlertComponent } from '../../reusableComponents/alert/alert.component';
import { MyButtonComponent } from '../../reusableComponents/my-button/my-button/my-button.component';
import { Department } from '../../../Models/Class/Customer';
import { IDepartmentList } from '../../../Models/Interface/IUser';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule, AlertComponent,MyButtonComponent],
  templateUrl: './post-api.component.html',
  styleUrls: ['./post-api.component.css']
})
export class PostApiComponent implements OnInit {

  deptObj: Department = new Department();
   
  deptList: IDepartmentList[] = [];

  http = inject(HttpClient);

  constructor(private deptSrv: DepartmentService) {
    const result = this.deptSrv.addTwoNo(10,20);
    debugger;
  }

  ngOnInit(): void {
    this.getDepartment();  
  }

  getDepartment() {
    this.deptSrv.getAllDept().subscribe((res: any) => {
      this.deptList = res.data;
    });
  }

  onEdit(data: any) {
    this.deptObj = data;  
  }

  
  onDelete(id: number) {
    const isDelete=  confirm("Are you sure want to delete");
    if(isDelete) {
      this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=" +id).subscribe((res:any)=>{
        if(res.result) {
          alert("Department Deleted Success");
          this.getDepartment();
        } else {
          alert(res.message)
        }
      })
    }
    
  }

  onSave() {
    this.deptSrv.saveNewDept(this.deptObj).subscribe((res: any) => {
      if (res.result) {
        alert("Department Created Successfully");
        this.getDepartment();  
      } else {
        alert(res.message);
      }
      this.deptObj.departmentName = "";
      this.deptObj.departmentLogo = "";
    });
  }

  getData(daata: any) {
    debugger;
  }

  onUpdate() {
    this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment", this.deptObj).subscribe((res: any) => {
      if (res.result) {
        alert("Department Updated Successfully");
        this.getDepartment();  
      } else {
        alert(res.message);
      }
      this.deptObj.departmentName = "";
      this.deptObj.departmentLogo = "";
    });
  }
}
