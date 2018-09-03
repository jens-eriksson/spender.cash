import { SecureStorage } from '@ionic-native/secure-storage';

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

    public async get(key: string) : Promise<string> {
        let storage = await this.secureStorage.create(this.storageKey);
        let keys = await storage.keys();

        if(keys.indexOf(key) > -1){
            return await storage.get(key);
        }
        else {
            return null;
        }            
    }

    public async set(key: string, value: string) {
        let storage = await this.secureStorage.create(this.storageKey);
        await storage.set(key, value);
    }

    public async remove(key: string) : Promise<string> {
        let storage = await this.secureStorage.create(this.storageKey);
        return await storage.remove(key);
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
