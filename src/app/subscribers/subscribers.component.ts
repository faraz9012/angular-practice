import { Component } from '@angular/core';
import { SubscribersListService } from '../subscribers-list.service';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.css']
})
export class SubscribersComponent {
  selectedItem;
  selectedIndex;
  NewSubscriberName;
  NewSubscriberEmail;

  constructor (
    public listService: SubscribersListService
  ) {}
  
  onDeleteSubscriber(value){
    this.listService.listSubscribers.splice(value,1);
  }
  onEditSubscriber(value){
    this.selectedIndex = value;
    this.selectedItem = this.listService.listSubscribers.find((item, i) => i === value);
  }

  updateSubscriberInfo(){
    let updateItem = this.listService.listSubscribers[this.selectedIndex];

    updateItem['name'] = this.NewSubscriberName;
    updateItem['email'] = this.NewSubscriberEmail;
    this.NewSubscriberName = '';
    this.NewSubscriberEmail = '';
  }
}

