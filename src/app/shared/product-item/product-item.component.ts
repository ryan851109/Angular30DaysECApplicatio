import { ProductsServiceService } from './../../product-section/products.service.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  constructor(private productsServiceService: ProductsServiceService) { }

  @Input() item: any;

  ngOnInit(): void {
  }

  addProductToOrder(product: any): void {
    if(this.productsServiceService.addProductToOrder(product)){
      alert("add success");
    }
    else{
      alert("add fail");
    }
  }

}
