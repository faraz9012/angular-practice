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

  onLoginUser(name, password) {
    let authUser = this.currentUser.loginUsers.find(
      element => element.userName == name &&
        element.password == password
    );
    if (authUser) {
      this.messageService.success("Welcome back " + name);
      this.route.navigate(['/']);
      setInterval(() => {
        this.messageService.clear();
      }, 3000);
    }
    else {
      this.messageService.error("Invalid user");
      this.route.navigate(['/Login']);
      setInterval(() => {
        this.messageService.clear();
      }, 3000);
    }
  }
}