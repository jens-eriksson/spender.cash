import { WalletProvider } from './../wallet/wallet';
// agreeDisclaimer

import { PersistenceProvider } from './../persistence/persistence';
import { Injectable } from '@angular/core';

@Injectable()
export class OnBoardingProvider {

    constructor(private walletProdiver: WalletProvider, private persistenceProvider: PersistenceProvider) {
    }

    public setDisclaimer(value: boolean) {
        this.persistenceProvider.set('agreeDisclaimer', value);
    }

    public createWallet() {
        this.walletProdiver.create();
    }
}