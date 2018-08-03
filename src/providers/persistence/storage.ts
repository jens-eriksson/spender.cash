import { Injectable } from '@angular/core';
import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage';

export interface IStorage {
    get(key: string): Promise<any>;
    set(key: string, value: any): Promise<void>;
    remove(key: string): Promise<any>;
  }

@Injectable()
export class CordovaStorage implements IStorage{

    private storageKey: string = 'storage'; 
    
    constructor(private secureStorage: SecureStorage){

    }

    public async get(key: string) : Promise<string> {        
        let storage: SecureStorageObject = await this.secureStorage.create(this.storageKey)
        return storage.get(key);
    }

    public async set(key: string, value: string) : Promise<void> {
        let storage: SecureStorageObject = await this.secureStorage.create(this.storageKey)
        return storage.set(key, value);
    }

    public async remove(key: string) : Promise<any> {
        let storage: SecureStorageObject = await this.secureStorage.create(this.storageKey)
        return storage.get(key);
    }

}

@Injectable()
export class LocalStorage implements IStorage {
    localStorage: any;

    constructor() {
        this.localStorage = (typeof window.localStorage !== "undefined") ? window.localStorage : null;
        if (!this.localStorage) throw new Error('localstorage not available');
    }
    public get(key: string): Promise<any> {
        return new Promise<string>(resolve => {
            let value = this.localStorage.getItem(key);
            resolve(value);
        });
    }

    public set(key: string, value: string): Promise<void> {
        return new Promise<void>(resolve => {
            console.log(value);
            this.localStorage.setItem(key, JSON.stringify(value));
            resolve();
        });
    }

    public remove(key: string): Promise<any> {
        return new Promise<void>(resolve => {
            this.localStorage.removeItem(key);
            return resolve();
        });
    }
}
