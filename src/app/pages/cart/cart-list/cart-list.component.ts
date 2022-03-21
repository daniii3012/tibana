import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items/items.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

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

}
