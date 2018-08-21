import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular/umd';
import { CurrencySymbolPage } from './currency-symbol/currency-symbol';
import { SettingsProvider } from '../../providers/settings/settings';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public settingsProvider: SettingsProvider
              ) {
  }

  ionViewDidLeave() {
    this.settingsProvider.save();
  }

  navToCurrencySymbol(){
    this.navCtrl.push(CurrencySymbolPage, {});
  }

  navToNativeCurrency(){
    
  }
}
