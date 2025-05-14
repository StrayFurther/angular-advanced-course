import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitByDDot',
  standalone: true
})
export class SplitByDDotPipe implements PipeTransform {
  transform(value: string): string {
    return value.split(':')[0];
  }
}
