import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicesAPI/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

// hide nav concept//
export class HeaderComponent implements OnInit {
 public navs:any =[
{ 
  name:"home",
  url:"/home",
  sub:[]
},
{ 
  name:"about",
  url:"/about",
  sub:[]

},
{ 
  name:"contact",
  url:"/contacts",
  sub:[]

},
{ 
  name:"services",
  url:"/services",
  sub:[]

},

// subnav concept//
{
name:"courses",
url:"/courses/angular",
sub:[
  {
    name:"html",
    url:"/courses/html"
  },
  {
    name:"css",
    url:"/courses/css"
  },
  {
    name:"js",
    url:"/courses/js"
  },
  {
    name:"angular",
    url:"/courses/angular"
  },
  
  {
    name:"react",
    url:"/courses/react"
  },
    {
    name:"nodejs",
    url:"/courses/nodejs"
  },
  
  
]
},
// subnav concept//


{ 
  name:"blog",
  url:"/blog",
  sub:[]

},
{ 
  name:"regsister",
  url:"/register",
  sub:[]

},
{ 
  name:"login",
  url:"/login",
  sub:[]

},
{ 
  name:"parent",
  url:"/parent",
  sub:[]

},
// hide nav concept//

 ]
 public data:any
 constructor(public api:ApiService){}
ngOnInit(): void {
this.data=this.api.getcartdata();
}

}
