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
        result =  parseFloat(value).toFixed(2)  + " bits";
        break;

        case "cash":
        result = parseFloat(value).toFixed(2) + " cash";
        break;

        case "BCH":
        result = parseFloat(value).toFixed(8) + " BCH";
        break;

        case "SEK":
        if(value) {
          result = parseFloat(value).toFixed(2) + " kr";
        }
        break;

        default:
        result = super.transform(value, symbol);
        break;
    }
        
    return result;
  }

}