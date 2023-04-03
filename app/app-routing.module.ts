import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewplansComponent } from './viewplans/viewplans.component';
import { BroadbandComponent } from './broadband/broadband.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { PaymentComponent } from './payment/payment.component';
import { RechargeComponent } from './recharge/recharge.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path: "viewplans", component:  ViewplansComponent},
  {path:"broadband",component: BroadbandComponent},
  {path:'login', component: LoginComponent},
  {path:"register", component: RegisterComponent},
  {path:"profile", component: ProfileComponent},
  {path:"payment",component:PaymentComponent},
  {path:"recharge",component:RechargeComponent},
  {path:"transaction",component:TransactionComponent},
  {path:'', redirectTo:'home',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
