import { Component, OnInit } from '@angular/core';
import { BroadcastService } from 'src/app/shared/services/broadcast.service';
import { DataService } from 'src/app/shared/services/data.service';
import { StorageService } from 'src/app/shared/services/storage.service';
@Component({
     selector: 'app-first-component',
     templateUrl: './first-component.component.html',
     styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {
     public users: any;

     // prettier-ignore
     constructor(
          private _dataService: DataService,
        //   private _storageService: StorageService
          ) {
              
     }

     ngOnInit() {
          // let tempUser = this._storageService.getUserInformation();
          this.getUsersComments2();
     }

     // public getUsersComments() {
     //      this._dataService.getSimpleWayComments().subscribe((data) => {
     //           this.users = data;
     //      });
     // }

     public getUsersComments2() {
          this._dataService.getComments().subscribe({
               next: (res) => {
                    // console.log(res.data);
                    this.users = res.data;
               },
               error: (error) => {
                    console.log(error);
               }
          });
     }
}
