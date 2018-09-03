import { SettingsProvider } from './../settings/settings';
import { Wallet } from '../../model/wallet';
import { PersistenceProvider } from '../persistence/persistence';
import { Injectable } from '@angular/core';
import * as BITBOXCli from 'bitbox-cli/lib/bitbox-cli';
import { Address } from '../../model/address';

@Injectable()
export class BitcoinCashProvider {
    private readonly STORAGEKEY = 'mnemonic';
    private BITBOX = new BITBOXCli.default();
    public wallet: Wallet;

    constructor(
        private persistenceProvider: PersistenceProvider,
        private settingsProvider: SettingsProvider
    ) {
        
    }

    public async initilizeWallet(): Promise<Wallet> {
        console.log('initilizeWallet');
        let mnemonic = await this.persistenceProvider.get(this.STORAGEKEY);
        if (mnemonic) {
            this.wallet = {
                mnemonic: mnemonic,
                publicAddresses: [],
                changeAddresses: [],
                uxtos: [],
                balance: 0
            };

            let rootSeed = this.BITBOX.Mnemonic.toSeed(mnemonic);
            let masterNode = this.BITBOX.HDNode.fromSeed(rootSeed, "bitcoincash");

            // public addresses
            this.wallet.publicAddresses = [];
            for (let i = 19; i < 20; i++) {
                let derivationPath = "m/44'/145'/0'/0/" + i;
                let account = masterNode.derivePath(derivationPath);
                let address: Address = {
                    derivationPath: derivationPath,
                    address: this.BITBOX.HDNode.toCashAddress(account)
                };
                this.wallet.publicAddresses.push(address);
            }

            // change addresses
            this.wallet.changeAddresses = [];
            for (let i = 0; i < 1; i++) {
                let derivationPath = "m/44'/145'/0'/1/" + i;
                let account = masterNode.derivePath(derivationPath);
                let address: Address = {
                    derivationPath: derivationPath,
                    address: this.BITBOX.HDNode.toCashAddress(account)
                };
                this.wallet.changeAddresses.push(address);
            }
        }
        else {
            this.wallet = null;
        }

        return this.wallet;
    }

    public saveWallet() {
        this.persistenceProvider.set(this.STORAGEKEY, this.wallet.mnemonic);
    }

    public createWallet() {
        if (!this.wallet) {
            this.wallet = {
                mnemonic: "range profit front athlete demise inject armed become kick okay love diet",
                publicAddresses: [],
                changeAddresses: [],
                uxtos: [],
                balance: 0
            };
            this.saveWallet();
        }
    }

    public encodeQrCode(address, options): string {
        return this.BITBOX.BitcoinCash.encodeBIP21(address, options);
    }

    public decodeQrCode(url: string): any {
        return this.BITBOX.BitcoinCash.decodeBIP21(url);
    }

    public async updateBalance(): Promise<Wallet> {
        let balance: number = 0;
        let uxtos = [];

        for (let i = 0; i < this.wallet.publicAddresses.length; i++) {
            let result = await this.BITBOX.Address.utxo(this.wallet.publicAddresses[i].address);
            if(!result) {
                return this.wallet;
            }
            result.forEach(u => {
                uxtos.push({
                    txid: u.txid,
                    vout: u.vout,
                    address: u.cashAddress,
                    satoshis: u.satoshis,
                    height: u.height,
                    confirmations: u.confirmations
                });
                balance += u.satoshis;
            });
        }
     
        for (let i = 0; i < this.wallet.publicAddresses.length; i++) {
            let result = await this.BITBOX.Address.unconfirmed(this.wallet.publicAddresses[i].address);
            if(!result) {
                return this.wallet;
            }      
            result.forEach(u => {
                uxtos.push({
                    txid: u.txid,
                    vout: u.vout,
                    address: u.cashAddress,
                    satoshis: u.satoshis,
                    height: null,
                    confirmations: u.confirmations
                });
                balance += u.satoshis;
            });
        }

        for (let i = 0; i < this.wallet.changeAddresses.length; i++) {
            let result = await this.BITBOX.Address.utxo(this.wallet.changeAddresses[i].address);
            if(!result) {
                return this.wallet;
            }
            result.forEach(u => {
                this.wallet.uxtos.push({
                    txid: u.txid,
                    vout: u.vout,
                    address: u.cashAddress,
                    satoshis: u.satoshis,
                    height: u.height,
                    confirmations: u.confirmations
                });
                balance += u.satoshis;
            });
        };

        for (let i = 0; i < this.wallet.changeAddresses.length; i++) {
            let result = await this.BITBOX.Address.unconfirmed(this.wallet.changeAddresses[i].address);
            if(!result) {
                return this.wallet;
            }
            result.forEach(u => {
                this.wallet.uxtos.push({
                    txid: u.txid,
                    vout: u.vout,
                    address: u.cashAddress,
                    satoshis: u.satoshis,
                    height: null,
                    confirmations: u.confirmations
                });
                console.log('change unconfirmed: ' + u.satoshis);
                balance += u.satoshis;
            });        
        }; 

        this.wallet.uxtos = uxtos;
        this.wallet.balance = balance;
        return this.wallet;
    }

    public getPublicAddress(): string {
        return this.wallet.publicAddresses[Math.floor(Math.random() * this.wallet.publicAddresses.length)].address;
    }
    public getBalance(): number {
        switch(this.settingsProvider.settings.currencySymbol.toLowerCase()) {
            case "sat":
            return this.wallet.balance;

            case "cash":
            return this.wallet.balance / 100;

            case "bits":
            return this.wallet.balance / 100;

            case "bch":
            return this.wallet.balance / 100000000;

            default:
            return this.wallet.balance;
        }
    }
    public async toBitcionCash(value: number, symbol: string): Promise<number> {
        symbol = symbol.toLowerCase();
        let satoshis = 0;

        switch(symbol){
            case "cash":
            satoshis = Math.round(value * 100);
            break;

            case "bits":
            satoshis = Math.round(value * 100);
            break;

            case "sat":
            satoshis = Math.round(value);
            break;

            case "bch":
            satoshis = Math.round(value * 100000000);
            break;

            default:
            throw new Error("Invalid currency symbol");
        }
        return await this.BITBOX.BitcoinCash.toBitcoinCash(satoshis);
    }

    private listen() {
        let socket = new this.BITBOX.Socket('https://rest.bitcoin.com');
        socket.listen('transactions', (message) => {
            console.log(message);
        });
    }
}