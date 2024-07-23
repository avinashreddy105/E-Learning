import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public userData:any
constructor(){

}
ngOnInit(): void {
let data:any=(localStorage.getItem('user') as any);
  this.userData =JSON.parse(data)
  console.log(this.userData)
}
}
