import { ViewChild } from '@angular/core';
import { ReceivePage } from '../receive/receive';
import { PriceProvider } from '../../providers/price/price';
import { BitcoinCashProvider } from '../../providers/bitcoin-cash/bitcoin-cash';
import { SettingsProvider } from '../../providers/settings/settings';
import { Component } from '@angular/core';
import { NavController, ModalController, Slides } from 'ionic-angular';
import { PayPage } from '../pay/pay';
import { TransactionsPage } from '../transactions/transactions';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Slides) slides: Slides
  fiatBalance: number;
  qrCode: string;
  receiveAmount: number;
  receiveFiatAmount: number;

  constructor(public navCtrl: NavController, 
              public modalController: ModalController,
              public settingsProvider: SettingsProvider, 
              public bitcoinCashProvider: BitcoinCashProvider,
              private priceProvider: PriceProvider
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad');
    this.bitcoinCashProvider.initilizeWallet();
  }

  ionViewDidEnter(){
    this.bitcoinCashProvider.updateBalance()
    .then(() => {
      this.calculateNativeBalance();
    })
    .catch(error => console.log(error));
    this.setQrCode(this.bitcoinCashProvider.getPublicAddress());
    this.slides.slideTo(this.settingsProvider.settings.headerPageIndex, 0);
  }

  ionSlideDidChange() {
    this.settingsProvider.settings.headerPageIndex = this.slides.getActiveIndex();
    this.settingsProvider.save();
  }

  public refresh(refresher) {
    this.bitcoinCashProvider.updateBalance()
      .then(() => {
        this.calculateNativeBalance();
        refresher.complete()
      })
      .catch(error => console.log(error));
  }

  public calculateNativeBalance() {
      this.priceProvider.getPrice('BCH', this.settingsProvider.settings.fiatCurrency)
        .then(exchageRate => {
          this.fiatBalance = this.bitcoinCashProvider.wallet.balance * exchageRate / 100000000;
          if(this.receiveAmount) {
            this.bitcoinCashProvider.toBitcionCash(this.receiveAmount, this.settingsProvider.settings.currencySymbol)
              .then(value => this.receiveFiatAmount = value * exchageRate);
          }
          else {
            this.receiveFiatAmount = null;
          }
        });
  }

  public navToPay() : void {
    let payModal = this.modalController.create(PayPage);
    payModal.present();
  }

  public navToReceive() : void {
    if(this.receiveAmount) {
      this.clearReceiveAmount();
    }
    else {
      let receiveModal = this.modalController.create(ReceivePage);
      receiveModal.onDidDismiss(amount => {
        this.receiveAmount = amount;
        this.updateReceiveAmount();
      });
      receiveModal.present();
    }
  }

  public navToTransactions() : void {
    this.navCtrl.push(TransactionsPage);
  }

  public navToSettings() : void {
    this.navCtrl.push(SettingsPage);
  }

  public updateReceiveAmount() {
    if(this.receiveAmount) {
      this.bitcoinCashProvider.toBitcionCash(this.receiveAmount, this.settingsProvider.settings.currencySymbol)
        .then(amount => {
          let options = {
            amount: amount
          };
          this.setQrCode(this.bitcoinCashProvider.getPublicAddress(), options);
        });
      this.calculateNativeBalance();
    }
    else {
      this.setQrCode(this.bitcoinCashProvider.getPublicAddress());
      this.receiveFiatAmount = null;
    }
  }

  public clearReceiveAmount() {
    this.receiveAmount = null;
    this.receiveFiatAmount = null;
    this.setQrCode(this.bitcoinCashProvider.getPublicAddress());
  }

  private setQrCode(address: string, options?: any) {
    this.qrCode = this.bitcoinCashProvider.encodeQrCode(address, options);
  }
}