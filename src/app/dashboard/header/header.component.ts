import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public email:any
constructor(public router:Router){

}
ngOnInit(): void {
  if(!localStorage.getItem("email")){
    this.router.navigate(["/login"])

  }
  this. email =localStorage.getItem("email")
}
logout(){
  this.router.navigate(["/login"])
  localStorage.clear()
}

}
