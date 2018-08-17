import { SettingsProvider } from './../../../providers/settings/settings';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-currency-symbol',
  templateUrl: 'currency-symbol.html',
})
export class CurrencySymbolPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public settingsProvider: SettingsProvider) {
  }

  ionViewDidLeave() {
    this.settingsProvider.save();
  }

}
