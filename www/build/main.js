webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 100;

/***/ }),

/***/ 101:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 101;

/***/ }),

/***/ 102:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 102;

/***/ }),

/***/ 104:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 104;

/***/ }),

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 108;

/***/ }),

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 109;

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_settings__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__persistence_persistence__ = __webpack_require__(75);
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__persistence_persistence__["a" /* PersistenceProvider */]])
    ], SettingsProvider);
    return SettingsProvider;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 145:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 145;

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 147;

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 165;

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_wallet_wallet__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_settings_settings__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_umd__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_umd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ionic_angular_umd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pay_pay__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__transactions_transactions__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings_settings__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bitbox_cli_lib_bitbox_cli__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bitbox_cli_lib_bitbox_cli___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_bitbox_cli_lib_bitbox_cli__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_transactions_transactions__ = __webpack_require__(390);
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
    function HomePage(navCtrl, settingsProvider, walletProvider, transactionProvider) {
        this.navCtrl = navCtrl;
        this.settingsProvider = settingsProvider;
        this.walletProvider = walletProvider;
        this.transactionProvider = transactionProvider;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.walletProvider.load().then(function (wallet) {
            _this.calculateNativeBalance();
            _this.setQrCode(wallet.getPublicAddress());
        });
    };
    HomePage.prototype.calculateNativeBalance = function () {
        /*     let BITBOX =  new BITBOXCli.default();
            BITBOX.Price.current(this.settingsProvider.settings.nativeCurrency).then(
              result => {
                this.nativeBalance = result * this.walletProvider.wallet.balance / 100000000;
              },
              error => {
                this.nativeBalance = 0;
                console.log(error)
              }); */
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
        var BITBOX = new __WEBPACK_IMPORTED_MODULE_7_bitbox_cli_lib_bitbox_cli__["default"]();
        this.qrCode = BITBOX.BitcoinCash.encodeBIP21(address, options);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/jens/Repos/spender.cash/src/pages/home/home.html"*/'<ion-content *ngIf="walletProvider.wallet" padding>\n    <ion-grid>\n        <ion-row >\n            <ion-col>\n                    <div class="balance" *ngIf="!settingsProvider.settings.hideBalance">\n                            <h5>{{ walletProvider.wallet.balance | currency: settingsProvider.settings.currencySymbol }}</h5>\n                            <hr>\n                            <h6 ion-text color="light">{{ nativeBalance | currency: settingsProvider.settings.nativeCurrency }}</h6>\n                        </div>\n                \n            </ion-col>\n        </ion-row>\n        <ion-row class="slides">\n            <ion-col>\n                    <ion-slides pager>\n                            <ion-slide>\n                                <div class="pay-button" (click)="navToPay()">\n                                    <ion-icon name="share-alt"></ion-icon>\n                                </div>\n        \n                            </ion-slide>\n                            <ion-slide>\n                                <ngx-qrcode qrc-element-type="url" [qrc-value]="qrCode" qrc-errorCorrectionLevel="L">\n                                </ngx-qrcode>\n                            </ion-slide>\n                        </ion-slides>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <button ion-button icon-only round (click)="navToTransactions()">\n                    <ion-icon name="menu"></ion-icon>\n                </button>\n            </ion-col>\n            <ion-col col-auto>\n                <button ion-button icon-only round (click)="navToSettings()">\n                    <ion-icon name="settings"></ion-icon>\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n\n<ion-content *ngIf="!walletProvider.wallet" padding text-center>\n    <button ion-button round (click)="walletProvider.create()">\n        Create Wallet...\n    </button>\n</ion-content>'/*ion-inline-end:"/Users/jens/Repos/spender.cash/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_umd__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_wallet_wallet__["a" /* WalletProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_transactions_transactions__["a" /* TransactionProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_wallet__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__persistence_persistence__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bitbox_cli_lib_bitbox_cli__ = __webpack_require__(111);
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




var WalletProvider = (function () {
    function WalletProvider(persistenceProvider) {
        this.persistenceProvider = persistenceProvider;
        this.STORAGEKEY = 'mnemonic';
        this.BITBOX = new __WEBPACK_IMPORTED_MODULE_3_bitbox_cli_lib_bitbox_cli__["default"]();
    }
    WalletProvider.prototype.load = function () {
        var _this = this;
        return this.persistenceProvider.get(this.STORAGEKEY)
            .then(function (mnemonic) {
            if (mnemonic) {
                _this.wallet = new __WEBPACK_IMPORTED_MODULE_0__model_wallet__["a" /* Wallet */](mnemonic);
                return _this.wallet;
            }
            else {
                _this.wallet = null;
                return null;
            }
        }).then(function (wallet) { return wallet; });
    };
    WalletProvider.prototype.save = function () {
        this.persistenceProvider.set(this.STORAGEKEY, this.wallet.mnemonic);
    };
    WalletProvider.prototype.create = function () {
        if (!this.wallet) {
            this.wallet = new __WEBPACK_IMPORTED_MODULE_0__model_wallet__["a" /* Wallet */]("range profit front athlete demise inject armed become kick okay love diet");
            this.save();
        }
    };
    WalletProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__persistence_persistence__["a" /* PersistenceProvider */]])
    ], WalletProvider);
    return WalletProvider;
}());

//# sourceMappingURL=wallet.js.map

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 22;

/***/ }),

/***/ 221:
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
webpackEmptyAsyncContext.id = 221;

/***/ }),

/***/ 222:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 222;

/***/ }),

/***/ 223:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 223;

/***/ }),

/***/ 247:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 247;

/***/ }),

/***/ 255:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 255;

/***/ }),

/***/ 266:
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
webpackEmptyAsyncContext.id = 266;

/***/ }),

/***/ 272:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 272;

/***/ }),

/***/ 274:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 274;

/***/ }),

/***/ 276:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 276;

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 28;

/***/ }),

/***/ 281:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 281;

/***/ }),

/***/ 283:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 283;

/***/ }),

/***/ 287:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 287;

/***/ }),

/***/ 297:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 297;

/***/ }),

/***/ 31:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 31;

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 33;

/***/ }),

/***/ 34:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 34;

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_umd__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_umd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_umd__);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pay',template:/*ion-inline-start:"/Users/jens/Repos/spender.cash/src/pages/pay/pay.html"*/'<!--\n  Generated template for the PayPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>PAY</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jens/Repos/spender.cash/src/pages/pay/pay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_umd__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular_umd__["NavParams"]])
    ], PayPage);
    return PayPage;
}());

//# sourceMappingURL=pay.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_umd__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_umd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_umd__);
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
 * Generated class for the TransactionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransactionsPage = (function () {
    function TransactionsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TransactionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransactionsPage');
    };
    TransactionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-transactions',template:/*ion-inline-start:"/Users/jens/Repos/spender.cash/src/pages/transactions/transactions.html"*/'<!--\n  Generated template for the TransactionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>TRANSACTIONS</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n\n  \n</ion-content>\n'/*ion-inline-end:"/Users/jens/Repos/spender.cash/src/pages/transactions/transactions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_umd__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular_umd__["NavParams"]])
    ], TransactionsPage);
    return TransactionsPage;
}());

//# sourceMappingURL=transactions.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_umd__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_umd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_umd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__currency_symbol_currency_symbol__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__ = __webpack_require__(126);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/jens/Repos/spender.cash/src/pages/settings/settings.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>SETTINGS</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-list-header>\n      Wallet\n    </ion-list-header>\n    <button ion-item (click)="navToCurrencySymbol()">\n      <ion-label>Currency Symbol</ion-label>\n      <ion-note item-end>{{ settingsProvider.settings.currencySymbol }}</ion-note>\n    </button>\n    <button ion-item (click)="navToNativeCurrency()">\n        <ion-label>Native Currency</ion-label>\n        <ion-note item-end>{{ settingsProvider.settings.nativeCurrency }}</ion-note>\n      </button>\n    <ion-item>\n        <ion-label>Hide Balance</ion-label>\n        <ion-toggle [(ngModel)]="settingsProvider.settings.hideBalance"></ion-toggle>\n      </ion-item>\n    <ion-list-header>\n      Backup\n    </ion-list-header>\n    <button ion-item (click)="navToCurrencySymbol()">\n        <ion-label>Backuup Phrase</ion-label>\n      </button>\n      <button ion-item (click)="navToCurrencySymbol()">\n          <ion-label>Restore </ion-label>\n        </button>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/jens/Repos/spender.cash/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_umd__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular_umd__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__["a" /* SettingsProvider */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencySymbolPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_settings_settings__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_umd__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_umd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ionic_angular_umd__);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-currency-symbol',template:/*ion-inline-start:"/Users/jens/Repos/spender.cash/src/pages/settings/currency-symbol/currency-symbol.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>CURRENCY SYMBOL</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-list radio-group [(ngModel)]="settingsProvider.settings.currencySymbol">\n      <ion-item>\n        <ion-label>cash</ion-label>\n        <ion-radio value="cash" checked></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>bits</ion-label>\n        <ion-radio value="bits"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>BCH</ion-label>\n        <ion-radio value="BCH"></ion-radio>\n      </ion-item>\n      <ion-item>\n          <ion-label>sat</ion-label>\n          <ion-radio value="sat"></ion-radio>\n        </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/jens/Repos/spender.cash/src/pages/settings/currency-symbol/currency-symbol.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular_umd__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_umd__["NavParams"], __WEBPACK_IMPORTED_MODULE_0__providers_settings_settings__["a" /* SettingsProvider */]])
    ], CurrencySymbolPage);
    return CurrencySymbolPage;
}());

//# sourceMappingURL=currency-symbol.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__persistence_persistence__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bitbox_cli_lib_bitbox_cli__ = __webpack_require__(111);
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



var TransactionProvider = (function () {
    function TransactionProvider(persistenceProvider) {
        this.persistenceProvider = persistenceProvider;
        this.STORAGEKEY = 'transactions';
        this.BITBOX = new __WEBPACK_IMPORTED_MODULE_2_bitbox_cli_lib_bitbox_cli__["default"]();
        var socket = new this.BITBOX.Socket('https://rest.bitcoin.com');
        socket.listen('transactions', function (message) {
            console.log(message);
        });
    }
    TransactionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__persistence_persistence__["a" /* PersistenceProvider */]])
    ], TransactionProvider);
    return TransactionProvider;
}());

//# sourceMappingURL=transactions.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisclaimerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_onboarding_onboarding__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_umd__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_umd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ionic_angular_umd__);
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-disclaimer',template:/*ion-inline-start:"/Users/jens/Repos/spender.cash/src/pages/disclaimer/disclaimer.html"*/'<ion-content padding class="disclaimer">\n  <div class="disclaimer-content">\n    <h1>Disclaimer</h1>\n    <h5>Bitcoin Cash is different...</h5>\n    <br>\n    <ion-list class="checkbox-list" no-lines text-wrap>\n      <ion-item>\n        <ion-label>I understand that my funds are held securely on this device, not by a company.</ion-label>\n        <ion-checkbox [(ngModel)]="accepted.first"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label>I understand that if this app is moved to another device or deleted, my funds can only be recovered with the backup\n          phrase.\n        </ion-label>\n        <ion-checkbox [(ngModel)]="accepted.second"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label>I understand that this software is provided "as is", without warrenty of any kind.</ion-label>\n        <ion-checkbox [(ngModel)]="accepted.third"></ion-checkbox>\n      </ion-item>\n    </ion-list>\n    <br>\n    <button ion-button block [disabled]="!accepted.first || !accepted.second || !accepted.third" (click)="confirm()" translate>Confirm and Get Started</button>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/jens/Repos/spender.cash/src/pages/disclaimer/disclaimer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_umd__["NavController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular_umd__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_0__providers_onboarding_onboarding__["a" /* OnBoardingProvider */]])
    ], DisclaimerPage);
    return DisclaimerPage;
}());

//# sourceMappingURL=disclaimer.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnBoardingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wallet_wallet__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__persistence_persistence__ = __webpack_require__(75);
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

// agreeDisclaimer


var OnBoardingProvider = (function () {
    function OnBoardingProvider(walletProdiver, persistenceProvider) {
        this.walletProdiver = walletProdiver;
        this.persistenceProvider = persistenceProvider;
    }
    OnBoardingProvider.prototype.setDisclaimer = function (value) {
        this.persistenceProvider.set('agreeDisclaimer', value);
    };
    OnBoardingProvider.prototype.createWallet = function () {
        this.walletProdiver.create();
    };
    OnBoardingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__wallet_wallet__["a" /* WalletProvider */], __WEBPACK_IMPORTED_MODULE_1__persistence_persistence__["a" /* PersistenceProvider */]])
    ], OnBoardingProvider);
    return OnBoardingProvider;
}());

//# sourceMappingURL=onboarding.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(417);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipes_currency__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_umd__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_umd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ionic_angular_umd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_qrcode2__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_pay_pay__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_transactions_transactions__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_disclaimer_disclaimer__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_settings_currency_symbol_currency_symbol__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_persistence_persistence__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_settings_settings__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_onboarding_onboarding__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_wallet_wallet__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_transactions_transactions__ = __webpack_require__(390);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







/* App */

/* Pages */






/* Providers */





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* SpenderApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_pay_pay__["a" /* PayPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_transactions_transactions__["a" /* TransactionsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_settings_currency_symbol_currency_symbol__["a" /* CurrencySymbolPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_disclaimer_disclaimer__["a" /* DisclaimerPage */],
                __WEBPACK_IMPORTED_MODULE_0__pipes_currency__["a" /* ExtendedCurrencyPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_6_ngx_qrcode2__["a" /* NgxQRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular_umd__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* SpenderApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_umd__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* SpenderApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_pay_pay__["a" /* PayPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_transactions_transactions__["a" /* TransactionsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_settings_currency_symbol_currency_symbol__["a" /* CurrencySymbolPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_disclaimer_disclaimer__["a" /* DisclaimerPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14__providers_persistence_persistence__["a" /* PersistenceProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_settings_settings__["a" /* SettingsProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_onboarding_onboarding__["a" /* OnBoardingProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_wallet_wallet__["a" /* WalletProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_transactions_transactions__["a" /* TransactionProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular_umd__["IonicErrorHandler"] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtendedCurrencyPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(62);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'currency'
        })
    ], ExtendedCurrencyPipe);
    return ExtendedCurrencyPipe;
}(__WEBPACK_IMPORTED_MODULE_1__angular_common__["CurrencyPipe"]));

//# sourceMappingURL=currency.js.map

/***/ }),

/***/ 421:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 421;

/***/ }),

/***/ 424:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 424;

/***/ }),

/***/ 429:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 429;

/***/ }),

/***/ 430:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 430;

/***/ }),

/***/ 431:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 431;

/***/ }),

/***/ 432:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 432;

/***/ }),

/***/ 433:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 433;

/***/ }),

/***/ 440:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 440;

/***/ }),

/***/ 441:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 441;

/***/ }),

/***/ 443:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 443;

/***/ }),

/***/ 444:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 444;

/***/ }),

/***/ 445:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 445;

/***/ }),

/***/ 449:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 449;

/***/ }),

/***/ 450:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 450;

/***/ }),

/***/ 456:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 456;

/***/ }),

/***/ 460:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 460;

/***/ }),

/***/ 461:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 461;

/***/ }),

/***/ 464:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 464;

/***/ }),

/***/ 465:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 465;

/***/ }),

/***/ 470:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 470;

/***/ }),

/***/ 473:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 473;

/***/ }),

/***/ 474:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 474;

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpenderApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_home_home__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_disclaimer_disclaimer__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_persistence_persistence__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_umd__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_umd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ionic_angular_umd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(313);
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
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({template:/*ion-inline-start:"/Users/jens/Repos/spender.cash/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/jens/Repos/spender.cash/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular_umd__["Platform"], __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_2__providers_persistence_persistence__["a" /* PersistenceProvider */]])
    ], SpenderApp);
    return SpenderApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wallet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bitbox_cli_lib_bitbox_cli__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bitbox_cli_lib_bitbox_cli___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bitbox_cli_lib_bitbox_cli__);

var Wallet = (function () {
    function Wallet(mnemonic) {
        this.publicAddresses = [];
        this.changeAddresses = [];
        this.uxtos = [];
        this.unconfirmed = [];
        this.mnemonic = mnemonic;
        this.initilize();
        this.scan();
    }
    Wallet.prototype.initilize = function () {
        var BITBOX = new __WEBPACK_IMPORTED_MODULE_0_bitbox_cli_lib_bitbox_cli__["default"]();
        var rootSeed = BITBOX.Mnemonic.toSeed(this.mnemonic);
        var masterNode = BITBOX.HDNode.fromSeed(rootSeed, "bitcoincash");
        // public addresses
        for (var i = 0; i < 10; i++) {
            var derivationPath = "m/44'/145'/0'/0/" + i;
            var account = masterNode.derivePath(derivationPath);
            var address = {
                derivationPath: derivationPath,
                address: BITBOX.HDNode.toCashAddress(account)
            };
            this.publicAddresses.push(address);
        }
        // change addresses
        for (var i = 0; i < 1; i++) {
            var derivationPath = "m/44'/145'/0'/1/" + i;
            var account = masterNode.derivePath(derivationPath);
            var address = {
                derivationPath: derivationPath,
                address: BITBOX.HDNode.toCashAddress(account)
            };
            this.changeAddresses.push(address);
        }
    };
    Wallet.prototype.scan = function () {
        var _this = this;
        var BITBOX = new __WEBPACK_IMPORTED_MODULE_0_bitbox_cli_lib_bitbox_cli__["default"]();
        this.balance = 0;
        this.publicAddresses.forEach(function (address) {
            BITBOX.Address.utxo(address.address).then(function (result) {
                _this.uxtos = result;
                _this.uxtos.forEach(function (u) { return _this.balance += u.satoshis; });
            });
        });
        this.publicAddresses.forEach(function (address) {
            BITBOX.Address.unconfirmed(address.address).then(function (result) {
                _this.unconfirmed = result;
                _this.unconfirmed.forEach(function (u) { return _this.balance += u.satoshis; });
            });
        });
        this.changeAddresses.forEach(function (address) {
            BITBOX.Address.utxo(address.address).then(function (result) {
                _this.uxtos = _this.uxtos.concat(result);
                _this.uxtos.forEach(function (u) { return _this.balance += u.satoshis; });
            });
        });
        this.changeAddresses.forEach(function (address) {
            BITBOX.Address.unconfirmed(address.address).then(function (result) {
                _this.unconfirmed = _this.unconfirmed.concat(result);
                _this.unconfirmed.forEach(function (u) { return _this.balance += u.satoshis; });
            });
        });
    };
    Wallet.prototype.getPublicAddress = function () {
        return this.publicAddresses[Math.floor(Math.random() * this.publicAddresses.length)].address;
    };
    return Wallet;
}());

;
//# sourceMappingURL=wallet.js.map

/***/ }),

/***/ 54:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 54;

/***/ }),

/***/ 555:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 557:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 56:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 56;

/***/ }),

/***/ 596:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 599:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 64;

/***/ }),

/***/ 65:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 65;

/***/ }),

/***/ 67:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 67;

/***/ }),

/***/ 735:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CordovaStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LocalStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_secure_storage__ = __webpack_require__(739);

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

/***/ 740:
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

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersistenceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__storage__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_umd__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_umd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ionic_angular_umd__);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular_umd__["Platform"]])
    ], PersistenceProvider);
    return PersistenceProvider;
}());

//# sourceMappingURL=persistence.js.map

/***/ }),

/***/ 82:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 82;

/***/ }),

/***/ 83:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 83;

/***/ }),

/***/ 84:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 84;

/***/ }),

/***/ 87:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 87;

/***/ }),

/***/ 88:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 88;

/***/ }),

/***/ 89:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 89;

/***/ })

},[393]);
//# sourceMappingURL=main.js.map