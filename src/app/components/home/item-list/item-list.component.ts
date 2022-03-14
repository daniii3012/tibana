import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items/items.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

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
