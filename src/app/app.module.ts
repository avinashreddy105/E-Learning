import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from './services/services.component';
import { AdminComponent } from './admin/admin.component';
import { BlogComponent } from './blog/blog.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CoursesComponent } from './courses/courses.component';
import { AngularComponent } from './courses/angular/angular.component';
import { ReactComponent } from './courses/react/react.component';
import { NodejsComponent } from './courses/nodejs/nodejs.component';import { ApiService } from './servicesAPI/api.service';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import {MatIconModule} from '@angular/material/icon';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HTMLComponent } from './courses/html/html.component';
import { CssComponent } from './courses/css/css.component';
import { JsComponent } from './courses/js/js.component';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    ServicesComponent,
    AdminComponent,
    BlogComponent,
    FooterComponent,
    RegisterComponent,
    PagenotfoundComponent,
    LoginComponent,
    CoursesComponent,
    AngularComponent,
    ReactComponent,
    NodejsComponent,
    ParentComponent,
    ChildComponent,
    CartComponent,
    ContactComponent,
    ForgotpasswordComponent,
    HTMLComponent,
    CssComponent,
    JsComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
   
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
