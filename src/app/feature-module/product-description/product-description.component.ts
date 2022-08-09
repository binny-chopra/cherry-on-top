import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProductDetails } from 'src/app/interfaces/iproduct-details';
import { DataStoreService } from 'src/app/utils/data-store.service';
import { ActivatedRoute } from '@angular/router';
import { ListOfProductsService } from 'src/app/service/list-of-products.service';

@Component({
  selector: 'product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit, OnDestroy {
  public productId!: string;
  public productDetails!: IProductDetails;
  private openDilog: boolean = true;
  private idSubscription!: Subscription;

  constructor(public dataStore: DataStoreService,
    public route: ActivatedRoute,
    public listOfProductsService: ListOfProductsService) { }

  ngOnInit(): void {
    this.productDetails = this.dataStore.productDescriptionFn;
    this.idSubscription = this.route.params.subscribe((params: any) => {
      this.productId = params.productId;
      if (params.productId) {
        this.listOfProductsService.productsDescriptionData(this.productId).subscribe((item: IProductDetails) => {
          this.openDilog = false;
          this.productDetails = item;
        });
      }
    });
  }

  public openDilogFn(): boolean {
    return this.openDilog;
  }

  ngOnDestroy(): void {
    this.idSubscription.unsubscribe();
  }
}
