import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { CartItemModule } from '../shared/cart-item/cart-item.module';


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CartItemModule,
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
