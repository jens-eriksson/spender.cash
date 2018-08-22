import { Uxto } from './uxto';
import { Address } from './address';

export interface Wallet {
    mnemonic: string;
    publicAddresses: Address[];
    changeAddresses: Address[];
    uxtos: Uxto[];
    balance: number;
};