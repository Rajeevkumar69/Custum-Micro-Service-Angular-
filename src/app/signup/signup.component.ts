import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormHelper } from '../shared/form-helper/form-helper';
import { GlobalFormValidator } from '../shared/form-validators/global-form-validator';
import { FormModel } from '../shared/models/form-model';

@Component({
     selector: 'app-signup',
     templateUrl: './signup.component.html',
     styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
     public signupForm: FormGroup;
     public formModel: FormModel;
     public formHelper: FormHelper;
     public formErrors: any;
     public validationMessage: any;
     public globalFormValidator: GlobalFormValidator;
     public passwordPattern = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$';
     constructor(private _router: Router) {
          this.formModel = new FormModel();
          this.formHelper = new FormHelper();
          this.globalFormValidator = new GlobalFormValidator();
     }
     ngOnInit(): void {
          this.createSignupForm();
     }

     createSignupForm() {
          this.signupForm = new FormGroup({
               firstName: new FormControl('', [Validators.required]),
               lastName: new FormControl('', [Validators.required]),
               email: new FormControl('', [Validators.required, Validators.email]),
               phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
               password: new FormControl('', [Validators.required, Validators.minLength(4)]),
               confirmPassword: new FormControl('', [Validators.required])
          });
          this.loadFormProperty('signupForm');
     }

     public signupFormSubmission() {
          if (this.signupForm.valid) {
               let parsedDetails = JSON.stringify(this.signupForm.value);

               localStorage.setItem('signupData', parsedDetails);
               this._router.navigateByUrl('/home');
          } else {
               this.displayAllFormErrors(this.signupForm);
          }
     }
     public loadFormProperty(form: string) {
          this.formErrors = this.formModel.formErrors[form];
          this.validationMessage = this.formModel.validationMessage[form];
     }
     public displaySingleFormError(group: FormGroup) {
          this.formErrors = this.globalFormValidator.displaySingleFormError(group, this.formErrors, this.validationMessage);
     }

     public displayAllFormErrors(group: FormGroup) {
          this.formErrors = this.globalFormValidator.displayAllFormErrors(group, this.formErrors, this.validationMessage);
     }
}
