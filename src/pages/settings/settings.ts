import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConfigProvider } from './../../providers/config/config';
import { CurrencySymbolPage } from './currency-symbol/currency-symbol';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public configProvider: ConfigProvider
              ) {
  }

  ionViewDidLeave() {
    this.configProvider.save();
  }

  navToCurrencySymbol(){
    this.navCtrl.push(CurrencySymbolPage, {});
  }

  navToNativeCurrency(){
    
  }
}
