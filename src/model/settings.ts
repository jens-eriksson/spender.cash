export interface Settings {
    currencySymbol: string;
    nativeCurrency: string;
    hideBalance: boolean;
};

export const DefaultSettings: Settings = {
    currencySymbol: 'cash',
    nativeCurrency: 'USD',
    hideBalance: false
};