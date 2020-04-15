import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  isVisible: boolean = true;

  product_list: any[] = [
    { id: 1, name : 'Kids Moon Colorblock Footed Tights', price : 8.99 },
    { id: 2, name : 'product 2', price : 8.99 },
    { id: 3, name : 'product 3', price : 8.99 },
    { id: 4, name : 'product 4', price : 8.99 },
    { id: 5, name : 'product 5', price : 8.99 },
    { id: 6, name : 'product 6', price : 8.99 },
    { id: 7, name : 'product 7', price : 8.99 },
    { id: 8, name : 'product 8', price : 8.99 },
    { id: 9, name : 'product 9', price : 8.99 },
    { id: 10, name: 'product 10', price : 8.99 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
