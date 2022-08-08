import { Component, OnInit } from '@angular/core';
import { IProductDetails, IProductDetailsList } from 'src/app/interfaces/iproduct-details';
import { ListOfProductsService } from '../../service/list-of-products.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductDescriptionComponent } from '../product-description/product-description.component';
import { DataStoreService } from 'src/app/utils/data-store.service';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  public productDetailsList: Array<IProductDetails> = [];
  public searchText: string = "";

  constructor(public listOfProductsService: ListOfProductsService,
    public dialog: MatDialog,
    public dataStore: DataStoreService) {
  }

  ngOnInit(): void {
    this.listOfProductsService.productsListData().subscribe((item: IProductDetailsList) => {
      this.productDetailsList = item.products;
    });
  }

  public showProductDescription(productId: string): void {
    this.listOfProductsService.productsDescriptionData(productId).subscribe((item: IProductDetails) => {
      this.dataStore.productDescriptionFn = item;
      if (window.innerWidth > 1024) {
        const dialogRef = this.dialog.open(ProductDescriptionComponent);
        dialogRef.afterClosed().subscribe(() => { });
      } else {
        window.open(`http://localhost:4200/list/${productId}`)
      }
    });
  }
}
