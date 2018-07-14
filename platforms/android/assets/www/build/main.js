webpackJsonp([1],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__color_picker_color_picker__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, modalCtrl, storage) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
    }
    SettingsPage.prototype.ionViewDidEnter = function () {
        console.log('view entered');
        this.getSettings();
    };
    SettingsPage.prototype.ngOnInit = function () {
    };
    SettingsPage.prototype.getSettings = function () {
        var _this = this;
        this.storage.get('settings').then(function (settings) {
            if (settings) {
                _this.settings = settings;
            }
        });
    };
    SettingsPage.prototype.saveSettings = function () {
        var _this = this;
        this.storage.get('settings').then(function (settings) {
            settings = Object.assign(settings, {
                'font': _this.settings.font,
                'size': _this.settings.size,
                'background': _this.settings.background,
                'color': _this.settings.color
            });
            _this.storage.set('settings', settings);
        });
    };
    SettingsPage.prototype.saveOptions = function () {
        this.saveSettings();
        this.navCtrl.pop();
    };
    SettingsPage.prototype.openBackgroundColorModal = function (modalType) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__color_picker_color_picker__["a" /* ColorPickerPage */], {
            modalType: modalType
        });
        modal.onDidDismiss(function () {
            _this.getSettings();
        });
        modal.present();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/daiquiri.io/Desktop/www/ionic/clock/src/pages/settings/settings.html"*/'<ion-content padding>\n    <h3>\n        DeskClock Settings\n    </h3>\n\n    <ion-list>\n        <ion-item no-padding>\n            <ion-label>\n                Font\n            </ion-label>\n            <ion-select [(ngModel)]="settings.font" *ngIf="settings">\n                <ion-option value="montserrat">\n                    Montserrat\n                </ion-option>\n                <ion-option value="lato">\n                    Lato\n                </ion-option>\n                <ion-option value="roboto">\n                    Roboto\n                </ion-option>\n                <ion-option value="roboto-mono">\n                    Roboto Mono\n                </ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-item no-padding>\n            <ion-label>\n                Size\n            </ion-label>\n            <ion-select [(ngModel)]="settings.size" *ngIf="settings">\n                <ion-option value="small">\n                    Small\n                </ion-option>\n                <ion-option value="medium">\n                    Medium\n                </ion-option>\n                <ion-option value="large">\n                    Large\n                </ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-item no-padding>\n            <ion-grid no-padding>\n                <ion-row align-items-center justify-content-between>\n                    <ion-col col-5>\n                        Background\n                    </ion-col>\n\n                    <ion-col col-5 *ngIf="settings">\n                        <ion-item no-lines>\n                            <ion-input type="text" [(ngModel)]="settings.background"></ion-input>\n                        </ion-item>\n                    </ion-col>\n\n                    <ion-col col-2 text-right>\n                        <button ion-button clear icon-only (click)="openBackgroundColorModal(\'background\')">\n                            <ion-icon name="color-palette"></ion-icon>\n                        </button>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-item>\n        <ion-item no-padding>\n            <ion-grid no-padding>\n                <ion-row align-items-center justify-content-between>\n                    <ion-col col-5>\n                        Color\n                    </ion-col>\n\n                    <ion-col col-5 *ngIf="settings">\n                        <ion-item no-lines>\n                            <ion-input type="text" [(ngModel)]="settings.color"></ion-input>\n                        </ion-item>\n                    </ion-col>\n\n                    <ion-col col-2 text-right>\n                        <button ion-button clear icon-only (click)="openBackgroundColorModal(\'color\')">\n                            <ion-icon name="color-palette"></ion-icon>\n                        </button>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-item>\n    </ion-list>\n\n    <footer class="btn-fixed-bottom" text-center>\n        <small>\n            Pro tip: any valid CSS color will work\n        </small>\n        <button ion-button full (click)="saveOptions()">Save</button>\n    </footer>\n</ion-content>\n'/*ion-inline-end:"/Users/daiquiri.io/Desktop/www/ionic/clock/src/pages/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorPickerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(46);
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
 * Generated class for the ColorPickerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ColorPickerPage = /** @class */ (function () {
    function ColorPickerPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        console.log(this.navParams.get('modalType'));
        this.modalType = this.navParams.get('modalType');
    }
    ColorPickerPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('settings').then(function (settings) {
            if (settings) {
                if (_this.modalType === 'color') {
                    _this.selectedColor = settings.color
                        ? settings.color
                        : '#000';
                }
                else {
                    _this.selectedColor = settings.background
                        ? settings.background
                        : '#000';
                }
            }
        });
    };
    ColorPickerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ColorPickerPage');
    };
    ColorPickerPage.prototype.setColor = function (color) {
        this.selectedColor = color;
    };
    ColorPickerPage.prototype.save = function () {
        if (this.modalType === 'color') {
            this.saveColor();
        }
        else {
            this.saveBackground();
        }
    };
    ColorPickerPage.prototype.saveColor = function () {
        var _this = this;
        this.storage.get('settings').then(function (settings) {
            settings = Object.assign(settings, { 'color': _this.selectedColor });
            _this.storage.set('settings', settings).then(function (settings) {
                console.log(settings);
                _this.navCtrl.pop();
            });
        });
    };
    ColorPickerPage.prototype.saveBackground = function () {
        var _this = this;
        this.storage.get('settings').then(function (settings) {
            settings = Object.assign(settings, { 'background': _this.selectedColor });
            _this.storage.set('settings', settings).then(function (settings) {
                console.log(settings);
                _this.navCtrl.pop();
            });
        });
    };
    ColorPickerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-color-picker',template:/*ion-inline-start:"/Users/daiquiri.io/Desktop/www/ionic/clock/src/pages/color-picker/color-picker.html"*/'<!--\n    Generated template for the ColorPickerPage page.\n\n    See http://ionicframework.com/docs/components/#navigation for more info on\n    Ionic pages and navigation.\n-->\n\n<ion-content padding>\n\n    <ion-list>\n        <div>\n            <h3 *ngIf="modalType == \'color\'">\n                Select color\n            </h3>\n            <h3 *ngIf="modalType == \'background\'">\n                Select background\n            </h3>\n            <p *ngIf="selectedColor">\n                Current: {{ selectedColor }}\n            </p>\n            <ion-grid>\n                <ion-row>\n                    <ion-col style="background:#330000" (tap)="setColor(\'#330000\')"></ion-col>\n                    <ion-col style="background:#331900" (tap)="setColor(\'#331900\')">&nbsp;</ion-col>\n                    <ion-col style="background:#333300" (tap)="setColor(\'#333300\')">&nbsp;</ion-col>\n                    <ion-col style="background:#193300" (tap)="setColor(\'#193300\')">&nbsp;</ion-col>\n                    <ion-col style="background:#003300" (tap)="setColor(\'#003300\')">&nbsp;</ion-col>\n                    <ion-col style="background:#003319" (tap)="setColor(\'#003319\')">&nbsp;</ion-col>\n                    <ion-col style="background:#003333" (tap)="setColor(\'#003333\')">&nbsp;</ion-col>\n                    <ion-col style="background:#001933" (tap)="setColor(\'#001933\')">&nbsp;</ion-col>\n                    <ion-col style="background:#000033" (tap)="setColor(\'#000033\')">&nbsp;</ion-col>\n                    <ion-col style="background:#190033" (tap)="setColor(\'#190033\')">&nbsp;</ion-col>\n                    <ion-col style="background:#330033" (tap)="setColor(\'#330033\')">&nbsp;</ion-col>\n                    <ion-col style="background:#330019" (tap)="setColor(\'#330019\')">&nbsp;</ion-col>\n                    <ion-col style="background:#000000" (tap)="setColor(\'#000000\')">&nbsp;</ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col style="background:#660000" (tap)="setColor(\'#660000\')">&nbsp;</ion-col>\n                    <ion-col style="background:#663300" (tap)="setColor(\'#663300\')">&nbsp;</ion-col>\n                    <ion-col style="background:#666600" (tap)="setColor(\'#666600\')">&nbsp;</ion-col>\n                    <ion-col style="background:#336600" (tap)="setColor(\'#336600\')">&nbsp;</ion-col>\n                    <ion-col style="background:#006600" (tap)="setColor(\'#006600\')">&nbsp;</ion-col>\n                    <ion-col style="background:#006633" (tap)="setColor(\'#006633\')">&nbsp;</ion-col>\n                    <ion-col style="background:#006666" (tap)="setColor(\'#006666\')">&nbsp;</ion-col>\n                    <ion-col style="background:#003366" (tap)="setColor(\'#003366\')">&nbsp;</ion-col>\n                    <ion-col style="background:#000066" (tap)="setColor(\'#000066\')">&nbsp;</ion-col>\n                    <ion-col style="background:#330066" (tap)="setColor(\'#330066\')">&nbsp;</ion-col>\n                    <ion-col style="background:#660066" (tap)="setColor(\'#660066\')">&nbsp;</ion-col>\n                    <ion-col style="background:#660033" (tap)="setColor(\'#660033\')">&nbsp;</ion-col>\n                    <ion-col style="background:#202020" (tap)="setColor(\'#202020\')">&nbsp;</ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col style="background:#990000" (tap)="setColor(\'#990000\')">&nbsp;</ion-col>\n                    <ion-col style="background:#994C00" (tap)="setColor(\'#994C00\')">&nbsp;</ion-col>\n                    <ion-col style="background:#999900" (tap)="setColor(\'#999900\')">&nbsp;</ion-col>\n                    <ion-col style="background:#4C9900" (tap)="setColor(\'#4C9900\')">&nbsp;</ion-col>\n                    <ion-col style="background:#009900" (tap)="setColor(\'#009900\')">&nbsp;</ion-col>\n                    <ion-col style="background:#00994C" (tap)="setColor(\'#00994C\')">&nbsp;</ion-col>\n                    <ion-col style="background:#009999" (tap)="setColor(\'#009999\')">&nbsp;</ion-col>\n                    <ion-col style="background:#004C99" (tap)="setColor(\'#004C99\')">&nbsp;</ion-col>\n                    <ion-col style="background:#000099" (tap)="setColor(\'#000099\')">&nbsp;</ion-col>\n                    <ion-col style="background:#4C0099" (tap)="setColor(\'#4C0099\')">&nbsp;</ion-col>\n                    <ion-col style="background:#990099" (tap)="setColor(\'#990099\')">&nbsp;</ion-col>\n                    <ion-col style="background:#99004C" (tap)="setColor(\'#99004C\')">&nbsp;</ion-col>\n                    <ion-col style="background:#404040" (tap)="setColor(\'#404040\')">&nbsp;</ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col style="background:#CC0000" (tap)="setColor(\'#CC0000\')">&nbsp;</ion-col>\n                    <ion-col style="background:#CC6600" (tap)="setColor(\'#CC6600\')">&nbsp;</ion-col>\n                    <ion-col style="background:#CCCC00" (tap)="setColor(\'#CCCC00\')">&nbsp;</ion-col>\n                    <ion-col style="background:#66CC00" (tap)="setColor(\'#66CC00\')">&nbsp;</ion-col>\n                    <ion-col style="background:#00CC00" (tap)="setColor(\'#00CC00\')">&nbsp;</ion-col>\n                    <ion-col style="background:#00CC66" (tap)="setColor(\'#00CC66\')">&nbsp;</ion-col>\n                    <ion-col style="background:#00CCCC" (tap)="setColor(\'#00CCCC\')">&nbsp;</ion-col>\n                    <ion-col style="background:#0066CC" (tap)="setColor(\'#0066CC\')">&nbsp;</ion-col>\n                    <ion-col style="background:#0000CC" (tap)="setColor(\'#0000CC\')">&nbsp;</ion-col>\n                    <ion-col style="background:#6600CC" (tap)="setColor(\'#6600CC\')">&nbsp;</ion-col>\n                    <ion-col style="background:#CC00CC" (tap)="setColor(\'#CC00CC\')">&nbsp;</ion-col>\n                    <ion-col style="background:#CC0066" (tap)="setColor(\'#CC0066\')">&nbsp;</ion-col>\n                    <ion-col style="background:#606060" (tap)="setColor(\'#606060\')">&nbsp;</ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col style="background:#FF0000" (tap)="setColor(\'#FF0000\')">&nbsp;</ion-col>\n                    <ion-col style="background:#FF8000" (tap)="setColor(\'#FF8000\')">&nbsp;</ion-col>\n                    <ion-col style="background:#FFFF00" (tap)="setColor(\'#FFFF00\')">&nbsp;</ion-col>\n                    <ion-col style="background:#80FF00" (tap)="setColor(\'#80FF00\')">&nbsp;</ion-col>\n                    <ion-col style="background:#00FF00" (tap)="setColor(\'#00FF00\')">&nbsp;</ion-col>\n                    <ion-col style="background:#00FF80" (tap)="setColor(\'#00FF80\')">&nbsp;</ion-col>\n                    <ion-col style="background:#00FFFF" (tap)="setColor(\'#00FFFF\')">&nbsp;</ion-col>\n                    <ion-col style="background:#0080FF" (tap)="setColor(\'#0080FF\')">&nbsp;</ion-col>\n                    <ion-col style="background:#0000FF" (tap)="setColor(\'#0000FF\')">&nbsp;</ion-col>\n                    <ion-col style="background:#7F00FF" (tap)="setColor(\'#7F00FF\')">&nbsp;</ion-col>\n                    <ion-col style="background:#FF00FF" (tap)="setColor(\'#FF00FF\')">&nbsp;</ion-col>\n                    <ion-col style="background:#FF007F" (tap)="setColor(\'#FF007F\')">&nbsp;</ion-col>\n                    <ion-col style="background:#808080" (tap)="setColor(\'#808080\')">&nbsp;</ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col style="background:#FF3333" (tap)="setColor(\'#FF3333\')">&nbsp;</ion-col>\n                    <ion-col style="background:#FF9933" (tap)="setColor(\'#FF9933\')">&nbsp;</ion-col>\n                    <ion-col style="background:#FFFF33" (tap)="setColor(\'#FFFF33\')">&nbsp;</ion-col>\n                    <ion-col style="background:#99FF33" (tap)="setColor(\'#99FF33\')">&nbsp;</ion-col>\n                    <ion-col style="background:#33FF33" (tap)="setColor(\'#33FF33\')">&nbsp;</ion-col>\n                    <ion-col style="background:#33FF99" (tap)="setColor(\'#33FF99\')">&nbsp;</ion-col>\n                    <ion-col style="background:#33FFFF" (tap)="setColor(\'#33FFFF\')">&nbsp;</ion-col>\n                    <ion-col style="background:#3399FF" (tap)="setColor(\'#3399FF\')">&nbsp;</ion-col>\n                    <ion-col style="background:#3333FF" (tap)="setColor(\'#3333FF\')">&nbsp;</ion-col>\n                    <ion-col style="background:#9933FF" (tap)="setColor(\'#9933FF\')">&nbsp;</ion-col>\n                    <ion-col style="background:#FF33FF" (tap)="setColor(\'#FF33FF\')">&nbsp;</ion-col>\n                    <ion-col style="background:#FF3399" (tap)="setColor(\'#FF3399\')">&nbsp;</ion-col>\n                    <ion-col style="background:#A0A0A0" (tap)="setColor(\'#A0A0A0\')">&nbsp;</ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col style="background:#FF6666" (tap)="setColor(\'#FF6666\')">&nbsp;</ion-col>\n                    <ion-col style="background:#FFB266" (tap)="setColor(\'#FFB266\')">&nbsp;</ion-col>\n                    <ion-col style="background:#FFFF66" (tap)="setColor(\'#FFFF66\')">&nbsp;</ion-col>\n                    <ion-col style="background:#B2FF66" (tap)="setColor(\'#B2FF66\')">&nbsp;</ion-col>\n                    <ion-col style="background:#66FF66" (tap)="setColor(\'#66FF66\')">&nbsp;</ion-col>\n                    <ion-col style="background:#66FFB2" (tap)="setColor(\'#66FFB2\')">&nbsp;</ion-col>\n                    <ion-col style="background:#66FFFF" (tap)="setColor(\'#66FFFF\')">&nbsp;</ion-col>\n                    <ion-col style="background:#66B2FF" (tap)="setColor(\'#66B2FF\')">&nbsp;</ion-col>\n                    <ion-col style="background:#6666FF" (tap)="setColor(\'#6666FF\')">&nbsp;</ion-col>\n                    <ion-col style="background:#B266FF" (tap)="setColor(\'#B266FF\')">&nbsp;</ion-col>\n                    <ion-col style="background:#FF66FF" (tap)="setColor(\'#FF66FF\')">&nbsp;</ion-col>\n                    <ion-col style="background:#FF66B2" (tap)="setColor(\'#FF66B2\')">&nbsp;</ion-col>\n                    <ion-col style="background:#C0C0C0" (tap)="setColor(\'#C0C0C0\')">&nbsp;</ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col style="background:#FF9999" (tap)="setColor(\'#FF9999\')">&nbsp;</ion-col>\n                    <ion-col style="background:#FFCC99" (tap)="setColor(\'#FFCC99\')">&nbsp;</ion-col>\n                    <ion-col style="background:#FFFF99" (tap)="setColor(\'#FFFF99\')">&nbsp;</ion-col>\n                    <ion-col style="background:#CCFF99" (tap)="setColor(\'#CCFF99\')">&nbsp;</ion-col>\n                    <ion-col style="background:#99FF99" (tap)="setColor(\'#99FF99\')">&nbsp;</ion-col>\n                    <ion-col style="background:#99FFCC" (tap)="setColor(\'#99FFCC\')">&nbsp;</ion-col>\n                    <ion-col style="background:#99FFFF" (tap)="setColor(\'#99FFFF\')">&nbsp;</ion-col>\n                    <ion-col style="background:#99CCFF" (tap)="setColor(\'#99CCFF\')">&nbsp;</ion-col>\n                    <ion-col style="background:#9999FF" (tap)="setColor(\'#9999FF\')">&nbsp;</ion-col>\n                    <ion-col style="background:#CC99FF" (tap)="setColor(\'#CC99FF\')">&nbsp;</ion-col>\n                    <ion-col style="background:#FF99FF" (tap)="setColor(\'#FF99FF\')">&nbsp;</ion-col>\n                    <ion-col style="background:#FF99CC" (tap)="setColor(\'#FF99CC\')">&nbsp;</ion-col>\n                    <ion-col style="background:#E0E0E0" (tap)="setColor(\'#E0E0E0\')">&nbsp;</ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col style="background:#FFCCCC" (tap)="setColor(\'#FFCCCC\')">&nbsp;</ion-col>\n                    <ion-col style="background:#FFE5CC" (tap)="setColor(\'#FFE5CC\')">&nbsp;</ion-col>\n                    <ion-col style="background:#FFFFCC" (tap)="setColor(\'#FFFFCC\')">&nbsp;</ion-col>\n                    <ion-col style="background:#E5FFCC" (tap)="setColor(\'#E5FFCC\')">&nbsp;</ion-col>\n                    <ion-col style="background:#CCFFCC" (tap)="setColor(\'#CCFFCC\')">&nbsp;</ion-col>\n                    <ion-col style="background:#CCFFE5" (tap)="setColor(\'#CCFFE5\')">&nbsp;</ion-col>\n                    <ion-col style="background:#CCFFFF" (tap)="setColor(\'#CCFFFF\')">&nbsp;</ion-col>\n                    <ion-col style="background:#CCE5FF" (tap)="setColor(\'#CCE5FF\')">&nbsp;</ion-col>\n                    <ion-col style="background:#CCCCFF" (tap)="setColor(\'#CCCCFF\')">&nbsp;</ion-col>\n                    <ion-col style="background:#E5CCFF" (tap)="setColor(\'#E5CCFF\')">&nbsp;</ion-col>\n                    <ion-col style="background:#FFCCFF" (tap)="setColor(\'#FFCCFF\')">&nbsp;</ion-col>\n                    <ion-col style="background:#FFCCE5" (tap)="setColor(\'#FFCCE5\')">&nbsp;</ion-col>\n                    <ion-col style="background:#FFFFFF" (tap)="setColor(\'#FFFFFF\')">&nbsp;</ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n    </ion-list>\n    \n    <button class="btn-fixed-bottom" ion-button full (click)="save()">\n        OK\n    </button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/daiquiri.io/Desktop/www/ionic/clock/src/pages/color-picker/color-picker.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ColorPickerPage);
    return ColorPickerPage;
}());

//# sourceMappingURL=color-picker.js.map

/***/ }),

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/color-picker/color-picker.module": [
		275,
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
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.now = {
            hrs: '',
            mins: '',
            secs: ''
        };
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.setStorage();
        setInterval(function () {
            _this.getTime();
        }, 1000);
    };
    HomePage.prototype.ionViewDidEnter = function () {
        this.setStorage();
    };
    HomePage.prototype.setStorage = function () {
        var _this = this;
        this.storage.get('settings').then(function (settings) {
            if (settings) {
                console.log(settings);
                _this.settings = settings;
            }
        });
    };
    HomePage.prototype.getTime = function () {
        var date = new Date();
        var hrs = date.getHours();
        var mins = date.getMinutes();
        var secs = date.getSeconds();
        var formattedTime = this.fixDigits([hrs, mins, secs]);
        this.now.hrs = formattedTime[0];
        this.now.mins = formattedTime[1];
        this.now.secs = formattedTime[2];
    };
    HomePage.prototype.fixDigits = function (time) {
        var formattedTimeArray = [];
        time.forEach(function (val) {
            val = (val < 10) ? '0' + val : val;
            formattedTimeArray.push(val);
        });
        return formattedTimeArray;
    };
    HomePage.prototype.openSettingsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/daiquiri.io/Desktop/www/ionic/clock/src/pages/home/home.html"*/'<ion-content padding [ngStyle]="{ \'background-color\': settings?.background }">\n    <div class="body">\n        <h1 class="{{ settings.font }} {{ settings.size }}" *ngIf="now && settings"\n        [ngStyle]="{ \'color\': settings?.color }">\n            {{ now.hrs }}:{{ now.mins }}<span>:{{ now.secs }}</span>\n        </h1>\n        <div class="settings">\n            <button ion-button color="light" clear icon-only (click)="openSettingsPage()"\n                [ngStyle]="{ \'color\': settings?.color }">\n                <ion-icon name=\'settings\' is-active="false"></ion-icon>\n            </button>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/daiquiri.io/Desktop/www/ionic/clock/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_color_picker_color_picker__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_color_picker_color_picker__["a" /* ColorPickerPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/color-picker/color-picker.module#ColorPickerPageModule', name: 'ColorPickerPage', segment: 'color-picker', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_color_picker_color_picker__["a" /* ColorPickerPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__["a" /* SettingsPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/daiquiri.io/Desktop/www/ionic/clock/src/app/app.html"*/'<ion-nav [root]="rootPage" #content></ion-nav>'/*ion-inline-end:"/Users/daiquiri.io/Desktop/www/ionic/clock/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map