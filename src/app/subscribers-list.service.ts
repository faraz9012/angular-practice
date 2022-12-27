import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscribersListService {
  listSubscribers = [
    {
      name: "John Smith",
      email: "smith@example.com"
    },{
      name: "Will Smith",
      email: "will@example.com"
    },{
      name: "Bruce Wayne",
      email: "bruce@example.com"
    },{
      name: "Tony Hawks",
      email: "tony@example.com"
    },{
      name: "Jason Statham",
      email: "jason@example.com"
    }
  ];

}
