import { Component } from '@angular/core';
import { ApiService } from '../servicesAPI/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent  {
public courses =[
  {
    name:"HTML",
    img:"https://cdn.educba.com/academy/wp-content/uploads/2018/09/Top-Uses-Of-HTML.jpg",
    content:"The HTML <img >tag is used to embed an image in a web page. Images are not technically inserted into a web page; images are linked to web pages. The tag creates a holding spa",
    fee:"FEE:2500",
    duration:"DURATION:10HRS",
    navigation:"html"

  },
  {
    name:"CSS",
    img:"https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg",
    content:"The HTML <img >tag is used to embed an image in a web page. Images are not technically inserted into a web page; images are linked to web pages. The tag creates a holding spa",
    fee:"FEE:2500",
    duration:"DURATION:10HRS",
    navigation:"css"
  },
  {
    name:"JAVA SCRIPT",
    img:"https://www.tutorialrepublic.com/lib/images/javascript-illustration.png",
    content:"The HTML <img >tag is used to embed an image in a web page. Images are not technically inserted into a web page; images are linked to web pages. The tag creates a holding spa",
    fee:"FEE:5000",
    duration:"DURATION:20HRS",
    navigation:"js"
  },
  {
    name:"ANGULAR",
    img:"https://repository-images.githubusercontent.com/314186076/79a18fff-1aeb-4a12-9340-db81b383b5e7",
    content:"The HTML <img >tag is used to embed an image in a web page. Images are not technically inserted into a web page; images are linked to web pages. The tag creates a holding spa",
    fee:"FEE:10000",
    duration:"DURATION:20HRS",
    navigation:"angular"

  },
  {
    name:"REACT",
    img:"https://media.licdn.com/dms/image/D4E12AQFAnM7JNyFDQg/article-cover_image-shrink_720_1280/0/1708148800306?e=2147483647&v=beta&t=YVyEgQPbE7DUjDtMEQ5DBs_NUxWX_z6mWn72IqCH03Q",
    content:"The HTML <img >tag is used to embed an image in a web page. Images are not technically inserted into a web page; images are linked to web pages. The tag creates a holding spa",
    fee:"FEE:10000",
    duration:"DURATION:20HRS",
    navigation:"react"

  },
  {
    name:"NODE JS",
    img:"https://positiwise.com/blog/wp-content/uploads/2021/12/node-js-for-software-development-1200x600-1.jpg",
    content:"The HTML <img >tag is used to embed an image in a web page. Images are not technically inserted into a web page; images are linked to web pages. The tag creates a holding spa",
    fee:"FEE:5000",
    duration:"DURATION:10HRS",
    navigation:"nodejs"


  }

]
constructor(public api :ApiService,public router:Router){}
add(course:any){
console.log(course)
this.api.addtocart(course)
console.log(this.api.getcartdata())
this.router.navigate(["/cart"])

}
read(){
this.router.navigate(["/courses/html"])
}
}
