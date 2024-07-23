import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicesAPI/api.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  // curd opeation //
  public student = {fname:"",lname:"",email:"",phone:"",password:"" ,uid:""}

  dmsg:any
  umsg:any
public data:any
public clr ={red:false,green:false}
constructor(public api:ApiService ,public router:Router){}
  ngOnInit(): void {
   this.getusers();
  }
  // get user Api //
 getusers(){
  this.api.student_getStuUsers().subscribe
  ((info:any)=>{
    console.log(info.data)
    info.data.sort((a:any,b:any)=>{
      return b.user_id-a.user_id
    })
    this.data=info.data
  })
 }
   // get user Api //
// delete API 
del(id:any){
 if( confirm('Are You sure to Delete?')){
  const data =new FormData()
  data.append("u_id",id)
  this.api.student_delete(data).subscribe((res:any)=>{
    console.log(res)
    this.dmsg=res.message
    this.getusers();
  })
 }
}
// delete API 


upd(id:any){
  this.umsg=""
 let d =this.data.filter((user:any)=>{
return user.user_id ===id
 })
 console.log(d)
 this.student.uid=d[0].user_id
 this.student.fname=d[0].user_fname
 this.student.lname=d[0].user_lname
 this.student.email=d[0].user_email
 this.student.phone=d[0].user_phone
 this.student.fname=d[0].user_fname

}
// update API //
updateuser(){
  const data= new FormData()
  data.append("user_id",this.student.uid)
  data.append("user_fname",this.student.fname)
  data.append("user_lname",this.student.lname)
  data.append("user_email",this.student.email)
  data.append("user_phone",this.student.phone)

  this.api.student_update(data).subscribe((res:any)=>{
console.log(res)
this.umsg= res.message
if(res.status==1){
  this.clr={green:true,red:false}
  this.getusers()
}
else{
  this.clr={green:false,red:true}
}
  })


}
// update API //

  // curd opeation //


    }

  

