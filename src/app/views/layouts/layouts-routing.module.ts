import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../main/about/about.component';
import { CmsCalculatorComponent } from '../main/cms-calculator/cms-calculator.component';
import { DashboardComponent } from '../main/dashboard/dashboard.component';
import { HomeComponent } from '../main/home/home.component';
import { LuckyMessageGeneratorComponent } from '../main/lucky-message-generator/lucky-message-generator.component';
import { LayoutsComponent } from './layouts.component';
import { CmsProductsComponent } from '../main/cms-products/cms-products.component';
import { AddProductsComponent } from '../main/add-products/add-products.component';
import { SpaceCalculatorComponent } from '../main/space-calculator/space-calculator.component';
import { ToDoAppComponent } from '../main/to-do-app/to-do-app.component';
import { ToDoDataComponent } from '../main/to-do-app/to-do-data/to-do-data.component';
import { CounterAppComponent } from '../main/counter-app/counter-app.component';

const routes: Routes = [
     {
          path: '',
          component: LayoutsComponent,
          children: [
               {
                    path: '',
                    component: HomeComponent,
                    pathMatch: 'full'
               },
               {
                    path: 'home',
                    component: HomeComponent
               },
               {
                    path: 'about',
                    component: AboutComponent
               },
               {
                    path: 'dashboard',
                    component: DashboardComponent
               },
               {
                    path: 'cms-calculator',
                    component: CmsCalculatorComponent
               },
               {
                    path: 'lucky-message-generator',
                    component: LuckyMessageGeneratorComponent
               },
               {
                    path: 'cms-products',
                    component: CmsProductsComponent
               },
               {
                    path: 'add-products',
                    component: AddProductsComponent
               },
               {
                    path: 'space-calculator',
                    component: SpaceCalculatorComponent
               },
               {
                    path: 'to-do-app',
                    component: ToDoAppComponent,
                    children: [{ path: 'to-do-data', component: ToDoDataComponent }]
               },
               {
                    path: 'counter-app',
                    component: CounterAppComponent
               }
          ]
     }
];

@NgModule({
     imports: [RouterModule.forChild(routes)],
     exports: [RouterModule]
})
export class LayoutsRoutingModule {}
