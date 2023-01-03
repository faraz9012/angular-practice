import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  constructor() { }
  messages = [];

  success(message) {
    this.messages.push(message);
  }

  warning(message) {
    this.messages.push(message);
  }

  error(message) {
    this.messages.push(message);
  }

  clear() {
    setInterval(() => {
      this.messages = [];
    }, 3000);
  }
}
