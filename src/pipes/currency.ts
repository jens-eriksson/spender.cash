import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common'

@Pipe({
  name: 'currency'
})
export class ExtendedCurrencyPipe extends CurrencyPipe implements PipeTransform {
  transform(value: any, symbol?: string): string {
    let result;

    switch(symbol){
        case "sat":
        result = value + " sat"; 
        break;

        case "bits":
        result = value / 100 + " bits";
        break;

        case "cash":
        result = value / 100 + " cash";
        break;

        case "BCH":
        result = value / 100000000 + " BCH";
        break;

        default:
        result = super.transform(value, symbol);
        break;
    }
        
    return result;
  }

}