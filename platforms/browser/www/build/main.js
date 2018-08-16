webpackJsonp([1],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersistenceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_file__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_logger_logger__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__platform_platform__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__storage_file_storage__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__storage_local_storage__ = __webpack_require__(480);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Keys = {
    ADDRESS_BOOK: function (network) { return 'addressbook-' + network; },
    AGREE_DISCLAIMER: 'agreeDisclaimer',
    APP_IDENTITY: function (network) { return 'appIdentity-' + network; },
    BACKUP: function (walletId) { return 'backup-' + walletId; },
    BALANCE_CACHE: function (cardId) { return 'balanceCache-' + cardId; },
    BITPAY_ACCOUNTS_V2: function (network) { return 'bitpayAccounts-v2-' + network; },
    CLEAN_AND_SCAN_ADDRESSES: 'CleanAndScanAddresses',
    COINBASE_REFRESH_TOKEN: function (network) { return 'coinbaseRefreshToken-' + network; },
    COINBASE_TOKEN: function (network) { return 'coinbaseToken-' + network; },
    COINBASE_TXS: function (network) { return 'coinbaseTxs-' + network; },
    CONFIG: 'config',
    FEEDBACK: 'feedback',
    FOCUSED_WALLET_ID: 'focusedWalletId',
    HIDE_BALANCE: function (walletId) { return 'hideBalance-' + walletId; },
    HOME_TIP: 'homeTip',
    LAST_ADDRESS: function (walletId) { return 'lastAddress-' + walletId; },
    LAST_CURRENCY_USED: 'lastCurrencyUsed',
    PROFILE: 'profile',
    REMOTE_PREF_STORED: 'remotePrefStored',
    TX_CONFIRM_NOTIF: function (txid) { return 'txConfirmNotif-' + txid; },
    TX_HISTORY: function (walletId) { return 'txsHistory-' + walletId; },
};
var PersistenceProvider = (function () {
    function PersistenceProvider(logger, platform, file) {
        this.logger = logger;
        this.platform = platform;
        this.file = file;
        this.logger.info('PersistenceProvider initialized.');
    }
    ;
    PersistenceProvider.prototype.load = function () {
        if (this.platform.isCordova) {
            this.storage = new __WEBPACK_IMPORTED_MODULE_5__storage_file_storage__["a" /* FileStorage */](this.file, this.logger);
        }
        else {
            this.storage = new __WEBPACK_IMPORTED_MODULE_6__storage_local_storage__["a" /* LocalStorage */]();
        }
    };
    PersistenceProvider.prototype.storeNewProfile = function (profile) {
        return this.storage.create(Keys.PROFILE, profile);
    };
    ;
    PersistenceProvider.prototype.storeProfile = function (profile) {
        return this.storage.set(Keys.PROFILE, profile);
    };
    ;
    PersistenceProvider.prototype.getProfile = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(Keys.PROFILE).then(function (profile) {
                resolve(profile);
            });
        });
    };
    ;
    PersistenceProvider.prototype.deleteProfile = function () {
        return this.storage.remove(Keys.PROFILE);
    };
    ;
    PersistenceProvider.prototype.setFeedbackInfo = function (feedbackValues) {
        return this.storage.set(Keys.FEEDBACK, feedbackValues);
    };
    ;
    PersistenceProvider.prototype.getFeedbackInfo = function () {
        return this.storage.get(Keys.FEEDBACK);
    };
    ;
    PersistenceProvider.prototype.storeFocusedWalletId = function (walletId) {
        return this.storage.set(Keys.FOCUSED_WALLET_ID, walletId || '');
    };
    ;
    PersistenceProvider.prototype.getFocusedWalletId = function () {
        return this.storage.get(Keys.FOCUSED_WALLET_ID);
    };
    ;
    PersistenceProvider.prototype.getLastAddress = function (walletId) {
        return this.storage.get(Keys.LAST_ADDRESS(walletId));
    };
    ;
    PersistenceProvider.prototype.storeLastAddress = function (walletId, address) {
        return this.storage.set(Keys.LAST_ADDRESS(walletId), address);
    };
    ;
    PersistenceProvider.prototype.clearLastAddress = function (walletId) {
        return this.storage.remove(Keys.LAST_ADDRESS(walletId));
    };
    ;
    PersistenceProvider.prototype.setBackupFlag = function (walletId) {
        return this.storage.set(Keys.BACKUP(walletId), Date.now());
    };
    ;
    PersistenceProvider.prototype.getBackupFlag = function (walletId) {
        return this.storage.get(Keys.BACKUP(walletId));
    };
    ;
    PersistenceProvider.prototype.clearBackupFlag = function (walletId) {
        return this.storage.remove(Keys.BACKUP(walletId));
    };
    ;
    PersistenceProvider.prototype.setCleanAndScanAddresses = function (walletId) {
        return this.storage.set(Keys.CLEAN_AND_SCAN_ADDRESSES, walletId);
    };
    ;
    PersistenceProvider.prototype.getCleanAndScanAddresses = function () {
        return this.storage.get(Keys.CLEAN_AND_SCAN_ADDRESSES);
    };
    ;
    PersistenceProvider.prototype.removeCleanAndScanAddresses = function () {
        return this.storage.remove(Keys.CLEAN_AND_SCAN_ADDRESSES);
    };
    ;
    PersistenceProvider.prototype.getConfig = function () {
        return this.storage.get(Keys.CONFIG);
    };
    ;
    PersistenceProvider.prototype.storeConfig = function (config) {
        return this.storage.set(Keys.CONFIG, config);
    };
    ;
    PersistenceProvider.prototype.clearConfig = function () {
        return this.storage.remove(Keys.CONFIG);
    };
    ;
    PersistenceProvider.prototype.getHomeTipAccepted = function () {
        return this.storage.get(Keys.HOME_TIP);
    };
    ;
    PersistenceProvider.prototype.setHomeTipAccepted = function (homeTip) {
        return this.storage.set(Keys.HOME_TIP, homeTip);
    };
    ;
    PersistenceProvider.prototype.setHideBalanceFlag = function (walletId, val) {
        return this.storage.set(Keys.HIDE_BALANCE(walletId), val);
    };
    ;
    PersistenceProvider.prototype.getHideBalanceFlag = function (walletId) {
        return this.storage.get(Keys.HIDE_BALANCE(walletId));
    };
    ;
    PersistenceProvider.prototype.setDisclaimerAccepted = function () {
        return this.storage.set(Keys.AGREE_DISCLAIMER, true);
    };
    //for compatibility
    PersistenceProvider.prototype.getCopayDisclaimerFlag = function () {
        return this.storage.get(Keys.AGREE_DISCLAIMER);
    };
    ;
    PersistenceProvider.prototype.setRemotePrefsStoredFlag = function () {
        return this.storage.set(Keys.REMOTE_PREF_STORED, true);
    };
    ;
    PersistenceProvider.prototype.getRemotePrefsStoredFlag = function () {
        return this.storage.get(Keys.REMOTE_PREF_STORED);
    };
    ;
    PersistenceProvider.prototype.setCoinbaseToken = function (network, token) {
        return this.storage.set(Keys.COINBASE_TOKEN(network), token);
    };
    ;
    PersistenceProvider.prototype.getCoinbaseToken = function (network) {
        return this.storage.get(Keys.COINBASE_TOKEN(network));
    };
    ;
    PersistenceProvider.prototype.removeCoinbaseToken = function (network) {
        return this.storage.remove(Keys.COINBASE_TOKEN(network));
    };
    ;
    PersistenceProvider.prototype.setCoinbaseRefreshToken = function (network, token) {
        return this.storage.set(Keys.COINBASE_REFRESH_TOKEN(network), token);
    };
    ;
    PersistenceProvider.prototype.getCoinbaseRefreshToken = function (network) {
        return this.storage.get(Keys.COINBASE_REFRESH_TOKEN(network));
    };
    ;
    PersistenceProvider.prototype.removeCoinbaseRefreshToken = function (network) {
        return this.storage.remove(Keys.COINBASE_REFRESH_TOKEN(network));
    };
    ;
    PersistenceProvider.prototype.setCoinbaseTxs = function (network, ctx) {
        return this.storage.set(Keys.COINBASE_TXS(network), ctx);
    };
    ;
    PersistenceProvider.prototype.getCoinbaseTxs = function (network) {
        return this.storage.get(Keys.COINBASE_TXS(network));
    };
    ;
    PersistenceProvider.prototype.removeCoinbaseTxs = function (network) {
        return this.storage.remove(Keys.COINBASE_TXS(network));
    };
    ;
    PersistenceProvider.prototype.setAddressbook = function (network, addressbook) {
        return this.storage.set(Keys.ADDRESS_BOOK(network), addressbook);
    };
    ;
    PersistenceProvider.prototype.getAddressbook = function (network) {
        return this.storage.get(Keys.ADDRESS_BOOK(network));
    };
    ;
    PersistenceProvider.prototype.removeAddressbook = function (network) {
        return this.storage.remove(Keys.ADDRESS_BOOK(network));
    };
    ;
    PersistenceProvider.prototype.setLastCurrencyUsed = function (lastCurrencyUsed) {
        return this.storage.set(Keys.LAST_CURRENCY_USED, lastCurrencyUsed);
    };
    ;
    PersistenceProvider.prototype.getLastCurrencyUsed = function () {
        return this.storage.get(Keys.LAST_CURRENCY_USED);
    };
    ;
    PersistenceProvider.prototype.checkQuota = function () {
        var _this = this;
        var block = '';
        // 50MB
        for (var i = 0; i < 1024 * 1024; ++i) {
            block += '12345678901234567890123456789012345678901234567890';
        }
        this.storage.set('test', block).catch(function (err) {
            _this.logger.error('CheckQuota Return:' + err);
        });
    };
    ;
    PersistenceProvider.prototype.setTxHistory = function (walletId, txs) {
        var _this = this;
        return this.storage.set(Keys.TX_HISTORY(walletId), txs).catch(function (err) {
            _this.logger.error('Error saving tx History. Size:' + txs.length);
            _this.logger.error(err);
        });
    };
    PersistenceProvider.prototype.getTxHistory = function (walletId) {
        return this.storage.get(Keys.TX_HISTORY(walletId));
    };
    PersistenceProvider.prototype.removeTxHistory = function (walletId) {
        return this.storage.remove(Keys.TX_HISTORY(walletId));
    };
    PersistenceProvider.prototype.setBalanceCache = function (cardId, data) {
        return this.storage.set(Keys.BALANCE_CACHE(cardId), data);
    };
    ;
    PersistenceProvider.prototype.getBalanceCache = function (cardId) {
        return this.storage.get(Keys.BALANCE_CACHE(cardId));
    };
    ;
    PersistenceProvider.prototype.removeBalanceCache = function (cardId) {
        return this.storage.remove(Keys.BALANCE_CACHE(cardId));
    };
    ;
    PersistenceProvider.prototype.setAppIdentity = function (network, data) {
        return this.storage.set(Keys.APP_IDENTITY(network), data);
    };
    ;
    PersistenceProvider.prototype.getAppIdentity = function (network) {
        return this.storage.get(Keys.APP_IDENTITY(network));
    };
    ;
    PersistenceProvider.prototype.removeAppIdentity = function (network) {
        return this.storage.remove(Keys.APP_IDENTITY(network));
    };
    ;
    PersistenceProvider.prototype.removeAllWalletData = function (walletId) {
        var _this = this;
        return this.clearLastAddress(walletId)
            .then(function () { return _this.removeTxHistory(walletId); })
            .then(function () { return _this.clearBackupFlag(walletId); });
    };
    ;
    PersistenceProvider.prototype.setTxConfirmNotification = function (txid, val) {
        return this.storage.set(Keys.TX_CONFIRM_NOTIF(txid), val);
    };
    ;
    PersistenceProvider.prototype.getTxConfirmNotification = function (txid) {
        return this.storage.get(Keys.TX_CONFIRM_NOTIF(txid));
    };
    ;
    PersistenceProvider.prototype.removeTxConfirmNotification = function (txid) {
        return this.storage.remove(Keys.TX_CONFIRM_NOTIF(txid));
    };
    ;
    // cb(err, accounts)
    // accounts: {
    //   email_1: {
    //     token: account token
    //     cards: {
    //       <card-data>
    //     }
    //   }
    //   ...
    //   email_n: {
    //    token: account token
    //    cards: {
    //       <card-data>
    //     }
    //   }
    // }
    //
    PersistenceProvider.prototype.getBitpayAccounts = function (network) {
        return this.storage.get(Keys.BITPAY_ACCOUNTS_V2(network));
    };
    ;
    PersistenceProvider.prototype.setBitpayAccount = function (network, data) {
        var _this = this;
        return this.getBitpayAccounts(network)
            .then(function (allAccounts) {
            allAccounts = allAccounts || {};
            var account = allAccounts[data.email] || {};
            account.token = data.token;
            account.familyName = data.familyName;
            account.givenName = data.givenName;
            allAccounts[data.email] = account;
            _this.logger.info('Storing BitPay accounts with new account:' + data.email);
            return _this.storage.set(Keys.BITPAY_ACCOUNTS_V2(network), allAccounts);
        });
    };
    ;
    PersistenceProvider.prototype.removeBitpayAccount = function (network, email) {
        var _this = this;
        return this.getBitpayAccounts(network)
            .then(function (allAccounts) {
            allAccounts = allAccounts || {};
            delete allAccounts[email];
            return _this.storage.set(Keys.BITPAY_ACCOUNTS_V2(network), allAccounts);
        });
    };
    ;
    // cards: [
    //   eid: card id
    //   id: card id
    //   lastFourDigits: card number
    //   token: card token
    // ]
    PersistenceProvider.prototype.setBitpayDebitCards = function (network, email, cards) {
        var _this = this;
        return this.getBitpayAccounts(network)
            .then(function (allAccounts) {
            allAccounts = allAccounts || {};
            if (!allAccounts[email])
                throw new Error('Cannot set cards for unknown account ' + email);
            allAccounts[email].cards = cards;
            return _this.storage.set(Keys.BITPAY_ACCOUNTS_V2(network), allAccounts);
        });
    };
    ;
    // cards: [
    //   eid: card id
    //   id: card id
    //   lastFourDigits: card number
    //   token: card token
    //   email: account email
    // ]
    PersistenceProvider.prototype.getBitpayDebitCards = function (network) {
        return this.getBitpayAccounts(network)
            .then(function (allAccounts) {
            var allCards = [];
            __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](allAccounts, function (account, email) {
                if (account.cards) {
                    // Add account's email to each card
                    var cards = __WEBPACK_IMPORTED_MODULE_2_lodash__["clone"](account.cards);
                    __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](cards, function (x) {
                        x.email = email;
                    });
                    allCards = allCards.concat(cards);
                }
            });
            return allCards;
        });
    };
    ;
    PersistenceProvider.prototype.removeBitpayDebitCard = function (network, cardEid) {
        var _this = this;
        return this.getBitpayAccounts(network)
            .then(function (allAccounts) {
            return __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](allAccounts, function (account) {
                account.cards = __WEBPACK_IMPORTED_MODULE_2_lodash__["reject"](account.cards, {
                    eid: cardEid
                });
            });
        }).then(function (allAccounts) {
            return _this.storage.set(Keys.BITPAY_ACCOUNTS_V2(network), allAccounts);
        });
    };
    ;
    PersistenceProvider.prototype.setShapeshift = function (network, gcs) {
        return this.storage.set('shapeShift-' + network, gcs);
    };
    ;
    PersistenceProvider.prototype.getShapeshift = function (network) {
        return this.storage.get('shapeShift-' + network);
    };
    ;
    PersistenceProvider.prototype.removeShapeshift = function (network) {
        return this.storage.remove('shapeShift-' + network);
    };
    ;
    PersistenceProvider.prototype.setWalletOrder = function (walletId, index) {
        return this.storage.set('order-' + walletId, index);
    };
    ;
    PersistenceProvider.prototype.getWalletOrder = function (walletId) {
        return this.storage.get('order-' + walletId);
    };
    ;
    PersistenceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_logger_logger__["a" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_4__platform_platform__["a" /* PlatformProvider */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_file__["a" /* File */]])
    ], PersistenceProvider);
    return PersistenceProvider;
}());

//# sourceMappingURL=persistence.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlatformProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nsalaun_ng_logger__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlatformProvider = (function () {
    function PlatformProvider(platform, logger) {
        this.platform = platform;
        this.logger = logger;
        var ua = navigator ? navigator.userAgent : null;
        if (!ua) {
            this.logger.info('Could not determine navigator. Using fixed string');
            ua = 'dummy user-agent';
        }
        // Fixes IOS WebKit UA
        ua = ua.replace(/\(\d+\)$/, '');
        this.isAndroid = this.platform.is('android');
        this.isIOS = this.platform.is('ios');
        this.isWP = this.platform.is('windows') && this.platform.is('mobile');
        this.ua = ua;
        this.isCordova = this.platform.is('cordova');
        //this.isNW = this.isNodeWebkit();
        this.isMobile = this.platform.is('mobile');
        this.isDevel = !this.isMobile && !this.isNW;
        this.logger.info('PlatformProvider initialized.');
    }
    PlatformProvider.prototype.getBrowserName = function () {
        var userAgent = window.navigator.userAgent;
        var browsers = { chrome: /chrome/i, safari: /safari/i, firefox: /firefox/i, ie: /internet explorer/i };
        for (var key in browsers) {
            if (browsers[key].test(userAgent)) {
                return key;
            }
        }
        ;
        return 'unknown';
    };
    PlatformProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1__nsalaun_ng_logger__["a" /* Logger */]])
    ], PlatformProvider);
    return PlatformProvider;
}());

//# sourceMappingURL=platform.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nsalaun_ng_logger__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_language_language__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_persistence_persistence__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/* TODO: implement interface propertly
interface App {
  packageName: string;
  packageDescription: string;
  packageNameId: string;
  themeColor: string;
  userVisibleName: string;
  purposeLine: string;
  bundleName: string;
  appUri: string;
  name: string;
  nameNoSpace: string;
  nameCase: string;
  nameCaseNoSpace: string;
  gitHubRepoName: string;
  gitHubRepoUrl: string;
  gitHubRepoBugs: string;
  disclaimerUrl: string;
  url: string;
  appDescription: string;
  winAppName: string;
  WindowsStoreIdentityName: string;
  WindowsStoreDisplayName: string;
  windowsAppId: string;
  pushSenderId: string;
  description: string;
  version: string;
  androidVersion: string;
  commitHash: string;
  _extraCSS: string;
  _enabledExtensions: any;
}*/
var AppProvider = (function () {
    function AppProvider(http, logger, language, config, persistence) {
        this.http = http;
        this.logger = logger;
        this.language = language;
        this.config = config;
        this.persistence = persistence;
        this.jsonPathApp = 'assets/appConfig.json';
        this.jsonPathServices = 'assets/externalServices.json';
        this.logger.info('AppProvider initialized.');
    }
    AppProvider.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.persistence.load();
            _this.config.load().then(function () {
                _this.language.load();
                _this.getServicesInfo().subscribe(function (infoServices) {
                    _this.servicesInfo = infoServices;
                    _this.getInfo().subscribe(function (infoApp) {
                        _this.info = infoApp;
                        resolve();
                    });
                });
            }).catch(function (err) {
                _this.logger.error(err);
                reject(err);
            });
        });
    };
    AppProvider.prototype.getInfo = function () {
        return this.http.get(this.jsonPathApp);
    };
    AppProvider.prototype.getServicesInfo = function () {
        return this.http.get(this.jsonPathServices);
    };
    AppProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__nsalaun_ng_logger__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__nsalaun_ng_logger__["a" /* Logger */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_language_language__["a" /* LanguageProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_language_language__["a" /* LanguageProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__providers_persistence_persistence__["a" /* PersistenceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_persistence_persistence__["a" /* PersistenceProvider */]) === "function" && _e || Object])
    ], AppProvider);
    return AppProvider;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=app.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_logger_logger__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LanguageProvider = (function () {
    function LanguageProvider(logger, translate, configProvider) {
        var _this = this;
        this.logger = logger;
        this.translate = translate;
        this.configProvider = configProvider;
        this.languages = [
            {
                name: 'English',
                isoCode: 'en'
            }, {
                name: 'Español',
                isoCode: 'es'
            }, {
                name: 'Français',
                isoCode: 'fr',
            }, {
                name: 'Italiano',
                isoCode: 'it',
            }, {
                name: 'Polski',
                isoCode: 'pl',
            }, {
                name: 'Deutsch',
                isoCode: 'de',
            }, {
                name: '日本語',
                isoCode: 'ja',
                useIdeograms: true,
            }, {
                name: '中文（简体）',
                isoCode: 'zh',
                useIdeograms: true,
            }, {
                name: 'Pусский',
                isoCode: 'ru',
            }, {
                name: 'Português',
                isoCode: 'pt',
            }
        ];
        this.logger.info('LanguageProvider initialized.');
        this.translate.onLangChange.subscribe(function (event) {
            _this.logger.info('Setting new default language to: ' + event.lang);
        });
    }
    LanguageProvider.prototype.load = function () {
        var lang = this.configProvider.get().wallet.settings.defaultLanguage;
        if (!__WEBPACK_IMPORTED_MODULE_4_lodash__["isEmpty"](lang))
            this.current = lang;
        else {
            // Get from browser
            var browserLang = this.translate.getBrowserLang();
            var validBrowserLang = this.getName(browserLang) ? true : false;
            if (validBrowserLang)
                this.current = browserLang;
            else
                this.current = this.getDefault();
        }
        this.logger.info('Default language: ' + this.current);
        this.translate.setDefaultLang(this.current);
    };
    LanguageProvider.prototype.set = function (lang) {
        this.current = lang;
        this.translate.use(lang);
        this.configProvider.set({ wallet: { settings: { defaultLanguage: lang } } });
    };
    LanguageProvider.prototype.getName = function (lang) {
        return __WEBPACK_IMPORTED_MODULE_4_lodash__["result"](__WEBPACK_IMPORTED_MODULE_4_lodash__["find"](this.languages, {
            'isoCode': lang
        }), 'name');
    };
    LanguageProvider.prototype.getDefault = function () {
        return this.languages[0]['isoCode'];
    };
    LanguageProvider.prototype.getCurrent = function () {
        return this.current;
    };
    LanguageProvider.prototype.getAvailables = function () {
        return this.languages;
    };
    LanguageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_logger_logger__["a" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["a" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* ConfigProvider */]])
    ], LanguageProvider);
    return LanguageProvider;
}());

//# sourceMappingURL=language.js.map

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

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/disclaimer/disclaimer.module": [
		682,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 284;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_config_config__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pay_pay__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transactions_transactions__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings__ = __webpack_require__(332);
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
    function HomePage(navCtrl, configProvider) {
        this.navCtrl = navCtrl;
        this.configProvider = configProvider;
        this.payIcon = '../../assets/imgs/pay.png';
    }
    HomePage.prototype.navToPay = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pay_pay__["a" /* PayPage */]);
    };
    HomePage.prototype.navToTransactions = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__transactions_transactions__["a" /* TransactionsPage */]);
    };
    HomePage.prototype.navToSettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__settings_settings__["a" /* SettingsPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/jens/Repos/spender.cash/src/pages/home/home.html"*/'<ion-content padding>\n    <ion-grid>\n        <ion-row style="height: 100%;">\n            <ion-col>\n                <ion-slides pager>\n                    <ion-slide>\n                        <ion-img width="150" height="150" src="{{ payIcon }}" (click)="navToPay()"></ion-img>\n                        <div *ngIf="!configProvider.settings.hideBalance" style="margin-top: 20px;">\n                            <h2 ion-text color="light">100,000.00</h2>\n                            <h5 ion-text color="light">{{ configProvider.settings.currencySymbol }}</h5>\n                            <br>\n                            <h5 ion-text color="light">$70.34</h5>\n                        </div>\n                    </ion-slide>\n                    <ion-slide>\n                        <ion-img width="230" height="230" src="/../assets/imgs/qr.png"></ion-img>\n                    </ion-slide>\n                </ion-slides>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col>\n                <button ion-button icon-only round (click)="navToTransactions()">\n                    <ion-icon name="menu"></ion-icon>\n                </button>\n            </ion-col>\n            <ion-col col-auto>\n                <button ion-button icon-only round (click)="navToSettings()">\n                    <ion-icon name="settings"></ion-icon>\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/jens/Repos/spender.cash/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__providers_config_config__["a" /* ConfigProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyAlreadyExistsError; });
/* unused harmony export ISTORAGE */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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

var KeyAlreadyExistsError = (function (_super) {
    __extends(KeyAlreadyExistsError, _super);
    function KeyAlreadyExistsError() {
        return _super.call(this, 'Key already exists') || this;
    }
    return KeyAlreadyExistsError;
}(Error));

var ISTORAGE = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* InjectionToken */]('storage');
//# sourceMappingURL=istorage.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nsalaun_ng_logger__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Logger = (function () {
    function Logger(logger) {
        this.logger = logger;
        this.logger.info('Logger initialized.');
        this.logs = [];
        this.levels = [
            { level: 'error', weight: 1, label: 'Error' },
            { level: 'warn', weight: 2, label: 'Warning' },
            { level: 'info', weight: 3, label: 'Info', default: true },
            { level: 'debug', weight: 4, label: 'Debug' }
        ];
        // Create an array of level weights for performant filtering.
        this.weight = {};
        for (var i = 0; i < this.levels.length; i++) {
            this.weight[this.levels[i].level] = this.levels[i].weight;
        }
    }
    Logger.prototype.error = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        (_a = this.logger).error.apply(_a, [message].concat(optionalParams));
        var args = this.processingArgs(arguments);
        this.add('error', args);
        var _a;
    };
    Logger.prototype.debug = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        (_a = this.logger).debug.apply(_a, [message].concat(optionalParams));
        var args = this.processingArgs(arguments);
        this.add('debug', args);
        var _a;
    };
    Logger.prototype.info = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        (_a = this.logger).info.apply(_a, [message].concat(optionalParams));
        var args = this.processingArgs(arguments);
        this.add('info', args);
        var _a;
    };
    Logger.prototype.warn = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        (_a = this.logger).warn.apply(_a, [message].concat(optionalParams));
        var args = this.processingArgs(arguments);
        this.add('warn', args);
        var _a;
    };
    Logger.prototype.getLevels = function () {
        return this.levels;
    };
    Logger.prototype.getWeight = function (weight) {
        return __WEBPACK_IMPORTED_MODULE_2_lodash__["find"](this.levels, function (l) {
            return l.weight == weight;
        });
    };
    Logger.prototype.getDefaultWeight = function () {
        return __WEBPACK_IMPORTED_MODULE_2_lodash__["find"](this.levels, function (l) {
            return l.default;
        });
    };
    Logger.prototype.add = function (level, msg) {
        msg = msg.replace('/xpriv.*/', 'xpriv[Hidden]');
        this.logs.push({
            timestamp: new Date().toISOString(),
            level: level,
            msg: msg
        });
    };
    Logger.prototype.get = function (filterWeight) {
        var _this = this;
        var filteredLogs = this.logs;
        if (filterWeight != undefined) {
            filteredLogs = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](this.logs, function (l) {
                return _this.weight[l.level] <= filterWeight;
            });
        }
        return filteredLogs;
    };
    Logger.prototype.processingArgs = function (argsValues) {
        var args = Array.prototype.slice.call(argsValues);
        args = args.map(function (v) {
            try {
                if (typeof v == 'undefined')
                    v = 'undefined';
                if (!v)
                    v = 'null';
                if (typeof v == 'object') {
                    if (v.message)
                        v = v.message;
                    else
                        v = JSON.stringify(v);
                }
            }
            catch (e) {
                console.log('Error at log decorator:', e);
                v = 'undefined';
            }
            return v;
        });
        return args.join(' ');
    };
    Logger = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nsalaun_ng_logger__["a" /* Logger */]])
    ], Logger);
    return Logger;
}());

//# sourceMappingURL=logger.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
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
        console.log('ionViewDidLoad PayPage');
    };
    PayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pay',template:/*ion-inline-start:"/Users/jens/Repos/spender.cash/src/pages/pay/pay.html"*/'<!--\n  Generated template for the PayPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>PAY</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jens/Repos/spender.cash/src/pages/pay/pay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PayPage);
    return PayPage;
}());

//# sourceMappingURL=pay.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transactions',template:/*ion-inline-start:"/Users/jens/Repos/spender.cash/src/pages/transactions/transactions.html"*/'<!--\n  Generated template for the TransactionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>TRANSACTIONS</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n\n  \n</ion-content>\n'/*ion-inline-end:"/Users/jens/Repos/spender.cash/src/pages/transactions/transactions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TransactionsPage);
    return TransactionsPage;
}());

//# sourceMappingURL=transactions.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__currency_symbol_currency_symbol__ = __webpack_require__(333);
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
    function SettingsPage(navCtrl, navParams, configProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.configProvider = configProvider;
    }
    SettingsPage.prototype.ionViewDidLeave = function () {
    };
    SettingsPage.prototype.navToCurrencySymbol = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__currency_symbol_currency_symbol__["a" /* CurrencySymbolPage */], {});
    };
    SettingsPage.prototype.navToNativeCurrency = function () {
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/jens/Repos/spender.cash/src/pages/settings/settings.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>SETTINGS</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-list-header>\n      Wallet\n    </ion-list-header>\n    <button ion-item (click)="navToCurrencySymbol()">\n      <ion-label>Currency Symbol</ion-label>\n      <ion-note item-end>{{ configProvider.settings.currencySymbol }}</ion-note>\n    </button>\n    <button ion-item (click)="navToNativeCurrency()">\n        <ion-label>Native Currency</ion-label>\n        <ion-note item-end>{{ configProvider.settings.nativeCurrency }}</ion-note>\n      </button>\n    <ion-item>\n        <ion-label>Hide Balance</ion-label>\n        <ion-toggle [(ngModel)]="configProvider.settings.hideBalance"></ion-toggle>\n      </ion-item>\n    <ion-list-header>\n      Backup\n    </ion-list-header>\n    <button ion-item (click)="navToCurrencySymbol()">\n        <ion-label>Recovery Phrase</ion-label>\n      </button>\n      <button ion-item (click)="navToCurrencySymbol()">\n          <ion-label>Restore </ion-label>\n        </button>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/jens/Repos/spender.cash/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencySymbolPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_config_config__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
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
 * Generated class for the DefaultCurrencySettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CurrencySymbolPage = (function () {
    function CurrencySymbolPage(navCtrl, navParams, configProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.configProvider = configProvider;
    }
    CurrencySymbolPage.prototype.ionViewDidLeave = function () {
    };
    CurrencySymbolPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-currency-symbol',template:/*ion-inline-start:"/Users/jens/Repos/spender.cash/src/pages/settings/currency-symbol/currency-symbol.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>CURRENCY SYMBOL</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list radio-group [(ngModel)]="configProvider.settings.currencySymbol">\n      <ion-item>\n        <ion-label>cash</ion-label>\n        <ion-radio value="cash" checked></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>bits</ion-label>\n        <ion-radio value="bits"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>BCH</ion-label>\n        <ion-radio value="BCH"></ion-radio>\n      </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/jens/Repos/spender.cash/src/pages/settings/currency-symbol/currency-symbol.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_config_config__["a" /* ConfigProvider */]])
    ], CurrencySymbolPage);
    return CurrencySymbolPage;
}());

//# sourceMappingURL=currency-symbol.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_logger_logger__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_app_app__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_language_language__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bwc_error_bwc_error__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bwc_bwc__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__config_config__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__on_going_process_on_going_process__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__persistence_persistence__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__platform_platform__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__popup_popup__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__models_profile_profile_model__ = __webpack_require__(679);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//providers









//models

var ProfileProvider = (function () {
    function ProfileProvider(logger, persistenceProvider, configProvider, bwcProvider, bwcErrorProvider, platformProvider, appProvider, languageProvider, events, popupProvider, onGoingProcessProvider, translate) {
        var _this = this;
        this.logger = logger;
        this.persistenceProvider = persistenceProvider;
        this.configProvider = configProvider;
        this.bwcProvider = bwcProvider;
        this.bwcErrorProvider = bwcErrorProvider;
        this.platformProvider = platformProvider;
        this.appProvider = appProvider;
        this.languageProvider = languageProvider;
        this.events = events;
        this.popupProvider = popupProvider;
        this.onGoingProcessProvider = onGoingProcessProvider;
        this.translate = translate;
        this.wallet = {};
        this.UPDATE_PERIOD = 15;
        this.validationLock = false;
        this.errors = this.bwcProvider.getErrors();
        this.throttledBwsEvent = __WEBPACK_IMPORTED_MODULE_3_lodash__["throttle"](function (n, wallet) {
            _this.newBwsEvent(n, wallet);
        }, 10000);
    }
    ProfileProvider.prototype.updateWalletSettings = function (wallet) {
        var config = this.configProvider.get();
        var defaults = this.configProvider.getDefaults();
        // this.config.whenAvailable( (config) => { TODO
        wallet.usingCustomBWS = config.bwsFor && config.bwsFor[wallet.id] && (config.bwsFor[wallet.id] != defaults.bws.url);
        wallet.name = (config.aliasFor && config.aliasFor[wallet.id]) || wallet.credentials.walletName;
        wallet.color = (config.colorFor && config.colorFor[wallet.id]) ? config.colorFor[wallet.id] : null;
        wallet.email = config.emailFor && config.emailFor[wallet.id];
        //});
    };
    ProfileProvider.prototype.setWalletOrder = function (walletId, index) {
        this.persistenceProvider.setWalletOrder(walletId, index);
        this.logger.debug('Wallet new order stored');
        this.wallet[walletId].order = index;
    };
    ProfileProvider.prototype.getWalletOrder = function (wallet) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.persistenceProvider.getWalletOrder(wallet.credentials.walletId).then(function (order) {
                return resolve(order);
            });
        });
    };
    ProfileProvider.prototype.setBackupFlag = function (walletId) {
        this.persistenceProvider.setBackupFlag(walletId);
        this.logger.debug('Backup flag stored');
        this.wallet[walletId].needsBackup = false;
    };
    ProfileProvider.prototype.requiresBackup = function (wallet) {
        if (wallet.isPrivKeyExternal())
            return false;
        if (!wallet.credentials.mnemonic && !wallet.credentials.mnemonicEncrypted)
            return false;
        if (wallet.credentials.network == 'testnet')
            return false;
        return true;
    };
    ProfileProvider.prototype.needsBackup = function (wallet) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.requiresBackup(wallet)) {
                return resolve(false);
            }
            _this.persistenceProvider.getBackupFlag(wallet.credentials.walletId).then(function (val) {
                if (val) {
                    return resolve(false);
                }
                return resolve(true);
            }).catch(function (err) {
                _this.logger.error(err);
            });
        });
    };
    ProfileProvider.prototype.isBalanceHidden = function (wallet) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.persistenceProvider.getHideBalanceFlag(wallet.credentials.walletId).then(function (shouldHideBalance) {
                var isHidden = shouldHideBalance && shouldHideBalance.toString() == 'true' ? true : false;
                return resolve(isHidden);
            }).catch(function (err) {
                _this.logger.error(err);
            });
        });
    };
    ProfileProvider.prototype.bindWalletClient = function (wallet, opts) {
        var _this = this;
        opts = opts ? opts : {};
        var walletId = wallet.credentials.walletId;
        if ((this.wallet[walletId] && this.wallet[walletId].started) && !opts.force)
            return false;
        // INIT WALLET VIEWMODEL
        wallet.id = walletId;
        wallet.started = true;
        wallet.network = wallet.credentials.network;
        wallet.copayerId = wallet.credentials.copayerId;
        wallet.m = wallet.credentials.m;
        wallet.n = wallet.credentials.n;
        wallet.coin = wallet.credentials.coin;
        wallet.status = {};
        this.updateWalletSettings(wallet);
        this.wallet[walletId] = wallet;
        this.needsBackup(wallet).then(function (val) {
            wallet.needsBackup = val;
        });
        this.isBalanceHidden(wallet).then(function (val) {
            wallet.balanceHidden = val;
        });
        this.getWalletOrder(wallet).then(function (val) {
            wallet.order = val;
        });
        wallet.removeAllListeners();
        wallet.on('report', function (n) {
            _this.logger.info('BWC Report:' + n);
        });
        wallet.on('notification', function (n) {
            _this.logger.debug('BWC Notification:', JSON.stringify(n));
            if (n.type == "NewBlock" && n.data.network == "testnet") {
                _this.throttledBwsEvent(n, wallet);
            }
            else
                _this.newBwsEvent(n, wallet);
        });
        wallet.on('walletCompleted', function () {
            _this.logger.debug('Wallet completed');
            _this.updateCredentials(JSON.parse(wallet.export()));
            // TODO: never used
            //this.events.publish('wallet:completed', walletId);
        });
        wallet.initialize({
            notificationIncludeOwn: true,
        }, function (err) {
            if (err) {
                _this.logger.error('Could not init notifications err:', err);
                return;
            }
            wallet.setNotificationsInterval(_this.UPDATE_PERIOD);
            wallet.openWallet(function (err) {
                if (wallet.status !== true)
                    _this.logger.debug('Wallet + ' + walletId + ' status:' + JSON.stringify(wallet.status));
            });
        });
        this.events.subscribe('wallet:updated', function (walletId) {
            if (walletId && walletId == wallet.id) {
                _this.logger.debug('Updating settings for wallet:' + wallet.id);
                _this.updateWalletSettings(wallet);
            }
        });
        return true;
    };
    ProfileProvider.prototype.newBwsEvent = function (n, wallet) {
        if (wallet.cachedStatus)
            wallet.cachedStatus.isValid = false;
        if (wallet.completeHistory)
            wallet.completeHistory.isValid = false;
        if (wallet.cachedActivity)
            wallet.cachedActivity.isValid = false;
        if (wallet.cachedTxps)
            wallet.cachedTxps.isValid = false;
        this.events.publish('bwsEvent', wallet.id, n.type, n);
    };
    ProfileProvider.prototype.updateCredentials = function (credentials) {
        this.profile.updateWallet(credentials);
        this.persistenceProvider.storeProfile(this.profile);
    };
    ProfileProvider.prototype.getLastKnownBalance = function (wid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.persistenceProvider.getBalanceCache(wid).then(function (data) {
                return resolve(data);
            }).catch(function (err) {
                return reject(err);
            });
        });
    };
    ProfileProvider.prototype.addLastKnownBalance = function (wallet) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var now = Math.floor(Date.now() / 1000);
            var showRange = 600; // 10min;
            _this.getLastKnownBalance(wallet.id).then(function (data) {
                if (data) {
                    var parseData = data;
                    wallet.cachedBalance = parseData.balance;
                    wallet.cachedBalanceUpdatedOn = (parseData.updatedOn < now - showRange) ? parseData.updatedOn : null;
                }
                return resolve();
            }).catch(function (err) {
                _this.logger.warn(err);
            });
        });
    };
    ProfileProvider.prototype.setLastKnownBalance = function (wid, balance) {
        this.persistenceProvider.setBalanceCache(wid, { balance: balance, updatedOn: Math.floor(Date.now() / 1000) });
    };
    ProfileProvider.prototype.runValidation = function (wallet, delay, retryDelay) {
        var _this = this;
        delay = delay ? delay : 500;
        retryDelay = retryDelay ? retryDelay : 50;
        if (this.validationLock) {
            return setTimeout(function () {
                _this.logger.debug('ValidatingWallet Locked: Retrying in: ' + retryDelay);
                return _this.runValidation(wallet, delay, retryDelay);
            }, retryDelay);
        }
        this.validationLock = true;
        // IOS devices are already checked
        var skipDeviceValidation = this.platformProvider.isIOS || this.profile.isDeviceChecked(this.platformProvider.ua);
        var walletId = wallet.credentials.walletId;
        this.logger.debug('ValidatingWallet: ' + walletId + ' skip Device:' + skipDeviceValidation);
        setTimeout(function () {
            wallet.validateKeyDerivation({
                skipDeviceValidation: skipDeviceValidation,
            }, function (err, isOK) {
                _this.validationLock = false;
                _this.logger.debug('ValidatingWallet End:  ' + walletId + ' isOK:' + isOK);
                if (isOK) {
                    _this.profile.setChecked(_this.platformProvider.ua, walletId);
                }
                else {
                    _this.logger.warn('Key Derivation failed for wallet:' + walletId);
                    _this.persistenceProvider.clearLastAddress(walletId).then(function () {
                    });
                }
                ;
                _this.storeProfileIfDirty();
            });
        }, delay);
    };
    ProfileProvider.prototype.storeProfileIfDirty = function () {
        var _this = this;
        if (this.profile.dirty) {
            this.persistenceProvider.storeProfile(this.profile).then(function (err) {
                _this.logger.debug('Saved modified Profile');
                return;
            });
        }
        else {
            return;
        }
        ;
    };
    ProfileProvider.prototype.importWallet = function (str, opts) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var walletClient = _this.bwcProvider.getClient(null, opts);
            _this.logger.debug('Importing Wallet:', opts);
            try {
                var c = JSON.parse(str);
                if (c.xPrivKey && c.xPrivKeyEncrypted) {
                    _this.logger.warn('Found both encrypted and decrypted key. Deleting the encrypted version');
                    delete c.xPrivKeyEncrypted;
                    delete c.mnemonicEncrypted;
                }
                str = JSON.stringify(c);
                walletClient.import(str, {
                    compressed: opts.compressed,
                    password: opts.password
                });
            }
            catch (err) {
                return reject(_this.translate.instant('Could not import. Check input file and spending password'));
            }
            var strParsed = JSON.parse(str);
            if (!strParsed.n) {
                return reject("Backup format not recognized. If you are using a Copay Beta backup and version is older than 0.10, please see: https://github.com/bitpay/copay/issues/4730#issuecomment-244522614");
            }
            var addressBook = strParsed.addressBook ? strParsed.addressBook : {};
            _this.addAndBindWalletClient(walletClient, {
                bwsurl: opts.bwsurl
            }).then(function (walletId) {
                _this.setMetaData(walletClient, addressBook).then(function () {
                    return resolve(walletClient);
                }).catch(function (err) {
                    _this.logger.warn(err);
                    return reject(err);
                });
            }).catch(function (err) {
                return reject(err);
            });
        });
    };
    // An alert dialog
    ProfileProvider.prototype.askPassword = function (name, title) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var opts = {
                type: 'password'
            };
            _this.popupProvider.ionicPrompt(title, name, opts).then(function (res) {
                return resolve(res);
            });
        });
    };
    ProfileProvider.prototype.showWarningNoEncrypt = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var title = _this.translate.instant('Are you sure?');
            var msg = _this.translate.instant('Without encryption, a thief or another application on this device may be able to access your funds.');
            var okText = _this.translate.instant('I\'m sure');
            var cancelText = _this.translate.instant('Go Back');
            _this.popupProvider.ionicConfirm(title, msg, okText, cancelText).then(function (res) {
                return resolve(res);
            });
        });
    };
    ProfileProvider.prototype.askToEncryptWallet = function (wallet) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var title = _this.translate.instant('Would you like to protect this wallet with a password?');
            var message = _this.translate.instant('Encryption can protect your funds if this device is stolen or compromised by malicious software.');
            var okText = _this.translate.instant('Yes');
            var cancelText = _this.translate.instant('No');
            _this.popupProvider.ionicConfirm(title, message, okText, cancelText).then(function (res) {
                if (!res) {
                    return _this.showWarningNoEncrypt().then(function (res) {
                        if (res)
                            return resolve();
                        return _this.encrypt(wallet).then(function () {
                            return resolve();
                        });
                    });
                }
                return _this.encrypt(wallet).then(function () {
                    return resolve();
                });
            });
        });
    };
    ProfileProvider.prototype.encrypt = function (wallet) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var title = _this.translate.instant('Enter a password to encrypt your wallet');
            var warnMsg = _this.translate.instant('This password is only for this device, and it cannot be recovered. To avoid losing funds, write your password down.');
            _this.askPassword(warnMsg, title).then(function (password) {
                if (!password) {
                    _this.showWarningNoEncrypt().then(function (res) {
                        if (res)
                            return resolve();
                        _this.encrypt(wallet).then(function () {
                            return resolve();
                        });
                    });
                }
                else {
                    title = _this.translate.instant('Enter your password again to confirm');
                    _this.askPassword(warnMsg, title).then(function (password2) {
                        if (!password2 || password != password2) {
                            _this.encrypt(wallet).then(function () {
                                return resolve();
                            });
                        }
                        else {
                            wallet.encryptPrivateKey(password);
                            return resolve();
                        }
                    });
                }
            });
        });
    };
    // Adds and bind a new client to the profile
    ProfileProvider.prototype.addAndBindWalletClient = function (wallet, opts) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!wallet || !wallet.credentials) {
                return reject(_this.translate.instant('Could not access wallet'));
            }
            // Encrypt wallet
            _this.onGoingProcessProvider.pause();
            _this.askToEncryptWallet(wallet).then(function () {
                _this.onGoingProcessProvider.resume();
                var walletId = wallet.credentials.walletId;
                if (!_this.profile.addWallet(JSON.parse(wallet.export()))) {
                    var message = "Wallet already in " + _this.appProvider.info.nameCase; // TODO: translate
                    return reject(message);
                }
                var skipKeyValidation = _this.shouldSkipValidation(walletId);
                if (!skipKeyValidation)
                    _this.runValidation(wallet);
                _this.bindWalletClient(wallet);
                var saveBwsUrl = function () {
                    return new Promise(function (resolve, reject) {
                        var defaults = _this.configProvider.getDefaults();
                        var bwsFor = {};
                        bwsFor[walletId] = opts.bwsurl || defaults.bws.url;
                        // Dont save the default
                        if (bwsFor[walletId] == defaults.bws.url) {
                            return resolve();
                        }
                        _this.configProvider.set({ bwsFor: bwsFor });
                        return resolve();
                    });
                };
                saveBwsUrl().then(function () {
                    _this.persistenceProvider.storeProfile(_this.profile).then(function () {
                        return resolve(wallet);
                    }).catch(function (err) {
                        return reject(err);
                    });
                });
            });
        });
    };
    ProfileProvider.prototype.shouldSkipValidation = function (walletId) {
        return this.profile.isChecked(this.platformProvider.ua, walletId) || this.platformProvider.isIOS;
    };
    ProfileProvider.prototype.setMetaData = function (wallet, addressBook) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.persistenceProvider.getAddressbook(wallet.credentials.network).then(function (localAddressBook) {
                var localAddressBook1 = {};
                try {
                    localAddressBook1 = JSON.parse(localAddressBook);
                }
                catch (ex) {
                    _this.logger.warn(ex);
                }
                var mergeAddressBook = __WEBPACK_IMPORTED_MODULE_3_lodash__["merge"](addressBook, localAddressBook1);
                _this.persistenceProvider.setAddressbook(wallet.credentials.network, JSON.stringify(mergeAddressBook)).then(function () {
                    return resolve();
                }).catch(function (err) {
                    return reject(err);
                });
            }).catch(function (err) {
                return reject(err);
            });
        });
    };
    ProfileProvider.prototype.importExtendedPrivateKey = function (xPrivKey, opts) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var walletClient = _this.bwcProvider.getClient(null, opts);
            _this.logger.debug('Importing Wallet xPrivKey');
            walletClient.importFromExtendedPrivateKey(xPrivKey, opts, function (err) {
                if (err) {
                    if (err instanceof _this.errors.NOT_AUTHORIZED)
                        return reject(err);
                    _this.bwcErrorProvider.cb(err, _this.translate.instant('Could not import')).then(function (msg) {
                        return reject(msg);
                    });
                }
                else {
                    _this.addAndBindWalletClient(walletClient, {
                        bwsurl: opts.bwsurl
                    }).then(function (wallet) {
                        return resolve(wallet);
                    }).catch(function (err) {
                        return reject(err);
                    });
                }
                ;
            });
        });
    };
    ProfileProvider.prototype.normalizeMnemonic = function (words) {
        if (!words || !words.indexOf)
            return words;
        var isJA = words.indexOf('\u3000') > -1;
        var wordList = words.split(/[\u3000\s]+/);
        return wordList.join(isJA ? '\u3000' : ' ');
    };
    ;
    ProfileProvider.prototype.importMnemonic = function (words, opts) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var walletClient = _this.bwcProvider.getClient(null, opts);
            _this.logger.debug('Importing Wallet Mnemonic');
            words = _this.normalizeMnemonic(words);
            walletClient.importFromMnemonic(words, {
                network: opts.networkName,
                passphrase: opts.passphrase,
                entropySourcePath: opts.entropySourcePath,
                derivationStrategy: opts.derivationStrategy || 'BIP44',
                account: opts.account || 0,
                coin: opts.coin
            }, function (err) {
                if (err) {
                    if (err instanceof _this.errors.NOT_AUTHORIZED) {
                        return reject(err);
                    }
                    _this.bwcErrorProvider.cb(err, _this.translate.instant('Could not import')).then(function (msg) {
                        return reject(msg);
                    });
                }
                _this.addAndBindWalletClient(walletClient, {
                    bwsurl: opts.bwsurl
                }).then(function (wallet) {
                    return resolve(wallet);
                }).catch(function (err) {
                    return reject(err);
                });
            });
        });
    };
    ProfileProvider.prototype.importExtendedPublicKey = function (opts) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var walletClient = _this.bwcProvider.getClient(null, opts);
            _this.logger.debug('Importing Wallet XPubKey');
            walletClient.importFromExtendedPublicKey(opts.extendedPublicKey, opts.externalSource, opts.entropySource, {
                account: opts.account || 0,
                derivationStrategy: opts.derivationStrategy || 'BIP44',
                coin: opts.coin
            }, function (err) {
                if (err) {
                    // in HW wallets, req key is always the same. They can't addAccess.
                    if (err instanceof _this.errors.NOT_AUTHORIZED)
                        err.name = 'WALLET_DOES_NOT_EXIST';
                    _this.bwcErrorProvider.cb(err, _this.translate.instant('Could not import')).then(function (msg) {
                        return reject(msg);
                    });
                }
                _this.addAndBindWalletClient(walletClient, {
                    bwsurl: opts.bwsurl
                }).then(function (wallet) {
                    return resolve(wallet);
                }).catch(function (err) {
                    return reject(err);
                });
            });
        });
    };
    ProfileProvider.prototype.createProfile = function () {
        this.logger.info('Creating profile');
        this.profile = new __WEBPACK_IMPORTED_MODULE_14__models_profile_profile_model__["a" /* Profile */]();
        this.profile = this.profile.create();
        this.persistenceProvider.storeNewProfile(this.profile);
    };
    ProfileProvider.prototype.bindProfile = function (profile) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var bindWallets = function () {
                return new Promise(function (resolve, reject) {
                    var l = profile.credentials.length;
                    var i = 0;
                    var totalBound = 0;
                    if (!l) {
                        return resolve();
                    }
                    __WEBPACK_IMPORTED_MODULE_3_lodash__["each"](profile.credentials, function (credentials) {
                        _this.bindWallet(credentials).then(function (bound) {
                            i++;
                            totalBound += bound;
                            if (i == l) {
                                _this.logger.info('Bound ' + totalBound + ' out of ' + l + ' wallets');
                                return resolve();
                            }
                        }).catch(function (err) {
                            return reject(err);
                        });
                    });
                });
            };
            bindWallets().then(function () {
                _this.isDisclaimerAccepted().then(function () {
                    return resolve();
                }).catch(function () {
                    _this.persistenceProvider.setHomeTipAccepted('accepted');
                    return reject(new Error('NONAGREEDDISCLAIMER: Non agreed disclaimer'));
                });
            }).catch(function (err) {
                return reject(err);
            });
        });
    };
    ProfileProvider.prototype.isDisclaimerAccepted = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var disclaimerAccepted = _this.profile && _this.profile.disclaimerAccepted;
            if (disclaimerAccepted)
                return resolve();
            // OLD flag
            _this.persistenceProvider.getCopayDisclaimerFlag().then(function (val) {
                if (val) {
                    _this.profile.disclaimerAccepted = true;
                    return resolve();
                }
                else {
                    return reject();
                }
            });
        });
    };
    ProfileProvider.prototype.bindWallet = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!credentials.walletId || !credentials.m) {
                return reject('bindWallet should receive credentials JSON');
            }
            // Create the client
            var getBWSURL = function (walletId) {
                var config = _this.configProvider.get();
                var defaults = _this.configProvider.getDefaults();
                return ((config.bwsFor && config.bwsFor[walletId]) || defaults.bws.url);
            };
            var walletClient = _this.bwcProvider.getClient(JSON.stringify(credentials), {
                bwsurl: getBWSURL(credentials.walletId),
            });
            var skipKeyValidation = _this.shouldSkipValidation(credentials.walletId);
            if (!skipKeyValidation)
                _this.runValidation(walletClient, 500);
            _this.logger.info('Binding wallet:' + credentials.walletId + ' Validating?:' + !skipKeyValidation);
            return resolve(_this.bindWalletClient(walletClient));
        });
    };
    ProfileProvider.prototype.loadAndBindProfile = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.persistenceProvider.getProfile().then(function (profile) {
                if (!profile) {
                    return resolve();
                }
                _this.profile = new __WEBPACK_IMPORTED_MODULE_14__models_profile_profile_model__["a" /* Profile */]();
                _this.profile = _this.profile.fromObj(profile);
                // Deprecated: storageService.tryToMigrate
                _this.logger.debug('Profile read');
                _this.bindProfile(_this.profile).then(function () {
                    return resolve(_this.profile);
                }).catch(function (err) {
                    return reject(err);
                });
            }).catch(function (err) {
                _this.events.publish('Local/DeviceError', err);
                return reject(err);
            });
        });
    };
    ProfileProvider.prototype.seedWallet = function (opts) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            opts = opts ? opts : {};
            var walletClient = _this.bwcProvider.getClient(null, opts);
            var network = opts.networkName || 'livenet';
            if (opts.mnemonic) {
                try {
                    opts.mnemonic = _this.normalizeMnemonic(opts.mnemonic);
                    walletClient.seedFromMnemonic(opts.mnemonic, {
                        network: network,
                        passphrase: opts.passphrase,
                        account: opts.account || 0,
                        derivationStrategy: opts.derivationStrategy || 'BIP44',
                        coin: opts.coin
                    });
                }
                catch (ex) {
                    _this.logger.info(ex);
                    return reject(_this.translate.instant('Could not create: Invalid wallet recovery phrase'));
                }
            }
            else if (opts.extendedPrivateKey) {
                try {
                    walletClient.seedFromExtendedPrivateKey(opts.extendedPrivateKey, {
                        network: network,
                        account: opts.account || 0,
                        derivationStrategy: opts.derivationStrategy || 'BIP44',
                        coin: opts.coin,
                    });
                }
                catch (ex) {
                    _this.logger.warn(ex);
                    return reject(_this.translate.instant('Could not create using the specified extended private key'));
                }
            }
            else if (opts.extendedPublicKey) {
                try {
                    walletClient.seedFromExtendedPublicKey(opts.extendedPublicKey, opts.externalSource, opts.entropySource, {
                        account: opts.account || 0,
                        derivationStrategy: opts.derivationStrategy || 'BIP44',
                        coin: opts.coin
                    });
                    walletClient.credentials.hwInfo = opts.hwInfo;
                }
                catch (ex) {
                    _this.logger.warn("Creating wallet from Extended Public Key Arg:", ex, opts);
                    return reject(_this.translate.instant('Could not create using the specified extended public key'));
                }
            }
            else {
                var lang = _this.languageProvider.getCurrent();
                try {
                    walletClient.seedFromRandomWithMnemonic({
                        network: network,
                        passphrase: opts.passphrase,
                        language: lang,
                        account: 0,
                        coin: opts.coin
                    });
                }
                catch (e) {
                    _this.logger.info('Error creating recovery phrase: ' + e.message);
                    if (e.message.indexOf('language') > 0) {
                        _this.logger.info('Using default language for recovery phrase');
                        walletClient.seedFromRandomWithMnemonic({
                            network: network,
                            passphrase: opts.passphrase,
                            account: 0,
                            coin: opts.coin
                        });
                    }
                    else {
                        return reject(e);
                    }
                }
            }
            return resolve(walletClient);
        });
    };
    // Creates a wallet on BWC/BWS
    ProfileProvider.prototype.doCreateWallet = function (opts) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var showOpts = __WEBPACK_IMPORTED_MODULE_3_lodash__["clone"](opts);
            if (showOpts.extendedPrivateKey)
                showOpts.extendedPrivateKey = '[hidden]';
            if (showOpts.mnemonic)
                showOpts.mnemonic = '[hidden]';
            _this.logger.debug('Creating Wallet:', JSON.stringify(showOpts));
            setTimeout(function () {
                _this.seedWallet(opts).then(function (walletClient) {
                    var name = opts.name || _this.translate.instant('Personal Wallet');
                    var myName = opts.myName || _this.translate.instant('me');
                    walletClient.createWallet(name, myName, opts.m, opts.n, {
                        network: opts.networkName,
                        singleAddress: opts.singleAddress,
                        walletPrivKey: opts.walletPrivKey,
                        coin: opts.coin
                    }, function (err, secret) {
                        if (err) {
                            _this.bwcErrorProvider.cb(err, _this.translate.instant('Error creating wallet')).then(function (msg) {
                                return reject(msg);
                            });
                        }
                        else {
                            return resolve(walletClient);
                        }
                    });
                }).catch(function (err) {
                    return reject(err);
                });
            }, 50);
        });
    };
    // create and store a wallet
    ProfileProvider.prototype.createWallet = function (opts) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.doCreateWallet(opts).then(function (walletClient) {
                _this.addAndBindWalletClient(walletClient, {
                    bwsurl: opts.bwsurl
                }).then(function (wallet) {
                    return resolve(wallet);
                });
            }).catch(function (err) {
                return reject(err);
            });
        });
    };
    // joins and stores a wallet
    ProfileProvider.prototype.joinWallet = function (opts) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.logger.debug('Joining Wallet:', opts);
            try {
                var walletData = _this.bwcProvider.parseSecret(opts.secret);
                // check if exist
                if (__WEBPACK_IMPORTED_MODULE_3_lodash__["find"](_this.profile.credentials, {
                    'walletId': walletData.walletId
                })) {
                    return reject(_this.translate.instant('Cannot join the same wallet more that once'));
                }
            }
            catch (ex) {
                _this.logger.debug(ex);
                return reject(_this.translate.instant('Bad wallet invitation'));
            }
            opts.networkName = walletData.network;
            _this.logger.debug('Joining Wallet:', opts);
            _this.seedWallet(opts).then(function (walletClient) {
                walletClient.joinWallet(opts.secret, opts.myName || 'me', {
                    coin: opts.coin
                }, function (err) {
                    if (err) {
                        _this.bwcErrorProvider.cb(err, _this.translate.instant('Could not join wallet')).then(function (msg) {
                            return reject(msg);
                        });
                    }
                    else {
                        _this.addAndBindWalletClient(walletClient, {
                            bwsurl: opts.bwsurl
                        }).then(function (wallet) {
                            return resolve(wallet);
                        });
                    }
                    ;
                });
            }).catch(function (err) {
                return reject(err);
            });
        });
    };
    ProfileProvider.prototype.getWallet = function (walletId) {
        return this.wallet[walletId];
    };
    ;
    ProfileProvider.prototype.deleteWalletClient = function (wallet) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var walletId = wallet.credentials.walletId;
            _this.logger.debug('Deleting Wallet:', wallet.credentials.walletName);
            wallet.removeAllListeners();
            _this.profile.deleteWallet(walletId);
            delete _this.wallet[walletId];
            _this.persistenceProvider.removeAllWalletData(walletId).catch(function (err) {
                _this.logger.warn(err);
            });
            _this.persistenceProvider.storeProfile(_this.profile).then(function () {
                return resolve();
            }).catch(function (err) {
                return reject(err);
            });
        });
    };
    ;
    ProfileProvider.prototype.createDefaultWallet = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var opts = {};
            opts.m = 1;
            opts.n = 1;
            opts.networkName = 'livenet';
            opts.coin = 'btc';
            _this.createWallet(opts).then(function (wallet) {
                return resolve(wallet);
            }).catch(function (err) {
                return reject(err);
            });
        });
    };
    ;
    ProfileProvider.prototype.setDisclaimerAccepted = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.profile.disclaimerAccepted = true;
            _this.persistenceProvider.storeProfile(_this.profile).then(function () {
                return resolve();
            }).catch(function (err) {
                return reject(err);
            });
        });
    };
    ProfileProvider.prototype.getWallets = function (opts) {
        var _this = this;
        if (opts && !__WEBPACK_IMPORTED_MODULE_3_lodash__["isObject"](opts))
            throw new Error("bad argument");
        opts = opts || {};
        var ret = __WEBPACK_IMPORTED_MODULE_3_lodash__["values"](this.wallet);
        if (opts.coin) {
            ret = __WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](ret, function (x) {
                return (x.credentials.coin == opts.coin);
            });
        }
        if (opts.network) {
            ret = __WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](ret, function (x) {
                return (x.credentials.network == opts.network);
            });
        }
        if (opts.n) {
            ret = __WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](ret, function (w) {
                return (w.credentials.n == opts.n);
            });
        }
        if (opts.m) {
            ret = __WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](ret, function (w) {
                return (w.credentials.m == opts.m);
            });
        }
        if (opts.hasFunds) {
            ret = __WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](ret, function (w) {
                if (!w.status)
                    return;
                return (w.status.availableBalanceSat > 0);
            });
        }
        if (opts.minAmount) {
            ret = __WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](ret, function (w) {
                if (!w.status)
                    return;
                return (w.status.availableBalanceSat > opts.minAmount);
            });
        }
        if (opts.onlyComplete) {
            ret = __WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](ret, function (w) {
                return w.isComplete();
            });
        }
        else { }
        // Add cached balance async
        __WEBPACK_IMPORTED_MODULE_3_lodash__["each"](ret, function (x) {
            _this.addLastKnownBalance(x);
        });
        return __WEBPACK_IMPORTED_MODULE_3_lodash__["sortBy"](ret, 'order');
    };
    ProfileProvider.prototype.toggleHideBalanceFlag = function (walletId) {
        this.wallet[walletId].balanceHidden = !this.wallet[walletId].balanceHidden;
        this.persistenceProvider.setHideBalanceFlag(walletId, this.wallet[walletId].balanceHidden);
    };
    ProfileProvider.prototype.getNotifications = function (opts) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            opts = opts ? opts : {};
            var TIME_STAMP = 60 * 60 * 6;
            var MAX = 30;
            var typeFilter = {
                'NewOutgoingTx': 1,
                'NewIncomingTx': 1
            };
            var w = _this.getWallets();
            if (__WEBPACK_IMPORTED_MODULE_3_lodash__["isEmpty"](w))
                return reject('Could not find any wallet');
            var l = w.length;
            var j = 0;
            var notifications = [];
            var isActivityCached = function (wallet) {
                return wallet.cachedActivity && wallet.cachedActivity.isValid;
            };
            var updateNotifications = function (wallet) {
                return new Promise(function (resolve, reject) {
                    if (isActivityCached(wallet) && !opts.force) {
                        return resolve();
                    }
                    wallet.getNotifications({
                        timeSpan: TIME_STAMP,
                        includeOwn: true,
                    }, function (err, n) {
                        if (err) {
                            return reject(err);
                        }
                        wallet.cachedActivity = {
                            n: n.slice(-MAX),
                            isValid: true,
                        };
                        return resolve();
                    });
                });
            };
            var process = function (notifications) {
                if (!notifications)
                    return [];
                var shown = __WEBPACK_IMPORTED_MODULE_3_lodash__["sortBy"](notifications, 'createdOn').reverse();
                shown = shown.splice(0, opts.limit || MAX);
                __WEBPACK_IMPORTED_MODULE_3_lodash__["each"](shown, function (x) {
                    x.txpId = x.data ? x.data.txProposalId : null;
                    x.txid = x.data ? x.data.txid : null;
                    x.types = [x.type];
                    x.action = function () {
                        // TODO?
                        // $state.go('tabs.wallet', {
                        //   walletId: x.walletId,
                        //   txpId: x.txpId,
                        //   txid: x.txid,
                        // });
                    };
                });
                // let finale = shown; GROUPING DISABLED!
                var finale = [];
                var prev;
                // Item grouping... DISABLED.
                // REMOVE (if we want 1-to-1 notification) ????
                __WEBPACK_IMPORTED_MODULE_3_lodash__["each"](shown, function (x) {
                    if (prev && prev.walletId === x.walletId && prev.txpId && prev.txpId === x.txpId && prev.creatorId && prev.creatorId === x.creatorId) {
                        prev.types.push(x.type);
                        prev.data = __WEBPACK_IMPORTED_MODULE_3_lodash__["assign"](prev.data, x.data);
                        prev.txid = prev.txid || x.txid;
                        prev.creatorName = prev.creatorName || x.creatorName;
                    }
                    else {
                        finale.push(x);
                        prev = x;
                    }
                });
                var u = _this.bwcProvider.getUtils();
                __WEBPACK_IMPORTED_MODULE_3_lodash__["each"](finale, function (x) {
                    if (x.data && x.data.message && x.wallet && x.wallet.credentials.sharedEncryptingKey) {
                        // TODO TODO TODO => BWC
                        x.message = u.decryptMessage(x.data.message, x.wallet.credentials.sharedEncryptingKey);
                    }
                });
                return finale;
            };
            var pr = function (wallet, cb) {
                updateNotifications(wallet).then(function () {
                    var n = __WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](wallet.cachedActivity.n, function (x) {
                        return typeFilter[x.type];
                    });
                    var idToName = {};
                    if (wallet.cachedStatus) {
                        __WEBPACK_IMPORTED_MODULE_3_lodash__["each"](wallet.cachedStatus.wallet.copayers, function (c) {
                            idToName[c.id] = c.name;
                        });
                    }
                    __WEBPACK_IMPORTED_MODULE_3_lodash__["each"](n, function (x) {
                        x.wallet = wallet;
                        if (x.creatorId && wallet.cachedStatus) {
                            x.creatorName = idToName[x.creatorId];
                        }
                        ;
                    });
                    notifications.push(n);
                    return cb();
                }).catch(function (err) {
                    return cb(err);
                });
            };
            __WEBPACK_IMPORTED_MODULE_3_lodash__["each"](w, function (wallet) {
                pr(wallet, function (err) {
                    if (err)
                        _this.logger.warn(_this.bwcErrorProvider.msg(err, 'Error updating notifications for ' + wallet.name));
                    if (++j == l) {
                        notifications = __WEBPACK_IMPORTED_MODULE_3_lodash__["sortBy"](notifications, 'createdOn');
                        notifications = __WEBPACK_IMPORTED_MODULE_3_lodash__["compact"](__WEBPACK_IMPORTED_MODULE_3_lodash__["flatten"](notifications)).slice(0, MAX);
                        var total = notifications.length;
                        var processArray = process(notifications);
                        return resolve({ notifications: processArray, total: total });
                    }
                });
            });
        });
    };
    ProfileProvider.prototype.getTxps = function (opts) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var MAX = 100;
            opts = opts ? opts : {};
            var w = _this.getWallets();
            if (__WEBPACK_IMPORTED_MODULE_3_lodash__["isEmpty"](w)) {
                return reject('No wallets available');
            }
            var txps = [];
            __WEBPACK_IMPORTED_MODULE_3_lodash__["each"](w, function (x) {
                if (x.pendingTxps)
                    txps = txps.concat(x.pendingTxps);
            });
            var n = txps.length;
            txps = __WEBPACK_IMPORTED_MODULE_3_lodash__["sortBy"](txps, 'pendingForUs', 'createdOn');
            txps = __WEBPACK_IMPORTED_MODULE_3_lodash__["compact"](__WEBPACK_IMPORTED_MODULE_3_lodash__["flatten"](txps)).slice(0, opts.limit || MAX);
            return resolve({ txps: txps, n: n });
        });
    };
    ;
    ProfileProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_logger_logger__["a" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_11__persistence_persistence__["a" /* PersistenceProvider */],
            __WEBPACK_IMPORTED_MODULE_9__config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_8__bwc_bwc__["a" /* BwcProvider */],
            __WEBPACK_IMPORTED_MODULE_7__bwc_error_bwc_error__["a" /* BwcErrorProvider */],
            __WEBPACK_IMPORTED_MODULE_12__platform_platform__["a" /* PlatformProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_app_app__["a" /* AppProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_language_language__["a" /* LanguageProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_13__popup_popup__["a" /* PopupProvider */],
            __WEBPACK_IMPORTED_MODULE_10__on_going_process_on_going_process__["a" /* OnGoingProcessProvider */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["a" /* TranslateService */]])
    ], ProfileProvider);
    return ProfileProvider;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BwcErrorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BwcErrorProvider = (function () {
    function BwcErrorProvider(translate) {
        this.translate = translate;
    }
    BwcErrorProvider.prototype.msg = function (err, prefix) {
        if (!err)
            return 'Unknown error';
        var name;
        if (err.name) {
            if (err.name == 'Error')
                name = err.message;
            else
                name = err.name.replace(/^bwc.Error/g, '');
        }
        else
            name = err;
        var body = '';
        prefix = prefix || '';
        if (name) {
            switch (name) {
                case 'INVALID_BACKUP':
                    body = this.translate.instant('Wallet Recovery Phrase is invalid');
                    break;
                case 'WALLET_DOES_NOT_EXIST':
                    body = this.translate.instant('Wallet not registered at the wallet service. Recreate it from "Create Wallet" using "Advanced Options" to set your recovery phrase');
                    break;
                case 'MISSING_PRIVATE_KEY':
                    body = this.translate.instant('Missing private keys to sign');
                    break;
                case 'ENCRYPTED_PRIVATE_KEY':
                    body = this.translate.instant('Private key is encrypted, cannot sign');
                    break;
                case 'SERVER_COMPROMISED':
                    body = this.translate.instant('Server response could not be verified');
                    break;
                case 'COULD_NOT_BUILD_TRANSACTION':
                    body = this.translate.instant('Could not build transaction');
                    break;
                case 'INSUFFICIENT_FUNDS':
                    body = this.translate.instant('Insufficient funds');
                    break;
                case 'CONNECTION_ERROR':
                    body = this.translate.instant('Network error');
                    break;
                case 'NOT_FOUND':
                    body = this.translate.instant('Wallet service not found');
                    break;
                case 'ECONNRESET_ERROR':
                    body = this.translate.instant('Connection reset by peer');
                    break;
                case 'BAD_RESPONSE_CODE':
                    body = this.translate.instant('The request could not be understood by the server');
                    break;
                case 'WALLET_ALREADY_EXISTS':
                    body = this.translate.instant('Wallet already exists');
                    break;
                case 'COPAYER_IN_WALLET':
                    body = this.translate.instant('Copayer already in this wallet');
                    break;
                case 'WALLET_FULL':
                    body = this.translate.instant('Wallet is full');
                    break;
                case 'WALLET_NOT_FOUND':
                    body = this.translate.instant('Wallet not found');
                    break;
                case 'INSUFFICIENT_FUNDS_FOR_FEE':
                    body = this.translate.instant('Insufficient funds for fee');
                    break;
                case 'LOCKED_FUNDS':
                    body = this.translate.instant('Funds are locked by pending spend proposals');
                    break;
                case 'COPAYER_VOTED':
                    body = this.translate.instant('Copayer already voted on this spend proposal');
                    break;
                case 'NOT_AUTHORIZED':
                    body = this.translate.instant('Not authorized');
                    break;
                case 'TX_ALREADY_BROADCASTED':
                    body = this.translate.instant('Transaction already broadcasted');
                    break;
                case 'TX_CANNOT_CREATE':
                    body = this.translate.instant('Locktime in effect. Please wait to create a new spend proposal');
                    break;
                case 'TX_CANNOT_REMOVE':
                    body = this.translate.instant('Locktime in effect. Please wait to remove this spend proposal');
                    break;
                case 'TX_NOT_ACCEPTED':
                    body = this.translate.instant('Spend proposal is not accepted');
                    break;
                case 'TX_NOT_FOUND':
                    body = this.translate.instant('Spend proposal not found');
                    break;
                case 'TX_NOT_PENDING':
                    body = this.translate.instant('The spend proposal is not pending');
                    break;
                case 'UPGRADE_NEEDED':
                    body = this.translate.instant('Please upgrade Copay to perform this action');
                    break;
                case 'BAD_SIGNATURES':
                    body = this.translate.instant('Signatures rejected by server');
                    break;
                case 'COPAYER_DATA_MISMATCH':
                    body = this.translate.instant('Copayer data mismatch');
                    break;
                case 'DUST_AMOUNT':
                    body = this.translate.instant('Amount below minimum allowed');
                    break;
                case 'INCORRECT_ADDRESS_NETWORK':
                    body = this.translate.instant('Incorrect network address');
                    break;
                case 'COPAYER_REGISTERED':
                    body = this.translate.instant('Key already associated with an existing wallet');
                    break;
                case 'INVALID_ADDRESS':
                    body = this.translate.instant('Invalid address');
                    break;
                case 'MAIN_ADDRESS_GAP_REACHED':
                    body = this.translate.instant('Empty addresses limit reached. New addresses cannot be generated.');
                    break;
                case 'WALLET_LOCKED':
                    body = this.translate.instant('Wallet is locked');
                    break;
                case 'WALLET_NOT_COMPLETE':
                    body = this.translate.instant('Wallet is not complete');
                    break;
                case 'WALLET_NEEDS_BACKUP':
                    body = this.translate.instant('Wallet needs backup');
                    break;
                case 'MISSING_PARAMETER':
                    body = this.translate.instant('Missing parameter');
                    break;
                case 'NO_PASSWORD_GIVEN':
                    body = this.translate.instant('Spending Password needed');
                    break;
                case 'PASSWORD_INCORRECT':
                    body = this.translate.instant('Wrong spending password');
                    break;
                case 'EXCEEDED_DAILY_LIMIT':
                    body = this.translate.instant('Exceeded daily limit of $500 per user');
                    break;
                case 'ERROR':
                    body = (err.message || err.error);
                    break;
                default:
                    body = err.message || name;
                    break;
            }
        }
        else if (err.message) {
            body = err.message;
        }
        else {
            body = err;
        }
        var msg = prefix + (body ? (prefix ? ': ' : '') + body : '');
        return msg;
    };
    BwcErrorProvider.prototype.cb = function (err, prefix) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.msg(err, prefix));
        });
    };
    BwcErrorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["a" /* TranslateService */]])
    ], BwcErrorProvider);
    return BwcErrorProvider;
}());

//# sourceMappingURL=bwc-error.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BwcProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_logger_logger__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bitcore_wallet_client__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bitcore_wallet_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bitcore_wallet_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BwcProvider = (function () {
    function BwcProvider(logger) {
        this.logger = logger;
        this.buildTx = __WEBPACK_IMPORTED_MODULE_2_bitcore_wallet_client__["buildTx"];
        this.parseSecret = __WEBPACK_IMPORTED_MODULE_2_bitcore_wallet_client__["parseSecret"];
        this.Client = __WEBPACK_IMPORTED_MODULE_2_bitcore_wallet_client__;
        this.logger.info('BwcProvider initialized.');
    }
    BwcProvider.prototype.getBitcore = function () {
        return __WEBPACK_IMPORTED_MODULE_2_bitcore_wallet_client__["Bitcore"];
    };
    BwcProvider.prototype.getBitcoreCash = function () {
        return __WEBPACK_IMPORTED_MODULE_2_bitcore_wallet_client__["BitcoreCash"];
    };
    BwcProvider.prototype.getErrors = function () {
        return __WEBPACK_IMPORTED_MODULE_2_bitcore_wallet_client__["errors"];
    };
    BwcProvider.prototype.getSJCL = function () {
        return __WEBPACK_IMPORTED_MODULE_2_bitcore_wallet_client__["sjcl"];
    };
    BwcProvider.prototype.getUtils = function () {
        return __WEBPACK_IMPORTED_MODULE_2_bitcore_wallet_client__["Utils"];
    };
    BwcProvider.prototype.getClient = function (walletData, opts) {
        opts = opts || {};
        //note opts use `bwsurl` all lowercase;
        var bwc = new __WEBPACK_IMPORTED_MODULE_2_bitcore_wallet_client__({
            baseUrl: opts.bwsurl || 'https://bws.bitpay.com/bws/api',
            verbose: opts.verbose,
            timeout: 100000,
            transports: ['polling'],
        });
        if (walletData)
            bwc.import(walletData, opts);
        return bwc;
    };
    BwcProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_logger_logger__["a" /* Logger */]])
    ], BwcProvider);
    return BwcProvider;
}());

//# sourceMappingURL=bwc.js.map

/***/ }),

/***/ 398:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnGoingProcessProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_logger_logger__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OnGoingProcessProvider = (function () {
    function OnGoingProcessProvider(loadingCtrl, logger, translate) {
        this.loadingCtrl = loadingCtrl;
        this.logger = logger;
        this.translate = translate;
        this.logger.info('OnGoingProcessProvider initialized.');
        // TODO GET - CLEAR - CHECK DecimalPipe for FILTER WITH TRANSLATE
        this.processNames = {
            'broadcastingTx': this.translate.instant('Broadcasting transaction...'),
            'calculatingFee': this.translate.instant('Calculating fee...'),
            'connectingCoinbase': this.translate.instant('Connecting to Coinbase...'),
            'connectingGlidera': this.translate.instant('Connecting to Glidera...'),
            'connectingShapeshift': this.translate.instant('Connecting to Shapeshift...'),
            'creatingTx': this.translate.instant('Creating transaction...'),
            'creatingWallet': this.translate.instant('Creating Wallet...'),
            'deletingWallet': this.translate.instant('Deleting Wallet...'),
            'extractingWalletInfo': this.translate.instant('Extracting Wallet information...'),
            'fetchingPayPro': this.translate.instant('Fetching payment information'),
            'generatingCSV': this.translate.instant('Generating .csv file...'),
            'gettingFeeLevels': this.translate.instant('Getting fee levels...'),
            'importingWallet': this.translate.instant('Importing Wallet...'),
            'joiningWallet': this.translate.instant('Joining Wallet...'),
            'recreating': this.translate.instant('Recreating Wallet...'),
            'rejectTx': this.translate.instant('Rejecting payment proposal...'),
            'removeTx': this.translate.instant('Deleting payment proposal...'),
            'retrievingInputs': this.translate.instant('Retrieving inputs information...'),
            'scanning': this.translate.instant('Scanning Wallet funds...'),
            'sendingTx': this.translate.instant('Sending transaction...'),
            'signingTx': this.translate.instant('Signing transaction...'),
            'sweepingWallet': this.translate.instant('Sweeping Wallet...'),
            'validatingWords': this.translate.instant('Validating recovery phrase...'),
            'loadingTxInfo': this.translate.instant('Loading transaction info...'),
            'sendingFeedback': this.translate.instant('Sending feedback...'),
            'generatingNewAddress': this.translate.instant('Generating new address...'),
            'sendingByEmail': this.translate.instant('Preparing addresses...'),
            'sending2faCode': this.translate.instant('Sending 2FA code...'),
            'buyingBitcoin': this.translate.instant('Buying Bitcoin...'),
            'sellingBitcoin': this.translate.instant('Selling Bitcoin...'),
            'fetchingBitPayAccount': this.translate.instant('Fetching BitPay Account...'),
            'updatingGiftCards': this.translate.instant('Updating Gift Cards...'),
            'updatingGiftCard': this.translate.instant('Updating Gift Card...'),
            'cancelingGiftCard': this.translate.instant('Canceling Gift Card...'),
            'creatingGiftCard': this.translate.instant('Creating Gift Card...'),
            'buyingGiftCard': this.translate.instant('Buying Gift Card...'),
            'topup': this.translate.instant('Top up in progress...'),
            'duplicatingWallet': this.translate.instant('Duplicating wallet...'),
        };
        this.ongoingProcess = {};
    }
    OnGoingProcessProvider.prototype.clear = function () {
        this.ongoingProcess = {};
        this.loading.dismiss();
        this.loading = null;
        this.logger.debug('ongoingProcess clear');
    };
    OnGoingProcessProvider.prototype.pause = function () {
        this.pausedOngoingProcess = this.ongoingProcess;
        this.clear();
    };
    OnGoingProcessProvider.prototype.resume = function () {
        var _this = this;
        this.ongoingProcess = this.pausedOngoingProcess;
        __WEBPACK_IMPORTED_MODULE_3_lodash__["forEach"](this.pausedOngoingProcess, function (v, k) {
            _this.set(k, v);
            return;
        });
        this.pausedOngoingProcess = {};
    };
    OnGoingProcessProvider.prototype.set = function (processName, isOn) {
        this.logger.debug('ongoingProcess', processName, isOn);
        this.ongoingProcess[processName] = isOn;
        var showName = this.processNames[processName] || processName;
        if (!isOn) {
            delete (this.ongoingProcess[processName]);
            if (__WEBPACK_IMPORTED_MODULE_3_lodash__["isEmpty"](this.ongoingProcess)) {
                this.loading.dismiss();
                this.loading = null;
            }
        }
        else {
            if (!this.loading) {
                this.loading = this.loadingCtrl.create();
            }
            this.loading.setContent(showName);
            this.loading.present();
        }
    };
    OnGoingProcessProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_logger_logger__["a" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["a" /* TranslateService */]])
    ], OnGoingProcessProvider);
    return OnGoingProcessProvider;
}());

//# sourceMappingURL=on-going-process.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_logger_logger__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PopupProvider = (function () {
    function PopupProvider(alertCtrl, logger, translate) {
        this.alertCtrl = alertCtrl;
        this.logger = logger;
        this.translate = translate;
    }
    PopupProvider.prototype.ionicAlert = function (title, subTitle, okText) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var alert = _this.alertCtrl.create({
                title: title,
                subTitle: subTitle,
                enableBackdropDismiss: false,
                buttons: [
                    {
                        text: okText ? okText : _this.translate.instant('Ok'),
                        handler: function () {
                            _this.logger.info('Ok clicked');
                            resolve();
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    ;
    PopupProvider.prototype.ionicConfirm = function (title, message, okText, cancelText) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var confirm = _this.alertCtrl.create({
                title: title,
                message: message,
                buttons: [
                    {
                        text: cancelText ? cancelText : _this.translate.instant('Cancel'),
                        handler: function () {
                            _this.logger.info('Disagree clicked');
                            resolve(false);
                        }
                    },
                    {
                        text: okText ? okText : _this.translate.instant('Ok'),
                        handler: function () {
                            _this.logger.info('Agree clicked');
                            resolve(true);
                        }
                    }
                ]
            });
            confirm.present();
        });
    };
    ;
    PopupProvider.prototype.ionicPrompt = function (title, message, opts, okText, cancelText) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var defaultText = opts && opts.defaultText ? opts.defaultText : null;
            var placeholder = opts && opts.placeholder ? opts.placeholder : null;
            var inputType = opts && opts.type ? opts.type : 'text';
            var prompt = _this.alertCtrl.create({
                title: title,
                message: message,
                inputs: [
                    {
                        value: defaultText,
                        placeholder: placeholder,
                        type: inputType
                    },
                ],
                buttons: [
                    {
                        text: cancelText ? cancelText : _this.translate.instant('Cancel'),
                        handler: function (data) {
                            _this.logger.info('Cancel clicked');
                            resolve(null);
                        }
                    },
                    {
                        text: okText ? okText : _this.translate.instant('Ok'),
                        handler: function (data) {
                            _this.logger.info('Saved clicked');
                            resolve(data[0]);
                        }
                    }
                ]
            });
            prompt.present();
        });
    };
    PopupProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_logger_logger__["a" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["a" /* TranslateService */]])
    ], PopupProvider);
    return PopupProvider;
}());

//# sourceMappingURL=popup.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PinModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_logger_logger__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PinModalPage = (function () {
    function PinModalPage(navParams, configProvider, logger, viewCtrl, platform) {
        this.navParams = navParams;
        this.configProvider = configProvider;
        this.logger = logger;
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.ATTEMPT_LIMIT = 3;
        this.ATTEMPT_LOCK_OUT_TIME = 5 * 60;
        this.currentAttempts = 0;
        this.currentPin = '';
        this.firstPinEntered = '';
        this.confirmingPin = false;
        this.action = '';
        this.disableButtons = false;
        this.expires = '';
        this.unregister = this.platform.registerBackButtonAction(function () { });
        switch (this.navParams.get('action')) {
            case 'checkPin':
                this.action = 'checkPin';
                break;
            case 'pinSetUp':
                this.action = 'pinSetUp';
                break;
            case 'removeLock':
                this.action = 'removeLock';
        }
        if (this.action === 'checkPin' || this.action === 'removeLock') {
            var config = this.configProvider.get();
            var bannedUntil = config.lock.bannedUntil;
            if (bannedUntil) {
                var now = Math.floor(Date.now() / 1000);
                if (now < bannedUntil) {
                    this.disableButtons = true;
                    this.lockTimeControl(bannedUntil);
                }
            }
        }
    }
    PinModalPage.prototype.close = function () {
        this.unregister();
        this.viewCtrl.dismiss();
    };
    PinModalPage.prototype.newEntry = function (value) {
        if (this.disableButtons)
            return;
        this.incorrect = false;
        this.currentPin = this.currentPin + value;
        if (!this.isComplete())
            return;
        if (this.action === 'checkPin' || this.action === 'removeLock')
            this.checkIfCorrect();
        if (this.action === 'pinSetUp') {
            if (!this.confirmingPin) {
                this.confirmingPin = true;
                this.firstPinEntered = this.currentPin;
                this.currentPin = '';
            }
            else if (this.firstPinEntered === this.currentPin)
                this.save();
            else {
                this.firstPinEntered = this.currentPin = '';
                this.incorrect = true;
                this.confirmingPin = false;
            }
        }
    };
    PinModalPage.prototype.checkAttempts = function () {
        this.currentAttempts += 1;
        this.logger.info('Attempts to unlock:', this.currentAttempts);
        this.incorrect = true;
        if (this.currentAttempts == this.ATTEMPT_LIMIT) {
            this.currentAttempts = 0;
            var bannedUntil = Math.floor(Date.now() / 1000) + this.ATTEMPT_LOCK_OUT_TIME;
            this.saveFailedAttempt(bannedUntil);
            this.lockTimeControl(bannedUntil);
        }
    };
    PinModalPage.prototype.lockTimeControl = function (bannedUntil) {
        var _this = this;
        this.setExpirationTime(bannedUntil, null);
        var countDown = setInterval(function () {
            _this.setExpirationTime(bannedUntil, countDown);
        }, 1000);
    };
    PinModalPage.prototype.setExpirationTime = function (bannedUntil, countDown) {
        var now = Math.floor(Date.now() / 1000);
        if (now > bannedUntil) {
            if (countDown)
                this.reset(countDown);
        }
        else {
            this.disableButtons = true;
            var totalSecs = bannedUntil - now;
            var m = Math.floor(totalSecs / 60);
            var s = totalSecs % 60;
            this.expires = ('0' + m).slice(-2) + ":" + ('0' + s).slice(-2);
        }
    };
    PinModalPage.prototype.reset = function (countDown) {
        this.expires = this.disableButtons = null;
        this.currentPin = this.firstPinEntered = '';
        clearInterval(countDown);
    };
    PinModalPage.prototype.delete = function () {
        if (this.disableButtons)
            return;
        this.currentPin = this.currentPin.substring(0, this.currentPin.length - 1);
    };
    PinModalPage.prototype.isComplete = function () {
        if (this.currentPin.length < 4)
            return false;
        else
            return true;
    };
    PinModalPage.prototype.save = function () {
        var lock = { method: 'PIN', value: this.currentPin, bannedUntil: null };
        this.configProvider.set({ lock: lock });
        this.unregister();
        this.viewCtrl.dismiss();
    };
    PinModalPage.prototype.checkIfCorrect = function () {
        var config = this.configProvider.get();
        var pinValue = config.lock && config.lock.value;
        if (pinValue == this.currentPin) {
            if (this.action === 'removeLock') {
                var lock = { method: 'Disabled', value: null, bannedUntil: null };
                this.configProvider.set({ lock: lock });
                this.unregister();
                this.viewCtrl.dismiss();
            }
            if (this.action === 'checkPin') {
                this.unregister();
                this.viewCtrl.dismiss();
            }
        }
        else {
            this.currentPin = '';
            this.checkAttempts();
        }
    };
    PinModalPage.prototype.getFilledClass = function (limit) {
        return this.currentPin.length >= limit ? 'filled' : null;
    };
    PinModalPage.prototype.saveFailedAttempt = function (bannedUntil) {
        var lock = { bannedUntil: bannedUntil };
        this.configProvider.set({ lock: lock });
    };
    PinModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pin',template:/*ion-inline-start:"/Users/jens/Repos/spender.cash/src/pages/pin/pin.html"*/'<ion-header *ngIf="action === \'pinSetUp\' || action === \'removeLock\'">\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button (click)="close()" ion-button>\n        {{\'Close\'}}\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <div class="messages">\n    <ion-item-divider *ngIf="!disableButtons">\n      <span *ngIf="!confirmingPin && !incorrect">Please enter your PIN</span>\n      <span *ngIf="confirmingPin && !incorrect">Confirm your PIN</span>\n      <span class="assertive" *ngIf="incorrect" translate>Incorrect PIN, try again.</span>\n    </ion-item-divider>\n    <ion-item-divider *ngIf="disableButtons">\n      <span class="assertive" *ngIf="expires" translate>Try again in {{expires}}</span>\n    </ion-item-divider>\n  </div>\n  <div class="block-code">\n    <div class="circle" [ngClass]="getFilledClass(1)"></div>\n    <div class="circle" [ngClass]="getFilledClass(2)"></div>\n    <div class="circle" [ngClass]="getFilledClass(3)"></div>\n    <div class="circle" [ngClass]="getFilledClass(4)"></div>\n  </div>\n  <div class="block-buttons">\n    <div class="row">\n      <div (click)="newEntry(\'1\')">1</div>\n      <div (click)="newEntry(\'2\')">2</div>\n      <div (click)="newEntry(\'3\')">3</div>\n    </div>\n    <div class="row">\n      <div (click)="newEntry(\'4\')">4</div>\n      <div (click)="newEntry(\'5\')">5</div>\n      <div (click)="newEntry(\'6\')">6</div>\n    </div>\n    <div class="row">\n      <div (click)="newEntry(\'7\')">7</div>\n      <div (click)="newEntry(\'8\')">8</div>\n      <div (click)="newEntry(\'9\')">9</div>\n    </div>\n    <div class="row">\n      <div></div>\n      <div (click)="newEntry(\'0\')">0</div>\n      <div (click)="delete()">\n        <ion-icon name="arrow-round-back"></ion-icon>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/jens/Repos/spender.cash/src/pages/pin/pin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_logger_logger__["a" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], PinModalPage);
    return PinModalPage;
}());

//# sourceMappingURL=pin.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FingerprintModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_touchid_touchid__ = __webpack_require__(680);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FingerprintModalPage = (function () {
    function FingerprintModalPage(touchid, viewCtrl, platform) {
        this.touchid = touchid;
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.unregister = this.platform.registerBackButtonAction(function () { });
        this.checkFingerprint();
    }
    FingerprintModalPage.prototype.checkFingerprint = function () {
        var _this = this;
        this.touchid.check().then(function () {
            setTimeout(function () {
                _this.unregister();
                _this.viewCtrl.dismiss();
            }, 300);
        });
    };
    FingerprintModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fingerprint',template:/*ion-inline-start:"/Users/jens/Repos/spender.cash/src/pages/fingerprint/fingerprint.html"*/'<ion-content>\n  <ion-item-divider class="title">Verify your identity</ion-item-divider>\n  <button class="scan-button" ion-item (click)="checkFingerprint()">\n    <ion-icon name="finger-print" item-start></ion-icon>\n    <span translate>Scan again</span>\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/jens/Repos/spender.cash/src/pages/fingerprint/fingerprint.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_touchid_touchid__["a" /* TouchIdProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], FingerprintModalPage);
    return FingerprintModalPage;
}());

//# sourceMappingURL=fingerprint.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisclaimerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
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
 * Generated class for the DisclaimerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DisclaimerPage = (function () {
    function DisclaimerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DisclaimerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DisclaimerPage');
    };
    DisclaimerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-disclaimer',template:/*ion-inline-start:"/Users/jens/Repos/spender.cash/src/pages/disclaimer/disclaimer.html"*/'<!--\n  Generated template for the DisclaimerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>disclaimer</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jens/Repos/spender.cash/src/pages/disclaimer/disclaimer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], DisclaimerPage);
    return DisclaimerPage;
}());

//# sourceMappingURL=disclaimer.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(429);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_android_fingerprint_auth__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_pay_pay__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_transactions_transactions__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_settings_currency_symbol_currency_symbol__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_fingerprint_fingerprint__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_pin_pin__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_app_app__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_bwc_error_bwc_error__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_bwc_bwc__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_config_config__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_language_language__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_logger_logger__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_on_going_process_on_going_process__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_persistence_persistence__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_platform_platform__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_popup_popup__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_profile_profile__ = __webpack_require__(338);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/* Native */




/* App */

/* Pages */







/* Providers */











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* SpenderApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_pay_pay__["a" /* PayPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_transactions_transactions__["a" /* TransactionsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_settings_currency_symbol_currency_symbol__["a" /* CurrencySymbolPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_fingerprint_fingerprint__["a" /* FingerprintModalPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_pin_pin__["a" /* PinModalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* SpenderApp */], {}, {
                    links: [
                        { loadChildren: '../pages/disclaimer/disclaimer.module#DisclaimerPageModule', name: 'DisclaimerPage', segment: 'disclaimer', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* SpenderApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_pay_pay__["a" /* PayPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_transactions_transactions__["a" /* TransactionsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_settings_currency_symbol_currency_symbol__["a" /* CurrencySymbolPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_fingerprint_fingerprint__["a" /* FingerprintModalPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_pin_pin__["a" /* PinModalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_18__providers_config_config__["a" /* ConfigProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_persistence_persistence__["a" /* PersistenceProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_app_app__["a" /* AppProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_bwc_bwc__["a" /* BwcProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_bwc_error_bwc_error__["a" /* BwcErrorProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_config_config__["a" /* ConfigProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_language_language__["a" /* LanguageProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_logger_logger__["a" /* Logger */],
                __WEBPACK_IMPORTED_MODULE_21__providers_on_going_process_on_going_process__["a" /* OnGoingProcessProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_platform_platform__["a" /* PlatformProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_profile_profile__["a" /* ProfileProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_popup_popup__["a" /* PopupProvider */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_22__providers_persistence_persistence__["a" /* PersistenceProvider */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_android_fingerprint_auth__["a" /* AndroidFingerprintAuth */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */],
                    useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */]
                }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_logger_logger__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__persistence_persistence__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




;
var configDefault = {
    // wallet limits
    limits: {
        totalCopayers: 6,
        mPlusN: 100
    },
    // wallet default config
    wallet: {
        useLegacyAddress: false,
        requiredCopayers: 2,
        totalCopayers: 3,
        spendUnconfirmed: false,
        reconnectDelay: 5000,
        idleDurationMin: 4,
        settings: {
            unitName: 'BTC',
            unitToSatoshi: 100000000,
            unitDecimals: 8,
            unitCode: 'btc',
            alternativeName: 'US Dollar',
            alternativeIsoCode: 'USD',
            defaultLanguage: '',
            feeLevel: 'normal'
        }
    },
    // Bitcore wallet service URL
    bws: {
        url: 'https://bws.bitpay.com/bws/api'
    },
    download: {
        bitpay: {
            url: 'https://bitpay.com/wallet'
        },
        copay: {
            url: 'https://copay.io/#download'
        }
    },
    rateApp: {
        bitpay: {
            ios: 'http://itunes.apple.com/WebObjects/MZStore.woa/wa/viewContentsUserReviews?id=1149581638&pageNumber=0&sortOrdering=2&type=Purple+Software&mt=8',
            android: 'https://play.google.com/store/apps/details?id=com.bitpay.wallet',
            wp: ''
        },
        copay: {
            ios: 'http://itunes.apple.com/WebObjects/MZStore.woa/wa/viewContentsUserReviews?id=951330296&pageNumber=0&sortOrdering=2&type=Purple+Software&mt=8',
            android: 'https://play.google.com/store/apps/details?id=com.bitpay.copay',
            wp: ''
        }
    },
    lock: {
        method: null,
        value: null,
        bannedUntil: null
    },
    // External services
    recentTransactions: {
        enabled: true
    },
    showIntegration: {
        coinbase: true,
        glidera: true,
        debitcard: true,
        amazon: true,
        mercadoLibre: true,
        shapeshift: true
    },
    rates: {
        url: 'https://insight.bitpay.com:443/api/rates'
    },
    release: {
        url: 'https://api.github.com/repos/bitpay/copay/releases/latest'
    },
    pushNotificationsEnabled: true,
    confirmedTxsNotifications: {
        enabled: true
    },
    emailNotifications: {
        enabled: false,
        email: ''
    },
    log: {
        weight: 3
    },
    blockExplorerUrl: {
        btc: 'insight.bitpay.com',
        bch: 'bch-insight.bitpay.com'
    }
};
var ConfigProvider = (function () {
    function ConfigProvider(logger, persistence) {
        this.logger = logger;
        this.persistence = persistence;
        this.logger.debug('ConfigProvider initialized.');
    }
    ConfigProvider.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.persistence.getConfig().then(function (config) {
                if (!__WEBPACK_IMPORTED_MODULE_3_lodash__["isEmpty"](config)) {
                    _this.configCache = __WEBPACK_IMPORTED_MODULE_3_lodash__["clone"](config);
                    _this.backwardCompatibility();
                }
                else {
                    _this.configCache = __WEBPACK_IMPORTED_MODULE_3_lodash__["clone"](configDefault);
                }
                resolve();
            }).catch(function (err) {
                _this.logger.error(err);
                reject();
            });
        });
    };
    ConfigProvider.prototype.set = function (newOpts) {
        var _this = this;
        var config = __WEBPACK_IMPORTED_MODULE_3_lodash__["cloneDeep"](configDefault);
        if (__WEBPACK_IMPORTED_MODULE_3_lodash__["isString"](newOpts)) {
            newOpts = JSON.parse(newOpts);
        }
        __WEBPACK_IMPORTED_MODULE_3_lodash__["merge"](config, this.configCache, newOpts);
        this.configCache = config;
        this.persistence.storeConfig(this.configCache).then(function () {
            _this.logger.info('Config saved');
        });
    };
    ConfigProvider.prototype.get = function () {
        return this.configCache;
    };
    ConfigProvider.prototype.getDefaults = function () {
        return configDefault;
    };
    ConfigProvider.prototype.backwardCompatibility = function () {
        //these ifs are to avoid migration problems
        if (this.configCache.bws) {
            this.configCache.bws = configDefault.bws;
        }
        if (!this.configCache.wallet) {
            this.configCache.wallet = configDefault.wallet;
        }
        if (!this.configCache.wallet.settings.unitCode) {
            this.configCache.wallet.settings.unitCode = configDefault.wallet.settings.unitCode;
        }
        if (!this.configCache.showIntegration) {
            this.configCache.showIntegration = configDefault.showIntegration;
        }
        if (!this.configCache.recentTransactions) {
            this.configCache.recentTransactions = configDefault.recentTransactions;
        }
        if (!this.configCache.pushNotificationsEnabled) {
            this.configCache.pushNotificationsEnabled = configDefault.pushNotificationsEnabled;
        }
        if (this.configCache.wallet.settings.unitCode == 'bit') {
            // Convert to BTC. Bits will be disabled
            this.configCache.wallet.settings.unitName = configDefault.wallet.settings.unitName;
            this.configCache.wallet.settings.unitToSatoshi = configDefault.wallet.settings.unitToSatoshi;
            this.configCache.wallet.settings.unitDecimals = configDefault.wallet.settings.unitDecimals;
            this.configCache.wallet.settings.unitCode = configDefault.wallet.settings.unitCode;
        }
    };
    ConfigProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_logger_logger__["a" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_2__persistence_persistence__["a" /* PersistenceProvider */]])
    ], ConfigProvider);
    return ConfigProvider;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpenderApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_logger_logger__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_app_app__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_profile_profile__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_config_config__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_disclaimer_disclaimer__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_pin_pin__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_fingerprint_fingerprint__ = __webpack_require__(413);
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
    function SpenderApp(platform, statusBar, splashScreen, logger, app, profile, configProvider, modalCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.logger = logger;
        this.app = app;
        this.profile = profile;
        this.configProvider = configProvider;
        this.modalCtrl = modalCtrl;
        this.initializeApp();
    }
    SpenderApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function (readySource) {
            _this.app.load().then(function () {
                _this.logger.info('Platform ready (' + readySource + '): ' +
                    _this.app.info.nameCase +
                    ' - v' + _this.app.info.version +
                    ' #' + _this.app.info.commitHash);
                if (_this.platform.is('cordova')) {
                    _this.statusBar.show();
                    // Only overlay for iOS
                    if (_this.platform.is('ios'))
                        _this.statusBar.overlaysWebView(true);
                    _this.statusBar.styleLightContent();
                    _this.splashScreen.hide();
                }
                //Check PIN or Fingerprint
                _this.onResumeSubscription = _this.platform.resume.subscribe(function () {
                    _this.openLockModal();
                });
                _this.openLockModal();
                // Check Profile
                _this.profile.loadAndBindProfile().then(function (profile) {
                    //this.registerIntegrations();
                    if (profile) {
                        _this.logger.info('Profile exists.');
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
                    }
                    else {
                        _this.logger.info('No profile exists.');
                        _this.profile.createProfile();
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_disclaimer_disclaimer__["a" /* DisclaimerPage */];
                    }
                }).catch(function (err) {
                    _this.logger.warn(err);
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_disclaimer_disclaimer__["a" /* DisclaimerPage */];
                });
            }).catch(function (err) {
                _this.logger.error('Could not initialize the app');
            });
        });
    };
    SpenderApp.prototype.ngOnDestroy = function () {
        this.onResumeSubscription.unsubscribe();
    };
    SpenderApp.prototype.openLockModal = function () {
        if (this.isModalOpen)
            return;
        var config = this.configProvider.get();
        var lockMethod = config.lock.method;
        if (!lockMethod)
            return;
        if (lockMethod == 'PIN')
            this.openPINModal('checkPin');
        if (lockMethod == 'Fingerprint')
            this.openFingerprintModal();
    };
    SpenderApp.prototype.openPINModal = function (action) {
        var _this = this;
        this.isModalOpen = true;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__pages_pin_pin__["a" /* PinModalPage */], { action: action }, { showBackdrop: false, enableBackdropDismiss: false });
        modal.present();
        modal.onDidDismiss(function () {
            _this.isModalOpen = false;
        });
    };
    SpenderApp.prototype.openFingerprintModal = function () {
        var _this = this;
        this.isModalOpen = true;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__pages_fingerprint_fingerprint__["a" /* FingerprintModalPage */], {}, { showBackdrop: false, enableBackdropDismiss: false });
        modal.present();
        modal.onDidDismiss(function () {
            _this.isModalOpen = false;
        });
    };
    SpenderApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/jens/Repos/spender.cash/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/jens/Repos/spender.cash/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_0__providers_logger_logger__["a" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_6__providers_app_app__["a" /* AppProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_profile_profile__["a" /* ProfileProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */]])
    ], SpenderApp);
    return SpenderApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_file__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_logger_logger__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__istorage__ = __webpack_require__(329);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FileStorage = (function () {
    function FileStorage(file, log) {
        this.file = file;
        this.log = log;
    }
    FileStorage.prototype.init = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.fs && _this.dir)
                return resolve();
            var onSuccess = function (fs) {
                _this.log.debug('File system started: ', fs.name, fs.root.name);
                _this.fs = fs;
                return _this.getDir().then(function (dir) {
                    if (!dir.nativeURL)
                        return reject();
                    _this.dir = dir;
                    _this.log.debug('Got main dir:', dir.nativeURL);
                    return resolve();
                });
            };
            var onFailure = function (err) {
                _this.log.error('Could not init file system: ' + err.message);
                return Promise.reject(err);
            };
            window.requestFileSystem(1, 0, onSuccess, onFailure);
        });
    };
    // See https://github.com/apache/cordova-plugin-file/#where-to-store-files
    FileStorage.prototype.getDir = function () {
        var _this = this;
        if (!this.file) {
            return Promise.reject(new Error('Could not write on device storage'));
        }
        var url = this.file.dataDirectory;
        return this.file.resolveDirectoryUrl(url).catch(function (err) {
            var msg = 'Could not resolve filesystem ' + url;
            _this.log.warn(msg, err);
            throw err || new Error(msg);
        });
    };
    FileStorage.prototype.get = function (k) {
        var _this = this;
        var parseResult = function (v) {
            if (!v)
                return null;
            if (!__WEBPACK_IMPORTED_MODULE_2_lodash__["isString"](v))
                return v;
            var parsed;
            try {
                parsed = JSON.parse(v);
            }
            catch (e) {
                //TODO parse is not necessary
            }
            return parsed || v;
        };
        return Promise.resolve(this.init()
            .then(function () {
            return Promise.resolve(_this.file.getFile(_this.dir, k, { create: false }));
        })
            .then(function (fileEntry) {
            if (!fileEntry)
                return;
            return new Promise(function (resolve) {
                fileEntry.file(function (file) {
                    var reader = new FileReader();
                    reader.onloadend = function () {
                        resolve(parseResult(reader.result));
                    };
                    reader.readAsText(file);
                });
            });
        })
            .catch(function (err) {
            // Not found
            if (err.code == 1)
                return;
            else
                throw err;
        }));
    };
    FileStorage.prototype.set = function (k, v) {
        var _this = this;
        return this.init()
            .then(function () {
            return _this.file.getFile(_this.dir, k, { create: true });
        })
            .then(function (fileEntry) {
            // Create a FileWriter object for our FileEntry (log.txt).
            return new Promise(function (resolve, reject) {
                fileEntry.createWriter(function (fileWriter) {
                    fileWriter.onwriteend = function (e) {
                        _this.log.info('Write completed:' + k);
                        resolve();
                    };
                    fileWriter.onerror = function (e) {
                        _this.log.error('Write failed', e);
                        reject(e);
                    };
                    if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isObject"](v))
                        v = JSON.stringify(v);
                    if (v && !__WEBPACK_IMPORTED_MODULE_2_lodash__["isString"](v)) {
                        v = v.toString();
                    }
                    fileWriter.write(v);
                }, function (err) {
                    _this.log.error('Could not create writer', err);
                    reject(err);
                });
            });
        });
    };
    FileStorage.prototype.remove = function (k) {
        return Promise.resolve();
    };
    FileStorage.prototype.create = function (k, v) {
        var _this = this;
        return this.get(k).then(function (data) {
            if (data)
                throw new __WEBPACK_IMPORTED_MODULE_4__istorage__["a" /* KeyAlreadyExistsError */]();
            _this.set(k, v);
        });
    };
    FileStorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_3__providers_logger_logger__["a" /* Logger */]])
    ], FileStorage);
    return FileStorage;
}());

//# sourceMappingURL=file-storage.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__istorage__ = __webpack_require__(329);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocalStorage = (function () {
    function LocalStorage() {
        this.ls = (typeof window.localStorage !== "undefined") ? window.localStorage : null;
        if (!this.ls)
            throw new Error('localstorage not available');
    }
    LocalStorage.prototype.get = function (k) {
        var _this = this;
        return new Promise(function (resolve) {
            var v = _this.ls.getItem(k);
            if (!v)
                return resolve(null);
            if (!__WEBPACK_IMPORTED_MODULE_1_lodash__["isString"](v))
                return resolve(v);
            var parsed;
            try {
                parsed = JSON.parse(v);
            }
            catch (e) {
                //TODO parse is not necessary
            }
            resolve(parsed || v);
        });
    };
    LocalStorage.prototype.set = function (k, v) {
        var _this = this;
        return new Promise(function (resolve) {
            if (__WEBPACK_IMPORTED_MODULE_1_lodash__["isObject"](v)) {
                v = JSON.stringify(v);
            }
            if (v && !__WEBPACK_IMPORTED_MODULE_1_lodash__["isString"](v)) {
                v = v.toString();
            }
            _this.ls.setItem(k, v);
            resolve();
        });
    };
    LocalStorage.prototype.remove = function (k) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.ls.removeItem(k);
            resolve();
        });
    };
    LocalStorage.prototype.create = function (k, v) {
        var _this = this;
        return this.get(k).then(function (data) {
            if (data)
                throw new __WEBPACK_IMPORTED_MODULE_2__istorage__["a" /* KeyAlreadyExistsError */]();
            _this.set(k, v);
        });
    };
    LocalStorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LocalStorage);
    return LocalStorage;
}());

//# sourceMappingURL=local-storage.js.map

/***/ }),

/***/ 526:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 530:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 551:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 553:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 661:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profile; });
var Profile = (function () {
    function Profile() {
        this.version = '1.0.0';
    }
    Profile.prototype.create = function (opts) {
        opts = opts ? opts : {};
        var x = new Profile();
        x.createdOn = Date.now();
        x.credentials = opts.credentials || [];
        x.disclaimerAccepted = false;
        x.checked = {};
        return x;
    };
    ;
    Profile.prototype.fromObj = function (obj) {
        var x = new Profile();
        x.createdOn = obj.createdOn;
        x.credentials = obj.credentials;
        x.disclaimerAccepted = obj.disclaimerAccepted;
        x.checked = obj.checked || {};
        x.checkedUA = obj.checkedUA || {};
        if (x.credentials[0] && typeof x.credentials[0] != 'object')
            throw new Error("credentials should be an object");
        return x;
    };
    ;
    Profile.prototype.fromString = function (str) {
        return this.fromObj(JSON.parse(str));
    };
    ;
    Profile.prototype.toObj = function () {
        delete this.dirty;
        return JSON.stringify(this);
    };
    ;
    Profile.prototype.hasWallet = function (walletId) {
        for (var i in this.credentials) {
            var c = this.credentials[i];
            if (c.walletId == walletId)
                return true;
        }
        ;
        return false;
    };
    ;
    Profile.prototype.isChecked = function (ua, walletId) {
        return !!(this.checkedUA == ua && this.checked[walletId]);
    };
    ;
    Profile.prototype.isDeviceChecked = function (ua) {
        return this.checkedUA == ua;
    };
    ;
    Profile.prototype.setChecked = function (ua, walletId) {
        if (this.checkedUA != ua) {
            this.checkedUA = ua;
            this.checked = {};
        }
        this.checked[walletId] = true;
        this.dirty = true;
    };
    ;
    Profile.prototype.addWallet = function (credentials) {
        if (!credentials.walletId)
            throw new Error('credentials must have .walletId');
        if (this.hasWallet(credentials.walletId))
            return false;
        this.credentials.push(credentials);
        this.dirty = true;
        return true;
    };
    ;
    Profile.prototype.updateWallet = function (credentials) {
        if (!credentials.walletId)
            throw new Error('credentials must have .walletId');
        if (!this.hasWallet(credentials.walletId))
            return false;
        this.credentials = this.credentials.map(function (c) {
            if (c.walletId != credentials.walletId) {
                return c;
            }
            else {
                return credentials;
            }
        });
        this.dirty = true;
        return true;
    };
    ;
    Profile.prototype.deleteWallet = function (walletId) {
        if (!this.hasWallet(walletId))
            return false;
        this.credentials = this.credentials.filter(function (c) {
            return c.walletId != walletId;
        });
        this.dirty = true;
        return true;
    };
    ;
    return Profile;
}());

//# sourceMappingURL=profile.model.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TouchIdProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_logger_logger__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__platform_platform__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_fingerprint_auth__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_touch_id__ = __webpack_require__(681);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TouchIdProvider = (function () {
    function TouchIdProvider(touchId, androidFingerprintAuth, platform, config, logger) {
        this.touchId = touchId;
        this.androidFingerprintAuth = androidFingerprintAuth;
        this.platform = platform;
        this.config = config;
        this.logger = logger;
    }
    TouchIdProvider.prototype.isAvailable = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.platform.isCordova && _this.platform.isAndroid) {
                _this.checkAndroid().then(function (isAvailable) {
                    return resolve(isAvailable);
                });
            }
            else if (_this.platform.isCordova && _this.platform.isIOS) {
                _this.checkIOS().then(function (isAvailable) {
                    return resolve(isAvailable);
                });
            }
            else {
                return resolve(false);
            }
        });
    };
    TouchIdProvider.prototype.checkIOS = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.touchId.isAvailable()
                .then(function (res) {
                return resolve(true);
            }, function (err) {
                _this.logger.debug("Fingerprint is not available");
                return resolve(false);
            });
        });
    };
    TouchIdProvider.prototype.checkAndroid = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.androidFingerprintAuth.isAvailable()
                .then(function (res) {
                if (res.isAvailable)
                    return resolve(true);
                else {
                    _this.logger.debug("Fingerprint is not available");
                    return resolve(false);
                }
            });
        });
    };
    TouchIdProvider.prototype.verifyIOSFingerprint = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.touchId.verifyFingerprint('Scan your fingerprint please')
                .then(function (res) { return resolve(); }, function (err) { return reject(); });
        });
    };
    TouchIdProvider.prototype.verifyAndroidFingerprint = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.androidFingerprintAuth.encrypt({ clientId: 'Copay' })
                .then(function (result) {
                if (result.withFingerprint) {
                    _this.logger.debug('Successfully authenticated with fingerprint.');
                    resolve();
                }
                else if (result.withBackup) {
                    _this.logger.debug('Successfully authenticated with backup password!');
                    resolve();
                }
                else
                    _this.logger.debug('Didn\'t authenticate!');
            }).catch(function (error) {
                if (error === _this.androidFingerprintAuth.ERRORS.FINGERPRINT_CANCELLED) {
                    _this.logger.debug('Fingerprint authentication cancelled');
                    reject();
                }
                else {
                    _this.logger.warn(error);
                    reject();
                }
                ;
            });
        });
    };
    TouchIdProvider.prototype.check = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.platform.isIOS) {
                _this.verifyIOSFingerprint()
                    .then(function () {
                    resolve();
                })
                    .catch(function () {
                    reject();
                });
            }
            ;
            if (_this.platform.isAndroid) {
                _this.verifyAndroidFingerprint()
                    .then(function () {
                    resolve();
                })
                    .catch(function () {
                    reject();
                });
            }
            ;
        });
    };
    TouchIdProvider.prototype.isNeeded = function (wallet) {
        var config = this.config.get();
        config.touchIdFor = config.touchIdFor || {};
        return config.touchIdFor[wallet.credentials.walletId];
    };
    TouchIdProvider.prototype.checkWallet = function (wallet) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.isAvailable().then(function (isAvailable) {
                if (!isAvailable)
                    return resolve();
                if (_this.isNeeded(wallet)) {
                    _this.check().then(function () {
                        return resolve();
                    }).catch(function () {
                        return reject();
                    });
                }
                else {
                    return resolve();
                }
            });
        });
    };
    TouchIdProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_touch_id__["a" /* TouchID */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_fingerprint_auth__["a" /* AndroidFingerprintAuth */],
            __WEBPACK_IMPORTED_MODULE_3__platform_platform__["a" /* PlatformProvider */],
            __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_logger_logger__["a" /* Logger */]])
    ], TouchIdProvider);
    return TouchIdProvider;
}());

//# sourceMappingURL=touchid.js.map

/***/ })

},[415]);
//# sourceMappingURL=main.js.map