import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterbarComponent } from './footerbar/footerbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// prettier-ignore
@NgModule({
     declarations: [
          FooterbarComponent, 
          NavbarComponent, 
          SidebarComponent
     ],
     imports: [
          CommonModule, 
          FormsModule, 
          RouterModule
     ],
     // when we need to use same components multiple time than we need to export all components
     exports: [
          FooterbarComponent, 
          NavbarComponent, 
          SidebarComponent
     ]
})
export class PartialsModule {}
