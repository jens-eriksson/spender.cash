import { ConfigProvider } from './../../providers/config/config';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PayPage } from '../pay/pay';
import { TransactionsPage } from '../transactions/transactions';
import { SettingsPage } from './../settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  payIcon: string = '../../assets/imgs/pay.png';

  constructor(public navCtrl: NavController, public configProvider: ConfigProvider) {

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
}
