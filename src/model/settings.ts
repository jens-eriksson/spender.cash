export interface Settings {
    currencySymbol: string;
    nativeCurrency: string;
    hideBalance: boolean;
    isEncrypted: boolean;
};

export const DefaultSettings: Settings = {
    currencySymbol: 'cash',
    nativeCurrency: 'USD',
    hideBalance: false,
    isEncrypted: false
};