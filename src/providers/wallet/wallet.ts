import { Wallet } from './../../model/wallet';
import { PersistenceProvider } from './../persistence/persistence';
import * as BITBOXCli from 'bitbox-cli/lib/bitbox-cli';
import { Injectable } from '@angular/core';

@Injectable()
export class WalletProvider {
    private readonly STORAGEKEY = 'wallet';  
    private BITBOX = new BITBOXCli.default();
    public wallet: Wallet;
    
    constructor(private persistenceProvider: PersistenceProvider){
    }

    public load(): void {
        this.persistenceProvider.get(this.STORAGEKEY)
            .then(value => {
                if(value){
                    this.wallet = JSON.parse(value);
                }
            });
    }

    public save(): void {
        this.persistenceProvider.set(this.STORAGEKEY, this.wallet);
    }

    public create(): void {
        if(!this.wallet) {
            this.wallet = {
                mnemonic: this.BITBOX.Mnemonic.generate(128)
            }
            this.save();
        }
        
    }
}