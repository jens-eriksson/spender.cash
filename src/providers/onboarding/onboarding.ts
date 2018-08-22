import { BitcoinCashProvider } from './../bitcoin-cash/bitcoin-cash';
import { PersistenceProvider } from '../persistence/persistence';
import { Injectable } from '@angular/core';

@Injectable()
export class OnBoardingProvider {

    constructor(private bitcoinCashProvider: BitcoinCashProvider, private persistenceProvider: PersistenceProvider) {
    }

    public setDisclaimer(value: boolean) {
        this.persistenceProvider.set('agreeDisclaimer', value);
    }

    public createWallet() {
        this.bitcoinCashProvider.createWallet();
    }
}