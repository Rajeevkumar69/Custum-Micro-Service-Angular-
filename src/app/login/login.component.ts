import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
     selector: 'app-login',
     templateUrl: './login.component.html',
     styleUrls: ['./login.component.scss']
})
export class LoginComponent {
     constructor(private _router: Router) {}
     public loginForm: any = FormGroup;
     public isInvaildForm: boolean = false;

     ngOnInit(): void {
          this.createLoginForm();
     }

     //when form validation completed this function should be work....
     // public navigateToHomePage() {
     //      this._router.navigateByUrl('/home');
     // (click)="navigateToHomePage()"
     // }

     createLoginForm() {
          this.loginForm = new FormGroup({
               userName: new FormControl('', [Validators.required, Validators.email]),
               password: new FormControl('', [Validators.required, Validators.maxLength(8), Validators.minLength(4)])
          });
     }
     public loginFormSubmission() {
          if (this.loginForm.valid) {
               let parsedDetails = JSON.stringify(this.loginForm.value);

               localStorage.setItem('loginData', parsedDetails);
               this._router.navigateByUrl('/about');
          }
     }
     public updateFlag() {
          this.isInvaildForm = false;
     }
     get userName() {
          return this.loginForm.get('userName');
     }
     get password() {
          return this.loginForm.get('password');
     }
}
