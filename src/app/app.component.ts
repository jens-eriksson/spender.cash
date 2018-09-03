import { BitcoinCashProvider } from './../providers/bitcoin-cash/bitcoin-cash';
import { HomePage } from '../pages/home/home';
import { DisclaimerPage } from '../pages/disclaimer/disclaimer';
import { PersistenceProvider } from '../providers/persistence/persistence';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingsProvider } from '../providers/settings/settings';

@Component({
  templateUrl: 'app.html'
})
export class SpenderApp {
  rootPage:any;
  agreeDisclaimer: boolean = false;

  constructor(
    private platform: Platform, 
    private statusBar: StatusBar, 
    private splashScreen: SplashScreen,
    private settingsProvider: SettingsProvider,
    private persistenceProvider: PersistenceProvider,
    private bitcoinCashProvider: BitcoinCashProvider
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      this.initilaze()
        .then(() => {
          if(this.platform.is("cordova")) {
            this.statusBar.overlaysWebView(false);
            this.statusBar.styleLightContent();
            this.statusBar.backgroundColorByHexString("#3e74d1");
            this.splashScreen.hide();
          }
        });
          
    });
  }
  
  private async initilaze() {
    await this.settingsProvider.load();
    await this.bitcoinCashProvider.initilizeWallet();
    await this.bitcoinCashProvider.updateBalance();

    let agreed: boolean = await this.persistenceProvider.get("agreeDisclaimer");

    if(!agreed){
      this.rootPage = DisclaimerPage;
    }
    else{
      this.rootPage = HomePage;
    }    
  }

}

