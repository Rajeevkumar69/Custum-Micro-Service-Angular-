import { Component, OnInit } from '@angular/core';

@Component({
     selector: 'app-home',
     templateUrl: './home.component.html',
     styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
     public userDetails: any = {};

     ngOnInit(): void {
          this.getUsersDetails();
     }

     getUsersDetails() {
          let details: any = localStorage.getItem('signupData');
          this.userDetails = JSON.parse(details);
          // console.log(this.userDetails);
     }
}
