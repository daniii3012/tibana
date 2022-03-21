import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/user/login/login.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { CartListComponent } from './pages/cart/cart-list/cart-list.component';
import { CartPaymentComponent } from './pages/cart/cart-payment/cart-payment.component';
import { TransactionCompleteComponent } from './pages/cart/transaction-complete/transaction-complete.component';
import { ItemListComponent } from './components/home/item-list/item-list.component';
import { ItemSliderComponent } from './components/home/item-slider/item-slider.component';
import { ItemCategoriesComponent } from './components/home/item-categories/item-categories.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CartListComponent,
    CartPaymentComponent,
    TransactionCompleteComponent,
    ItemListComponent,
    ItemSliderComponent,
    ItemCategoriesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
