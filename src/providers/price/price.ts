import { PersistenceProvider } from '../persistence/persistence';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PriceProvider {
    private readonly STORAGEKEY = 'exchageRate';

    constructor(private http: HttpClient, private persistenceProvider: PersistenceProvider){
    }

    public async getPrice(cryptoCurrency: string, fiatCurrency: string) : Promise<number> {

        let exchangeRate: number = 0;

        try {
            let url: string = "https://min-api.cryptocompare.com/data/price?fsym=" + cryptoCurrency + "&tsyms=" + fiatCurrency; 
            let data = await this.http.get(url).toPromise();
            exchangeRate = data[fiatCurrency];
            this.persistenceProvider.set(this.STORAGEKEY, exchangeRate);
        }
        catch(error){
            console.log(error);
            exchangeRate = await this.persistenceProvider.get(this.STORAGEKEY);
        }        
        
        return exchangeRate;
    }
}