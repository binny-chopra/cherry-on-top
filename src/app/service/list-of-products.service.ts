import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IProductDetails, IProductDetailsList } from '../interfaces/iproduct-details';
import { ApplicationConstants } from '../constants/ApplicationConstants';

@Injectable({
  providedIn: 'root'
})
export class ListOfProductsService {

  constructor(private http: HttpClient) { }

  public productsListData() {
    return this.http.get<IProductDetailsList>(ApplicationConstants.CART_URL + ApplicationConstants.LIST);
  }
  public productsDescriptionData(productId: string) {
    return this.http.get<IProductDetails>(`${ApplicationConstants.CART_URL}/${productId}${ApplicationConstants.DETAIL}`);
  }
}
