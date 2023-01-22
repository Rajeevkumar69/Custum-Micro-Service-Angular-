import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormHelper } from 'src/app/shared/form-helper/form-helper';
import { GlobalFormValidator } from 'src/app/shared/form-validators/global-form-validator';
import { FormModel } from 'src/app/shared/models/form-model';
import { NestedFormValidator } from 'src/app/shared/form-validators/nested-form-validator';
@Component({
     selector: 'app-home',
     templateUrl: './home.component.html',
     styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
     public bankAccountForm: FormGroup;
     public formModel: FormModel;
     public formHelper: FormHelper;
     public formErrors: any;
     public validationMessage: any;
     public globalFormValidator: GlobalFormValidator;
     public nestedFormValidator: NestedFormValidator;

     // prettier-ignore
     constructor(private _router: Router) {
          this.formModel = new FormModel();
          this.formHelper = new FormHelper();
          this.globalFormValidator = new GlobalFormValidator();
          this.nestedFormValidator = new NestedFormValidator();
     }
     ngOnInit(): void {
          this.createForm();
     }

     createForm() {
          this.bankAccountForm = new FormGroup({
               name: new FormControl('', [Validators.required]),
               address: new FormGroup({
                    address1: new FormControl('', [Validators.required]),
                    address2: new FormControl('', [Validators.required])
               }),
               fields: new FormGroup({
                    field1: new FormControl('', [Validators.required]),
                    field2: new FormControl('', [Validators.required])
               }),
               age: new FormControl('', [Validators.required, Validators.maxLength(2), Validators.minLength(1)])
          });
          this.loadFormProperty('bankAccountForm');
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

     public displayNestedSingleFormError(group: FormGroup, key: any) {
          this.formErrors = this.nestedFormValidator.displayNestedFormErrors(group, key, this.formErrors, this.validationMessage, true);
     }

     public displayAllNestedSingleFormError(group: FormGroup, key: any) {
          this.formErrors = this.nestedFormValidator.displayNestedFormErrors(group, key, this.formErrors, this.validationMessage, false);
     }

     public submitForm() {
          if (this.bankAccountForm.valid) {
               console.log(this.bankAccountForm.value);
          } else {
               this.displayAllFormErrors(this.bankAccountForm);
               this.displayAllNestedSingleFormError(this.bankAccountForm, 'fields');
               this.displayAllNestedSingleFormError(this.bankAccountForm, 'address');
          }
     }
}
