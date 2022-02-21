import { productType } from './../app-product-type.const';
import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from './products.service.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.css']
})
export class ProductSectionComponent implements OnInit {

  constructor(
    private router: Router,
    private productsServiceService: ProductsServiceService) { }

  types = productType;
  sub: Subscription = new Subscription();

  ngOnInit(): void {
    this.setType(this.router.url.split('/')[2] || 'all');
  }

  getProductAccount(type: string): number{
    return this.productsServiceService.getProductAccount(type);
  }

  checkType(type: string): boolean {
    return this.productsServiceService.type === type;
  }

  setType(type: string) : void {
    this.productsServiceService.setType(type);
    this.productsServiceService.setProducts();
  }
}
