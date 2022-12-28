import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginUsersListService } from '../login-users-list.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private currentUser:LoginUsersListService){

}

loginForm: FormGroup = new FormGroup({
  name: new FormControl('', [Validators.required]),
  password: new FormControl('', [Validators.required, Validators.minLength(2)]),
})

onLoginUser(){
  if (this.loginForm.value.name == this.currentUser.loginUsers[0].userName && 
    this.loginForm.value.password == this.currentUser.loginUsers[0].password){
  } 
}
}
