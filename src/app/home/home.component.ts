import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
 ngOnInit(): void {
   let promiss =new Promise((resolve,rej)=>{
    let username="telugu badi"
    if(username==="telugu adi"){
      resolve("user name correcr")
    }
    else{
      rej("username  wrong ")
    }
   })
   promiss.then(out=>console.log(out)).catch(err=>console.log(err))
 }
}
