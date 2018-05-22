import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    {
      id: 1,
      name: 'PUBG',
      price: 50
    },
    {
      id: 2,
      name: 'Overwatch',
      price: 100
    }
  ];

  selectedProduct = Product;

  constructor() { }

  onSelectProduct(product) {
    this.selectedProduct = product;
  }

  ngOnInit() {
  }

}
