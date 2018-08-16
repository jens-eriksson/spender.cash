import { OnGoingProcessProvider } from './../../providers/on-going-process/on-going-process';
import { HomePage } from './../home/home';
import { ProfileProvider } from '../../providers/profile/profile';
import { PersistenceProvider } from './../../providers/persistence/persistence';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DisclaimerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-disclaimer',
  templateUrl: 'disclaimer.html',
})
export class DisclaimerPage {
  public accepted = {
    first: false,
    second: false,
    third: false
  };
  public terms = {
    accepted: false,
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private persistenceProvider: PersistenceProvider,
    private profileProvider: ProfileProvider,
    private onGoingProcessProvider: OnGoingProcessProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisclaimerPage');
  }

  confirm() {
    this.persistenceProvider.setDisclaimerAccepted();
    this.onGoingProcessProvider.set('creatingWallet', true);
    this.profileProvider.createDefaultWallet().then((wallet) => {
      this.onGoingProcessProvider.set('creatingWallet', false);
      this.navCtrl.setRoot(HomePage);
      this.navCtrl.popToRoot({ animate: false });
    })
    
  }
}
