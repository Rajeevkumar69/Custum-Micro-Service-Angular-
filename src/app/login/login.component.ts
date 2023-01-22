import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormModel } from '../shared/models/form-model';
import { GlobalFormValidator } from '../shared/form-validators/global-form-validator';
import { FormHelper } from '../shared/form-helper/form-helper';

@Component({
     selector: 'app-login',
     templateUrl: './login.component.html',
     styleUrls: ['./login.component.scss']
})
export class LoginComponent {
     public loginForm: FormGroup;
     public formModel: FormModel;
     public formHelper: FormHelper;
     public formErrors: any;
     public validationMessage: any;
     public globalFormValidator: GlobalFormValidator;
     public passwordPattern = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$';

     // prettier-ignore
     constructor(private _router: Router) {
          this.formModel = new FormModel();
          this.formHelper = new FormHelper();
          this.globalFormValidator = new GlobalFormValidator();
     }
     ngOnInit(): void {
          this.createLoginForm();
     }

     createLoginForm() {
          this.loginForm = new FormGroup({
               userName: new FormControl('', [Validators.required, Validators.email]),

               password: new FormControl('', [Validators.pattern(this.passwordPattern), Validators.required])
          });
          this.loadFormProperty('login');
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

     public loginFormSubmission() {
          if (this.loginForm.valid) {
               let parsedDetails = JSON.stringify(this.loginForm.value);

               localStorage.setItem('loginData', parsedDetails);
               this._router.navigateByUrl('/about');
          } else {
               this.displayAllFormErrors(this.loginForm);
          }
     }
}
