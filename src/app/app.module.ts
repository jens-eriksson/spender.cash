import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { SpenderApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PayPage } from '../pages/pay/pay';
import { TransactionsPage } from '../pages/transactions/transactions';
import { SettingsPage } from '../pages/settings/settings';

@NgModule({
  declarations: [
    SpenderApp,
    HomePage,
    PayPage,
    TransactionsPage,
    SettingsPage
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
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
