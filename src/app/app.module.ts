import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SecureStorage } from '@ionic-native/secure-storage';

/* App */
import { SpenderApp } from './app.component';

/* Pages */
import { HomePage } from '../pages/home/home';
import { PayPage } from '../pages/pay/pay';
import { TransactionsPage } from '../pages/transactions/transactions';

import { SettingsPage } from '../pages/settings/settings';
import { CurrencySymbolPage } from './../pages/settings/currency-symbol/currency-symbol';

/* Providers */
import { ConfigProvider } from '../providers/config/config';
import { PersistenceProvider } from './../providers/persistence/persistence';
import { CordovaStorage, LocalStorage } from './../providers/persistence/storage';

@NgModule({
  declarations: [
    SpenderApp,
    HomePage,
    PayPage,
    TransactionsPage,
    SettingsPage,
    CurrencySymbolPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(SpenderApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SpenderApp,
    HomePage,
    PayPage,
    TransactionsPage,
    SettingsPage,
    CurrencySymbolPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ConfigProvider,
    PersistenceProvider,
    CordovaStorage,
    LocalStorage,
    SecureStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
