import { appPath } from './app-path.const';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: appPath.home,
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: appPath.products,
    loadChildren: () => import('./product-section/product-section.module').then(m => m.ProductSectionModule)
  },
  {
    path: appPath.login,
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: appPath.cart,
    loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)
  },
  {
    path: appPath.checkout,
    loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule)
  },
  {
    path: appPath.success,
    loadChildren: () => import('./success/success.module').then(m => m.SuccessModule)
  },
  {
    path: '**',
    redirectTo: appPath.home,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    //enableTracing: true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
