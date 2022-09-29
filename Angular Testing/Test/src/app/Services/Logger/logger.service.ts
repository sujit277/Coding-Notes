import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }
  messages: string[] = [];

  logger(message: string) {
    this.messages.push(message);
  }

  clear(){
    this.messages = [];
  }
}
