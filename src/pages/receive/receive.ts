import { BitcoinCashProvider } from '../../providers/bitcoin-cash/bitcoin-cash';
import { PriceProvider } from '../../providers/price/price';
import { SettingsProvider } from '../../providers/settings/settings';
import { Component, ViewChild } from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the ReceivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-receive',
  templateUrl: 'receive.html',
})
export class ReceivePage {
  @ViewChild('amountInput') amountInput;
  amount: number;
  fiatAmount: number;

  constructor(
    public viewCtrl: ViewController,
    public settingsProvider: SettingsProvider,
    private priceProvider: PriceProvider,
    private bitcoinCashProvider: BitcoinCashProvider) {
  }

  ngAfterViewChecked() {
    this.amountInput.setFocus()
  }

  dismiss() {
    this.viewCtrl.dismiss({
        amount: this.amount,
        fiatAmount: this.fiatAmount
    });
  }

  updateFiatAmount() {
    this.bitcoinCashProvider.toBitcionCash(this.amount, this.settingsProvider.settings.currencySymbol)
      .then(bch => {
        this.priceProvider.getPrice("BCH", this.settingsProvider.settings.fiatCurrency)
          .then(exchangeRate => this.fiatAmount = bch * exchangeRate);
      });    
  }

  checkAmountInput($event) {
    let newAmount: string;

    if(this.amount){
      newAmount = this.amount + $event.key;
    }
    else {
      newAmount = $event.key;
    }
    
    let intAndFraction = newAmount.split(".");
    let currencySymbol = this.settingsProvider.settings.currencySymbol.toLowerCase();
    
    //Do not allow ','
    if($event.key == ","){
      $event.preventDefault();
    }

    // the new vale has to be a number
    if(isNaN(Number(newAmount))) {
      $event.preventDefault();
    }      
    
    //if the curreny symbol is 'sat' no decimals is allowed
    if(currencySymbol === "sat" && $event.key === ".") {
      $event.preventDefault();
    }

    //if the currency symbol is 'cash' or 'bits' only allow two decimals
    if(currencySymbol === "cash" || currencySymbol == "bits") {
      if(intAndFraction.length == 2 &&  intAndFraction[1].length > 2) {
        $event.preventDefault();
      }
    }
    
    //if the currency symbol is 'bch' only allow two decimals
    if(currencySymbol === "bch") {
      if(intAndFraction.length == 2 &&  intAndFraction[1].length > 8) {
        $event.preventDefault();
      }
    }
  }

}
