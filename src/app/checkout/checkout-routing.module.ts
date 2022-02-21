import { ReceiptInfoComponent } from './receipt-info/receipt-info.component';
import { PaymentInfoComponent } from './payment-info/payment-info.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { appPath } from './../app-path.const';
import { CheckoutComponent } from './checkout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CheckoutComponent,
    children : [
      {
        path: '',
        redirectTo: appPath.chekcoutFlow.customerInfo,
        pathMatch: 'full'
      },
      {
        path: appPath.chekcoutFlow.customerInfo,
        component: CustomerInfoComponent
      },
      {
        path: appPath.chekcoutFlow.paymentInfo,
        component: PaymentInfoComponent
      },
      {
        path: appPath.chekcoutFlow.receiptInfo,
        component: ReceiptInfoComponent
      },
      {
        path: '**',
        redirectTo: appPath.chekcoutFlow.customerInfo,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
