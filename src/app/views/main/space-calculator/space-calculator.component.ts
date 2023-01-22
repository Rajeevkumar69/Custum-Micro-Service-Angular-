import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CalculatorConfiguration } from '../../shared/calculator-configuration/calculator-configuration.component';
import * as $ from 'jquery';

@Component({
     selector: 'app-space-calculator',
     templateUrl: './space-calculator.component.html',
     styleUrls: ['./space-calculator.component.scss']
})
export class SpaceCalculatorComponent implements OnInit {
     @ViewChild('customSelectCard') customSelectCard: ElementRef;
     @ViewChild('customSelectButton') customSelectButton: ElementRef;

     public configuration: CalculatorConfiguration;
     public newSpaceForm: FormGroup;
     public numberOfEmployees: number = 0;
     public spacePerEmployee: number = 150;
     public isSpaceCalculated: boolean = false;
     public totalCalculatedSpaceValue: number = 0;
     public isCustomOtherSpaceSelected: boolean = false;

     // prettier-ignore
     constructor(
          private _elemRef: ElementRef,
     ) 
     {
          this.configuration = new CalculatorConfiguration();
     }

     ngOnInit(): void {
          this.createNewSpaceForm();
          this.addSpaceInVisibleList();
     }

     public addSpaceInVisibleList() {
          for (let index = 0; index < 3; index++) {
               const element = this.configuration.scHideSpaces[index];
               this.configuration.scVisibleSpaces.push(element);
               this.configuration.scHideSpaces.splice(index, 1);
          }
     }

     public createNewSpaceForm() {
          this.newSpaceForm = new FormGroup({
               spaceName: new FormControl('', [Validators.required]),
               spaceSize: new FormControl(200, [Validators.required]),
               noOfUnits: new FormControl(5, [Validators.required])
          });
     }

     public showAddSpaceOption() {
          let element = $(this._elemRef.nativeElement).find('#custom-select-option');
          element.css('display', 'inline');
     }

     public hideAddSpaceOption() {
          let element = $(this._elemRef.nativeElement).find('#custom-select-option');
          element.css('display', 'none');
     }

     public addSpace(spaceId: any) {
          this.configuration.scHideSpaces.forEach((space: any, index: any) => {
               if (space.spaceId === spaceId) {
                    this.configuration.scVisibleSpaces.push(space);
                    this.configuration.scHideSpaces.splice(index, 1);
               }
          });
     }

     public removeSpace(spaceId: any) {
          this.configuration.scVisibleSpaces.forEach((space: any, index: any) => {
               if (space.spaceId === spaceId) {
                    this.configuration.scHideSpaces.push(space);
                    this.configuration.scVisibleSpaces.splice(index, 1);
               }
          });
     }

     public increaseSpace(spaceId: any) {
          this.configuration.scVisibleSpaces.forEach((space: any, index: any) => {
               if (space.spaceId === spaceId) {
                    space.noOfUnits = space.noOfUnits + 1;
               }
          });
     }

     public decreaseSpace(spaceId: any) {
          this.configuration.scVisibleSpaces.forEach((space: any, index: any) => {
               if (space.spaceId === spaceId) {
                    if (space.noOfUnits > 0) {
                         space.noOfUnits = space.noOfUnits - 1;
                    }
               }
          });
     }

     @HostListener('document:click', ['$event'])
     onPostDocumentClick(event: MouseEvent) {
          try {
               let a = this.customSelectCard.nativeElement.contains(event.target);
               let b = this.customSelectButton.nativeElement.contains(event.target);
               if (a || b) {
               } else {
                    this.hideAddSpaceOption();
               }
          } catch (error) {}
     }

     public getCurrentWorkSpace() {
          let totalWorkSpace = this.numberOfEmployees * this.spacePerEmployee;
          return totalWorkSpace;
     }

     public getSpaceValue(spaceId: any) {
          let spaceIndex = null;
          this.configuration.scVisibleSpaces.forEach((space: any, index: any) => {
               if (space.spaceId === spaceId) {
                    spaceIndex = index;
               }
          });
          let currentSpace = this.configuration.scVisibleSpaces[spaceIndex];
          let actualValue = currentSpace.noOfUnits * currentSpace.spaceSize;
          return actualValue;
     }

     public getTotalCalculatedSpaceValue() {
          this.totalCalculatedSpaceValue = 0;
          this.configuration.scVisibleSpaces.forEach((space: any, index: any) => {
               let actualValue = space.noOfUnits * space.spaceSize;
               this.totalCalculatedSpaceValue = this.totalCalculatedSpaceValue + actualValue;
          });

          return this.totalCalculatedSpaceValue + this.getCurrentWorkSpace();
     }

     public viewSpace(status: boolean) {
          if (status) {
               this.isSpaceCalculated = true;
          } else {
               this.isSpaceCalculated = false;
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
     }

     public getNewSpaceId() {
          let id = 0;
          this.configuration.scVisibleSpaces.forEach((space: any) => {
               if (space.spaceId > id) {
                    id = space.spaceId;
               }
          });
          this.configuration.scHideSpaces.forEach((space: any) => {
               if (space.spaceId > id) {
                    id = space.spaceId;
               }
          });
          return id + 1;
     }

     public addCustomSpace() {
          if (this.newSpaceForm.valid) {
               let formValue = this.newSpaceForm.value;
               document.getElementById('close-modal-button').click();
               let newId = this.getNewSpaceId();
               let newSpaceObject = {
                    spaceId: newId,
                    name: formValue.spaceName,
                    noOfUnits: formValue.noOfUnits,
                    spaceSize: formValue.spaceSize
               };
               this.configuration.scVisibleSpaces.push(newSpaceObject);
               this.newSpaceForm.reset();
          }
     }
}
