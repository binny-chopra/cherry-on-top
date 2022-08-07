import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './feature-module/home-page/home-page.component';
import { ProductsListComponent } from './feature-module/products-list/products-list.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'list', component: ProductsListComponent },
  { path: '**', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
