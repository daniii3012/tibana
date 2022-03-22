import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items/items.service';

@Component({
  selector: 'app-cart-payment',
  templateUrl: './cart-payment.component.html',
  styleUrls: ['./cart-payment.component.css']
})
export class CartPaymentComponent implements OnInit {

  personalInfoToggle = true;
  shippingAddressToggle = false;
  paymentInfoToggle = false;
  canPayToggle = false;

  licores: any;

  constructor(
    private itemsService: ItemsService
  ) { }

  ngOnInit(): void {
    this.getLicores();
  }

  getLicores() {
    this.itemsService.getLicores().subscribe(
      data => {
        this.licores = data;
        console.log(this.licores);
      }
    );
    
  }

  original_state() {
    this.personalInfoToggle = true;
    this.shippingAddressToggle = false;
    this.paymentInfoToggle = false;
    this.canPayToggle = false;
  }

  personal_info() {
    this.personalInfoToggle = false;
    this.shippingAddressToggle = true;
    this.paymentInfoToggle = false;
    this.canPayToggle = false;
  }

  shipping_address() {
    this.personalInfoToggle = false;
    this.shippingAddressToggle = false;
    this.paymentInfoToggle = true;
    this.canPayToggle = false;
  }

  payment_info() {
    this.personalInfoToggle = false;
    this.shippingAddressToggle = false;
    this.paymentInfoToggle = false;
    this.canPayToggle = true;
  }

}
