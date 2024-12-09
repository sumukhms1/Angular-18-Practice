 
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddEmployeeComponent implements OnInit {
   
  http = inject(HttpClient)
  userList: any[]=[];
  name: string = 'Html';

  constructor(private cdRef:ChangeDetectorRef){

  }

  ngOnInit(): void {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
      debugger;
      this.userList = res;
      this.name = "JAVA"
      setTimeout(()=>{
      this.cdRef.detectChanges();
      },1000)
      
    })
  }

  
 
}