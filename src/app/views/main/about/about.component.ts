import { Component } from '@angular/core';

@Component({
     selector: 'app-about',
     templateUrl: './about.component.html',
     styleUrls: ['./about.component.scss']
})
export class AboutComponent {
     public userLoginDetails: any = {};

     ngOnInit(): void {
          this.getUserLoginDetails();
     }

     getUserLoginDetails() {
          let data: any = localStorage.getItem('loginData');
          this.getUserLoginDetails = JSON.parse(data);
          console.log(this.getUserLoginDetails);
     }
}
