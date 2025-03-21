import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { dynamicFormConfig } from 'src/app/shared/config/dynamic-form-config';
import { DynamicFormStructure } from 'src/app/shared/interfaces/dynamic-form.interface';

@Component({
     selector: 'app-dynamic-form',
     templateUrl: './dynamic-form.component.html',
     styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
     public formStructure: DynamicFormStructure[] = dynamicFormConfig;
     public dynamicForm: FormGroup = this._fb.group({});

     // prettier-ignore
     constructor(
          private _fb: FormBuilder
     ) {
          let formGroup: Record<string, any> = {};
          this.formStructure.forEach((control) => {
          let controlValidators: Validators[] = [];

          if (control.validations) {
               ``;
               control.validations.forEach(
               (validation: {
               name: string;
               validator: string;
               message: string;
          }) => {
            if (validation.validator === 'required')
              controlValidators.push(Validators.required);
            if (validation.validator === 'email')
              controlValidators.push(Validators.email);
            // Add more built-in validators as needed
          }
        );
      }

      formGroup[control.name] = [control.value || '', controlValidators];
    });

    this.dynamicForm = this._fb.group(formGroup);
     }

     ngOnInit(): void {}

     public getErrorMessage(control: any) {
          const formControl = this.dynamicForm.get(control.name);

          if (!formControl) {
               return '';
          }

          for (let validation of control.validations) {
               if (formControl.hasError(validation.name)) {
                    return validation.message;
               }
          }

          return '';
     }

     public onSubmit() {
          if (!this.dynamicForm.valid) {
               this.dynamicForm.markAllAsTouched();
               return;
          }
          console.log(this.dynamicForm.value);
     }
}
