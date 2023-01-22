import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BroadcastService } from './shared/services/broadcast.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
     declarations: [AppComponent, SignupComponent, NoPageFoundComponent, LoginComponent],
     imports: [BrowserModule, AppRoutingModule, RouterModule, ReactiveFormsModule, HttpClientModule],
     providers: [BroadcastService],
     bootstrap: [AppComponent]
})
export class AppModule {}
