import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
     selector: 'app-signup',
     templateUrl: './signup.component.html',
     styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
     constructor(private _router: Router) {}
     public signupForm: any = FormGroup;
     public isInvaildForm: boolean = false;

     ngOnInit(): void {
          this.createSignupForm();
     }

     //      public navigateToLoginPage() {
     //           this._router.navigateByUrl('/login');
     //		 (click)="navigateToLoginPage()"
     //      }
     createSignupForm() {
          this.signupForm = new FormGroup({
               firstName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
               lastName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
               email: new FormControl('', [Validators.required, Validators.email]),
               contact: new FormControl('', [Validators.required, Validators.minLength(10)]),
               password: new FormControl('', [Validators.required, Validators.minLength(4)])
          });
     }

     public signupFormSubmission() {
          if (this.signupForm.valid) {
               let parsedDetails = JSON.stringify(this.signupForm.value);

               localStorage.setItem('signupData', parsedDetails);
               this._router.navigateByUrl('/home');
          } else {
               this.isInvaildForm = true;
          }
     }

     //      signupFormSubmission() {
     //           console.log(this.signupForm.value);
     //      }

     public updateFlag() {
          this.isInvaildForm = false;
     }

     get firstName() {
          return this.signupForm.get('firstName');
     }
     get lastName() {
          return this.signupForm.get('lastName');
     }
     get email() {
          return this.signupForm.get('email');
     }
     get contact() {
          return this.signupForm.get('contact');
     }
     get password() {
          return this.signupForm.get('password');
     }
}
