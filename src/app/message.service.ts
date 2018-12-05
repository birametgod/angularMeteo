import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message:string;

  constructor() { }

  addMessage(mess: string) : void {
    this.message = mess;
  }
}
