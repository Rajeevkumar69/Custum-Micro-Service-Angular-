import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
     selector: 'app-nested-form',
     templateUrl: './nested-form.component.html',
     styleUrls: ['./nested-form.component.scss']
})
export class NestedFormComponent implements OnInit {
     constructor(private _router: Router) {}
     public schoolInfo: FormGroup;
     public principleInfo: FormGroup;
     public campusInfo: FormGroup;
     public campusDetails: FormGroup;
     public specificLab: FormGroup;

     ngOnInit(): void {
          this.createSchoolInfoForm();
          this.setFormValue();
     }

     public createSchoolInfoForm() {
          this.schoolInfo = new FormGroup({
               schoolName: new FormControl('', [Validators.required]),
               schoolAddress: new FormControl('', [Validators.required]),

               principleInfo: new FormGroup({
                    principleName: new FormControl('', [Validators.required]),
                    principleAge: new FormControl('', [Validators.required])
               }),
               campusInfo: new FormGroup({
                    campusSize: new FormControl('', [Validators.required]),
                    campusDetails: new FormGroup({
                         NoOfClass: new FormControl('', [Validators.required]),
                         groundSize: new FormControl('', [Validators.required]),
                         parkSize: new FormControl('', [Validators.required]),
                         noOfGirlHostel: new FormControl('', [Validators.required]),
                         noOfBoyHostel: new FormControl('', [Validators.required]),
                         noOfLab: new FormControl('', [Validators.required]),
                         noOfPartyHall: new FormControl('', [Validators.required]),
                         noOfMeetingHall: new FormControl('', [Validators.required]),
                         specificLab: new FormGroup({
                              noOfPhyLab: new FormControl('', [Validators.required]),
                              noOfCheLab: new FormControl('', [Validators.required]),
                              noOfCmpLab: new FormControl('', [Validators.required])
                         })
                    })
               })
          });
     }

     public setFormValue() {
          this.schoolInfo.get('schoolName').setValue('Ganga Global');
          this.schoolInfo.get('principleInfo').get('principleName').setValue('Mr. Aanand Ojha');
          this.schoolInfo.get('principleInfo').get('principleAge').setValue('56 Year');
          this.schoolInfo.get('campusInfo').get('campusSize').setValue('120 acr.');
          this.schoolInfo.get('schoolAddress').setValue('Begusarai,BIHAR,851101');

          let FGCD = this.schoolInfo.get('campusInfo').get('campusDetails');

          FGCD.get('NoOfClass').setValue('35 Rooms');
          FGCD.get('groundSize').setValue('50 acr.');
          FGCD.get('parkSize').setValue('3.5 acr.');
          FGCD.get('noOfGirlHostel').setValue('15 ');
          FGCD.get('noOfBoyHostel').setValue('12');
          FGCD.get('noOfLab').setValue('10');
          FGCD.get('noOfMeetingHall').setValue('8');
          FGCD.get('noOfPartyHall').setValue('4');
          FGCD.get('specificLab').get('noOfPhyLab').setValue('6');
          FGCD.get('specificLab').get('noOfCheLab').setValue('3');
          FGCD.get('specificLab').get('noOfCmpLab').setValue('8');
     }

     public schoolInfoSubmit() {
          if (this.schoolInfo.get('principleInfo').valid) {
               // console.log(this.schoolInfo.value);
          }
     }
}
