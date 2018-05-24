import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  selectedProduct = Product;

  constructor(private productService: ProductService) { }

  onSelectProduct(product) {
    this.selectedProduct = product;
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().then(res => {
      this.products = res;
    })
    .catch(erro => console.log(erro));
    }

    deleteProduct(id: number) {
            this.productService.deleteProduct(id).then(res => {
              console.log('deu bom');
            }).catch(() => {
              console.log('deu ruim');
           });
        }
  /*
  getProducts(): void {
    const product = this.productService.getProducts()
      .subscribe(products => this.getProducts = product);
  }*/
}
