import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'round'})
export class RoundPipe implements PipeTransform {

    transform(value: number, digits: number): number {
        return Math.trunc(value);
    }
}