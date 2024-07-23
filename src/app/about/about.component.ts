import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
public name1:any =["HTML","CSS","JAVASCRIPT","ANGULAR","REACT","JODEJS"]
public name2:any=[  ]
constructor(){}
ngOnInit(): void {
  
}
}
