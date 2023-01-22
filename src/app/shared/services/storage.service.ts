import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
     providedIn: 'root'
})
export class StorageService {
     private seckey: string = 'OMPANDEY@ABC9BA';
     //  Why this is private

     public setUserInformation(value: any): void {
          this.set('USER_INFORMATION', JSON.stringify(value));
     }

     public getUserInformation(): any {
          let response = this.get('USER_INFORMATION');
          if (response) {
               return JSON.parse(response);
          } else {
               return null;
          }
     }

     public setFormMode(val: string): void {
          this.set('FORM_MODE', JSON.stringify(val));
     }

     public getFormMOde() {
          let response = this.get('FORM_MODE');
          if (response) {
               return JSON.parse(response);
          } else {
               return null;
          }
     }

     public setEditableUser(val: string) {
          this.set('EDITABLE_USER', JSON.stringify(val));
     }

     public getEditableUser() {
          let response = this.get('EDITABLE_USER');
          if (response) {
               return JSON.parse(response);
          } else {
               return null;
          }
     }

     public removeItem(key: string) {
          localStorage.removeItem(key);
     }

     // ------------------------------------------------------------------

     private set(key: string, value: any): boolean {
          if (localStorage.getItem(key)) {
               localStorage.removeItem(key);
               localStorage.setItem(key, this.encrypt(value));
          } else {
               localStorage.setItem(key, this.encrypt(value));
          }
          return true;
     }

     private get(key: string): string {
          if (localStorage.getItem(key)) {
               return this.decrypt(localStorage.getItem(key));
          } else {
               return '';
          }
     }

     private encrypt(value: string): string {
          return CryptoJS.AES.encrypt(value, this.seckey.trim()).toString();
     }

     private decrypt(text: string) {
          return CryptoJS.AES.decrypt(text, this.seckey.trim()).toString(CryptoJS.enc.Utf8);
     }

     public clearAll() {
          localStorage.clear();
          sessionStorage.clear();
     }
}
