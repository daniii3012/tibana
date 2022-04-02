import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items/items.service';
import { OrdersService } from 'src/app/services/orders/orders.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  productsToggle: boolean = false;
  ordersToggle: boolean = false;

  name: string = "";
  img: string = "";
  price: number = 0;
  stock: number = 0;

  licores: any;
  ordenes: any;

  constructor(
    private itemsService: ItemsService,
    private ordersService: OrdersService
  ) { }

  ngOnInit(): void {
    this.getLicores();
    this.getOrdenes();
  }

  getLicores() {
    this.itemsService.getLicores().subscribe(
      data => {
        this.licores = data;
      }
    );
  }

  getOrdenes() {
    this.ordersService.getOrdenes().subscribe(
      data => {
        this.ordenes = data;
      }
    );
  }

  show_products() {
    this.productsToggle = true;
    this.ordersToggle = false;
  }

  show_orders() {
    this.productsToggle = false;
    this.ordersToggle = true;
  }

  reset() {
    this.name = "";
    this.img = "";
    this.price = 0;
    this.stock = 0;
  }

}
