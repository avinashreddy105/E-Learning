import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{
  counter=0;
color :string= "yellow"
abc ={ "color":"white","background":"red","text-align":"center"}
qunty:number =0
qunty1:number =50
green ={"color":"green" ,"font-weight":"bold"}
red ={"color":"red" ,"font-weight":"bold"}

clr ={ green:true ,red:false}
res ={status:0 ,message:"Register Succesfully"}

ngOnInit(): void {
  if(this.res.status==1){
    this.clr={green:true,red:false}
  }
    else{
      this.clr={green:false,red:true}
    }
  }
  // ADD CART
  inc(){
    this.counter =this.counter+1
  }
  dec(){
    this.counter= this.counter-1
  }

  // hide and show password//
  type1 ="password"

show(){
this.type1 ="text"
}
hide(){
this.type1 ="password"
}

  // hide and show password//

}

