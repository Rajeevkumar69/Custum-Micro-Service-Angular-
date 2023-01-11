import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as uuid from 'uuid';
import { DummyTask } from 'src/app/shared/constants/dummy-tasks';

@Component({
     selector: 'app-to-do-app',
     templateUrl: './to-do-app.component.html',
     styleUrls: ['./to-do-app.component.scss']
})

// prettier-ignore
export class ToDoAppComponent implements OnInit {
     public LocalDate: string = new Date().toLocaleString();
     public date: any = new Date(Date.now());
     public taskForm: any = FormGroup;
     public taskList: any[] = [];
     public dummyTask: DummyTask;
     public isVisibleForm: boolean = false;

     ngOnInit(): void {
          this.dummyTask = new DummyTask();
     }

     constructor(private _router: Router) {
          this.createTaskForm();
     }
     public showTask(item: string) {
          this.taskList.push({ id: this.taskList.length, name: item });
     }
     public removeTask(id: any) {
          this.taskList = this.taskList.filter((item) => item.id !== id);
     }

     createTaskForm() {
          this.taskForm = new FormGroup({
               taskId: new FormControl(''),
               taskTitle: new FormControl('', [Validators.required]),
               taskDescription: new FormControl('', [Validators.required]),
               isNew: new FormControl(''),
               isCompleted: new FormControl(''),
               createdAt: new FormControl(''),
               taskValidity: new FormControl('', [Validators.required]),
               taskCompletedTime: new FormControl('')
          });
     }

     public addTask() {
          if (this.taskForm.valid) {
               const newTaskId = uuid.v4();
               let parsedDetails = JSON.stringify(this.taskForm.value);
               localStorage.setItem('taskData', parsedDetails);
               //        this._router.navigate('to-do-data');
          } else {
               window.alert('Form is not valid.');
          }
     }
     get task() {
          return this.taskForm.get('task');
     }

     public toggleForm() {
          this.isVisibleForm = !this.isVisibleForm;
     }
     get taskTitle() {
          return this.taskForm.get('taskTitle');
     }
     get taskDescription() {
          return this.taskForm.get('taskDescription');
     }
     get taskValidity() {
          return this.taskForm.get('taskValidity');
     }
}
