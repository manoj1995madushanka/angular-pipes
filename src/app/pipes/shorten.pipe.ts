import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  /**
   * return first 10 characters of a provided string
   * */
  transform(value: any): string {
    if (value.length > 10) {
      return value.substr(0, 10) + ' ...';
    }
    return value;
  }

}
