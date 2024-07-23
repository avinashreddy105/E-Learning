import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicesAPI/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
data:any
  constructor(public api:ApiService){}
  ngOnInit(): void {
    this.data=this.api.getcartdata();
  }
}
