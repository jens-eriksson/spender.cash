export interface Settings {
    currencySymbol: string;
    fiatCurrency: string;
    headerPageIndex: number;
    hideFiatAmounts: boolean
    isEncrypted: boolean;
};

export const DefaultSettings: Settings = {
    currencySymbol: 'cash',
    fiatCurrency: 'USD',
    headerPageIndex: 0,
    hideFiatAmounts: false,
    isEncrypted: false
};