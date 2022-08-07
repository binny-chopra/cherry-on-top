import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IProductDetailsList } from '../interfaces/iproduct-details';
import { ApplicationConstants } from '../constants/ApplicationConstants';

@Injectable({
  providedIn: 'root'
})
export class ListOfProductsService {
  public productDetailsData: IProductDetailsList | undefined;

  constructor(private http: HttpClient) { }
  public productsListData() {
    return this.http.get<IProductDetailsList>(ApplicationConstants.CART_URL + ApplicationConstants.LIST);
  }
}
