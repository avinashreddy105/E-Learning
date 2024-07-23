import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {path:"", component:DashboardComponent},
  {path:"user", component:UserComponent},
  {path:"profile", component:ProfileComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
