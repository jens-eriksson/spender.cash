import { PersistenceProvider } from '../persistence/persistence';
import { Injectable } from '@angular/core';
import * as BITBOXCli from 'bitbox-cli/lib/bitbox-cli';

@Injectable()
export class TransactionProvider {
    private readonly STORAGEKEY = 'transactions';  
    private BITBOX = new BITBOXCli.default();
        
    constructor(private persistenceProvider: PersistenceProvider) {
        let socket = new this.BITBOX.Socket('https://rest.bitcoin.com');

        socket.listen('transactions', (message) => {
            console.log(message)
          });
    }


}