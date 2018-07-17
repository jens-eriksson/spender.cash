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

  constructor(public navCtrl: NavController) {

  }

  public gotoPay() : void {
    this.navCtrl.push(PayPage, {});
  }

  public gotoTransactions() : void {
    this.navCtrl.push(TransactionsPage, {});
  }

  public gotoSettings() : void {
    this.navCtrl.push(SettingsPage, {});
  }
}
