import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutServiceService {

  name:string = '';
  familyName:string = '';
  phone:string = '';
  city:string = '';
  country:string = '';
  address:string = '';

  constructor() { }

  checkIsEmpty(): boolean {
    if(this.name.trim() || this.familyName.trim() || this.phone.trim() || this.city.trim() || this.country.trim() || this.address.trim()){
      return false;
    }
    return true;
  }
}
