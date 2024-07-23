import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
// public name:any="i am avinash reddy"
// public msg:any
// public obj:any={name:"king",location:"hyd"}
  
// receivedata(x:any){
//   this.msg =x
// }
name:any= "avinash reddy"
val:any =true
data(name:any){
this.name=name;
}

Stop1(){
  this.val = false
}
}
