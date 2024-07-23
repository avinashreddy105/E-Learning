import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../servicesAPI/api.service';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{
  constructor(public api:ApiService,public router:Router, ){}
  public msg:any
  public clr ={red:false,green:false}

  isSubmit:any=false
  loginForm:any= new FormGroup({
  email: new FormControl('',Validators.required),
  password: new FormControl('',Validators.required)


})

// Login API integration //
ngOnInit(): void {
  
}
get f(){
  return this.loginForm.controls
}
login(){
  this.isSubmit =true;
  console.log(this.loginForm.value)

  const data =new FormData()
  data.append ("userEmail",this.loginForm.value.email)
  data.append ("userPassword",this.loginForm.value.password)
  this.api.student_login(data).
  subscribe((res:any)=>{
    console.log(res)
    this.msg=res.message
    if(res.status===1){
      localStorage.setItem("email",this.loginForm.value.email)
      localStorage.setItem("user",JSON.stringify(res.data[0]))
    setTimeout(()=>{
      this.router.navigate(["/dashboard"])
     },2000)
    
      this.clr={red:false,green:true}
    } else
    {
      this.clr ={red:true ,green:false}
    }
    })
}
// Login API integration //

}
