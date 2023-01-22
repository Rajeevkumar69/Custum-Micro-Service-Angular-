import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import * as uuid from 'uuid';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
     selector: 'app-user-data-form',
     templateUrl: './user-data-form.component.html',
     styleUrls: ['./user-data-form.component.scss']
})
export class UserDataFormComponent implements OnInit {
     public userInformationForm: FormGroup;
     public oldUsersFromLocalStorage: any = [];
     public isUpdateMode: boolean = false;

     //      prettier-ignore
     constructor(
        private _router: Router,
        private _location:Location,
        private _storageService:StorageService
        ) {}
     ngOnInit(): void {
          this.createUserInformation();
          this.getUserDetails();
          this.checkFormMode();
     }

     public checkFormMode() {
          // let formMode = localStorage.getItem('FORM_MODE');
          let formMode = this._storageService.getFormMOde();
          if (formMode && formMode == 'UPDATE_MODE') {
               this.isUpdateMode = true;
               this.setUserInformation();
          } else {
               this.isUpdateMode = false;
          }
     }

     public getUserDetails() {
          let details: any = this._storageService.getUserInformation();
          if (details) {
               this.oldUsersFromLocalStorage = details;
          }
     }

     public createUserInformation() {
          this.userInformationForm = new FormGroup({
               name: new FormControl('', [Validators.required]),
               age: new FormControl('', [Validators.required]),
               email: new FormControl('', [Validators.required]),
               contact: new FormControl('', [Validators.required]),
               address: new FormControl('', [Validators.required])
          });
     }
     public submitUserInformation() {
          if (this.userInformationForm.valid) {
               let formData = this.userInformationForm.value;
               if (this.isUpdateMode) {
                    // let user: any = JSON.parse(localStorage.getItem('EDITABLE_USER'));
                    let user: any = this._storageService.getEditableUser();

                    this.oldUsersFromLocalStorage.forEach((singleUser) => {
                         if (singleUser.userId == user.userId) {
                              singleUser.name = formData.name;
                              singleUser.age = formData.age;
                              singleUser.contact = formData.contact;
                              singleUser.address = formData.address;
                              singleUser.email = formData.email;
                         }
                    });

                    // let parsedStringUserInfo = JSON.stringify(this.oldUsersFromLocalStorage);
                    // localStorage.setItem('USER_INFORMATION', parsedStringUserInfo);

                    this._storageService.setUserInformation(this.oldUsersFromLocalStorage);

                    // localStorage.setItem('FORM_MODE', 'CREATE_MODE');
                    this._storageService.setFormMode('CREATE_MODE');
                    // localStorage.removeItem('EDITABLE_USER');
                    this._storageService.removeItem('EDITABLE_USER');
                    this._location.back();
               } else {
                    const newUserId = uuid.v4();
                    let _newUser = {
                         userId: newUserId,
                         name: formData.name,
                         age: formData.age,
                         contact: formData.contact,
                         address: formData.address,
                         email: formData.email
                    };
                    this.oldUsersFromLocalStorage.push(_newUser);

                    // let parsedStringUserInfo = JSON.stringify(this.oldUsersFromLocalStorage);
                    // localStorage.setItem('USER_INFORMATION', parsedStringUserInfo);

                    this._storageService.setUserInformation(this.oldUsersFromLocalStorage);
                    this._router.navigateByUrl('/user-data');
               }
          }
     }

     public setUserInformation() {
          // let user: any = JSON.parse(localStorage.getItem('EDITABLE_USER'));
          let user: any = this._storageService.getEditableUser();

          //   this.userInformationForm.get('name').setValue(user.name);
          this.userInformationForm.get('age').setValue(user.age);

          this.userInformationForm.get('email').setValue(user.email);
          this.userInformationForm.get('address').setValue(user.address);
          this.userInformationForm.get('contact').setValue(user.contact);
          let UFC = this.userInformationForm.controls;
          UFC['name'].setValue(user.name);
     }
     public cancelUpdate() {
          // localStorage.setItem('FORM_MODE', 'CREATE_MODE');
          this._storageService.setFormMode('CREATE_MODE');
          // localStorage.removeItem('EDITABLE_USER');
          this._storageService.removeItem('EDITABLE_USER');
          this._location.back();
     }
     public cancelCreate() {
          // localStorage.setItem('FORM_MODE', 'CREATE_MODE');
          this._storageService.setFormMode('CREATE_MODE');
          // localStorage.removeItem('EDITABLE_USER');
          this._storageService.removeItem('EDITABLE_USER');
          this._location.back();
     }

     get name() {
          return this.userInformationForm.get('name');
     }
     get email() {
          return this.userInformationForm.get('email');
     }
     get contact() {
          return this.userInformationForm.get('contact');
     }
     get address() {
          return this.userInformationForm.get('address');
     }
     get age() {
          return this.userInformationForm.get('age');
     }
}
