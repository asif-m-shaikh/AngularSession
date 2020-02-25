import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commonPipe'
})
export class CommonPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(value == 'User Name')
    return 'Email';
  }

}
