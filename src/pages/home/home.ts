import { WalletProvider } from '../../providers/wallet/wallet';
import { SettingsProvider } from '../../providers/settings/settings';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular/umd';
import { PayPage } from '../pay/pay';
import { TransactionsPage } from '../transactions/transactions';
import { SettingsPage } from '../settings/settings';
import * as BITBOXCli from 'bitbox-cli/lib/bitbox-cli';
import { TransactionProvider } from '../../providers/transactions/transactions';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nativeBalance: number;
  qrCode: string;

  constructor(public navCtrl: NavController, 
              public settingsProvider: SettingsProvider, 
              public walletProvider: WalletProvider,
              public transactionProvider: TransactionProvider) {

  }
  ionViewDidLoad() {
    this.walletProvider.load().then(wallet => {
      this.calculateNativeBalance();
      this.setQrCode(wallet.getPublicAddress());
    });    
  }

  public calculateNativeBalance() {
/*     let BITBOX =  new BITBOXCli.default();
    BITBOX.Price.current(this.settingsProvider.settings.nativeCurrency).then(
      result => {
        this.nativeBalance = result * this.walletProvider.wallet.balance / 100000000;
      },
      error => {
        this.nativeBalance = 0;
        console.log(error)
      }); */

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
    let BITBOX = new BITBOXCli.default();
    this.qrCode = BITBOX.BitcoinCash.encodeBIP21(address, options);
  }
}