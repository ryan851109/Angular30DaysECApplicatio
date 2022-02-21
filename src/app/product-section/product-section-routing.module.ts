import { ProductListComponent } from './product-list/product-list.component';
import { ProductSectionComponent } from './product-section.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProductSectionComponent,
    children: [
      {
        path: ':type',
        component: ProductListComponent
      },
      {
        path: '',
        redirectTo: 'all',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductSectionRoutingModule { }
