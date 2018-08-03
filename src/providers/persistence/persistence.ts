import { IStorage, CordovaStorage, LocalStorage } from './storage';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

@Injectable()
  export class PersistenceProvider {
    
    public storage: IStorage;
    
    constructor(
      private platform: Platform,
      private cordovaStorage: CordovaStorage,
      private localStorage: LocalStorage
    ) { 
        if(this.platform.is('cordova')){
            this.storage = this.cordovaStorage;
        }
        else{
            this.storage = this.localStorage;
        }
    }
  }