export interface Settings {
    currencySymbol: string;
    fiatCurrency: string;
    hideBalance: boolean;
    hideFiatAmounts: boolean
    isEncrypted: boolean;
};

export const DefaultSettings: Settings = {
    currencySymbol: 'cash',
    fiatCurrency: 'USD',
    hideBalance: false,
    hideFiatAmounts: false,
    isEncrypted: false
};