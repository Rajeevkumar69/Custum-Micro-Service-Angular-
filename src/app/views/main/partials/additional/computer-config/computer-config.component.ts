import { Component, OnDestroy, OnInit } from '@angular/core';
import { BroadcastService } from 'src/app/shared/services/broadcast.service';

@Component({
     selector: 'app-computer-config',
     templateUrl: './computer-config.component.html',
     styleUrls: ['./computer-config.component.scss']
})
export class ComputerConfigComponent implements OnInit, OnDestroy {
     public computerInfo: any = {};
     public comSubscription: any;

     constructor(private _broadcastService: BroadcastService) {}

     ngOnInit(): void {
          this.comSubscription = this._broadcastService.startComputerSubscription$.subscribe((res) => {
               this.computerInfo = res;
          });
     }

     ngOnDestroy(): void {
          if (this.comSubscription) {
               this.comSubscription.unsubscribe();
          }
     }
}
