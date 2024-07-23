import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicesAPI/api.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
public student = {fname:"",lname:"",email:"",phone:"",password:""}
public msg:any
public clr ={red:false,green:false}
// register API Intigration//
constructor(public api:ApiService){}

ngOnInit(): void {
   
}
 reg(){
  console.log(this.student)
  const data =new FormData()
  data.append ("fname",this.student.fname)
  data.append ("lname",this.student.lname)
  data.append ("email",this.student.email)
  data.append ("ph",this.student.phone)
  data.append ("pwd",this.student.password)

this.api.student_register(data).
subscribe((res:any)=>{
console.log(res)
this.msg=res.message
if(res.status===1){
  this.clr={red:false,green:true}
} else
{
  this.clr ={red:true ,green:false}
}
})
 }
// register API Intigration//

}
