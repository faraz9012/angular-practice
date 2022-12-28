import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticateUserService } from '../authenticate-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private checkUser:AuthenticateUserService){

}

loginForm: FormGroup = new FormGroup({
  name: new FormControl('', [Validators.required]),
  password: new FormControl('', [Validators.required, Validators.minLength(3)]),
})

onValidateLogin(){
  let checkUserName = this.loginForm.value.name;
  let checkUserPassword = this.loginForm.value.password;

  this.checkUser.onLoginUser(checkUserName, checkUserPassword);
}
}
