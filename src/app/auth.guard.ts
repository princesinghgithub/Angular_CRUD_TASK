import { Injectable } from '@angular/core';
import { CanActivate, Router, } from '@angular/router';
import { UserService } from './Services/user.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userservice: UserService, private router: Router) {
  }
  canActivate(): boolean {
    if (this.userservice.loggedIn()) {
      return true
    } else {
      this.router.navigate(['/login'])
      return false
    }
  }
}
