import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { productType } from 'src/app/app-product-type.const';
import { ProductsServiceService } from '../products.service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private productsServiceService: ProductsServiceService) { }

  index:number = 0;
  filterProducts:Object[] = [];
  types = productType;
  sub: Subscription = new Subscription();

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe(
      param => {
        this.productsServiceService.type = param.get('type') || 'all';
        this.index = 0;
        this.productsServiceService.setProducts();
        this.sliceProducts();
      });
  }

  private sliceProducts(): void {
    this.filterProducts = this.productsServiceService.filterProducts.slice(this.index * 5, (this.index + 1) * 5);
  }

  setIndex(index: number): void {
    if(index >= 0 && index < this.productsServiceService.filterProducts.length / 5){
      this.index = index;
    }
    this.sliceProducts();
  }

}
