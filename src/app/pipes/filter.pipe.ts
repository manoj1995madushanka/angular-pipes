import {Pipe, PipeTransform} from '@angular/core';

/**
 * this pure: false property can make performance issue
 * in angular default this property is true because it does not update filter source when data change after filtering
 * In thi false behaviour filter again call when changes occured
 * */
@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }

    const resultArray = [];

    for (const item of value) {
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
