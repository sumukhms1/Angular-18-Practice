import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userObj: any = {
    EmailId:'',
    Password:''
  };

  router =  inject(Router);
  http = inject(HttpClient)

  onLogin(){
    debugger;
    this.http.post("https://projectapi.gerasim.in/api/UserApp/login", this.userObj).subscribe((res:any)=>{
      debugger;
      if(res.result){
        alert("login Successful");
        localStorage.setItem('loginUser',JSON.stringify(res.data))
        this.router.navigateByUrl('add-emp')
      }
      else{
        debugger;
        alert("Invalid Credentials");
      }
    })
    // if(this.userObj.EmailId == "admin" && this.userObj.Password =="1234") {
    //     alert("login Success");
    //     localStorage.setItem('loginUser',this.userObj.EmailId)
    //      this.router.navigateByUrl('add-emp')
    //    } else {
    //    alert('Wrong Credentials')
    //    }


  }
  

}