import { HomePage } from '../pages/home/home';
import { DisclaimerPage } from '../pages/disclaimer/disclaimer';
import { PersistenceProvider } from '../providers/persistence/persistence';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular/umd';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class SpenderApp {
  rootPage:any;
  agreeDisclaimer: boolean = false;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, persistenceProvider: PersistenceProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      //Check Disclaimer
      persistenceProvider.get('agreeDisclaimer')
        .then(agreed => {
            if(!agreed){
              this.rootPage = DisclaimerPage;
            }
            else{
              this.rootPage = HomePage;
            }

        });

    });
  }
}

