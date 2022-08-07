import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './feature-module/products-list/products-list.component';
import { HomePageComponent } from './feature-module/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { AllProductsComponent } from './feature-module/all-products/all-products.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    HomePageComponent,
    AllProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
