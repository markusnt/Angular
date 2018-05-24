import { NgModule, Component, enableProdMode } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './../products/products.component';

const routes: Routes = [

  { path: '', component: ProductsComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }
