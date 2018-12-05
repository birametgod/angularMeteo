import { Injectable } from '@angular/core';
import { UserService } from "./user.service";
import { User } from './user';
import { error } from '@angular/compiler/src/util';
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth = false;
  user : User ;
  constructor(
    private userService : UserService) { }

  signIn(login:string,password:string)  {
    console.log(login,password);
    return new Promise (
      (resolve,reject) => {
        this.userService.getUsers()
        .subscribe(
        (users) => {
          users.forEach((user)=> {
            if(user.login == login && user.password == password) {
              this.isAuth = true;
              this.user = user;
              console.log(this.user);
              resolve(true);
            }
          })
          console.log(this.isAuth);
        },
        (error) => {
          console.log("Error", error);
          reject(error);
        }
      )
      }
    )
  }

  signOut() {
    this.isAuth = false;
  }
}
