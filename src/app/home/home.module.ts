import { ProductItemModule } from './../shared/product-item/product-item.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    ProductItemModule,
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
