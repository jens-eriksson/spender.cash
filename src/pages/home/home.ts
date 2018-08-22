import { BitcoinCashProvider } from './../../providers/bitcoin-cash/bitcoin-cash';
import { SettingsProvider } from '../../providers/settings/settings';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PayPage } from '../pay/pay';
import { TransactionsPage } from '../transactions/transactions';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nativeBalance: number;
  qrCode: string;

  constructor(public navCtrl: NavController, 
              public settingsProvider: SettingsProvider, 
              public bitcoinCashProvider: BitcoinCashProvider
            ) {

  }
  ionViewDidLoad() {
    this.bitcoinCashProvider.initilizeWallet()
      .then(() => {
        this.setQrCode(this.bitcoinCashProvider.getPublicAddress());
      })
      .catch(error => { 
        console.log(error);
      }); 
  }

  public refresh(refresher) {
    try {
      this.bitcoinCashProvider.updateBalance()
        .then(() => refresher.complete());
    }
    catch(error) {
      console.log(error);
    }
  }

  public calculateNativeBalance() {
      this.nativeBalance = 0;
  }

  public navToPay() : void {
    this.navCtrl.push(PayPage);
  }

  public navToTransactions() : void {
    this.navCtrl.push(TransactionsPage);
  }

  public navToSettings() : void {
    this.navCtrl.push(SettingsPage);
  }

  private setQrCode(address: string, options?: any) {
    this.qrCode = this.bitcoinCashProvider.encodeBIP21(address, options);
  }
}