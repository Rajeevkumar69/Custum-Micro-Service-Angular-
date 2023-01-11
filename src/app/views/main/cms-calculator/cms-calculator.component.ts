import { Component } from '@angular/core';

@Component({
     selector: 'app-cms-calculator',
     templateUrl: './cms-calculator.component.html',
     styleUrls: ['./cms-calculator.component.scss']
})
export class CmsCalculatorComponent {
     public firstNumber: number = 0;
     public secondNumber: number = 0;

     public result: number = 0;
     public cmsCalculator(type: string) {
          if (type == 'add') {
               this.result = this.firstNumber + this.secondNumber;
          } else if (type == 'subtract') {
               this.result = this.firstNumber - this.secondNumber;
          } else if (type == 'multiply') {
               this.result = this.firstNumber * this.secondNumber;
          } else if (type == 'Divide') {
               this.result = this.firstNumber / this.secondNumber;
          } else {
               document.write('Select valid Operation');
          }
     }
}
