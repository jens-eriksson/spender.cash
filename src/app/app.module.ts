
import { DecimalPipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

/* Native */
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { File } from '@ionic-native/file';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth';
import { TouchID } from '@ionic-native/touch-id';

/* Modules */
import { Level, NgLoggerModule } from '@nsalaun/ng-logger';
import { MomentModule } from 'angular2-moment';
import { NgxQRCodeModule } from 'ngx-qrcode2';

/* App */
import { SpenderApp } from './app.component';

/* Pages */
import { HomePage } from '../pages/home/home';
import { PayPage } from '../pages/pay/pay';
import { TransactionsPage } from '../pages/transactions/transactions';
import { SettingsPage } from '../pages/settings/settings';
import { CurrencySymbolPage } from './../pages/settings/currency-symbol/currency-symbol';
import { FingerprintModalPage } from './../pages/fingerprint/fingerprint';
import { PinModalPage } from './../pages/pin/pin';
import { DisclaimerPage } from './../pages/disclaimer/disclaimer';

/* Providers */
import { AppProvider } from '../providers/app/app';
import { BwcErrorProvider } from '../providers/bwc-error/bwc-error';
import { BwcProvider } from '../providers/bwc/bwc';
import { ConfigProvider } from '../providers/config/config';
import { Logger } from '../providers/logger/logger';
import { OnGoingProcessProvider } from '../providers/on-going-process/on-going-process';
import { PersistenceProvider } from '../providers/persistence/persistence';
import { PlatformProvider } from '../providers/platform/platform';
import { PopupProvider } from '../providers/popup/popup';
import { ProfileProvider } from '../providers/profile/profile';
import { WalletProvider } from '../providers/wallet/wallet';
import { FilterProvider } from '../providers/filter/filter';
import { FeeProvider } from '../providers/fee/fee';
import { TxFormatProvider } from '../providers/tx-format/tx-format';
import { RateProvider } from '../providers/rate/rate';
import { TouchIdProvider } from '../providers/touchid/touchid';

@NgModule({
  declarations: [
    SpenderApp,
    HomePage,
    PayPage,
    TransactionsPage,
    SettingsPage,
    CurrencySymbolPage,
    FingerprintModalPage,
    PinModalPage,
    DisclaimerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(SpenderApp),
    HttpClientModule,
    NgLoggerModule.forRoot(Level.LOG),
    MomentModule,
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SpenderApp,
    HomePage,
    PayPage,
    TransactionsPage,
    SettingsPage,
    CurrencySymbolPage,
    FingerprintModalPage,
    PinModalPage,
    DisclaimerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ConfigProvider,
    PersistenceProvider,
    AppProvider,
    BwcProvider,
    BwcErrorProvider,
    ConfigProvider,
    Logger,
    OnGoingProcessProvider,
    PlatformProvider,
    ProfileProvider,
    PopupProvider,
    StatusBar,
    SplashScreen,
    PersistenceProvider,
    File,
    AndroidFingerprintAuth,
    TouchID,
    FeeProvider,
    FilterProvider,
    RateProvider,
    TxFormatProvider,
    WalletProvider,
    DecimalPipe,
    TouchIdProvider,
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    }
  ]
})
export class AppModule {}
