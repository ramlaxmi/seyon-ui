webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "        <app-nav></app-nav>\n         <main class=\"pt-0 mx-lg-1\">\n        <div class=\"container-fluid mt-0\">\n            <router-outlet></router-outlet>\n        </div>\n         </main>\n        "

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Urls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIURLS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("./src/environments/environment.ts");

var URLS = {
    local: "",
    prod: ""
};
var Urls = /** @class */ (function () {
    function Urls() {
    }
    Urls.getDomain = function () {
        if (__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].production) {
            return URLS.prod;
        }
        return URLS.local;
    };
    return Urls;
}());

var APIURLS = {
    client: "/api/client",
    invoice: "/api/invoice",
    manInvoice: "/api/manuFacturingInvoice",
    user: "/api/user",
    userrole: "/api/userrole",
    adduserrole: "/api/userrole/adduserrole",
    getcompany: "/api/company/getCompany",
    updatecompany: "/api/company/updateCompany",
    savevoucher: "/api/voucher/saveVoucher",
    voucher: "/api/voucher",
    printIInvoiceUrl: "/api/invoice/IhtmlReport?performaId=",
    printPInvoiceUrl: "/api/invoice/PhtmlReport?performaId=",
    printManIInvoiceUrl: "/api/manuFacturingInvoice/IhtmlReport?performaId=",
    printManPInvoiceUrl: "/api/manuFacturingInvoice/PhtmlReport?performaId="
};


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nav_nav_component__ = __webpack_require__("./src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__client_client_component__ = __webpack_require__("./src/app/client/client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__client_client_service__ = __webpack_require__("./src/app/client/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__users_users_component__ = __webpack_require__("./src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__users_users_service__ = __webpack_require__("./src/app/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__invoice_invoice_component__ = __webpack_require__("./src/app/invoice/invoice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__invoice_invoice_search_component__ = __webpack_require__("./src/app/invoice/invoice.search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__invoice_invoice_service__ = __webpack_require__("./src/app/invoice/invoice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__company_company_component__ = __webpack_require__("./src/app/company/company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__company_company_service__ = __webpack_require__("./src/app/company/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__voucher_voucher_component__ = __webpack_require__("./src/app/voucher/voucher.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__voucher_voucher_search_component__ = __webpack_require__("./src/app/voucher/voucher.search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__voucher_voucher_service__ = __webpack_require__("./src/app/voucher/voucher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__gen_invoice_gen_invoice_component__ = __webpack_require__("./src/app/gen-invoice/gen-invoice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__gen_invoice_gen_invoice_service__ = __webpack_require__("./src/app/gen-invoice/gen-invoice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__globals__ = __webpack_require__("./src/app/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__manufacturing_invoice_invoice_manu_component__ = __webpack_require__("./src/app/manufacturing-invoice/invoice.manu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__manufacturing_invoice_invoice_manu_success_component__ = __webpack_require__("./src/app/manufacturing-invoice/invoice.manu.success.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__manufacturing_invoice_manufacturing_invoice_component__ = __webpack_require__("./src/app/manufacturing-invoice/manufacturing-invoice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__manufacturing_invoice_manufacturing_gen_invoice_component__ = __webpack_require__("./src/app/manufacturing-invoice/manufacturing-gen-invoice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__has_role_directive__ = __webpack_require__("./src/app/has-role.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__auth_guard__ = __webpack_require__("./src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__excel_excel_generator_service__ = __webpack_require__("./src/app/excel/excel-generator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__reports_invoice_report_invoice_report_component__ = __webpack_require__("./src/app/reports/invoice-report/invoice-report.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var appRoutes = [
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__auth_guard__["a" /* AuthGuard */]], data: { role: ['ADMIN', 'USER'] } },
    { path: 'client', component: __WEBPACK_IMPORTED_MODULE_10__client_client_component__["a" /* ClientComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__auth_guard__["a" /* AuthGuard */]], data: { role: ['ADMIN'] } },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_12__users_users_component__["a" /* UsersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__auth_guard__["a" /* AuthGuard */]], data: { role: ['ADMIN'] } },
    { path: 'performaView/:id', component: __WEBPACK_IMPORTED_MODULE_14__invoice_invoice_component__["a" /* InvoiceComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__auth_guard__["a" /* AuthGuard */]], data: { role: ['ADMIN', 'USER'] } },
    { path: 'invoiceNew/:id', component: __WEBPACK_IMPORTED_MODULE_14__invoice_invoice_component__["a" /* InvoiceComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__auth_guard__["a" /* AuthGuard */]], data: { role: ['ADMIN', 'USER'] } },
    { path: 'invoice-search', component: __WEBPACK_IMPORTED_MODULE_15__invoice_invoice_search_component__["a" /* InvoiceSearchComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__auth_guard__["a" /* AuthGuard */]], data: { role: ['ADMIN', 'USER'] } },
    { path: 'generate-invoice/:id', component: __WEBPACK_IMPORTED_MODULE_22__gen_invoice_gen_invoice_component__["a" /* GenInvoiceComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__auth_guard__["a" /* AuthGuard */]], data: { role: ['ADMIN', 'USER'] } },
    { path: 'company', component: __WEBPACK_IMPORTED_MODULE_17__company_company_component__["a" /* CompanyComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__auth_guard__["a" /* AuthGuard */]], data: { role: ['ADMIN', 'USER'] } },
    { path: 'voucherNew/:id', component: __WEBPACK_IMPORTED_MODULE_19__voucher_voucher_component__["a" /* VoucherComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__auth_guard__["a" /* AuthGuard */]], data: { role: ['ADMIN', 'USER', 'CLIENT'] } },
    { path: 'voucher-search', component: __WEBPACK_IMPORTED_MODULE_20__voucher_voucher_search_component__["a" /* VoucherSearchComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__auth_guard__["a" /* AuthGuard */]], data: { role: ['ADMIN', 'USER', 'CLIENT'] } },
    { path: 'invoiceManu/:id', component: __WEBPACK_IMPORTED_MODULE_25__manufacturing_invoice_invoice_manu_component__["a" /* InvoiceManuComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__auth_guard__["a" /* AuthGuard */]], data: { role: ['ADMIN', 'USER'] } },
    { path: 'invoiceManuSuccess/:ids', component: __WEBPACK_IMPORTED_MODULE_26__manufacturing_invoice_invoice_manu_success_component__["a" /* InvoiceManuSuccessComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__auth_guard__["a" /* AuthGuard */]], data: { role: ['ADMIN', 'USER'] } },
    { path: 'manufacturingInvoice/:proformaId', component: __WEBPACK_IMPORTED_MODULE_27__manufacturing_invoice_manufacturing_invoice_component__["a" /* ManufacturingInvoiceComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__auth_guard__["a" /* AuthGuard */]], data: { role: ['ADMIN', 'USER'] } },
    { path: 'generate-manu-invoice/:proformaId', component: __WEBPACK_IMPORTED_MODULE_28__manufacturing_invoice_manufacturing_gen_invoice_component__["a" /* ManufacturingGenInvoiceComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__auth_guard__["a" /* AuthGuard */]], data: { role: ['ADMIN', 'USER'] } },
    { path: 'invoiceReport', component: __WEBPACK_IMPORTED_MODULE_32__reports_invoice_report_invoice_report_component__["a" /* InvoiceReportComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__auth_guard__["a" /* AuthGuard */]], data: { role: ['ADMIN'] } }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_8__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_10__client_client_component__["a" /* ClientComponent */],
                __WEBPACK_IMPORTED_MODULE_12__users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_14__invoice_invoice_component__["a" /* InvoiceComponent */],
                __WEBPACK_IMPORTED_MODULE_15__invoice_invoice_search_component__["a" /* InvoiceSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_22__gen_invoice_gen_invoice_component__["a" /* GenInvoiceComponent */],
                __WEBPACK_IMPORTED_MODULE_17__company_company_component__["a" /* CompanyComponent */],
                __WEBPACK_IMPORTED_MODULE_19__voucher_voucher_component__["a" /* VoucherComponent */],
                __WEBPACK_IMPORTED_MODULE_20__voucher_voucher_search_component__["a" /* VoucherSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_25__manufacturing_invoice_invoice_manu_component__["a" /* InvoiceManuComponent */],
                __WEBPACK_IMPORTED_MODULE_26__manufacturing_invoice_invoice_manu_success_component__["a" /* InvoiceManuSuccessComponent */],
                __WEBPACK_IMPORTED_MODULE_27__manufacturing_invoice_manufacturing_invoice_component__["a" /* ManufacturingInvoiceComponent */],
                __WEBPACK_IMPORTED_MODULE_28__manufacturing_invoice_manufacturing_gen_invoice_component__["a" /* ManufacturingGenInvoiceComponent */],
                __WEBPACK_IMPORTED_MODULE_29__has_role_directive__["a" /* HasRoleDirective */],
                __WEBPACK_IMPORTED_MODULE_32__reports_invoice_report_invoice_report_component__["a" /* InvoiceReportComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
                ),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__client_client_service__["a" /* ClientService */], __WEBPACK_IMPORTED_MODULE_13__users_users_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_16__invoice_invoice_service__["a" /* InvoiceService */], __WEBPACK_IMPORTED_MODULE_18__company_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_21__voucher_voucher_service__["a" /* VoucherService */], __WEBPACK_IMPORTED_MODULE_23__gen_invoice_gen_invoice_service__["a" /* GenInvoiceService */], __WEBPACK_IMPORTED_MODULE_24__globals__["a" /* CompanyGlobalVar */], __WEBPACK_IMPORTED_MODULE_30__auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_31__excel_excel_generator_service__["a" /* ExcelGeneratorService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_constants__ = __webpack_require__("./src/app/app.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals__ = __webpack_require__("./src/app/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var AuthGuard = /** @class */ (function () {
    function AuthGuard(http, companyVariable) {
        this.http = http;
        this.companyVariable = companyVariable;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var allow = false;
        //  console.log("Verifying the URL to access ", state.url);
        this.permissions = next.data.role;
        //  console.log("Allowed Roles" + this.permissions)
        return this.process();
    };
    AuthGuard.prototype.canActivate1 = function (next, state) {
        var allow = false;
        //  console.log("Verifying the URL to access ", state.url);
        this.permissions = next.data.role;
        var _loop_1 = function (checkPermission) {
            var permissionFound = this_1.companyVariable.userRoles.find(function (x) { return x.toUpperCase() === checkPermission.toUpperCase(); });
            // console.log("searching and finding permission" + permissionFound);
            if (permissionFound) {
                return { value: true };
            }
        };
        var this_1 = this;
        //  console.log("Allowed Roles" + this.permissions)
        for (var _i = 0, _a = this.permissions; _i < _a.length; _i++) {
            var checkPermission = _a[_i];
            var state_1 = _loop_1(checkPermission);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        //console.log("returning false")
        return false;
    };
    AuthGuard.prototype.process = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var url = __WEBPACK_IMPORTED_MODULE_1__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_1__app_constants__["a" /* APIURLS */].userrole).concat("/authenticated");
            // console.log("getting user role in Authguard")
            _this.http.get(url, { headers: httpOptions.headers })
                .subscribe(function (resp) {
                var _loop_2 = function (checkPermission) {
                    var permissionFound = resp.find(function (x) { return x.toUpperCase() === checkPermission.toUpperCase(); });
                    //console.log("searching and finding permission" + permissionFound);
                    if (permissionFound) {
                        // console.log("returning true")
                        resolve(true);
                    }
                };
                for (var _i = 0, _a = _this.permissions; _i < _a.length; _i++) {
                    var checkPermission = _a[_i];
                    _loop_2(checkPermission);
                }
                resolve(false);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__globals__["a" /* CompanyGlobalVar */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/client/client.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/client/client.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Heading -->\n<div class=\"card mb-4 wow fadeIn\">\n  <!--Card content-->\n  <div class=\"card-body d-sm-flex justify-content-between\">\n    <h4 class=\"mb-2 mb-sm-0 pt-1\">\n      <span>Manage Clients</span>\n    </h4>\n  </div>\n</div>\n<!-- Heading -->\n\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error\">\n  {{errorMessage}}\n</div>\n<div class=\"alert alert-success\" role=\"alert\" *ngIf=\"success\">\n  Successfully Saved\n</div>\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <div class=\"card\">\n      <div class=\"card-header grey lighten-4\" >\n        <div class=\"md-form input-group mb-3\">\n          <input type=\"text\" class=\"form-control\" id=\"search\" (input)=\"onSearchChange($event.target.value)\" />\n          <label for=\"search\">Search</label>\n          <div class=\"input-group-append\">\n            <button class=\"btn primary-color waves-effect m-0\" (click)=\"new()\">\n              <i class=\"fa fa-plus-square\"></i> &nbsp;Add New</button>\n          </div>\n        </div>\n      </div>\n      <div style=\"overflow:auto;height:400px;background-color:white;\">\n        <ul class=\"list-group list-group-flush\">\n          <li *ngFor=\"let client of filterClients\" class=\"list-group-item\" (click)=\"edit(client)\" style=\"cursor: pointer;\">\n            {{client.name}}\n            <span class=\"float-right\">\n              <i class=\"fa fa-arrow-right\"></i>\n            </span>\n          </li>\n        </ul>\n        <div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-8\">\n    <form (ngSubmit)=\"submit()\" name=\"clientForm\" ngNativeValidate>\n      <div class=\"card\">\n        <div class=\"card-header primary-color white-text\">\n          <h3> Client details for Id:{{client.id}} </h3>\n        </div>\n        <div class=\"card-body\">\n\n          <div class=\"row\">\n            <div class=\"col-md-6 border-right\">\n              <h4 class=\"sub-header\">\n                <span class=\"index\">1</span>Client\n              </h4>\n              <div class=\"md-form \">\n                <label for=\"name\" [class.active]=\"client.name!=''\">Name *</label>\n                <input type=\"text\" class=\"form-control underlined\" name=\"name\" id=\"name\" required=\"true\" [(ngModel)]=\"client.name\" pattern=\".{3,}\"\n                  title=\"3 characters minimum\" />\n                <small>minimum 3 character</small>\n              </div>\n              <div class=\"md-form \">\n                <label for=\"contactPerson\" [class.active]=\"client.contactPerson!=''\">Contact Person *</label>\n                <input type=\"text\" class=\"form-control underlined\" name=\"contactPerson\" id=\"contactPerson\" required=\"true\" [(ngModel)]=\"client.contactPerson\"\n                  pattern=\".{3,}\" title=\"3 characters minimum\" />\n                <small>minimum 3 character</small>\n              </div>\n              <div class=\" md-form \">\n                <label for=\"companyType\" [class.active]=\"client.companyType!=''\">Company Type *</label>\n                <select id=\"companyType\" name=\"companyType\" class=\"browser-default custom-select md-select\" required=\"true\" [(ngModel)]=\"client.companyType\">\n                  <option value=\"Company\" selected>Company</option>\n                  <option value=\"Partnership\">Partnership</option>\n                  <option value=\"Individual\">Individual</option>\n                  <option value=\"Trust\">Trust</option>\n                  <option value=\"LLP\">LLP</option>\n                </select>\n              </div>\n              <div class=\"md-form \">\n                <label for=\"phonePrimary\" [class.active]=\"client.phonePrimary!=''\">Primary Phone *</label>\n                <input type=\"tel\" class=\"form-control underlined\" pattern=\".{10,12}\" title=\"min 10, max 12 characters\" name=\"phonePrimary\"\n                  id=\"phonePrimary\" required=\"true\" [(ngModel)]=\"client.phonePrimary\" />\n                <small>min 10, max 12 characters</small>\n              </div>\n\n              <div class=\"md-form \">\n                <label for=\"email\" [class.active]=\"client.email!=''\">Primary Email *</label>\n                <input type=\"email\" class=\"form-control underlined\" name=\"email\" id=\"email\" required=\"true\" [(ngModel)]=\"client.email\" />\n              </div>\n              <div class=\"md-form \">\n                <label for=\"name\" [class.active]=\"client.phoneSecondary!=''\">Secondary Phone</label>\n                <input type=\"tel\" class=\"form-control underlined\" name=\"phoneSecondary\" id=\"phoneSecondary\" required=\"false\" [(ngModel)]=\"client.phoneSecondary\"\n                />\n              </div>\n\n              <div class=\"md-form \">\n                <label for=\"faxNo\" [class.active]=\"client.faxNo!=''\">Fax</label>\n                <input type=\"tel\" class=\"form-control underlined\" name=\"faxNo\" id=\"faxNo\" required=\"false\" [(ngModel)]=\"client.faxNo\" />\n              </div>\n              <div class=\"md-form \">\n                <label for=\"pan\" [class.active]=\"client.pan!=''\">PAN *</label>\n                <input type=\"text\" class=\"form-control underlined\" name=\"pan\" id=\"pan\" pattern=\"[A-Za-z]{5}\\d{4}[A-Za-z]{1}\" title=\"min 10 characters\" required=\"true\"\n                  [(ngModel)]=\"client.pan\" />\n                <small>AAAAA1111A</small>\n              </div>\n              <div class=\"md-form \">\n                <label for=\"gstin\" [class.active]=\"client.gstin!=''\">GSTIN * </label>\n                <input type=\"text\" class=\"form-control underlined\" name=\"gstin\" id=\"gstin\" pattern=\"^([0]{1}[1-9]{1}|[1-2]{1}[0-9]{1}|[3]{1}[0-7]{1})([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1})+$\" title=\"min 15,max 20 characters\"\n                  required=\"true\" [(ngModel)]=\"client.gstin\" />\n                <small>sample : 24AAACB5343E1Z7</small>\n              </div>\n              <div class=\"md-form \">\n                <label for=\"ServiceTaxRegNo\" [class.active]=\"client.serviceTaxRegNo!=''\">Service Tax Reg No</label>\n                <input type=\"text\" class=\"form-control underlined\" pattern=\".{15,20}\" title=\"min 15,max 20 characters\" name=\"ServiceTaxRegNo\"\n                  id=\"ServiceTaxRegNo\" required=\"false\" [(ngModel)]=\"client.serviceTaxRegNo\" />\n                <small>min 15, max 20 characters</small>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <h4 class=\"sub-header\">\n                <span class=\"index\">2</span>Billing Address\n              </h4>\n              <div class=\"md-form \">\n                <label for=\"addrLine1\" [class.active]=\"client.addrLine1!=''\">Address line 1 *</label>\n                <input type=\"text\" class=\"form-control underlined\" name=\"addrLine1\" pattern=\".{3,}\" title=\"min 3 characters\" id=\"addrLine1\"\n                  required=\"true\" [(ngModel)]=\"client.addrLine1\" />\n                <small>min 3 characters</small>\n              </div>\n              <div class=\"md-form \">\n                <label for=\"addrLine2\" [class.active]=\"client.addrLine2!=''\">Address line 2 </label>\n                <input type=\"text\" class=\"form-control underlined\" name=\"addrLine2\" id=\"addrLine2\" required=\"false\" [(ngModel)]=\"client.addrLine2\"\n                />\n              </div>\n              <div class=\"md-form \">\n                <label for=\"city\" [class.active]=\"client.city!=''\">City *</label>\n                <input type=\"text\" class=\"form-control underlined\" name=\"city\" pattern=\".{3,}\" title=\"min 3 characters\" id=\"city\" required=\"true\"\n                  [(ngModel)]=\"client.city\" />\n                <small>min 3 characters</small>\n              </div>\n              <div class=\"md-form \">\n                <label for=\"state\" [class.active]=\"client.state!=''\">State *</label>\n                <input type=\"text\" class=\"form-control underlined\" name=\"state\" pattern=\".{2,}\" title=\"min 2 characters\" id=\"state\" required=\"true\"\n                  [(ngModel)]=\"client.state\" />\n                <small>min 2 characters</small>\n              </div>\n              <div class=\"md-form \">\n                <label for=\"pinCode\" [class.active]=\"client.pincode!=''\">PinCode *</label>\n                <input type=\"text\" class=\"form-control underlined\" pattern=\".{6,6}\" title=\"min 6,max 6 characters\" name=\"pincode\" id=\"pincode\"\n                  required=\"true\" [(ngModel)]=\"client.pincode\" />\n                <small>6 characters</small>\n              </div>\n              <!-- <h5 class=\"sub-header\">\n                <span class=\"index\">3</span>Shipping Address\n              </h5>\n              <div class=\"custom-control custom-checkbox mb-2\">\n                <input id=\"checkbox\" class=\"custom-control-input\" type=\"checkbox\" [checked]=\"false\" (change)=\"updateAddrs($event)\" id=\"shipCheck\"\n                />\n                <label class=\"custom-control-label\" for=\"shipCheck\">Shipping  address is the same as billing address</label>\n              </div>\n\n              <div class=\"md-form \">\n                <label for=\"shipToAddrLine1\" [class.active]=\"client.shipToAddrLine1!=''\">Address line 1 *</label>\n                <input type=\"text\" class=\"form-control underlined\" name=\"shipToAddrLine1\" pattern=\".{3,}\" title=\"min 3 characters\" id=\"shipToAddrLine1\"\n                  required=\"true\" [(ngModel)]=\"client.shipToAddrLine1\" />\n                <small>min 3 characters</small>\n              </div>\n              <div class=\"md-form \">\n                <label for=\"shipToAddrLine2\" [class.active]=\"client.shipToAddrLine2!=''\">Address line 2 </label>\n                <input type=\"text\" class=\"form-control underlined\" name=\"shipToAddrLine2\" id=\"shipToAddrLine2\" required=\"false\" [(ngModel)]=\"client.shipToAddrLine2\"\n                />\n              </div>\n              <div class=\"md-form \">\n                <label for=\"shipToAddrCity\" [class.active]=\"client.shipToAddrCity!=''\">City *</label>\n                <input type=\"text\" class=\"form-control underlined\" name=\"shipToAddrCity\" pattern=\".{3,}\" title=\"min 3 characters\" id=\"shipToAddrCity\"\n                  required=\"true\" [(ngModel)]=\"client.shipToAddrCity\" />\n                <small>min 3 characters</small>\n              </div>\n              <div class=\"md-form \">\n                <label for=\"shipToAddrState\" [class.active]=\"client.shipToAddrState!=''\">State *</label>\n                <input type=\"text\" class=\"form-control underlined\" name=\"shipToAddrState\" pattern=\".{2,}\" title=\"min 2 characters\" id=\"shipToAddrState\"\n                  required=\"true\" [(ngModel)]=\"client.shipToAddrState\" />\n                <small>min 2 characters</small>\n              </div>\n              <div class=\"md-form \">\n                <label for=\"shipToAddrPincode\" [class.active]=\"client.shipToAddrPincode!=''\">PinCode *</label>\n                <input type=\"text\" class=\"form-control underlined\" pattern=\".{6,6}\" title=\"min 6,max 6 characters\" name=\"shipToAddrPincode\"\n                  id=\"shipToAddrPincode\" required=\"true\" [(ngModel)]=\"client.shipToAddrPincode\" />\n                <small>6 characters</small>\n              </div> -->\n              \n\n            </div>\n          </div>\n        </div>\n        <div class=\"card-footer\" >\n          <button type=\"submit\" class=\"btn bg-primary float-right\"><i class=\"fa fa-save\"></i>&nbsp;Save Client</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/client/client.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client_domain__ = __webpack_require__("./src/app/client/client.domain.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client_service__ = __webpack_require__("./src/app/client/client.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientComponent = /** @class */ (function () {
    function ClientComponent(clientService) {
        this.clientService = clientService;
        this.clients = [];
        this.filterClients = [];
        this.error = false;
        this.errorMessage = "";
        this.client = new __WEBPACK_IMPORTED_MODULE_1__client_domain__["a" /* Client */]();
        this.tempClient = new __WEBPACK_IMPORTED_MODULE_1__client_domain__["a" /* Client */]();
        this.success = true;
    }
    ClientComponent.prototype.ngOnInit = function () {
        this.getClients();
    };
    ClientComponent.prototype.getClients = function () {
        var _this = this;
        this.success = false;
        this.error = false;
        this.clientService.getForCompany()
            .subscribe(function (clients) {
            _this.clients = clients;
            _this.filterClients = clients;
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured please contact administrator";
        });
    };
    ClientComponent.prototype.edit = function (client) {
        this.client = client;
        this.tempClient = client;
    };
    ClientComponent.prototype.new = function () {
        this.success = false;
        this.error = false;
        this.client = new __WEBPACK_IMPORTED_MODULE_1__client_domain__["a" /* Client */]();
        this.tempClient = new __WEBPACK_IMPORTED_MODULE_1__client_domain__["a" /* Client */]();
    };
    ClientComponent.prototype.submit = function () {
        var _this = this;
        this.success = false;
        this.error = false;
        this.clientService.save(this.client)
            .subscribe(function (client) {
            _this.client = client;
            _this.getClients();
            _this.success = true;
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured please contact administrator";
        });
    };
    ClientComponent.prototype.changeListener = function ($event) {
        //this.readThis($event.target);
    };
    /*readThis(inputValue: any): void {
      if (inputValue.files.length === 0) {
        return;
      }
      var file: File = inputValue.files[0];
      var myReader: FileReader = new FileReader();
      myReader.onloadend = (e) => {
        this.client.logoImg = myReader.result;
      }
      myReader.readAsDataURL(file);
    }*/
    ClientComponent.prototype.onSearchChange = function (searchValue) {
        this.filterClients = this.clients.filter(function (cl) { return cl.name.toLowerCase().includes(searchValue.toLowerCase()); });
    };
    ClientComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-client',
            template: __webpack_require__("./src/app/client/client.component.html"),
            styles: [__webpack_require__("./src/app/client/client.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__client_service__["a" /* ClientService */]])
    ], ClientComponent);
    return ClientComponent;
}());



/***/ }),

/***/ "./src/app/client/client.domain.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Client; });
var Client = /** @class */ (function () {
    function Client() {
        this.name = '';
        this.contactPerson = '';
        this.companyType = '';
        this.addrLine1 = '';
        this.addrLine2 = '';
        this.city = '';
        this.state = "";
        this.pincode = '';
        this.phonePrimary = '';
        this.phoneSecondary = '';
        this.faxNo = '';
        this.pan = '';
        this.gstin = '';
        this.serviceTaxRegNo = '';
        this.accountingType = '';
        this.email = '';
        this.active = '';
        /* shipToAddrLine1: string='';
         shipToAddrLine2: string='';
         shipToAddrCity: string='';
         shipToAddrState: string='';
         shipToAddrPincode: string='';*/
    }
    return Client;
}());



/***/ }),

/***/ "./src/app/client/client.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constants__ = __webpack_require__("./src/app/app.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var ClientService = /** @class */ (function () {
    function ClientService(http) {
        this.http = http;
    }
    ClientService.prototype.getForCompany = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].client);
        return this.http.get(url);
    };
    ClientService.prototype.save = function (client) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].client);
        return this.http.post(url, client, { headers: httpOptions.headers });
    };
    ClientService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "./src/app/company/company.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/company/company.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Heading -->\n<div class=\"card mb-4 wow fadeIn\">\n  <!--Card content-->\n  <div class=\"card-body d-sm-flex justify-content-between\">\n    <h4 class=\"mb-2 mb-sm-0 pt-1\">\n      <span>Company</span>\n    </h4>\n  </div>\n</div>\n<!-- Heading -->\n\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error\">\n  {{errorMessage}}\n</div>\n<div class=\"alert alert-success\" role=\"alert\" *ngIf=\"success\">\n  Successfully Saved\n</div>\n<form (ngSubmit)=\"submitCompany()\" name=\"companyForm\" ngNativeValidate>\n  <div class=\"card\">\n    <div class=\"card-header primary-color white-text\">\n      <h5>Name : {{company.companyName}}</h5>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-md-3 border-right\">\n          <h4 class=\"sub-header\">\n            <span class=\"index\">1</span>Company\n          </h4>\n          <div class=\"md-form \">\n            <label for=\"addressLine1\" [class.active]=\"true\">Address Line 1</label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"addressLine1\" id=\"addressLine1\" [(ngModel)]=\"company.addressLine1\">\n          </div>\n          <div class=\"md-form \">\n            <label for=\"addressLine2\" [class.active]=\"true\">Address Line 2</label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"addressLine2\" id=\"addressLine2\" [(ngModel)]=\"company.addressLine2\">\n          </div>\n          <div class=\"md-form \">\n            <label for=\"city\" [class.active]=\"true\">City</label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"city\" id=\"city\" [(ngModel)]=\"company.city\" />\n          </div>\n          <div class=\"md-form \">\n            <label for=\"state\" [class.active]=\"true\">State</label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"state\" id=\"state\" [(ngModel)]=\"company.state\" />\n          </div>\n          <div class=\"md-form \">\n            <label for=\"pinCode\" [class.active]=\"true\">Pincode *</label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"pinCode\" id=\"pinCode\" [(ngModel)]=\"company.pinCode\" />\n          </div>\n        </div>\n\n        <div class=\"col-md-3 border-right\">\n          <h4 class=\"sub-header\">\n            <span class=\"index\">2</span>Owner\n          </h4>\n          <div class=\"md-form \">\n            <label for=\"ownerName\" [class.active]=\"true\">Owner Name</label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"ownerName\" id=\"ownerName\" [(ngModel)]=\"company.ownerName\" />\n          </div>\n          <div class=\"md-form \">\n            <label for=\"primaryEmail\" [class.active]=\"true\">Primary Email</label>\n            <input type=\"email\" class=\"form-control underlined\" name=\"primaryEmail\" id=\"primaryEmail\" placeholder=\"Enter Secondary email address\"\n              [(ngModel)]=\"company.primaryEmail\" />\n          </div>\n          <div class=\"md-form \">\n            <label for=\"secondaryEmail\" [class.active]=\"true\">Secondary Email</label>\n            <input type=\"email\" class=\"form-control underlined\" name=\"secondaryEmail\" id=\"secondaryEmail\" placeholder=\"Enter Secondary email address\"\n              [(ngModel)]=\"company.secondaryEmail\" />\n          </div>\n\n\n          <div class=\"md-form \">\n            <label for=\"faxNo\" [class.active]=\"true\">Fax No</label>\n            <input type=\"tel\" class=\"form-control underlined\" name=\"faxNo\" id=\"faxNo\" [(ngModel)]=\"company.faxNo\" />\n          </div>\n\n          <div class=\"md-form \">\n            <label for=\"phonePrimary\" [class.active]=\"true\">Primary Phone</label>\n            <input type=\"tel\" class=\"form-control underlined\" name=\"phonePrimary\" id=\"phonePrimary\" [(ngModel)]=\"company.phonePrimary\"\n            />\n          </div>\n\n          <div class=\"md-form\">\n            <label for=\"phoneSecondary\" [class.active]=\"true\">Secondary Phone</label>\n            <input type=\"tel\" class=\"form-control underlined\" name=\"phoneSecondary\" id=\"phoneSecondary\" [(ngModel)]=\"company.phoneSecondary\"\n            />\n          </div>\n        </div>\n\n        <div class=\"col-md-3 border-right\">\n          <h4 class=\"sub-header\">\n            <span class=\"index\">3</span>Bank\n          </h4>\n          <div class=\"md-form \">\n            <label for=\"bankName\" [class.active]=\"true\">Bank Name</label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"bankName\" id=\"bankName\" [(ngModel)]=\"company.bankName\" />\n          </div>\n          <div class=\"md-form \">\n            <label for=\"branchIFSCCode\" [class.active]=\"true\">IFSC Code</label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"branchIFSCCode\" id=\"branchIFSCCode\" [(ngModel)]=\"company.branchIFSCCode\"\n            />\n          </div>\n          <div class=\"md-form \">\n            <label for=\"branch\" [class.active]=\"true\">Branch</label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"branch\" id=\"branch\" [(ngModel)]=\"company.branch\" />\n          </div>\n          <div class=\"md-form \">\n            <label for=\"accountNo\" [class.active]=\"true\">Account Number</label> <input type=\"text\" class=\"form-control underlined\"\n              name=\"accountNo\" id=\"accountNo\" [(ngModel)]=\"company.accountNo\" />\n          </div>\n          <div class=\"md-form \">\n            <label for=\"accountName\" [class.active]=\"true\">Account Name</label> <input type=\"text\" class=\"form-control underlined\"\n              name=\"accountName\" id=\"accountName\" [(ngModel)]=\"company.accountName\" />\n          </div>\n          <div class=\"md-form \">\n            <label for=\"accountType\" [class.active]=\"true\">Account Type</label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"accountType\" id=\"accountType\" [(ngModel)]=\"company.accountType\"\n            />\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <h4 class=\"sub-header\">\n            <span class=\"index\">4</span>Other\n          </h4>\n\n          <div class=\"md-form \">\n            <label for=\"tanNo\" [class.active]=\"true\">Tan Number</label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"tanNo\" id=\"tanNo\" [(ngModel)]=\"company.tanNo\" />\n          </div>\n\n          <div class=\"md-form \">\n            <label for=\"gstNo\" [class.active]=\"true\">GST Number</label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"gstNo\" id=\"gstNo\" [(ngModel)]=\"company.gstNo\" />\n          </div>\n\n          <div class=\"md-form \">\n            <label for=\"panNo\" [class.active]=\"true\">PAN Number</label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"panNo\" id=\"panNo\" [(ngModel)]=\"company.panNo\" />\n          </div>\n          <div class=\"md-form \">\n            <label for=\"serviceTaxRegNo\" [class.active]=\"true\">Service TAX Reg number</label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"serviceTaxRegNo\" id=\"serviceTaxRegNo\" [(ngModel)]=\"company.serviceTaxRegNo\"\n            />\n          </div>\n          <div class=\"md-form \">\n            <label for=\"accountingType\" [class.active]=\"true\">Accounting Type</label> <input type=\"text\" class=\"form-control underlined\"\n              name=\"accountingType\" id=\"accountingType\" [(ngModel)]=\"company.accountingType\" />\n          </div>\n\n          <div class=\"md-form \">\n            <label for=\"swiftCode\" [class.active]=\"true\">Swift Code</label> <input type=\"text\" class=\"form-control underlined\"\n              name=\"swiftCode\" id=\"swiftCode\" [(ngModel)]=\"company.swiftCode\" />\n          </div>\n\n          <div class=\"md-form \">\n            <label for=\"file-logo\" [class.active]=\"true\">Logo</label>\n            <input type=\"file\" id=\"file-logo\" (change)=\"onFileChange($event)\" />\n          </div>\n          <input type=\"hidden\" name=\"logo\" id=\"logo\" [(ngModel)]=\"company.logoImg\" />\n          <img height=\"100\" id=\"img-logo\" [src]=\"company.logoImg\" />\n        </div>\n      </div>\n\n    </div>\n    <div class=\"card-footer\">\n      <button class=\"btn btn-success float-right waves-effect m-0\" type=\"submit\">\n           <i class=\"fa fa-save\"></i>&nbsp;Save </button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/company/company.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__company_domain__ = __webpack_require__("./src/app/company/company.domain.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_service__ = __webpack_require__("./src/app/company/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals__ = __webpack_require__("./src/app/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompanyComponent = /** @class */ (function () {
    function CompanyComponent(companyService, companyGlobalVar) {
        this.companyService = companyService;
        this.companyGlobalVar = companyGlobalVar;
        this.error = false;
        this.errorMessage = "";
        this.success = true;
        this.company = new __WEBPACK_IMPORTED_MODULE_1__company_domain__["a" /* Company */]();
    }
    CompanyComponent.prototype.ngOnInit = function () {
        this.getCompany();
    };
    CompanyComponent.prototype.getCompany = function () {
        var _this = this;
        this.success = false;
        this.error = false;
        this.companyService.getCompany()
            .subscribe(function (company) {
            _this.company = company;
            if (_this.company.gstNo != "") {
                _this.companyGlobalVar.gstNo = _this.company.gstNo;
            }
            else {
                _this.companyGlobalVar.gstNo = "";
            }
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured please contact administrator";
        });
    };
    CompanyComponent.prototype.submitCompany = function () {
        var _this = this;
        this.success = false;
        this.error = false;
        this.companyService.save(this.company)
            .subscribe(function (company) {
            _this.company = company;
            _this.getCompany();
            _this.success = true;
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured please contact administrator";
        });
    };
    CompanyComponent.prototype.readThis = function (inputValue) {
        var file = inputValue.files[0];
        var myReader = new FileReader();
        var fileContents = "";
        var self = this;
        myReader.readAsDataURL(file);
        myReader.onloadend = function (e) {
            self.company.logoImg = myReader.result;
        };
    };
    CompanyComponent.prototype.onFileChange = function ($event) {
        this.readThis($event.target);
    };
    CompanyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-company',
            template: __webpack_require__("./src/app/company/company.component.html"),
            styles: [__webpack_require__("./src/app/company/company.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_3__globals__["a" /* CompanyGlobalVar */]])
    ], CompanyComponent);
    return CompanyComponent;
}());



/***/ }),

/***/ "./src/app/company/company.domain.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Company; });
var Company = /** @class */ (function () {
    function Company() {
        this.companyName = "";
        this.ownerName = "";
        this.addressLine1 = "";
        this.addressLine2 = "";
        this.city = "";
        this.state = "";
        this.pinCode = "";
        this.phonePrimary = "";
        this.phoneSecondary = "";
        this.faxNo = "";
        this.tanNo = "";
        this.gstNo = "";
        this.panNo = "";
        this.serviceTaxRegNo = "";
        this.accountingType = "";
        this.logoImg = "";
        this.signatureImg = "";
        this.primaryEmail = "";
        this.secondaryEmail = "";
        this.bankName = "";
        this.branch = "";
        this.branchIFSCCode = "";
        this.accountNo = "";
        this.accountName = "";
        this.accountType = "";
        this.swiftCode = "";
        this.termsAndCondns = "";
    }
    return Company;
}());



/***/ }),

/***/ "./src/app/company/company.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constants__ = __webpack_require__("./src/app/app.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var CompanyService = /** @class */ (function () {
    function CompanyService(http) {
        this.http = http;
    }
    CompanyService.prototype.save = function (company) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].updatecompany);
        return this.http.post(url, company, { headers: httpOptions.headers });
    };
    CompanyService.prototype.getCompany = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].getcompany);
        return this.http.get(url);
    };
    CompanyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CompanyService);
    return CompanyService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <section class=\"section\">\n  <div class=\"row sameheight-container\">\n    <div class=\"col col-12 col-sm-12 col-md-6 col-xl-5 stats-col\">\n      <div class=\"card sameheight-item stats\" data-exclude=\"xs\">\n        <div class=\"card-block\">\n          <div class=\"title-block\">\n            <h4 class=\"title\"> Stats </h4>\n            <p class=\"title-description\"> Website metrics for\n              <a href=\"http://modularteam.github.io/modularity-free-admin-dashboard-theme-html/\"> your awesome project </a>\n            </p>\n          </div>\n          <div class=\"row row-sm stats-container\">\n            <div class=\"col-12 col-sm-6 stat-col\">\n              <div class=\"stat-icon\">\n                <i class=\"fa fa-rocket\"></i>\n              </div>\n              <div class=\"stat\">\n                <div class=\"value\"> 5407 </div>\n                <div class=\"name\"> Active items </div>\n              </div>\n              <div class=\"progress stat-progress\">\n                <div class=\"progress-bar\" style=\"width: 75%;\"></div>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-6 stat-col\">\n              <div class=\"stat-icon\">\n                <i class=\"fa fa-shopping-cart\"></i>\n              </div>\n              <div class=\"stat\">\n                <div class=\"value\"> 78464 </div>\n                <div class=\"name\"> Items sold </div>\n              </div>\n              <div class=\"progress stat-progress\">\n                <div class=\"progress-bar\" style=\"width: 25%;\"></div>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-6  stat-col\">\n              <div class=\"stat-icon\">\n                <i class=\"fa fa-line-chart\"></i>\n              </div>\n              <div class=\"stat\">\n                <div class=\"value\"> $80.560 </div>\n                <div class=\"name\"> Monthly income </div>\n              </div>\n              <div class=\"progress stat-progress\">\n                <div class=\"progress-bar\" style=\"width: 60%;\"></div>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-6  stat-col\">\n              <div class=\"stat-icon\">\n                <i class=\"fa fa-users\"></i>\n              </div>\n              <div class=\"stat\">\n                <div class=\"value\"> 359 </div>\n                <div class=\"name\"> Total users </div>\n              </div>\n              <div class=\"progress stat-progress\">\n                <div class=\"progress-bar\" style=\"width: 34%;\"></div>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-6  stat-col\">\n              <div class=\"stat-icon\">\n                <i class=\"fa fa-list-alt\"></i>\n              </div>\n              <div class=\"stat\">\n                <div class=\"value\"> 59 </div>\n                <div class=\"name\"> Tickets closed </div>\n              </div>\n              <div class=\"progress stat-progress\">\n                <div class=\"progress-bar\" style=\"width: 49%;\"></div>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-6 stat-col\">\n              <div class=\"stat-icon\">\n                <i class=\"fa fa-dollar\"></i>\n              </div>\n              <div class=\"stat\">\n                <div class=\"value\"> $780.064 </div>\n                <div class=\"name\"> Total income </div>\n              </div>\n              <div class=\"progress stat-progress\">\n                <div class=\"progress-bar\" style=\"width: 15%;\"></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-12 col-sm-12 col-md-6 col-xl-7 history-col\">\n      <div class=\"card sameheight-item\" data-exclude=\"xs\" id=\"dashboard-history\">\n        <div class=\"card-header card-header-sm bordered\">\n          <div class=\"header-block\">\n            <h3 class=\"title\">History</h3>\n          </div>\n          <ul class=\"nav nav-tabs pull-right\" role=\"tablist\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\" href=\"#visits\" role=\"tab\" data-toggle=\"tab\">Visits</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#downloads\" role=\"tab\" data-toggle=\"tab\">Downloads</a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"card-block\">\n          <div class=\"tab-content\">\n            <div role=\"tabpanel\" class=\"tab-pane active fade show\" id=\"visits\">\n              <p class=\"title-description\"> Number of unique visits last 30 days </p>\n              <div id=\"dashboard-visits-chart\"></div>\n            </div>\n            <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"downloads\">\n              <p class=\"title-description\"> Number of downloads last 30 days </p>\n              <div id=\"dashboard-downloads-chart\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"section\">\n  <div class=\"row sameheight-container\">\n    <div class=\"col-xl-8\">\n      <div class=\"card sameheight-item items\" data-exclude=\"xs,sm,lg\">\n        <div class=\"card-header bordered\">\n          <div class=\"header-block\">\n            <h3 class=\"title\"> Items </h3>\n            <a href=\"item-editor.html\" class=\"btn btn-primary btn-sm\"> Add new </a>\n          </div>\n          <div class=\"header-block pull-right\">\n            <label class=\"search\">\n                                                <input class=\"search-input\" placeholder=\"search...\">\n                                                <i class=\"fa fa-search search-icon\"></i>\n                                            </label>\n            <div class=\"pagination\">\n              <a href=\"\" class=\"btn btn-primary btn-sm\">\n                                                    <i class=\"fa fa-angle-up\"></i>\n                                                </a>\n              <a href=\"\" class=\"btn btn-primary btn-sm\">\n                                                    <i class=\"fa fa-angle-down\"></i>\n                                                </a>\n            </div>\n          </div>\n        </div>\n        <ul class=\"item-list striped\">\n          <li class=\"item item-list-header\">\n            <div class=\"item-row\">\n              <div class=\"item-col item-col-header fixed item-col-img xs\"></div>\n              <div class=\"item-col item-col-header item-col-title\">\n                <div>\n                  <span>Name</span>\n                </div>\n              </div>\n              <div class=\"item-col item-col-header item-col-sales\">\n                <div>\n                  <span>Sales</span>\n                </div>\n              </div>\n              <div class=\"item-col item-col-header item-col-stats\">\n                <div class=\"no-overflow\">\n                  <span>Stats</span>\n                </div>\n              </div>\n              <div class=\"item-col item-col-header item-col-date\">\n                <div>\n                  <span>Published</span>\n                </div>\n              </div>\n            </div>\n          </li>\n          <li class=\"item\">\n            <div class=\"item-row\">\n              <div class=\"item-col fixed item-col-img xs\">\n                <a href=\"\">\n                  <div class=\"item-img xs rounded\" style=\"background-image: url(https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg)\"></div>\n                </a>\n              </div>\n              <div class=\"item-col item-col-title no-overflow\">\n                <div>\n                  <a href=\"\" class=\"\">\n                    <h4 class=\"item-title no-wrap\"> 12 Myths Uncovered About IT &amp; Software </h4>\n                  </a>\n                </div>\n              </div>\n              <div class=\"item-col item-col-sales\">\n                <div class=\"item-heading\">Sales</div>\n                <div> 4958 </div>\n              </div>\n              <div class=\"item-col item-col-stats\">\n                <div class=\"item-heading\">Stats</div>\n                <div class=\"no-overflow\">\n                  <div class=\"item-stats sparkline\" data-type=\"bar\"></div>\n                </div>\n              </div>\n              <div class=\"item-col item-col-date\">\n                <div class=\"item-heading\">Published</div>\n                <div> 21 SEP 10:45 </div>\n              </div>\n            </div>\n          </li>\n          <li class=\"item\">\n            <div class=\"item-row\">\n              <div class=\"item-col fixed item-col-img xs\">\n                <a href=\"\">\n                  <div class=\"item-img xs rounded\" style=\"background-image: url(https://s3.amazonaws.com/uifaces/faces/twitter/_everaldo/128.jpg)\"></div>\n                </a>\n              </div>\n              <div class=\"item-col item-col-title no-overflow\">\n                <div>\n                  <a href=\"\" class=\"\">\n                    <h4 class=\"item-title no-wrap\"> 50% of things doesn&#x27;t really belongs to you </h4>\n                  </a>\n                </div>\n              </div>\n              <div class=\"item-col item-col-sales\">\n                <div class=\"item-heading\">Sales</div>\n                <div> 192 </div>\n              </div>\n              <div class=\"item-col item-col-stats\">\n                <div class=\"item-heading\">Stats</div>\n                <div class=\"no-overflow\">\n                  <div class=\"item-stats sparkline\" data-type=\"bar\"></div>\n                </div>\n              </div>\n              <div class=\"item-col item-col-date\">\n                <div class=\"item-heading\">Published</div>\n                <div> 21 SEP 10:45 </div>\n              </div>\n            </div>\n          </li>\n          <li class=\"item\">\n            <div class=\"item-row\">\n              <div class=\"item-col fixed item-col-img xs\">\n                <a href=\"\">\n                  <div class=\"item-img xs rounded\" style=\"background-image: url(https://s3.amazonaws.com/uifaces/faces/twitter/eduardo_olv/128.jpg)\"></div>\n                </a>\n              </div>\n              <div class=\"item-col item-col-title no-overflow\">\n                <div>\n                  <a href=\"\" class=\"\">\n                    <h4 class=\"item-title no-wrap\"> Vestibulum tincidunt amet laoreet mauris sit sem aliquam cras maecenas vel aliquam. </h4>\n                  </a>\n                </div>\n              </div>\n              <div class=\"item-col item-col-sales\">\n                <div class=\"item-heading\">Sales</div>\n                <div> 2143 </div>\n              </div>\n              <div class=\"item-col item-col-stats\">\n                <div class=\"item-heading\">Stats</div>\n                <div class=\"no-overflow\">\n                  <div class=\"item-stats sparkline\" data-type=\"bar\"></div>\n                </div>\n              </div>\n              <div class=\"item-col item-col-date\">\n                <div class=\"item-heading\">Published</div>\n                <div> 21 SEP 10:45 </div>\n              </div>\n            </div>\n          </li>\n          <li class=\"item\">\n            <div class=\"item-row\">\n              <div class=\"item-col fixed item-col-img xs\">\n                <a href=\"\">\n                  <div class=\"item-img xs rounded\" style=\"background-image: url(https://s3.amazonaws.com/uifaces/faces/twitter/why_this/128.jpg)\"></div>\n                </a>\n              </div>\n              <div class=\"item-col item-col-title no-overflow\">\n                <div>\n                  <a href=\"\" class=\"\">\n                    <h4 class=\"item-title no-wrap\"> 10 tips of Object Oriented Design </h4>\n                  </a>\n                </div>\n              </div>\n              <div class=\"item-col item-col-sales\">\n                <div class=\"item-heading\">Sales</div>\n                <div> 124 </div>\n              </div>\n              <div class=\"item-col item-col-stats\">\n                <div class=\"item-heading\">Stats</div>\n                <div class=\"no-overflow\">\n                  <div class=\"item-stats sparkline\" data-type=\"bar\"></div>\n                </div>\n              </div>\n              <div class=\"item-col item-col-date\">\n                <div class=\"item-heading\">Published</div>\n                <div> 21 SEP 10:45 </div>\n              </div>\n            </div>\n          </li>\n          <li class=\"item\">\n            <div class=\"item-row\">\n              <div class=\"item-col fixed item-col-img xs\">\n                <a href=\"\">\n                  <div class=\"item-img xs rounded\" style=\"background-image: url(https://s3.amazonaws.com/uifaces/faces/twitter/w7download/128.jpg)\"></div>\n                </a>\n              </div>\n              <div class=\"item-col item-col-title no-overflow\">\n                <div>\n                  <a href=\"\" class=\"\">\n                    <h4 class=\"item-title no-wrap\"> Sometimes friend tells it is cold </h4>\n                  </a>\n                </div>\n              </div>\n              <div class=\"item-col item-col-sales\">\n                <div class=\"item-heading\">Sales</div>\n                <div> 10214 </div>\n              </div>\n              <div class=\"item-col item-col-stats\">\n                <div class=\"item-heading\">Stats</div>\n                <div class=\"no-overflow\">\n                  <div class=\"item-stats sparkline\" data-type=\"bar\"></div>\n                </div>\n              </div>\n              <div class=\"item-col item-col-date\">\n                <div class=\"item-heading\">Published</div>\n                <div> 21 SEP 10:45 </div>\n              </div>\n            </div>\n          </li>\n          <li class=\"item\">\n            <div class=\"item-row\">\n              <div class=\"item-col fixed item-col-img xs\">\n                <a href=\"\">\n                  <div class=\"item-img xs rounded\" style=\"background-image: url(https://s3.amazonaws.com/uifaces/faces/twitter/pankogut/128.jpg)\"></div>\n                </a>\n              </div>\n              <div class=\"item-col item-col-title no-overflow\">\n                <div>\n                  <a href=\"\" class=\"\">\n                    <h4 class=\"item-title no-wrap\"> New ways of conceptual thinking </h4>\n                  </a>\n                </div>\n              </div>\n              <div class=\"item-col item-col-sales\">\n                <div class=\"item-heading\">Sales</div>\n                <div> 3217 </div>\n              </div>\n              <div class=\"item-col item-col-stats\">\n                <div class=\"item-heading\">Stats</div>\n                <div class=\"no-overflow\">\n                  <div class=\"item-stats sparkline\" data-type=\"bar\"></div>\n                </div>\n              </div>\n              <div class=\"item-col item-col-date\">\n                <div class=\"item-heading\">Published</div>\n                <div> 21 SEP 10:45 </div>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"col-xl-4\">\n      <div class=\"card sameheight-item sales-breakdown\" data-exclude=\"xs,sm,lg\">\n        <div class=\"card-header\">\n          <div class=\"header-block\">\n            <h3 class=\"title\"> Sales breakdown </h3>\n          </div>\n        </div>\n        <div class=\"card-block\">\n          <div class=\"dashboard-sales-breakdown-chart\" id=\"dashboard-sales-breakdown-chart\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"section map-tasks\">\n  <div class=\"row sameheight-container\">\n    <div class=\"col-md-8\">\n      <div class=\"card sameheight-item\" data-exclude=\"xs,sm\">\n        <div class=\"card-header\">\n          <div class=\"header-block\">\n            <h3 class=\"title\"> Sales by countries </h3>\n          </div>\n        </div>\n        <div class=\"card-block\">\n          <div id=\"dashboard-sales-map\" style=\"width: 100%; height: 400px;\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"card tasks sameheight-item\" data-exclude=\"xs,sm\">\n        <div class=\"card-header bordered\">\n          <div class=\"header-block\">\n            <h3 class=\"title\"> Tasks </h3>\n          </div>\n          <div class=\"header-block pull-right\">\n            <a href=\"\" class=\"btn btn-primary btn-sm rounded pull-right\"> Add new </a>\n          </div>\n        </div>\n        <div class=\"card-block\">\n          <div class=\"tasks-block\">\n            <ul class=\"item-list\">\n              <li class=\"item\">\n                <div class=\"item-row\">\n                  <div class=\"item-col item-col-title\">\n                    <label>\n                                                                <input class=\"checkbox\" type=\"checkbox\" checked=\"checked\">\n                                                                <span>Meeting with embassador</span>\n                                                            </label>\n                  </div>\n                  <div class=\"item-col fixed item-col-actions-dropdown\">\n                    <div class=\"item-actions-dropdown\">\n                      <a class=\"item-actions-toggle-btn\">\n                                                                    <span class=\"inactive\">\n                                                                        <i class=\"fa fa-cog\"></i>\n                                                                    </span>\n                                                                    <span class=\"active\">\n                                                                        <i class=\"fa fa-chevron-circle-right\"></i>\n                                                                    </span>\n                                                                </a>\n                      <div class=\"item-actions-block\">\n                        <ul class=\"item-actions-list\">\n                          <li>\n                            <a class=\"remove\" href=\"#\" data-toggle=\"modal\" data-target=\"#confirm-modal\">\n                                                                                <i class=\"fa fa-trash-o \"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"check\" href=\"#\">\n                                                                                <i class=\"fa fa-check\"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"edit\" href=\"item-editor.html\">\n                                                                                <i class=\"fa fa-pencil\"></i>\n                                                                            </a>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li class=\"item\">\n                <div class=\"item-row\">\n                  <div class=\"item-col item-col-title\">\n                    <label>\n                                                                <input class=\"checkbox\" type=\"checkbox\" checked=\"checked\">\n                                                                <span>Confession</span>\n                                                            </label>\n                  </div>\n                  <div class=\"item-col fixed item-col-actions-dropdown\">\n                    <div class=\"item-actions-dropdown\">\n                      <a class=\"item-actions-toggle-btn\">\n                                                                    <span class=\"inactive\">\n                                                                        <i class=\"fa fa-cog\"></i>\n                                                                    </span>\n                                                                    <span class=\"active\">\n                                                                        <i class=\"fa fa-chevron-circle-right\"></i>\n                                                                    </span>\n                                                                </a>\n                      <div class=\"item-actions-block\">\n                        <ul class=\"item-actions-list\">\n                          <li>\n                            <a class=\"remove\" href=\"#\" data-toggle=\"modal\" data-target=\"#confirm-modal\">\n                                                                                <i class=\"fa fa-trash-o \"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"check\" href=\"#\">\n                                                                                <i class=\"fa fa-check\"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"edit\" href=\"item-editor.html\">\n                                                                                <i class=\"fa fa-pencil\"></i>\n                                                                            </a>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li class=\"item\">\n                <div class=\"item-row\">\n                  <div class=\"item-col item-col-title\">\n                    <label>\n                                                                <input class=\"checkbox\" type=\"checkbox\">\n                                                                <span>Time to start building an ark</span>\n                                                            </label>\n                  </div>\n                  <div class=\"item-col fixed item-col-actions-dropdown\">\n                    <div class=\"item-actions-dropdown\">\n                      <a class=\"item-actions-toggle-btn\">\n                                                                    <span class=\"inactive\">\n                                                                        <i class=\"fa fa-cog\"></i>\n                                                                    </span>\n                                                                    <span class=\"active\">\n                                                                        <i class=\"fa fa-chevron-circle-right\"></i>\n                                                                    </span>\n                                                                </a>\n                      <div class=\"item-actions-block\">\n                        <ul class=\"item-actions-list\">\n                          <li>\n                            <a class=\"remove\" href=\"#\" data-toggle=\"modal\" data-target=\"#confirm-modal\">\n                                                                                <i class=\"fa fa-trash-o \"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"check\" href=\"#\">\n                                                                                <i class=\"fa fa-check\"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"edit\" href=\"item-editor.html\">\n                                                                                <i class=\"fa fa-pencil\"></i>\n                                                                            </a>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li class=\"item\">\n                <div class=\"item-row\">\n                  <div class=\"item-col item-col-title\">\n                    <label>\n                                                                <input class=\"checkbox\" type=\"checkbox\">\n                                                                <span>Beer time with dudes</span>\n                                                            </label>\n                  </div>\n                  <div class=\"item-col fixed item-col-actions-dropdown\">\n                    <div class=\"item-actions-dropdown\">\n                      <a class=\"item-actions-toggle-btn\">\n                                                                    <span class=\"inactive\">\n                                                                        <i class=\"fa fa-cog\"></i>\n                                                                    </span>\n                                                                    <span class=\"active\">\n                                                                        <i class=\"fa fa-chevron-circle-right\"></i>\n                                                                    </span>\n                                                                </a>\n                      <div class=\"item-actions-block\">\n                        <ul class=\"item-actions-list\">\n                          <li>\n                            <a class=\"remove\" href=\"#\" data-toggle=\"modal\" data-target=\"#confirm-modal\">\n                                                                                <i class=\"fa fa-trash-o \"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"check\" href=\"#\">\n                                                                                <i class=\"fa fa-check\"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"edit\" href=\"item-editor.html\">\n                                                                                <i class=\"fa fa-pencil\"></i>\n                                                                            </a>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li class=\"item\">\n                <div class=\"item-row\">\n                  <div class=\"item-col item-col-title\">\n                    <label>\n                                                                <input class=\"checkbox\" type=\"checkbox\" checked=\"checked\">\n                                                                <span>Meeting new girls</span>\n                                                            </label>\n                  </div>\n                  <div class=\"item-col fixed item-col-actions-dropdown\">\n                    <div class=\"item-actions-dropdown\">\n                      <a class=\"item-actions-toggle-btn\">\n                                                                    <span class=\"inactive\">\n                                                                        <i class=\"fa fa-cog\"></i>\n                                                                    </span>\n                                                                    <span class=\"active\">\n                                                                        <i class=\"fa fa-chevron-circle-right\"></i>\n                                                                    </span>\n                                                                </a>\n                      <div class=\"item-actions-block\">\n                        <ul class=\"item-actions-list\">\n                          <li>\n                            <a class=\"remove\" href=\"#\" data-toggle=\"modal\" data-target=\"#confirm-modal\">\n                                                                                <i class=\"fa fa-trash-o \"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"check\" href=\"#\">\n                                                                                <i class=\"fa fa-check\"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"edit\" href=\"item-editor.html\">\n                                                                                <i class=\"fa fa-pencil\"></i>\n                                                                            </a>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li class=\"item\">\n                <div class=\"item-row\">\n                  <div class=\"item-col item-col-title\">\n                    <label>\n                                                                <input class=\"checkbox\" type=\"checkbox\">\n                                                                <span>Remember damned home address</span>\n                                                            </label>\n                  </div>\n                  <div class=\"item-col fixed item-col-actions-dropdown\">\n                    <div class=\"item-actions-dropdown\">\n                      <a class=\"item-actions-toggle-btn\">\n                                                                    <span class=\"inactive\">\n                                                                        <i class=\"fa fa-cog\"></i>\n                                                                    </span>\n                                                                    <span class=\"active\">\n                                                                        <i class=\"fa fa-chevron-circle-right\"></i>\n                                                                    </span>\n                                                                </a>\n                      <div class=\"item-actions-block\">\n                        <ul class=\"item-actions-list\">\n                          <li>\n                            <a class=\"remove\" href=\"#\" data-toggle=\"modal\" data-target=\"#confirm-modal\">\n                                                                                <i class=\"fa fa-trash-o \"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"check\" href=\"#\">\n                                                                                <i class=\"fa fa-check\"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"edit\" href=\"item-editor.html\">\n                                                                                <i class=\"fa fa-pencil\"></i>\n                                                                            </a>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li class=\"item\">\n                <div class=\"item-row\">\n                  <div class=\"item-col item-col-title\">\n                    <label>\n                                                                <input class=\"checkbox\" type=\"checkbox\">\n                                                                <span>Get home before you got sleep</span>\n                                                            </label>\n                  </div>\n                  <div class=\"item-col fixed item-col-actions-dropdown\">\n                    <div class=\"item-actions-dropdown\">\n                      <a class=\"item-actions-toggle-btn\">\n                                                                    <span class=\"inactive\">\n                                                                        <i class=\"fa fa-cog\"></i>\n                                                                    </span>\n                                                                    <span class=\"active\">\n                                                                        <i class=\"fa fa-chevron-circle-right\"></i>\n                                                                    </span>\n                                                                </a>\n                      <div class=\"item-actions-block\">\n                        <ul class=\"item-actions-list\">\n                          <li>\n                            <a class=\"remove\" href=\"#\" data-toggle=\"modal\" data-target=\"#confirm-modal\">\n                                                                                <i class=\"fa fa-trash-o \"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"check\" href=\"#\">\n                                                                                <i class=\"fa fa-check\"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"edit\" href=\"item-editor.html\">\n                                                                                <i class=\"fa fa-pencil\"></i>\n                                                                            </a>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li class=\"item\">\n                <div class=\"item-row\">\n                  <div class=\"item-col item-col-title\">\n                    <label>\n                                                                <input class=\"checkbox\" type=\"checkbox\" checked=\"checked\">\n                                                                <span>Meeting with embassador</span>\n                                                            </label>\n                  </div>\n                  <div class=\"item-col fixed item-col-actions-dropdown\">\n                    <div class=\"item-actions-dropdown\">\n                      <a class=\"item-actions-toggle-btn\">\n                                                                    <span class=\"inactive\">\n                                                                        <i class=\"fa fa-cog\"></i>\n                                                                    </span>\n                                                                    <span class=\"active\">\n                                                                        <i class=\"fa fa-chevron-circle-right\"></i>\n                                                                    </span>\n                                                                </a>\n                      <div class=\"item-actions-block\">\n                        <ul class=\"item-actions-list\">\n                          <li>\n                            <a class=\"remove\" href=\"#\" data-toggle=\"modal\" data-target=\"#confirm-modal\">\n                                                                                <i class=\"fa fa-trash-o \"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"check\" href=\"#\">\n                                                                                <i class=\"fa fa-check\"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"edit\" href=\"item-editor.html\">\n                                                                                <i class=\"fa fa-pencil\"></i>\n                                                                            </a>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li class=\"item\">\n                <div class=\"item-row\">\n                  <div class=\"item-col item-col-title\">\n                    <label>\n                                                                <input class=\"checkbox\" type=\"checkbox\" checked=\"checked\">\n                                                                <span>Confession</span>\n                                                            </label>\n                  </div>\n                  <div class=\"item-col fixed item-col-actions-dropdown\">\n                    <div class=\"item-actions-dropdown\">\n                      <a class=\"item-actions-toggle-btn\">\n                                                                    <span class=\"inactive\">\n                                                                        <i class=\"fa fa-cog\"></i>\n                                                                    </span>\n                                                                    <span class=\"active\">\n                                                                        <i class=\"fa fa-chevron-circle-right\"></i>\n                                                                    </span>\n                                                                </a>\n                      <div class=\"item-actions-block\">\n                        <ul class=\"item-actions-list\">\n                          <li>\n                            <a class=\"remove\" href=\"#\" data-toggle=\"modal\" data-target=\"#confirm-modal\">\n                                                                                <i class=\"fa fa-trash-o \"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"check\" href=\"#\">\n                                                                                <i class=\"fa fa-check\"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"edit\" href=\"item-editor.html\">\n                                                                                <i class=\"fa fa-pencil\"></i>\n                                                                            </a>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li class=\"item\">\n                <div class=\"item-row\">\n                  <div class=\"item-col item-col-title\">\n                    <label>\n                                                                <input class=\"checkbox\" type=\"checkbox\">\n                                                                <span>Time to start building an ark</span>\n                                                            </label>\n                  </div>\n                  <div class=\"item-col fixed item-col-actions-dropdown\">\n                    <div class=\"item-actions-dropdown\">\n                      <a class=\"item-actions-toggle-btn\">\n                                                                    <span class=\"inactive\">\n                                                                        <i class=\"fa fa-cog\"></i>\n                                                                    </span>\n                                                                    <span class=\"active\">\n                                                                        <i class=\"fa fa-chevron-circle-right\"></i>\n                                                                    </span>\n                                                                </a>\n                      <div class=\"item-actions-block\">\n                        <ul class=\"item-actions-list\">\n                          <li>\n                            <a class=\"remove\" href=\"#\" data-toggle=\"modal\" data-target=\"#confirm-modal\">\n                                                                                <i class=\"fa fa-trash-o \"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"check\" href=\"#\">\n                                                                                <i class=\"fa fa-check\"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"edit\" href=\"item-editor.html\">\n                                                                                <i class=\"fa fa-pencil\"></i>\n                                                                            </a>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li class=\"item\">\n                <div class=\"item-row\">\n                  <div class=\"item-col item-col-title\">\n                    <label>\n                                                                <input class=\"checkbox\" type=\"checkbox\">\n                                                                <span>Beer time with dudes</span>\n                                                            </label>\n                  </div>\n                  <div class=\"item-col fixed item-col-actions-dropdown\">\n                    <div class=\"item-actions-dropdown\">\n                      <a class=\"item-actions-toggle-btn\">\n                                                                    <span class=\"inactive\">\n                                                                        <i class=\"fa fa-cog\"></i>\n                                                                    </span>\n                                                                    <span class=\"active\">\n                                                                        <i class=\"fa fa-chevron-circle-right\"></i>\n                                                                    </span>\n                                                                </a>\n                      <div class=\"item-actions-block\">\n                        <ul class=\"item-actions-list\">\n                          <li>\n                            <a class=\"remove\" href=\"#\" data-toggle=\"modal\" data-target=\"#confirm-modal\">\n                                                                                <i class=\"fa fa-trash-o \"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"check\" href=\"#\">\n                                                                                <i class=\"fa fa-check\"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"edit\" href=\"item-editor.html\">\n                                                                                <i class=\"fa fa-pencil\"></i>\n                                                                            </a>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li class=\"item\">\n                <div class=\"item-row\">\n                  <div class=\"item-col item-col-title\">\n                    <label>\n                                                                <input class=\"checkbox\" type=\"checkbox\" checked=\"checked\">\n                                                                <span>Meeting new girls</span>\n                                                            </label>\n                  </div>\n                  <div class=\"item-col fixed item-col-actions-dropdown\">\n                    <div class=\"item-actions-dropdown\">\n                      <a class=\"item-actions-toggle-btn\">\n                                                                    <span class=\"inactive\">\n                                                                        <i class=\"fa fa-cog\"></i>\n                                                                    </span>\n                                                                    <span class=\"active\">\n                                                                        <i class=\"fa fa-chevron-circle-right\"></i>\n                                                                    </span>\n                                                                </a>\n                      <div class=\"item-actions-block\">\n                        <ul class=\"item-actions-list\">\n                          <li>\n                            <a class=\"remove\" href=\"#\" data-toggle=\"modal\" data-target=\"#confirm-modal\">\n                                                                                <i class=\"fa fa-trash-o \"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"check\" href=\"#\">\n                                                                                <i class=\"fa fa-check\"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"edit\" href=\"item-editor.html\">\n                                                                                <i class=\"fa fa-pencil\"></i>\n                                                                            </a>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li class=\"item\">\n                <div class=\"item-row\">\n                  <div class=\"item-col item-col-title\">\n                    <label>\n                                                                <input class=\"checkbox\" type=\"checkbox\">\n                                                                <span>Remember damned home address</span>\n                                                            </label>\n                  </div>\n                  <div class=\"item-col fixed item-col-actions-dropdown\">\n                    <div class=\"item-actions-dropdown\">\n                      <a class=\"item-actions-toggle-btn\">\n                                                                    <span class=\"inactive\">\n                                                                        <i class=\"fa fa-cog\"></i>\n                                                                    </span>\n                                                                    <span class=\"active\">\n                                                                        <i class=\"fa fa-chevron-circle-right\"></i>\n                                                                    </span>\n                                                                </a>\n                      <div class=\"item-actions-block\">\n                        <ul class=\"item-actions-list\">\n                          <li>\n                            <a class=\"remove\" href=\"#\" data-toggle=\"modal\" data-target=\"#confirm-modal\">\n                                                                                <i class=\"fa fa-trash-o \"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"check\" href=\"#\">\n                                                                                <i class=\"fa fa-check\"></i>\n                                                                            </a>\n                          </li>\n                          <li>\n                            <a class=\"edit\" href=\"item-editor.html\">\n                                                                                <i class=\"fa fa-pencil\"></i>\n                                                                            </a>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n-->"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/excel/excel-generator.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExcelGeneratorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_file_saver__ = __webpack_require__("./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_xlsx__ = __webpack_require__("./node_modules/xlsx/xlsx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_xlsx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
var EXCEL_EXTENSION = '.xlsx';
var ExcelGeneratorService = /** @class */ (function () {
    function ExcelGeneratorService() {
    }
    ExcelGeneratorService.prototype.exportAsExcelFile = function (json, excelFileName) {
        var worksheet = __WEBPACK_IMPORTED_MODULE_2_xlsx__["utils"].json_to_sheet(json);
        var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        var excelBuffer = __WEBPACK_IMPORTED_MODULE_2_xlsx__["write"](workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    };
    ExcelGeneratorService.prototype.saveAsExcelFile = function (buffer, fileName) {
        var data = new Blob([buffer], { type: EXCEL_TYPE });
        __WEBPACK_IMPORTED_MODULE_1_file_saver__["saveAs"](data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    };
    ExcelGeneratorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ExcelGeneratorService);
    return ExcelGeneratorService;
}());



/***/ }),

/***/ "./src/app/gen-invoice/gen-invoice.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gen-invoice/gen-invoice.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Heading -->\n<div class=\"card mb-4 wow fadeIn\">\n  <!--Card content-->\n  <div class=\"card-body d-sm-flex justify-content-between\">\n      <h4 class=\"mb-2 mb-sm-0 pt-1\">\n          <span>Invoice Details</span>\n      </h4>\n  </div>\n</div>\n<!-- Heading -->\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error\">\n  {{errorMessage}}\n</div>\n<div class=\"alert alert-success\" role=\"alert\" *ngIf=\"success\">\n  {{successMessage}}\n</div>\n\n<div class=\"card mb-3 wow fadeIn\">\n  <div class=\"card-body\">\n    <table width=\"100%\">\n      <thead>\n        <tr>\n          <th>PerformA Id</th>\n          <th>Invoice Id</th>\n          <th>Invoice Date</th>\n          <!--<th>Print</th>-->\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>{{invoice.performaId}}</td>\n          <td>{{invoice.invoiceId}}</td>\n          <td><!--<input type=\"date\" class=\"form-control underlined\" name=\"invoiceDate\" id=\"invoiceDate\" required=\"true\" [ngModel]=\"invoice.invoiceDate | date:'yyyy-MM-dd'\"\n              (ngModelChange)=\"invoice.invoiceDate = $event\" [value]=\"date | date:'yyyy-MM-dd'\"  [disabled]=\"invoice.type==='INVOICE'\" />-->\n               <input type=\"date\" class=\"form-control underlined\" name=\"invoiceDate\" id=\"invoiceDate\" required=\"true\" [ngModel]=\"invoice.invoiceDate | date:'yyyy-MM-dd'\"\n              (ngModelChange)=\"invoice.invoiceDate = $event\" [value]=\"date | date:'yyyy-MM-dd'\" [min]=\"minInvoiceDate\" [max]=\"curDate\" />\n          </td>\n          <!--<td>\n            <a target=\"_blank\" style=\"color:white;background-color:#432fb5\" class=\"btn\" [href]=\"invoice.url\">\n                  <i class=\"fa fa-print\"></i>\n             </a>\n          </td>-->\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n<br/>\n<div class=\"card mb-3 wow fadeIn\">\n  <div class=\"card-body\">\n    <table width=\"100%\" border=\"1\" style=\"border-collapse:collapse;border:#f2f2f2 solid 1px;\">\n      <thead>\n        <tr>\n          <th>Client Name</th>\n          <th colspan=\"3\">Address</th>\n          <th>GSTIN</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr valign=\"top\" >\n          <td>{{client.name}}</td>\n          <td colspan=\"3\">{{client.addrLine1}},\n            {{client.addrLine2}},<br/>\n            {{client.city}}, {{client.state}}<br/>\n            {{client.pincode}}<br/>\n            {{client.phonePrimary}},{{client.email}}\n            </td>\n          <td>{{client.gstin}}</td>\n        </tr>\n        <tr valign=\"top\">\n         <th colspan=\"5\">Particulars</th>\n        </tr>\n        <tr valign=\"top\">\n         <th colspan=\"2\" *ngIf=\"invoice.sacCode!=''\">Description</th>\n         <th colspan=\"3\" *ngIf=\"invoice.sacCode==''\">Description</th>\n         <th *ngIf=\"invoice.sacCode!=''\">Sac Code</th>\n         <th>Rate</th>\n         <th>Amount</th>\n        </tr>\n        <tr valign=\"top\" *ngFor=\"let field of particulars;let i=index\">\n         <td  colspan=\"2\"  *ngIf=\"invoice.sacCode!=''\" >{{field.itemDescription}}</td>\n          <td  colspan=\"3\"  *ngIf=\"invoice.sacCode==''\" >{{field.itemDescription}}</td>\n         <td *ngIf=\"invoice.sacCode!=''\" >{{invoice.sacCode}}</td>\n        \n         <td  align=\"right\"><input [disabled]=\"invoice.type==='INVOICE'\" class=\"form-control\" style=\"width:100px;\" (change)=\"calculateAmount(field)\" type=\"number\" [(ngModel)]=\"field.invoiceRate\"/></td>\n         <td  align=\"right\">{{field.calculatedInvoiceAmount}}</td>\n        </tr>\n        <tr>\n          <td colspan=\"4\" align=\"right\"><b>Sum</b></td>\n          <td align=\"right\">{{invoice.totalInvoiceBeforeTax}}</td>\n        </tr>\n        <tr *ngIf=\"invoice.cgstInvoicePercent!=0\">\n          <td colspan=\"3\" align=\"right\">\n            CGST\n          </td>\n          <td  align=\"right\">{{invoice.cgstInvoicePercent}}</td>\n          <td  align=\"right\">{{invoice.cgstInvoice}}</td>\n        </tr>\n         <tr *ngIf=\"invoice.sgstInvoicePercent!=0\">\n          <td colspan=\"3\" align=\"right\">\n            SGST\n          </td>\n          <td align=\"right\">{{invoice.sgstInvoicePercent}}</td>\n          <td  align=\"right\">{{invoice.sgstInvoice}}</td>\n        </tr>\n         <tr *ngIf=\"invoice.igstInvoicePercent!=0\">\n          <td colspan=\"3\" align=\"right\">\n            IGST\n          </td>\n          <td  align=\"right\">{{invoice.igstInvoicePercent}}</td>\n          <td  align=\"right\">{{invoice.igstInvoice}}</td>\n        </tr>\n        <tr>\n          <td colspan=\"4\" align=\"right\"><b>Reimbursement</b></td>\n          <td align=\"right\"><b>{{invoice.reimbInvoiceAmount}}</b></td>\n        </tr>\n         <tr>\n          <td colspan=\"4\" align=\"right\"><b>Total</b></td>\n          <td align=\"right\"><b>{{invoice.totalInvoiceAmount}}</b></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n<div class=\"card mb-3 wow fadeIn\">\n  <div class=\"card-body\">\n    <a target=\"_blank\" style=\"color:white;background-color:#432fb5\" class=\"btn float-right\" [href]=\"invoice.url\" *ngIf=\"invoice.url && invoice.invoiceId!=''\">\n            <i class=\"fa fa-print\"></i>\n      </a>&nbsp;\n    <button class=\"btn btn-primary float-right\" [disabled]=\"invoice.type==='INVOICE'\" (click)=\"generateInvoice()\"><i class=\"fa fa-cogs\">&nbsp;</i>Generate Invoice</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/gen-invoice/gen-invoice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenInvoiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoice_invoice_domain__ = __webpack_require__("./src/app/invoice/invoice.domain.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gen_invoice_service__ = __webpack_require__("./src/app/gen-invoice/gen-invoice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__client_client_service__ = __webpack_require__("./src/app/client/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__client_client_domain__ = __webpack_require__("./src/app/client/client.domain.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_constants__ = __webpack_require__("./src/app/app.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GenInvoiceComponent = /** @class */ (function () {
    function GenInvoiceComponent(route, genInvoiceService, clientService) {
        this.route = route;
        this.genInvoiceService = genInvoiceService;
        this.clientService = clientService;
        this.performaIds = [];
        this.errorMessage = "";
        this.successMessage = "";
        this.success = false;
        this.error = false;
        this.particulars = [];
        this.invoiceData = new __WEBPACK_IMPORTED_MODULE_2__invoice_invoice_domain__["b" /* InvoiceData */]();
        this.invoice = new __WEBPACK_IMPORTED_MODULE_2__invoice_invoice_domain__["a" /* Invoice */]();
        this.clients = [];
        this.client = new __WEBPACK_IMPORTED_MODULE_5__client_client_domain__["a" /* Client */]();
        this.minInvoiceDate = "";
        this.curDate = "";
        var invoiceIdParam;
        this.route.params.subscribe(function (params) {
            invoiceIdParam = params['id'];
            console.log(invoiceIdParam);
        });
        if (invoiceIdParam) {
            this.loadSelectedPerformAInvoice(invoiceIdParam);
        }
    }
    GenInvoiceComponent.prototype.ngOnInit = function () {
    };
    GenInvoiceComponent.prototype.loadSac = function () {
        alert("Loading SAC Code");
    };
    GenInvoiceComponent.prototype.loadSelectedPerformAInvoice = function (invoiceId) {
        var _this = this;
        console.log("inside loadSelectedPerformAInvoice");
        this.error = false;
        this.success = false;
        this.minInvoiceDate = "";
        this.genInvoiceService.getInvoice(invoiceId).subscribe(function (invoiceData) {
            _this.invoice = invoiceData.invoice;
            _this.invoice.url = __WEBPACK_IMPORTED_MODULE_6__app_constants__["a" /* APIURLS */].printIInvoiceUrl.concat(_this.invoice.performaId);
            _this.invoice.purl = __WEBPACK_IMPORTED_MODULE_6__app_constants__["a" /* APIURLS */].printPInvoiceUrl.concat(_this.invoice.performaId);
            _this.particulars = invoiceData.particulars;
            //console.log("invoice type "+this.invoice.type);
            if (_this.invoice.type != 'INVOICE') {
                _this.particulars.forEach(function (par) {
                    par.calculatedInvoiceAmount = par.calculatedPerformaAmount;
                    par.invoiceRate = par.performaRate;
                });
                //console.log("invoice setting "+this.invoice.cgstInvoicePercent+this.invoice.sgstInvoicePercent);
                if (!_this.invoice.cgstInvoicePercent)
                    _this.invoice.cgstInvoicePercent = _this.invoice.cgstPerfomaPercent;
                if (!_this.invoice.sgstInvoicePercent)
                    _this.invoice.sgstInvoicePercent = _this.invoice.sgstPerfomaPercent;
                if (!_this.invoice.igstInvoicePercent)
                    _this.invoice.igstInvoicePercent = _this.invoice.igstPerfomaPercent;
                if (!_this.invoice.invoiceDate)
                    _this.invoice.invoiceDate = _this.invoice.performaDate;
                if (!_this.invoice.reimbInvoiceAmount)
                    _this.invoice.reimbInvoiceAmount = _this.invoice.reimbPerfomaAmount;
            }
            _this.getClients();
            _this.calculateTotal();
        }, function (err) {
            _this.error = false;
            _this.errorMessage = "Error occured while getting the invoice details";
            console.log(err);
        });
        this.getMinInvoiceDate();
    };
    GenInvoiceComponent.prototype.calculateAmount = function (field) {
        field.calculatedInvoiceAmount = field.quantity * field.invoiceRate;
        this.calculateTotal();
    };
    GenInvoiceComponent.prototype.calculateTotal = function () {
        var sum = 0;
        this.particulars.forEach(function (part) {
            sum = sum + part.calculatedInvoiceAmount;
        });
        this.invoice.totalInvoiceBeforeTax = sum;
        //apply Tax
        this.invoice.cgstInvoice = Math.ceil((this.invoice.cgstInvoicePercent * this.invoice.totalInvoiceBeforeTax) / 100);
        this.invoice.sgstInvoice = Math.ceil((this.invoice.sgstInvoicePercent * this.invoice.totalInvoiceBeforeTax) / 100);
        this.invoice.igstInvoice = Math.ceil((this.invoice.igstInvoicePercent * this.invoice.totalInvoiceBeforeTax) / 100);
        this.invoice.totalInvoiceAmount = (this.invoice.totalInvoiceBeforeTax + this.invoice.cgstInvoice + this.invoice.sgstInvoice
            + this.invoice.igstInvoice);
        this.invoice.totalInvoiceAmount.toFixed(2);
        this.includeReimbursement();
    };
    GenInvoiceComponent.prototype.includeReimbursement = function () {
        this.invoice.totalInvoiceAmount = this.invoice.totalInvoiceAmount + this.invoice.reimbInvoiceAmount;
    };
    GenInvoiceComponent.prototype.getClients = function () {
        var _this = this;
        this.success = false;
        this.error = false;
        this.clientService.getForCompany()
            .subscribe(function (clients) {
            _this.clients = clients;
            _this.client = _this.clients.find(function (cli) { return cli.id === _this.invoice.clientId; });
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured please contact administrator";
        });
    };
    GenInvoiceComponent.prototype.generateInvoice = function () {
        var _this = this;
        this.success = false;
        this.error = false;
        this.invoiceData.invoice = this.invoice;
        this.invoiceData.particulars = this.particulars;
        this.genInvoiceService.saveInvoice(this.invoiceData).subscribe(function (invoiceData) {
            _this.invoiceData = invoiceData;
            _this.invoice = invoiceData.invoice;
            _this.particulars = invoiceData.particulars;
            _this.success = true;
            _this.successMessage = "Invoice successfully generated with id:" + _this.invoice.invoiceId;
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured While saving the Invoice";
        });
    };
    GenInvoiceComponent.prototype.getMinInvoiceDate = function () {
        var _this = this;
        this.success = false;
        this.error = false;
        this.curDate = this.getNowDate();
        console.log("curDate-" + this.curDate);
        this.genInvoiceService.getMinInvoiceDate().subscribe(function (str) {
            _this.minInvoiceDate = str;
            console.log("minInvoiceDate-" + _this.minInvoiceDate);
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured in getMinInvoiceDate please contact administrator";
            //console.log("err getMinProfomaDate-"+ err);
        });
    };
    GenInvoiceComponent.prototype.getNowDate = function () {
        var returnDate = "";
        var today = new Date();
        //split
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //because January is 0! 
        var yyyy = today.getFullYear();
        //Interpolation date
        returnDate += yyyy;
        if (mm < 10) {
            returnDate += "-0" + mm + "-";
        }
        else {
            returnDate += "-" + mm + "-";
        }
        if (dd < 10) {
            returnDate += "0" + dd;
        }
        else {
            returnDate += "" + dd;
        }
        return returnDate;
    };
    GenInvoiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-gen-invoice',
            template: __webpack_require__("./src/app/gen-invoice/gen-invoice.component.html"),
            styles: [__webpack_require__("./src/app/gen-invoice/gen-invoice.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__gen_invoice_service__["a" /* GenInvoiceService */],
            __WEBPACK_IMPORTED_MODULE_4__client_client_service__["a" /* ClientService */]])
    ], GenInvoiceComponent);
    return GenInvoiceComponent;
}());



/***/ }),

/***/ "./src/app/gen-invoice/gen-invoice.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenInvoiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constants__ = __webpack_require__("./src/app/app.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var GenInvoiceService = /** @class */ (function () {
    function GenInvoiceService(http) {
        this.http = http;
    }
    GenInvoiceService.prototype.saveInvoice = function (invoiceData) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].invoice).concat("/invoice");
        console.log("Accessing " + url);
        return this.http.post(url, invoiceData, { headers: httpOptions.headers });
    };
    GenInvoiceService.prototype.getInvoice = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].invoice)
            .concat("?invoiceId=")
            .concat(id.toString());
        console.log(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].invoice + "  " + url);
        return this.http.get(url, { headers: httpOptions.headers });
    };
    GenInvoiceService.prototype.getMinInvoiceDate = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].invoice).concat("/minInvoiceDate");
        //console.log("getMinInvoiceDate url : " + url);
        var options = { responseType: 'text' };
        return this.http.get(url, options);
    };
    GenInvoiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], GenInvoiceService);
    return GenInvoiceService;
}());



/***/ }),

/***/ "./src/app/globals.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyGlobalVar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CompanyGlobalVar = /** @class */ (function () {
    function CompanyGlobalVar() {
        this.companyName = "";
        this.ownerName = "";
        this.state = "";
        this.pinCode = "";
        this.phonePrimary = "";
        this.tanNo = "";
        this.gstNo = "";
        this.panNo = "";
        this.primaryEmail = "";
    }
    CompanyGlobalVar = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], CompanyGlobalVar);
    return CompanyGlobalVar;
}());



/***/ }),

/***/ "./src/app/has-role.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HasRoleDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_users_domain__ = __webpack_require__("./src/app/users/users.domain.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals__ = __webpack_require__("./src/app/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var HasRoleDirective = /** @class */ (function () {
    function HasRoleDirective(el, templateRef, viewContainer, http, companyVariable) {
        this.el = el;
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.http = http;
        this.companyVariable = companyVariable;
        this.permissions = [];
        this.user = new __WEBPACK_IMPORTED_MODULE_1__users_users_domain__["a" /* UserInfo */]();
    }
    Object.defineProperty(HasRoleDirective.prototype, "appHasRole", {
        set: function (val) {
            this.permissions = val.role;
            this.userRole = val.userRole;
            //console.log(this.userRole);
            this.updateView();
        },
        enumerable: true,
        configurable: true
    });
    HasRoleDirective.prototype.ngOnInit = function () {
    };
    /*async processRoles() {
      if(!this.userRole){
        console.log("User role fetching")
        this.userRole = await this.getRolesP();
      }
      this.updateView()
    }
  
     getRolesP(): Promise<string[]> {
      var url = Urls.getDomain().concat(APIURLS.userrole).concat("/authenticated");
      console.log("getting user role in directive")
      return this.http.get<string[]>(url, { headers: httpOptions.headers })
        .toPromise()
    }
  */
    HasRoleDirective.prototype.updateView = function () {
        if (this.checkPermission()) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
        else {
            this.viewContainer.clear();
        }
    };
    HasRoleDirective.prototype.checkPermission = function () {
        var hasPermission = false;
        if (this.userRole) {
            var _loop_1 = function (checkPermission) {
                var permissionFound = this_1.userRole.find(function (x) { return x.toUpperCase() === checkPermission.toUpperCase(); });
                // console.log("searching and finding permission"+permissionFound);
                if (permissionFound) {
                    hasPermission = true;
                    return "break";
                }
            };
            var this_1 = this;
            for (var _i = 0, _a = this.permissions; _i < _a.length; _i++) {
                var checkPermission = _a[_i];
                var state_1 = _loop_1(checkPermission);
                if (state_1 === "break")
                    break;
            }
        }
        return hasPermission;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], HasRoleDirective.prototype, "appHasRole", null);
    HasRoleDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appHasRole]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* TemplateRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__globals__["a" /* CompanyGlobalVar */]])
    ], HasRoleDirective);
    return HasRoleDirective;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "\n      <div class=\"profile-userpic\">\n        <img src=\"https://www.w3schools.com/w3css/img_avatar3.png\" class=\"img-responsive\" alt=\"\">\n      </div>\n      <div class=\"profile-usertitle\">\n        <small>Logged in as :</small>\n        <div class=\"profile-usertitle-name\">\n          {{user.name}}\n           <!-- |\n          <a href=\"#\" title=\"edit profile\">\n\t\t\t\t\t\t<i class=\"fa fa-cog\"></i>\n          </a> -->\n           | <a href=\"/logout\" title=\"logout\">\n\t\t\t\t\t\t<i class=\"fa fa-sign-out-alt\"></i>\n\t\t\t\t\t</a>\n        </div>\n        <div class=\"profile-usertitle-job \">\n         |<span *ngFor=\"let role of userRole\">{{role.roleCode}}|</span>\n        </div>\n      </div>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constants__ = __webpack_require__("./src/app/app.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_users_domain__ = __webpack_require__("./src/app/users/users.domain.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(http) {
        this.http = http;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__users_users_domain__["a" /* UserInfo */]();
        this.userRole = [];
        this.getUser();
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.getUser = function () {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].user).concat("/authenticated");
        this.http.get(url, { headers: httpOptions.headers })
            .subscribe(function (user) {
            _this.user = user;
            _this.getRoles(user.email);
        }, function (err) {
            console.log(err);
            alert("Error retrieving user");
        });
    };
    HeaderComponent.prototype.getRoles = function (email) {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].userrole).concat("?email=").concat(email);
        this.http.get(url, { headers: httpOptions.headers })
            .subscribe(function (userRole) {
            _this.userRole = userRole;
        }, function (err) {
            console.log(err);
            alert("Error retrieving userRole");
        });
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/invoice/invoice.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/invoice/invoice.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Heading -->\n<div class=\"card mb-4 wow fadeIn\">\n  <!--Card content-->\n  <div class=\"card-body d-sm-flex justify-content-between\">\n    <h4 class=\"mb-2 mb-sm-0 pt-1\">\n      <span>Proforma Invoice (Service)</span>\n    </h4>\n  </div>\n</div>\n<!-- Heading -->\n\n\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error\">\n  {{errorMessage}}\n</div>\n<div class=\"alert alert-success\" role=\"alert\" *ngIf=\"success\">\n  Successfully Saved\n</div>\n\n<div class=\"card\" >\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-md-1 \"><b>Client</b></div>\n      <div class=\"col-md-2\">\n        <select (change)=\"loadSelectedClient()\" class=\"form-control underlined\" [(ngModel)]=\"selClientId\" [disabled]=\"(invoice.status=='CANCELED' || invoice.type=='INVOICE')\">\n        <option></option>\n        <option *ngFor=\"let cli of clients\" [ngValue]=\"cli.id\" [selected]=\"cli.id === selClientId\">{{cli.name}}</option>\n         </select>\n      </div>\n      <div class=\"col-md-2\"><b>Performa Id : </b></div>\n      <div class=\"col-md-3\">{{invoice.performaId}}</div>\n      <div class=\"col-md-2\" *ngIf=\"showSac\"><b>SAC code: </b></div>\n      <div class=\"col-md-2\" *ngIf=\"showSac\">\n        <select (change)=\"loadSelectedSac()\" class=\"form-control underlined\" [(ngModel)]=\"selSacId\" [disabled]=\"(invoice.status=='CANCELED' || invoice.type=='INVOICE')\">\n        <option></option>\n        <option *ngFor=\"let sac of sacCodes\" [ngValue]=\"sac.id\" [selected]=\"sac.id === selSacId\">{{sac.sacCode}}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"row\">\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-1\"><b>Status : </b></div>\n      <div class=\"col-md-2\">{{invoice.status}}</div>\n      <div class=\"col-md-2\"><b>GSTIN : </b></div>\n      <div class=\"col-md-2\">{{selectedClient.gstin}}</div>\n      <div class=\"col-md-2\"><b>Proforma Date : </b></div>\n      <div class=\"col-md-3\">\n        <input type=\"date\" class=\"form-control underlined\" name=\"proformaDate\" id=\"proformaDate\" required=\"true\" [ngModel]=\"invoice.performaDate | date:'yyyy-MM-dd'\"\n              (ngModelChange)=\"invoice.performaDate = $event\" [value]=\"date | date:'yyyy-MM-dd'\" [min]=\"minProformaDate\" [max]=\"curDate\" />\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-1\"><b>Name : </b></div>\n      <div class=\"col-md-2\">{{selectedClient.name}}</div>\n      <div class=\"col-md-2\"><b>Address : </b></div>\n      <div class=\"col-md-4\">\n        {{selectedClient.addrLine1}} {{selectedClient.addrLine2}},\n        <br/> {{selectedClient.city}}, {{selectedClient.state}},\n        <br/>        {{selectedClient.pincode}}.\n        <br/>\n        <i>Phone : </i> {{selectedClient.phonePrimary}}.\n        <br/>\n        <i>Email : </i> {{selectedClient.email}}.\n        <br/>\n      </div>\n    </div>\n    <div class=\"clear-fix border-top p-3\">\n    <h4 class=\"sub-header\">\n      <span class=\"index\">1</span>Particulars\n      <button class=\"btn btn-success float-right\" (click)=\"addRow()\" *ngIf=\"!(invoice.status=='CANCELED' || invoice.type=='INVOICE')\">\n        <i class=\"fa fa-plus\">&nbsp;</i>AddRow</button>  \n    </h4>\n    </div>\n\n    <table class=\"table table-striped\">\n      <thead class=\"blue lighten-5\">\n      <tr>\n        <th colspan=\"7\">Professional service rendered in connection with</th>\n        <!--<th>Quantity</th>-->\n        <th>Rate</th>\n        <th>Amount</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let field of particulars;let i=index\">\n          <td>{{i+1}}</td>\n        <td><button class=\"btn btn-sm btn-danger pl-2 pr-2\" (click)=\"deletParticulars(field.id)\" *ngIf=\"field.id && !(invoice.status=='CANCELED' || invoice.type=='INVOICE')\"><i class=\"fa fa-trash\"></i></button></td>\n\n        <td colspan=\"5\" WIDTH=\"80%\">\n          <textarea type=\"text\" class=\"form-control\" required=\"true\" [(ngModel)]=\"field.itemDescription\" (change)=\"calculateAmount(field)\" [disabled]=\"(invoice.status=='CANCELED' || invoice.type=='INVOICE')\">\n          </textarea>\n        </td>\n       <!-- <td WIDTH=\"10%\">\n          <input type=\"number\" class=\"form-control\" required=\"false\" min=\"0\" size=\"3\" [(ngModel)]=\"field.quantity\"  (change)=\"calculateAmount(field)\" [disabled]=\"(invoice.status=='CANCELED' || invoice.type=='INVOICE')\"/>\n        </td>-->\n        <td WIDTH=\"10%\"><input type=\"number\" class=\"form-control\" required=\"false\" min=\"0\"  [(ngModel)]=\"field.performaRate\" (change)=\"calculateAmount(field)\" [disabled]=\"(invoice.status=='CANCELED' || invoice.type=='INVOICE')\"/>\n        </td>\n        <td WIDTH=\"10%\">\n          <input type=\"number\" readoly class=\"form-control\" required=\"true\" readonly [(ngModel)]=\"field.calculatedPerformaAmount\"/>\n        </td>\n      </tr>\n       \n      </tbody>\n      <tfoot>\n         <tr>\n          <td colspan=\"7\">\n          </td>\n          <th>\n            Enter Reimbursement Amount(if any)\n          </th>\n          <th><input type=\"number\" class=\"form-control\" required=\"false\" min=\"0\"  [(ngModel)]=\"invoice.reimbPerfomaAmount\" (change)=\"calculateTotal()\" [disabled]=\"(invoice.status=='CANCELED' || invoice.type=='INVOICE')\"/> </th>\n        </tr>\n        <tr>\n          <td colspan=\"7\">\n          </td>\n          <th>\n            SUM =\n          </th>\n          <th>{{invoice.totalPerfomaBeforeTax}}</th>\n        </tr>\n        <tr *ngIf=\"cgstDisplay\">\n          <td colspan=\"6\">\n          </td>\n          <th style=\"text-align: right\">\n            CGST =\n          </th>\n          <td>{{invoice.cgstPerfomaPercent}}</td>\n          <td>{{invoice.cgstPerfoma}}</td>\n        </tr>\n        <tr *ngIf=\"sgstDisplay\">\n          <td colspan=\"6\">\n          </td>\n          <th style=\"text-align: right\">\n            SGST =\n          </th>\n          <td>{{invoice.sgstPerfomaPercent}}</td>\n          <td>{{invoice.sgstPerfoma}}</td>\n        </tr>\n        <tr *ngIf=\"igstDisplay\">\n          <td colspan=\"6\">\n          </td>\n          <th style=\"text-align: right\">\n            IGST =\n          </th>\n          <td>{{invoice.igstPerfomaPercent}}</td>\n          <td>{{invoice.igstPerfoma}}</td>\n        </tr>\n      \n        <tr>\n          <td colspan=\"7\">\n          </td>\n          <th>\n            Total =\n          </th>\n          <th>{{invoice.totalPerfomaAmount}}</th>\n        </tr>\n      </tfoot>\n    </table>\n  </div>\n</div>\n\n<div class=\"card mt-4 wow fadeIn\">\n  <div class=\"card-body\">\n    <div class=\"row float-right\">\n     <a target=\"_blank\" style=\"color:white;background-color:#432fb5\" class=\"btn\" [href]=\"invoice.purl\" *ngIf=\"invoice.purl && invoice.performaId!=''\">\n            <i class=\"fa fa-print\"></i>\n      </a>&nbsp;\n      <a routerLink=\"/generate-invoice/{{invoice.id}}\" class=\"btn btn-success\" *ngIf=\"invoice.performaId!='' && invoice.status!='CANCELED'\" >\n        <i class=\"fa fa-eye\">&nbsp;</i>\n        View as Invoice\n      </a>&nbsp;\n     <button class=\"btn btn-secondary\" (click)=\"calculateTotal()\" [disabled]=\"(invoice.status=='CANCELED' || invoice.type=='INVOICE')\">\n      <i class=\"fa fa-calculator\">&nbsp;</i> Calculate Total\n      </button>&nbsp;\n      <button class=\"btn btn-primary\" (click)=\"savePerformaInvoice()\" [disabled]=\"(invoice.status=='CANCELED' || invoice.type=='INVOICE')\">\n        <i class=\"fa fa-save\">&nbsp;</i>Save Proforma</button>&nbsp;\n       <button class=\"btn btn-warning\" (click)=\"cancelInvoice()\" *ngIf=\"invoice.performaId!=''\" [disabled]=\"(invoice.status=='CANCELED' || invoice.type=='INVOICE')\">\n         <i class=\"fa fa-ban\">&nbsp;</i>Cancel Invoice</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/invoice/invoice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client_client_service__ = __webpack_require__("./src/app/client/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__client_client_domain__ = __webpack_require__("./src/app/client/client.domain.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__invoice_domain__ = __webpack_require__("./src/app/invoice/invoice.domain.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__invoice_service__ = __webpack_require__("./src/app/invoice/invoice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_constants__ = __webpack_require__("./src/app/app.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__globals__ = __webpack_require__("./src/app/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var InvoiceComponent = /** @class */ (function () {
    function InvoiceComponent(route, clientService, invoiceService, companyGlobalVar) {
        var _this = this;
        this.route = route;
        this.clientService = clientService;
        this.invoiceService = invoiceService;
        this.companyGlobalVar = companyGlobalVar;
        this.clients = [];
        this.error = false;
        this.errorMessage = "";
        this.selectedClient = new __WEBPACK_IMPORTED_MODULE_3__client_client_domain__["a" /* Client */]();
        this.success = true;
        this.cgstDisplay = false;
        this.sgstDisplay = false;
        this.igstDisplay = false;
        this.particulars = [];
        this.invoiceData = new __WEBPACK_IMPORTED_MODULE_4__invoice_domain__["b" /* InvoiceData */]();
        this.invoice = new __WEBPACK_IMPORTED_MODULE_4__invoice_domain__["a" /* Invoice */]();
        this.sacCodes = [];
        this.selSacCode = new __WEBPACK_IMPORTED_MODULE_4__invoice_domain__["d" /* SACCode */]();
        this.showSac = false;
        this.minProformaDate = "";
        this.curDate = "";
        var invoiceIdParam;
        this.route.params.subscribe(function (params) {
            invoiceIdParam = params['id'];
            console.log(invoiceIdParam);
        });
        this.minProformaDate = "";
        if (invoiceIdParam != 0) {
            console.log("fetching the invoice for the id :" + invoiceIdParam);
            this.invoiceService.getInvoice(invoiceIdParam).subscribe(function (invoiceData) {
                console.log("invoice Data " + invoiceData);
                _this.invoice = invoiceData.invoice;
                _this.invoice.url = __WEBPACK_IMPORTED_MODULE_6__app_constants__["a" /* APIURLS */].printIInvoiceUrl.concat(_this.invoice.performaId);
                _this.invoice.purl = __WEBPACK_IMPORTED_MODULE_6__app_constants__["a" /* APIURLS */].printPInvoiceUrl.concat(_this.invoice.performaId);
                _this.particulars = invoiceData.particulars;
                _this.selClientId = invoiceData.invoice.clientId;
                _this.getClients();
                _this.loadSelectedClient();
                _this.getSacCodes();
                _this.particulars.push(new __WEBPACK_IMPORTED_MODULE_4__invoice_domain__["c" /* Particulars */]());
                _this.calculateTotal();
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.invoice = new __WEBPACK_IMPORTED_MODULE_4__invoice_domain__["a" /* Invoice */]();
            this.particulars = [];
            this.selClientId = null;
            this.getClients();
            this.getSacCodes();
            this.loadSelectedClient();
            this.particulars.push(new __WEBPACK_IMPORTED_MODULE_4__invoice_domain__["c" /* Particulars */]());
        }
        if (companyGlobalVar.gstNo != '') {
            this.showSac = true;
        }
        this.getMinProfomaDate();
    }
    InvoiceComponent.prototype.ngOnInit = function () {
    };
    InvoiceComponent.prototype.getInvoice = function () {
        this.invoice.id;
    };
    InvoiceComponent.prototype.getClients = function () {
        var _this = this;
        this.success = false;
        this.error = false;
        this.clientService.getForCompany()
            .subscribe(function (clients) {
            _this.clients = clients;
            _this.loadSelectedClient();
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured please contact administrator";
        });
    };
    InvoiceComponent.prototype.getSacCodes = function () {
        var _this = this;
        this.success = false;
        this.error = false;
        this.invoiceService.getSACCode()
            .subscribe(function (sac) {
            _this.sacCodes = sac;
            //console.log("invoice id-"+this.invoice.id);
            if (_this.invoice && _this.invoice.id != 0) {
                _this.selSacCode = _this.sacCodes.find(function (sc) { return sc.sacCode === _this.invoice.sacCode; });
                if (_this.selSacCode)
                    _this.selSacId = _this.selSacCode.id;
            }
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured please contact administrator";
        });
    };
    InvoiceComponent.prototype.loadSelectedSac = function () {
        var _this = this;
        if (this.selectedClient.state == "") {
            alert("please select the client");
            return;
        }
        this.selSacCode = this.sacCodes.find(function (sac) { return sac.id === _this.selSacId; });
        if (this.selectedClient.state == this.companyGlobalVar.state) {
            this.invoice.cgstPerfomaPercent = this.selSacCode.cgstPercent;
            this.invoice.sgstPerfomaPercent = this.selSacCode.sgstPercent;
            this.invoice.igstPerfomaPercent = 0;
        }
        else {
            this.invoice.cgstPerfomaPercent = 0;
            this.invoice.sgstPerfomaPercent = 0;
            this.invoice.igstPerfomaPercent = this.selSacCode.igstPercent;
        }
        this.invoice.sacCode = this.selSacCode.sacCode;
    };
    InvoiceComponent.prototype.loadSelectedClient = function () {
        var _this = this;
        this.selectedClient = this.clients.find(function (cli) { return cli.id === _this.selClientId; });
        if (this.selectedClient != null) {
            console.debug('selectedClient.state' + this.selectedClient.state);
            console.debug('companyGlobalVar.state' + this.companyGlobalVar.state);
            if (this.showSac) {
                if (this.selectedClient.state == this.companyGlobalVar.state) {
                    this.cgstDisplay = true;
                    this.sgstDisplay = true;
                    this.igstDisplay = false;
                }
                else {
                    this.cgstDisplay = false;
                    this.sgstDisplay = false;
                    this.igstDisplay = true;
                }
            }
        }
        else {
            this.selectedClient = new __WEBPACK_IMPORTED_MODULE_3__client_client_domain__["a" /* Client */]();
        }
        this.invoice.clientId = this.selClientId;
    };
    InvoiceComponent.prototype.addRow = function () {
        this.particulars.push(new __WEBPACK_IMPORTED_MODULE_4__invoice_domain__["c" /* Particulars */]());
        console.log(this.particulars);
    };
    InvoiceComponent.prototype.calculateAmount = function (field) {
        if (field.itemDescription !== "")
            field.calculatedPerformaAmount = field.performaRate;
        this.calculateTotal();
    };
    InvoiceComponent.prototype.calculateTotal = function () {
        var sum = 0;
        this.particulars.filter(function (part) { return part.itemDescription !== ""; }).forEach(function (part) {
            sum = sum + part.calculatedPerformaAmount;
        });
        this.invoice.totalPerfomaBeforeTax = sum;
        //apply Tax
        this.invoice.cgstPerfoma = Math.ceil((this.invoice.cgstPerfomaPercent * this.invoice.totalPerfomaBeforeTax) / 100);
        this.invoice.sgstPerfoma = Math.ceil((this.invoice.sgstPerfomaPercent * this.invoice.totalPerfomaBeforeTax) / 100);
        this.invoice.igstPerfoma = Math.ceil((this.invoice.igstPerfomaPercent * this.invoice.totalPerfomaBeforeTax) / 100);
        this.invoice.totalPerfomaAmount = (this.invoice.totalPerfomaBeforeTax + this.invoice.cgstPerfoma + this.invoice.sgstPerfoma
            + this.invoice.igstPerfoma);
        this.invoice.totalPerfomaAmount = this.invoice.totalPerfomaAmount + this.invoice.reimbPerfomaAmount;
        this.invoice.totalPerfomaAmount.toFixed(2);
    };
    InvoiceComponent.prototype.savePerformaInvoice = function () {
        var _this = this;
        if (!this.selClientId) {
            alert("please select the client");
            return;
        }
        this.success = false;
        this.error = false;
        this.invoiceData.invoice = this.invoice;
        this.invoiceData.invoice.invoiceDate = this.invoice.performaDate;
        this.invoiceData.particulars = this.particulars.filter(function (part) { return part.itemDescription !== ""; });
        this.invoiceService.savePerforma(this.invoiceData).subscribe(function (invoiceData) {
            _this.invoiceData = invoiceData;
            _this.invoice = invoiceData.invoice;
            _this.particulars = invoiceData.particulars;
            _this.invoice.url = __WEBPACK_IMPORTED_MODULE_6__app_constants__["a" /* APIURLS */].printIInvoiceUrl.concat(_this.invoice.performaId);
            _this.invoice.purl = __WEBPACK_IMPORTED_MODULE_6__app_constants__["a" /* APIURLS */].printPInvoiceUrl.concat(_this.invoice.performaId);
            _this.success = true;
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured While saving the Invoice";
        });
    };
    InvoiceComponent.prototype.cancelInvoice = function () {
        var _this = this;
        this.success = false;
        this.error = false;
        this.invoiceData.invoice = this.invoice;
        this.invoiceData.particulars = this.particulars;
        this.invoiceService.cancel(this.invoiceData.invoice.id).subscribe(function (invoice) {
            _this.invoiceData.invoice = invoice;
            _this.invoice.status = "CANCELED";
            _this.success = true;
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured While saving the Invoice";
        });
    };
    InvoiceComponent.prototype.deletParticulars = function (particularId) {
        var _this = this;
        this.success = false;
        this.error = false;
        this.invoiceService.deleteParti(particularId).subscribe(function (str) {
            _this.particulars.splice(_this.particulars.map(function (part) { return part.id; }).indexOf(particularId), 1);
            _this.calculateTotal();
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured While saving the Invoice";
        });
    };
    InvoiceComponent.prototype.getMinProfomaDate = function () {
        var _this = this;
        this.success = false;
        this.error = false;
        this.curDate = this.getNowDate();
        console.log("curDate-" + this.curDate);
        this.invoiceService.getMinProfomaDate().subscribe(function (str) {
            _this.minProformaDate = str;
            console.log("minProformaDate-" + _this.minProformaDate);
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured in getMinProfomaDate please contact administrator";
            //console.log("err getMinProfomaDate-"+ err);
        });
    };
    InvoiceComponent.prototype.getNowDate = function () {
        var returnDate = "";
        var today = new Date();
        //split
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //because January is 0! 
        var yyyy = today.getFullYear();
        //Interpolation date
        returnDate += yyyy;
        if (mm < 10) {
            returnDate += "-0" + mm + "-";
        }
        else {
            returnDate += "-" + mm + "-";
        }
        if (dd < 10) {
            returnDate += "0" + dd;
        }
        else {
            returnDate += "" + dd;
        }
        return returnDate;
    };
    InvoiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-invoice',
            template: __webpack_require__("./src/app/invoice/invoice.component.html"),
            styles: [__webpack_require__("./src/app/invoice/invoice.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__client_client_service__["a" /* ClientService */],
            __WEBPACK_IMPORTED_MODULE_5__invoice_service__["a" /* InvoiceService */], __WEBPACK_IMPORTED_MODULE_7__globals__["a" /* CompanyGlobalVar */]])
    ], InvoiceComponent);
    return InvoiceComponent;
}());



/***/ }),

/***/ "./src/app/invoice/invoice.domain.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Particulars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Invoice; });
/* unused harmony export ManufacturingInvoice */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return InvoiceData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SearchInvoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SearchResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SACCode; });
var Particulars = /** @class */ (function () {
    function Particulars() {
        this.index = "";
        this.itemDescription = "";
        this.quantity = 1;
        this.performaRate = 0;
        this.invoiceRate = 0;
        this.createdBy = "";
    }
    return Particulars;
}());

var Invoice = /** @class */ (function () {
    function Invoice() {
        this.id = 0;
        this.invoiceId = "";
        this.performaId = "";
        this.proFormaId = "";
        this.sacCode = "";
        this.invoiceType = ""; // Right now it is hardcoded; need to change it when manufacturing invoice logic is added
        this.category = "";
        this.performaDate = new Date();
        this.invoiceDate = new Date();
        this.cgstPerfomaPercent = 0;
        this.sgstPerfomaPercent = 0;
        this.igstPerfomaPercent = 0;
        this.cgstInvoicePercent = 0;
        this.sgstInvoicePercent = 0;
        this.igstInvoicePercent = 0;
        this.totalPerfomaAmount = 0;
        this.totalInvoiceAmount = 0;
        this.totalPerfomaBeforeTax = 0;
        this.totalInvoiceBeforeTax = 0;
        this.cgstPerfoma = 0;
        this.sgstPerfoma = 0;
        this.igstPerfoma = 0;
        this.cgstInvoice = 0;
        this.sgstInvoice = 0;
        this.igstInvoice = 0;
        this.createdBy = "";
        this.clientName = "";
        this.type = "";
        this.status = "NEW";
        this.url = "/api/invoice/IhtmlReport?performaId=";
        this.purl = "/api/invoice/PhtmlReport?performaId=";
        this.reimbPerfomaAmount = 0;
        this.reimbInvoiceAmount = 0;
    }
    return Invoice;
}());

var ManufacturingInvoice = /** @class */ (function () {
    function ManufacturingInvoice() {
        this.invoiceId = "";
        this.proFormaId = "";
        this.sacCode = "";
        this.invoiceType = "";
        this.invoiceDate = new Date();
        this.performaDate = new Date();
        this.index = "";
        this.itemDescription = "";
        this.quantity = 1;
        this.performaRate = 0;
        this.invoiceRate = 0;
        this.status = 'NEW';
        this.createdBy = "";
        this.createdDate = new Date();
        this.type = "PERFORMA"; // or INVOICE
    }
    return ManufacturingInvoice;
}());

var InvoiceData = /** @class */ (function () {
    function InvoiceData() {
        this.invoice = new Invoice();
        this.particulars = [];
    }
    return InvoiceData;
}());

var SearchInvoice = /** @class */ (function () {
    function SearchInvoice() {
        this.category = "";
        this.pageNumber = 0;
        this.status = 'NEW';
        this.type = "";
        this.invoiceId = "";
        this.performaId = "";
        this.proFormaId = "";
    }
    return SearchInvoice;
}());

var SearchResult = /** @class */ (function () {
    function SearchResult() {
    }
    return SearchResult;
}());

var SACCode = /** @class */ (function () {
    function SACCode() {
        this.sacCode = "";
    }
    return SACCode;
}());



/***/ }),

/***/ "./src/app/invoice/invoice.search.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/invoice/invoice.search.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Heading -->\n<div class=\"card mb-4 wow fadeIn\">\n  <!--Card content-->\n  <div class=\"card-body d-sm-flex justify-content-between\">\n    <h4 class=\"mb-2 mb-sm-0 pt-1\">\n      <span>Search Invoice</span>\n    </h4>\n  </div>\n</div>\n<!-- Heading -->\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error\">\n  {{errorMessage}}\n</div>\n\n<form (ngSubmit)=\"submit()\" name=\"searchForm\" ngNativeValidate>\n  <div class=\"card\">\n    <div class=\"card-header primary-color white-text\">\n      <h3> Search:</h3>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-md-3\">\n          <div class=\"md-form mt-1\">\n            <label for=\"category\" class=\"active\">Category </label>\n            <select id=\"category\" name=\"category \" class=\"browser-default custom-select md-select\" required=\"false\" [(ngModel)]=\"searchInvoice.category\"\n              (change)=\"clearResult()\">\n                  <option value=\"SERVICE\">SERVICE</option>\n                  <option value=\"MANUFACTURING\">MANUFACTURING</option>                  \n                </select>\n          </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"md-form mt-1\">\n            <label for=\"name\">Performa Id </label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"performa Id\" id=\"performaId\" required=\"false\" [(ngModel)]=\"searchInvoice.performaId\"\n            />\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"md-form mt-1\">\n            <label for=\"name\">Invoice Id </label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"invoiceId\" id=\"invoiceId\" required=\"false\" [(ngModel)]=\"searchInvoice.invoiceId\"\n            />\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"md-form mt-1\">\n            <label for=\"status\" class=\"active\">Status </label>\n            <select id=\"status\" name=\"status \" class=\"browser-default custom-select md-select\" required=\"false\" [(ngModel)]=\"searchInvoice.status\">\n                  <option value=\"NEW\">NEW</option>\n                  <option value=\"CANCELED\">CANCELED</option>                  \n                </select>\n            </div>\n          </div>\n\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-md-3\">\n             <div class=\"md-form mt-1\">\n            <label for=\"client\" class=\"active\">Client </label>\n            <select id=\"client\" name=\"client \" class=\"browser-default custom-select md-select\" required=\"false\" [(ngModel)]=\"searchInvoice.clientId\">\n              <option></option>\n              <option *ngFor=\"let cli of clients\" [ngValue]=\"cli.id\">{{cli.name}}</option>\n            </select>\n             </div>\n          </div>\n          <div class=\"col-md-3\">\n             <div class=\"md-form mt-1\">\n            <label for=\"startDt\" class=\"active\">Performa/Invoice </label>\n            <select id=\"status\" name=\"status \" class=\"browser-default custom-select md-select\" required=\"false\" [(ngModel)]=\"searchInvoice.type\">\n                  <option></option>\n                  <option value=\"PERFORMA\">PERFORMA </option>\n                  <option value=\"INVOICE\">INVOICE </option>               \n                </select>\n             </div>\n          </div>\n          <div class=\"col-md-3\">\n             <div class=\"md-form mt-1\">\n            <label for=\"startDt\" class=\"active\">Start Date </label>\n            <input type=\"date\" class=\"form-control underlined\" name=\"startDt\" id=\"startDt\" required=\"false\" [(ngModel)]=\"searchInvoice.invoiceStDate\"\n            />\n             </div>\n          </div>\n          <div class=\"col-md-3\">\n             <div class=\"md-form mt-1\">\n            <label for=\"endDt\" class=\"active\">End Date</label>\n            <input type=\"date\" class=\"form-control underlined\" name=\"endDt\" id=\"endDt\" required=\"false\" [(ngModel)]=\"searchInvoice.invoiceEdDate\"\n            />\n             </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"card-footer\">\n      <button type=\"submit\" class=\"btn btn-primary float-right\">\n              <i class=\"fa fa-search\">&nbsp;</i>\n              Search</button>\n      <!-- <button type=\"reset\" class=\"btn btn-secondary float-right\">\n              <i class=\"fa fa-refresh\">&nbsp;</i>\n              Reset</button> -->\n    </div>\n  </div>\n</form>\n<br/>\n<h5 class=\"sub-header\">\n  Search Result\n</h5>\n<div class=\"card\">\n  <div class=\"card-header rgba-blue-light\">\n    <small>Displaying {{searchResult.numberOfElements}}/{{searchResult.totalElements}} items in this page</small>\n  </div>\n  <div class=\"card-body\">\n\n    <table class=\"table table-striped\">\n      <thead class=\"orange lighten-2\">\n        <tr>\n          <th>Invoice Id</th>\n          <th>Performa Id</th>\n          <th>Client</th>\n          <th>Performa Date</th>\n          <th>Invoice Date</th>\n          <th>Performa Amount</th>\n          <th>Invoice Amount</th>\n          <th>Type</th>\n          <th>Status</th>\n          <th>Print</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let invoice of invoices\">\n          <td>\n            <a routerLink=\"/generate-invoice/{{invoice.id}}\" *ngIf=\"invoice.invoiceId && searchInvoice.category=='SERVICE'\">{{invoice.invoiceId}}</a>\n            <a routerLink=\"/generate-invoice/{{invoice.id}}\" *ngIf=\"!invoice.invoiceId && searchInvoice.category=='SERVICE'\" class=\"btn btn-success\">Generate Invoice</a>\n            <a routerLink=\"/generate-manu-invoice/{{invoice.id}}\" *ngIf=\"invoice.invoiceId && searchInvoice.category=='MANUFACTURING'\">{{invoice.invoiceId}}</a>\n            <a routerLink=\"/generate-manu-invoice/{{invoice.id}}\" *ngIf=\"!invoice.invoiceId && searchInvoice.category=='MANUFACTURING'\"\n              class=\"btn btn-success\">Generate Invoice</a>\n\n          </td>\n          <td>\n            <a routerLink=\"/performaView/{{invoice.id}}\" *ngIf=\"invoice.performaId && searchInvoice.category=='SERVICE'\">{{invoice.performaId}}</a>\n            <a routerLink=\"/manufacturingInvoice/{{invoice.id}}\" *ngIf=\"invoice.proFormaId && searchInvoice.category=='MANUFACTURING'\">{{invoice.proFormaId}}</a>\n          </td>\n          <td>{{invoice.clientName}}</td>\n          <td>{{invoice.performaDate | date:'yyyy-MM-dd'}}</td>\n          <td>{{invoice.invoiceDate | date:'yyyy-MM-dd'}}</td>\n          <td *ngIf=\"searchInvoice.category=='MANUFACTURING'\">{{invoice.calculatedPerformaAmount}}</td>\n          <td *ngIf=\"searchInvoice.category=='MANUFACTURING'\">{{invoice.calculatedInvoiceAmount}}</td>\n          <td *ngIf=\"searchInvoice.category=='SERVICE'\">{{invoice.totalPerfomaAmount}}</td>\n          <td *ngIf=\"searchInvoice.category=='SERVICE'\">{{invoice.totalInvoiceAmount}}</td>\n\n          <td>{{invoice.type}}</td>\n          <td>{{invoice.status}}</td>\n          <td>\n            <div class=\"btn-group\">\n              <a target=\"_blank\" style=\"color:white;background-color:#432fb5;border:white solid 1px;\" class=\"btn btn-sm p-2\" [href]=\"invoice.purl\">\n                  P\n              </a>\n              <a target=\"_blank\" *ngIf=\"invoice.invoiceId\" style=\"color:white;background-color:#3c3c3c;border:white solid 1px;\" class=\"btn btn-sm p-2\"\n                [href]=\"invoice.url\">\n                 I\n              </a>\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"card-footer\">\n    <!--Table runat=\"server\" ID=\"tblPrint\" width=\"595px\" heigh=\"842px\" Border=\"1\" />-->\n    <nav aria-label=\"Page navigation example\">\n      <ul class=\"pagination\">\n        <li class=\"page-item\"><button class=\"btn btn-info btn-sm\" [disabled]=\"searchResult.first\" (click)=\"submit(0)\">First</button></li>\n        <li class=\"page-item\" *ngFor=\"let pageNo of numbers\">\n          <button class=\"btn btn-info btn-sm\" (click)=\"submit(pageNo)\">{{pageNo+1}}</button>\n        </li>\n        <li class=\"page-item\"><button class=\"btn btn-info btn-sm\" [disabled]=\"searchResult.last\" (click)=\"submit(searchResult.totalElements-1)\">Last</button></li>\n      </ul>\n    </nav>\n    <small style=\"color:#432fb5\">Page Size is {{searchResult.size}}.</small>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/invoice/invoice.search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoice_service__ = __webpack_require__("./src/app/invoice/invoice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invoice_domain__ = __webpack_require__("./src/app/invoice/invoice.domain.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__client_client_service__ = __webpack_require__("./src/app/client/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_constants__ = __webpack_require__("./src/app/app.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InvoiceSearchComponent = /** @class */ (function () {
    function InvoiceSearchComponent(route, invoiceService, clientService) {
        this.route = route;
        this.invoiceService = invoiceService;
        this.clientService = clientService;
        this.success = true;
        this.error = false;
        this.errorMessage = "";
        this.searchInvoice = new __WEBPACK_IMPORTED_MODULE_3__invoice_domain__["e" /* SearchInvoice */]();
        this.clients = [];
        this.invoices = [];
        this.searchResult = new __WEBPACK_IMPORTED_MODULE_3__invoice_domain__["f" /* SearchResult */]();
        this.numbers = [];
    }
    InvoiceSearchComponent.prototype.ngOnInit = function () {
        this.getClients();
    };
    InvoiceSearchComponent.prototype.getClients = function () {
        var _this = this;
        this.success = false;
        this.error = false;
        this.clientService.getForCompany()
            .subscribe(function (clients) {
            _this.clients = clients;
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured please contact administrator";
        });
    };
    InvoiceSearchComponent.prototype.clearResult = function () {
        this.searchResult = new __WEBPACK_IMPORTED_MODULE_3__invoice_domain__["f" /* SearchResult */]();
        this.invoices = [];
    };
    InvoiceSearchComponent.prototype.submit = function (pageNumber) {
        var _this = this;
        if (pageNumber === void 0) { pageNumber = 0; }
        console.log(this.searchInvoice);
        if (this.searchInvoice.category !== "") {
            console.log("category :" + this.searchInvoice.category);
            this.invoiceService.searchInvoice(this.searchInvoice, this.searchInvoice.category, pageNumber)
                .subscribe(function (searchResult) {
                _this.searchResult = searchResult;
                _this.numbers = Array(searchResult.totalPages).fill(1).map(function (x, i) { return i; });
                console.log(_this.numbers);
                _this.invoices = searchResult.content;
                _this.invoices.forEach(function (invoice) {
                    invoice.clientName = _this.clients.find(function (client) { return client.id == invoice.clientId; }).name;
                    if (_this.searchInvoice.category == 'MANUFACTURING') {
                        invoice.url = __WEBPACK_IMPORTED_MODULE_5__app_constants__["a" /* APIURLS */].printManIInvoiceUrl.concat(invoice.proFormaId);
                        invoice.purl = __WEBPACK_IMPORTED_MODULE_5__app_constants__["a" /* APIURLS */].printManPInvoiceUrl.concat(invoice.proFormaId);
                    }
                    else {
                        invoice.url = __WEBPACK_IMPORTED_MODULE_5__app_constants__["a" /* APIURLS */].printIInvoiceUrl.concat(invoice.performaId);
                        invoice.purl = __WEBPACK_IMPORTED_MODULE_5__app_constants__["a" /* APIURLS */].printPInvoiceUrl.concat(invoice.performaId);
                    }
                });
            }, function (err) {
                _this.error = true;
                _this.errorMessage = "Error occured While searching the Invoice";
            });
        }
        else {
            alert("Please select the category");
            return;
        }
    };
    InvoiceSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-invoice-search',
            template: __webpack_require__("./src/app/invoice/invoice.search.component.html"),
            styles: [__webpack_require__("./src/app/invoice/invoice.search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__invoice_service__["a" /* InvoiceService */], __WEBPACK_IMPORTED_MODULE_4__client_client_service__["a" /* ClientService */]])
    ], InvoiceSearchComponent);
    return InvoiceSearchComponent;
}());



/***/ }),

/***/ "./src/app/invoice/invoice.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constants__ = __webpack_require__("./src/app/app.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var InvoiceService = /** @class */ (function () {
    function InvoiceService(http) {
        this.http = http;
    }
    InvoiceService.prototype.savePerforma = function (invoiceData) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].invoice).concat("/performa");
        console.log(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].invoice + "  " + url);
        return this.http.post(url, invoiceData, { headers: httpOptions.headers });
    };
    InvoiceService.prototype.saveInvoice = function (invoiceData) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].invoice);
        console.log(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].invoice + "  " + url);
        return this.http.post(url, invoiceData, { headers: httpOptions.headers });
    };
    InvoiceService.prototype.cancel = function (invoiceId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].invoice)
            .concat("/cancel")
            .concat("?invoiceId=")
            .concat(invoiceId.toString());
        console.log("Cancel invoice  " + url);
        return this.http.patch(url, { headers: httpOptions.headers });
    };
    InvoiceService.prototype.getInvoice = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].invoice)
            .concat("?invoiceId=")
            .concat(id.toString());
        console.log(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].invoice + "  " + url);
        return this.http.get(url, { headers: httpOptions.headers });
    };
    InvoiceService.prototype.searchInvoice = function (searchInvoice, category, pageNo) {
        if (pageNo === void 0) { pageNo = 0; }
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain();
        console.log(url);
        if (category === 'SERVICE') {
            url = url.concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].invoice).concat("/search");
            console.log("SERVICE" + url);
        }
        else if (category === 'MANUFACTURING') {
            url = url.concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].manInvoice).concat("/search");
            console.log(url);
        }
        url = url.concat("?pageNumber=")
            .concat(pageNo.toString());
        console.log("Searching : " + url);
        return this.http.post(url, searchInvoice, { headers: httpOptions.headers });
    };
    InvoiceService.prototype.searchInvoiceReport = function (searchInvoice, category) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain();
        console.log(url);
        if (category === 'SERVICE') {
            url = url.concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].invoice).concat("/getInvoiceReport");
            console.log("SERVICE" + url);
        }
        else if (category === 'MANUFACTURING') {
            url = url.concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].manInvoice).concat("/getInvoiceReport");
            console.log(url);
        }
        console.log("Searching : " + url);
        return this.http.post(url, searchInvoice, { headers: httpOptions.headers });
    };
    InvoiceService.prototype.getSACCode = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].invoice).concat("/sac");
        return this.http.get(url, { headers: httpOptions.headers });
    };
    InvoiceService.prototype.deleteParti = function (partiId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].invoice).concat("/delParticular?particularId=").concat(partiId.toString());
        var options = { responseType: 'text' };
        return this.http.get(url, options);
    };
    InvoiceService.prototype.saveManufacProformaInvoice = function (manufacturingInvoice) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].manInvoice).concat("/performa");
        return this.http.post(url, manufacturingInvoice, { headers: httpOptions.headers });
    };
    InvoiceService.prototype.getManufacturingInvoice = function (proformaId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].manInvoice)
            .concat("?id=")
            .concat(proformaId);
        return this.http.get(url, { headers: httpOptions.headers });
    };
    InvoiceService.prototype.saveManufacturingInvoice = function (manufacturingInvoice) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].manInvoice).concat("/invoice");
        return this.http.post(url, manufacturingInvoice, { headers: httpOptions.headers });
    };
    InvoiceService.prototype.getMinProfomaDate = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].invoice).concat("/minProformaDate");
        //console.log("getMinProfomaDate url : " + url);
        var options = { responseType: 'text' };
        return this.http.get(url, options);
    };
    InvoiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], InvoiceService);
    return InvoiceService;
}());



/***/ }),

/***/ "./src/app/manufacturing-invoice/invoice.manu.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/manufacturing-invoice/invoice.manu.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Heading -->\n<div class=\"card mb-4 wow fadeIn\">\n  <!--Card content-->\n  <div class=\"card-body d-sm-flex justify-content-between\">\n    <h4 class=\"mb-2 mb-sm-0 pt-1\">\n      <span>PerformA Invoice (Manufacturing)</span>\n    </h4>\n  </div>\n</div>\n<!-- Heading -->\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error\">\n  {{errorMessage}}\n</div>\n<div class=\"alert alert-success\" role=\"alert\" *ngIf=\"success\">\n  Successfully Saved\n</div>\n\n<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-md-1 \"><b>Client</b></div>\n      <div class=\"col-md-3\">\n        <select (change)=\"loadSelectedClient()\" class=\"form-control underlined\" [(ngModel)]=\"selClientId\" [disabled]=\"(invoice.status=='CANCELED' || invoice.type=='INVOICE')\">\n        <option></option>\n        <option *ngFor=\"let cli of clients\" [ngValue]=\"cli.id\" [selected]=\"cli.id === selClientId\">{{cli.name}}</option>\n         </select>\n      </div>\n      <div class=\"col-md-4\">\n\n      </div>\n      <div class=\"col-md-4\">\n\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-1\"><b>Status : </b></div>\n      <div class=\"col-md-2\">NEW</div>\n      <div class=\"col-md-2\"><b>GSTIN : </b></div>\n      <div class=\"col-md-3\">{{selectedClient.gstin}}</div>\n      <div class=\"col-md-1\"><b>Date : </b></div>\n      <div class=\"col-md-3\">{{invoice.performaDate | date:\"dd MMM yyyy HH:mm\"}}</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-1\"><b>Name : </b></div>\n      <div class=\"col-md-2\">{{selectedClient.name}}</div>\n      <div class=\"col-md-2\"><b>Address : </b></div>\n      <div class=\"col-md-4\">\n        {{selectedClient.addrLine1}} {{selectedClient.addrLine2}},\n        <br/> {{selectedClient.city}}, {{selectedClient.state}},\n        <br/> {{selectedClient.pincode}}.\n        <br/>\n        <i>Phone : </i> {{selectedClient.phonePrimary}}.\n        <br/>\n        <i>Email : </i> {{selectedClient.email}}.\n        <br/>\n      </div>\n    </div>\n    <div class=\"clear-fix border-top p-3\">\n      <h4 class=\"sub-header\">\n        <span class=\"index\">1</span>Particulars\n        <button class=\"btn btn-success float-right\" (click)=\"addRow()\">\n            <i class=\"fa fa-plus\">&nbsp;</i>AddRow</button>\n      </h4>\n    </div>\n    <table class=\"table table-striped\">\n      <thead class=\"blue lighten-5\">\n        <tr>\n          <th colspan=\"4\">Description</th>\n          <th *ngIf=\"showSac\">SAC Code</th>\n          <th>Quantity</th>\n          <th>Rate</th>\n          <th *ngIf=\"showSac\">gst</th>\n          <th>Amount</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let field of manufacturingInvoice;let i=index\">\n\n          <td width=\"40px\"><button class=\"btn btn-sm btn-danger pl-2 pr-2\" (click)=\"deletRow(field.id)\"><i class=\"fa fa-trash\"></i></button></td>\n\n          <td colspan=\"3\">\n            <textarea type=\"text\" class=\"form-control\" required=\"true\" [(ngModel)]=\"field.itemDescription\" (change)=\"calculateAmount(field)\">\n          </textarea>\n          </td>\n          <td WIDTH=\"10%\" *ngIf=\"showSac\">\n            <select (change)=\"loadSelectedSac(field)\" class=\"form-control underlined\" [(ngModel)]=\"field.sacCodeId\">\n        <option></option>\n        <option *ngFor=\"let sac of sacCodes\" [ngValue]=\"sac.id\" [selected]=\"sac.id === field.sacCodeId\">{{sac.sacCode}}</option>\n        </select>\n          </td>\n          <td WIDTH=\"10%\">\n            <input type=\"number\" class=\"form-control\" required=\"false\" min=\"0\" size=\"3\" [(ngModel)]=\"field.quantity\" (change)=\"calculateAmount(field)\"\n            />\n          </td>\n          <td WIDTH=\"10%\"><input type=\"number\" class=\"form-control\" required=\"false\" min=\"0\" [(ngModel)]=\"field.performaRate\" (change)=\"calculateAmount(field)\"\n            />\n          </td>\n          <td WIDTH=\"10%\" *ngIf=\"showSac\">\n            <p *ngIf=\"field.cgstPerfomaPercent>0\">cgst={{field.cgstPerfomaPercent}}%, :{{field.cgstPerfoma}}</p>\n            <p *ngIf=\"field.sgstPerfomaPercent>0\">sgst={{field.sgstPerfomaPercent}}%, :{{field.cgstPerfoma}}</p>\n            <p *ngIf=\"field.igstPerfomaPercent>0\">igst={{field.igstPerfomaPercent}}%, :{{field.cgstPerfoma}}</p>\n          </td>\n          <td WIDTH=\"10%\">\n            <input type=\"number\" readoly class=\"form-control\" required=\"true\" readonly [(ngModel)]=\"field.calculatedPerformaAmount\" />\n          </td>\n        </tr>\n      </tbody>\n      <tfoot>\n        <tr *ngIf=\"showSac\">\n          <td colspan=\"7\">\n          </td>\n          <th>\n            SUM =\n          </th>\n          <td>{{totalPerfomaBeforeTax}}</td>\n        </tr>\n        <tr *ngIf=\"!showSac\">\n          <td colspan=\"5\">\n          </td>\n          <th>\n            SUM =\n          </th>\n          <td>{{totalPerfomaBeforeTax}}</td>\n        </tr>\n      </tfoot>\n    </table>\n  </div>\n</div>\n\n<div class=\"card mt-4 wow fadeIn\">\n  <div class=\"card-body\">\n    <div class=\"row float-right\">\n      <button class=\"btn btn-info\" (click)=\"calculateTotal()\"> <i class=\"fa fa-calculator\">&nbsp;</i>Calculate Amount</button>&nbsp;\n      <button class=\"btn btn-primary\" (click)=\"savePerformaInvoice()\" ><i class=\"fa fa-cogs\">&nbsp;</i>Generate Proforma</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/manufacturing-invoice/invoice.manu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceManuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client_client_service__ = __webpack_require__("./src/app/client/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__client_client_domain__ = __webpack_require__("./src/app/client/client.domain.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__invoice_manu_domain__ = __webpack_require__("./src/app/manufacturing-invoice/invoice.manu.domain.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__invoice_invoice_service__ = __webpack_require__("./src/app/invoice/invoice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_constants__ = __webpack_require__("./src/app/app.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__globals__ = __webpack_require__("./src/app/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var InvoiceManuComponent = /** @class */ (function () {
    function InvoiceManuComponent(route, clientService, invoiceService, companyGlobalVar, router) {
        var _this = this;
        this.route = route;
        this.clientService = clientService;
        this.invoiceService = invoiceService;
        this.companyGlobalVar = companyGlobalVar;
        this.router = router;
        this.clients = [];
        this.error = false;
        this.errorMessage = "";
        this.selectedClient = new __WEBPACK_IMPORTED_MODULE_3__client_client_domain__["a" /* Client */]();
        this.success = true;
        this.cgstDisplay = false;
        this.sgstDisplay = false;
        this.igstDisplay = false;
        this.particulars = [];
        this.invoiceData = new __WEBPACK_IMPORTED_MODULE_4__invoice_manu_domain__["b" /* InvoiceData */]();
        this.invoice = new __WEBPACK_IMPORTED_MODULE_4__invoice_manu_domain__["a" /* Invoice */]();
        this.sacCodes = [];
        this.showSac = false;
        this.manufacturingInvoice = [];
        this.totalPerfomaBeforeTax = 0;
        var invoiceIdParam;
        this.route.params.subscribe(function (params) {
            invoiceIdParam = params['id'];
            console.log(invoiceIdParam);
        });
        if (invoiceIdParam != 0) {
            console.log("fetching the invoice for the id :" + invoiceIdParam);
            this.invoiceService.getInvoice(invoiceIdParam).subscribe(function (invoiceData) {
                console.log("invoice Data " + invoiceData);
                _this.invoice = invoiceData.invoice;
                _this.invoice.url = __WEBPACK_IMPORTED_MODULE_6__app_constants__["a" /* APIURLS */].printIInvoiceUrl.concat(_this.invoice.performaId);
                _this.invoice.purl = __WEBPACK_IMPORTED_MODULE_6__app_constants__["a" /* APIURLS */].printPInvoiceUrl.concat(_this.invoice.performaId);
                _this.particulars = invoiceData.particulars;
                _this.selClientId = invoiceData.invoice.clientId;
                _this.getClients();
                _this.loadSelectedClient();
                _this.getSacCodes();
                _this.particulars.push(new __WEBPACK_IMPORTED_MODULE_4__invoice_manu_domain__["d" /* Particulars */]());
                _this.calculateTotal();
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.manufacturingInvoice = [];
            this.selClientId = null;
            this.getClients();
            this.getSacCodes();
            this.loadSelectedClient();
            this.manufacturingInvoice.push(new __WEBPACK_IMPORTED_MODULE_4__invoice_manu_domain__["c" /* ManufacturingInvoice */]());
        }
        if (companyGlobalVar.gstNo != '') {
            this.showSac = true;
        }
    }
    InvoiceManuComponent.prototype.ngOnInit = function () {
    };
    InvoiceManuComponent.prototype.getInvoice = function () {
        this.invoice.id;
    };
    InvoiceManuComponent.prototype.getClients = function () {
        var _this = this;
        this.success = false;
        this.error = false;
        this.clientService.getForCompany()
            .subscribe(function (clients) {
            _this.clients = clients;
            _this.loadSelectedClient();
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured please contact administrator";
        });
    };
    InvoiceManuComponent.prototype.getSacCodes = function () {
        var _this = this;
        this.success = false;
        this.error = false;
        this.invoiceService.getSACCode()
            .subscribe(function (sac) {
            _this.sacCodes = sac;
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured please contact administrator";
        });
    };
    InvoiceManuComponent.prototype.loadSelectedSac = function (manuInv) {
        if (this.selectedClient.state == "") {
            alert("please select the client");
            return;
        }
        var selSacCode = new __WEBPACK_IMPORTED_MODULE_4__invoice_manu_domain__["e" /* SACCode */]();
        selSacCode = this.sacCodes.find(function (sac) { return sac.id === manuInv.sacCodeId; });
        if (this.selectedClient.state == this.companyGlobalVar.state) {
            manuInv.cgstPerfomaPercent = selSacCode.cgstPercent;
            manuInv.sgstPerfomaPercent = selSacCode.sgstPercent;
            manuInv.igstPerfomaPercent = 0;
        }
        else {
            manuInv.cgstPerfomaPercent = 0;
            manuInv.sgstPerfomaPercent = 0;
            manuInv.igstPerfomaPercent = selSacCode.igstPercent;
        }
        manuInv.sacCode = selSacCode.sacCode;
    };
    InvoiceManuComponent.prototype.loadSelectedClient = function () {
        var _this = this;
        this.selectedClient = this.clients.find(function (cli) { return cli.id === _this.selClientId; });
        if (this.selectedClient != null) {
            console.debug('selectedClient.state' + this.selectedClient.state);
            console.debug('companyGlobalVar.state' + this.companyGlobalVar.state);
            if (this.selectedClient.state == this.companyGlobalVar.state) {
                this.cgstDisplay = true;
                this.sgstDisplay = true;
                this.igstDisplay = false;
            }
            else {
                this.cgstDisplay = false;
                this.sgstDisplay = false;
                this.igstDisplay = true;
            }
        }
        else {
            this.selectedClient = new __WEBPACK_IMPORTED_MODULE_3__client_client_domain__["a" /* Client */]();
        }
        this.invoice.clientId = this.selClientId;
    };
    InvoiceManuComponent.prototype.addRow = function () {
        this.manufacturingInvoice.push(new __WEBPACK_IMPORTED_MODULE_4__invoice_manu_domain__["c" /* ManufacturingInvoice */]());
    };
    InvoiceManuComponent.prototype.calculateAmount = function (field) {
        if (field.itemDescription !== "") {
            var amt = field.performaRate * field.quantity;
            field.grossPerformaAmount = amt;
            field.cgstPerfoma = Math.round((amt * field.cgstPerfomaPercent / 100) * 100) / 100;
            field.sgstPerfoma = Math.round((amt * field.sgstPerfomaPercent / 100) * 100) / 100;
            field.igstPerfoma = Math.round((amt * field.igstPerfomaPercent / 100) * 100) / 100;
            field.calculatedPerformaAmount = Math.round((amt + field.cgstPerfoma + field.sgstPerfoma + field.igstPerfoma) * 100) / 100;
            this.calculateTotal();
        }
    };
    InvoiceManuComponent.prototype.calculateTotal = function () {
        var sum = 0;
        this.manufacturingInvoice.filter(function (part) { return part.itemDescription !== ""; }).forEach(function (part) {
            sum = sum + part.calculatedPerformaAmount;
        });
        this.totalPerfomaBeforeTax = sum;
    };
    InvoiceManuComponent.prototype.savePerformaInvoice = function () {
        var _this = this;
        if (!this.selClientId) {
            alert("please select the client");
            return;
        }
        this.success = false;
        this.error = false;
        this.manufacturingInvoice.forEach(function (inv) {
            inv.clientId = _this.selClientId;
        });
        console.log(this.manufacturingInvoice);
        this.invoiceService.saveManufacProformaInvoice(this.manufacturingInvoice).subscribe(function (manu) {
            _this.manufacturingInvoice = manu;
            var performaIds = manu.map(function (inv) { return inv.id; }).join(',');
            _this.router.navigate(['/invoiceManuSuccess', performaIds]);
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured please contact administrator";
            console.log(err);
        });
    };
    InvoiceManuComponent.prototype.deletRow = function (particularId) {
        this.success = false;
        this.error = false;
        this.manufacturingInvoice.splice(this.manufacturingInvoice.map(function (part) { return part.id; }).indexOf(particularId), 1);
        this.calculateTotal();
    };
    InvoiceManuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-manu-invoice',
            template: __webpack_require__("./src/app/manufacturing-invoice/invoice.manu.component.html"),
            styles: [__webpack_require__("./src/app/manufacturing-invoice/invoice.manu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__client_client_service__["a" /* ClientService */],
            __WEBPACK_IMPORTED_MODULE_5__invoice_invoice_service__["a" /* InvoiceService */], __WEBPACK_IMPORTED_MODULE_7__globals__["a" /* CompanyGlobalVar */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], InvoiceManuComponent);
    return InvoiceManuComponent;
}());



/***/ }),

/***/ "./src/app/manufacturing-invoice/invoice.manu.domain.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Particulars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Invoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ManufacturingInvoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return InvoiceData; });
/* unused harmony export SearchInvoice */
/* unused harmony export SearchResult */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SACCode; });
var Particulars = /** @class */ (function () {
    function Particulars() {
        this.index = "";
        this.itemDescription = "";
        this.quantity = 1;
        this.performaRate = 0;
        this.invoiceRate = 0;
        this.createdBy = "";
    }
    return Particulars;
}());

var Invoice = /** @class */ (function () {
    function Invoice() {
        this.invoiceId = "";
        this.performaId = "";
        this.sacCode = "";
        this.invoiceType = ""; // Right now it is hardcoded; need to change it when manufacturing invoice logic is added
        this.category = "";
        this.cgstPerfomaPercent = 0;
        this.sgstPerfomaPercent = 0;
        this.igstPerfomaPercent = 0;
        this.cgstInvoicePercent = 0;
        this.sgstInvoicePercent = 0;
        this.igstInvoicePercent = 0;
        this.totalPerfomaAmount = 0;
        this.totalInvoiceAmount = 0;
        this.totalPerfomaBeforeTax = 0;
        this.totalInvoiceBeforeTax = 0;
        this.cgstPerfoma = 0;
        this.sgstPerfoma = 0;
        this.igstPerfoma = 0;
        this.cgstInvoice = 0;
        this.sgstInvoice = 0;
        this.igstInvoice = 0;
        this.createdBy = "";
        this.clientName = "";
        this.type = "";
        this.status = "NEW";
        this.url = "/api/invoice/IhtmlReport?performaId=";
        this.purl = "/api/invoice/PhtmlReport?performaId=";
    }
    return Invoice;
}());

var ManufacturingInvoice = /** @class */ (function () {
    function ManufacturingInvoice() {
        this.invoiceId = "";
        this.proFormaId = "";
        this.sacCode = "";
        this.invoiceType = "";
        this.invoiceDate = new Date();
        this.performaDate = new Date();
        this.cgstPerfomaPercent = 0;
        this.sgstPerfomaPercent = 0;
        this.igstPerfomaPercent = 0;
        this.cgstInvoicePercent = 0;
        this.sgstInvoicePercent = 0;
        this.igstInvoicePercent = 0;
        this.totalPerfomaBeforeTax = 0;
        this.totalInvoiceBeforeTax = 0;
        this.totalPerfomaAmount = 0;
        this.totalInvoiceAmount = 0;
        this.cgstPerfoma = 0;
        this.sgstPerfoma = 0;
        this.igstPerfoma = 0;
        this.cgstInvoice = 0;
        this.sgstInvoice = 0;
        this.igstInvoice = 0;
        this.index = "";
        this.itemDescription = "";
        this.quantity = 1;
        this.performaRate = 0;
        this.invoiceRate = 0;
        this.calculatedInvoiceAmount = 0;
        this.calculatedPerformaAmount = 0;
        this.grossInvoiceAmount = 0;
        this.grossPerformaAmount = 0;
        this.status = 'NEW';
        this.createdBy = "";
        this.createdDate = new Date();
        this.type = "PERFORMA"; // or INVOICE
        this.url = "/api/manuFacturingInvoice/IhtmlReport?performaId=";
        this.purl = "/api/manuFacturingInvoice/PhtmlReport?performaId=";
        this.reimbPerfomaAmount = 0;
        this.reimbInvoiceAmount = 0;
    }
    return ManufacturingInvoice;
}());

var InvoiceData = /** @class */ (function () {
    function InvoiceData() {
        this.invoice = new Invoice();
        this.particulars = [];
    }
    return InvoiceData;
}());

var SearchInvoice = /** @class */ (function () {
    function SearchInvoice() {
        this.category = "";
        this.pageNumber = 0;
        this.status = 'NEW';
        this.type = "";
        this.invoiceId = "";
        this.performaId = "";
        this.proFormaId = "";
    }
    return SearchInvoice;
}());

var SearchResult = /** @class */ (function () {
    function SearchResult() {
    }
    return SearchResult;
}());

var SACCode = /** @class */ (function () {
    function SACCode() {
        this.sacCode = "";
    }
    return SACCode;
}());



/***/ }),

/***/ "./src/app/manufacturing-invoice/invoice.manu.success.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/manufacturing-invoice/invoice.manu.success.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Heading -->\n<div class=\"card mb-4 wow fadeIn\">\n  <!--Card content-->\n  <div class=\"card-body d-sm-flex justify-content-between\">\n      <h4 class=\"mb-2 mb-sm-0 pt-1\">\n          <span>PerformA Invoice (Manufacturing)</span>\n      </h4>\n  </div>\n</div>\n<!-- Heading -->\n<div class=\"alert alert-success\" role=\"alert\" *ngIf=\"success\">\n  Successfully Created\n</div>\n\n<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-md-12 \">\n        Proforma Invoices are created successfully , ids \n        <ol>\n        <li *ngFor=\"let id of ids\">\n          <a [routerLink]=\"['/manufacturingInvoice', id]\">{{id}}</a>  \n        </li>\n        </ol>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/manufacturing-invoice/invoice.manu.success.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceManuSuccessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InvoiceManuSuccessComponent = /** @class */ (function () {
    function InvoiceManuSuccessComponent(route) {
        var _this = this;
        this.route = route;
        this.ids = [];
        var invoiceIdParam;
        this.route.params.subscribe(function (params) {
            invoiceIdParam = params['ids'];
            _this.ids = invoiceIdParam.split(",");
        });
    }
    InvoiceManuSuccessComponent.prototype.ngOnInit = function () {
    };
    InvoiceManuSuccessComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-manu-invoice-success',
            template: __webpack_require__("./src/app/manufacturing-invoice/invoice.manu.success.component.html"),
            styles: [__webpack_require__("./src/app/manufacturing-invoice/invoice.manu.success.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], InvoiceManuSuccessComponent);
    return InvoiceManuSuccessComponent;
}());



/***/ }),

/***/ "./src/app/manufacturing-invoice/manufacturing-gen-invoice.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/manufacturing-invoice/manufacturing-gen-invoice.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Heading -->\n<div class=\"card mb-4 wow fadeIn\">\n  <!--Card content-->\n  <div class=\"card-body d-sm-flex justify-content-between\">\n      <h4 class=\"mb-2 mb-sm-0 pt-1\">\n          <span>Invoice (Manufacturing)</span>\n      </h4>\n  </div>\n</div>\n<!-- Heading -->\n\n<div class=\"card mb-3 wow fadeIn\" *ngIf=\"manufacturingInvoice.id\">\n  <div class=\"card-body\">\n    <table width=\"100%\">\n      <thead>\n        <tr>\n          <th>PerformA Id</th>\n          <th>Invoice Id</th>\n          <th>Invoice Date</th>\n         <!-- <th>Print</th>-->\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>{{manufacturingInvoice.proFormaId}}</td>\n          <td>{{manufacturingInvoice.invoiceId}}</td>\n          <td><input type=\"date\" class=\"form-control underlined\" name=\"invoiceDate\" id=\"invoiceDate\" required=\"true\" [ngModel]=\"manufacturingInvoice.invoiceDate | date:'yyyy-MM-dd'\"\n               (ngModelChange)=\"manufacturingInvoice.invoiceDate = $event\" [value]=\"date | date:'yyyy-MM-dd'\"   [disabled]=\"manufacturingInvoice.type==='INVOICE'\" />\n          </td>\n         <!-- <td>\n            <a target=\"_blank\" style=\"color:white;background-color:#432fb5\" class=\"btn\" [href]=\"manufacturingInvoice.url\">\n                  <i class=\"fa fa-print\"></i>\n             </a>\n          </td>-->\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n<br/>\n<div class=\"card mb-3 wow fadeIn\" *ngIf=\"manufacturingInvoice.id\">\n  <div class=\"card-body\">\n    <table width=\"100%\" border=\"1\" style=\"border-collapse:collapse;border:#f2f2f2 solid 1px;\">\n      <thead>\n        <tr>\n          <th>Client Name</th>\n          <th colspan=\"3\">Address</th>\n          <th>GSTIN</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr valign=\"top\" >\n          <td>{{selectedClient.name}}</td>\n          <td colspan=\"3\">{{selectedClient.addrLine1}},\n            {{selectedClient.addrLine2}},<br/>\n            {{selectedClient.city}}, {{selectedClient.state}}<br/>\n            {{selectedClient.pincode}}<br/>\n            {{selectedClient.phonePrimary}},{{selectedClient.email}}\n            </td>\n          <td>{{selectedClient.gstin}}</td>\n        </tr>\n        <tr valign=\"top\">\n         <th colspan=\"5\">Particulars</th>\n        </tr>\n        <tr valign=\"top\">\n         <th *ngIf=\"manufacturingInvoice.sacCode==0\" colspan=\"2\">Description</th>\n         <th *ngIf=\"manufacturingInvoice.sacCode!=0\" >Description</th>\n         <th *ngIf=\"manufacturingInvoice.sacCode!=0\">Sac Code</th>\n         <th>Quantity</th>\n         <th>Rate</th>\n         <th>Amount</th>\n        </tr>\n        <tr valign=\"top\">\n         <td *ngIf=\"manufacturingInvoice.sacCode==0\" colspan=\"2\">{{manufacturingInvoice.itemDescription}}</td>\n         <td *ngIf=\"manufacturingInvoice.sacCode!=0\" >{{manufacturingInvoice.itemDescription}}</td>\n         <td *ngIf=\"manufacturingInvoice.sacCode!=0\">{{manufacturingInvoice.sacCode}}</td>\n         <td  align=\"right\">{{manufacturingInvoice.quantity}}</td>\n         <td  align=\"right\"><input [disabled]=\"manufacturingInvoice.type==='INVOICE'\" class=\"form-control\" style=\"width:100px;\" (change)=\"calculateAmount(manufacturingInvoice)\" type=\"number\" [(ngModel)]=\"manufacturingInvoice.invoiceRate\"/></td>\n         <td  align=\"right\">{{manufacturingInvoice.grossInvoiceAmount}}</td>\n        </tr>\n        <tr *ngIf=\"manufacturingInvoice.cgstInvoicePercent!=0\">\n          <td colspan=\"3\" align=\"right\">\n            CGST\n          </td>\n          <td  align=\"right\">{{manufacturingInvoice.cgstInvoicePercent}}</td>\n          <td  align=\"right\">{{manufacturingInvoice.cgstInvoice}}</td>\n        </tr>\n         <tr *ngIf=\"manufacturingInvoice.cgstInvoicePercent!=0\">\n          <td colspan=\"3\" align=\"right\">\n            SGST\n          </td>\n          <td align=\"right\">{{manufacturingInvoice.cgstInvoicePercent}}</td>\n          <td  align=\"right\">{{manufacturingInvoice.sgstInvoice}}</td>\n        </tr>\n         <tr *ngIf=\"manufacturingInvoice.igstInvoicePercent!=0\">\n          <td colspan=\"3\" align=\"right\">\n            IGST\n          </td>\n          <td  align=\"right\">{{manufacturingInvoice.igstInvoicePercent}}</td>\n          <td  align=\"right\">{{manufacturingInvoice.igstInvoice}}</td>\n        </tr>\n         <tr>\n          <td colspan=\"4\" align=\"right\"><b>Total</b></td>\n          <td align=\"right\"><b>{{manufacturingInvoice.calculatedInvoiceAmount}}</b></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n<div class=\"card mb-3 wow fadeIn\" *ngIf=\"manufacturingInvoice.id\">\n  <div class=\"card-body\">\n     <a target=\"_blank\" style=\"color:white;background-color:#432fb5\" class=\"btn float-right\" [href]=\"manufacturingInvoice.url\" *ngIf=\"manufacturingInvoice.url && manufacturingInvoice.invoiceId!=''\">\n            <i class=\"fa fa-print\"></i>\n      </a>&nbsp;\n    <button class=\"btn btn-warning float-right\" (click)=\"save()\" [disabled]=\"manufacturingInvoice.type==='INVOICE'\">\n      <i class=\"fa fa-cogs\">&nbsp;</i>\n      Generate Invoice</button>\n  </div>\n</div>\n\n\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"!(manufacturingInvoice.id)\" >\n   No records found\n</div>\n"

/***/ }),

/***/ "./src/app/manufacturing-invoice/manufacturing-gen-invoice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManufacturingGenInvoiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoice_invoice_service__ = __webpack_require__("./src/app/invoice/invoice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invoice_manu_domain__ = __webpack_require__("./src/app/manufacturing-invoice/invoice.manu.domain.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__client_client_domain__ = __webpack_require__("./src/app/client/client.domain.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__client_client_service__ = __webpack_require__("./src/app/client/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_constants__ = __webpack_require__("./src/app/app.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ManufacturingGenInvoiceComponent = /** @class */ (function () {
    function ManufacturingGenInvoiceComponent(route, invoiceService, clientService) {
        var _this = this;
        this.route = route;
        this.invoiceService = invoiceService;
        this.clientService = clientService;
        this.proformaId = "";
        this.manufacturingInvoice = new __WEBPACK_IMPORTED_MODULE_3__invoice_manu_domain__["c" /* ManufacturingInvoice */]();
        this.selectedClient = new __WEBPACK_IMPORTED_MODULE_4__client_client_domain__["a" /* Client */]();
        this.clients = [];
        this.sacCodes = [];
        this.selSacCode = new __WEBPACK_IMPORTED_MODULE_3__invoice_manu_domain__["e" /* SACCode */]();
        this.route.params.subscribe(function (params) {
            _this.proformaId = params['proformaId'];
            //get the bill details for that particular proforma id.
            if (_this.proformaId === "") {
                return;
            }
            _this.invoiceService.getManufacturingInvoice(_this.proformaId).subscribe(function (suc) {
                _this.manufacturingInvoice = suc;
                if (!_this.manufacturingInvoice.cgstInvoice)
                    _this.manufacturingInvoice.cgstInvoice = suc.cgstPerfoma;
                if (!_this.manufacturingInvoice.sgstInvoice)
                    _this.manufacturingInvoice.sgstInvoice = suc.sgstPerfoma;
                if (!_this.manufacturingInvoice.igstInvoice)
                    _this.manufacturingInvoice.igstInvoice = suc.igstPerfoma;
                if (!_this.manufacturingInvoice.igstInvoicePercent)
                    _this.manufacturingInvoice.igstInvoicePercent = suc.igstPerfomaPercent;
                if (!_this.manufacturingInvoice.sgstInvoicePercent)
                    _this.manufacturingInvoice.sgstInvoicePercent = suc.sgstPerfomaPercent;
                if (!_this.manufacturingInvoice.cgstInvoicePercent)
                    _this.manufacturingInvoice.cgstInvoicePercent = suc.cgstPerfomaPercent;
                if (_this.manufacturingInvoice.invoiceRate == 0)
                    _this.manufacturingInvoice.invoiceRate = suc.performaRate;
                if (!_this.manufacturingInvoice.totalInvoiceAmount)
                    _this.manufacturingInvoice.totalInvoiceAmount = suc.totalPerfomaAmount;
                if (!_this.manufacturingInvoice.grossInvoiceAmount)
                    _this.manufacturingInvoice.grossInvoiceAmount = suc.grossPerformaAmount;
                if (!_this.manufacturingInvoice.calculatedInvoiceAmount)
                    _this.manufacturingInvoice.calculatedInvoiceAmount = suc.calculatedPerformaAmount;
                if (_this.manufacturingInvoice.invoiceId == '')
                    _this.manufacturingInvoice.invoiceId = suc.proFormaId.replace("PI", "IN");
                _this.manufacturingInvoice.url = __WEBPACK_IMPORTED_MODULE_6__app_constants__["a" /* APIURLS */].printManIInvoiceUrl.concat(suc.proFormaId);
                _this.getClients();
                _this.getSacCodes();
            }, function (err) {
                alert("Error while retrieveing the manufacturing invoice");
                console.log("Error :" + err);
            });
        });
    }
    ManufacturingGenInvoiceComponent.prototype.ngOnInit = function () {
    };
    ManufacturingGenInvoiceComponent.prototype.getClients = function () {
        var _this = this;
        this.clientService.getForCompany()
            .subscribe(function (clients) {
            _this.clients = clients;
            _this.loadSelectedClient();
        }, function (err) {
            alert("Error while retrieveing the clients");
            console.log("Error :" + err);
        });
    };
    ManufacturingGenInvoiceComponent.prototype.loadSelectedClient = function () {
        var _this = this;
        this.selectedClient = this.clients.find(function (cli) { return cli.id === _this.manufacturingInvoice.clientId; });
        console.log(this.clients);
    };
    ManufacturingGenInvoiceComponent.prototype.getSacCodes = function () {
        var _this = this;
        this.invoiceService.getSACCode()
            .subscribe(function (sac) {
            _this.sacCodes = sac;
            if (_this.manufacturingInvoice && _this.manufacturingInvoice.id != 0) {
                _this.selSacCode = _this.sacCodes.find(function (sc) { return sc.sacCode === _this.manufacturingInvoice.sacCode; });
                if (_this.selSacCode)
                    _this.selSacId = _this.selSacCode.id;
            }
        }, function (err) {
            alert("Error while retrieveing the SAC Code");
            console.log("Error :" + err);
        });
    };
    ManufacturingGenInvoiceComponent.prototype.calculateTotal = function () {
    };
    ManufacturingGenInvoiceComponent.prototype.save = function () {
        var _this = this;
        this.manufacturingInvoice.type = "INVOICE";
        this.invoiceService.saveManufacturingInvoice(this.manufacturingInvoice).subscribe(function (succ) {
            _this.manufacturingInvoice = succ;
            alert("Invoice Generated ");
        }, function (err) {
            alert("Error while Saving the invoice");
            console.log("Error :" + err);
        });
    };
    ManufacturingGenInvoiceComponent.prototype.loadSelectedSac = function (manufacturingInvoice) {
    };
    ManufacturingGenInvoiceComponent.prototype.calculateAmount = function () {
        var field = this.manufacturingInvoice;
        if (field.itemDescription !== "") {
            var amt = field.invoiceRate * field.quantity;
            field.calculatedInvoiceAmount = amt;
            field.cgstInvoice = Math.round((amt * field.cgstInvoicePercent / 100) * 100) / 100;
            field.sgstInvoice = Math.round((amt * field.sgstInvoicePercent / 100) * 100) / 100;
            field.igstInvoice = Math.round((amt * field.igstInvoicePercent / 100) * 100) / 100;
            field.calculatedInvoiceAmount = Math.round((amt + field.cgstInvoice + field.sgstInvoice + field.igstInvoice) * 100) / 100;
        }
    };
    ManufacturingGenInvoiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-manufacturing-gen-invoice',
            template: __webpack_require__("./src/app/manufacturing-invoice/manufacturing-gen-invoice.component.html"),
            styles: [__webpack_require__("./src/app/manufacturing-invoice/manufacturing-gen-invoice.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__invoice_invoice_service__["a" /* InvoiceService */], __WEBPACK_IMPORTED_MODULE_5__client_client_service__["a" /* ClientService */]])
    ], ManufacturingGenInvoiceComponent);
    return ManufacturingGenInvoiceComponent;
}());



/***/ }),

/***/ "./src/app/manufacturing-invoice/manufacturing-invoice.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/manufacturing-invoice/manufacturing-invoice.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Heading -->\n<div class=\"card mb-4 wow fadeIn\">\n  <!--Card content-->\n  <div class=\"card-body d-sm-flex justify-content-between\">\n      <h4 class=\"mb-2 mb-sm-0 pt-1\">\n          <span>PerformA Invoice (Manufacturing)</span>\n      </h4>\n  </div>\n</div>\n<!-- Heading -->\n\n<div class=\"card\" *ngIf=\"manufacturingInvoice.id\">\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <!-- <div class=\"col-md-1 \"><b>Client</b></div>\n      <div class=\"col-md-3\">\n        <select (change)=\"loadSelectedClient()\" class=\"form-control underlined\" [(ngModel)]=\"selClientId\" [disabled]=\"(manufacturingInvoice.status=='CANCELED' || manufacturingInvoice.type=='INVOICE')\">\n        <option></option>\n        <option *ngFor=\"let cli of clients\" [ngValue]=\"cli.id\" [selected]=\"cli.id === selClientId\">{{cli.name}}</option>\n         </select>\n      </div> -->\n      <div class=\"col-md-2\">\n        <b>Performa Id</b>\n      </div>\n      <div class=\"col-md-2\">\n        {{manufacturingInvoice.proFormaId}}\n      </div>\n      <div class=\"col-md-2\">\n        <b>Invoice Id</b>\n      </div>\n      <div class=\"col-md-2\">\n        {{manufacturingInvoice.invoiceId}}\n      </div>\n      <div class=\"col-md-4\">\n        \n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-1\"><b>Status : </b></div>\n      <div class=\"col-md-2\">NEW</div>\n      <div class=\"col-md-2\"><b>GSTIN : </b></div>\n      <div class=\"col-md-3\">{{selectedClient.gstin}}</div>\n      <div class=\"col-md-1\"><b>Date : </b></div>\n      <div class=\"col-md-3\" >{{manufacturingInvoice.performaDate | date:\"dd MMM yyyy HH:mm\"}}</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-1\"><b>Client Name : </b></div>\n      <div class=\"col-md-2\">{{selectedClient.name}}</div>\n      <div class=\"col-md-2\"><b>Address : </b></div>\n      <div class=\"col-md-4\">\n        {{selectedClient.addrLine1}} {{selectedClient.addrLine2}},\n        <br/> {{selectedClient.city}}, {{selectedClient.state}},\n        <br/> {{selectedClient.pincode}}.\n        <br/>\n        <i>Phone : </i> {{selectedClient.phonePrimary}}.\n        <br/>\n        <i>Email : </i> {{selectedClient.email}}.\n        <br/>\n      </div>\n    </div>\n   <hr/>\n   <h4 class=\"sub-header\">\n    <span class=\"index\">1</span>Particulars\n  </h4>\n\n    <table class=\"table table-striped\">\n      <tr>\n        <th WIDTH=\"30%\">Description</th>\n        <th *ngIf=\"showSac\">SAC Code</th>\n        <th>Quantity</th>\n        <th>Rate</th>\n        <th *ngIf=\"showSac\">gst</th>\n        <th>Amount</th>\n      </tr>\n      <tr>\n        <td WIDTH=\"30%\">\n          <textarea type=\"text\" class=\"form-control\" required=\"true\" [(ngModel)]=\"manufacturingInvoice.itemDescription\" (change)=\"calculateAmount()\" [disabled]=\"manufacturingInvoice.type==='INVOICE'\">\n          </textarea>\n        </td>\n        <td WIDTH=\"10%\" *ngIf=\"showSac\">\n         <!-- <select (change)=\"loadSelectedSac(manufacturingInvoice)\" class=\"form-control underlined\" [(ngModel)]=\"manufacturingInvoice.sacCodeId\">\n        <option></option>\n        <option *ngFor=\"let sac of sacCodes\" [ngValue]=\"sac.id\" [selected]=\"sac.id === manufacturingInvoice.sacCodeId\">{{sac.sacCode}}</option>\n        </select>-->\n         {{manufacturingInvoice.sacCode}}\n        </td>\n        <td WIDTH=\"10%\">\n          <input type=\"number\" class=\"form-control\" required=\"false\" min=\"0\" size=\"3\" [(ngModel)]=\"manufacturingInvoice.quantity\" (change)=\"calculateAmount()\" [disabled]=\"manufacturingInvoice.type==='INVOICE'\"\n          />\n        </td>\n        <td WIDTH=\"10%\"><input type=\"number\" class=\"form-control\" required=\"false\" min=\"0\" [(ngModel)]=\"manufacturingInvoice.performaRate\" (change)=\"calculateAmount()\" [disabled]=\"manufacturingInvoice.type==='INVOICE'\"\n          />\n        </td>\n        <td WIDTH=\"10%\" *ngIf=\"showSac\">\n          <p *ngIf=\"manufacturingInvoice.cgstPerfomaPercent>0\">cgst={{manufacturingInvoice.cgstPerfomaPercent}}%, :{{manufacturingInvoice.cgstPerfoma}}</p>\n          <p *ngIf=\"manufacturingInvoice.sgstPerfomaPercent>0\">sgst={{manufacturingInvoice.sgstPerfomaPercent}}%, :{{manufacturingInvoice.cgstPerfoma}}</p>\n          <p *ngIf=\"manufacturingInvoice.igstPerfomaPercent>0\">igst={{manufacturingInvoice.igstPerfomaPercent}}%, :{{manufacturingInvoice.cgstPerfoma}}</p>\n        </td>\n        <td WIDTH=\"10%\">\n          <input type=\"number\" readoly class=\"form-control\" required=\"true\" readonly [(ngModel)]=\"manufacturingInvoice.calculatedPerformaAmount\" />\n        </td>\n      </tr>\n    </table>\n  </div>\n  <div class=\"card-footer\">\n    <div class=\"row float-right\">\n      <a target=\"_blank\" style=\"color:white;background-color:#432fb5\" class=\"btn\" [href]=\"this.manufacturingInvoice.purl\">\n        <i class=\"fa fa-print\"></i>\n   </a>\n  <button class=\"btn btn-info\" (click)=\"calculateAmount()\"> <i class=\"fa fa-calculator\">&nbsp;</i> Calculate Amount</button>\n  <button class=\"btn btn-info\" (click)=\"save()\"> <i class=\"fa fa-save\">&nbsp;</i> Save</button>\n  <a class=\"btn btn-warning\" routerLink=\"/generate-manu-invoice/{{manufacturingInvoice.id}}\" routerLinkActive=\"active\"><i class=\"fa fa-eye\">&nbsp;</i>View As Invoice</a>\n    </div>\n  </div>\n</div>\n\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"!(manufacturingInvoice.id)\" >\n   No records found\n</div>\n"

/***/ }),

/***/ "./src/app/manufacturing-invoice/manufacturing-invoice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManufacturingInvoiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoice_invoice_service__ = __webpack_require__("./src/app/invoice/invoice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invoice_manu_domain__ = __webpack_require__("./src/app/manufacturing-invoice/invoice.manu.domain.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__client_client_domain__ = __webpack_require__("./src/app/client/client.domain.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__client_client_service__ = __webpack_require__("./src/app/client/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_constants__ = __webpack_require__("./src/app/app.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__globals__ = __webpack_require__("./src/app/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ManufacturingInvoiceComponent = /** @class */ (function () {
    function ManufacturingInvoiceComponent(route, invoiceService, companyGlobalVar, clientService) {
        var _this = this;
        this.route = route;
        this.invoiceService = invoiceService;
        this.companyGlobalVar = companyGlobalVar;
        this.clientService = clientService;
        this.proformaId = "";
        this.manufacturingInvoice = new __WEBPACK_IMPORTED_MODULE_3__invoice_manu_domain__["c" /* ManufacturingInvoice */]();
        this.selectedClient = new __WEBPACK_IMPORTED_MODULE_4__client_client_domain__["a" /* Client */]();
        this.clients = [];
        this.sacCodes = [];
        this.selSacCode = new __WEBPACK_IMPORTED_MODULE_3__invoice_manu_domain__["e" /* SACCode */]();
        this.showSac = false;
        this.route.params.subscribe(function (params) {
            _this.proformaId = params['proformaId'];
            //get the bill details for that particular proforma id.
            if (_this.proformaId === "") {
                return;
            }
            _this.invoiceService.getManufacturingInvoice(_this.proformaId).subscribe(function (suc) {
                _this.manufacturingInvoice = suc;
                _this.manufacturingInvoice.purl = __WEBPACK_IMPORTED_MODULE_6__app_constants__["a" /* APIURLS */].printManPInvoiceUrl.concat(suc.proFormaId);
                _this.getClients();
                _this.getSacCodes();
            }, function (err) {
                alert("Error while retrieveing the manufacturing invoice");
                console.log("Error :" + err);
            });
        });
        if (companyGlobalVar.gstNo != '') {
            this.showSac = true;
        }
    }
    ManufacturingInvoiceComponent.prototype.ngOnInit = function () {
    };
    ManufacturingInvoiceComponent.prototype.getClients = function () {
        var _this = this;
        this.clientService.getForCompany()
            .subscribe(function (clients) {
            _this.clients = clients;
            _this.loadSelectedClient();
        }, function (err) {
            alert("Error while retrieveing the clients");
            console.log("Error :" + err);
        });
    };
    ManufacturingInvoiceComponent.prototype.loadSelectedClient = function () {
        var _this = this;
        this.selectedClient = this.clients.find(function (cli) { return cli.id === _this.manufacturingInvoice.clientId; });
    };
    ManufacturingInvoiceComponent.prototype.getSacCodes = function () {
        var _this = this;
        this.invoiceService.getSACCode()
            .subscribe(function (sac) {
            _this.sacCodes = sac;
            if (_this.manufacturingInvoice && _this.manufacturingInvoice.id != 0) {
                _this.selSacCode = _this.sacCodes.find(function (sc) { return sc.sacCode === _this.manufacturingInvoice.sacCode; });
                _this.selSacId = _this.selSacCode.id;
            }
        }, function (err) {
            alert("Error while retrieveing the SAC Code");
            console.log("Error :" + err);
        });
    };
    ManufacturingInvoiceComponent.prototype.calculateTotal = function () {
    };
    ManufacturingInvoiceComponent.prototype.save = function () {
        var _this = this;
        this.invoiceService.saveManufacturingInvoice(this.manufacturingInvoice).subscribe(function (succ) {
            _this.manufacturingInvoice = succ;
            alert("Invoice saved ");
        }, function (err) {
            alert("Error while Saving the invoice");
            console.log("Error :" + err);
        });
    };
    ManufacturingInvoiceComponent.prototype.loadSelectedSac = function (manufacturingInvoice) {
    };
    ManufacturingInvoiceComponent.prototype.calculateAmount = function () {
        var field = this.manufacturingInvoice;
        if (field.itemDescription !== "") {
            var amt = field.performaRate * field.quantity;
            field.cgstPerfoma = Math.round((amt * field.cgstPerfomaPercent / 100) * 100) / 100;
            field.sgstPerfoma = Math.round((amt * field.sgstPerfomaPercent / 100) * 100) / 100;
            field.igstPerfoma = Math.round((amt * field.igstPerfomaPercent / 100) * 100) / 100;
            field.calculatedPerformaAmount = Math.round((amt + field.cgstPerfoma + field.sgstPerfoma + field.igstPerfoma) * 100) / 100;
        }
    };
    ManufacturingInvoiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-manufacturing-invoice',
            template: __webpack_require__("./src/app/manufacturing-invoice/manufacturing-invoice.component.html"),
            styles: [__webpack_require__("./src/app/manufacturing-invoice/manufacturing-invoice.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__invoice_invoice_service__["a" /* InvoiceService */], __WEBPACK_IMPORTED_MODULE_7__globals__["a" /* CompanyGlobalVar */],
            __WEBPACK_IMPORTED_MODULE_5__client_client_service__["a" /* ClientService */]])
    ], ManufacturingInvoiceComponent);
    return ManufacturingInvoiceComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-fixed position-fixed primary-color-dark\" *ngIf=\"show\">\n  <div class=\"white logo-container\">\n    <a class=\"logo-wrapper waves-effect\">\n      <img src=\"/img/logo-blue.png\" class=\"img-fluid\" alt=\"\">\n    </a>\n  </div>\n  <div class=\"user-profile\">\n    <app-header></app-header>\n  </div>\n  <div class=\"sidebar-menu\">\n    <nav class=\"navigation\">\n      <ul class=\"mainmenu\">\n        <li class=\"menu-item\"  *appHasRole=\"{'role':['ADMIN','USER'],'userRole':userRole}\">\n          <a routerLink=\"/dashboard\" class=\"waves-effect\">\n            <i class=\"fa fa-user mr-3\"></i>Dashboard\n          </a>\n        </li>\n        <li class=\"menu-item\"  *appHasRole=\"{'role':['ADMIN'],'userRole':userRole}\">\n          <a routerLink=\"/client\" class=\"waves-effect\"><i class=\"fa fa-address-book mr-3\"></i>Manage Clients</a>\n        </li>\n        <li class=\"menu-item\" *appHasRole=\"{'role':['ADMIN'],'userRole':userRole}\">\n          <a routerLink=\"/users\" class=\"waves-effect\"><i class=\"fa fa-user mr-3\"></i>Manage User</a>\n        </li>\n        <li class=\"menu-item\" *appHasRole=\"{'role':['ADMIN','USER'],'userRole':userRole}\"><a><i class=\"fa fa-angle-down mr-3\"></i>Invoice</a>\n          <ul class=\"submenu\">\n            <li class=\"menu-item\"  *appHasRole=\"{'role':['ADMIN','USER'],'userRole':userRole}\" ><a routerLink=\"/invoiceNew/0\" class=\"waves-effect\"><i class=\"far fa-file-alt mr-3\"></i>New\n                Service ProformA</a></li>\n            <li class=\"menu-item\"  *appHasRole=\"{'role':['ADMIN','USER'],'userRole':userRole}\" ><a routerLink=\"/invoiceManu/0\" class=\"waves-effect\"><i class=\"fas fa-file-alt mr-3\"></i>New\n                Manufacturing ProformA</a></li>\n            <li class=\"menu-item\"  *appHasRole=\"{'role':['ADMIN','USER'],'userRole':userRole}\"><a routerLink=\"/invoice-search\" lass=\"waves-effect\"><i class=\"fa fa-search mr-3\"></i>Search</a></li>\n          </ul>\n        </li>\n        <li class=\"menu-item\"  *appHasRole=\"{'role':['ADMIN','USER'],'userRole':userRole}\"><a><i class=\"fa fa-angle-down mr-3\"></i>Voucher</a>\n          <ul class=\"submenu\">\n            <li class=\"menu-item\"  *appHasRole=\"{'role':['ADMIN','USER'],'userRole':userRole}\"><a routerLink=\"/voucherNew/0\" class=\"waves-effect\"><i class=\"fa fa-receipt mr-3\"></i>New</a></li>\n            <li class=\"menu-item\" *appHasRole=\"{'role':['ADMIN','USER'],'userRole':userRole}\"><a routerLink=\"/voucher-search\" class=\"waves-effect\"><i class=\"fa fa-search mr-3\"></i>Search</a></li>\n          </ul>\n        </li>\n         <li class=\"menu-item\"  *appHasRole=\"{'role':['ADMIN'],'userRole':userRole}\"><a><i class=\"fa fa-angle-down mr-3\"></i>Reports</a>\n          <ul class=\"submenu\">\n            <li class=\"menu-item\"  *appHasRole=\"{'role':['ADMIN'],'userRole':userRole}\"><a routerLink=\"/invoiceReport\" class=\"waves-effect\"><i class=\"fa fa-file-invoice mr-3\"></i>Invoice</a></li>\n          </ul>\n        </li>\n      </ul>\n\n    </nav>\n\n  </div>\n  <hr />\n  <div class=\"companyMenu\">\n    <span class=\"company-name\">Welcome : {{companyGlobalVar.companyName}} </span>\n    <a routerLink=\"/company\" routerLinkActive=\"active\" title=\"edit profile\" class=\"company-icon\">\n      <i class=\"fa fa-cog\"></i>\n    </a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__company_company_domain__ = __webpack_require__("./src/app/company/company.domain.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_company_service__ = __webpack_require__("./src/app/company/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals__ = __webpack_require__("./src/app/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_users_service__ = __webpack_require__("./src/app/users/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavComponent = /** @class */ (function () {
    function NavComponent(companyService, companyGlobalVar, userService) {
        this.companyService = companyService;
        this.companyGlobalVar = companyGlobalVar;
        this.userService = userService;
        this.company = new __WEBPACK_IMPORTED_MODULE_1__company_company_domain__["a" /* Company */]();
        this.show = true;
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.debug("Inside NavComponent init");
        this.companyService.getCompany()
            .subscribe(function (company) {
            _this.company = company;
            _this.companyGlobalVar.companyName = company.companyName;
            _this.companyGlobalVar.ownerName = company.ownerName;
            _this.companyGlobalVar.state = company.state;
            _this.companyGlobalVar.pinCode = company.pinCode;
            _this.companyGlobalVar.phonePrimary = company.phonePrimary;
            _this.companyGlobalVar.tanNo = company.tanNo;
            _this.companyGlobalVar.gstNo = company.gstNo;
            _this.companyGlobalVar.panNo = company.panNo;
            _this.companyGlobalVar.primaryEmail = company.primaryEmail;
        }, function (err) {
            console.error("Not able to set companyGlobalVar");
        });
        this.userService.getRoles().subscribe(function (resp) {
            if (resp.length === 0)
                alert("No roles defined for this user.\nPlease contact your company adminstrator");
            _this.userRole = resp;
        }, function (err) {
            alert("Failed to get the user roles");
        });
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("./src/app/nav/nav.component.html"),
            styles: [__webpack_require__("./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__company_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_3__globals__["a" /* CompanyGlobalVar */], __WEBPACK_IMPORTED_MODULE_4__users_users_service__["a" /* UserService */]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/reports/invoice-report/invoice-report.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reports/invoice-report/invoice-report.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Heading -->\n<div class=\"card mb-4 wow fadeIn\">\n  <!--Card content-->\n  <div class=\"card-body d-sm-flex justify-content-between\">\n    <h4 class=\"mb-2 mb-sm-0 pt-1\">\n      <span>Invoice Report</span>\n    </h4>\n  </div>\n</div>\n<!-- Heading -->\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error\">\n  {{errorMessage}}\n</div>\n\n<form (ngSubmit)=\"submit()\" name=\"searchForm\" ngNativeValidate>\n  <div class=\"card\">\n    <div class=\"card-header primary-color white-text\">\n      <h3> Search:</h3>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-md-3\">\n          <div class=\"md-form mt-1\">\n            <label for=\"category\" class=\"active\">Category </label>\n            <select id=\"category\" name=\"category \" class=\"browser-default custom-select md-select\" required=\"false\" [(ngModel)]=\"searchInvoice.category\"\n              (change)=\"clearResult()\">\n                  <option value=\"SERVICE\">SERVICE</option>\n                  <option value=\"MANUFACTURING\">MANUFACTURING</option>                  \n                </select>\n          </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"md-form mt-1\">\n            <label for=\"name\">Performa Id </label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"performa Id\" id=\"performaId\" required=\"false\" [(ngModel)]=\"searchInvoice.performaId\"\n            />\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"md-form mt-1\">\n            <label for=\"name\">Invoice Id </label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"invoiceId\" id=\"invoiceId\" required=\"false\" [(ngModel)]=\"searchInvoice.invoiceId\"\n            />\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"md-form mt-1\">\n            <label for=\"status\" class=\"active\">Status </label>\n            <select id=\"status\" name=\"status \" class=\"browser-default custom-select md-select\" required=\"false\" [(ngModel)]=\"searchInvoice.status\">\n                  <option value=\"NEW\">NEW</option>\n                  <option value=\"CANCELED\">CANCELED</option>                  \n                </select>\n            </div>\n          </div>\n\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-md-3\">\n             <div class=\"md-form mt-1\">\n            <label for=\"client\" class=\"active\">Client </label>\n            <select id=\"client\" name=\"client \" class=\"browser-default custom-select md-select\" required=\"false\" [(ngModel)]=\"searchInvoice.clientId\">\n              <option></option>\n              <option *ngFor=\"let cli of clients\" [ngValue]=\"cli.id\">{{cli.name}}</option>\n            </select>\n             </div>\n          </div>\n          <div class=\"col-md-3\">\n             <div class=\"md-form mt-1\">\n            <label for=\"startDt\" class=\"active\">Performa/Invoice </label>\n            <select id=\"status\" name=\"status \" class=\"browser-default custom-select md-select\" required=\"false\" [(ngModel)]=\"searchInvoice.type\">\n                  <option></option>\n                  <option value=\"PERFORMA\">PERFORMA </option>\n                  <option value=\"INVOICE\">INVOICE </option>               \n                </select>\n             </div>\n          </div>\n          <div class=\"col-md-3\">\n             <div class=\"md-form mt-1\">\n            <label for=\"startDt\" class=\"active\">Start Date </label>\n            <input type=\"date\" class=\"form-control underlined\" name=\"startDt\" id=\"startDt\" required=\"false\" [(ngModel)]=\"searchInvoice.invoiceStDate\"\n            />\n             </div>\n          </div>\n          <div class=\"col-md-3\">\n             <div class=\"md-form mt-1\">\n            <label for=\"endDt\" class=\"active\">End Date</label>\n            <input type=\"date\" class=\"form-control underlined\" name=\"endDt\" id=\"endDt\" required=\"false\" [(ngModel)]=\"searchInvoice.invoiceEdDate\"\n            />\n             </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"card-footer\">\n      <button type=\"submit\" class=\"btn btn-primary float-right\">\n              <i class=\"fa fa-search\">&nbsp;</i>\n              Search</button>      \n      <!-- <button type=\"reset\" class=\"btn btn-secondary float-right\">\n              <i class=\"fa fa-refresh\">&nbsp;</i>\n              Reset</button> -->\n    </div>\n  </div>\n</form>\n<br/>\n<h5 class=\"sub-header\">\n  Result       \n</h5>\n\n<div class=\"card\">\n  <div class=\"card-header rgba-blue-light clear-fix\">\n    <small>Displaying items {{invoices.length}}in this page</small>\n    <button class=\"btn btn-warning float-right\" (click)=\"generateExcel()\" *ngIf=\"invoices.length>0\">\n              <i class=\"fa fa-file-excel\">&nbsp;</i>\n              Export to Excel</button> \n  </div>\n  <div class=\"card-body\">\n\n    <table class=\"table table-striped\">\n      <thead class=\"orange lighten-2\">\n        <tr>\n          <th>Invoice Id</th>\n          <th>Performa Id</th>\n          <th>Client</th>\n          <th>Performa Date</th>\n          <th>Invoice Date</th>\n          <th>Performa Amount</th>\n          <th>Invoice Amount</th>\n          <th>Type</th>\n          <th>Status</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let invoice of invoices\">\n          <td>\n            <span *ngIf=\"invoice.invoiceId && searchInvoice.category=='SERVICE'\">{{invoice.invoiceId}}</span>\n            <span *ngIf=\"invoice.invoiceId && searchInvoice.category=='MANUFACTURING'\">{{invoice.invoiceId}}</span>\n          </td>\n          <td>\n            <a routerLink=\"/performaView/{{invoice.id}}\" *ngIf=\"invoice.performaId && searchInvoice.category=='SERVICE'\">{{invoice.performaId}}</a>\n            <a routerLink=\"/manufacturingInvoice/{{invoice.id}}\" *ngIf=\"invoice.proFormaId && searchInvoice.category=='MANUFACTURING'\">{{invoice.proFormaId}}</a>\n          </td>\n          <td>{{invoice.clientName}}</td>\n          <td>{{invoice.performaDate | date:'yyyy-MM-dd'}}</td>\n          <td>{{invoice.invoiceDate | date:'yyyy-MM-dd'}}</td>\n          <td *ngIf=\"searchInvoice.category=='MANUFACTURING'\">{{invoice.calculatedPerformaAmount}}</td>\n          <td *ngIf=\"searchInvoice.category=='MANUFACTURING'\">{{invoice.calculatedInvoiceAmount}}</td>\n          <td *ngIf=\"searchInvoice.category=='SERVICE'\">{{invoice.totalPerfomaAmount}}</td>\n          <td *ngIf=\"searchInvoice.category=='SERVICE'\">{{invoice.totalInvoiceAmount}}</td>\n          <td>{{invoice.type}}</td>\n          <td>{{invoice.status}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/reports/invoice-report/invoice-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__excel_excel_generator_service__ = __webpack_require__("./src/app/excel/excel-generator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoice_invoice_service__ = __webpack_require__("./src/app/invoice/invoice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invoice_invoice_domain__ = __webpack_require__("./src/app/invoice/invoice.domain.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__client_client_service__ = __webpack_require__("./src/app/client/client.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InvoiceReportComponent = /** @class */ (function () {
    function InvoiceReportComponent(excelGenerator, invoiceService, clientService) {
        this.excelGenerator = excelGenerator;
        this.invoiceService = invoiceService;
        this.clientService = clientService;
        this.success = true;
        this.error = false;
        this.errorMessage = "";
        this.searchInvoice = new __WEBPACK_IMPORTED_MODULE_3__invoice_invoice_domain__["e" /* SearchInvoice */]();
        this.clients = [];
        this.invoices = [];
        this.searchResult = new __WEBPACK_IMPORTED_MODULE_3__invoice_invoice_domain__["f" /* SearchResult */]();
        this.numbers = [];
    }
    InvoiceReportComponent.prototype.ngOnInit = function () {
        this.getClients();
    };
    InvoiceReportComponent.prototype.getClients = function () {
        var _this = this;
        this.success = false;
        this.error = false;
        this.clientService.getForCompany()
            .subscribe(function (clients) {
            _this.clients = clients;
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured please contact administrator";
        });
    };
    InvoiceReportComponent.prototype.clearResult = function () {
        this.searchResult = new __WEBPACK_IMPORTED_MODULE_3__invoice_invoice_domain__["f" /* SearchResult */]();
        this.invoices = [];
    };
    InvoiceReportComponent.prototype.submit = function (pageNumber) {
        var _this = this;
        if (pageNumber === void 0) { pageNumber = 0; }
        console.log(this.searchInvoice);
        if (this.searchInvoice.category !== "") {
            console.log("category :" + this.searchInvoice.category);
            this.invoiceService.searchInvoiceReport(this.searchInvoice, this.searchInvoice.category)
                .subscribe(function (searchResult) {
                _this.invoices = searchResult;
                _this.invoices.forEach(function (invoice) {
                    try {
                        invoice.clientName = _this.clients.find(function (client) { return client.id == invoice.clientId; }).name;
                    }
                    catch (e) {
                        console.error(e);
                    }
                });
            }, function (err) {
                _this.error = true;
                _this.errorMessage = "Error occured While searching the Invoice";
            });
        }
        else {
            alert("Please select the category");
            return;
        }
    };
    InvoiceReportComponent.prototype.generateExcel = function () {
        this.excelGenerator.exportAsExcelFile(this.invoices, 'InvoiceReport');
    };
    InvoiceReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-invoice-report',
            template: __webpack_require__("./src/app/reports/invoice-report/invoice-report.component.html"),
            styles: [__webpack_require__("./src/app/reports/invoice-report/invoice-report.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__excel_excel_generator_service__["a" /* ExcelGeneratorService */], __WEBPACK_IMPORTED_MODULE_2__invoice_invoice_service__["a" /* InvoiceService */], __WEBPACK_IMPORTED_MODULE_4__client_client_service__["a" /* ClientService */]])
    ], InvoiceReportComponent);
    return InvoiceReportComponent;
}());



/***/ }),

/***/ "./src/app/users/users.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Heading -->\n<div class=\"card mb-4 wow fadeIn\">\n  <!--Card content-->\n  <div class=\"card-body d-sm-flex justify-content-between\">\n    <h4 class=\"mb-2 mb-sm-0 pt-1\">\n      <span>Manage User</span>\n    </h4>\n  </div>\n</div>\n<!-- Heading -->\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error\">\n  {{errorMessage}}\n</div>\n<div class=\"alert alert-success\" role=\"alert\" *ngIf=\"success\">\n  Successfully Saved\n</div>\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <div class=\"card\">\n      <div class=\"card-header grey lighten-4\" >\n        <div class=\"md-form input-group mb-3\">\n          <label for=\"search\">Search</label>\n          <input type=\"text\" class=\"form-control\" id=\"search\" />\n          <div class=\"input-group-append\">\n            <button class=\"btn primary-color waves-effect m-0\" (click)=\"new()\">\n               <i class=\"fa fa-plus-square\"></i> &nbsp;Add New</button>\n          </div>\n        </div>\n      </div>\n      <div style=\"overflow:auto;height:400px;background-color:white;\">\n        <ul class=\"list-group list-group-flush\">\n          <li *ngFor=\"let user of users\" class=\"list-group-item\" (click)=\"edit(user)\" style=\"cursor: pointer;\">\n            {{user.name}}\n            <span class=\"float-right\">\n              <i class=\"fa fa-arrow-right\"></i>\n            </span>\n          </li>\n        </ul>\n        <div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-8\">\n    <form (ngSubmit)=\"submit()\" name=\"userForm\" ngNativeValidate>\n      <div class=\"card\">\n        <div class=\"card-header primary-color white-text\" >\n          <h5> User </h5>\n        </div>\n        <div class=\"card-body\">\n\n          <div class=\"row\">\n            <div class=\"col-md-6 border-right\">\n              <h4 class=\"sub-header\">\n                <span class=\"index\">1</span>User\n              </h4>\n              <div class=\"md-form\">\n                <label for=\"name\" [class.active]=\"user.name!=''\">Name</label>\n                <input type=\"text\" class=\"form-control underlined\" name=\"name\" id=\"name\" required=\"true\" [(ngModel)]=\"user.name\" />\n              </div>\n\n              <div class=\"md-form\">\n                <label for=\"email\" [class.active]=\"user.email!=''\">Gmail</label>\n                <input type=\"text\" class=\"form-control underlined\" name=\"email\" id=\"email\" required=\"true\" [(ngModel)]=\"user.email\" />\n              </div>\n              <div class=\"md-form\">\n                <label for=\"active\" [class.active]=\"user.active!=''\">Active</label>\n                <select id=\"active\" name=\"active \" class=\"browser-default custom-select md-select\" required=\"true\" [(ngModel)]=\"user.active\">\n                  <option value=\"true\" selected>Active </option>\n                  <option value=\"false\">InActive </option>\n                </select>\n              </div>\n              <!-- <h5 class=\"sub-header\">\n                <span class=\"index\">2</span>Password:\n              </h5>\n              <div class=\"md-form\">\n                <label for=\"password\" [class.active]=\"user.password!=''\">Password</label>\n                <input type=\"password\" class=\"form-control underlined\" name=\"password\" id=\"password\" required=\"true\" [(ngModel)]=\"user.password\">\n              </div>\n              <div class=\"md-form\">\n                <label for=\"retype_password\" [class.active]=\"user.password!=''\">reenter password</label>\n                <input type=\"password\" class=\"form-control underlined\" name=\"retype_password\" id=\"retype_password\" required=\"\">\n              </div> -->\n\n            </div>\n            <div class=\"col-md-6\">\n              <h4 class=\"sub-header\">\n                <span class=\"index\">3</span>User Role\n              </h4>\n              <span *ngIf=\"!showRoles\">Select a User to view or manage role </span>\n              <div *ngIf=\"showRoles\">\n                <div class=\"md-form input-group\">\n                  <select id=\"RoleSelect\" name=\"roleSelect \" class=\"browser-default custom-select md-select\" [(ngModel)]=\"userRole.roleCode\">\n                    <option value=\"ADMIN\" selected>ADMIN</option>\n                    <option value=\"USER\">USER</option>\n                    <option value=\"CLIENT\">CLIENT</option>\n                  </select>\n                  <div class=\"input-group-append\">\n                    <button type=\"button\" name=\"addRole\" (click)=\"adduserRole(userRole.roleCode)\" class=\"btn btn-success btn-sm waves-effect m-0\">\n                      <i class=\"fa fa-plus-square\"></i>&nbsp;Add Role</button>\n                  </div>\n                </div>\n                <ul class=\"list-group list-group-flush\">\n                  <li *ngFor=\"let userRole of userRoles\" class=\"list-group-item\" style=\"cursor: pointer;\">\n                    {{userRole.roleCode}}\n                    <span class=\"float-right\">\n                        <i (click)=\"deleteUserRole(userRole.id)\" class=\"fa fa-trash\"></i>\n                      </span>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-success float-right waves-effect m-0\">\n                <i class=\"fa fa-save\"></i>&nbsp;Save</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_domain__ = __webpack_require__("./src/app/users/users.domain.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_service__ = __webpack_require__("./src/app/users/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersComponent = /** @class */ (function () {
    function UsersComponent(userService) {
        this.userService = userService;
        this.users = [];
        this.userRoles = [];
        this.filterUsers = [];
        this.error = false;
        this.errorMessage = "";
        this.user = new __WEBPACK_IMPORTED_MODULE_1__users_domain__["a" /* UserInfo */]();
        this.userRole = new __WEBPACK_IMPORTED_MODULE_1__users_domain__["b" /* UserRole */]();
        this.success = true;
        this.showRoles = false;
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.success = false;
        this.error = false;
        this.userService.getUsers()
            .subscribe(function (users) {
            _this.users = users;
            _this.filterUsers = users;
            _this.showRoles = false;
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured please contact administrator";
        });
    };
    UsersComponent.prototype.edit = function (user) {
        this.user = user;
        this.user.password = "";
        this.showRoles = true;
        this.getuserRole(user);
    };
    UsersComponent.prototype.getuserRole = function (user) {
        var _this = this;
        this.userService.getUserRole(user)
            .subscribe(function (userRoles) {
            _this.userRoles = userRoles;
            _this.showRoles = true;
        }, function (err) {
            _this.error = true;
            _this.showRoles = false;
            _this.errorMessage = "Error occured while fetching roles contact administrator";
        });
    };
    UsersComponent.prototype.adduserRole = function (roleCode) {
        var _this = this;
        //this.userRole = new UserRole();
        this.userRole.email = this.user.email;
        this.userRole.roleCode = roleCode;
        console.log("userRole --" + this.userRole.roleCode);
        this.userService.addUserRole(this.userRole)
            .subscribe(function (resp) {
            console.log("adduserRole resp" + resp);
            _this.success = true;
            _this.getuserRole(_this.user);
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured please contact administrator";
        });
    };
    UsersComponent.prototype.deleteUserRole = function (id) {
        var _this = this;
        console.log("id --" + id);
        this.userService.deleteUserRole(id)
            .subscribe(function (resp) {
            console.log("deleteUserRole resp" + resp);
            _this.success = true;
            _this.getuserRole(_this.user);
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured please contact administrator";
        });
    };
    UsersComponent.prototype.submit = function () {
        var _this = this;
        this.success = false;
        this.error = false;
        this.userService.save(this.user)
            .subscribe(function (user) {
            _this.user = user;
            _this.getUsers();
            _this.success = true;
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured please contact administrator";
        });
    };
    UsersComponent.prototype.new = function () {
        this.success = false;
        this.error = false;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__users_domain__["a" /* UserInfo */]();
        this.userRole = new __WEBPACK_IMPORTED_MODULE_1__users_domain__["b" /* UserRole */]();
        this.userRoles = [];
        this.showRoles = false;
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-users',
            template: __webpack_require__("./src/app/users/users.component.html"),
            styles: [__webpack_require__("./src/app/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__users_service__["a" /* UserService */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/users/users.domain.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserRole; });
/* unused harmony export UserDetails */
var UserInfo = /** @class */ (function () {
    function UserInfo() {
        this.email = "";
        this.name = "";
        this.active = "";
        this.password = "";
    }
    return UserInfo;
}());

var UserRole = /** @class */ (function () {
    function UserRole() {
        this.email = "";
        this.roleCode = "";
    }
    return UserRole;
}());

var UserDetails = /** @class */ (function () {
    function UserDetails() {
        this.userInfo = new UserInfo();
        this.userRole = new UserRole();
    }
    return UserDetails;
}());



/***/ }),

/***/ "./src/app/users/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constants__ = __webpack_require__("./src/app/app.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUsers = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].user);
        return this.http.get(url);
    };
    UserService.prototype.getUserRole = function (user) {
        var param = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]();
        param = param.append('email', user.email);
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].userrole);
        return this.http.get(url, { params: param });
    };
    UserService.prototype.addUserRole = function (roleCode) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].adduserrole)
            .concat("?email=")
            .concat(roleCode.email)
            .concat("&roleCode=")
            .concat(roleCode.roleCode);
        //console.log("url--"+url);
        return this.http.post(url, "");
    };
    UserService.prototype.deleteUserRole = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].userrole)
            .concat("?roleId=")
            .concat(id.toString());
        //console.log("url--"+url);
        return this.http.delete(url);
    };
    UserService.prototype.save = function (user) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].user);
        return this.http.post(url, user, { headers: httpOptions.headers });
    };
    UserService.prototype.getRolesP = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].userrole).concat("/authenticated");
        // console.log("getting user role in user service")
        return this.http.get(url, { headers: httpOptions.headers })
            .toPromise();
    };
    UserService.prototype.getRoles = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].userrole).concat("/authenticated");
        // console.log("getting user role in user service observable")
        return this.http.get(url, { headers: httpOptions.headers });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/voucher/voucher.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/voucher/voucher.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Heading -->\n<div class=\"card mb-4 wow fadeIn\">\n  <!--Card content-->\n  <div class=\"card-body d-sm-flex justify-content-between\">\n    <h4 class=\"mb-2 mb-sm-0 pt-1\">\n      <span>New Voucher</span>\n    </h4>\n  </div>\n</div>\n<!-- Heading -->\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error\">\n  {{errorMessage}}\n</div>\n<div class=\"alert alert-success\" role=\"alert\" *ngIf=\"success\">\n  Successfully Saved\n</div>\n\n<form (ngSubmit)=\"saveVoucher()\" name=\"voucherForm\" ngNativeValidate>\n  <div class=\"card\">\n    <div class=\"card-header primary-color white-text\" style=\"padding-left:20px;\">\n      <label for=\"vendorName\">Voucher Entry </label>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-sm-4\">\n            <div class=\"md-form mt-1\">\n            <label for=\"vendorName\">Vendor Name : </label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"vendorName\" id=\"vendorName\" [(ngModel)]=\"voucher.vendorName\" />\n          </div>\n          </div>\n          <div class=\"col-sm-4\">\n            <div class=\"md-form mt-1\">\n            <label for=\"voucherId\">Voucher Id </label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"voucherId\" id=\"voucherId\" [(ngModel)]=\"voucher.voucherId\"/>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-sm-4\">\n            <div class=\"md-form mt-1\">\n            <label for=\"particulars\">Particulars : </label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"particulars\" id=\"particulars\"  [(ngModel)]=\"voucher.particulars\"/>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-sm-4\">\n            <div class=\"md-form mt-1\">\n            <label for=\"totalAmount\">Total Amount : </label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"totalAmount\" id=\"totalAmount\"  [(ngModel)]=\"voucher.totalAmount\"/>\n            </div>\n          </div>\n          <div class=\"col-sm-4\">\n            <div class=\"md-form mt-1\">\n            <label for=\"voucherDate\" class=\"active\">Voucher Date </label>\n            <input type=\"date\" class=\"form-control underlined\" name=\"voucherDate\" id=\"voucherDate\" [(ngModel)]=\"voucher.voucherDate\"\n            />\n            </div>\n          </div>\n        </div>\n      </div>\n      \n    </div>\n    <div class=\"card-footer\">\n      <button class=\"btn btn-success float-right \" type=\"submit\"> <i class=\"fa fa-save\"></i>&nbsp;Save</button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/voucher/voucher.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoucherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__voucher_domain__ = __webpack_require__("./src/app/voucher/voucher.domain.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voucher_service__ = __webpack_require__("./src/app/voucher/voucher.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VoucherComponent = /** @class */ (function () {
    function VoucherComponent(voucherService) {
        this.voucherService = voucherService;
        this.error = false;
        this.errorMessage = "";
        this.success = true;
        this.voucher = new __WEBPACK_IMPORTED_MODULE_1__voucher_domain__["b" /* Voucher */]();
    }
    VoucherComponent.prototype.ngOnInit = function () {
        this.success = false;
        this.error = false;
    };
    VoucherComponent.prototype.getVoucher = function () {
        this.voucher.id;
    };
    VoucherComponent.prototype.saveVoucher = function () {
        var _this = this;
        this.success = false;
        this.error = false;
        this.voucherService.save(this.voucher)
            .subscribe(function (voucher) {
            _this.voucher = voucher;
            _this.getVoucher();
            _this.success = true;
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured please contact administrator";
        });
    };
    VoucherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-voucher',
            template: __webpack_require__("./src/app/voucher/voucher.component.html"),
            styles: [__webpack_require__("./src/app/voucher/voucher.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__voucher_service__["a" /* VoucherService */]])
    ], VoucherComponent);
    return VoucherComponent;
}());



/***/ }),

/***/ "./src/app/voucher/voucher.domain.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Voucher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchVoucher; });
/* unused harmony export SearchVoucherResult */
var Voucher = /** @class */ (function () {
    function Voucher() {
        this.vendorName = "";
        this.voucherId = "";
        this.particulars = "";
        this.totalAmount = "";
        this.createdBy = "";
    }
    return Voucher;
}());

var SearchVoucher = /** @class */ (function () {
    function SearchVoucher() {
        this.pageNumber = 0;
        this.voucherId = "";
        this.vendorName = "";
    }
    return SearchVoucher;
}());

var SearchVoucherResult = /** @class */ (function () {
    function SearchVoucherResult() {
    }
    return SearchVoucherResult;
}());



/***/ }),

/***/ "./src/app/voucher/voucher.search.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/voucher/voucher.search.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Heading -->\n<div class=\"card mb-4 wow fadeIn\">\n  <!--Card content-->\n  <div class=\"card-body d-sm-flex justify-content-between\">\n    <h4 class=\"mb-2 mb-sm-0 pt-1\">\n      <span>Search Voucher</span>\n    </h4>\n  </div>\n</div>\n<!-- Heading -->\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error\">\n  {{errorMessage}}\n</div>\n\n<form (ngSubmit)=\"submit()\" name=\"searchForm\">\n  <div class=\"card\">\n    <div class=\"card-header primary-color white-text\">\n      <h3> Search:</h3>\n      </div>\n    <div class=\"card-body\">\n      <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <div class=\"md-form mt-1\">\n            <label for=\"name\">Voucher Id </label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"voucherId\" id=\"voucherId\" required=\"false\" [(ngModel)]=\"searchVoucher.voucherId\"\n            />\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"md-form mt-1\">\n            <label for=\"name\">Vendor Name </label>\n            <input type=\"text\" class=\"form-control underlined\" name=\"vendorName\" id=\"vendorName\" required=\"false\" [(ngModel)]=\"searchVoucher.vendorName\"\n            />\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"md-form mt-1\">\n            <label for=\"startDt\" class=\"active\">Start Date </label>\n            <input type=\"date\" class=\"form-control underlined\" name=\"startDate\" id=\"startDate\" required=\"false\" [(ngModel)]=\"searchVoucher.startDate\"\n            />\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"md-form mt-1\">\n            <label for=\"endDt\" class=\"active\">End Date</label>\n            <input type=\"date\" class=\"form-control underlined\" name=\"endDate\" id=\"endDate\" required=\"false\" [(ngModel)]=\"searchVoucher.endDate\"\n            />\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"card-footer\">\n      <button type=\"submit\" class=\"btn btn-primary float-right waves-effect m-0\">\n              <i class=\"fa fa-search\">&nbsp;</i>\n              Search</button>\n    </div>\n  </div>\n</form>\n<br/>\n<h5 class=\"sub-header\">\n  Search Result\n</h5>\n<div class=\"card\">\n  <div class=\"card-header rgba-blue-light\">\n    <small>list of vouchers</small>\n  </div>\n  <div class=\"card-body\">\n    <table class=\"table table-striped\">\n      <thead class=\"orange lighten-2\">\n        <tr>\n          <th>Id</th>\n          <th>Voucher Id</th>\n          <th>Vendor Name</th>\n          <th>Particulars</th>\n          <th>Total Amount</th>\n          <th>Voucher Date</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let voucher of vouchers\">\n          <td>{{voucher.id}}</td>\n          <td>{{voucher.voucherId}}</td>\n          <td>{{voucher.vendorName}}</td>\n          <td>{{voucher.particulars}}</td>\n          <td>{{voucher.totalAmount}}</td>\n          <td>{{voucher.voucherDate | date:'yyyy-MM-dd hh:mm aa'}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/voucher/voucher.search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoucherSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voucher_service__ = __webpack_require__("./src/app/voucher/voucher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__voucher_domain__ = __webpack_require__("./src/app/voucher/voucher.domain.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VoucherSearchComponent = /** @class */ (function () {
    function VoucherSearchComponent(route, voucherService) {
        this.route = route;
        this.voucherService = voucherService;
        this.success = true;
        this.error = false;
        this.errorMessage = "";
        this.searchVoucher = new __WEBPACK_IMPORTED_MODULE_3__voucher_domain__["a" /* SearchVoucher */]();
        this.vouchers = [];
    }
    VoucherSearchComponent.prototype.ngOnInit = function () {
    };
    VoucherSearchComponent.prototype.submit = function () {
        var _this = this;
        console.log(this.searchVoucher);
        if (this.searchVoucher.vendorName == "")
            this.searchVoucher.vendorName = null;
        if (this.searchVoucher.voucherId == "")
            this.searchVoucher.voucherId = null;
        this.voucherService.searchVoucher(this.searchVoucher)
            .subscribe(function (searchResult) {
            _this.vouchers = searchResult.content;
        }, function (err) {
            _this.error = true;
            _this.errorMessage = "Error occured While searching Voucher";
        });
    };
    VoucherSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-voucher.search',
            template: __webpack_require__("./src/app/voucher/voucher.search.component.html"),
            styles: [__webpack_require__("./src/app/voucher/voucher.search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__voucher_service__["a" /* VoucherService */]])
    ], VoucherSearchComponent);
    return VoucherSearchComponent;
}());



/***/ }),

/***/ "./src/app/voucher/voucher.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoucherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constants__ = __webpack_require__("./src/app/app.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var VoucherService = /** @class */ (function () {
    function VoucherService(http) {
        this.http = http;
    }
    VoucherService.prototype.save = function (voucher) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].savevoucher);
        return this.http.post(url, voucher, { headers: httpOptions.headers });
    };
    VoucherService.prototype.searchVoucher = function (searchVoucher, pageNo) {
        if (pageNo === void 0) { pageNo = 0; }
        var url = __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* Urls */].getDomain().concat(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* APIURLS */].voucher).concat("/search")
            .concat("?pageNumber=")
            .concat(pageNo.toString());
        console.log("Searching : " + url);
        return this.http.post(url, searchVoucher, { headers: httpOptions.headers });
    };
    VoucherService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], VoucherService);
    return VoucherService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map