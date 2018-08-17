import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage';

export interface IStorage {
    get(key: string): Promise<any>;
    set(key: string, value: string): Promise<void>;
    remove(key: string): Promise<string>;
  }

export class CordovaStorage implements IStorage {

    private storageKey: string = 'storage'; 
    private secureStorage: SecureStorage;

    constructor() {
        this.secureStorage = new SecureStorage();
    }

    public get(key: string) : Promise<string> {  
        return this.secureStorage.create(this.storageKey)
            .then((storage: SecureStorageObject) => storage.get(key))
            .then(value => value);
    }

    public set(key: string, value: string) : Promise<void> {
        return this.secureStorage.create(this.storageKey)
            .then((storage: SecureStorageObject) => storage.set(key, value))
            .then(value => value);
    }

    public remove(key: string) : Promise<string> {
        return this.secureStorage.create(this.storageKey)
            .then((storage: SecureStorageObject) => storage.remove(key))
            .then(value => value);
    }

}

export class LocalStorage implements IStorage {
    localStorage: any;

    constructor() {
        this.localStorage = (typeof window.localStorage !== "undefined") ? window.localStorage : null;
        if (!this.localStorage) throw new Error('localstorage not available');
    }

    public get(key: string): Promise<any> {
        let promise = new Promise<any>((resolve, reject) => {
            try{
                let value = this.localStorage.getItem(key);
                resolve(value);
            }
            catch(error){
                reject(error);
            }
        });

        return promise;
    }

    public set(key: string, value: string): Promise<void> {
        let promise =  new Promise<void>((resolve, reject) => {
            try{
                this.localStorage.setItem(key, value);
                resolve();
            }
            catch(error){
                reject(error);
            } 
        });

        return promise;
    }

    public remove(key: string): Promise<string> {
        let promise =   new Promise<string>((resolve, reject) => {
            try{
                this.localStorage.removeItem(key);
                resolve(key);
            }
            catch(error){
                reject(error);
            }
        });

        return promise;
    }
}
