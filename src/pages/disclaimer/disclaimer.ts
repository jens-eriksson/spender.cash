import { OnBoardingProvider } from '../../providers/onboarding/onboarding';
import { HomePage } from '../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular/umd';

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
    private onBoardingProvider: OnBoardingProvider
  ) {
  }

  ionViewDidLoad() {
  }

  confirm() {    
    this.onBoardingProvider.setDisclaimer(true);
    this.onBoardingProvider.createWallet();
    this.navCtrl.setRoot(HomePage);
    this.navCtrl.popToRoot({ animate: false });    
  }
}
