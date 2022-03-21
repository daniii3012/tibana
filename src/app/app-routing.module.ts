import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartListComponent } from './pages/cart/cart-list/cart-list.component';
import { LoginComponent } from './pages/user/login/login.component';
import { CartPaymentComponent } from './pages/cart/cart-payment/cart-payment.component';
import { TransactionCompleteComponent } from './pages/cart/transaction-complete/transaction-complete.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartListComponent },
  { path: 'cart/payment', component: CartPaymentComponent },
  { path: 'purchase', component: TransactionCompleteComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
