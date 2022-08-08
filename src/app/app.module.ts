import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsListComponent } from './feature-module/products-list/products-list.component';
import { HomePageComponent } from './feature-module/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { FilterBoxPipe } from './pipes/filter-box.pipe';
import { FormsModule } from '@angular/forms';
import { ProductDescriptionComponent } from './feature-module/product-description/product-description.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    HomePageComponent,
    FilterBoxPipe,
    ProductDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  exports: [MatDialogModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
