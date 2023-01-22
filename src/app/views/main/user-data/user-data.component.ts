import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
     selector: 'app-user-data',
     templateUrl: './user-data.component.html',
     styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {
     // prettier-ignore
     constructor(
          private _router: Router,
          private _storageService: StorageService
     ) {}
     public userDetails: any = [];

     ngOnInit(): void {
          this.getUserDetails();
     }

     public getUserDetails() {
          // let details: any = localStorage.getItem('USER_INFORMATION');
          let details: any = this._storageService.getUserInformation();
          if (details) {
               this.userDetails = details;
          }
     }
     public addUser() {
          this._router.navigate(['user-data-form']);
     }

     public editUser(user: any) {
          // localStorage.setItem('FORM_MODE', 'UPDATE_MODE');
          this._storageService.setFormMode('UPDATE_MODE');
          // let parsedStringUserInfo = JSON.stringify(user);
          // localStorage.setItem('EDITABLE_USER', parsedStringUserInfo);
          this._storageService.setEditableUser(user);
          this._router.navigate(['user-data-form']);
     }

     public removeUser(userId: any) {
          // alert('Are You Sure!');
          let status = window.confirm('Are you sure,you want to delete this user!');
          if (status) {
               this.userDetails.forEach((element: any, index: number) => {
                    if (element.userId == userId) {
                         this.userDetails.splice(index, 1);
                    }
               });
               // let parsedStringUserInfo = JSON.stringify(this.userDetails);
               // localStorage.setItem('USER_INFORMATION', parsedStringUserInfo);
               this._storageService.setUserInformation(this.userDetails);
          }
     }
}
