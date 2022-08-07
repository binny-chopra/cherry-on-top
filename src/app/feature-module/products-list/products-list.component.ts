import { Component, OnInit } from '@angular/core';
import { IProductDetails, IProductDetailsList } from 'src/app/interfaces/iproduct-details';
import { ListOfProductsService } from '../../service/list-of-products.service';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  public productDetailsList: Array<IProductDetails> = [];

  constructor(public listOfProductsService: ListOfProductsService) { }

  ngOnInit(): void {
    this.listOfProductsService.productsListData().subscribe((item: IProductDetailsList) => {
      this.productDetailsList = item.products;
    });
  }

  public showProductDescription(event: string): void {
    console.log(event);
  }
}
