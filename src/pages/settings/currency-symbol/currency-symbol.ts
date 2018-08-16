import { ConfigProvider } from './../../../providers/config/config';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DefaultCurrencySettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-currency-symbol',
  templateUrl: 'currency-symbol.html',
})
export class CurrencySymbolPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public configProvider: ConfigProvider) {
  }

  ionViewDidLeave() {
  }

}
