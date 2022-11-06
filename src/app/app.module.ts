import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { AppRoutingModule } from './app-routing.module';
import { UserListComponent } from './user/user-list/user-list.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
//ng add @fortawesome/angular-fontawesome@0.11 to add font package


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductListComponent,
    UserListComponent,
    OrderListComponent,
    UserDetailComponent,
    OrderDetailComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
