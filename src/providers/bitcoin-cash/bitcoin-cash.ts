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

    constructor(private persistenceProvider: PersistenceProvider) {
        //this.listen();
        this.BITBOX.restURL = "http://localhost:8100/bitbox"
    }

    public async initilizeWallet(): Promise<Wallet> {
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
            for (let i = 0; i < 20; i++) {
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
            
            await this.updateBalance();
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

    public encodeBIP21(address, options): string {
        return this.BITBOX.BitcoinCash.encodeBIP21(address, options);
    }

    public decodeBIP21(url: string): any {
        return this.BITBOX.BitcoinCash.decodeBIP21(url);
    }

    public async updateBalance(): Promise<Wallet> {
        let balance = 0;
        let uxtos = [];
        
        this.wallet.publicAddresses.forEach(async address => {
            let result = await this.BITBOX.Address.utxo(address.address);
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
        });

        this.wallet.publicAddresses.forEach(async address => {
            let result = await this.BITBOX.Address.unconfirmed(address.address);
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
        });

        this.wallet.publicAddresses.forEach(async address => {
            let result = await this.BITBOX.Address.utxo(address.address);
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
        });

        this.wallet.publicAddresses.forEach(async address => {
            let result = await this.BITBOX.Address.unconfirmed(address.address);
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
        }); 

        this.wallet.balance = balance;
        this.wallet.uxtos = uxtos;
        return this.wallet;
    }

    public getPublicAddress(): string {
        return this.wallet.publicAddresses[Math.floor(Math.random() * this.wallet.publicAddresses.length)].address;
    }

    private listen() {
        let socket = new this.BITBOX.Socket('https://rest.bitcoin.com');
        socket.listen('transactions', (message) => {
            console.log(message);
        });
    }
}