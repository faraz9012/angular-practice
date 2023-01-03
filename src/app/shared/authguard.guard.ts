import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(
    private auth: AuthService,
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
