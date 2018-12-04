import { Injectable } from '@angular/core';
import { User } from "./user";
import { USERS } from "./user-data";
import { Observable ,of } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers() : Observable<User[]> {
    return of(USERS);
  }
}
