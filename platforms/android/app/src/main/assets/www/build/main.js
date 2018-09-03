webpackJsonp([0],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__persistence_persistence__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var PriceProvider = (function () {
    function PriceProvider(http, persistenceProvider) {
        this.http = http;
        this.persistenceProvider = persistenceProvider;
        this.STORAGEKEY = 'exchageRate';
    }
    PriceProvider.prototype.getPrice = function (cryptoCurrency, fiatCurrency) {
        return __awaiter(this, void 0, void 0, function () {
            var exchangeRate, url, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        exchangeRate = 0;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 5]);
                        url = "https://min-api.cryptocompare.com/data/price?fsym=" + cryptoCurrency + "&tsyms=" + fiatCurrency;
                        return [4 /*yield*/, this.http.get(url).toPromise()];
                    case 2:
                        data = _a.sent();
                        exchangeRate = data[fiatCurrency];
                        this.persistenceProvider.set(this.STORAGEKEY, exchangeRate);
                        return [3 /*break*/, 5];
                    case 3:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [4 /*yield*/, this.persistenceProvider.get(this.STORAGEKEY)];
                    case 4:
                        exchangeRate = _a.sent();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/, exchangeRate];
                }
            });
        });
    };
    PriceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0__persistence_persistence__["a" /* PersistenceProvider */]])
    ], PriceProvider);
    return PriceProvider;
}());

//# sourceMappingURL=price.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__receive_receive__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_price_price__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_bitcoin_cash_bitcoin_cash__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pay_pay__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__transactions_transactions__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__settings_settings__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = (function () {
    function HomePage(navCtrl, modalController, settingsProvider, bitcoinCashProvider, priceProvider) {
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.settingsProvider = settingsProvider;
        this.bitcoinCashProvider = bitcoinCashProvider;
        this.priceProvider = priceProvider;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.calculateNativeBalance();
        this.setQrCode(this.bitcoinCashProvider.getPublicAddress());
    };
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.bitcoinCashProvider.updateBalance()
            .then(function () { return _this.calculateNativeBalance(); });
    };
    HomePage.prototype.refresh = function (refresher) {
        var _this = this;
        this.bitcoinCashProvider.updateBalance()
            .then(function () {
            _this.calculateNativeBalance();
            refresher.complete();
        })
            .catch(function (error) {
            console.log(error);
            refresher.complete();
        });
    };
    HomePage.prototype.calculateNativeBalance = function () {
        var _this = this;
        this.priceProvider.getPrice('BCH', this.settingsProvider.settings.fiatCurrency)
            .then(function (exchageRate) {
            _this.fiatBalance = _this.bitcoinCashProvider.wallet.balance * exchageRate / 100000000;
            if (_this.receiveAmount) {
                _this.bitcoinCashProvider.toBitcionCash(_this.receiveAmount, _this.settingsProvider.settings.currencySymbol)
                    .then(function (value) { return _this.receiveFiatAmount = value * exchageRate; });
            }
            else {
                _this.receiveFiatAmount = null;
            }
        });
    };
    HomePage.prototype.navToPay = function () {
        var payModal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_6__pay_pay__["a" /* PayPage */]);
        payModal.present();
    };
    HomePage.prototype.navToReceive = function () {
        var _this = this;
        if (this.receiveAmount) {
            this.clearReceiveAmount();
        }
        else {
            var receiveModal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_0__receive_receive__["a" /* ReceivePage */]);
            receiveModal.onDidDismiss(function (amounts) {
                _this.receiveAmount = amounts.amount;
                _this.receiveFiatAmount = amounts.fiatAmount;
                _this.updateReceiveAmount();
            });
            receiveModal.present();
        }
    };
    HomePage.prototype.navToTransactions = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__transactions_transactions__["a" /* TransactionsPage */]);
    };
    HomePage.prototype.navToSettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__settings_settings__["a" /* SettingsPage */]);
    };
    HomePage.prototype.updateReceiveAmount = function () {
        var _this = this;
        if (this.receiveAmount) {
            this.bitcoinCashProvider.toBitcionCash(this.receiveAmount, this.settingsProvider.settings.currencySymbol)
                .then(function (amount) {
                var options = {
                    amount: amount
                };
                _this.setQrCode(_this.bitcoinCashProvider.getPublicAddress(), options);
            });
        }
        else {
            this.setQrCode(this.bitcoinCashProvider.getPublicAddress());
            this.receiveFiatAmount = null;
        }
    };
    HomePage.prototype.clearReceiveAmount = function () {
        this.receiveAmount = null;
        this.receiveFiatAmount = null;
        this.setQrCode(this.bitcoinCashProvider.getPublicAddress());
    };
    HomePage.prototype.setQrCode = function (address, options) {
        this.qrCode = this.bitcoinCashProvider.encodeQrCode(address, options);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/jens/Repos/spender.cash/src/pages/home/home.html"*/'<ion-header *ngIf="bitcoinCashProvider.wallet" class="balance" (click)="settingsProvider.settings.hideBalance = !settingsProvider.settings.hideBalance">\n    <div *ngIf="!settingsProvider.settings.hideBalance">\n        <h1>\n            <b>{{ bitcoinCashProvider.getBalance() | currency: settingsProvider.settings.currencySymbol }}</b>\n        </h1>\n        <h6 *ngIf="!settingsProvider.settings.hideFiatAmounts">{{ fiatBalance | currency: settingsProvider.settings.fiatCurrency }}</h6>\n    </div>\n</ion-header>\n\n<ion-content *ngIf="bitcoinCashProvider.wallet" padding>\n    <ion-refresher (ionRefresh)="refresh($event)">\n        <ion-refresher-content pullingIcon="arrow-dropdown" refreshingSpinner="circles">\n        </ion-refresher-content>\n    </ion-refresher>\n    <ion-slides pager>\n        <ion-slide>\n            <div class="pay-button" (click)="navToPay()">\n                <ion-icon name="share-alt"></ion-icon>\n            </div>\n        </ion-slide>\n        <ion-slide>\n            <ion-card class="receive-card">\n                <ion-card-content>\n                    <ngx-qrcode qrc-element-type="url" [qrc-value]="qrCode" qrc-errorCorrectionLevel="L" (click)="navToReceive()">\n                    </ngx-qrcode>\n                    <div *ngIf="this.receiveAmount">\n                        <ion-item text-center>\n                            <p ion-text color="primary">{{ this.receiveAmount | currency: settingsProvider.settings.currencySymbol }}</p>\n                        </ion-item>\n                        <ion-item text-center *ngIf="!settingsProvider.settings.hideFiatAmounts">\n                            <p ion-text>{{ this.receiveFiatAmount | currency: settingsProvider.settings.fiatCurrency }}\n                            </p>\n                        </ion-item>\n                    </div>\n                </ion-card-content>\n            </ion-card>\n        </ion-slide>\n    </ion-slides>˛\n</ion-content>\n\n<ion-footer padding *ngIf="bitcoinCashProvider.wallet">\n    <button ion-button icon-only round float-start (click)="navToTransactions()">\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    <button ion-button icon-only round float-end (click)="navToSettings()">\n        <ion-icon name="settings"></ion-icon>\n    </button>\n</ion-footer>\n\n<ion-content *ngIf="!bitcoinCashProvider.wallet" padding text-center>\n    <button ion-button round (click)="bitcoinCashProvider.createWallet()">\n        Create Wallet...\n    </button>\n</ion-content>'/*ion-inline-end:"/Users/jens/Repos/spender.cash/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["d" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_bitcoin_cash_bitcoin_cash__["a" /* BitcoinCashProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_price_price__["a" /* PriceProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 198;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceivePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_bitcoin_cash_bitcoin_cash__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_price_price__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ReceivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReceivePage = (function () {
    function ReceivePage(viewCtrl, settingsProvider, priceProvider, bitcoinCashProvider) {
        this.viewCtrl = viewCtrl;
        this.settingsProvider = settingsProvider;
        this.priceProvider = priceProvider;
        this.bitcoinCashProvider = bitcoinCashProvider;
    }
    ReceivePage.prototype.ngAfterViewChecked = function () {
        this.amountInput.setFocus();
    };
    ReceivePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss({
            amount: this.amount,
            fiatAmount: this.fiatAmount
        });
    };
    ReceivePage.prototype.updateFiatAmount = function () {
        var _this = this;
        this.bitcoinCashProvider.toBitcionCash(this.amount, this.settingsProvider.settings.currencySymbol)
            .then(function (bch) {
            _this.priceProvider.getPrice("BCH", _this.settingsProvider.settings.fiatCurrency)
                .then(function (exchangeRate) { return _this.fiatAmount = bch * exchangeRate; });
        });
    };
    ReceivePage.prototype.checkAmountInput = function ($event) {
        var newAmount;
        if (this.amount) {
            newAmount = this.amount + $event.key;
        }
        else {
            newAmount = $event.key;
        }
        var intAndFraction = newAmount.split(".");
        var currencySymbol = this.settingsProvider.settings.currencySymbol.toLowerCase();
        //Do not allow ','
        if ($event.key == ",") {
            $event.preventDefault();
        }
        // the new vale has to be a number
        if (isNaN(Number(newAmount))) {
            $event.preventDefault();
        }
        //if the curreny symbol is 'sat' no decimals is allowed
        if (currencySymbol === "sat" && $event.key === ".") {
            $event.preventDefault();
        }
        //if the currency symbol is 'cash' or 'bits' only allow two decimals
        if (currencySymbol === "cash" || currencySymbol == "bits") {
            if (intAndFraction.length == 2 && intAndFraction[1].length > 2) {
                $event.preventDefault();
            }
        }
        //if the currency symbol is 'bch' only allow two decimals
        if (currencySymbol === "bch") {
            if (intAndFraction.length == 2 && intAndFraction[1].length > 8) {
                $event.preventDefault();
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_8" /* ViewChild */])('amountInput'),
        __metadata("design:type", Object)
    ], ReceivePage.prototype, "amountInput", void 0);
    ReceivePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-receive',template:/*ion-inline-start:"/Users/jens/Repos/spender.cash/src/pages/receive/receive.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-buttons start>\n        <button ion-button icon-only large (click)="dismiss()">\n          <ion-icon name="close"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>RECEIVE</ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content>\n    <ion-card>\n      <ion-card-content>\n        <ion-item>\n          <ion-input #amountInput placeholder="Amount..." (keypress)="checkAmountInput($event)" (ionChange)="updateFiatAmount()" [(ngModel)]="amount" type="number"></ion-input>\n          <ion-note item-end color="primary">{{ settingsProvider.settings.currencySymbol }}</ion-note>\n        </ion-item>\n        <ion-item *ngIf="!settingsProvider.settings.hideFiatAmounts">\n            <p ion-text color="light">{{ fiatAmount | currency: settingsProvider.settings.fiatCurrency }}</p>\n            <ion-note item-end color="light">{{ settingsProvider.settings.fiatCurrency }}</ion-note>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>   \n  </ion-content>\n\n  <ion-footer>\n      <button ion-button large full icon-only no-margin (click)="dismiss()" [disabled]="!amount">\n          <ion-icon name="checkmark"></ion-icon>\n      </button>\n  </ion-footer>'/*ion-inline-end:"/Users/jens/Repos/spender.cash/src/pages/receive/receive.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* ViewController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__["a" /* SettingsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__["a" /* SettingsProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__providers_price_price__["a" /* PriceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_price_price__["a" /* PriceProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__providers_bitcoin_cash_bitcoin_cash__["a" /* BitcoinCashProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_bitcoin_cash_bitcoin_cash__["a" /* BitcoinCashProvider */]) === "function" && _d || Object])
    ], ReceivePage);
    return ReceivePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=receive.js.map

/***/ }),

/***/ 242:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 242;

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_settings_settings__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_price_price__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_bitcoin_cash_bitcoin_cash__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PayPage = (function () {
    function PayPage(viewCtrl, settingsProvider, priceProvider, bitcoinCashProvider) {
        this.viewCtrl = viewCtrl;
        this.settingsProvider = settingsProvider;
        this.priceProvider = priceProvider;
        this.bitcoinCashProvider = bitcoinCashProvider;
    }
    PayPage.prototype.ionViewDidLoad = function () {
    };
    PayPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PayPage.prototype.updateFiatAmount = function () {
        var _this = this;
        this.bitcoinCashProvider.toBitcionCash(this.amount, this.settingsProvider.settings.currencySymbol)
            .then(function (bch) {
            _this.priceProvider.getPrice("BCH", _this.settingsProvider.settings.fiatCurrency)
                .then(function (exchangeRate) { return _this.fiatAmount = bch * exchangeRate; });
        });
    };
    PayPage.prototype.checkAmountInput = function ($event) {
        var newAmount;
        if (this.amount) {
            newAmount = this.amount + $event.key;
        }
        else {
            newAmount = $event.key;
        }
        var intAndFraction = newAmount.split(".");
        var currencySymbol = this.settingsProvider.settings.currencySymbol.toLowerCase();
        //Do not allow ','
        if ($event.key == ",") {
            $event.preventDefault();
        }
        // the new vale has to be a number
        if (isNaN(Number(newAmount))) {
            $event.preventDefault();
        }
        //if the curreny symbol is 'sat' no decimals is allowed
        if (currencySymbol === "sat" && $event.key === ".") {
            $event.preventDefault();
        }
        //if the currency symbol is 'cash' or 'bits' only allow two decimals
        if (currencySymbol === "cash" || currencySymbol == "bits") {
            if (intAndFraction.length == 2 && intAndFraction[1].length > 2) {
                $event.preventDefault();
            }
        }
        //if the currency symbol is 'bch' only allow two decimals
        if (currencySymbol === "bch") {
            if (intAndFraction.length == 2 && intAndFraction[1].length > 8) {
                $event.preventDefault();
            }
        }
    };
    PayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-pay',template:/*ion-inline-start:"/Users/jens/Repos/spender.cash/src/pages/pay/pay.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only large (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>PAY</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n        <ion-item>\n            <ion-input placeholder="Recipient..." [(ngModel)]="address"></ion-input>\n            <button ion-button outline icon-only item-end>\n              <ion-icon name="qr-scanner"></ion-icon>\n            </button>\n          </ion-item>      \n      <ion-item>\n        <ion-input placeholder="Amount..." (keypress)="checkAmountInput($event)" (ionChange)="updateFiatAmount()" [(ngModel)]="amount"></ion-input>\n        <ion-note item-end color="primary">{{ settingsProvider.settings.currencySymbol }}</ion-note>\n      </ion-item>\n      <ion-item *ngIf="!settingsProvider.settings.hideFiatAmounts">\n          <p ion-text color="light">{{ fiatAmount | currency: settingsProvider.settings.fiatCurrency }}</p>\n          <ion-note item-end color="light">{{ settingsProvider.settings.fiatCurrency }}</ion-note>\n      </ion-item>\n      \n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<ion-footer>\n    <button ion-button large full icon-only no-margin (click)="dismiss()" [disabled]="!amount || !address">\n        <ion-icon name="checkmark"></ion-icon>\n    </button>\n</ion-footer>'/*ion-inline-end:"/Users/jens/Repos/spender.cash/src/pages/pay/pay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_price_price__["a" /* PriceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_bitcoin_cash_bitcoin_cash__["a" /* BitcoinCashProvider */]])
    ], PayPage);
    return PayPage;
}());

//# sourceMappingURL=pay.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransactionsPage = (function () {
    function TransactionsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TransactionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransactionsPage');
    };
    TransactionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transactions',template:/*ion-inline-start:"/Users/jens/Repos/spender.cash/src/pages/transactions/transactions.html"*/'<!--\n  Generated template for the TransactionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>TRANSACTIONS</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n\n  \n</ion-content>\n'/*ion-inline-end:"/Users/jens/Repos/spender.cash/src/pages/transactions/transactions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], TransactionsPage);
    return TransactionsPage;
}());

//# sourceMappingURL=transactions.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fiat_curreny_fiat_curreny__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__currency_symbol_currency_symbol__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_settings_settings__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams, settingsProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.settingsProvider = settingsProvider;
    }
    SettingsPage.prototype.ionViewDidLeave = function () {
        this.settingsProvider.save();
    };
    SettingsPage.prototype.navToCurrencySymbol = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__currency_symbol_currency_symbol__["a" /* CurrencySymbolPage */]);
    };
    SettingsPage.prototype.navToFiatCurrency = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__fiat_curreny_fiat_curreny__["a" /* FiatCurrenyPage */]);
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/jens/Repos/spender.cash/src/pages/settings/settings.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>SETTINGS</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-list-header>\n      Wallet\n    </ion-list-header>\n    <button ion-item (click)="navToCurrencySymbol()">\n      <ion-label>Currency Symbol</ion-label>\n      <ion-note item-end>{{ settingsProvider.settings.currencySymbol }}</ion-note>\n    </button>\n    <button ion-item (click)="navToFiatCurrency()">\n      <ion-label>Fiat Currency</ion-label>\n      <ion-note item-end>{{ settingsProvider.settings.fiatCurrency }}</ion-note>\n    </button>\n     <ion-item>\n        <ion-label>Hide Fiat Amounts</ion-label>\n        <ion-toggle [(ngModel)]="settingsProvider.settings.hideFiatAmounts"></ion-toggle>\n      </ion-item>\n      <ion-item>\n          <ion-label>Hide Balance</ion-label>\n          <ion-toggle [(ngModel)]="settingsProvider.settings.hideBalance"></ion-toggle>\n        </ion-item>\n    <ion-list-header>\n      Backup\n    </ion-list-header>\n    <button ion-item>\n      <ion-label>Backuup Phrase</ion-label>\n    </button>\n    <button ion-item>\n      <ion-label>Restore </ion-label>\n    </button>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/jens/Repos/spender.cash/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_settings_settings__["a" /* SettingsProvider */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiatCurrenyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FiatCurrenyPage = (function () {
    function FiatCurrenyPage(navCtrl, navParams, settingsProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.settingsProvider = settingsProvider;
    }
    FiatCurrenyPage.prototype.ionViewDidLeave = function () {
        this.settingsProvider.save();
    };
    FiatCurrenyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fiat-curreny',template:/*ion-inline-start:"/Users/jens/Repos/spender.cash/src/pages/settings/fiat-curreny/fiat-curreny.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>CURRENCY SYMBOL</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-list radio-group [(ngModel)]="settingsProvider.settings.fiatCurrency">\n    <ion-item>\n      <ion-label>USD - US Dollar</ion-label>\n      <ion-radio value="USD" checked></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label>SEK - Swedish krona</ion-label>\n      <ion-radio value="SEK"></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label>JPY - Japanese Yen</ion-label>\n      <ion-radio value="JPY"></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label>EUR - Euro</ion-label>\n      <ion-radio value="EUR"></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label>GBP - Pound Sterling</ion-label>\n      <ion-radio value="GBP"></ion-radio>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/jens/Repos/spender.cash/src/pages/settings/fiat-curreny/fiat-curreny.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__["a" /* SettingsProvider */]])
    ], FiatCurrenyPage);
    return FiatCurrenyPage;
}());

//# sourceMappingURL=fiat-curreny.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencySymbolPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_settings_settings__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CurrencySymbolPage = (function () {
    function CurrencySymbolPage(navCtrl, navParams, settingsProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.settingsProvider = settingsProvider;
    }
    CurrencySymbolPage.prototype.ionViewDidLeave = function () {
        this.settingsProvider.save();
    };
    CurrencySymbolPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-currency-symbol',template:/*ion-inline-start:"/Users/jens/Repos/spender.cash/src/pages/settings/currency-symbol/currency-symbol.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>CURRENCY SYMBOL</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-list radio-group [(ngModel)]="settingsProvider.settings.currencySymbol">\n      <ion-item>\n        <ion-label>cash</ion-label>\n        <ion-radio value="cash" checked></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>bits</ion-label>\n        <ion-radio value="bits"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>BCH</ion-label>\n        <ion-radio value="BCH"></ion-radio>\n      </ion-item>\n      <ion-item>\n          <ion-label>sat</ion-label>\n          <ion-radio value="sat"></ion-radio>\n        </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/jens/Repos/spender.cash/src/pages/settings/currency-symbol/currency-symbol.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_settings_settings__["a" /* SettingsProvider */]])
    ], CurrencySymbolPage);
    return CurrencySymbolPage;
}());

//# sourceMappingURL=currency-symbol.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisclaimerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_onboarding_onboarding__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DisclaimerPage = (function () {
    function DisclaimerPage(navCtrl, navParams, onBoardingProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.onBoardingProvider = onBoardingProvider;
        this.accepted = {
            first: false,
            second: false,
            third: false
        };
        this.terms = {
            accepted: false,
        };
    }
    DisclaimerPage.prototype.ionViewDidLoad = function () {
    };
    DisclaimerPage.prototype.confirm = function () {
        this.onBoardingProvider.setDisclaimer(true);
        this.onBoardingProvider.createWallet();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
        this.navCtrl.popToRoot({ animate: false });
    };
    DisclaimerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-disclaimer',template:/*ion-inline-start:"/Users/jens/Repos/spender.cash/src/pages/disclaimer/disclaimer.html"*/'<ion-content padding class="disclaimer">\n  <div class="disclaimer-content">\n    <h1>Disclaimer</h1>\n    <h5>Bitcoin Cash is different...</h5>\n    <br>\n    <ion-list class="checkbox-list" no-lines text-wrap>\n      <ion-item>\n        <ion-label>I understand that my funds are held securely on this device, not by a company.</ion-label>\n        <ion-checkbox [(ngModel)]="accepted.first"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label>I understand that if this app is moved to another device or deleted, my funds can only be recovered with the backup\n          phrase.\n        </ion-label>\n        <ion-checkbox [(ngModel)]="accepted.second"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label>I understand that this software is provided "as is", without warrenty of any kind.</ion-label>\n        <ion-checkbox [(ngModel)]="accepted.third"></ion-checkbox>\n      </ion-item>\n    </ion-list>\n    \n  </div>\n</ion-content>\n<ion-footer>\n    <button ion-button full no-margin [disabled]="!accepted.first || !accepted.second || !accepted.third" (click)="confirm()" translate>Confirm and Get Started</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/jens/Repos/spender.cash/src/pages/disclaimer/disclaimer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_onboarding_onboarding__["a" /* OnBoardingProvider */]])
    ], DisclaimerPage);
    return DisclaimerPage;
}());

//# sourceMappingURL=disclaimer.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnBoardingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bitcoin_cash_bitcoin_cash__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__persistence_persistence__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OnBoardingProvider = (function () {
    function OnBoardingProvider(bitcoinCashProvider, persistenceProvider) {
        this.bitcoinCashProvider = bitcoinCashProvider;
        this.persistenceProvider = persistenceProvider;
    }
    OnBoardingProvider.prototype.setDisclaimer = function (value) {
        this.persistenceProvider.set('agreeDisclaimer', value);
    };
    OnBoardingProvider.prototype.createWallet = function () {
        this.bitcoinCashProvider.createWallet();
    };
    OnBoardingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__bitcoin_cash_bitcoin_cash__["a" /* BitcoinCashProvider */], __WEBPACK_IMPORTED_MODULE_1__persistence_persistence__["a" /* PersistenceProvider */]])
    ], OnBoardingProvider);
    return OnBoardingProvider;
}());

//# sourceMappingURL=onboarding.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(383);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_settings__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__persistence_persistence__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var SettingsProvider = (function () {
    function SettingsProvider(persistence) {
        this.persistence = persistence;
        this.STORAGEKEY = 'settings';
        this.load();
    }
    SettingsProvider.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.persistence.get(this.STORAGEKEY)];
                    case 1:
                        value = _a.sent();
                        if (value) {
                            this.settings = JSON.parse(value);
                        }
                        else {
                            this.settings = __WEBPACK_IMPORTED_MODULE_0__model_settings__["a" /* DefaultSettings */];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsProvider.prototype.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.persistence.set(this.STORAGEKEY, this.settings)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__persistence_persistence__["a" /* PersistenceProvider */]])
    ], SettingsProvider);
    return SettingsProvider;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_receive_receive__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_qrcode2__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_pay_pay__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_transactions_transactions__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_disclaimer_disclaimer__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_settings_currency_symbol_currency_symbol__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_settings_fiat_curreny_fiat_curreny__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_persistence_persistence__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_settings_settings__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_onboarding_onboarding__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_bitcoin_cash_bitcoin_cash__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_price_price__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pipes_currency__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pipes_truncate__ = __webpack_require__(690);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









/* App */

/* Pages */







/* Providers */





/* Pipes */


var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* SpenderApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pay_pay__["a" /* PayPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_transactions_transactions__["a" /* TransactionsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_settings_currency_symbol_currency_symbol__["a" /* CurrencySymbolPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_disclaimer_disclaimer__["a" /* DisclaimerPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_settings_fiat_curreny_fiat_curreny__["a" /* FiatCurrenyPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_receive_receive__["a" /* ReceivePage */],
                __WEBPACK_IMPORTED_MODULE_22__pipes_currency__["a" /* ExtendedCurrencyPipe */],
                __WEBPACK_IMPORTED_MODULE_23__pipes_truncate__["a" /* TruncatePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_qrcode2__["a" /* NgxQRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* SpenderApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* SpenderApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pay_pay__["a" /* PayPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_transactions_transactions__["a" /* TransactionsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_settings_currency_symbol_currency_symbol__["a" /* CurrencySymbolPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_settings_fiat_curreny_fiat_curreny__["a" /* FiatCurrenyPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_disclaimer_disclaimer__["a" /* DisclaimerPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_receive_receive__["a" /* ReceivePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["e" /* DecimalPipe */],
                __WEBPACK_IMPORTED_MODULE_17__providers_persistence_persistence__["a" /* PersistenceProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_settings_settings__["a" /* SettingsProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_onboarding_onboarding__["a" /* OnBoardingProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_bitcoin_cash_bitcoin_cash__["a" /* BitcoinCashProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_price_price__["a" /* PriceProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultSettings; });
;
var DefaultSettings = {
    currencySymbol: 'cash',
    fiatCurrency: 'USD',
    hideBalance: false,
    hideFiatAmounts: false,
    isEncrypted: false
};
//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CordovaStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LocalStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_secure_storage__ = __webpack_require__(386);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var CordovaStorage = (function () {
    function CordovaStorage() {
        this.storageKey = 'storage';
        this.secureStorage = new __WEBPACK_IMPORTED_MODULE_0__ionic_native_secure_storage__["a" /* SecureStorage */]();
    }
    CordovaStorage.prototype.get = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var storage, keys;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.secureStorage.create(this.storageKey)];
                    case 1:
                        storage = _a.sent();
                        return [4 /*yield*/, storage.keys()];
                    case 2:
                        keys = _a.sent();
                        if (!(keys.indexOf(key) > -1)) return [3 /*break*/, 4];
                        return [4 /*yield*/, storage.get(key)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/, null];
                }
            });
        });
    };
    CordovaStorage.prototype.set = function (key, value) {
        return __awaiter(this, void 0, void 0, function () {
            var storage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.secureStorage.create(this.storageKey)];
                    case 1:
                        storage = _a.sent();
                        return [4 /*yield*/, storage.set(key, value)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CordovaStorage.prototype.remove = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var storage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.secureStorage.create(this.storageKey)];
                    case 1:
                        storage = _a.sent();
                        return [4 /*yield*/, storage.remove(key)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return CordovaStorage;
}());

var LocalStorage = (function () {
    function LocalStorage() {
        this.localStorage = (typeof window.localStorage !== "undefined") ? window.localStorage : null;
        if (!this.localStorage)
            throw new Error('localstorage not available');
    }
    LocalStorage.prototype.get = function (key) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            try {
                var value = _this.localStorage.getItem(key);
                resolve(value);
            }
            catch (error) {
                reject(error);
            }
        });
        return promise;
    };
    LocalStorage.prototype.set = function (key, value) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            try {
                _this.localStorage.setItem(key, value);
                resolve();
            }
            catch (error) {
                reject(error);
            }
        });
        return promise;
    };
    LocalStorage.prototype.remove = function (key) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            try {
                _this.localStorage.removeItem(key);
                resolve(key);
            }
            catch (error) {
                reject(error);
            }
        });
        return promise;
    };
    return LocalStorage;
}());

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 476:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 478:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 518:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 521:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BitcoinCashProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings_settings__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__persistence_persistence__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bitbox_cli_lib_bitbox_cli__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bitbox_cli_lib_bitbox_cli___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_bitbox_cli_lib_bitbox_cli__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var BitcoinCashProvider = (function () {
    function BitcoinCashProvider(persistenceProvider, settingsProvider) {
        this.persistenceProvider = persistenceProvider;
        this.settingsProvider = settingsProvider;
        this.STORAGEKEY = 'mnemonic';
        this.BITBOX = new __WEBPACK_IMPORTED_MODULE_3_bitbox_cli_lib_bitbox_cli__["default"]();
    }
    BitcoinCashProvider.prototype.initilizeWallet = function () {
        return __awaiter(this, void 0, void 0, function () {
            var mnemonic, rootSeed, masterNode, i, derivationPath, account, address, i, derivationPath, account, address;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('initilizeWallet');
                        return [4 /*yield*/, this.persistenceProvider.get(this.STORAGEKEY)];
                    case 1:
                        mnemonic = _a.sent();
                        if (mnemonic) {
                            this.wallet = {
                                mnemonic: mnemonic,
                                publicAddresses: [],
                                changeAddresses: [],
                                uxtos: [],
                                balance: 0
                            };
                            rootSeed = this.BITBOX.Mnemonic.toSeed(mnemonic);
                            masterNode = this.BITBOX.HDNode.fromSeed(rootSeed, "bitcoincash");
                            // public addresses
                            this.wallet.publicAddresses = [];
                            for (i = 19; i < 20; i++) {
                                derivationPath = "m/44'/145'/0'/0/" + i;
                                account = masterNode.derivePath(derivationPath);
                                address = {
                                    derivationPath: derivationPath,
                                    address: this.BITBOX.HDNode.toCashAddress(account)
                                };
                                this.wallet.publicAddresses.push(address);
                            }
                            // change addresses
                            this.wallet.changeAddresses = [];
                            for (i = 0; i < 1; i++) {
                                derivationPath = "m/44'/145'/0'/1/" + i;
                                account = masterNode.derivePath(derivationPath);
                                address = {
                                    derivationPath: derivationPath,
                                    address: this.BITBOX.HDNode.toCashAddress(account)
                                };
                                this.wallet.changeAddresses.push(address);
                            }
                        }
                        else {
                            this.wallet = null;
                        }
                        return [2 /*return*/, this.wallet];
                }
            });
        });
    };
    BitcoinCashProvider.prototype.saveWallet = function () {
        this.persistenceProvider.set(this.STORAGEKEY, this.wallet.mnemonic);
    };
    BitcoinCashProvider.prototype.createWallet = function () {
        if (!this.wallet) {
            this.wallet = {
                mnemonic: "range profit front athlete demise inject armed become kick okay love diet",
                publicAddresses: [],
                changeAddresses: [],
                uxtos: [],
                balance: 0
            };
            this.saveWallet();
        }
    };
    BitcoinCashProvider.prototype.encodeQrCode = function (address, options) {
        return this.BITBOX.BitcoinCash.encodeBIP21(address, options);
    };
    BitcoinCashProvider.prototype.decodeQrCode = function (url) {
        return this.BITBOX.BitcoinCash.decodeBIP21(url);
    };
    BitcoinCashProvider.prototype.updateBalance = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var balance, uxtos, i, result, i, result, i, result, i, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        balance = 0;
                        uxtos = [];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.wallet.publicAddresses.length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.BITBOX.Address.utxo(this.wallet.publicAddresses[i].address)];
                    case 2:
                        result = _a.sent();
                        if (!result) {
                            return [2 /*return*/, this.wallet];
                        }
                        result.forEach(function (u) {
                            uxtos.push({
                                txid: u.txid,
                                vout: u.vout,
                                address: u.cashAddress,
                                satoshis: u.satoshis,
                                height: u.height,
                                confirmations: u.confirmations
                            });
                            balance += u.satoshis;
                        });
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        i = 0;
                        _a.label = 5;
                    case 5:
                        if (!(i < this.wallet.publicAddresses.length)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.BITBOX.Address.unconfirmed(this.wallet.publicAddresses[i].address)];
                    case 6:
                        result = _a.sent();
                        if (!result) {
                            return [2 /*return*/, this.wallet];
                        }
                        result.forEach(function (u) {
                            uxtos.push({
                                txid: u.txid,
                                vout: u.vout,
                                address: u.cashAddress,
                                satoshis: u.satoshis,
                                height: null,
                                confirmations: u.confirmations
                            });
                            balance += u.satoshis;
                        });
                        _a.label = 7;
                    case 7:
                        i++;
                        return [3 /*break*/, 5];
                    case 8:
                        i = 0;
                        _a.label = 9;
                    case 9:
                        if (!(i < this.wallet.changeAddresses.length)) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.BITBOX.Address.utxo(this.wallet.changeAddresses[i].address)];
                    case 10:
                        result = _a.sent();
                        if (!result) {
                            return [2 /*return*/, this.wallet];
                        }
                        result.forEach(function (u) {
                            _this.wallet.uxtos.push({
                                txid: u.txid,
                                vout: u.vout,
                                address: u.cashAddress,
                                satoshis: u.satoshis,
                                height: u.height,
                                confirmations: u.confirmations
                            });
                            balance += u.satoshis;
                        });
                        _a.label = 11;
                    case 11:
                        i++;
                        return [3 /*break*/, 9];
                    case 12:
                        ;
                        i = 0;
                        _a.label = 13;
                    case 13:
                        if (!(i < this.wallet.changeAddresses.length)) return [3 /*break*/, 16];
                        return [4 /*yield*/, this.BITBOX.Address.unconfirmed(this.wallet.changeAddresses[i].address)];
                    case 14:
                        result = _a.sent();
                        if (!result) {
                            return [2 /*return*/, this.wallet];
                        }
                        result.forEach(function (u) {
                            _this.wallet.uxtos.push({
                                txid: u.txid,
                                vout: u.vout,
                                address: u.cashAddress,
                                satoshis: u.satoshis,
                                height: null,
                                confirmations: u.confirmations
                            });
                            console.log('change unconfirmed: ' + u.satoshis);
                            balance += u.satoshis;
                        });
                        _a.label = 15;
                    case 15:
                        i++;
                        return [3 /*break*/, 13];
                    case 16:
                        ;
                        this.wallet.uxtos = uxtos;
                        this.wallet.balance = balance;
                        return [2 /*return*/, this.wallet];
                }
            });
        });
    };
    BitcoinCashProvider.prototype.getPublicAddress = function () {
        return this.wallet.publicAddresses[Math.floor(Math.random() * this.wallet.publicAddresses.length)].address;
    };
    BitcoinCashProvider.prototype.getBalance = function () {
        switch (this.settingsProvider.settings.currencySymbol.toLowerCase()) {
            case "sat":
                return this.wallet.balance;
            case "cash":
                return this.wallet.balance / 100;
            case "bits":
                return this.wallet.balance / 100;
            case "bch":
                return this.wallet.balance / 100000000;
            default:
                return this.wallet.balance;
        }
    };
    BitcoinCashProvider.prototype.toBitcionCash = function (value, symbol) {
        return __awaiter(this, void 0, void 0, function () {
            var satoshis;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        symbol = symbol.toLowerCase();
                        satoshis = 0;
                        switch (symbol) {
                            case "cash":
                                satoshis = Math.round(value * 100);
                                break;
                            case "bits":
                                satoshis = Math.round(value * 100);
                                break;
                            case "sat":
                                satoshis = Math.round(value);
                                break;
                            case "bch":
                                satoshis = Math.round(value * 100000000);
                                break;
                            default:
                                throw new Error("Invalid currency symbol");
                        }
                        return [4 /*yield*/, this.BITBOX.BitcoinCash.toBitcoinCash(satoshis)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BitcoinCashProvider.prototype.listen = function () {
        var socket = new this.BITBOX.Socket('https://rest.bitcoin.com');
        socket.listen('transactions', function (message) {
            console.log(message);
        });
    };
    BitcoinCashProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__persistence_persistence__["a" /* PersistenceProvider */],
            __WEBPACK_IMPORTED_MODULE_0__settings_settings__["a" /* SettingsProvider */]])
    ], BitcoinCashProvider);
    return BitcoinCashProvider;
}());

//# sourceMappingURL=bitcoin-cash.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersistenceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__storage__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PersistenceProvider = (function () {
    function PersistenceProvider(platform) {
        this.platform = platform;
        if (this.platform.is('cordova')) {
            this.storage = new __WEBPACK_IMPORTED_MODULE_0__storage__["a" /* CordovaStorage */]();
        }
        else {
            this.storage = new __WEBPACK_IMPORTED_MODULE_0__storage__["b" /* LocalStorage */]();
        }
    }
    PersistenceProvider.prototype.get = function (key) {
        return this.storage.get(key);
    };
    PersistenceProvider.prototype.set = function (key, value) {
        return this.storage.set(key, JSON.stringify(value));
    };
    PersistenceProvider.prototype.remove = function (key) {
        return this.storage.remove(key);
    };
    PersistenceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Platform */]])
    ], PersistenceProvider);
    return PersistenceProvider;
}());

//# sourceMappingURL=persistence.js.map

/***/ }),

/***/ 657:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpenderApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_bitcoin_cash_bitcoin_cash__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_home__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_disclaimer_disclaimer__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_persistence_persistence__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_settings_settings__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var SpenderApp = (function () {
    function SpenderApp(platform, statusBar, splashScreen, settingsProvider, persistenceProvider, bitcoinCashProvider) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.settingsProvider = settingsProvider;
        this.persistenceProvider = persistenceProvider;
        this.bitcoinCashProvider = bitcoinCashProvider;
        this.agreeDisclaimer = false;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.initilaze()
                .then(function () { return _this.splashScreen.hide(); });
        });
    }
    SpenderApp.prototype.initilaze = function () {
        return __awaiter(this, void 0, void 0, function () {
            var agreed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.settingsProvider.load()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.bitcoinCashProvider.initilizeWallet()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.bitcoinCashProvider.updateBalance()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.persistenceProvider.get("agreeDisclaimer")];
                    case 4:
                        agreed = _a.sent();
                        if (!agreed) {
                            this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_disclaimer_disclaimer__["a" /* DisclaimerPage */];
                        }
                        else {
                            this.rootPage = __WEBPACK_IMPORTED_MODULE_1__pages_home_home__["a" /* HomePage */];
                        }
                        if (this.platform.is("cordova")) {
                            this.statusBar.overlaysWebView(false);
                            this.statusBar.styleLightContent();
                            this.statusBar.backgroundColorByHexString("#3e74d1");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SpenderApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/jens/Repos/spender.cash/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/jens/Repos/spender.cash/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_persistence_persistence__["a" /* PersistenceProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_bitcoin_cash_bitcoin_cash__["a" /* BitcoinCashProvider */]])
    ], SpenderApp);
    return SpenderApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtendedCurrencyPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(42);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ExtendedCurrencyPipe = (function (_super) {
    __extends(ExtendedCurrencyPipe, _super);
    function ExtendedCurrencyPipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtendedCurrencyPipe.prototype.transform = function (value, symbol) {
        var result;
        switch (symbol) {
            case "sat":
                result = value + " sat";
                break;
            case "bits":
                result = parseFloat(value).toFixed(2) + " bits";
                break;
            case "cash":
                result = parseFloat(value).toFixed(2) + " cash";
                break;
            case "BCH":
                result = parseFloat(value).toFixed(8) + " BCH";
                break;
            case "SEK":
                if (value) {
                    result = parseFloat(value).toFixed(2) + " kr";
                }
                break;
            default:
                result = _super.prototype.transform.call(this, value, symbol);
                break;
        }
        return result;
    };
    ExtendedCurrencyPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'currency'
        })
    ], ExtendedCurrencyPipe);
    return ExtendedCurrencyPipe;
}(__WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CurrencyPipe */]));

//# sourceMappingURL=currency.js.map

/***/ }),

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TruncatePipe = (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, limit, completeWords, ellipsis) {
        if (limit === void 0) { limit = 25; }
        if (completeWords === void 0) { completeWords = false; }
        if (ellipsis === void 0) { ellipsis = '...'; }
        if (completeWords) {
            limit = value.substr(0, 13).lastIndexOf(' ');
        }
        return "" + value.substr(0, limit) + ellipsis;
    };
    TruncatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'truncate'
        })
    ], TruncatePipe);
    return TruncatePipe;
}());

//# sourceMappingURL=truncate.js.map

/***/ })

},[361]);
//# sourceMappingURL=main.js.map