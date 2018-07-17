import { SettingsPage } from './../settings/settings';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public gotoSettings() : void {
    this.navCtrl.push(SettingsPage, {});
  }

}
