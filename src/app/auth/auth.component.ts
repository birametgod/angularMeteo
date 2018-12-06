import { Component, OnInit } from '@angular/core';
import { User } from "../user";
import { USERS } from "../user-data"
import { AuthService } from "../auth.service";
import { log } from 'util';
import { MessageService } from "../message.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  log:string;
  pass:string;

  users : User[] = [] ;
  authStatus : boolean ;
  message : string ;

  constructor(
    private authService : AuthService,
    private messageService : MessageService
  ) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  onSignIn(login:string , password:string) {
    this.authService.signIn(login,password).then(
      () => {
        this.authStatus = this.authService.isAuth;
      }
    );
    this.log = "";
    this.pass= "";
    this.authService.isAuth ? this.messageService.addMessage("") : this.messageService.addMessage("identifiant incorrecte");
  }

  onSignOut() {
    this.authService.signOut()
    this.authStatus = this.authService.isAuth;
  }


}
