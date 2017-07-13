import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { LogInComponent } from './log-in/log-in.component';
import { AuthentificationService } from "./authentification.service";
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { LastPageComponent } from './last-page/last-page.component'


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    PaymentPageComponent,
    LastPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot( routes )
  ],
  providers: [AuthentificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
