import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivateFn } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export  const DashboardGuard:CanActivateFn = (route,state)=>{
  return true
};
  
  
  