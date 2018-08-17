import { Settings, DefaultSettings } from './../../model/settings';
import { PersistenceProvider } from './../persistence/persistence';
import { Injectable } from '@angular/core';

@Injectable()
export class SettingsProvider {
    private readonly STORAGEKEY = 'settings';    
    public settings: Settings

    constructor(private persistence: PersistenceProvider) {
        this.load();
    }

    public load(): void {
        this.persistence.get(this.STORAGEKEY)
        .then(value =>  {
            try{
                if(value){
                    return JSON.parse(value);
                }
                else{
                    return DefaultSettings;
                }
                
            }
            catch(error){
                console.log(error);
                return DefaultSettings;
            }
            
        })
        .then((settings: Settings) => this.settings = settings);
    }
    

    public save(): void {
        this.persistence.set(this.STORAGEKEY, this.settings);
    }
}