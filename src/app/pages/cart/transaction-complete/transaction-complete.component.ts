import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders/orders.service';

@Component({
  selector: 'app-transaction-complete',
  templateUrl: './transaction-complete.component.html',
  styleUrls: ['./transaction-complete.component.css']
})
export class TransactionCompleteComponent implements OnInit {

  ordersToggle: boolean = false;

  ordenes: any;

  constructor(
    private ordersService: OrdersService
  ) { }

  ngOnInit(): void {
    this.getOrdenes();
  }

  // Esto es un machetazo :v      Carga la ultima orden del json y la muestra como el pedido que se acaba de realizar

  getOrdenes() {
    this.ordersService.getOrdenes().subscribe(
      data => {
        this.ordenes = data;
      }
    );
  }

  show_order() {
    this.ordersToggle = true;
  }

}
