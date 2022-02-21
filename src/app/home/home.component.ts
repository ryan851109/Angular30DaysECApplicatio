import { Component, OnInit } from '@angular/core';
import { productType } from '../app-product-type.const';
import { ProductsServiceService } from '../product-section/products.service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private productsServiceService: ProductsServiceService) { }

  products:Object[] = [];
  types = productType;

  ngOnInit(): void {
    this.productsServiceService.setType(this.types[1].type);
    this.productsServiceService.setProducts();
    this.products = this.productsServiceService.filterProducts.slice(0, 3);
  }

  setType(type: string): void {
    this.productsServiceService.setType(type);
    this.productsServiceService.setProducts();
    this.products = this.productsServiceService.filterProducts.slice(0, 3);
  }

  checkType(type: string): boolean {
    return this.productsServiceService.type === type;
  }

}
