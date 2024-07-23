// api services//
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // API SERVICE CONCEPT //
public api:any="http://ilandertech.com/api/index.php/welcome/"
  constructor(public http:HttpClient) { }
  student_register(data:any) {
   return this.http.post(this.api+"AddStuRegister",data)
  }
  student_login(data:any){
     return this.http.post(this.api+"StuLogin",data)
  }
  student_delete(data:any){
    return this.http.post(this.api+"DeleteStuUsers",data)
 }
 student_update(data:any){
  return this.http.post(this.api+"updateStuUsers",data)
}
student_getStuUsers(){
  return this.http.get(this.api+"getStuUsers")
}
slider_add(data:any){
  return this.http.get(this.api+"AddStuSliders",data)


}
slider_update(data:any){
  return this.http.get(this.api+"updateStuSlider")

  
}
slider_del(data:any){
  return this.http.get(this.api+"DeleteStuSlider")

  
}
slider_get(data:any){
  return this.http.get(this.api+"GetStuSlider")

  
}
    // API SERVICE CONCEPT //

    // api fro add cart//
cartdata:any=[]
    addtocart(data:any){
this.cartdata.push(data)
    }

    getcartdata(){
      return this.cartdata;
    }
// api for add cart//
  }


