import { ProductsServiceService } from './../../product-section/products.service.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  constructor(private productsServiceService: ProductsServiceService) { }

  @Input() item:any;

  ngOnInit(): void {
  }

  modifyAccount(account: any): void {
    this.productsServiceService.modifyAccount(this.item, account);
  }

  removeProduct(product : any): void {
    this.productsServiceService.removeProduct(product);
  }

}
