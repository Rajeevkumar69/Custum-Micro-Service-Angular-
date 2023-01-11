import { Component, OnInit } from '@angular/core';

@Component({
     selector: 'app-to-do-data',
     templateUrl: './to-do-data.component.html',
     styleUrls: ['./to-do-data.component.scss']
})
export class ToDoDataComponent implements OnInit {
     public taskDetails: any = {};
     ngOnInit(): void {
          this.getTaskDetails();
     }

     public getTaskDetails() {
          let task: any = localStorage.getItem('taskData');
          this.taskDetails = JSON.parse(task);
          console.log(this.taskDetails);
     }
}
