import { Pipe, PipeTransform } from '@angular/core';
import { IProductDetails } from '../interfaces/iproduct-details';

@Pipe({
  name: 'filterBox'
})
export class FilterBoxPipe implements PipeTransform {
  transform(arrayToFilter: IProductDetails[], searchText: string): IProductDetails[] {
    if (arrayToFilter.length === 0 || searchText === "") {
      return arrayToFilter;
    } else {
      searchText = searchText.toLocaleLowerCase();
      return arrayToFilter.filter((data: IProductDetails) => {
        return JSON.stringify(data['name']).toLowerCase().includes(searchText);
      });
    }
  }
}
