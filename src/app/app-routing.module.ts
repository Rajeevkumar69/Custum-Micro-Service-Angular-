import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
     { path: 'login', component: LoginComponent },
     { path: 'signup', component: SignupComponent },
     {
          path: '',
          loadChildren: () => import('./views/layouts/layouts.module').then((m) => m.LayoutsModule)
     },
     { path: '**', component: NoPageFoundComponent }
];

@NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]
})
export class AppRoutingModule {}
