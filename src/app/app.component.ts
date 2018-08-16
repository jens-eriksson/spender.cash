import { Logger } from '../providers/logger/logger';
import { Component } from '@angular/core';
import { Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Subscription } from 'rxjs';

import { HomePage } from '../pages/home/home';
import { AppProvider } from '../providers/app/app';
import { ProfileProvider } from '../providers/profile/profile';
import { ConfigProvider } from '../providers/config/config';
import { DisclaimerPage } from '../pages/disclaimer/disclaimer';
import { PinModalPage } from '../pages/pin/pin';
import { FingerprintModalPage } from '../pages/fingerprint/fingerprint';

@Component({
  templateUrl: 'app.html'
})
export class SpenderApp {
  public rootPage: any;
  private onResumeSubscription: Subscription;
  private isModalOpen: boolean;

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private logger: Logger,
    private appProvider: AppProvider,
    private profileProvider: ProfileProvider,
    private configProvider: ConfigProvider,
    private modalCtrl: ModalController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then((readySource) => {
      this.appProvider.load().then(() => {
        this.logger.info(
          'Platform ready (' + readySource + '): ' +
          this.appProvider.info.nameCase +
          ' - v' + this.appProvider.info.version +
          ' #' + this.appProvider.info.commitHash);

        if (this.platform.is('cordova')) {
          this.statusBar.show();

          // Only overlay for iOS
          if (this.platform.is('ios')) this.statusBar.overlaysWebView(true);

          this.statusBar.styleLightContent();
          this.splashScreen.hide();
        }
        
        //Check PIN or Fingerprint
        this.onResumeSubscription = this.platform.resume.subscribe(() => {
          this.openLockModal();
        });
        this.openLockModal();
        
        // Check Profile
        this.profileProvider.loadAndBindProfile().then((profile: any) => {
          //this.registerIntegrations();
          if (profile) {
            this.logger.info('Profile exists.');
            this.rootPage = HomePage;
          }
          else {
            this.logger.info('No profile exists.');
            this.profileProvider.createProfile();
            this.rootPage = DisclaimerPage;
          }
        }).catch((err: any) => {
          this.logger.warn(err);
          this.rootPage = DisclaimerPage;
        });

        //Set Config
        this.configProvider.load().then((config: any) => {
          this.configProvider.set(config);
        });

      }).catch((err) => {
        this.logger.error('Could not initialize the app');
      });

    });
  }

  ngOnDestroy() {
    this.onResumeSubscription.unsubscribe();
  }

  private openLockModal(): void {
    if (this.isModalOpen) return;
    let config: any = this.configProvider.get();
    let lockMethod = config.lock.method;
    if (!lockMethod) return;
    if (lockMethod == 'PIN') this.openPINModal('checkPin');
    if (lockMethod == 'Fingerprint') this.openFingerprintModal();
  }

  private openPINModal(action): void {
    this.isModalOpen = true;
    let modal = this.modalCtrl.create(PinModalPage, { action }, { showBackdrop: false, enableBackdropDismiss: false });
    modal.present();
    modal.onDidDismiss(() => {
      this.isModalOpen = false;
    });
  }

  private openFingerprintModal(): void {
    this.isModalOpen = true;
    let modal = this.modalCtrl.create(FingerprintModalPage, {}, { showBackdrop: false, enableBackdropDismiss: false });
    modal.present();
    modal.onDidDismiss(() => {
      this.isModalOpen = false;
    });
  }
}

