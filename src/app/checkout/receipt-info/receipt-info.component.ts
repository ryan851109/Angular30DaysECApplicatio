import { ProductsServiceService } from './../../product-section/products.service.service';
import { SendType } from './send-type';
import { Component, OnInit } from '@angular/core';
import { appPath } from 'src/app/app-path.const';

@Component({
  selector: 'app-receipt-info',
  templateUrl: './receipt-info.component.html',
  styleUrls: ['./receipt-info.component.css']
})
export class ReceiptInfoComponent implements OnInit {

  constructor(private productsServiceService:ProductsServiceService) { }

  path = appPath;
  sendType = SendType;
  selectedType = SendType.EMAIL;

  ngOnInit(): void {
  }

  switch(type: number): void {
    this.selectedType = type;
  }

  didSelected(type: number): boolean {
    return this.selectedType === type;
  }

  checkout(): void {
    this.productsServiceService.checkout();
  }

}
