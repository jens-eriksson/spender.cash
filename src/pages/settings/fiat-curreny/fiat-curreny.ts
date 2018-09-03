import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SettingsProvider } from '../../../providers/settings/settings';

@Component({
  selector: 'page-fiat-curreny',
  templateUrl: 'fiat-curreny.html',
})
export class FiatCurrenyPage {

  constructor(
      public navCtrl: NavController, public navParams: NavParams, 
      public settingsProvider: SettingsProvider) {
  }

  ionViewDidLeave() {
    this.settingsProvider.save();
  }

}
