import { Component } from '@angular/core';
import { SubscribersListService } from '../subscribers-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  sliderUrl = '../../assets/img/';
  subscriberName:string;
  subscriberEmail:string;

  constructor(
    private listService: SubscribersListService
  ) {}


 onAddSubscriber(){
  this.listService.listSubscribers.push({
    name: this.subscriberName,
    email: this.subscriberEmail
  });
}
}
