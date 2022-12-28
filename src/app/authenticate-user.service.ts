import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsersListService } from './login-users-list.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateUserService {
  

  constructor(
    private currentUser: LoginUsersListService,
    private route:Router
    ) { }

  onLoginUser(name:string, password:string) {
    if (name == this.currentUser.loginUsers[0].userName &&
      password == this.currentUser.loginUsers[0].password) {
      this.route.navigate(['/'])
    }
    else{
      this.route.navigate(['/Login'])
    }
  }
}
