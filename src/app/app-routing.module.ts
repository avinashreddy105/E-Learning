import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { AdminComponent } from './admin/admin.component';
import { BlogComponent } from './blog/blog.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component';
import { AngularComponent } from './courses/angular/angular.component';
import { ReactComponent } from './courses/react/react.component';
import { NodejsComponent } from './courses/nodejs/nodejs.component';
import { ParentComponent } from './parent/parent.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HTMLComponent } from './courses/html/html.component';
import { CssComponent } from './courses/css/css.component';
import { JsComponent } from './courses/js/js.component';

// routing concept//
const routes: Routes = [
  { path:"",redirectTo:"home",pathMatch:"full"},

  { path:"home",component:HomeComponent},
  { path:"contacts",component:ContactComponent},
  { path:"about",component:AboutComponent},
  { path:"services",component:ServicesComponent},
  { path:"admin",component:AdminComponent},
  { path:"blog",component:BlogComponent},
  { path:"register",component:RegisterComponent},
  { path:"parent",component:ParentComponent},
  { path:"login",component:LoginComponent},
  { path:"cart",component:CartComponent},
  { path:"forgotpassword",component:ForgotpasswordComponent},

  // child routing concept
  {path:"courses",component:CoursesComponent,
    children:[
      {path:"",redirectTo:"/courses/angular",pathMatch:"full"},
      {path:"angular",component:AngularComponent},
      {path:"react",component:ReactComponent},
      {path:"nodejs",component:NodejsComponent},
      {path:"html",component:HTMLComponent},
      {path:"css",component:CssComponent},
      {path:"js",component:JsComponent},

      
    ]
  },

  // child routing concept

  {path:"dashboard",
    loadChildren:()=>import('./dashboard/dashboard.module').then(e=>e.DashboardModule),
  },
  { path:"**",component:PagenotfoundComponent}
];
// routing concept//
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
