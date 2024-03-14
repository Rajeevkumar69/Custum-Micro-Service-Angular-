import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
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
     ) {

     }

     ngOnInit() {
          this.getUsersComments2();
     }

     public getUsersComments2() {
          this._dataService.getComments().subscribe({
               next: (res) => {
                    this.users = res.data;
               },
               error: (error) => {
                    console.log(error);
               }
          });
     }
}
