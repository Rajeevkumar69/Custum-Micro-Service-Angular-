import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { HomeComponent } from '../main/home/home.component';
import { DashboardComponent } from '../main/dashboard/dashboard.component';
import { AboutComponent } from '../main/about/about.component';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CmsCalculatorComponent } from '../main/cms-calculator/cms-calculator.component';
import { LuckyMessageGeneratorComponent } from '../main/lucky-message-generator/lucky-message-generator.component';
import { CmsProductsComponent } from '../main/cms-products/cms-products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductsComponent } from '../main/add-products/add-products.component';
import { SpaceCalculatorComponent } from '../main/space-calculator/space-calculator.component';
import { FooterComponent } from '../main/space-calculator/footer/footer.component';
import { ToDoAppComponent } from '../main/to-do-app/to-do-app.component';
import { ToDoFooterComponent } from '../main/to-do-app/to-do-footer/to-do-footer.component';
import { ToDoDataComponent } from '../main/to-do-app/to-do-data/to-do-data.component';
import { CounterAppComponent } from '../main/counter-app/counter-app.component';
import { PartialsModule } from '../main/partials/partials.module';
import { UserDataComponent } from '../main/user-data/user-data.component';
import { UserDataFormComponent } from '../main/user-data-form/user-data-form.component';
import { NestedFormComponent } from '../main/nested-form/nested-form.component';
import { FirstComponentComponent } from '../main/first-component/first-component.component';
import { SecondComponentComponent } from '../main/second-component/second-component.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationFormComponent } from '../main/registration-form/registration-form.component';

// prettier-ignore
@NgModule({
     declarations: [
          LayoutsComponent,
          HomeComponent,
          DashboardComponent,
          AboutComponent,
          CmsCalculatorComponent,
          LuckyMessageGeneratorComponent,
          CmsProductsComponent,
          AddProductsComponent,
          SpaceCalculatorComponent,
          FooterComponent,
          ToDoAppComponent,
          ToDoFooterComponent,
          ToDoDataComponent,
          CounterAppComponent,
          UserDataComponent,
          UserDataFormComponent,
          NestedFormComponent,
         FirstComponentComponent,
         SecondComponentComponent,
         RegistrationFormComponent

     ],
     imports: [
          CommonModule,
          LayoutsRoutingModule,
          FormsModule,
          RouterModule,
          ReactiveFormsModule,
          PartialsModule,
          HttpClientModule
     ]
})
export class LayoutsModule {}
