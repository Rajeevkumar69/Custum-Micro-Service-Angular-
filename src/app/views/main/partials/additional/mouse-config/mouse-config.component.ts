import { Component, OnInit } from '@angular/core';
import { BroadcastService } from 'src/app/shared/services/broadcast.service';

@Component({
     selector: 'app-mouse-config',
     templateUrl: './mouse-config.component.html',
     styleUrls: ['./mouse-config.component.scss']
})
export class MouseConfigComponent implements OnInit {
     constructor(private _broadcastService: BroadcastService) {}
     ngOnInit(): void {}

     public startComputer() {
          let payload = {
               name: 'Rajeev',
               brother: 'Om',
               message: 'Welcome to Dell Enterprises Edition'
          };
          this._broadcastService.startComputerSubscriptionFunction(payload);
     }
}
