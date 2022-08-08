import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './feature-module/home-page/home-page.component';
import { ProductDescriptionComponent } from './feature-module/product-description/product-description.component';
import { ProductsListComponent } from './feature-module/products-list/products-list.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'list', children: [
      { path: '', component: ProductsListComponent },
      { path: ':productId', component: ProductDescriptionComponent }]
  },
  { path: '**', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
