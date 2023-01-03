import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor (private route: Router){}

  IsLoggedIn(){
    return !! localStorage.getItem('token');
  }
  LogOut(){
    localStorage.removeItem('token');
      this.route.navigate(['/Login']);
  }

}
