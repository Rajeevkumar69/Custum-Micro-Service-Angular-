import { FormGroup } from '@angular/forms';

export class NestedFormValidator {
     public singleError(group: FormGroup, formErrors: any, validationMessage: any) {
          Object.keys(group.controls).forEach((key: string) => {
               const abstractControl = group.get(key);
               if (abstractControl instanceof FormGroup) {
                    this.singleError(abstractControl, formErrors, validationMessage);
               } else {
                    formErrors[key] = '';
                    if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty)) {
                         if (validationMessage[key]) {
                              const messages = validationMessage[key];
                              for (const errorKey in abstractControl.errors) {
                                   if (errorKey) {
                                        formErrors[key] += messages[errorKey] + ' ';
                                   }
                              }
                         }
                    }
               }
          });
          return formErrors;
     }

     public allErrors(group: FormGroup, formErrors: any, validationMessage: any) {
          Object.keys(group.controls).forEach((key: string) => {
               const abstractControl = group.get(key);
               if (abstractControl instanceof FormGroup) {
                    formErrors = this.singleError(abstractControl, formErrors, validationMessage);
               } else {
                    formErrors[key] = '';
                    if (abstractControl && !abstractControl.valid) {
                         if (validationMessage[key]) {
                              const messages = validationMessage[key];
                              for (const errorKey in abstractControl.errors) {
                                   if (errorKey) {
                                        formErrors[key] += messages[errorKey] + ' ';
                                   }
                              }
                         }
                    }
               }
          });
          return formErrors;
     }

     public displayNestedFormErrors(group: FormGroup, key: any, errors: any, message: any, isSingle: boolean) {
          if (key == 'address') {
               const addressGroup = group.get('address') as FormGroup;
               if (isSingle) {
                    errors.address = this.singleError(addressGroup, errors.address, message.address);
               } else {
                    errors.address = this.allErrors(addressGroup, errors.address, message.address);
               }
          } else if (key == 'fields') {
               const fieldsGroup = group.get('fields') as FormGroup;
               if (isSingle) {
                    errors.fields = this.singleError(fieldsGroup, errors.fields, message.fields);
               } else {
                    errors.fields = this.allErrors(fieldsGroup, errors.fields, message.fields);
               }
          } else {
          }
          return errors;
     }

     public displayNestedStudentInfoFormErrors(group: FormGroup, key: any, errors: any, message: any, isSingle: boolean) {
          if (key == 'studentAddress') {
               const _tempGroup = group.get(key) as FormGroup;
               if (isSingle) {
                    errors[key] = this.singleError(_tempGroup, errors[key], message[key]);
               } else {
                    errors[key] = this.allErrors(_tempGroup, errors[key], message[key]);
               }
          } else if (key == 'collegeDetails') {
               const _tempGroup = group.get(key) as FormGroup;
               if (isSingle) {
                    errors[key] = this.singleError(_tempGroup, errors[key], message[key]);
               } else {
                    errors[key] = this.allErrors(_tempGroup, errors[key], message[key]);
               }
          } else if (key == 'idCard') {
               const _tempGroup = group.get(key) as FormGroup;
               if (isSingle) {
                    errors[key] = this.singleError(_tempGroup, errors[key], message[key]);
               } else {
                    errors[key] = this.allErrors(_tempGroup, errors[key], message[key]);
               }
          } else if (key == 'any---new--key') {
               const _tempGroup = group.get(key) as FormGroup;
               if (isSingle) {
                    errors[key] = this.singleError(_tempGroup, errors[key], message[key]);
               } else {
                    errors[key] = this.allErrors(_tempGroup, errors[key], message[key]);
               }
          } else {
          }
          return errors;
     }
}
