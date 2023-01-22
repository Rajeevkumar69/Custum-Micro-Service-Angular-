import { Component, OnInit } from '@angular/core';
import { PathConfig } from 'src/app/shared/interfaces/global-Interface';

@Component({
     selector: 'app-sidebar',
     templateUrl: './sidebar.component.html',
     styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
     public sidebarPathInformations: PathConfig[] = [
          {
               name: 'Home',
               icon: 'fas fa-home',
               path: 'home'
          },
          {
               name: 'Calculator',
               icon: 'fas fa-calculator',
               path: 'cms-calculator'
          },
          {
               name: 'AboutUs',
               icon: 'fas fa-user-alt',
               path: 'about'
          },
          {
               name: 'Lucky Message',
               icon: 'fas fa-dice-d6',
               path: 'lucky-message-generator'
          },
          {
               name: 'CMS Business',
               icon: 'fas fa-business-time',
               path: 'cms-products'
          },
          {
               name: 'Add Products',
               icon: 'fas fa-cart-plus',
               path: 'add-products'
          },
          {
               name: 'Space Calculator',
               icon: 'fab fa-squarespace',
               path: 'space-calculator'
          },
          {
               name: 'To-do Application',
               icon: 'fas fa-tasks',
               path: 'to-do-app'
          },
          {
               name: 'CMS Counter Application',
               icon: 'fas fa-infinity',
               path: 'counter-app'
          },
          {
               name: 'CMS User Data',
               icon: 'fas fa-database',
               path: 'user-data'
          },
          {
               name: 'CMS Nested Form',
               icon: 'fas fa-folder-open',
               path: 'nested-form'
          },
          {
               name: 'CMS API DATA',
               icon: 'fab fa-internet-explorer',
               path: 'first-component'
          },
          {
               name: 'CMS API DATABASE-2',
               icon: 'fab fa-quinscape',
               path: 'second-component'
          },
          {
               name: 'School Registration Form',
               icon: 'fas fa-school',
               path: 'registration-form'
          }
     ];
     ngOnInit(): void {}
}
