import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticateUserService } from '../authenticate-user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(
    private auth: AuthenticateUserService,
    private route: Router) {

  }

  canActivate(): boolean {
    if (!this.auth.IsLoggedIn()) {
      this.route.navigateByUrl("/Login");
    }
    return this.auth.IsLoggedIn();
  }

}
