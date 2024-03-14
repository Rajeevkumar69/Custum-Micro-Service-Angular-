import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
     selector: 'app-second-component',
     templateUrl: './second-component.component.html',
     styleUrls: ['./second-component.component.scss']
})
export class SecondComponentComponent implements OnInit {
     public users: any;
     // prettier-ignore
     constructor(
          private _dataService: DataService,
     ) { }

     ngOnInit() {
          this.getUsersDataThroughAPI();
     }

     public getUsersDataThroughAPI() {
          this._dataService.getUser().subscribe({
               next: (res) => {
                    //     console.log(res.data);
                    this.users = res.data;
               },
               error: (error) => {
                    console.log(error);
               }
          });
     }
}
