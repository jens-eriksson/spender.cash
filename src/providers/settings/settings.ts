import { Settings, DefaultSettings } from '../../model/settings';
import { PersistenceProvider } from '../persistence/persistence';
import { Injectable } from '@angular/core';

@Injectable()
export class SettingsProvider {
    private readonly STORAGEKEY = 'settings';    
    public settings: Settings

    constructor(private persistence: PersistenceProvider) {
        this.load();
    }

    public async load() {
        let value = await this.persistence.get(this.STORAGEKEY);
        if(value){
            this.settings =  JSON.parse(value);
        }
        else{
            this.settings = DefaultSettings;
        }
    }
    

    public async save() {
        await this.persistence.set(this.STORAGEKEY, this.settings);
    }
}