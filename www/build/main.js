webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_settings__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__persistence_persistence__ = __webpack_require__(73);
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



var SettingsProvider = (function () {
    function SettingsProvider(persistence) {
        this.persistence = persistence;
        this.STORAGEKEY = 'settings';
        this.load();
    }
    SettingsProvider.prototype.load = function () {
        var _this = this;
        this.persistence.get(this.STORAGEKEY)
            .then(function (value) {
            try {
                if (value) {
                    return JSON.parse(value);
                }
                else {
                    return __WEBPACK_IMPORTED_MODULE_0__model_settings__["a" /* DefaultSettings */];
                }
            }
            catch (error) {
                console.log(error);
                return __WEBPACK_IMPORTED_MODULE_0__model_settings__["a" /* DefaultSettings */];
            }
        })
            .then(function (settings) { return _this.settings = settings; });
    };
    SettingsProvider.prototype.save = function () {
        this.persistence.set(this.STORAGEKEY, this.settings);
    };
    SettingsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__persistence_persistence__["a" /* PersistenceProvider */]])
    ], SettingsProvider);
    return SettingsProvider;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_bitcoin_cash_bitcoin_cash__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_settings_settings__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pay_pay__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__transactions_transactions__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings_settings__ = __webpack_require__(351);
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
    function HomePage(navCtrl, settingsProvider, bitcoinCashProvider) {
        this.navCtrl = navCtrl;
        this.settingsProvider = settingsProvider;
        this.bitcoinCashProvider = bitcoinCashProvider;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.bitcoinCashProvider.initilizeWallet()
            .then(function () {
            _this.setQrCode(_this.bitcoinCashProvider.getPublicAddress());
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.refresh = function (refresher) {
        try {
            this.bitcoinCashProvider.updateBalance()
                .then(function () { return refresher.complete(); });
        }
        catch (error) {
            console.log(error);
        }
    };
    HomePage.prototype.calculateNativeBalance = function () {
        this.nativeBalance = 0;
    };
    HomePage.prototype.navToPay = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pay_pay__["a" /* PayPage */]);
    };
    HomePage.prototype.navToTransactions = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__transactions_transactions__["a" /* TransactionsPage */]);
    };
    HomePage.prototype.navToSettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__settings_settings__["a" /* SettingsPage */]);
    };
    HomePage.prototype.setQrCode = function (address, options) {
        this.qrCode = this.bitcoinCashProvider.encodeBIP21(address, options);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/jens/Repos/spender.cash/src/pages/home/home.html"*/'<ion-content *ngIf="bitcoinCashProvider.wallet" padding>\n    <ion-refresher (ionRefresh)="refresh($event)">\n            <ion-refresher-content\n                pullingIcon="arrow-dropdown"\n                refreshingSpinner="circles">\n            </ion-refresher-content>\n            </ion-refresher>\n    <ion-grid>\n        <ion-row >\n            <ion-col>\n                    <div class="balance" *ngIf="!settingsProvider.settings.hideBalance">\n                            <h5>{{ bitcoinCashProvider.wallet.balance | currency: settingsProvider.settings.currencySymbol }}</h5>\n                            <hr>\n                            <h6 ion-text color="light">{{ nativeBalance | currency: settingsProvider.settings.nativeCurrency }}</h6>\n                        </div>\n                \n            </ion-col>\n        </ion-row>\n        <ion-row class="slides">\n            <ion-col>\n                    <ion-slides pager>\n                            <ion-slide>\n                                <div class="pay-button" (click)="navToPay()">\n                                    <ion-icon name="share-alt"></ion-icon>\n                                </div>\n        \n                            </ion-slide>\n                            <ion-slide>\n                                <ngx-qrcode qrc-element-type="url" [qrc-value]="qrCode" qrc-errorCorrectionLevel="L">\n                                </ngx-qrcode>\n                            </ion-slide>\n                        </ion-slides>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <button ion-button icon-only round (click)="navToTransactions()">\n                    <ion-icon name="menu"></ion-icon>\n                </button>\n            </ion-col>\n            <ion-col col-auto>\n                <button ion-button icon-only round (click)="navToSettings()">\n                    <ion-icon name="settings"></ion-icon>\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n\n<ion-content *ngIf="!bitcoinCashProvider.wallet" padding text-center>\n    <button ion-button round (click)="bitcoinCashProvider.createWallet()">\n        Create Wallet...\n    </button>\n</ion-content>'/*ion-inline-end:"/Users/jens/Repos/spender.cash/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__providers_settings_settings__["a" /* SettingsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_settings_settings__["a" /* SettingsProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__providers_bitcoin_cash_bitcoin_cash__["a" /* BitcoinCashProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_bitcoin_cash_bitcoin_cash__["a" /* BitcoinCashProvider */]) === "function" && _c || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BitcoinCashProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__persistence_persistence__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bitbox_cli_lib_bitbox_cli__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bitbox_cli_lib_bitbox_cli___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bitbox_cli_lib_bitbox_cli__);
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
    function BitcoinCashProvider(persistenceProvider) {
        this.persistenceProvider = persistenceProvider;
        this.STORAGEKEY = 'mnemonic';
        this.BITBOX = new __WEBPACK_IMPORTED_MODULE_2_bitbox_cli_lib_bitbox_cli__["default"]();
        //this.listen();
    }
    BitcoinCashProvider.prototype.initilizeWallet = function () {
        return __awaiter(this, void 0, void 0, function () {
            var mnemonic, rootSeed, masterNode, i, derivationPath, account, address, i, derivationPath, account, address;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.persistenceProvider.get(this.STORAGEKEY)];
                    case 1:
                        mnemonic = _a.sent();
                        if (!mnemonic) return [3 /*break*/, 3];
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
                        for (i = 0; i < 20; i++) {
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
                        return [4 /*yield*/, this.updateBalance()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.wallet = null;
                        _a.label = 4;
                    case 4: return [2 /*return*/, this.wallet];
                }
            });
        });
    };
    BitcoinCashProvider.prototype.saveWallet = function () {
        this.persistenceProvider.set(this.STORAGEKEY, this.wallet.mnemonic);
    };
    BitcoinCashProvider.prototype.createWallet = function () {
        if (!this.wallet) {
            this.wallet.mnemonic = "range profit front athlete demise inject armed become kick okay love diet";
            this.saveWallet();
        }
    };
    BitcoinCashProvider.prototype.encodeBIP21 = function (address, options) {
        return this.BITBOX.BitcoinCash.encodeBIP21(address, options);
    };
    BitcoinCashProvider.prototype.decodeBIP21 = function (url) {
        return this.BITBOX.BitcoinCash.decodeBIP21(url);
    };
    BitcoinCashProvider.prototype.updateBalance = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var balance, uxtos;
            return __generator(this, function (_a) {
                balance = 0;
                uxtos = [];
                this.wallet.publicAddresses.forEach(function (address) { return __awaiter(_this, void 0, void 0, function () {
                    var result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.BITBOX.Address.utxo(address.address)];
                            case 1:
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
                                return [2 /*return*/];
                        }
                    });
                }); });
                this.wallet.publicAddresses.forEach(function (address) { return __awaiter(_this, void 0, void 0, function () {
                    var result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.BITBOX.Address.unconfirmed(address.address)];
                            case 1:
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
                                return [2 /*return*/];
                        }
                    });
                }); });
                this.wallet.publicAddresses.forEach(function (address) { return __awaiter(_this, void 0, void 0, function () {
                    var result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.BITBOX.Address.utxo(address.address)];
                            case 1:
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
                                return [2 /*return*/];
                        }
                    });
                }); });
                this.wallet.publicAddresses.forEach(function (address) { return __awaiter(_this, void 0, void 0, function () {
                    var result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.BITBOX.Address.unconfirmed(address.address)];
                            case 1:
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
                                return [2 /*return*/];
                        }
                    });
                }); });
                this.wallet.balance = balance;
                this.wallet.uxtos = uxtos;
                return [2 /*return*/, this.wallet];
            });
        });
    };
    BitcoinCashProvider.prototype.getPublicAddress = function () {
        return this.wallet.publicAddresses[Math.floor(Math.random() * this.wallet.publicAddresses.length)].address;
    };
    BitcoinCashProvider.prototype.listen = function () {
        var socket = new this.BITBOX.Socket('https://rest.bitcoin.com');
        socket.listen('transactions', function (message) {
            console.log(message);
        });
    };
    BitcoinCashProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__persistence_persistence__["a" /* PersistenceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__persistence_persistence__["a" /* PersistenceProvider */]) === "function" && _a || Object])
    ], BitcoinCashProvider);
    return BitcoinCashProvider;
    var _a;
}());

//# sourceMappingURL=bitcoin-cash.js.map

/***/ }),

/***/ 195:
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
webpackEmptyAsyncContext.id = 195;

/***/ }),

/***/ 236:
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
webpackEmptyAsyncContext.id = 236;

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
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
 * Generated class for the PayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PayPage = (function () {
    function PayPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PayPage.prototype.ionViewDidLoad = function () {
    };
    PayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pay',template:/*ion-inline-start:"/Users/jens/Repos/spender.cash/src/pages/pay/pay.html"*/'<!--\n  Generated template for the PayPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>PAY</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jens/Repos/spender.cash/src/pages/pay/pay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], PayPage);
    return PayPage;
}());

//# sourceMappingURL=pay.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], TransactionsPage);
    return TransactionsPage;
}());

//# sourceMappingURL=transactions.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__currency_symbol_currency_symbol__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__ = __webpack_require__(103);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__currency_symbol_currency_symbol__["a" /* CurrencySymbolPage */], {});
    };
    SettingsPage.prototype.navToNativeCurrency = function () {
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/jens/Repos/spender.cash/src/pages/settings/settings.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>SETTINGS</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-list-header>\n      Wallet\n    </ion-list-header>\n    <button ion-item (click)="navToCurrencySymbol()">\n      <ion-label>Currency Symbol</ion-label>\n      <ion-note item-end>{{ settingsProvider.settings.currencySymbol }}</ion-note>\n    </button>\n    <button ion-item (click)="navToNativeCurrency()">\n        <ion-label>Native Currency</ion-label>\n        <ion-note item-end>{{ settingsProvider.settings.nativeCurrency }}</ion-note>\n      </button>\n    <ion-item>\n        <ion-label>Hide Balance</ion-label>\n        <ion-toggle [(ngModel)]="settingsProvider.settings.hideBalance"></ion-toggle>\n      </ion-item>\n    <ion-list-header>\n      Backup\n    </ion-list-header>\n    <button ion-item (click)="navToCurrencySymbol()">\n        <ion-label>Backuup Phrase</ion-label>\n      </button>\n      <button ion-item (click)="navToCurrencySymbol()">\n          <ion-label>Restore </ion-label>\n        </button>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/jens/Repos/spender.cash/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__["a" /* SettingsProvider */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencySymbolPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_settings_settings__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_settings_settings__["a" /* SettingsProvider */]])
    ], CurrencySymbolPage);
    return CurrencySymbolPage;
}());

//# sourceMappingURL=currency-symbol.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisclaimerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_onboarding_onboarding__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(36);
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
            selector: 'page-disclaimer',template:/*ion-inline-start:"/Users/jens/Repos/spender.cash/src/pages/disclaimer/disclaimer.html"*/'<ion-content padding class="disclaimer">\n  <div class="disclaimer-content">\n    <h1>Disclaimer</h1>\n    <h5>Bitcoin Cash is different...</h5>\n    <br>\n    <ion-list class="checkbox-list" no-lines text-wrap>\n      <ion-item>\n        <ion-label>I understand that my funds are held securely on this device, not by a company.</ion-label>\n        <ion-checkbox [(ngModel)]="accepted.first"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label>I understand that if this app is moved to another device or deleted, my funds can only be recovered with the backup\n          phrase.\n        </ion-label>\n        <ion-checkbox [(ngModel)]="accepted.second"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label>I understand that this software is provided "as is", without warrenty of any kind.</ion-label>\n        <ion-checkbox [(ngModel)]="accepted.third"></ion-checkbox>\n      </ion-item>\n    </ion-list>\n    <br>\n    <button ion-button block [disabled]="!accepted.first || !accepted.second || !accepted.third" (click)="confirm()" translate>Confirm and Get Started</button>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/jens/Repos/spender.cash/src/pages/disclaimer/disclaimer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_onboarding_onboarding__["a" /* OnBoardingProvider */]])
    ], DisclaimerPage);
    return DisclaimerPage;
}());

//# sourceMappingURL=disclaimer.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnBoardingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bitcoin_cash_bitcoin_cash__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__persistence_persistence__ = __webpack_require__(73);
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

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(379);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_qrcode2__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_pay_pay__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_transactions_transactions__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_disclaimer_disclaimer__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_settings_currency_symbol_currency_symbol__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_persistence_persistence__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_settings_settings__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_onboarding_onboarding__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_bitcoin_cash_bitcoin_cash__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_currency__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pipes_truncate__ = __webpack_require__(681);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* SpenderApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_pay_pay__["a" /* PayPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_transactions_transactions__["a" /* TransactionsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_settings_currency_symbol_currency_symbol__["a" /* CurrencySymbolPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_disclaimer_disclaimer__["a" /* DisclaimerPage */],
                __WEBPACK_IMPORTED_MODULE_17__pipes_currency__["a" /* ExtendedCurrencyPipe */],
                __WEBPACK_IMPORTED_MODULE_18__pipes_truncate__["a" /* TruncatePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_qrcode2__["a" /* NgxQRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* SpenderApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* SpenderApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_pay_pay__["a" /* PayPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_transactions_transactions__["a" /* TransactionsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_settings_currency_symbol_currency_symbol__["a" /* CurrencySymbolPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_disclaimer_disclaimer__["a" /* DisclaimerPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__providers_persistence_persistence__["a" /* PersistenceProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_settings_settings__["a" /* SettingsProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_onboarding_onboarding__["a" /* OnBoardingProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_bitcoin_cash_bitcoin_cash__["a" /* BitcoinCashProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpenderApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_home_home__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_disclaimer_disclaimer__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_persistence_persistence__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SpenderApp = (function () {
    function SpenderApp(platform, statusBar, splashScreen, persistenceProvider) {
        var _this = this;
        this.agreeDisclaimer = false;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            //Check Disclaimer
            persistenceProvider.get('agreeDisclaimer')
                .then(function (agreed) {
                if (!agreed) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_1__pages_disclaimer_disclaimer__["a" /* DisclaimerPage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_home_home__["a" /* HomePage */];
                }
            });
        });
    }
    SpenderApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/jens/Repos/spender.cash/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/jens/Repos/spender.cash/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_2__providers_persistence_persistence__["a" /* PersistenceProvider */]])
    ], SpenderApp);
    return SpenderApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CordovaStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LocalStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_secure_storage__ = __webpack_require__(455);

var CordovaStorage = (function () {
    function CordovaStorage() {
        this.storageKey = 'storage';
        this.secureStorage = new __WEBPACK_IMPORTED_MODULE_0__ionic_native_secure_storage__["a" /* SecureStorage */]();
    }
    CordovaStorage.prototype.get = function (key) {
        return this.secureStorage.create(this.storageKey)
            .then(function (storage) { return storage.get(key); })
            .then(function (value) { return value; });
    };
    CordovaStorage.prototype.set = function (key, value) {
        return this.secureStorage.create(this.storageKey)
            .then(function (storage) { return storage.set(key, value); })
            .then(function (value) { return value; });
    };
    CordovaStorage.prototype.remove = function (key) {
        return this.secureStorage.create(this.storageKey)
            .then(function (storage) { return storage.remove(key); })
            .then(function (value) { return value; });
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

/***/ 496:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 498:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 537:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 540:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultSettings; });
;
var DefaultSettings = {
    currencySymbol: 'cash',
    nativeCurrency: 'USD',
    hideBalance: false,
    isEncrypted: false
};
//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtendedCurrencyPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(55);
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
                result = value / 100 + " bits";
                break;
            case "cash":
                result = value / 100 + " cash";
                break;
            case "BCH":
                result = value / 100000000 + " BCH";
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

/***/ 681:
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

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersistenceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__storage__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Platform */]])
    ], PersistenceProvider);
    return PersistenceProvider;
}());

//# sourceMappingURL=persistence.js.map

/***/ })

},[355]);
//# sourceMappingURL=main.js.map