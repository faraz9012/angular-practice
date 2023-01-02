import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent {
  constructor(public toaster: MessageService) {}

}
