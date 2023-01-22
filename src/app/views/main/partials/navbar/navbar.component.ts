import { Component, OnInit } from '@angular/core';
import { BroadcastService } from 'src/app/shared/services/broadcast.service';

@Component({
     selector: 'app-navbar',
     templateUrl: './navbar.component.html',
     styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
     constructor(private _broadcastService: BroadcastService) {}
     ngOnInit(): void {}

     public startComputer() {
          let payload = {
               name: 'Rajeev',
               brother: 'Om',
               message: 'Welcome to Custom Micro Service'
          };
          this._broadcastService.startComputerSubscriptionFunction(payload);
     }
}
