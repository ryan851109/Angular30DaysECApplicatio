import { RouteReuseStrategy } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleReuseStrategy } from './simple-reuse-strategy';
import { OrderItemComponent } from './shared/order-item/order-item.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // {
    //   provide: RouteReuseStrategy,
    //   useClass: SimpleReuseStrategy
    // }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
