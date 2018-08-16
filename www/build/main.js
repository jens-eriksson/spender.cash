webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BwcProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_logger_logger__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bitcore_wallet_client__ = __webpack_require__(649);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_logger_logger__["a" /* Logger */]])
    ], BwcProvider);
    return BwcProvider;
}());

//# sourceMappingURL=bwc.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlatformProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nsalaun_ng_logger__ = __webpack_require__(126);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1__nsalaun_ng_logger__["b" /* Logger */]])
    ], PlatformProvider);
    return PlatformProvider;
}());

//# sourceMappingURL=platform.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_logger_logger__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_app__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bwc_error_bwc_error__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bwc_bwc__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config_config__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__on_going_process_on_going_process__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__persistence_persistence__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__platform_platform__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__popup_popup__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__models_profile_profile_model__ = __webpack_require__(814);
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
    function ProfileProvider(logger, persistenceProvider, configProvider, bwcProvider, bwcErrorProvider, platformProvider, appProvider, events, popupProvider, onGoingProcessProvider) {
        var _this = this;
        this.logger = logger;
        this.persistenceProvider = persistenceProvider;
        this.configProvider = configProvider;
        this.bwcProvider = bwcProvider;
        this.bwcErrorProvider = bwcErrorProvider;
        this.platformProvider = platformProvider;
        this.appProvider = appProvider;
        this.events = events;
        this.popupProvider = popupProvider;
        this.onGoingProcessProvider = onGoingProcessProvider;
        this.wallet = {};
        this.UPDATE_PERIOD = 15;
        this.validationLock = false;
        this.errors = this.bwcProvider.getErrors();
        this.translate = {
            'instant': function (message) { return message; }
        };
        this.throttledBwsEvent = __WEBPACK_IMPORTED_MODULE_2_lodash__["throttle"](function (n, wallet) {
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
                var mergeAddressBook = __WEBPACK_IMPORTED_MODULE_2_lodash__["merge"](addressBook, localAddressBook1);
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
        this.profile = new __WEBPACK_IMPORTED_MODULE_12__models_profile_profile_model__["a" /* Profile */]();
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
                    __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](profile.credentials, function (credentials) {
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
                _this.profile = new __WEBPACK_IMPORTED_MODULE_12__models_profile_profile_model__["a" /* Profile */]();
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
                var lang = 'en'; //this.languageProvider.getCurrent();
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
            var showOpts = __WEBPACK_IMPORTED_MODULE_2_lodash__["clone"](opts);
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
                if (__WEBPACK_IMPORTED_MODULE_2_lodash__["find"](_this.profile.credentials, {
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
            opts.networkName = 'testnet';
            opts.coin = 'bch';
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
        if (opts && !__WEBPACK_IMPORTED_MODULE_2_lodash__["isObject"](opts))
            throw new Error("bad argument");
        opts = opts || {};
        var ret = __WEBPACK_IMPORTED_MODULE_2_lodash__["values"](this.wallet);
        if (opts.coin) {
            ret = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](ret, function (x) {
                return (x.credentials.coin == opts.coin);
            });
        }
        if (opts.network) {
            ret = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](ret, function (x) {
                return (x.credentials.network == opts.network);
            });
        }
        if (opts.n) {
            ret = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](ret, function (w) {
                return (w.credentials.n == opts.n);
            });
        }
        if (opts.m) {
            ret = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](ret, function (w) {
                return (w.credentials.m == opts.m);
            });
        }
        if (opts.hasFunds) {
            ret = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](ret, function (w) {
                if (!w.status)
                    return;
                return (w.status.availableBalanceSat > 0);
            });
        }
        if (opts.minAmount) {
            ret = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](ret, function (w) {
                if (!w.status)
                    return;
                return (w.status.availableBalanceSat > opts.minAmount);
            });
        }
        if (opts.onlyComplete) {
            ret = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](ret, function (w) {
                return w.isComplete();
            });
        }
        else { }
        // Add cached balance async
        __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](ret, function (x) {
            _this.addLastKnownBalance(x);
        });
        return __WEBPACK_IMPORTED_MODULE_2_lodash__["sortBy"](ret, 'order');
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
            if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](w))
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
                var shown = __WEBPACK_IMPORTED_MODULE_2_lodash__["sortBy"](notifications, 'createdOn').reverse();
                shown = shown.splice(0, opts.limit || MAX);
                __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](shown, function (x) {
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
                __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](shown, function (x) {
                    if (prev && prev.walletId === x.walletId && prev.txpId && prev.txpId === x.txpId && prev.creatorId && prev.creatorId === x.creatorId) {
                        prev.types.push(x.type);
                        prev.data = __WEBPACK_IMPORTED_MODULE_2_lodash__["assign"](prev.data, x.data);
                        prev.txid = prev.txid || x.txid;
                        prev.creatorName = prev.creatorName || x.creatorName;
                    }
                    else {
                        finale.push(x);
                        prev = x;
                    }
                });
                var u = _this.bwcProvider.getUtils();
                __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](finale, function (x) {
                    if (x.data && x.data.message && x.wallet && x.wallet.credentials.sharedEncryptingKey) {
                        // TODO TODO TODO => BWC
                        x.message = u.decryptMessage(x.data.message, x.wallet.credentials.sharedEncryptingKey);
                    }
                });
                return finale;
            };
            var pr = function (wallet, cb) {
                updateNotifications(wallet).then(function () {
                    var n = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](wallet.cachedActivity.n, function (x) {
                        return typeFilter[x.type];
                    });
                    var idToName = {};
                    if (wallet.cachedStatus) {
                        __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](wallet.cachedStatus.wallet.copayers, function (c) {
                            idToName[c.id] = c.name;
                        });
                    }
                    __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](n, function (x) {
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
            __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](w, function (wallet) {
                pr(wallet, function (err) {
                    if (err)
                        _this.logger.warn(_this.bwcErrorProvider.msg(err, 'Error updating notifications for ' + wallet.name));
                    if (++j == l) {
                        notifications = __WEBPACK_IMPORTED_MODULE_2_lodash__["sortBy"](notifications, 'createdOn');
                        notifications = __WEBPACK_IMPORTED_MODULE_2_lodash__["compact"](__WEBPACK_IMPORTED_MODULE_2_lodash__["flatten"](notifications)).slice(0, MAX);
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
            if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](w)) {
                return reject('No wallets available');
            }
            var txps = [];
            __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](w, function (x) {
                if (x.pendingTxps)
                    txps = txps.concat(x.pendingTxps);
            });
            var n = txps.length;
            txps = __WEBPACK_IMPORTED_MODULE_2_lodash__["sortBy"](txps, 'pendingForUs', 'createdOn');
            txps = __WEBPACK_IMPORTED_MODULE_2_lodash__["compact"](__WEBPACK_IMPORTED_MODULE_2_lodash__["flatten"](txps)).slice(0, opts.limit || MAX);
            return resolve({ txps: txps, n: n });
        });
    };
    ;
    ProfileProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_logger_logger__["a" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_9__persistence_persistence__["a" /* PersistenceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_6__bwc_bwc__["a" /* BwcProvider */],
            __WEBPACK_IMPORTED_MODULE_5__bwc_error_bwc_error__["a" /* BwcErrorProvider */],
            __WEBPACK_IMPORTED_MODULE_10__platform_platform__["a" /* PlatformProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_app_app__["a" /* AppProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_11__popup_popup__["a" /* PopupProvider */],
            __WEBPACK_IMPORTED_MODULE_8__on_going_process_on_going_process__["a" /* OnGoingProcessProvider */]])
    ], ProfileProvider);
    return ProfileProvider;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnGoingProcessProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_logger_logger__ = __webpack_require__(24);
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
    function OnGoingProcessProvider(loadingCtrl, logger) {
        this.loadingCtrl = loadingCtrl;
        this.logger = logger;
        this.translate = {
            'instant': function (message) { return message; }
        };
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
        __WEBPACK_IMPORTED_MODULE_2_lodash__["forEach"](this.pausedOngoingProcess, function (v, k) {
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
            if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.ongoingProcess)) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_logger_logger__["a" /* Logger */]])
    ], OnGoingProcessProvider);
    return OnGoingProcessProvider;
}());

//# sourceMappingURL=on-going-process.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_logger_logger__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pay_pay__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transactions_transactions__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_profile_profile__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_wallet_wallet__ = __webpack_require__(540);
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
    function HomePage(navCtrl, profileProvider, walletProvider, logger) {
        this.navCtrl = navCtrl;
        this.profileProvider = profileProvider;
        this.walletProvider = walletProvider;
        this.logger = logger;
        this.payIcon = '../../assets/imgs/pay.png';
        this.updateWallet();
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
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        setTimeout(function () {
            _this.updateWallet();
            refresher.complete();
        }, 300);
    };
    HomePage.prototype.updateWallet = function () {
        var _this = this;
        this.wallet = this.profileProvider.getWallets()[0];
        this.logger.info('Updating wallet:' + this.wallet.name);
        this.walletProvider.getStatus(this.wallet, {}).then(function (status) {
            _this.wallet.status = status;
        }).catch(function (err) {
            _this.logger.error(err);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/jens/Repos/spender.cash/src/pages/home/home.html"*/'<ion-content padding>\n        <ion-refresher (ionRefresh)="doRefresh($event)">\n                <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="" refreshingSpinner="circles" refreshingText="">\n                </ion-refresher-content>\n            </ion-refresher>\n    <ion-grid>\n        <ion-row style="height: 100%;">\n            <ion-col>\n                <ion-slides pager>\n                    <ion-slide>\n                        \n                        <ion-img width="150" height="150" src="{{ payIcon }}" (click)="navToPay()"></ion-img>\n                        <div class="balance">\n                            <h2 ion-text color="balance">{{ this.wallet.status.availableBalanceSat }}</h2>\n                            <h5 ion-text color="balance">cash</h5>\n                            <h5 ion-text color="native-balance">$70.34</h5>\n                        </div>\n                    </ion-slide>\n                    <ion-slide>\n                        <ion-img width="230" height="230" src="/../assets/imgs/qr.png"></ion-img>\n                    </ion-slide>\n                </ion-slides>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col>\n                <button ion-button icon-only round (click)="navToTransactions()">\n                    <ion-icon name="menu"></ion-icon>\n                </button>\n            </ion-col>\n            <ion-col col-auto>\n                <button ion-button icon-only round (click)="navToSettings()">\n                    <ion-icon name="settings"></ion-icon>\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/jens/Repos/spender.cash/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_profile_profile__["a" /* ProfileProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_wallet_wallet__["a" /* WalletProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_logger_logger__["a" /* Logger */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nsalaun_ng_logger__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_persistence_persistence__ = __webpack_require__(84);
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
    function AppProvider(http, logger, config, persistence) {
        this.http = http;
        this.logger = logger;
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__nsalaun_ng_logger__["b" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_persistence_persistence__["a" /* PersistenceProvider */]])
    ], AppProvider);
    return AppProvider;
}());

//# sourceMappingURL=app.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BwcErrorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function BwcErrorProvider() {
        this.translate = {
            'instant': function (message) { return message; }
        };
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
                    //body = this.translate.instant('Wallet Recovery Phrase is invalid');
                    body = 'Wallet Recovery Phrase is invalid';
                    break;
                case 'WALLET_DOES_NOT_EXIST':
                    //body = this.translate.instant('Wallet not registered at the wallet service. Recreate it from "Create Wallet" using "Advanced Options" to set your recovery phrase');
                    body = 'Wallet not registered at the wallet service. Recreate it from "Create Wallet" using "Advanced Options" to set your recovery phrase';
                    break;
                case 'MISSING_PRIVATE_KEY':
                    //body = this.translate.instant('Missing private keys to sign');
                    body = 'Missing private keys to sign';
                    break;
                case 'ENCRYPTED_PRIVATE_KEY':
                    //body = this.translate.instant('Private key is encrypted, cannot sign');
                    body = 'Private key is encrypted, cannot sign';
                    break;
                case 'SERVER_COMPROMISED':
                    //body = this.translate.instant('Server response could not be verified');
                    body = 'Server response could not be verified';
                    break;
                case 'COULD_NOT_BUILD_TRANSACTION':
                    //body = this.translate.instant('Could not build transaction');
                    body = 'Could not build transaction';
                    break;
                case 'INSUFFICIENT_FUNDS':
                    //body = this.translate.instant('Insufficient funds');
                    body = 'Insufficient funds';
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], BwcErrorProvider);
    return BwcErrorProvider;
}());

//# sourceMappingURL=bwc-error.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_logger_logger__ = __webpack_require__(24);
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
    function PopupProvider(alertCtrl, logger) {
        this.alertCtrl = alertCtrl;
        this.logger = logger;
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
                        text: okText,
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
                        text: cancelText,
                        handler: function () {
                            _this.logger.info('Disagree clicked');
                            resolve(false);
                        }
                    },
                    {
                        text: okText,
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
                        text: cancelText,
                        handler: function (data) {
                            _this.logger.info('Cancel clicked');
                            resolve(null);
                        }
                    },
                    {
                        text: okText,
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_logger_logger__["a" /* Logger */]])
    ], PopupProvider);
    return PopupProvider;
}());

//# sourceMappingURL=popup.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_logger_logger__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FilterProvider = (function () {
    function FilterProvider(decimalPipe, logger) {
        this.decimalPipe = decimalPipe;
        this.logger = logger;
        this.logger.info('FilterProvider initialized');
        this.formats = {
            CURRENCY_SYM: "$",
            DECIMAL_SEP: ".",
            GROUP_SEP: ","
        };
    }
    FilterProvider.prototype.formatFiatAmount = function (amount) {
        var value;
        var sep;
        var group;
        var intValue;
        var floatValue;
        var finalValue;
        value = this.decimalPipe.transform(amount);
        if (!value)
            return 0;
        sep = value.indexOf(this.formats.DECIMAL_SEP);
        group = value.indexOf(this.formats.GROUP_SEP);
        if (amount >= 0) {
            if (group > 0) {
                if (sep < 0) {
                    return value;
                }
                intValue = value.substring(0, sep);
                floatValue = parseFloat(value.substring(sep));
                floatValue = floatValue.toFixed(2);
                floatValue = floatValue.toString().substring(1);
                finalValue = intValue + floatValue;
                return finalValue;
            }
            else {
                value = parseFloat(value);
                return value.toFixed(2);
            }
        }
        return 0;
    };
    FilterProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* DecimalPipe */],
            __WEBPACK_IMPORTED_MODULE_2__providers_logger_logger__["a" /* Logger */]])
    ], FilterProvider);
    return FilterProvider;
}());

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RateProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_logger_logger__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RateProvider = (function () {
    function RateProvider(http, logger) {
        this.http = http;
        this.logger = logger;
        this.rateServiceUrl = 'https://bitpay.com/api/rates';
        this.bchRateServiceUrl = 'https://bitpay.com/api/rates/bch';
        this.logger.info('RateProvider initialized.');
        this.rates = {};
        this.alternatives = [];
        this.ratesBCH = {};
        this.SAT_TO_BTC = 1 / 1e8;
        this.BTC_TO_SAT = 1e8;
        this.ratesAvailable = false;
        this.updateRatesBtc();
        this.updateRatesBch();
    }
    RateProvider.prototype.updateRatesBtc = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getBTC().then(function (dataBTC) {
                __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](dataBTC, function (currency) {
                    _this.rates[currency.code] = currency.rate;
                    _this.alternatives.push({
                        name: currency.name,
                        isoCode: currency.code,
                        rate: currency.rate
                    });
                });
                _this.ratesAvailable = true;
                resolve();
            }).catch(function (errorBTC) {
                _this.logger.error(errorBTC);
                reject(errorBTC);
            });
        });
    };
    RateProvider.prototype.updateRatesBch = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getBCH().then(function (dataBCH) {
                __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](dataBCH, function (currency) {
                    _this.ratesBCH[currency.code] = currency.rate;
                });
                resolve();
            }).catch(function (errorBCH) {
                _this.logger.error(errorBCH);
                reject(errorBCH);
            });
        });
    };
    RateProvider.prototype.getBTC = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.rateServiceUrl).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    RateProvider.prototype.getBCH = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.bchRateServiceUrl).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    RateProvider.prototype.getRate = function (code, chain) {
        if (chain == 'bch')
            return this.ratesBCH[code];
        else
            return this.rates[code];
    };
    RateProvider.prototype.getAlternatives = function () {
        return this.alternatives;
    };
    RateProvider.prototype.isAvailable = function () {
        return this.ratesAvailable;
    };
    RateProvider.prototype.toFiat = function (satoshis, code, chain) {
        if (!this.isAvailable()) {
            return null;
        }
        return satoshis * this.SAT_TO_BTC * this.getRate(code, chain);
    };
    RateProvider.prototype.fromFiat = function (amount, code, chain) {
        if (!this.isAvailable()) {
            return null;
        }
        return amount / this.getRate(code, chain) * this.BTC_TO_SAT;
    };
    RateProvider.prototype.listAlternatives = function (sort) {
        var alternatives = __WEBPACK_IMPORTED_MODULE_2_lodash__["map"](this.getAlternatives(), function (item) {
            return {
                name: item.name,
                isoCode: item.isoCode
            };
        });
        if (sort) {
            alternatives.sort(function (a, b) {
                return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
            });
        }
        return __WEBPACK_IMPORTED_MODULE_2_lodash__["uniqBy"](alternatives, 'isoCode');
    };
    RateProvider.prototype.whenRatesAvailable = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.ratesAvailable)
                resolve();
            else {
                _this.updateRatesBtc().then(function () {
                    resolve();
                });
            }
        });
    };
    RateProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__providers_logger_logger__["a" /* Logger */]])
    ], RateProvider);
    return RateProvider;
}());

//# sourceMappingURL=rate.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TouchIdProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_logger_logger__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__platform_platform__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_fingerprint_auth__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_touch_id__ = __webpack_require__(326);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_touch_id__["a" /* TouchID */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_fingerprint_auth__["a" /* AndroidFingerprintAuth */],
            __WEBPACK_IMPORTED_MODULE_3__platform_platform__["a" /* PlatformProvider */],
            __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_logger_logger__["a" /* Logger */]])
    ], TouchIdProvider);
    return TouchIdProvider;
}());

//# sourceMappingURL=touchid.js.map

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nsalaun_ng_logger__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(3);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nsalaun_ng_logger__["b" /* Logger */]])
    ], Logger);
    return Logger;
}());

//# sourceMappingURL=logger.js.map

/***/ }),

/***/ 240:
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
webpackEmptyAsyncContext.id = 240;

/***/ }),

/***/ 282:
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
webpackEmptyAsyncContext.id = 282;

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_logger_logger__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__persistence_persistence__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(3);
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
        spendUnconfirmed: true,
        reconnectDelay: 5000,
        idleDurationMin: 4,
        settings: {
            unitName: 'cash',
            unitToSatoshi: 100,
            unitDecimals: 2,
            unitCode: 'bit',
            alternativeName: 'Swedish Krona',
            alternativeIsoCode: 'SEK',
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
        coinbase: false,
        glidera: false,
        debitcard: false,
        amazon: false,
        mercadoLibre: false,
        shapeshift: false
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_logger_logger__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_logger_logger__["a" /* Logger */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__persistence_persistence__["a" /* PersistenceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__persistence_persistence__["a" /* PersistenceProvider */]) === "function" && _b || Object])
    ], ConfigProvider);
    return ConfigProvider;
    var _a, _b;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 467:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pay',template:/*ion-inline-start:"/Users/jens/Repos/spender.cash/src/pages/pay/pay.html"*/'<!--\n  Generated template for the PayPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>PAY</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jens/Repos/spender.cash/src/pages/pay/pay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PayPage);
    return PayPage;
}());

//# sourceMappingURL=pay.js.map

/***/ }),

/***/ 468:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-transactions',template:/*ion-inline-start:"/Users/jens/Repos/spender.cash/src/pages/transactions/transactions.html"*/'<!--\n  Generated template for the TransactionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>TRANSACTIONS</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n\n  \n</ion-content>\n'/*ion-inline-end:"/Users/jens/Repos/spender.cash/src/pages/transactions/transactions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TransactionsPage);
    return TransactionsPage;
}());

//# sourceMappingURL=transactions.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__currency_symbol_currency_symbol__ = __webpack_require__(471);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/jens/Repos/spender.cash/src/pages/settings/settings.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>SETTINGS</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-list-header>\n      Wallet\n    </ion-list-header>\n    <button ion-item (click)="navToCurrencySymbol()">\n      <ion-label>Currency Symbol</ion-label>\n      <ion-note item-end>cash</ion-note>\n    </button>\n    <button ion-item (click)="navToNativeCurrency()">\n        <ion-label>Native Currency</ion-label>\n        <ion-note item-end>USD</ion-note>\n      </button>\n    <ion-item>\n        <ion-label>Hide Balance</ion-label>\n        <ion-toggle></ion-toggle>\n      </ion-item>\n    <ion-list-header>\n      Backup\n    </ion-list-header>\n    <button ion-item (click)="navToCurrencySymbol()">\n        <ion-label>Recovery Phrase</ion-label>\n      </button>\n      <button ion-item (click)="navToCurrencySymbol()">\n          <ion-label>Restore </ion-label>\n        </button>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/jens/Repos/spender.cash/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 470:
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

var ISTORAGE = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('storage');
//# sourceMappingURL=istorage.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencySymbolPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_config_config__ = __webpack_require__(40);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-currency-symbol',template:/*ion-inline-start:"/Users/jens/Repos/spender.cash/src/pages/settings/currency-symbol/currency-symbol.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>CURRENCY SYMBOL</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list radio-group>\n      <ion-item>\n        <ion-label>cash</ion-label>\n        <ion-radio value="cash" checked></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>bits</ion-label>\n        <ion-radio value="bits"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>BCH</ion-label>\n        <ion-radio value="BCH"></ion-radio>\n      </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/jens/Repos/spender.cash/src/pages/settings/currency-symbol/currency-symbol.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_config_config__["a" /* ConfigProvider */]])
    ], CurrencySymbolPage);
    return CurrencySymbolPage;
}());

//# sourceMappingURL=currency-symbol.js.map

/***/ }),

/***/ 528:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_logger_logger__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bwc_error_bwc_error__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bwc_bwc__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_config__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fee_fee__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__filter_filter__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__on_going_process_on_going_process__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__persistence_persistence__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__popup_popup__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__rate_rate__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__touchid_touchid__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__tx_format_tx_format__ = __webpack_require__(542);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Providers











var WalletProvider = (function () {
    /* TODO: update on progress
    private updateOnProgress = {}
     */
    function WalletProvider(logger, bwcProvider, txFormatProvider, configProvider, persistenceProvider, bwcErrorProvider, rateProvider, filter, popupProvider, ongoingProcessProvider, touchidProvider, events, feeProvider) {
        this.logger = logger;
        this.bwcProvider = bwcProvider;
        this.txFormatProvider = txFormatProvider;
        this.configProvider = configProvider;
        this.persistenceProvider = persistenceProvider;
        this.bwcErrorProvider = bwcErrorProvider;
        this.rateProvider = rateProvider;
        this.filter = filter;
        this.popupProvider = popupProvider;
        this.ongoingProcessProvider = ongoingProcessProvider;
        this.touchidProvider = touchidProvider;
        this.events = events;
        this.feeProvider = feeProvider;
        // Ratio low amount warning (fee/amount) in incoming TX
        this.LOW_AMOUNT_RATIO = 0.15;
        // Ratio of "many utxos" warning in total balance (fee/amount)
        this.TOTAL_LOW_WARNING_RATIO = .3;
        this.WALLET_STATUS_MAX_TRIES = 7;
        this.WALLET_STATUS_DELAY_BETWEEN_TRIES = 1.4 * 1000;
        this.SOFT_CONFIRMATION_LIMIT = 12;
        this.SAFE_CONFIRMATIONS = 6;
        this.errors = this.bwcProvider.getErrors();
        this.progressFn = {};
        this.translate = {
            'instant': function (message) { return message; }
        };
        this.logger.info('WalletService initialized.');
    }
    WalletProvider.prototype.invalidateCache = function (wallet) {
        if (wallet.cachedStatus)
            wallet.cachedStatus.isValid = false;
        if (wallet.completeHistory)
            wallet.completeHistory.isValid = false;
        if (wallet.cachedActivity)
            wallet.cachedActivity.isValid = false;
        if (wallet.cachedTxps)
            wallet.cachedTxps.isValid = false;
    };
    WalletProvider.prototype.getStatus = function (wallet, opts) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            opts = opts || {};
            var walletId = wallet.id;
            var processPendingTxps = function (status) {
                var txps = status.pendingTxps;
                var now = Math.floor(Date.now() / 1000);
                /* To test multiple outputs...
                var txp = {
                  message: 'test multi-output',
                  fee: 1000,
                  createdOn: new Date() / 1000,
                  outputs: []
                };
                function addOutput(n) {
                  txp.outputs.push({
                    amount: 600,
                    toAddress: '2N8bhEwbKtMvR2jqMRcTCQqzHP6zXGToXcK',
                    message: 'output #' + (Number(n) + 1)
                  });
                };
                lodash.times(150, addOutput);
                txps.push(txp);
                */
                __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](txps, function (tx) {
                    tx = _this.txFormatProvider.processTx(wallet.coin, tx);
                    // no future transactions...
                    if (tx.createdOn > now)
                        tx.createdOn = now;
                    tx.wallet = wallet;
                    if (!tx.wallet) {
                        _this.logger.error("no wallet at txp?");
                        return;
                    }
                    var action = __WEBPACK_IMPORTED_MODULE_2_lodash__["find"](tx.actions, {
                        copayerId: tx.wallet.copayerId
                    });
                    if (!action && tx.status == 'pending') {
                        tx.pendingForUs = true;
                    }
                    if (action && action.type == 'accept') {
                        tx.statusForUs = 'accepted';
                    }
                    else if (action && action.type == 'reject') {
                        tx.statusForUs = 'rejected';
                    }
                    else {
                        tx.statusForUs = 'pending';
                    }
                    if (!tx.deleteLockTime)
                        tx.canBeRemoved = true;
                });
                wallet.pendingTxps = txps;
            };
            var get = function () {
                return new Promise(function (resolve, reject) {
                    wallet.getStatus({
                        twoStep: true
                    }, function (err, ret) {
                        if (err) {
                            if (err instanceof _this.errors.NOT_AUTHORIZED) {
                                return reject('WALLET_NOT_REGISTERED');
                            }
                            return reject(err);
                        }
                        return resolve(ret);
                    });
                });
            };
            var cacheBalance = function (wallet, balance) {
                if (!balance)
                    return;
                var configGet = _this.configProvider.get();
                var config = configGet.wallet;
                var cache = wallet.cachedStatus;
                // Address with Balance
                cache.balanceByAddress = balance.byAddress;
                // Total wallet balance is same regardless of 'spend unconfirmed funds' setting.
                cache.totalBalanceSat = balance.totalAmount;
                // Spend unconfirmed funds
                if (config.spendUnconfirmed) {
                    cache.lockedBalanceSat = balance.lockedAmount;
                    cache.availableBalanceSat = balance.availableAmount;
                    cache.totalBytesToSendMax = balance.totalBytesToSendMax;
                    cache.pendingAmount = 0;
                    cache.spendableAmount = balance.totalAmount - balance.lockedAmount;
                }
                else {
                    cache.lockedBalanceSat = balance.lockedConfirmedAmount;
                    cache.availableBalanceSat = balance.availableConfirmedAmount;
                    cache.totalBytesToSendMax = balance.totalBytesToSendConfirmedMax;
                    cache.pendingAmount = balance.totalAmount - balance.totalConfirmedAmount;
                    cache.spendableAmount = balance.totalConfirmedAmount - balance.lockedAmount;
                }
                // Selected unit
                cache.unitToSatoshi = config.settings.unitToSatoshi;
                cache.satToUnit = 1 / cache.unitToSatoshi;
                //STR
                cache.totalBalanceStr = _this.txFormatProvider.formatAmountStr(wallet.coin, cache.totalBalanceSat);
                cache.lockedBalanceStr = _this.txFormatProvider.formatAmountStr(wallet.coin, cache.lockedBalanceSat);
                cache.availableBalanceStr = _this.txFormatProvider.formatAmountStr(wallet.coin, cache.availableBalanceSat);
                cache.spendableBalanceStr = _this.txFormatProvider.formatAmountStr(wallet.coin, cache.spendableAmount);
                cache.pendingBalanceStr = _this.txFormatProvider.formatAmountStr(wallet.coin, cache.pendingAmount);
                cache.alternativeName = config.settings.alternativeName;
                cache.alternativeIsoCode = config.settings.alternativeIsoCode;
                // Check address
                _this.isAddressUsed(wallet, balance.byAddress).then(function (used) {
                    if (used) {
                        _this.logger.debug('Address used. Creating new');
                        // Force new address
                        _this.getAddress(wallet, true).then(function (addr) {
                            _this.logger.debug('New address: ', addr);
                        }).catch(function (err) {
                            return reject(err);
                        });
                    }
                }).catch(function (err) {
                    return reject(err);
                });
                _this.rateProvider.whenRatesAvailable().then(function () {
                    var totalBalanceAlternative = _this.rateProvider.toFiat(cache.totalBalanceSat, cache.alternativeIsoCode, wallet.coin);
                    var pendingBalanceAlternative = _this.rateProvider.toFiat(cache.pendingAmount, cache.alternativeIsoCode, wallet.coin);
                    var lockedBalanceAlternative = _this.rateProvider.toFiat(cache.lockedBalanceSat, cache.alternativeIsoCode, wallet.coin);
                    var spendableBalanceAlternative = _this.rateProvider.toFiat(cache.spendableAmount, cache.alternativeIsoCode, wallet.coin);
                    var alternativeConversionRate = _this.rateProvider.toFiat(100000000, cache.alternativeIsoCode, wallet.coin);
                    cache.totalBalanceAlternative = _this.filter.formatFiatAmount(totalBalanceAlternative);
                    cache.pendingBalanceAlternative = _this.filter.formatFiatAmount(pendingBalanceAlternative);
                    cache.lockedBalanceAlternative = _this.filter.formatFiatAmount(lockedBalanceAlternative);
                    cache.spendableBalanceAlternative = _this.filter.formatFiatAmount(spendableBalanceAlternative);
                    cache.alternativeConversionRate = _this.filter.formatFiatAmount(alternativeConversionRate);
                    cache.alternativeBalanceAvailable = true;
                    cache.isRateAvailable = true;
                }).catch(function (err) {
                    _this.logger.warn(err);
                });
            };
            var isStatusCached = function () {
                return wallet.cachedStatus && wallet.cachedStatus.isValid;
            };
            var cacheStatus = function (status) {
                if (status.wallet && status.wallet.scanStatus == 'running')
                    return;
                wallet.cachedStatus = status || {};
                var cache = wallet.cachedStatus;
                cache.statusUpdatedOn = Date.now();
                cache.isValid = true;
                cache.email = status.preferences ? status.preferences.email : null;
                cacheBalance(wallet, status.balance);
            };
            var walletStatusHash = function (status) {
                return status ? status.balance.totalAmount : wallet.totalBalanceSat;
            };
            var _getStatus = function (initStatusHash, tries) {
                return new Promise(function (resolve, reject) {
                    if (isStatusCached() && !opts.force) {
                        _this.logger.debug('Wallet status cache hit:' + wallet.id);
                        cacheStatus(wallet.cachedStatus);
                        processPendingTxps(wallet.cachedStatus);
                        return resolve(wallet.cachedStatus);
                    }
                    ;
                    tries = tries || 0;
                    _this.logger.debug('Updating Status:', wallet.credentials.walletName, tries);
                    get().then(function (status) {
                        var currentStatusHash = walletStatusHash(status);
                        _this.logger.debug('Status update. hash:' + currentStatusHash + ' Try:' + tries);
                        if (opts.untilItChanges && initStatusHash == currentStatusHash && tries < _this.WALLET_STATUS_MAX_TRIES && walletId == wallet.credentials.walletId) {
                            return setTimeout(function () {
                                _this.logger.debug('Retrying update... ' + walletId + ' Try:' + tries);
                                return _getStatus(initStatusHash, ++tries);
                            }, _this.WALLET_STATUS_DELAY_BETWEEN_TRIES * tries);
                        }
                        processPendingTxps(status);
                        _this.logger.debug('Got Wallet Status for:' + wallet.credentials.walletName);
                        cacheStatus(status);
                        wallet.scanning = status.wallet && status.wallet.scanStatus == 'running';
                        return resolve(status);
                    }).catch(function (err) {
                        return reject(err);
                    });
                });
            };
            _getStatus(walletStatusHash(null), 0).then(function (status) {
                resolve(status);
            }).catch(function (err) {
                return reject(err);
            });
        });
    };
    // Check address
    WalletProvider.prototype.isAddressUsed = function (wallet, byAddress) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.persistenceProvider.getLastAddress(wallet.id).then(function (addr) {
                var used = __WEBPACK_IMPORTED_MODULE_2_lodash__["find"](byAddress, {
                    address: addr
                });
                return resolve(used);
            }).catch(function (err) {
                return reject(err);
            });
        });
    };
    WalletProvider.prototype.useLegacyAddress = function () {
        var config = this.configProvider.get();
        var walletSettings = config.wallet;
        return walletSettings.useLegacyAddress;
    };
    WalletProvider.prototype.getAddressView = function (wallet, address) {
        if (wallet.coin != 'bch' || this.useLegacyAddress())
            return address;
        return this.txFormatProvider.toCashAddress(address);
    };
    WalletProvider.prototype.getProtoAddress = function (wallet, address) {
        var proto = this.getProtocolHandler(wallet.coin);
        var protoAddr = proto + ':' + address;
        if (wallet.coin != 'bch' || this.useLegacyAddress()) {
            return protoAddr;
        }
        else {
            return protoAddr.toUpperCase();
        }
        ;
    };
    ;
    WalletProvider.prototype.getAddress = function (wallet, forceNew) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.persistenceProvider.getLastAddress(wallet.id).then(function (addr) {
                if (!forceNew && addr)
                    return resolve(addr);
                if (!wallet.isComplete())
                    return reject('WALLET_NOT_COMPLETE');
                _this.createAddress(wallet).then(function (_addr) {
                    _this.persistenceProvider.storeLastAddress(wallet.id, _addr).then(function () {
                        return resolve(_addr);
                    }).catch(function (err) {
                        return reject(err);
                    });
                }).catch(function (err) {
                    return reject(err);
                });
            }).catch(function (err) {
                return reject(err);
            });
        });
    };
    WalletProvider.prototype.createAddress = function (wallet) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.logger.debug('Creating address for wallet:', wallet.id);
            wallet.createAddress({}, function (err, addr) {
                if (err) {
                    var prefix = _this.translate.instant('Could not create address');
                    if (err instanceof _this.errors.CONNECTION_ERROR || (err.message && err.message.match(/5../))) {
                        _this.logger.warn(err);
                        return setTimeout(function () {
                            _this.createAddress(wallet);
                        }, 5000);
                    }
                    else if (err instanceof _this.errors.MAIN_ADDRESS_GAP_REACHED || (err.message && err.message == 'MAIN_ADDRESS_GAP_REACHED')) {
                        _this.logger.warn(err);
                        prefix = null;
                        wallet.getMainAddresses({
                            reverse: true,
                            limit: 1
                        }, function (err, addr) {
                            if (err)
                                return reject(err);
                            return resolve(addr[0].address);
                        });
                    }
                    ;
                    _this.bwcErrorProvider.cb(err, prefix).then(function (msg) {
                        return reject(msg);
                    });
                }
                else
                    return resolve(addr.address);
            });
        });
    };
    WalletProvider.prototype.getSavedTxs = function (walletId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.persistenceProvider.getTxHistory(walletId).then(function (txs) {
                var localTxs = [];
                if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](txs)) {
                    return resolve(localTxs);
                }
                ;
                try {
                    localTxs = JSON.parse(txs);
                }
                catch (ex) {
                    localTxs = txs;
                }
                ;
                return resolve(__WEBPACK_IMPORTED_MODULE_2_lodash__["compact"](localTxs));
            }).catch(function (err) {
                return reject(err);
            });
        });
    };
    WalletProvider.prototype.getTxsFromServer = function (wallet, skip, endingTxid, limit) {
        return new Promise(function (resolve, reject) {
            var res = [];
            var result = {
                res: res,
                shouldContinue: res.length >= limit
            };
            wallet.getTxHistory({
                skip: skip,
                limit: limit
            }, function (err, txsFromServer) {
                if (err)
                    return reject(err);
                if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](txsFromServer))
                    return resolve(result);
                res = __WEBPACK_IMPORTED_MODULE_2_lodash__["takeWhile"](txsFromServer, function (tx) {
                    return tx.txid != endingTxid;
                });
                result.res = res;
                result.shouldContinue = res.length >= limit;
                return resolve(result);
            });
        });
    };
    WalletProvider.prototype.updateLocalTxHistory = function (wallet, opts) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            opts = opts ? opts : {};
            var FIRST_LIMIT = 5;
            var LIMIT = 50;
            var requestLimit = FIRST_LIMIT;
            var walletId = wallet.credentials.walletId;
            _this.progressFn[walletId] = opts.progressFn || (function () { });
            var foundLimitTx = [];
            var fixTxsUnit = function (txs) {
                if (!txs || !txs[0] || !txs[0].amountStr)
                    return;
                var cacheCoin = txs[0].amountStr.split(' ')[1];
                if (cacheCoin == 'bits') {
                    _this.logger.debug('Fixing Tx Cache Unit to: ' + wallet.coin);
                    __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](txs, function (tx) {
                        tx.amountStr = _this.txFormatProvider.formatAmountStr(wallet.coin, tx.amount);
                        tx.feeStr = _this.txFormatProvider.formatAmountStr(wallet.coin, tx.fees);
                    });
                }
                ;
            };
            /* TODO: update on progress
            if (updateOnProgress[wallet.id]) {
              $log.warn('History update already on progress for: '+ wallet.credentials.walletName);
      
              if (opts.progressFn) {
                $log.debug('Rewriting progressFn');
                progressFn[walletId] = opts.progressFn;
              }
              updateOnProgress[wallet.id].push(cb);
              return; // no callback call yet.
            }
      
            updateOnProgress[walletId] = [cb];
             */
            _this.getSavedTxs(walletId).then(function (txsFromLocal) {
                fixTxsUnit(txsFromLocal);
                var confirmedTxs = _this.removeAndMarkSoftConfirmedTx(txsFromLocal);
                var endingTxid = confirmedTxs[0] ? confirmedTxs[0].txid : null;
                var endingTs = confirmedTxs[0] ? confirmedTxs[0].time : null;
                // First update
                _this.progressFn[walletId](txsFromLocal, 0);
                wallet.completeHistory = txsFromLocal;
                var getNewTxs = function (newTxs, skip) {
                    return new Promise(function (resolve, reject) {
                        _this.getTxsFromServer(wallet, skip, endingTxid, requestLimit).then(function (result) {
                            var res = result.res;
                            var shouldContinue = result.shouldContinue ? result.shouldContinue : false;
                            newTxs = newTxs.concat(_this.processNewTxs(wallet, __WEBPACK_IMPORTED_MODULE_2_lodash__["compact"](res)));
                            _this.progressFn[walletId](newTxs.concat(txsFromLocal), newTxs.length);
                            skip = skip + requestLimit;
                            _this.logger.debug('Syncing TXs. Got:' + newTxs.length + ' Skip:' + skip, ' EndingTxid:', endingTxid, ' Continue:', shouldContinue);
                            // TODO Dirty <HACK>
                            // do not sync all history, just looking for a single TX.
                            if (opts.limitTx) {
                                foundLimitTx = __WEBPACK_IMPORTED_MODULE_2_lodash__["find"](newTxs, {
                                    txid: opts.limitTx,
                                });
                                if (!__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](foundLimitTx)) {
                                    _this.logger.debug('Found limitTX: ' + opts.limitTx);
                                    return resolve([foundLimitTx]);
                                }
                            }
                            // </HACK>
                            if (!shouldContinue) {
                                _this.logger.debug('Finished Sync: New / soft confirmed Txs: ' + newTxs.length);
                                return resolve(newTxs);
                            }
                            ;
                            requestLimit = LIMIT;
                            getNewTxs(newTxs, skip).then(function (txs) {
                                resolve(txs);
                            });
                        }).catch(function (err) {
                            _this.logger.warn(_this.bwcErrorProvider.msg(err, 'Server Error')); //TODO
                            if (err instanceof _this.errors.CONNECTION_ERROR || (err.message && err.message.match(/5../))) {
                                _this.logger.info('Retrying history download in 5 secs...');
                                return reject(setTimeout(function () {
                                    return getNewTxs(newTxs, skip);
                                }, 5000));
                            }
                            ;
                            return reject(err);
                        });
                    });
                };
                getNewTxs([], 0).then(function (txs) {
                    var array = __WEBPACK_IMPORTED_MODULE_2_lodash__["compact"](txs.concat(confirmedTxs));
                    var newHistory = __WEBPACK_IMPORTED_MODULE_2_lodash__["uniqBy"](array, function (x) {
                        return x.txid;
                    });
                    var updateNotes = function () {
                        return new Promise(function (resolve, reject) {
                            if (!endingTs)
                                return resolve();
                            _this.logger.debug('Syncing notes from: ' + endingTs);
                            wallet.getTxNotes({
                                minTs: endingTs
                            }, function (err, notes) {
                                if (err) {
                                    _this.logger.warn(err);
                                    return reject(err);
                                }
                                ;
                                __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](notes, function (note) {
                                    _this.logger.debug('Note for ' + note.txid);
                                    __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](newHistory, function (tx) {
                                        if (tx.txid == note.txid) {
                                            _this.logger.debug('...updating note for ' + note.txid);
                                            tx.note = note;
                                        }
                                        ;
                                    });
                                });
                                return resolve();
                            });
                        });
                    };
                    var updateLowAmount = function (txs) {
                        if (!opts.lowAmount)
                            return;
                        __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](txs, function (tx) {
                            tx.lowAmount = tx.amount < opts.lowAmount;
                        });
                    };
                    _this.getLowAmount(wallet).then(function (fee) {
                        opts.lowAmount = fee;
                        updateLowAmount(txs);
                    });
                    updateNotes().then(function () {
                        // <HACK>
                        if (!__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](foundLimitTx)) {
                            _this.logger.debug('Tx history read until limitTx: ' + opts.limitTx);
                            return resolve(newHistory);
                        }
                        // </HACK>
                        var historyToSave = JSON.stringify(newHistory);
                        __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](txs, function (tx) {
                            tx.recent = true;
                        });
                        _this.logger.debug('Tx History synced. Total Txs: ' + newHistory.length);
                        // Final update
                        if (walletId == wallet.credentials.walletId) {
                            wallet.completeHistory = newHistory;
                        }
                        return _this.persistenceProvider.setTxHistory(walletId, historyToSave).then(function () {
                            _this.logger.debug('Tx History saved.');
                            return resolve();
                        }).catch(function (err) {
                            return reject(err);
                        });
                    }).catch(function (err) {
                        return reject(err);
                    });
                }).catch(function (err) {
                    /* TODO: update on progress
                    lodash.each(this.updateOnProgress[walletId], function(x) {
                      x.apply(this,err);
                    });
                    this.updateOnProgress[walletId] = false;
                     */
                    return reject(err);
                });
            }).catch(function (err) {
                return reject(err);
            });
        });
    };
    WalletProvider.prototype.processNewTxs = function (wallet, txs) {
        var _this = this;
        var now = Math.floor(Date.now() / 1000);
        var txHistoryUnique = {};
        var ret = [];
        wallet.hasUnsafeConfirmed = false;
        __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](txs, function (tx) {
            tx = _this.txFormatProvider.processTx(wallet.coin, tx);
            // no future transactions...
            if (tx.time > now)
                tx.time = now;
            if (tx.confirmations >= _this.SAFE_CONFIRMATIONS) {
                tx.safeConfirmed = _this.SAFE_CONFIRMATIONS + '+';
            }
            else {
                tx.safeConfirmed = false;
                wallet.hasUnsafeConfirmed = true;
            }
            ;
            if (tx.note) {
                delete tx.note.encryptedEditedByName;
                delete tx.note.encryptedBody;
            }
            ;
            if (!txHistoryUnique[tx.txid]) {
                ret.push(tx);
                txHistoryUnique[tx.txid] = true;
            }
            else {
                _this.logger.debug('Ignoring duplicate TX in history: ' + tx.txid);
            }
            ;
        });
        return ret;
    };
    WalletProvider.prototype.removeAndMarkSoftConfirmedTx = function (txs) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](txs, function (tx) {
            if (tx.confirmations >= _this.SOFT_CONFIRMATION_LIMIT)
                return tx;
            tx.recent = true;
        });
    };
    // Approx utxo amount, from which the uxto is economically redeemable
    WalletProvider.prototype.getLowAmount = function (wallet) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getMinFee(wallet).then(function (fee) {
                var minFee = fee;
                return resolve(minFee / _this.LOW_AMOUNT_RATIO);
            }).catch(function (err) {
                return reject(err);
            });
        });
    };
    // Approx utxo amount, from which the uxto is economically redeemable
    WalletProvider.prototype.getMinFee = function (wallet, nbOutputs) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.feeProvider.getFeeLevels(wallet.coin).then(function (data) {
                var normalLevelRate = __WEBPACK_IMPORTED_MODULE_2_lodash__["find"](data.levels[wallet.network], function (level) {
                    return level.level === 'normal';
                });
                var lowLevelRate = (normalLevelRate.feePerKb / 1000).toFixed(0);
                var size = _this.getEstimatedTxSize(wallet, nbOutputs);
                return resolve(size * parseInt(lowLevelRate, 10));
            }).catch(function (err) {
                return reject(err);
            });
        });
    };
    ;
    // These 2 functions were taken from
    // https://github.com/bitpay/bitcore-wallet-service/blob/master/lib/model/txproposal.js#L243
    WalletProvider.prototype.getEstimatedSizeForSingleInput = function (wallet) {
        switch (wallet.credentials.addressType) {
            case 'P2PKH':
                return 147;
            default:
            case 'P2SH':
                return wallet.m * 72 + wallet.n * 36 + 44;
        }
        ;
    };
    WalletProvider.prototype.getEstimatedTxSize = function (wallet, nbOutputs) {
        // Note: found empirically based on all multisig P2SH inputs and within m & n allowed limits.
        nbOutputs = nbOutputs ? nbOutputs : 2; // Assume 2 outputs
        var safetyMargin = 0.02;
        var overhead = 4 + 4 + 9 + 9;
        var inputSize = this.getEstimatedSizeForSingleInput(wallet);
        var outputSize = 34;
        var nbInputs = 1; //Assume 1 input
        var size = overhead + inputSize * nbInputs + outputSize * nbOutputs;
        return parseInt((size * (1 + safetyMargin)).toFixed(0), 10);
    };
    WalletProvider.prototype.getTxNote = function (wallet, txid) {
        return new Promise(function (resolve, reject) {
            wallet.getTxNote({
                txid: txid
            }, function (err, note) {
                if (err)
                    return reject(err);
                return resolve(note);
            });
        });
    };
    WalletProvider.prototype.editTxNote = function (wallet, args) {
        return new Promise(function (resolve, reject) {
            wallet.editTxNote(args, function (err, res) {
                if (err)
                    return reject(err);
                return resolve(res);
            });
        });
    };
    WalletProvider.prototype.getTxp = function (wallet, txpid) {
        return new Promise(function (resolve, reject) {
            wallet.getTx(txpid, function (err, txp) {
                if (err)
                    return reject(err);
                return resolve(txp);
            });
        });
    };
    WalletProvider.prototype.getTx = function (wallet, txid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var finish = function (list) {
                var tx = __WEBPACK_IMPORTED_MODULE_2_lodash__["find"](list, {
                    txid: txid
                });
                if (!tx)
                    return reject('Could not get transaction');
                return tx;
            };
            if (wallet.completeHistory && wallet.completeHistory.isValid) {
                var tx = finish(wallet.completeHistory);
                return resolve(tx);
            }
            else {
                var opts = {
                    force: true
                };
                _this.getTxHistory(wallet, opts).then(function (txHistory) {
                    var tx = finish(txHistory);
                    return resolve(tx);
                }).catch(function (err) {
                    return reject(err);
                });
            }
            ;
        });
    };
    WalletProvider.prototype.getTxHistory = function (wallet, opts) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            opts = opts ? opts : {};
            if (!wallet.isComplete())
                return resolve();
            var isHistoryCached = function () {
                return wallet.completeHistory && wallet.completeHistory.isValid;
            };
            if (isHistoryCached() && !opts.force)
                return resolve(wallet.completeHistory);
            _this.logger.debug('Updating Transaction History');
            _this.updateLocalTxHistory(wallet, opts).then(function (txs) {
                if (opts.limitTx) {
                    return resolve(txs);
                }
                ;
                wallet.completeHistory.isValid = true;
                return resolve(wallet.completeHistory);
            }).catch(function (err) {
                return reject(err);
            });
        });
    };
    WalletProvider.prototype.isEncrypted = function (wallet) {
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](wallet))
            return;
        var isEncrypted = wallet.isPrivKeyEncrypted();
        if (isEncrypted)
            this.logger.debug('Wallet is encrypted');
        return isEncrypted;
    };
    WalletProvider.prototype.createTx = function (wallet, txp) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](txp) || __WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](wallet))
                return reject('MISSING_PARAMETER');
            wallet.createTxProposal(txp, function (err, createdTxp) {
                if (err)
                    return reject(err);
                else {
                    _this.logger.debug('Transaction created');
                    return resolve(createdTxp);
                }
                ;
            });
        });
    };
    WalletProvider.prototype.publishTx = function (wallet, txp) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](txp) || __WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](wallet))
                return reject('MISSING_PARAMETER');
            wallet.publishTxProposal({
                txp: txp
            }, function (err, publishedTx) {
                if (err)
                    return reject(err);
                else {
                    _this.logger.debug('Transaction published');
                    return resolve(publishedTx);
                }
                ;
            });
        });
    };
    WalletProvider.prototype.signTx = function (wallet, txp, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!wallet || !txp)
                return reject('MISSING_PARAMETER');
            try {
                wallet.signTxProposal(txp, password, function (err, signedTxp) {
                    _this.logger.debug('Transaction signed err:' + err);
                    if (err)
                        return reject(err);
                    return resolve(signedTxp);
                });
            }
            catch (e) {
                _this.logger.warn('Error at signTxProposal:', e);
                return reject(e);
            }
            ;
        });
    };
    WalletProvider.prototype.broadcastTx = function (wallet, txp) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](txp) || __WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](wallet))
                return reject('MISSING_PARAMETER');
            if (txp.status != 'accepted')
                return reject('TX_NOT_ACCEPTED');
            wallet.broadcastTxProposal(txp, function (err, broadcastedTxp, memo) {
                if (err)
                    return reject(err);
                _this.logger.debug('Transaction broadcasted');
                if (memo)
                    _this.logger.info(memo);
                return resolve(broadcastedTxp);
            });
        });
    };
    WalletProvider.prototype.rejectTx = function (wallet, txp) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](txp) || __WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](wallet))
                return reject('MISSING_PARAMETER');
            wallet.rejectTxProposal(txp, null, function (err, rejectedTxp) {
                if (err)
                    return reject(err);
                _this.logger.debug('Transaction rejected');
                return resolve(rejectedTxp);
            });
        });
    };
    WalletProvider.prototype.removeTx = function (wallet, txp) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](txp) || __WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](wallet))
                return reject('MISSING_PARAMETER');
            wallet.removeTxProposal(txp, function (err) {
                _this.logger.debug('Transaction removed');
                _this.invalidateCache(wallet);
                _this.events.publish('Local/TxAction', wallet.id);
                return resolve(err);
            });
        });
    };
    WalletProvider.prototype.updateRemotePreferences = function (clients, prefs) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            prefs = prefs ? prefs : {};
            if (!__WEBPACK_IMPORTED_MODULE_2_lodash__["isArray"](clients))
                clients = [clients];
            var updateRemotePreferencesFor = function (clients, prefs) {
                return new Promise(function (resolve, reject) {
                    var wallet = clients.shift();
                    if (!wallet)
                        return resolve();
                    _this.logger.debug('Saving remote preferences', wallet.credentials.walletName, prefs);
                    wallet.savePreferences(prefs, function (err) {
                        if (err) {
                            _this.popupProvider.ionicAlert(_this.bwcErrorProvider.msg(err, _this.translate.instant('Could not save preferences on the server')));
                            return reject(err);
                        }
                        updateRemotePreferencesFor(clients, prefs).then(function () {
                            return resolve();
                        }).catch(function (err) {
                            return reject(err);
                        });
                    });
                });
            };
            // Update this JIC.
            var config = _this.configProvider.get();
            //prefs.email  (may come from arguments)
            prefs.email = config.emailNotifications.email;
            prefs.language = "en"; // This line was hardcoded - TODO: prefs.language = uxLanguage.getCurrentLanguage();
            //let walletSettings = config.wallet.settings;
            // prefs.unit = walletSettings.unitCode; // TODO: remove, not used
            updateRemotePreferencesFor(__WEBPACK_IMPORTED_MODULE_2_lodash__["clone"](clients), prefs).then(function () {
                _this.logger.debug('Remote preferences saved for' + __WEBPACK_IMPORTED_MODULE_2_lodash__["map"](clients, function (x) {
                    return x.credentials.walletId;
                }).join(','));
                __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](clients, function (c) {
                    c.preferences = __WEBPACK_IMPORTED_MODULE_2_lodash__["assign"](prefs, c.preferences);
                });
                return resolve();
            }).catch(function (err) {
                return reject(err);
            });
        });
    };
    WalletProvider.prototype.recreate = function (wallet) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.logger.debug('Recreating wallet:', wallet.id);
            _this.ongoingProcessProvider.set('recreating', true);
            wallet.recreateWallet(function (err) {
                wallet.notAuthorized = false;
                _this.ongoingProcessProvider.set('recreating', false);
                if (err)
                    return reject(err);
                return resolve();
            });
        });
    };
    WalletProvider.prototype.startScan = function (wallet) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.logger.debug('Scanning wallet ' + wallet.id);
            if (!wallet.isComplete())
                return reject();
            wallet.scanning = true;
            wallet.startScan({
                includeCopayerBranches: true,
            }, function (err) {
                if (err)
                    return reject(err);
                return resolve();
            });
        });
    };
    WalletProvider.prototype.clearTxHistory = function (wallet) {
        this.invalidateCache(wallet);
        this.persistenceProvider.removeTxHistory(wallet.id);
    };
    WalletProvider.prototype.expireAddress = function (wallet) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.logger.debug('Cleaning Address ' + wallet.id);
            _this.persistenceProvider.clearLastAddress(wallet.id).then(function () {
                return resolve();
            }).catch(function (err) {
                return reject(err);
            });
        });
    };
    WalletProvider.prototype.getMainAddresses = function (wallet, opts) {
        return new Promise(function (resolve, reject) {
            opts = opts || {};
            opts.reverse = true;
            wallet.getMainAddresses(opts, function (err, addresses) {
                if (err)
                    return reject(err);
                return resolve(addresses);
            });
        });
    };
    WalletProvider.prototype.getBalance = function (wallet, opts) {
        return new Promise(function (resolve, reject) {
            opts = opts || {};
            wallet.getBalance(opts, function (err, resp) {
                if (err)
                    return reject(err);
                return resolve(resp);
            });
        });
    };
    WalletProvider.prototype.getLowUtxos = function (wallet) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            wallet.getUtxos({
                coin: wallet.coin
            }, function (err, resp) {
                if (err || !resp || !resp.length)
                    return reject(err);
                _this.getMinFee(wallet, resp.length).then(function (fee) {
                    var minFee = fee;
                    var balance = __WEBPACK_IMPORTED_MODULE_2_lodash__["sumBy"](resp, 'satoshis');
                    // for 2 outputs
                    _this.getLowAmount(wallet).then(function (fee) {
                        var lowAmount = fee;
                        var lowUtxos = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](resp, function (x) {
                            return x.satoshis < lowAmount;
                        });
                        var totalLow = __WEBPACK_IMPORTED_MODULE_2_lodash__["sumBy"](lowUtxos, 'satoshis');
                        return resolve({
                            allUtxos: resp || [],
                            lowUtxos: lowUtxos || [],
                            totalLow: totalLow,
                            warning: minFee / balance > _this.TOTAL_LOW_WARNING_RATIO,
                            minFee: minFee,
                        });
                    });
                });
            });
        });
    };
    WalletProvider.prototype.isReady = function (wallet) {
        if (!wallet.isComplete())
            return 'WALLET_NOT_COMPLETE';
        if (wallet.needsBackup)
            return 'WALLET_NEEDS_BACKUP';
        return null;
    };
    // An alert dialog
    WalletProvider.prototype.askPassword = function (name, title) {
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
    WalletProvider.prototype.encrypt = function (wallet) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var title = _this.translate.instant('Enter new spending password');
            var warnMsg = _this.translate.instant('Your wallet key will be encrypted. The Spending Password cannot be recovered. Be sure to write it down.');
            _this.askPassword(warnMsg, title).then(function (password) {
                if (!password)
                    return reject(_this.translate.instant('no password'));
                title = _this.translate.instant('Confirm your new spending password');
                _this.askPassword(warnMsg, title).then(function (password2) {
                    if (!password2 || password != password2)
                        return reject(_this.translate.instant('password mismatch'));
                    wallet.encryptPrivateKey(password);
                    return resolve();
                }).catch(function (err) {
                    return reject(err);
                });
            }).catch(function (err) {
                return reject(err);
            });
        });
    };
    WalletProvider.prototype.decrypt = function (wallet) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.logger.debug('Disabling private key encryption for' + wallet.name);
            _this.askPassword(null, _this.translate.instant('Enter Spending Password')).then(function (password) {
                if (!password)
                    return reject(_this.translate.instant('no password'));
                try {
                    wallet.decryptPrivateKey(password);
                }
                catch (e) {
                    return reject(e);
                }
                return resolve();
            });
        });
    };
    WalletProvider.prototype.handleEncryptedWallet = function (wallet) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.isEncrypted(wallet))
                return resolve();
            _this.askPassword(wallet.name, _this.translate.instant('Enter Spending Password')).then(function (password) {
                if (!password)
                    return reject(_this.translate.instant('No password'));
                if (!wallet.checkPassword(password))
                    return reject(_this.translate.instant('Wrong password'));
                return resolve(password);
            });
        });
    };
    WalletProvider.prototype.reject = function (wallet, txp) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.ongoingProcessProvider.set('rejectTx', true);
            _this.rejectTx(wallet, txp).then(function (txpr) {
                _this.invalidateCache(wallet);
                _this.ongoingProcessProvider.set('rejectTx', false);
                _this.events.publish('Local/TxAction', wallet.id);
                return resolve(txpr);
            }).catch(function (err) {
                _this.ongoingProcessProvider.set('rejectTx', false);
                return reject(err);
            });
        });
    };
    WalletProvider.prototype.onlyPublish = function (wallet, txp) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.ongoingProcessProvider.set('sendingTx', true);
            _this.publishTx(wallet, txp).then(function (publishedTxp) {
                _this.invalidateCache(wallet);
                _this.ongoingProcessProvider.set('sendingTx', false);
                _this.events.publish('Local/TxAction', wallet.id);
                return resolve();
            }).catch(function (err) {
                _this.ongoingProcessProvider.set('sendingTx', false);
                return reject(_this.bwcErrorProvider.msg(err));
            });
        });
    };
    WalletProvider.prototype.prepare = function (wallet) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.touchidProvider.checkWallet(wallet).then(function () {
                _this.handleEncryptedWallet(wallet).then(function (password) {
                    return resolve(password);
                }).catch(function (err) {
                    return reject(err);
                });
            }).catch(function (err) {
                return reject(err);
            });
        });
    };
    WalletProvider.prototype.signAndBroadcast = function (wallet, publishedTxp, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.ongoingProcessProvider.set('signingTx', true);
            _this.signTx(wallet, publishedTxp, password).then(function (signedTxp) {
                _this.invalidateCache(wallet);
                if (signedTxp.status == 'accepted') {
                    _this.ongoingProcessProvider.set('broadcastingTx', true);
                    _this.broadcastTx(wallet, signedTxp).then(function (broadcastedTxp) {
                        _this.ongoingProcessProvider.clear();
                        _this.events.publish('Local/TxAction', wallet.id);
                        return resolve(broadcastedTxp);
                    }).catch(function (err) {
                        _this.ongoingProcessProvider.clear();
                        return reject(_this.bwcErrorProvider.msg(err));
                    });
                }
                else {
                    _this.ongoingProcessProvider.clear();
                    _this.events.publish('Local/TxAction', wallet.id);
                    return resolve(signedTxp);
                }
                ;
            }).catch(function (err) {
                _this.ongoingProcessProvider.clear();
                _this.logger.warn('sign error:' + err);
                var msg = err && err.message ? err.message : _this.translate.instant('The payment was created but could not be completed. Please try again from home screen');
                _this.events.publish('Local/TxAction', wallet.id);
                return reject(msg);
            });
        });
    };
    WalletProvider.prototype.publishAndSign = function (wallet, txp) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // Already published?
            if (txp.status == 'pending') {
                _this.prepare(wallet).then(function (password) {
                    _this.signAndBroadcast(wallet, txp, password).then(function (broadcastedTxp) {
                        return resolve(broadcastedTxp);
                    }).catch(function (err) {
                        return reject(err);
                    });
                }).catch(function (err) {
                    return reject(_this.bwcErrorProvider.msg(err));
                });
            }
            else {
                _this.prepare(wallet).then(function (password) {
                    _this.ongoingProcessProvider.set('sendingTx', true);
                    _this.publishTx(wallet, txp).then(function (publishedTxp) {
                        _this.signAndBroadcast(wallet, publishedTxp, password).then(function (broadcastedTxp) {
                            return resolve(broadcastedTxp);
                        }).catch(function (err) {
                            return reject(err);
                        });
                    }).catch(function (err) {
                        _this.ongoingProcessProvider.clear();
                        return reject(_this.bwcErrorProvider.msg(err));
                    });
                }).catch(function (err) {
                    return reject(_this.bwcErrorProvider.msg(err));
                });
            }
            ;
        });
    };
    WalletProvider.prototype.getEncodedWalletInfo = function (wallet, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var derivationPath = wallet.credentials.getBaseAddressDerivationPath();
            var encodingType = {
                mnemonic: 1,
                xpriv: 2,
                xpub: 3
            };
            var info = {};
            // not supported yet
            if (wallet.credentials.derivationStrategy != 'BIP44' || !wallet.canSign())
                return reject(_this.translate.instant('Exporting via QR not supported for this wallet'));
            var keys = _this.getKeysWithPassword(wallet, password);
            if (keys.mnemonic) {
                info = {
                    type: encodingType.mnemonic,
                    data: keys.mnemonic,
                };
            }
            else {
                info = {
                    type: encodingType.xpriv,
                    data: keys.xPrivKey
                };
            }
            return resolve(info.type + '|' + info.data + '|' + wallet.credentials.network.toLowerCase() + '|' + derivationPath + '|' + (wallet.credentials.mnemonicHasPassphrase));
        });
    };
    WalletProvider.prototype.getKeysWithPassword = function (wallet, password) {
        try {
            return wallet.getKeys(password);
        }
        catch (e) {
            this.logger.debug(e);
        }
    };
    WalletProvider.prototype.setTouchId = function (wallet, enabled) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var opts = {
                touchIdFor: {}
            };
            opts.touchIdFor[wallet.id] = enabled;
            _this.touchidProvider.checkWallet(wallet).then(function () {
                _this.configProvider.set(opts);
                return resolve();
            }).catch(function (err) {
                opts.touchIdFor[wallet.id] = !enabled;
                _this.logger.debug('Error with fingerprint:' + err);
                _this.configProvider.set(opts);
                return reject(err);
            });
        });
    };
    WalletProvider.prototype.getKeys = function (wallet) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.prepare(wallet).then(function (password) {
                var keys;
                try {
                    keys = wallet.getKeys(password);
                }
                catch (e) {
                    return reject(e);
                }
                return resolve(keys);
            }).catch(function (err) {
                return reject(err);
            });
        });
    };
    WalletProvider.prototype.getSendMaxInfo = function (wallet, opts) {
        return new Promise(function (resolve, reject) {
            opts = opts || {};
            wallet.getSendMaxInfo(opts, function (err, res) {
                if (err)
                    return reject(err);
                return resolve(res);
            });
        });
    };
    WalletProvider.prototype.getProtocolHandler = function (coin) {
        if (coin == 'bch') {
            return 'bitcoincash';
        }
        else {
            return 'bitcoin';
        }
    };
    WalletProvider.prototype.copyCopayers = function (wallet, newWallet) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var walletPrivKey = _this.bwcProvider.getBitcore().PrivateKey.fromString(wallet.credentials.walletPrivKey);
            var copayer = 1;
            var i = 0;
            __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](wallet.credentials.publicKeyRing, function (item) {
                var name = item.copayerName || ('copayer ' + copayer++);
                newWallet._doJoinWallet(newWallet.credentials.walletId, walletPrivKey, item.xPubKey, item.requestPubKey, name, {
                    coin: newWallet.credentials.coin,
                }, function (err) {
                    //Ignore error is copayer already in wallet
                    if (err && !(err instanceof _this.errors.COPAYER_IN_WALLET))
                        return reject(err);
                    if (++i == wallet.credentials.publicKeyRing.length)
                        return resolve();
                });
            });
        });
    };
    ;
    WalletProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_logger_logger__["a" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_5__bwc_bwc__["a" /* BwcProvider */],
            __WEBPACK_IMPORTED_MODULE_14__tx_format_tx_format__["a" /* TxFormatProvider */],
            __WEBPACK_IMPORTED_MODULE_6__config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_10__persistence_persistence__["a" /* PersistenceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__bwc_error_bwc_error__["a" /* BwcErrorProvider */],
            __WEBPACK_IMPORTED_MODULE_12__rate_rate__["a" /* RateProvider */],
            __WEBPACK_IMPORTED_MODULE_8__filter_filter__["a" /* FilterProvider */],
            __WEBPACK_IMPORTED_MODULE_11__popup_popup__["a" /* PopupProvider */],
            __WEBPACK_IMPORTED_MODULE_9__on_going_process_on_going_process__["a" /* OnGoingProcessProvider */],
            __WEBPACK_IMPORTED_MODULE_13__touchid_touchid__["a" /* TouchIdProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_7__fee_fee__["a" /* FeeProvider */]])
    ], WalletProvider);
    return WalletProvider;
}());

//# sourceMappingURL=wallet.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_logger_logger__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_bwc_bwc__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(3);
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


//providers



var FeeProvider = (function () {
    function FeeProvider(configProvider, logger, bwcProvider) {
        this.configProvider = configProvider;
        this.logger = logger;
        this.bwcProvider = bwcProvider;
        this.translate = {
            'instant': function (message) { return message; }
        };
        this.CACHE_TIME_TS = 60;
        // Constant fee options to translate
        this.feeOpts = {
            urgent: this.translate.instant('Urgent'),
            priority: this.translate.instant('Priority'),
            normal: this.translate.instant('Normal'),
            economy: this.translate.instant('Economy'),
            superEconomy: this.translate.instant('Super Economy'),
            custom: this.translate.instant('Custom')
        };
        this.cache = {
            updateTs: 0,
            coin: ''
        };
        this.logger.info('FeeProvider initialized.');
    }
    FeeProvider.prototype.getCurrentFeeLevel = function () {
        return this.configProvider.get().wallet.settings.feeLevel || 'normal';
    };
    ;
    FeeProvider.prototype.getFeeRate = function (coin, network, feeLevel) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (feeLevel == 'custom')
                return resolve();
            network = network || 'livenet';
            _this.getFeeLevels(coin).then(function (response) {
                var feeLevelRate;
                if (response.fromCache) {
                    feeLevelRate = __WEBPACK_IMPORTED_MODULE_4_lodash__["find"](response.levels[network], function (o) {
                        return o.level == feeLevel;
                    });
                }
                else {
                    feeLevelRate = __WEBPACK_IMPORTED_MODULE_4_lodash__["find"](response.levels[network], function (o) {
                        return o.level == feeLevel;
                    });
                }
                if (!feeLevelRate || !feeLevelRate.feePerKb) {
                    var msg = _this.translate.instant('Could not get dynamic fee for level:') + ' ' + feeLevel;
                    return reject(msg);
                }
                var feeRate = feeLevelRate.feePerKb;
                if (!response.fromCache)
                    _this.logger.debug('Dynamic fee: ' + feeLevel + '/' + network + ' ' + (feeLevelRate.feePerKb / 1000).toFixed() + ' SAT/B');
                return resolve(feeRate);
            }).catch(function (err) {
                return reject(err);
            });
        });
    };
    ;
    FeeProvider.prototype.getCurrentFeeRate = function (coin, network) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getFeeRate(coin, network, _this.getCurrentFeeLevel()).then(function (data) {
                return resolve(data);
            }).catch(function (err) {
                return reject(err);
            });
        });
    };
    ;
    FeeProvider.prototype.getFeeLevels = function (coin) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            coin = coin || 'btc';
            if (_this.cache.coin == coin && _this.cache.updateTs > Date.now() - _this.CACHE_TIME_TS * 1000) {
                return resolve({ levels: _this.cache.data, fromCache: true });
            }
            var walletClient = _this.bwcProvider.getClient(null, {});
            walletClient.getFeeLevels(coin, 'livenet', function (errLivenet, levelsLivenet) {
                if (errLivenet) {
                    return reject(_this.translate.instant('Could not get dynamic fee'));
                }
                walletClient.getFeeLevels('btc', 'testnet', function (errTestnet, levelsTestnet) {
                    if (errTestnet) {
                        return reject(_this.translate.instant('Could not get dynamic fee'));
                    }
                    _this.cache.updateTs = Date.now();
                    _this.cache.coin = coin;
                    _this.cache.data = {
                        'livenet': levelsLivenet,
                        'testnet': levelsTestnet
                    };
                    return resolve({ levels: _this.cache.data });
                });
            });
        });
    };
    FeeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_logger_logger__["a" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_2__providers_bwc_bwc__["a" /* BwcProvider */]])
    ], FeeProvider);
    return FeeProvider;
}());

//# sourceMappingURL=fee.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TxFormatProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_logger_logger__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bwc_bwc__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__filter_filter__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rate_rate__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TxFormatProvider = (function () {
    function TxFormatProvider(bwcProvider, rate, configProvider, filter, logger) {
        this.bwcProvider = bwcProvider;
        this.rate = rate;
        this.configProvider = configProvider;
        this.filter = filter;
        this.logger = logger;
        this.logger.info('TxFormatProvider initialized.');
        this.bitcoreCash = this.bwcProvider.getBitcoreCash();
    }
    TxFormatProvider.prototype.toCashAddress = function (address, withPrefix) {
        var cashAddr = (this.bitcoreCash.Address(address)).toCashAddress();
        if (withPrefix) {
            return cashAddr;
        }
        return cashAddr.split(':')[1]; // rm prefix
    };
    TxFormatProvider.prototype.formatAmount = function (satoshis, fullPrecision) {
        var settings = this.configProvider.get().wallet.settings;
        if (settings.unitCode == 'sat')
            return satoshis;
        //TODO : now only works for english, specify opts to change thousand separator and decimal separator
        var opts = {
            fullPrecision: !!fullPrecision
        };
        return this.bwcProvider.getUtils().formatAmount(satoshis, settings.unitCode, opts);
    };
    TxFormatProvider.prototype.formatAmountStr = function (coin, satoshis) {
        if (isNaN(satoshis))
            return;
        return (this.formatAmount(satoshis) + ' ' + coin.toUpperCase());
    };
    TxFormatProvider.prototype.toFiat = function (coin, satoshis, code) {
        var _this = this;
        //TODO not a promise
        return new Promise(function (resolve, reject) {
            if (isNaN(satoshis))
                return resolve();
            var v1;
            v1 = _this.rate.toFiat(satoshis, code, coin);
            if (!v1)
                return resolve(null);
            return resolve(v1.toFixed(2));
        });
    };
    TxFormatProvider.prototype.formatToUSD = function (coin, satoshis) {
        var _this = this;
        //TODO not a promise
        return new Promise(function (resolve, reject) {
            var v1;
            if (isNaN(satoshis))
                return resolve();
            v1 = _this.rate.toFiat(satoshis, 'USD', coin);
            if (!v1)
                return resolve(null);
            return resolve(v1.toFixed(2));
        });
    };
    ;
    TxFormatProvider.prototype.formatAlternativeStr = function (coin, satoshis) {
        var _this = this;
        if (isNaN(satoshis))
            return;
        var settings = this.configProvider.get().wallet.settings;
        var val = (function () {
            var v1 = parseFloat((_this.rate.toFiat(satoshis, settings.alternativeIsoCode, coin)).toFixed(2));
            v1 = _this.filter.formatFiatAmount(v1);
            if (!v1)
                return null;
            return v1 + ' ' + settings.alternativeIsoCode;
        }).bind(this);
        if (!this.rate.isAvailable())
            return null;
        return val();
    };
    ;
    TxFormatProvider.prototype.processTx = function (coin, tx, useLegacyAddress) {
        var _this = this;
        if (!tx || tx.action == 'invalid')
            return tx;
        // New transaction output format
        if (tx.outputs && tx.outputs.length) {
            var outputsNr = tx.outputs.length;
            if (tx.action != 'received') {
                if (outputsNr > 1) {
                    tx.recipientCount = outputsNr;
                    tx.hasMultiplesOutputs = true;
                }
                tx.amount = __WEBPACK_IMPORTED_MODULE_6_lodash__["reduce"](tx.outputs, function (total, o) {
                    o.amountStr = _this.formatAmountStr(coin, o.amount);
                    o.alternativeAmountStr = _this.formatAlternativeStr(coin, o.amount);
                    return total + o.amount;
                }, 0);
            }
            tx.toAddress = tx.outputs[0].toAddress;
            // toDo: translate all tx.outputs[x].toAddress ?
            if (tx.toAddress && coin == 'bch' && !useLegacyAddress) {
                tx.toAddress = this.toCashAddress(tx.toAddress);
            }
        }
        tx.amountStr = this.formatAmountStr(coin, tx.amount);
        tx.alternativeAmountStr = this.formatAlternativeStr(coin, tx.amount);
        tx.feeStr = this.formatAmountStr(coin, tx.fee || tx.fees);
        if (tx.amountStr) {
            tx.amountValueStr = tx.amountStr.split(' ')[0];
            tx.amountUnitStr = tx.amountStr.split(' ')[1];
        }
        if (tx.addressTo && coin == 'bch' && !useLegacyAddress) {
            tx.addressTo = this.toCashAddress(tx.addressTo);
        }
        return tx;
    };
    ;
    TxFormatProvider.prototype.formatPendingTxps = function (txps) {
        this.pendingTxProposalsCountForUs = 0;
        var now = Math.floor(Date.now() / 1000);
        /* To test multiple outputs...
        var txp = {
          message: 'test multi-output',
          fee: 1000,
          createdOn: new Date() / 1000,
          outputs: []
        };
        function addOutput(n) {
          txp.outputs.push({
            amount: 600,
            toAddress: '2N8bhEwbKtMvR2jqMRcTCQqzHP6zXGToXcK',
            message: 'output #' + (Number(n) + 1)
          });
        };
        lodash.times(150, addOutput);
        txps.push(txp);
        */
        __WEBPACK_IMPORTED_MODULE_6_lodash__["each"](txps, function (tx) {
            // no future transactions...
            if (tx.createdOn > now)
                tx.createdOn = now;
            // TODO: implement profileService.getWallet(tx.walletId)
            //tx.wallet = profileService.getWallet(tx.walletId);
            tx.wallet = {
                coin: "btc",
                copayerId: "asdasdasdasd"
            };
            // hardcoded tx.wallet ^
            if (!tx.wallet) {
                this.logger.debug("no wallet at txp?");
                return;
            }
            tx = this.processTx(tx.wallet.coin, tx);
            var action = __WEBPACK_IMPORTED_MODULE_6_lodash__["find"](tx.actions, {
                copayerId: tx.wallet.copayerId
            });
            if (!action && tx.status == 'pending') {
                tx.pendingForUs = true;
            }
            if (action && action.type == 'accept') {
                tx.statusForUs = 'accepted';
            }
            else if (action && action.type == 'reject') {
                tx.statusForUs = 'rejected';
            }
            else {
                tx.statusForUs = 'pending';
            }
            if (!tx.deleteLockTime)
                tx.canBeRemoved = true;
        });
        return txps;
    };
    ;
    TxFormatProvider.prototype.parseAmount = function (coin, amount, currency) {
        var settings = this.configProvider.get().wallet.settings;
        var satToBtc = 1 / 100000000;
        var unitToSatoshi = settings.unitToSatoshi;
        var amountUnitStr;
        var amountSat;
        var alternativeIsoCode = settings.alternativeIsoCode;
        // If fiat currency
        if (currency != 'BCH' && currency != 'BTC' && currency != 'sat') {
            amountUnitStr = this.filter.formatFiatAmount(amount) + ' ' + currency;
            amountSat = Number(this.rate.fromFiat(amount, currency, coin).toFixed(0));
        }
        else if (currency == 'sat') {
            amountSat = Number(amount);
            amountUnitStr = this.formatAmountStr(coin, amountSat);
            // convert sat to BTC or BCH
            amount = (amountSat * satToBtc).toFixed(8);
            currency = (coin).toUpperCase();
        }
        else {
            amountSat = parseInt((amount * unitToSatoshi).toFixed(0), 10);
            amountUnitStr = this.formatAmountStr(coin, amountSat);
            // convert unit to BTC or BCH
            amount = (amountSat * satToBtc).toFixed(8);
            currency = (coin).toUpperCase();
        }
        return {
            amount: amount,
            currency: currency,
            alternativeIsoCode: alternativeIsoCode,
            amountSat: amountSat,
            amountUnitStr: amountUnitStr
        };
    };
    ;
    TxFormatProvider.prototype.satToUnit = function (amount) {
        var settings = this.configProvider.get().wallet.settings;
        var unitToSatoshi = settings.unitToSatoshi;
        var satToUnit = 1 / unitToSatoshi;
        var unitDecimals = settings.unitDecimals;
        return parseFloat((amount * satToUnit).toFixed(unitDecimals));
    };
    ;
    TxFormatProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__bwc_bwc__["a" /* BwcProvider */],
            __WEBPACK_IMPORTED_MODULE_5__rate_rate__["a" /* RateProvider */],
            __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_4__filter_filter__["a" /* FilterProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_logger_logger__["a" /* Logger */]])
    ], TxFormatProvider);
    return TxFormatProvider;
}());

//# sourceMappingURL=tx-format.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisclaimerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_on_going_process_on_going_process__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_persistence_persistence__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(29);
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
    function DisclaimerPage(navCtrl, navParams, persistenceProvider, profileProvider, onGoingProcessProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.persistenceProvider = persistenceProvider;
        this.profileProvider = profileProvider;
        this.onGoingProcessProvider = onGoingProcessProvider;
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
        console.log('ionViewDidLoad DisclaimerPage');
    };
    DisclaimerPage.prototype.confirm = function () {
        var _this = this;
        this.persistenceProvider.setDisclaimerAccepted();
        this.onGoingProcessProvider.set('creatingWallet', true);
        this.profileProvider.createDefaultWallet().then(function (wallet) {
            _this.onGoingProcessProvider.set('creatingWallet', false);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
            _this.navCtrl.popToRoot({ animate: false });
        });
    };
    DisclaimerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-disclaimer',template:/*ion-inline-start:"/Users/jens/Repos/spender.cash/src/pages/disclaimer/disclaimer.html"*/'<ion-content padding class="disclaimer">\n  <div class="disclaimer-content">\n    <h1>Disclaimer</h1>\n    <h5>Bitcoin Cash is different...</h5>\n    <br>\n    <ion-list class="checkbox-list" no-lines text-wrap>\n      <ion-item>\n        <ion-label>I understand that my funds are held securely on this device, not by a company.</ion-label>\n        <ion-checkbox [(ngModel)]="accepted.first"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label>I understand that if this app is moved to another device or deleted, my funds can only be recovered with the backup\n          phrase.\n        </ion-label>\n        <ion-checkbox [(ngModel)]="accepted.second"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label>I understand that this software is provided "as is", without warrenty of any kind.</ion-label>\n        <ion-checkbox [(ngModel)]="accepted.third"></ion-checkbox>\n      </ion-item>\n    </ion-list>\n    <br>\n    <button ion-button block [disabled]="!accepted.first || !accepted.second || !accepted.third" (click)="confirm()" translate>Confirm and Get Started</button>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/jens/Repos/spender.cash/src/pages/disclaimer/disclaimer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_persistence_persistence__["a" /* PersistenceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_on_going_process_on_going_process__["a" /* OnGoingProcessProvider */]])
    ], DisclaimerPage);
    return DisclaimerPage;
}());

//# sourceMappingURL=disclaimer.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PinModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_logger_logger__ = __webpack_require__(24);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pin',template:/*ion-inline-start:"/Users/jens/Repos/spender.cash/src/pages/pin/pin.html"*/'<ion-header *ngIf="action === \'pinSetUp\' || action === \'removeLock\'">\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button (click)="close()" ion-button>\n        {{\'Close\'}}\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <div class="messages">\n    <ion-item-divider *ngIf="!disableButtons">\n      <span *ngIf="!confirmingPin && !incorrect">Please enter your PIN</span>\n      <span *ngIf="confirmingPin && !incorrect">Confirm your PIN</span>\n      <span class="assertive" *ngIf="incorrect" translate>Incorrect PIN, try again.</span>\n    </ion-item-divider>\n    <ion-item-divider *ngIf="disableButtons">\n      <span class="assertive" *ngIf="expires" translate>Try again in {{expires}}</span>\n    </ion-item-divider>\n  </div>\n  <div class="block-code">\n    <div class="circle" [ngClass]="getFilledClass(1)"></div>\n    <div class="circle" [ngClass]="getFilledClass(2)"></div>\n    <div class="circle" [ngClass]="getFilledClass(3)"></div>\n    <div class="circle" [ngClass]="getFilledClass(4)"></div>\n  </div>\n  <div class="block-buttons">\n    <div class="row">\n      <div (click)="newEntry(\'1\')">1</div>\n      <div (click)="newEntry(\'2\')">2</div>\n      <div (click)="newEntry(\'3\')">3</div>\n    </div>\n    <div class="row">\n      <div (click)="newEntry(\'4\')">4</div>\n      <div (click)="newEntry(\'5\')">5</div>\n      <div (click)="newEntry(\'6\')">6</div>\n    </div>\n    <div class="row">\n      <div (click)="newEntry(\'7\')">7</div>\n      <div (click)="newEntry(\'8\')">8</div>\n      <div (click)="newEntry(\'9\')">9</div>\n    </div>\n    <div class="row">\n      <div></div>\n      <div (click)="newEntry(\'0\')">0</div>\n      <div (click)="delete()">\n        <ion-icon name="arrow-round-back"></ion-icon>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/jens/Repos/spender.cash/src/pages/pin/pin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_logger_logger__["a" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], PinModalPage);
    return PinModalPage;
}());

//# sourceMappingURL=pin.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FingerprintModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_touchid_touchid__ = __webpack_require__(228);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-fingerprint',template:/*ion-inline-start:"/Users/jens/Repos/spender.cash/src/pages/fingerprint/fingerprint.html"*/'<ion-content>\n  <ion-item-divider class="title">Verify your identity</ion-item-divider>\n  <button class="scan-button" ion-item (click)="checkFingerprint()">\n    <ion-icon name="finger-print" item-start></ion-icon>\n    <span translate>Scan again</span>\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/jens/Repos/spender.cash/src/pages/fingerprint/fingerprint.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_touchid_touchid__["a" /* TouchIdProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], FingerprintModalPage);
    return FingerprintModalPage;
}());

//# sourceMappingURL=fingerprint.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(568);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_android_fingerprint_auth__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_touch_id__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nsalaun_ng_logger__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_moment__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_qrcode2__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_pay_pay__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_transactions_transactions__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_settings_settings__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_settings_currency_symbol_currency_symbol__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_fingerprint_fingerprint__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_pin_pin__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_disclaimer_disclaimer__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_app_app__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_bwc_error_bwc_error__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_bwc_bwc__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_config_config__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_logger_logger__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_on_going_process_on_going_process__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_persistence_persistence__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_platform_platform__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_popup_popup__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_profile_profile__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_wallet_wallet__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_filter_filter__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_fee_fee__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_tx_format_tx_format__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_rate_rate__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_touchid_touchid__ = __webpack_require__(228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/* Native */





/* Modules */



/* App */

/* Pages */








/* Providers */
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* SpenderApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_pay_pay__["a" /* PayPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_transactions_transactions__["a" /* TransactionsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_settings_currency_symbol_currency_symbol__["a" /* CurrencySymbolPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_fingerprint_fingerprint__["a" /* FingerprintModalPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_pin_pin__["a" /* PinModalPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_disclaimer_disclaimer__["a" /* DisclaimerPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* SpenderApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10__nsalaun_ng_logger__["c" /* NgLoggerModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__nsalaun_ng_logger__["a" /* Level */].LOG),
                __WEBPACK_IMPORTED_MODULE_11_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_12_ngx_qrcode2__["a" /* NgxQRCodeModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* SpenderApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_pay_pay__["a" /* PayPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_transactions_transactions__["a" /* TransactionsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_settings_currency_symbol_currency_symbol__["a" /* CurrencySymbolPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_fingerprint_fingerprint__["a" /* FingerprintModalPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_pin_pin__["a" /* PinModalPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_disclaimer_disclaimer__["a" /* DisclaimerPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_25__providers_config_config__["a" /* ConfigProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_persistence_persistence__["a" /* PersistenceProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_app_app__["a" /* AppProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_bwc_bwc__["a" /* BwcProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_bwc_error_bwc_error__["a" /* BwcErrorProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_config_config__["a" /* ConfigProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_logger_logger__["a" /* Logger */],
                __WEBPACK_IMPORTED_MODULE_27__providers_on_going_process_on_going_process__["a" /* OnGoingProcessProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_platform_platform__["a" /* PlatformProvider */],
                __WEBPACK_IMPORTED_MODULE_31__providers_profile_profile__["a" /* ProfileProvider */],
                __WEBPACK_IMPORTED_MODULE_30__providers_popup_popup__["a" /* PopupProvider */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_28__providers_persistence_persistence__["a" /* PersistenceProvider */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_android_fingerprint_auth__["a" /* AndroidFingerprintAuth */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_touch_id__["a" /* TouchID */],
                __WEBPACK_IMPORTED_MODULE_34__providers_fee_fee__["a" /* FeeProvider */],
                __WEBPACK_IMPORTED_MODULE_33__providers_filter_filter__["a" /* FilterProvider */],
                __WEBPACK_IMPORTED_MODULE_36__providers_rate_rate__["a" /* RateProvider */],
                __WEBPACK_IMPORTED_MODULE_35__providers_tx_format_tx_format__["a" /* TxFormatProvider */],
                __WEBPACK_IMPORTED_MODULE_32__providers_wallet_wallet__["a" /* WalletProvider */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* DecimalPipe */],
                __WEBPACK_IMPORTED_MODULE_37__providers_touchid_touchid__["a" /* TouchIdProvider */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ErrorHandler"],
                    useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */]
                }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 328,
	"./af.js": 328,
	"./ar": 329,
	"./ar-dz": 330,
	"./ar-dz.js": 330,
	"./ar-kw": 331,
	"./ar-kw.js": 331,
	"./ar-ly": 332,
	"./ar-ly.js": 332,
	"./ar-ma": 333,
	"./ar-ma.js": 333,
	"./ar-sa": 334,
	"./ar-sa.js": 334,
	"./ar-tn": 335,
	"./ar-tn.js": 335,
	"./ar.js": 329,
	"./az": 336,
	"./az.js": 336,
	"./be": 337,
	"./be.js": 337,
	"./bg": 338,
	"./bg.js": 338,
	"./bm": 339,
	"./bm.js": 339,
	"./bn": 340,
	"./bn.js": 340,
	"./bo": 341,
	"./bo.js": 341,
	"./br": 342,
	"./br.js": 342,
	"./bs": 343,
	"./bs.js": 343,
	"./ca": 344,
	"./ca.js": 344,
	"./cs": 345,
	"./cs.js": 345,
	"./cv": 346,
	"./cv.js": 346,
	"./cy": 347,
	"./cy.js": 347,
	"./da": 348,
	"./da.js": 348,
	"./de": 349,
	"./de-at": 350,
	"./de-at.js": 350,
	"./de-ch": 351,
	"./de-ch.js": 351,
	"./de.js": 349,
	"./dv": 352,
	"./dv.js": 352,
	"./el": 353,
	"./el.js": 353,
	"./en-au": 354,
	"./en-au.js": 354,
	"./en-ca": 355,
	"./en-ca.js": 355,
	"./en-gb": 356,
	"./en-gb.js": 356,
	"./en-ie": 357,
	"./en-ie.js": 357,
	"./en-il": 358,
	"./en-il.js": 358,
	"./en-nz": 359,
	"./en-nz.js": 359,
	"./eo": 360,
	"./eo.js": 360,
	"./es": 361,
	"./es-do": 362,
	"./es-do.js": 362,
	"./es-us": 363,
	"./es-us.js": 363,
	"./es.js": 361,
	"./et": 364,
	"./et.js": 364,
	"./eu": 365,
	"./eu.js": 365,
	"./fa": 366,
	"./fa.js": 366,
	"./fi": 367,
	"./fi.js": 367,
	"./fo": 368,
	"./fo.js": 368,
	"./fr": 369,
	"./fr-ca": 370,
	"./fr-ca.js": 370,
	"./fr-ch": 371,
	"./fr-ch.js": 371,
	"./fr.js": 369,
	"./fy": 372,
	"./fy.js": 372,
	"./gd": 373,
	"./gd.js": 373,
	"./gl": 374,
	"./gl.js": 374,
	"./gom-latn": 375,
	"./gom-latn.js": 375,
	"./gu": 376,
	"./gu.js": 376,
	"./he": 377,
	"./he.js": 377,
	"./hi": 378,
	"./hi.js": 378,
	"./hr": 379,
	"./hr.js": 379,
	"./hu": 380,
	"./hu.js": 380,
	"./hy-am": 381,
	"./hy-am.js": 381,
	"./id": 382,
	"./id.js": 382,
	"./is": 383,
	"./is.js": 383,
	"./it": 384,
	"./it.js": 384,
	"./ja": 385,
	"./ja.js": 385,
	"./jv": 386,
	"./jv.js": 386,
	"./ka": 387,
	"./ka.js": 387,
	"./kk": 388,
	"./kk.js": 388,
	"./km": 389,
	"./km.js": 389,
	"./kn": 390,
	"./kn.js": 390,
	"./ko": 391,
	"./ko.js": 391,
	"./ky": 392,
	"./ky.js": 392,
	"./lb": 393,
	"./lb.js": 393,
	"./lo": 394,
	"./lo.js": 394,
	"./lt": 395,
	"./lt.js": 395,
	"./lv": 396,
	"./lv.js": 396,
	"./me": 397,
	"./me.js": 397,
	"./mi": 398,
	"./mi.js": 398,
	"./mk": 399,
	"./mk.js": 399,
	"./ml": 400,
	"./ml.js": 400,
	"./mn": 401,
	"./mn.js": 401,
	"./mr": 402,
	"./mr.js": 402,
	"./ms": 403,
	"./ms-my": 404,
	"./ms-my.js": 404,
	"./ms.js": 403,
	"./mt": 405,
	"./mt.js": 405,
	"./my": 406,
	"./my.js": 406,
	"./nb": 407,
	"./nb.js": 407,
	"./ne": 408,
	"./ne.js": 408,
	"./nl": 409,
	"./nl-be": 410,
	"./nl-be.js": 410,
	"./nl.js": 409,
	"./nn": 411,
	"./nn.js": 411,
	"./pa-in": 412,
	"./pa-in.js": 412,
	"./pl": 413,
	"./pl.js": 413,
	"./pt": 414,
	"./pt-br": 415,
	"./pt-br.js": 415,
	"./pt.js": 414,
	"./ro": 416,
	"./ro.js": 416,
	"./ru": 417,
	"./ru.js": 417,
	"./sd": 418,
	"./sd.js": 418,
	"./se": 419,
	"./se.js": 419,
	"./si": 420,
	"./si.js": 420,
	"./sk": 421,
	"./sk.js": 421,
	"./sl": 422,
	"./sl.js": 422,
	"./sq": 423,
	"./sq.js": 423,
	"./sr": 424,
	"./sr-cyrl": 425,
	"./sr-cyrl.js": 425,
	"./sr.js": 424,
	"./ss": 426,
	"./ss.js": 426,
	"./sv": 427,
	"./sv.js": 427,
	"./sw": 428,
	"./sw.js": 428,
	"./ta": 429,
	"./ta.js": 429,
	"./te": 430,
	"./te.js": 430,
	"./tet": 431,
	"./tet.js": 431,
	"./tg": 432,
	"./tg.js": 432,
	"./th": 433,
	"./th.js": 433,
	"./tl-ph": 434,
	"./tl-ph.js": 434,
	"./tlh": 435,
	"./tlh.js": 435,
	"./tr": 436,
	"./tr.js": 436,
	"./tzl": 437,
	"./tzl.js": 437,
	"./tzm": 438,
	"./tzm-latn": 439,
	"./tzm-latn.js": 439,
	"./tzm.js": 438,
	"./ug-cn": 440,
	"./ug-cn.js": 440,
	"./uk": 441,
	"./uk.js": 441,
	"./ur": 442,
	"./ur.js": 442,
	"./uz": 443,
	"./uz-latn": 444,
	"./uz-latn.js": 444,
	"./uz.js": 443,
	"./vi": 445,
	"./vi.js": 445,
	"./x-pseudo": 446,
	"./x-pseudo.js": 446,
	"./yo": 447,
	"./yo.js": 447,
	"./zh-cn": 448,
	"./zh-cn.js": 448,
	"./zh-hk": 449,
	"./zh-hk.js": 449,
	"./zh-tw": 450,
	"./zh-tw.js": 450
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 624;

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpenderApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_logger_logger__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_app_app__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_profile_profile__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_config_config__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_disclaimer_disclaimer__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_pin_pin__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_fingerprint_fingerprint__ = __webpack_require__(545);
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
    function SpenderApp(platform, statusBar, splashScreen, logger, appProvider, profileProvider, configProvider, modalCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.logger = logger;
        this.appProvider = appProvider;
        this.profileProvider = profileProvider;
        this.configProvider = configProvider;
        this.modalCtrl = modalCtrl;
        this.initializeApp();
    }
    SpenderApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function (readySource) {
            _this.appProvider.load().then(function () {
                _this.logger.info('Platform ready (' + readySource + '): ' +
                    _this.appProvider.info.nameCase +
                    ' - v' + _this.appProvider.info.version +
                    ' #' + _this.appProvider.info.commitHash);
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
                _this.profileProvider.loadAndBindProfile().then(function (profile) {
                    //this.registerIntegrations();
                    if (profile) {
                        _this.logger.info('Profile exists.');
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
                    }
                    else {
                        _this.logger.info('No profile exists.');
                        _this.profileProvider.createProfile();
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_disclaimer_disclaimer__["a" /* DisclaimerPage */];
                    }
                }).catch(function (err) {
                    _this.logger.warn(err);
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_disclaimer_disclaimer__["a" /* DisclaimerPage */];
                });
                //Set Config
                _this.configProvider.load().then(function (config) {
                    _this.configProvider.set(config);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/Users/jens/Repos/spender.cash/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/jens/Repos/spender.cash/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__providers_logger_logger__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_logger_logger__["a" /* Logger */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__providers_app_app__["a" /* AppProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_app_app__["a" /* AppProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__providers_profile_profile__["a" /* ProfileProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_profile_profile__["a" /* ProfileProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__providers_config_config__["a" /* ConfigProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__providers_config_config__["a" /* ConfigProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */]) === "function" && _h || Object])
    ], SpenderApp);
    return SpenderApp;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_file__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_logger_logger__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__istorage__ = __webpack_require__(470);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_3__providers_logger_logger__["a" /* Logger */]])
    ], FileStorage);
    return FileStorage;
}());

//# sourceMappingURL=file-storage.js.map

/***/ }),

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__istorage__ = __webpack_require__(470);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LocalStorage);
    return LocalStorage;
}());

//# sourceMappingURL=local-storage.js.map

/***/ }),

/***/ 661:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 665:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 796:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 814:
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

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersistenceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_file__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_logger_logger__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__platform_platform__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__storage_file_storage__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__storage_local_storage__ = __webpack_require__(648);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_logger_logger__["a" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_4__platform_platform__["a" /* PlatformProvider */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_file__["a" /* File */]])
    ], PersistenceProvider);
    return PersistenceProvider;
}());

//# sourceMappingURL=persistence.js.map

/***/ })

},[546]);
//# sourceMappingURL=main.js.map