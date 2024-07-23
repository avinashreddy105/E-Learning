import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})

// route concept navigate//
export class PagenotfoundComponent {
  constructor(public router:Router){

  }
home(){
  this.router.navigate(["/home"])
}
contact(){
  this.router.navigate(["/contacts"])
}
// route concept navigate//

}
