import { Injectable } from '@angular/core';
import { IProductDetails } from '../interfaces/iproduct-details';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  private productDescription!: IProductDetails;
  constructor() { }

  public get productDescriptionFn(): IProductDetails {
    return this.productDescription;
  }

  public set productDescriptionFn(value: IProductDetails) {
    this.productDescription = value;
  }
}
