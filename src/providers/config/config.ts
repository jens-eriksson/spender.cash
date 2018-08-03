import { PersistenceProvider } from './../persistence/persistence';
import { Injectable } from '@angular/core';

interface Settings {
    currencySymbol: string;
    nativeCurrency: string;
    hideBalance: boolean;
};

const defaultSettings: Settings = {
    currencySymbol: 'cash',
    nativeCurrency: 'USD',
    hideBalance: false
};
  
  @Injectable()
  export class ConfigProvider {
    public settings: Settings;  
  
    constructor(
      private persistenceProvider: PersistenceProvider
    ) {
        this.load();
    }

    public load() {
        this.persistenceProvider.storage.get('settings')
        .then(
            (data) => {                
                try {
                    if(!data || data == "null") throw new Error('No settings in storage');
                    this.settings = JSON.parse(data);
                  } catch (e) {
                    console.log('error: ConfigProvider.load()' + '\r\n' + e);
                    this.settings = defaultSettings;
                  }
                console.log('success: ConfigProvider.load()');
            },
            error => console.log('error: ConfigProvider.load()')
        );
    }
  
    public save() {
        this.persistenceProvider.storage.set('settings', this.settings)
        .then(
            success => console.log('success: ConfigProvider.save()'),
            error => console.log('error: ConfigProvider.save()')
        );
    }  
  
  }