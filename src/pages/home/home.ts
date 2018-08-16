import { Logger } from './../../providers/logger/logger';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PayPage } from '../pay/pay';
import { TransactionsPage } from '../transactions/transactions';
import { SettingsPage } from './../settings/settings';
import { ProfileProvider } from '../../providers/profile/profile';
import { WalletProvider } from '../../providers/wallet/wallet';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public wallet: any;
  payIcon: string = '../../assets/imgs/pay.png';

  constructor(
    public navCtrl: NavController, 
    private profileProvider: ProfileProvider,
    private walletProvider: WalletProvider,
    private logger: Logger
  ) {
    this.updateWallet();
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

  public doRefresh(refresher) {
    setTimeout(() => {
      this.updateWallet();
      refresher.complete();
    }, 300);
  }

  private updateWallet(): void {
    this.wallet = this.profileProvider.getWallets()[0];
    this.logger.info('Updating wallet:' + this.wallet.name)
    this.walletProvider.getStatus(this.wallet, {}).then((status: any) => {
      this.wallet.status = status;
    }).catch((err: any) => {
      this.logger.error(err);
    });
  }
  
}
