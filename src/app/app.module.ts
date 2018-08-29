import { ReceivePage } from '../pages/receive/receive';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { DecimalPipe } from '@angular/common';
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
import { FiatCurrenyPage } from './../pages/settings/fiat-curreny/fiat-curreny';


/* Providers */
import { PersistenceProvider } from '../providers/persistence/persistence';
import { SettingsProvider } from '../providers/settings/settings';
import { OnBoardingProvider } from '../providers/onboarding/onboarding';
import { BitcoinCashProvider } from '../providers/bitcoin-cash/bitcoin-cash';
import { PriceProvider } from '../providers/price/price';

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
    FiatCurrenyPage,
    ReceivePage,
    ExtendedCurrencyPipe,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    NgxQRCodeModule,
    HttpClientModule,
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
    FiatCurrenyPage,
    DisclaimerPage,
    ReceivePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DecimalPipe,
    PersistenceProvider,
    SettingsProvider,
    OnBoardingProvider,
    BitcoinCashProvider,
    PriceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
