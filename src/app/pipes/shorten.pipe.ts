import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  /**
   * return first 10 characters of a provided string
   * */
  transform(value: any, start: number, limit: number): string {
    if (value.length > limit) {
      return value.substr(start, limit) + ' ...';
    }
    return value;
  }

}
