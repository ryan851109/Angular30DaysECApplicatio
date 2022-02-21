import { ProductsServiceService } from './../product-section/products.service.service';
import { Component, OnInit } from '@angular/core';
import { appPath } from '../app-path.const';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private productsServiceService: ProductsServiceService) { }

  path = appPath;
  orders:Object[] = [];

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
