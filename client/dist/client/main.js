(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Currency Converter';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _conversion_conversion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./conversion/conversion.component */ "./src/app/conversion/conversion.component.ts");
/* harmony import */ var _conversion_list_conversion_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./conversion-list/conversion-list.component */ "./src/app/conversion-list/conversion-list.component.ts");
/* harmony import */ var _timestamp_timestamp_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./timestamp/timestamp.component */ "./src/app/timestamp/timestamp.component.ts");
/* harmony import */ var _create_conversion_create_conversion_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./create-conversion/create-conversion.component */ "./src/app/create-conversion/create-conversion.component.ts");











var routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: _conversion_conversion_component__WEBPACK_IMPORTED_MODULE_7__["ConversionComponent"] },
    { path: 'create', component: _create_conversion_create_conversion_component__WEBPACK_IMPORTED_MODULE_10__["CreateConversionComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _conversion_conversion_component__WEBPACK_IMPORTED_MODULE_7__["ConversionComponent"],
                _conversion_list_conversion_list_component__WEBPACK_IMPORTED_MODULE_8__["ConversionListComponent"],
                _timestamp_timestamp_component__WEBPACK_IMPORTED_MODULE_9__["TimestampComponent"],
                _create_conversion_create_conversion_component__WEBPACK_IMPORTED_MODULE_10__["CreateConversionComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/conversion-list/conversion-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/conversion-list/conversion-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row alert-info border border-dark font-weight-bold\">\n        <div class=\"col\">\n            Source Amount\n        </div>\n        <div class=\"col\">\n            Source Currency\n        </div>\n        <div class=\"col\">\n            Target Currency\n        </div>\n        <div class=\"col\">\n            Rate\n        </div>\n        <div class=\"col\">\n            Converted Amount\n        </div>\n        <div class=\"col\">\n            Time\n        </div>\n        <div class=\"col\">\n        </div>\n    </div>\n    <div class=\"row\" >\n        <div class=\"col\">\n            {{ conversion.sourceAmount }}\n        </div>\n        <div class=\"col\">\n            {{ conversion.sourceCurrency }}\n        </div>\n        <div class=\"col\">\n            {{ conversion.targetCurrency }}\n        </div>\n        <div class=\"col\">\n            <form #form=\"ngForm\" (ngSubmit)=\"updateConversion(form.value)\">\n                <input type=\"number\" required placeholder=\"Rate\" #rate=\"ngModel\" name=\"rate\" class=\"form-control m-2\" [(ngModel)]=\"conversion.rate\">\n                <button [disabled]=\"!form.valid\" type='submit' class=\"btn btn-success m-2\">Update</button>\n                <div *ngIf=\"form.invalid && (form.dirty || form.touched)\" class=\"alert alert-danger\">\n                    Rate is required and must be numeric.\n                </div>\n            </form>\n        </div>\n        <div class=\"col\">\n            {{ conversion.convertedAmount }}\n        </div>\n        <div class=\"col\">\n            {{ conversion.timeStamp }}\n        </div>\n        <div class=\"col\">\n            <button type='button' class=\"btn btn-dark m-2 form-control\" (click)=\"deleteConversion()\">Delete</button>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/conversion-list/conversion-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/conversion-list/conversion-list.component.ts ***!
  \**************************************************************/
/*! exports provided: ConversionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversionListComponent", function() { return ConversionListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _conversion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../conversion.service */ "./src/app/conversion.service.ts");



var ConversionListComponent = /** @class */ (function () {
    function ConversionListComponent(conversionService) {
        this.conversionService = conversionService;
        this.refreshListEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ConversionListComponent.prototype.ngOnInit = function () {
    };
    ConversionListComponent.prototype.updateConversion = function (obj) {
        var _this = this;
        this.conversion.rate = obj.rate;
        this.conversionService.updateConversion(this.conversion).subscribe(function (result) {
            _this.conversion = result;
        });
    };
    ConversionListComponent.prototype.deleteConversion = function () {
        var _this = this;
        this.conversionService.deleteConversion(this.conversion._id).subscribe(function () {
            _this.refreshListEvent.emit();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ConversionListComponent.prototype, "conversion", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ConversionListComponent.prototype, "refreshListEvent", void 0);
    ConversionListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-conversion-list',
            template: __webpack_require__(/*! ./conversion-list.component.html */ "./src/app/conversion-list/conversion-list.component.html"),
            providers: [_conversion_service__WEBPACK_IMPORTED_MODULE_2__["ConversionService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_conversion_service__WEBPACK_IMPORTED_MODULE_2__["ConversionService"]])
    ], ConversionListComponent);
    return ConversionListComponent;
}());



/***/ }),

/***/ "./src/app/conversion.service.ts":
/*!***************************************!*\
  !*** ./src/app/conversion.service.ts ***!
  \***************************************/
/*! exports provided: ConversionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversionService", function() { return ConversionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");




var ConversionService = /** @class */ (function () {
    function ConversionService(http) {
        this.http = http;
        this.apiurl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl;
    }
    ConversionService.prototype.listConversions = function () {
        return this.http.get(this.apiurl + 'api/conv');
    };
    ConversionService.prototype.updateConversion = function (obj) {
        console.log(obj);
        return this.http.put(this.apiurl + 'api/conv/' + obj._id, obj);
    };
    ConversionService.prototype.deleteConversion = function (id) {
        return this.http.delete(this.apiurl + 'api/conv/' + id);
    };
    ConversionService.prototype.getTimestamp = function () {
        return this.http.get(this.apiurl + 'api/conv/timestamp');
    };
    ConversionService.prototype.deleteAll = function () {
        return this.http.delete(this.apiurl + 'api/conv/deleteAll');
    };
    ConversionService.prototype.refreshRates = function () {
        return this.http.get(this.apiurl + 'api/conv/refreshRates');
    };
    ConversionService.prototype.getCurrencies = function () {
        return this.http.get(this.apiurl + 'api/conv/currencies');
    };
    ConversionService.prototype.createConversion = function (cur) {
        return this.http.post(this.apiurl + 'api/conv/', cur);
    };
    ConversionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ConversionService);
    return ConversionService;
}());



/***/ }),

/***/ "./src/app/conversion/conversion.component.html":
/*!******************************************************!*\
  !*** ./src/app/conversion/conversion.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-timestamp></app-timestamp>\n<app-conversion-list *ngFor='let c of conversionList'\n                     [conversion]=\"c\"\n                     (refreshListEvent)=\"handleListRefresh()\"\n>\n</app-conversion-list>\n<footer class=\"alert-warning border-top border-dark\">\n    <a href=\"/create\" class=\"btn btn-primary m-2\">Create a Conversion</a>\n    <button type='button' class=\"btn btn-danger m-2\" (click)=\"deleteAll()\">Clear Conversion List</button>\n</footer>\n"

/***/ }),

/***/ "./src/app/conversion/conversion.component.ts":
/*!****************************************************!*\
  !*** ./src/app/conversion/conversion.component.ts ***!
  \****************************************************/
/*! exports provided: ConversionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversionComponent", function() { return ConversionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _conversion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../conversion.service */ "./src/app/conversion.service.ts");



var ConversionComponent = /** @class */ (function () {
    function ConversionComponent(conversionService) {
        this.conversionService = conversionService;
        this.conversionList = null;
        this.ratesTimestamp = null;
        this.refreshTimestampEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ConversionComponent.prototype.ngOnInit = function () {
        this.handleListRefresh();
    };
    ConversionComponent.prototype.handleListRefresh = function () {
        var _this = this;
        this.conversionService.listConversions().subscribe(function (convs) {
            _this.conversionList = convs;
            _this.conversionService.getTimestamp().subscribe(function (ts) {
                _this.ratesTimestamp = ts;
            });
        });
    };
    ConversionComponent.prototype.deleteAll = function () {
        var _this = this;
        this.conversionService.deleteAll().subscribe(function () {
            _this.handleListRefresh();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ConversionComponent.prototype, "refreshTimestampEvent", void 0);
    ConversionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-conversion',
            template: __webpack_require__(/*! ./conversion.component.html */ "./src/app/conversion/conversion.component.html"),
            providers: [_conversion_service__WEBPACK_IMPORTED_MODULE_2__["ConversionService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_conversion_service__WEBPACK_IMPORTED_MODULE_2__["ConversionService"]])
    ], ConversionComponent);
    return ConversionComponent;
}());



/***/ }),

/***/ "./src/app/create-conversion/create-conversion.component.html":
/*!********************************************************************!*\
  !*** ./src/app/create-conversion/create-conversion.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-timestamp></app-timestamp>\n<form #newConvForm=\"ngForm\" (ngSubmit)=\"createConversion(newConvForm)\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col text-right\">\n                Enter currency amount*:\n            </div>\n            <div class=\"col text-left\">\n                <input type=\"number\" required #sourceAmount=\"ngModel\" placeholder=\"Amount\" name=\"sourceAmount\" class=\"form-control\"\n                       [(ngModel)]=\"conversion.sourceAmount\">\n            </div>\n        </div>\n        <br>\n        <div class=\"row\">\n            <div class=\"col text-right\">\n                Choose currency*:\n            </div>\n            <div class=\"col text-left\">\n                <select required #sourceAmount=\"ngModel\" name=\"sourceCurrency\" class=\"form-control\"\n                        [(ngModel)]=\"conversion.sourceCurrency\">\n                    <option *ngFor=\"let c of currencies\" [value]=\"c.value\">\n                        {{c.viewValue}}\n                    </option>\n                </select>\n            </div>\n        </div>\n        <br>\n        <div class=\"row\">\n            <div class=\"col text-right\">\n                Choose currency to convert to*:\n            </div>\n            <div class=\"col text-left\">\n                <select required #targetCurrency=\"ngModel\" name=\"targetCurrency\" class=\"form-control\"\n                        [(ngModel)]=\"conversion.targetCurrency\">\n                    <option *ngFor=\"let c of currencies; let i = index\" [value]=\"i\">\n                        {{c.viewValue}}\n                    </option>\n                </select>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col text-right\">\n                * Required\n            </div>\n            <div class=\"col text-left\">\n            </div>\n        </div>\n        <br>\n    </div>\n    <div class=\"alert-warning border-top border-dark\">\n        <button type='submit' value='Convert' class=\"btn btn-info  m-2\" [disabled]=\"!newConvForm.valid\">Convert</button>\n        <a href=\"/\" class=\"btn btn-primary m-2\">Cancel</a>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/create-conversion/create-conversion.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/create-conversion/create-conversion.component.ts ***!
  \******************************************************************/
/*! exports provided: CreateConversionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateConversionComponent", function() { return CreateConversionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _conversion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../conversion.service */ "./src/app/conversion.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CreateConversionComponent = /** @class */ (function () {
    function CreateConversionComponent(conversionService, router) {
        this.conversionService = conversionService;
        this.router = router;
        this.currencies = null;
        this.conversion = {};
    }
    CreateConversionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.conversionService.getCurrencies().subscribe(function (cur) {
            _this.currencies = _this.createArrayFromObject(cur);
        });
    };
    CreateConversionComponent.prototype.createConversion = function (cur) {
        var _this = this;
        this.conversionService.createConversion(cur.value).subscribe(function () {
            _this.router.navigate(['/conv']);
        });
    };
    CreateConversionComponent.prototype.createArrayFromObject = function (currObj) {
        var keys = Object.keys(currObj);
        var arr = [];
        console.log(currObj);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var curr = keys_1[_i];
            var a = { value: curr, viewValue: currObj[curr] };
            console.log(curr);
            arr.push(a);
        }
        return arr;
    };
    CreateConversionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-conversion',
            template: __webpack_require__(/*! ./create-conversion.component.html */ "./src/app/create-conversion/create-conversion.component.html"),
            providers: [_conversion_service__WEBPACK_IMPORTED_MODULE_2__["ConversionService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_conversion_service__WEBPACK_IMPORTED_MODULE_2__["ConversionService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CreateConversionComponent);
    return CreateConversionComponent;
}());



/***/ }),

/***/ "./src/app/timestamp/timestamp.component.html":
/*!****************************************************!*\
  !*** ./src/app/timestamp/timestamp.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n    <header>\n        <h1 id='title' class=\"alert-danger border-bottom border-dark\">\n            Currency Converter\n        </h1>\n        <p id='info' class=\"alert-success  border-top border-bottom border-dark\">\n            Currency conversion rates are current as of:\n            <br>\n            {{ ratesTimestamp }}\n            <br>\n            <button type='button' class=\"btn btn-info m-2\" (click)=\"refreshTimestamp()\">Refresh rates</button>\n        </p>\n    </header>\n</section>\n<hr>\n"

/***/ }),

/***/ "./src/app/timestamp/timestamp.component.ts":
/*!**************************************************!*\
  !*** ./src/app/timestamp/timestamp.component.ts ***!
  \**************************************************/
/*! exports provided: TimestampComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimestampComponent", function() { return TimestampComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _conversion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../conversion.service */ "./src/app/conversion.service.ts");



var TimestampComponent = /** @class */ (function () {
    function TimestampComponent(conversionService) {
        this.conversionService = conversionService;
        this.ratesTimestamp = null;
    }
    TimestampComponent.prototype.ngOnInit = function () {
        this.getTimestamp();
    };
    TimestampComponent.prototype.refreshTimestamp = function () {
        var _this = this;
        this.conversionService.refreshRates().subscribe(function () {
            _this.conversionService.getTimestamp().subscribe(function (ts) {
                _this.ratesTimestamp = ts;
            });
        });
    };
    TimestampComponent.prototype.getTimestamp = function () {
        var _this = this;
        this.conversionService.getTimestamp().subscribe(function (ts) {
            _this.ratesTimestamp = ts;
        });
    };
    TimestampComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timestamp',
            template: __webpack_require__(/*! ./timestamp.component.html */ "./src/app/timestamp/timestamp.component.html"),
            providers: [_conversion_service__WEBPACK_IMPORTED_MODULE_2__["ConversionService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_conversion_service__WEBPACK_IMPORTED_MODULE_2__["ConversionService"]])
    ], TimestampComponent);
    return TimestampComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiurl: '/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\Users\Dan\Documents\Harvard work\NodeJS\github\client\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map