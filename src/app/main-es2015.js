(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _employeeDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employeeDetail */ "./src/app/employeeDetail.ts");
/* harmony import */ var _employeeDisplay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employeeDisplay */ "./src/app/employeeDisplay.ts");
/* harmony import */ var _employeeList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employeeList */ "./src/app/employeeList.ts");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page */ "./src/app/page.ts");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_page__WEBPACK_IMPORTED_MODULE_6__["PageComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_page__WEBPACK_IMPORTED_MODULE_6__["PageComponent"],
        _employeeList__WEBPACK_IMPORTED_MODULE_5__["EmployeeListComponent"],
        _employeeDetail__WEBPACK_IMPORTED_MODULE_3__["EmployeeDetailComponent"],
        _employeeDisplay__WEBPACK_IMPORTED_MODULE_4__["EmployeeDisplayComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _page__WEBPACK_IMPORTED_MODULE_6__["PageComponent"],
                    _employeeList__WEBPACK_IMPORTED_MODULE_5__["EmployeeListComponent"],
                    _employeeDetail__WEBPACK_IMPORTED_MODULE_3__["EmployeeDetailComponent"],
                    _employeeDisplay__WEBPACK_IMPORTED_MODULE_4__["EmployeeDisplayComponent"]
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]],
                bootstrap: [_page__WEBPACK_IMPORTED_MODULE_6__["PageComponent"]]
            }]
    }], null, null);


/***/ }),

/***/ "./src/app/employeeDetail.ts":
/*!***********************************!*\
  !*** ./src/app/employeeDetail.ts ***!
  \***********************************/
/*! exports provided: EmployeeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDetailComponent", function() { return EmployeeDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _employeeDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employeeDisplay */ "./src/app/employeeDisplay.ts");



class EmployeeDetailComponent {
}
EmployeeDetailComponent.ɵfac = function EmployeeDetailComponent_Factory(t) { return new (t || EmployeeDetailComponent)(); };
EmployeeDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmployeeDetailComponent, selectors: [["employee-detail"]], inputs: { employee: "employee" }, decls: 1, vars: 1, consts: [[3, "employee"]], template: function EmployeeDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "employee-display", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("employee", ctx.employee);
    } }, directives: [_employeeDisplay__WEBPACK_IMPORTED_MODULE_1__["EmployeeDisplayComponent"]], encapsulation: 2 });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'employee-detail',
                templateUrl: './employeeDetail.html'
            }]
    }], null, { employee: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] });


/***/ }),

/***/ "./src/app/employeeDisplay.ts":
/*!************************************!*\
  !*** ./src/app/employeeDisplay.ts ***!
  \************************************/
/*! exports provided: EmployeeDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDisplayComponent", function() { return EmployeeDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function EmployeeDisplayComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Email: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Hours Worked: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Hourly Wage: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Name: ", ctx_r0.employee.first_name, " ", ctx_r0.employee.last_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.employee.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.employee.hours_worked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.employee.hourly_wage);
} }
class EmployeeDisplayComponent {
}
EmployeeDisplayComponent.ɵfac = function EmployeeDisplayComponent_Factory(t) { return new (t || EmployeeDisplayComponent)(); };
EmployeeDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmployeeDisplayComponent, selectors: [["employee-display"]], inputs: { employee: "employee" }, decls: 1, vars: 1, consts: [["class", "card", 4, "ngIf"], [1, "card"], [1, "card-content"], [1, "card-title"]], template: function EmployeeDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EmployeeDisplayComponent_div_0_Template, 17, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.employee);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], encapsulation: 2 });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeDisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'employee-display',
                templateUrl: './employeeDisplay.html'
            }]
    }], null, { employee: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] });


/***/ }),

/***/ "./src/app/employeeList.ts":
/*!*********************************!*\
  !*** ./src/app/employeeList.ts ***!
  \*********************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function EmployeeListComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeListComponent_p_4_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const employee_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.selectedEmployee.emit(employee_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", employee_r2.first_name, " ", employee_r2.last_name, " ");
} }
class EmployeeListComponent {
    constructor() {
        this.employees = [];
        this.selectedEmployee = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
EmployeeListComponent.ɵfac = function EmployeeListComponent_Factory(t) { return new (t || EmployeeListComponent)(); };
EmployeeListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmployeeListComponent, selectors: [["employee-list"]], inputs: { employees: "employees" }, outputs: { selectedEmployee: "selectedEmployee" }, decls: 5, vars: 1, consts: [[1, "card"], [1, "card-content"], [1, "card-title"], [4, "ngFor", "ngForOf"], [3, "click"]], template: function EmployeeListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Select Employee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EmployeeListComponent_p_4_Template, 3, 2, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.employees);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["a[_ngcontent-%COMP%] {\n    cursor: pointer;\n  }"] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'employee-list',
                templateUrl: './employeeList.html'
            }]
    }], null, { employees: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectedEmployee: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] });


/***/ }),

/***/ "./src/app/employeeLoader.ts":
/*!***********************************!*\
  !*** ./src/app/employeeLoader.ts ***!
  \***********************************/
/*! exports provided: EmployeeLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeLoader", function() { return EmployeeLoader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




const apiUrl = '/api';
class EmployeeLoader {
    constructor(http) {
        this.http = http;
    }
    getList() {
        return this.http
            .get(apiUrl + '/employees')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(longList => longList.slice(0, 9)));
    }
    getDetails(employeeId) {
        return this.http.get(`${apiUrl}/employees/${employeeId}`);
    }
}
EmployeeLoader.ɵfac = function EmployeeLoader_Factory(t) { return new (t || EmployeeLoader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
EmployeeLoader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EmployeeLoader, factory: function (t) { return EmployeeLoader.ɵfac(t); }, providedIn: 'root' });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeLoader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null);


/***/ }),

/***/ "./src/app/loader/faulty.ts":
/*!**********************************!*\
  !*** ./src/app/loader/faulty.ts ***!
  \**********************************/
/*! exports provided: faulty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faulty", function() { return faulty; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
// This observable transformation can be used to simulate a faulty
// network or backend service. It adds random delays and random
// failure probability.


const defaultOptions = {
    errorProbability: 0.3,
    maxDelayMs: 1000
};
function faulty(opts) {
    const options = Object.assign(Object.assign({}, defaultOptions), opts);
    return source => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["defer"])(() => {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(Math.random() * options.maxDelayMs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(_value => Math.random() < options.errorProbability
            ? Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(new Error('Failed in faulty'))
            : source));
    });
}


/***/ }),

/***/ "./src/app/loader/loadWithRetry.ts":
/*!*****************************************!*\
  !*** ./src/app/loader/loadWithRetry.ts ***!
  \*****************************************/
/*! exports provided: LoadResultStatus, statusStrings, loadWithRetry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadResultStatus", function() { return LoadResultStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusStrings", function() { return statusStrings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadWithRetry", function() { return loadWithRetry; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");


var LoadResultStatus;
(function (LoadResultStatus) {
    LoadResultStatus[LoadResultStatus["InProgress"] = 0] = "InProgress";
    LoadResultStatus[LoadResultStatus["Retrying"] = 1] = "Retrying";
    LoadResultStatus[LoadResultStatus["Waiting"] = 2] = "Waiting";
    LoadResultStatus[LoadResultStatus["Success"] = 3] = "Success";
    LoadResultStatus[LoadResultStatus["Error"] = 4] = "Error";
})(LoadResultStatus || (LoadResultStatus = {}));
const statusStrings = [
    'In Progress',
    'Retrying',
    'Waiting to Retry',
    'Success',
    'Error'
];
const defaultOptions = {
    attempts: 3,
    retryDelayMs: 2000,
    retryBackoffCoefficient: 1.5,
    retryMaxDelayMs: 30000
};
function loadWithRetry(source, producer, opts) {
    const options = Object.assign(Object.assign({}, defaultOptions), opts);
    return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(key => {
        const notifications = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({
            status: LoadResultStatus.InProgress
        });
        let attempt = 0;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(notifications, Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["defer"])(() => {
            attempt++;
            return producer(key);
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["retryWhen"])(errors => errors.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(error => notifications.next({
            status: LoadResultStatus.Error,
            error,
            willRetry: attempt < options.attempts
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(_ => attempt < options.attempts), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(_ => notifications.next({
            status: LoadResultStatus.Waiting
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delayWhen"])(() => retryDelay(options, attempt)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(_ => notifications.next({
            status: LoadResultStatus.Retrying
        })))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => ({
            status: LoadResultStatus.Success,
            data
        }))));
    }));
}
function retryDelay(options, attempt) {
    const jitter = (Math.random() - 0.5) * options.retryDelayMs * 0.5;
    let delay = options.retryDelayMs *
        Math.pow(options.retryBackoffCoefficient, attempt - 1) +
        jitter;
    delay = Math.min(delay, options.retryMaxDelayMs);
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(delay);
}


/***/ }),

/***/ "./src/app/page.ts":
/*!*************************!*\
  !*** ./src/app/page.ts ***!
  \*************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _loader_faulty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader/faulty */ "./src/app/loader/faulty.ts");
/* harmony import */ var _loader_loadWithRetry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader/loadWithRetry */ "./src/app/loader/loadWithRetry.ts");
/* harmony import */ var _employeeLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employeeLoader */ "./src/app/employeeLoader.ts");
/* harmony import */ var _employeeList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employeeList */ "./src/app/employeeList.ts");
/* harmony import */ var _employeeDisplay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employeeDisplay */ "./src/app/employeeDisplay.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










class PageComponent {
    constructor(employeeLoader) {
        this.selectedEmployeeId = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.employees = employeeLoader.getList();
        const loadResults = Object(_loader_loadWithRetry__WEBPACK_IMPORTED_MODULE_4__["loadWithRetry"])(this.selectedEmployeeId, id => employeeLoader.getDetails(id).pipe(Object(_loader_faulty__WEBPACK_IMPORTED_MODULE_3__["faulty"])()) // add this to simulate bad connection
        ).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
        this.status = loadResults.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(result => console.log('RECEIVED', result, 'at', new Date())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => _loader_loadWithRetry__WEBPACK_IMPORTED_MODULE_4__["statusStrings"][result.status]));
        this.showEmployeeDetails = loadResults.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => result.status === _loader_loadWithRetry__WEBPACK_IMPORTED_MODULE_4__["LoadResultStatus"].Success));
        this.selectedEmployee = loadResults.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(result => result.status === _loader_loadWithRetry__WEBPACK_IMPORTED_MODULE_4__["LoadResultStatus"].Success), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => result.data));
    }
}
PageComponent.ɵfac = function PageComponent_Factory(t) { return new (t || PageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_employeeLoader__WEBPACK_IMPORTED_MODULE_5__["EmployeeLoader"])); };
PageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageComponent, selectors: [["app-root"]], decls: 11, vars: 12, consts: [[1, "two-across"], [3, "employees", "selectedEmployee"], [1, "status"], [3, "employee"]], template: function PageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "employee-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedEmployee", function PageComponent_Template_employee_list_selectedEmployee_1_listener($event) { return ctx.selectedEmployeeId.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Loading status: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "employee-display", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("employees", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx.employees));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, ctx.status));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 8, ctx.showEmployeeDetails) ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("employee", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 10, ctx.selectedEmployee));
    } }, directives: [_employeeList__WEBPACK_IMPORTED_MODULE_6__["EmployeeListComponent"], _employeeDisplay__WEBPACK_IMPORTED_MODULE_7__["EmployeeDisplayComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: ["@media only screen and (min-width: 601px) {\n  employee-list[_ngcontent-%COMP%] {\n    grid-area: 2 / 1;\n  }\n\n  .status[_ngcontent-%COMP%] {\n    grid-area: 1 / 2;\n  }\n\n  employee-display[_ngcontent-%COMP%] {\n    grid-area: 2 / 2;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSB7XG4gIGVtcGxveWVlLWxpc3Qge1xuICAgIGdyaWQtYXJlYTogMiAvIDE7XG4gIH1cblxuICAuc3RhdHVzIHtcbiAgICBncmlkLWFyZWE6IDEgLyAyO1xuICB9XG5cbiAgZW1wbG95ZWUtZGlzcGxheSB7XG4gICAgZ3JpZC1hcmVhOiAyIC8gMjtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './page.html',
                styleUrls: ['./page.css']
            }]
    }], function () { return [{ type: _employeeLoader__WEBPACK_IMPORTED_MODULE_5__["EmployeeLoader"] }]; }, null);


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
const environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kcordes/projects/Ang/angular-class-material/abc/AOT-SKIP-cli/sandbox/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map