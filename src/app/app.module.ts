import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NgxQRCodeModule } from 'ngx-qrcode2';

/* App */
import { SpenderApp } from './app.component';

/* Pages */
import { HomePage } from '../pages/home/home';
import { PayPage } from '../pages/pay/pay';
import { TransactionsPage } from '../pages/transactions/transactions';
import { DisclaimerPage } from '../pages/disclaimer/disclaimer';
import { SettingsPage } from '../pages/settings/settings';
import { CurrencySymbolPage } from '../pages/settings/currency-symbol/currency-symbol';

/* Providers */
import { PersistenceProvider } from '../providers/persistence/persistence';
import { SettingsProvider } from '../providers/settings/settings';
import { OnBoardingProvider } from '../providers/onboarding/onboarding';
import { BitcoinCashProvider } from './../providers/bitcoin-cash/bitcoin-cash';

/* Pipes */
import { ExtendedCurrencyPipe } from '../pipes/currency';
import { TruncatePipe } from '../pipes/truncate';

@NgModule({
  declarations: [
    SpenderApp,
    HomePage,
    PayPage,
    TransactionsPage,
    SettingsPage,
    CurrencySymbolPage,
    DisclaimerPage,
    ExtendedCurrencyPipe,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    NgxQRCodeModule,
    IonicModule.forRoot(SpenderApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SpenderApp,
    HomePage,
    PayPage,
    TransactionsPage,
    SettingsPage,
    CurrencySymbolPage,
    DisclaimerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PersistenceProvider,
    SettingsProvider,
    OnBoardingProvider,
    BitcoinCashProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
