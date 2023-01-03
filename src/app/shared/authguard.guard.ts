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
      console.log("Checking Authguard canActivate false condition.");
      this.route.navigateByUrl("/Login");
    }
    console.log("Checking Authguard canActivate true condition.");
    return this.auth.IsLoggedIn();
  }

}
