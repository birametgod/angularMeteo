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
  authStatus : Boolean ;

  constructor(
    private authService : AuthService,
    private messageService : MessageService
  ) { }

  ngOnInit() {
  }

  onSignIn(login:string , password:string) {
    this.authService.signIn(login,password).then(
      () => {
        this.authStatus = this.authService.isAuth;
        /*if (!this.authStatus) {
          this.messageService.addMessage("identifiant incorrecte");
        }
        //this.authStatus ?  : this.messageService.addMessage("");
        console.log(this.messageService.message);*/
      }
    )
  }

  onSignOut() {
    this.authService.signOut()
    this.authStatus = this.authService.isAuth;
  }


}
