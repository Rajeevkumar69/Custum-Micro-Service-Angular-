import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
     providedIn: 'root'
})
export class BroadcastService {
     // ----------------------------------------------------------------------

     public startComputerSubscriptionSource: Subject<any> = new Subject<any>();
     public startComputerSubscription$ = this.startComputerSubscriptionSource.asObservable();

     public startComputerSubscriptionFunction(data: any) {
          this.startComputerSubscriptionSource.next(data);
     }

     // ----------------------------------------------------------------------
}
