import { Wallet } from '../../model/wallet';
import { PersistenceProvider } from '../persistence/persistence';
import { Injectable } from '@angular/core';
import * as BITBOXCli from 'bitbox-cli/lib/bitbox-cli';

@Injectable()
export class WalletProvider {
    private readonly STORAGEKEY = 'mnemonic';  
    private BITBOX = new BITBOXCli.default();
    public wallet: Wallet;
    
    constructor(private persistenceProvider: PersistenceProvider){
    }

    public load() : Promise<Wallet> {
        return this.persistenceProvider.get(this.STORAGEKEY)
            .then(mnemonic => {
                if(mnemonic){
                    this.wallet = new Wallet(mnemonic);
                    return this.wallet;
                }
                else {
                    this.wallet = null;
                    return null;
                }
            }).then((wallet: Wallet) => wallet);
    }

    public save() {
        this.persistenceProvider.set(this.STORAGEKEY, this.wallet.mnemonic);
    }

    public create() {
        if(!this.wallet) {
            this.wallet = new Wallet("range profit front athlete demise inject armed become kick okay love diet");
            this.save();
        }
    }
}