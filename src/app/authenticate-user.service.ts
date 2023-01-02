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

  onLoginUser(name, password) {
    let authUser = this.currentUser.loginUsers.find(
      element => element.userName == name && 
      element.password == password
    );

    if (authUser) {
      this.route.navigate(['/']);
    }
    else{
      this.route.navigate(['/Login']);
    }
  }
}
