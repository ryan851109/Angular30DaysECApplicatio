import { NumberFormatStyle } from '@angular/common';
import { Injectable } from '@angular/core';
import { productType } from '../app-product-type.const';
import { productsConst } from '../app-products.const';
import { fakeData } from '../fakeData';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor() { }

  orders:any[] = [];
  stores = fakeData;
  products = productsConst;
  types = productType;
  type = this.types[0].type;
  test: number=0;
  filterProducts:Object[] = [];
  totalPrice: number = 0;
  freight: number = 300;

  setProducts(): void {
    if(this.type === 'all'){
      this.filterProducts = this.products;
    }
    else{
      this.filterProducts = this.products.filter(product => product.type === this.type);
    }
  }

  getProductAccount(type: string): number {
    if(type === 'all'){
      return this.products.length;
    }
    else{
      return this.products.filter(product => product.type === type).length;
    }
  }

  setType(type: string): void {
    this.type = type;
  }

  addProductToOrder(product: any): boolean {
    if(this.orders.find(order => order.name === product.name)){
      return false;
    }
    console.log(this.products);
    this.orders.push(Object.assign({}, product));
    this.setTotalPrice();
    return true;
  }

  modifyAccount(product:any, account:number): void {
    let target = this.stores.find(store => store.name === product.name);
    if(!product.account){
      product.account = 1;
    }
    if(target && target.account >= product.account + account && product.account + account >= 0){
      product.account += account;
      this.setTotalPrice();
    }
  }

  removeProduct(product: any): void {
    this.orders.splice(this.orders.findIndex(order => order.name === product.name), 1);
    this.setTotalPrice();
  }

  setTotalPrice(): void {
    this.totalPrice = 0;
    this.orders.forEach(order => this.totalPrice += (order.price * (order.account || 1)));
  }
}
