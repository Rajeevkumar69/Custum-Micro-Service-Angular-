import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormModel } from 'src/app/shared/models/form-model';
import { FormHelper } from 'src/app/shared/form-helper/form-helper';
import { GlobalFormValidator } from 'src/app/shared/form-validators/global-form-validator';
import { NestedFormValidator } from 'src/app/shared/form-validators/nested-form-validator';
@Component({
     selector: 'app-registration-form',
     templateUrl: './registration-form.component.html',
     styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
     public studentInfo: FormGroup;
     public studentaddress: FormGroup;
     public collegeDetails: FormGroup;
     public labs: FormGroup;
     public idCard: FormGroup;
     //
     public formModel: FormModel;
     public formErrors: any;
     public validationMessage: any;
     public globalFormValidator: GlobalFormValidator;
     public nestedFormValidator: NestedFormValidator;

     // prettier-ignore

     constructor(private _router: Router) {
          this.formModel = new FormModel();
          this.globalFormValidator = new GlobalFormValidator();
          this.nestedFormValidator = new NestedFormValidator();
     }

     ngOnInit(): void {
          this.createStudentInfo();
          //   this.setFormValue();
     }

     public createStudentInfo() {
          this.studentInfo = new FormGroup({
               firstName: new FormControl('', [Validators.required]),
               lastName: new FormControl('', [Validators.required]),
               age: new FormControl('', [Validators.required]),
               email: new FormControl('', [Validators.required]),
               contact: new FormControl('', [Validators.required]),
               address: new FormControl('', [Validators.required]),

               studentAddress: new FormGroup({
                    pAddress: new FormControl('', [Validators.required]),
                    pinCode: new FormControl('', [Validators.required]),
                    street: new FormControl('', [Validators.required]),
                    distric: new FormControl('', [Validators.required]),
                    state: new FormControl('', [Validators.required]),
                    country: new FormControl('', [Validators.required]),
                    fName: new FormControl('', [Validators.required]),
                    fContact: new FormControl('', [Validators.required]),
                    fOccupoation: new FormControl('', [Validators.required]),
                    fEmail: new FormControl('', [Validators.required]),
                    mName: new FormControl('', [Validators.required]),
                    mContact: new FormControl('', [Validators.required]),
                    mOccupation: new FormControl('', [Validators.required]),
                    mEmail: new FormControl('', [Validators.required])
               }),
               collegeDetails: new FormGroup({
                    collegeName: new FormControl('', [Validators.required]),
                    collegeCampus: new FormControl('', [Validators.required]),
                    collegeArea: new FormControl('', [Validators.required]),
                    principleName: new FormControl('', [Validators.required]),
                    principleEmail: new FormControl('', [Validators.required]),
                    totalClass: new FormControl('', [Validators.required]),
                    totalProfessor: new FormControl('', [Validators.required]),
                    totalLab: new FormControl('', [Validators.required]),
                    labs: new FormGroup({
                         computerLab: new FormControl(''),
                         cheLab: new FormControl(''),
                         phyLab: new FormControl('')
                    })
               }),

               idCard: new FormGroup({
                    sName: new FormControl('', [Validators.required]),
                    course: new FormControl('', [Validators.required]),
                    department: new FormControl('', [Validators.required]),
                    batch: new FormControl('', [Validators.required]),
                    bloodGroup: new FormControl('', [Validators.required]),
                    pContact: new FormControl('', [Validators.required]),
                    idAddress: new FormControl('', [Validators.required]),
                    hallTicket: new FormControl('', [Validators.required])
               })
          });

          this.loadFormProperty('studentInfo');
     }
     //      ----------------------
     public setFormValue() {
          this.studentInfo.get('firstName').setValue('Chamcham ');
          this.studentInfo.get('lastName').setValue('Roy');
          this.studentInfo.get('age').setValue('22 Year');
          this.studentInfo.get('email').setValue('roychamcham@gmail.com');
          this.studentInfo.get('contact').setValue('8789411945');
          this.studentInfo.get('address').setValue('Begusarai,BIHAR,851101');

          let SD = this.studentInfo.get('studentAddress');

          SD.get('pAddress').setValue('Teghra,Begusarai,BIHAR');
          SD.get('pincode').setValue('851101');
          SD.get('street').setValue('Near mahavir temple Teghra,Begusarai');
          SD.get('distric').setValue('Begusarai');
          SD.get('state').setValue('BIHAR');
          SD.get('country').setValue('INDIA');
          SD.get('fName').setValue('Sanjeet Roy');
          SD.get('fContact').setValue('9002154578');
          SD.get('fOccupoation').setValue('Teacher');
          SD.get('fEmail').setValue('sanjeet.roy@gmail.com');
          SD.get('mName').setValue('Sunita Devi');
          SD.get('mContact').setValue('8548792012');
          SD.get('mOccupation').setValue('House wife');
          SD.get('mEmail').setValue('sunita45.io@gmail.com');

          let CD = this.studentInfo.get('collegeDetails');

          CD.get('collegeName').setValue('S.V.C.E.T.Etcherla,SRIKAKULLAM');
          CD.get('collegeCampus').setValue('Dr.Bhim raw ambedkar campus');
          CD.get('collegeArea').setValue('150 acr.');
          CD.get('principleName').setValue('Dr.Ramana');
          CD.get('principleEmail').setValue('principle.svcet@gmail.com');
          CD.get('totalClass').setValue('64');
          CD.get('totalProfessor').setValue('120');
          CD.get('totalLab').setValue('8');

          let LD = this.studentInfo.get('collegeDetails').get('labs');

          LD.get('computerlab').setValue('5');
          LD.get('chelab').setValue('3');
          LD.get('phylab').setValue('5');

          let ID = this.studentInfo.get('idCard');

          ID.get('sName').setValue('CHAMCHAM ROY');
          ID.get('course').setValue('B.Tech');
          ID.get('department').setValue('C.S.E');
          ID.get('batch').setValue('2019-2023');
          ID.get('bloodGroup').setValue('A+');
          ID.get('pContact').setValue('8023568511');
          ID.get('idAddress').setValue('Begusarai,BIHAR');
          ID.get('hallTicket').setValue('19MT1A0556');
     }

     public loadFormProperty(form: string) {
          this.formErrors = this.formModel.formErrors[form];
          this.validationMessage = this.formModel.validationMessage[form];
     }

     //   For root
     public displaySingleFormError(group: FormGroup) {
          this.formErrors = this.globalFormValidator.displaySingleFormError(group, this.formErrors, this.validationMessage);
     }

     //   For root
     public displayAllFormErrors(group: FormGroup) {
          this.formErrors = this.globalFormValidator.displayAllFormErrors(group, this.formErrors, this.validationMessage);
     }

     //   For child (Second layer);
     public displayNestedSingleFormError(group: FormGroup, key: any) {
          this.formErrors = this.nestedFormValidator.displayNestedStudentInfoFormErrors(group, key, this.formErrors, this.validationMessage, true);
     }

     //   For child (Second layer);
     public displayAllNestedSingleFormError(group: FormGroup, key: any) {
          this.formErrors = this.nestedFormValidator.displayNestedStudentInfoFormErrors(group, key, this.formErrors, this.validationMessage, false);
     }

     public submitForm() {
          if (this.studentInfo.valid) {
               console.log(this.studentInfo.value);
          } else {
               this.displayAllFormErrors(this.studentInfo);
               this.displayAllNestedSingleFormError(this.studentInfo, 'studentAddress');
               this.displayAllNestedSingleFormError(this.studentInfo, 'collegeDetails');
               this.displayAllNestedSingleFormError(this.studentInfo, 'idCard');
          }
     }
}
