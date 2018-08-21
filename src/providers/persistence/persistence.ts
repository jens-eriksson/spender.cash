import { IStorage, CordovaStorage, LocalStorage } from './storage';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular/umd';

@Injectable()
  export class PersistenceProvider {
    
    public storage: IStorage;
    
    constructor(
      private platform: Platform
    ) { 
        if(this.platform.is('cordova')){
            this.storage = new CordovaStorage()
        }
        else{
            this.storage = new LocalStorage();
        }
    }

    public get(key: string): Promise<any> {
        return this.storage.get(key);
    }

    public set(key: string, value: any): Promise<void> {
        return this.storage.set(key, JSON.stringify(value));
    }

    public remove(key: string): Promise<string> {
        return this.storage.remove(key);
    }
  }