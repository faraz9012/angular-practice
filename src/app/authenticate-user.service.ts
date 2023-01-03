import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsersListService } from './login-users-list.service';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateUserService {

  constructor(
    private currentUser: LoginUsersListService,
    private route: Router,
    private messageService: MessageService
  ) { }

  IsLoggedIn() {
    return !!localStorage.getItem('token');
  }
  LogOut() {
    localStorage.removeItem('token');
    this.route.navigate(['/Login']);
  }
  onLoginUser(name, password) {
    let user = '1';
    let authUser = this.currentUser.loginUsers.find(
      element => element.userName == name &&
        element.password == password
    );
    if (authUser) {
      this.messageService.success("Welcome back " + name);
      localStorage.setItem('token', user);
      this.route.navigate(['/']);
      this.messageService.clear();
    }
    else {
      this.messageService.error("Invalid user");
      this.route.navigate(['/Login']);
      this.messageService.clear();
    }
  }
}