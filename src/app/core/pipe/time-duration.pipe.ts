import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeDuration',
  standalone: true
})
export class TimeDurationPipe implements PipeTransform {
  transform(ms: number): string {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
}
