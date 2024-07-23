import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { HeaderComponent } from './header/header.component';

import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  declarations: [
    DashboardComponent,

    HeaderComponent,

    ProfileComponent,
    UserComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    MatIconModule,
    
  ]
})
export class DashboardModule { }
