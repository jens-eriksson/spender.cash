import { Address } from './address';
import * as BITBOXCli from 'bitbox-cli/lib/bitbox-cli';
import { AddressUtxoResult, AddressUnconfirmedResult } from 'bitbox-cli/lib/Address';

export class Wallet {
    public mnemonic: string;
    public publicAddresses: Address[] = [];
    public changeAddresses: Address[] = [];
    public uxtos: AddressUtxoResult[] = [];
    public unconfirmed: AddressUnconfirmedResult[] = [];
    public balance: number;

    constructor(mnemonic: string) {
        this.mnemonic = mnemonic;
        this.initilize();
        this.scan();
    }

    public initilize() {
        let BITBOX =  new BITBOXCli.default();
        let rootSeed = BITBOX.Mnemonic.toSeed(this.mnemonic);
        let masterNode = BITBOX.HDNode.fromSeed(rootSeed, "bitcoincash");

        // public addresses
        for (let i = 0; i < 10; i++) {
           let derivationPath = "m/44'/145'/0'/0/" + i;
           let account = masterNode.derivePath(derivationPath);
           let address: Address = {
               derivationPath: derivationPath,
               address: BITBOX.HDNode.toCashAddress(account)
           };
           this.publicAddresses.push(address); 
        }

        // change addresses
        for (let i = 0; i < 1; i++) {
            let derivationPath = "m/44'/145'/0'/1/" + i;
            let account = masterNode.derivePath(derivationPath);
            let address: Address = {
                derivationPath: derivationPath,
                address: BITBOX.HDNode.toCashAddress(account)
            };
            this.changeAddresses.push(address); 
         }
    }

    public scan() {
        let BITBOX =  new BITBOXCli.default();
        this.balance = 0;

        this.publicAddresses.forEach(address => {
            BITBOX.Address.utxo(address.address).then(result => {
                this.uxtos = result;
                this.uxtos.forEach(u => this.balance += u.satoshis);        
            });
        });

        this.publicAddresses.forEach(address => {
            BITBOX.Address.unconfirmed(address.address).then(result => {
                this.unconfirmed = result;
                this.unconfirmed.forEach(u => this.balance += u.satoshis);
            });
        });

        this.changeAddresses.forEach(address => {
            BITBOX.Address.utxo(address.address).then(result => {
                this.uxtos = this.uxtos.concat(result);
                this.uxtos.forEach(u => this.balance += u.satoshis); 
            });
        });

        this.changeAddresses.forEach(address => {
            BITBOX.Address.unconfirmed(address.address).then(result => {
                this.unconfirmed = this.unconfirmed.concat(result);
                this.unconfirmed.forEach(u => this.balance += u.satoshis); 
            });
        });
    }

    public getPublicAddress(): string {
        return this.publicAddresses[Math.floor(Math.random() * this.publicAddresses.length)].address;
    }
};