import { Component, OnInit } from '@angular/core';

@Component({
     selector: 'app-counter-app',
     templateUrl: './counter-app.component.html',
     styleUrls: ['./counter-app.component.scss']
})
export class CounterAppComponent implements OnInit {
     public CountNumber: number = 0;
     constructor() {}

     ngOnInit(): void {}
     public resetBtn() {
          this.CountNumber = 0;
     }
     public increaseBtn() {
          this.CountNumber = this.CountNumber + 1;
     }
     public decreaseBtn() {
          this.CountNumber = this.CountNumber - 1;
          if (this.CountNumber < 0) {
               this.CountNumber = 0;
          }
     }
}
