import { Injectable } from '@angular/core';
import { Ilogin } from './login/login.model';
@Injectable({
  providedIn: 'root'
})
export class LoginUsersListService {

  constructor() { }
  loginUsers: Ilogin[] =[{
    userName: 'admin',
    password:'123'
  },{
    userName: 'admin2',
    password:'1234'
  },{
    userName: 'admin3',
    password:'abc'
  }
]
}
