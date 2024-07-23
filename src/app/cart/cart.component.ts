import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicesAPI/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
data:any


  constructor(public api:ApiService,public router:Router){}
  ngOnInit(): void {
    this.data=this.api.getcartdata();
  }
  pay(){
    this.router.navigate(["/payment"])
  }

}
