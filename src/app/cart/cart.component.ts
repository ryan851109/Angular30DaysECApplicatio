import { ProductsServiceService } from './../product-section/products.service.service';
import { appPath } from './../app-path.const';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private productsServiceService: ProductsServiceService) { }

  path = appPath;
  orders:any[] = [];

  ngOnInit(): void {
    this.orders = this.productsServiceService.orders;
  }

  getTotalPrice(): number {
    return this.productsServiceService.totalPrice;
  }

  getFreight(): number {
    return this.productsServiceService.freight;
  }
}
