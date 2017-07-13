import { Routes } from "@angular/router";

import { LogInComponent } from './log-in/log-in.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { LastPageComponent } from './last-page/last-page.component'

export const routes: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "login", component: LogInComponent},
    { path: "payment", component: PaymentPageComponent},
    { path: "lastpage", component: LastPageComponent}
];
