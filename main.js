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

/***/ "./src/app/Basic/form/form.component.css":
/*!***********************************************!*\
  !*** ./src/app/Basic/form/form.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Jhc2ljL2Zvcm0vZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Basic/form/form.component.html":
/*!************************************************!*\
  !*** ./src/app/Basic/form/form.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-form container-search\">\n  <div class=\"center\">\n    <div class=\"header\">\n      {{ title }}\n    </div>\n    <form [formGroup]=\"form\" (ngSubmit)=\"send()\">\n      <div\n        *ngFor=\"let s of schemes\"\n        class=\"formControl\"\n        [ngClass]=\"{ 'formControl-modern': s.currency }\"\n      >\n        <label>\n          {{ s.displayName }}\n          <span class=\"help-btn\">\n            <span\n              class=\"help\"\n              *ngIf=\"s.help && help != s.help\"\n              (click)=\"help = s.help\"\n            ></span>\n            <span\n              class=\"help-close\"\n              *ngIf=\"help == s.help\"\n              (click)=\"help = ''\"\n            ></span>\n          </span>\n        </label>\n        <div class=\"help-box\" *ngIf=\"help == s.help\" (mouseleave)=\"help = ''\">\n          <div class=\"content\">\n            {{ s.help }} <span *ngIf=\"s.example\">Primer: {{ s.example }} </span>\n          </div>\n        </div>\n        <div class=\"input-box\">\n          <app-list\n            *ngIf=\"s.listPath\"\n            (listEvent)=\"changeSelect($event, s.name)\"\n            [choise]=\"this.form.get(s.name).value[s.attribute]\"\n            [scheme]=\"s\"\n          ></app-list>\n          <input\n            *ngIf=\"!s.listPath\"\n            type=\"text\"\n            formControlName=\"{{ s.name }}\"\n          />\n          <div *ngIf=\"s.currency\" class=\"valute\">{{ s.currency }}</div>\n        </div>\n        <div *ngIf=\"test(s.name)\" class=\"validation\">\n          <small>! {{ test(s.name) }}</small>\n        </div>\n        <div *ngIf=\"s.listPath\">\n        </div>\n      </div>\n      <div class=\"submit\">\n        <div class=\"right\">\n          <button [disabled]=\"form.invalid\" type=\"submit\">SAČUVAJ</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n\n<div class=\"container-footer-btn\">\n    <div [routerLink]='routerLinkA' class=\"moon-close\">\n      <div class=\"symbol\"> &#10005; </div>\n      <div class=\"text\">Zatvori</div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/Basic/form/form.component.ts":
/*!**********************************************!*\
  !*** ./src/app/Basic/form/form.component.ts ***!
  \**********************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest.service */ "./src/app/services/rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormComponent = /** @class */ (function () {
    function FormComponent(fb, rs, router) {
        this.fb = fb;
        this.rs = rs;
        this.router = router;
        this.title = "Oprema";
        this.path = "opreme";
        // html
        this.help = "";
    }
    FormComponent.prototype.ngOnInit = function () {
        this.routerLinkA = '/podesavanja/' + this.path;
        this.form = this.fb.group({});
        this.createForm();
    };
    FormComponent.prototype.createForm = function () {
        var _this = this;
        // Create
        for (var _i = 0, _a = this.schemes; _i < _a.length; _i++) {
            var s = _a[_i];
            this.form.addControl(s.name, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](s.value, this.addValidators(s)));
        }
        // Update
        if (this.id) {
            this.rs.getOne(this.path, this.id).subscribe(function (d) {
                _this.stock = d;
                for (var _i = 0, _a = _this.schemes; _i < _a.length; _i++) {
                    var s = _a[_i];
                    var newObject = {};
                    newObject[s.name] = _this.stock[s.name];
                    _this.form.patchValue(newObject);
                }
            });
        }
    };
    FormComponent.prototype.send = function () {
        var _this = this;
        if (this.id) {
            var retVar = this.form.value;
            retVar["id"] = this.id;
            this.rs
                .update(this.path, retVar)
                .subscribe(function () { return _this.router.navigate(["/podesavanja/" + _this.path]); });
        }
        else {
            for (var _i = 0, _a = this.schemes; _i < _a.length; _i++) {
                var s = _a[_i];
                if (s.listPath) {
                    var newObject = {};
                    newObject[s.name] = { id: 2 };
                    this.form.patchValue(newObject);
                }
            }
            this.rs
                .save(this.path, this.form.value)
                .subscribe(function () { return _this.router.navigate(["/podesavanja/" + _this.path]); });
        }
    };
    // Validators
    FormComponent.prototype.addValidators = function (s) {
        var r = [];
        if (s.req) {
            r.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        }
        if (s.minLength) {
            r.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(s.minLength));
        }
        if (s.minValue) {
            r.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(s.minValue));
        }
        if (s.maxValue) {
            r.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(s.maxValue));
        }
        if (s.currency) {
            r.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/[0-9]/));
            //r.push(Validators.pattern(/^-?(0|[0-9]\d*)?$/));
        }
        return r;
    };
    // Inspect error
    FormComponent.prototype.test = function (i) {
        var x = this.form.get(i);
        if (x.touched) {
            if (x.invalid) {
                if (x.errors.required) {
                    return "Ovo polje je obavezno";
                }
                else if (x.errors.minlength) {
                    return "Unos je prekratak";
                }
                else if (x.errors.pattern) {
                    return "Unos mora biti pozitivan broj";
                }
                else if (x.errors.min) {
                    return "Minimalni unos je " + x.errors.min.min;
                }
                else if (x.errors.max) {
                    return "Maksimalni unos je " + x.errors.max.max;
                }
                else {
                    return "Pogresan unos";
                }
            }
        }
        else {
            return false;
        }
    };
    FormComponent.prototype.changeSelect = function ($event, name) {
        var _a;
        var d = $event;
        this.form.patchValue((_a = {}, _a[name] = d, _a));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FormComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FormComponent.prototype, "path", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FormComponent.prototype, "schemes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], FormComponent.prototype, "id", void 0);
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-form",
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/Basic/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/Basic/form/form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/Basic/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/Basic/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Jhc2ljL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Basic/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/Basic/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-home\">\n  <div class=\"content\">\n    <div class=\"top\">\n      <div class=\"links\">\n        <span (click)=\"scrollToElement(about)\" class=\"l\">O PROJEKTU</span>\n        <span routerLink='/kalkulator' class=\"l\">KALKULATOR</span>\n        <span routerLink='/podesavanja' class=\"l\">PODEŠAVANJA</span>\n        <span class=\"l\">KONTAKT</span>\n      </div>\n      <div class=\"c-top-right\"></div>\n    </div>\n    <div class=\"center\"></div>\n    <div class=\"bottom\">\n      <div class=\"text\">\n        <div class=\"text-f\">\n          Jednostavan način primene tradicionalnih postupaka i znanja\n        </div>\n        <div class=\"text-f\">\n          pomoću inovativnih rešenja i moderne tehnologije\n        </div>\n      </div>\n      <div class=\"down\">\n        <div class=\"left\">\n          <div (mouseenter)=\"scrollToElement(about)\" class=\"l\">O projektu</div>\n          <div class=\"c-bottom-right\"></div>\n        </div>\n      </div>\n      <div class=\"c-top-left\"></div>\n      <div class=\"c-bottom-left\"></div>\n    </div>\n  </div>\n</div>\n\n<div #about class=\"container-about\">\n  <div class=\"content\">\n    <div class=\"top\">\n      <div class=\"left\"></div>\n      <div class=\"right\">\n        <div class=\"line\"></div>\n        <div class=\"color\"></div>\n        <div class=\"ornament\"></div>\n      </div>\n    </div>\n    <div class=\"center\">\n      \n      <div class=\"middle\">\n        <div class=\"title\">\n          Tehnologija omogućava preciznost,<br> polaznu tačku modernog grafičkog <br>\n          proizvoda.\n        </div>\n        <div class=\"text\">\n          Gridulator je veb aplikacija koja omogućava precizno izračunavanje\n          cene štampe. Rađena je u sklopu diplomskog rada koji za cilj ima da\n          pokaže prednosti programerskih tehnologija na konkretnom primeru\n          izrade kalkulatora koji je neizostavni deo procesa štampe. Tehnologije\n          korišćene za izradu aplikacije su:\n        </div>\n        <div class=\"tehnologies\">\n          <div class=\"t\">\n            <div class=\"img-angular\"></div>\n            <div class=\"title\">Angular</div>\n          </div>\n          <div class=\"t\">\n            <div class=\"img-mysql\"></div>\n            <div class=\"title\">MySQL</div>\n          </div>\n          <div class=\"t\">\n            <div class=\"img-java\"></div>\n            <div class=\"title\">Java</div>\n          </div>\n          <div class=\"t\">\n            <div class=\"img-less\"></div>\n            <div class=\"title\">Less</div>\n          </div>\n        </div>\n        <div class=\"text-contact\">\n          <span class=\"regular\">Imate pitanja? Javite se na </span>\n          <span class=\"mail\">mladen.potrebic@gmail.com</span>\n         \n        </div>\n      </div>\n     \n    </div>\n    <div class=\"bottom\">\n      <div class=\"watermark\">\n        Copyright © 2019\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Basic/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/Basic/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.scrollToElement = function ($element) {
        $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/Basic/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/Basic/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/Basic/list/list.component.css":
/*!***********************************************!*\
  !*** ./src/app/Basic/list/list.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Jhc2ljL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Basic/list/list.component.html":
/*!************************************************!*\
  !*** ./src/app/Basic/list/list.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"select-list\">\n    <div (click)=\"listDisplay = !listDisplay\" class=\"input\"><span class=\"input-data\" *ngIf=\"choise\">{{choise}}</span> </div>\n    <div class=\"list-btn\" [ngClass]=\"{'list-btn-active': listDisplay}\" (click)=\"listDisplay = !listDisplay\"></div>\n    <div *ngIf=\"listDisplay\" class=\"options-box\" >\n      <span *ngFor=\"let item of list\" (click)=\"send(item)\" [ngClass]=\"{'select' : item[scheme.attribute]==choise}\">{{ item[scheme.attribute] }}</span>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/Basic/list/list.component.ts":
/*!**********************************************!*\
  !*** ./src/app/Basic/list/list.component.ts ***!
  \**********************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/rest.service */ "./src/app/services/rest.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListComponent = /** @class */ (function () {
    function ListComponent(rs) {
        this.rs = rs;
        this.listEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Html
        this.listDisplay = false;
    }
    ListComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    ListComponent.prototype.loadData = function () {
        var _this = this;
        // load list
        this.rs.getAll(this.scheme.listPath).subscribe(function (d) {
            _this.list = d;
        });
    };
    ListComponent.prototype.send = function (o) {
        // Send change
        this.listEvent.emit(o);
        this.listDisplay = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ListComponent.prototype, "scheme", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ListComponent.prototype, "choise", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ListComponent.prototype, "listEvent", void 0);
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-list",
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/Basic/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/Basic/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/Basic/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/Basic/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Jhc2ljL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Basic/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/Basic/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n      <form class=\"form-signin\" (ngSubmit)=\"login()\">\n        <h2 class=\"form-signin-heading\">Please sign in</h2>\n        <label for=\"username\" class=\"sr-only\">Username</label>\n        <input type=\"text\" id=\"username\" class=\"form-control\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Username\"\n          required autofocus>\n        <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n        <input type=\"password\" id=\"inputPassword\" class=\"form-control\" name=\"username\" [(ngModel)]=\"user.password\" placeholder=\"Password\"\n          required>\n        <button class=\"btn btn-primary btn-block\" type=\"submit\">Sign in</button>\n      </form>\n      <div *ngIf=wrongUsernameOrPass class=\"alert alert-warning box-msg\" role=\"alert\">\n        Wrong username or password.\n      </div>\n    </div>\n    <div class=\"col-md-3\"></div>\n  </div>\n</div> -->\n\n<div class=\"container-login\">\n  <div class=\"login\">\n    <div class=\"icon\"></div>\n    <div class=\"text\">\n      Podešavanja su dostupna samo administratoru.\n      <br> Molimo Vas ulogujte se.\n    </div>\n    <form (ngSubmit)=\"login()\">\n      <div class=\"input-box\">\n        <label for=\"username\">Ime:</label>\n        <input  name=\"username\" [(ngModel)]=\"user.username\" id=\"username\" type=\"text\">\n      </div>\n      <div class=\"input-box\">\n        <label for=\"inputPassword\">Šifra:</label>\n        <input #input id=\"inputPassword\" (blur)=\"eye=false\" (focus)=\"eye=true\"  name=\"password\" (input)=\"onChangeValue($event.data)\" [(ngModel)]=\"sp\" type=\"text\">\n        <div (mouseenter)='showPassword()' (mouseleave)='hidePassword()' (click)=\"hidePassword()\" *ngIf=\"eye\" class=\"eye\"></div>\n      </div>\n      <div class=\"error\">\n        <span *ngIf=wrongUsernameOrPass>Pogrešni nadimak ili šifra</span>\n      </div>\n      \n      <button type=\"submit\">Ulaz</button>\n    </form>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/Basic/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/Basic/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_security_authentication_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services-security/authentication-service.service */ "./src/app/services-security/authentication-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.password = '';
        this.secretPassword = 'X²+2XY+Y²=(X+Y)² ';
        this.sp = '';
        this.passwordI = 0;
        this.togglePassword = '';
        this.eye = false;
        this.user = {};
        this.wrongUsernameOrPass = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authenticationService.login(this.user.username, this.password)
            .subscribe(function (data) {
            var token = data && data['token'];
            var jwtData = token.split('.')[1];
            var decodedJwtJsonData = window.atob(jwtData);
            var decodedJwtData = JSON.parse(decodedJwtJsonData);
            var role = decodedJwtData.role;
            localStorage.setItem('currentUser', JSON.stringify({
                username: 'admin',
                roles: role,
                token: token
            }));
            _this.router.navigate(['podesavanja']);
            return true;
        }, function (error) {
            _this.wrongUsernameOrPass = true;
            _this.password = '';
            _this.sp = '';
            _this.passwordI = 0;
            _this.input.nativeElement.focus();
            return false;
        });
    };
    LoginComponent.prototype.onChangeValue = function (value) {
        if (!value) {
            this.password = this.password.slice(0, -1);
            if (this.passwordI == 0) {
                this.passwordI = 16;
            }
            else {
                this.passwordI--;
            }
        }
        else {
            this.password += value;
            this.sp = this.sp.slice(0, -1);
            this.sp = this.sp + this.secretPassword[this.passwordI];
            if (this.passwordI == 16) {
                this.passwordI = 0;
            }
            else {
                this.passwordI++;
            }
        }
    };
    LoginComponent.prototype.showPassword = function () {
        this.togglePassword = this.sp;
        this.sp = this.password;
    };
    LoginComponent.prototype.hidePassword = function () {
        this.sp = this.togglePassword;
    };
    LoginComponent.prototype.focusInput = function () {
        this.input.nativeElement.focus();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("input"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LoginComponent.prototype, "input", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/Basic/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/Basic/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_security_authentication_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/Basic/navigation/navigation.component.css":
/*!***********************************************************!*\
  !*** ./src/app/Basic/navigation/navigation.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Jhc2ljL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Basic/navigation/navigation.component.html":
/*!************************************************************!*\
  !*** ./src/app/Basic/navigation/navigation.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"nav-screen-small\"\n  (mouseleave)=\" showHideBigNav()\"\n>\n  <div class=\"logo\"></div>\n  <div   (mouseenter)=\" showHideBigNav()\" *ngIf=\"!bigNavigation\" class=\"nav-icon\"></div>\n  <div *ngIf=\"bigNavigation\" class=\"nav-icons\">\n    <div routerLink='/home' class=\"home\"></div>\n    <div routerLink='/kalkulator' class=\"calculator\"></div>\n    <div routerLink='/podesavanja' class=\"settings\"></div>\n    <div class=\"mail\"></div>\n  </div>\n  <div class=\"signature\"></div>\n</div>\n\n\n\n\n<!-- <div\n  class=\"nav-screen-big\"\n  [hidden]=\"!bigNavigation\"\n  (mouseleave)=\"showHideBigNav()\"\n>\n  <div class=\"logo\"></div>\n  <div class=\"title\">\n    CONVOLUTE\n  </div>\n  <div class=\"line\"><div class=\"l\"></div></div>\n  <div class=\"navlist\">\n    <a>O PROJEKTU</a>\n    <a>KALKULATOR</a>\n    <a>IZVESTAJI</a>\n    <a>PODEŠAVANJA</a>\n  </div>\n</div> -->\n\n<!-- Navigation phone -small  -->\n<!-- <div class=\"nav-mob-small\">\n  <div class=\"logo\"></div>\n  <div class=\"title\">Convolute</div>\n  <div class=\"navigation-btn\" (click)=\"showHidePhonegNav()\"></div>\n</div> -->\n\n<!-- <div class=\"container-navigation\">\n  <div class=\"left\"></div>\n  <div class=\"center\">\n    <div class=\"logo\">GRID</div>\n    <div class=\"nav-list\">\n      <div class=\"nav\" (mouseover)=\"settingListView = false\">\n        <div class=\"text\">O projektu</div>\n      </div>\n      <div class=\"nav\" (mouseover)=\"settingListView = true\">\n        <div class=\"text\">Podešavanje</div>\n      </div>\n      <div class=\"nav\" (mouseover)=\"settingListView = false\">\n        <div class=\"text\">Kalkulator</div>\n      </div>\n      <div class=\"nav\">\n        <div class=\"text\">Izveštaji</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"right\"></div>\n</div>\n\n<div class=\"container-navigation-settings\"\n  *ngIf=\"settingListView\"\n  (mouseover)=\"settingListView = true\"\n  (mouseleave)=\"settingListView = false\"\n>\n  <div class=\"list-items\">\n    <div *ngFor=\"let item of settingList\" class=\"item\" [routerLink]=\"item.link\">\n      <div class=\"img\">\n        <img src=\"assets/117/{{ item.img }}.svg\" />\n      </div>\n      <div class=\"title\">\n        {{ item.name }}\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container-blank\" *ngIf=\"settingListView\"></div> -->\n\n<!-- <div class=\"container-list\">\n  <div class=\"left\" (mouseenter)=\"moveToLeft()\" (mouseleave)=\"stopMove()\"></div>\n  <div class=\"center\">\n    <div class=\"header\">\n      <div class=\"title\">\n        Papiri\n      </div>\n      <div class=\"tools\">\n        <div class=\"search\"></div>\n      </div>\n    </div>\n    <div #panel class=\"container-table\">\n      <div class=\"fix\">\n        <table class=\"table-p-fixed\">\n          <thead>\n            <tr>\n              <th>Naziv Papira</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr\n              [class.active]=\"trHover == 1\"\n              (mouseover)=\"trHover = 1\"\n              (mouseleave)=\"trHover = 0\"\n            >\n              <td>\n                <span [class.delete-active]=\"trHover == 1\" class=\"delete\"></span\n                >Muckasti\n              </td>\n            </tr>\n            <tr>\n              <td><span class=\"delete\"></span>Muckasti</td>\n            </tr>\n            <tr>\n              <td><span class=\"delete\"></span>Muckasti</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <table class=\"table-p-scroll\">\n        <thead>\n          <tr>\n            <th>Osobina</th>\n            <th>Osobina</th>\n            <th>Osobina</th>\n            <th>Osobina</th>\n            <th>Osobina</th>\n            <th>Osobina</th>\n            <th>Osobina</th>\n            <th>Osobina</th>\n            <th>Osobina</th>\n            <th>Osobina</th>\n            <th>Osobina</th>\n            <th>Osobina</th>\n            <th>Osobina</th>\n            <th>Osobina</th>\n            <th>Osobina</th>\n            <th>Osobina</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr\n            [class.active]=\"trHover == 1\"\n            (mouseover)=\"trHover = 1\"\n            (mouseleave)=\"trHover = 0\"\n          >\n            <td>nesto</td>\n            <td>nesto</td>\n            <td>nesto</td>\n            <td>nesto</td>\n            <td>nesto</td>\n            <td>nesto</td>\n            <td>nesto</td>\n            <td>nesto</td>\n            <td>nesto</td>\n            <td>nesto</td>\n            <td>nesto</td>\n            <td>nesto</td>\n            <td>nesto</td>\n            <td>nesto</td>\n            <td>nesto</td>\n            <td>nesto</td>\n          </tr>\n          <tr>\n            <td>nesto</td>\n            <td>nesto</td>\n            <td>nesto</td>\n            <td>nesto</td>\n            <td>nesto</td>\n            <td>nesto</td>\n            <td>nesto</td>\n            <td>nesto</td>\n            <td>nesto</td>\n            <td>nesto</td>\n            <td>nesto</td>\n            <td>nesto</td>\n            <td>nesto</td>\n            <td>nesto</td>\n            <td>nesto</td>\n            <td>nesto</td>\n          </tr>\n          <tr>\n            <td>nesto</td>\n            <td>nesto</td>\n            <td>nesto</td>\n            <td>nesto</td>\n            <td>nesto</td>\n            <td>nesto</td>\n            <td>nesto</td>\n            <td>nesto</td>\n            <td>nesto</td>\n            <td>nesto</td>\n            <td>nesto</td>\n            <td>nesto</td>\n            <td>nesto</td>\n            <td>nesto</td>\n            <td>nesto</td>\n            <td>nesto</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"footer\">\n      <div class=\"pagination\">\n        <div class=\"first\"></div>\n        <div class=\"prev\">PRED</div>\n        <div class=\"current\">01</div>\n        <div class=\"line\"></div>\n        <div class=\"total\">29</div>\n        <div class=\"next\">SLED</div>\n        <div class=\"last\"></div>\n      </div>\n    </div>\n  </div>\n  <div\n    class=\"right\"\n    (mouseenter)=\"moveToRight()\"\n    (mouseleave)=\"stopMove()\"\n  ></div>\n</div>\n\n<div class=\"container-footer-btn\">\n  <div class=\"moon\">\n    <div class=\"symbol\">+</div>\n    <div class=\"text\">Dodaj Papir</div>\n  </div>\n</div> -->\n\n<div class=\"container-form\" style=\"display: none\">\n  <div class=\"center\">\n    <div class=\"header\">\n      PAPIRI\n    </div>\n    <form [formGroup]=\"userForm\" (ngSubmit)=\"send()\">\n      <div class=\"formControl\">\n        <label>\n          Name\n        </label>\n        <div class=\"help-box\" *ngIf=\"help == 'name'\" (mouseleave)=\"help = ''\">\n          <div class=\"content\">Potrebno je uneti ime papira i obrazloziti</div>\n        </div>\n        <div class=\"input-box\">\n          <input type=\"text\" formControlName=\"name\" />\n        </div>\n        <!-- <small *ngIf=\"name.invalid && name.touched\">Valitadion msg</small> -->\n      </div>\n      <div class=\"formControl formControl-modern\">\n        <label> email </label>\n        <div class=\"input-box\">\n          <input type=\"text\" formControlName=\"name\" placeholder=\"First name\" />\n        </div>\n        <div class=\"validation\">\n          <small>Valitadion msg</small>\n        </div>\n      </div>\n      <div class=\"formControl formControl-modern\">\n        <label> email </label>\n        <div class=\"input-box\">\n          <input type=\"text\" formControlName=\"name\" />\n          <div class=\"valute\">RSD</div>\n        </div>\n      </div>\n      <div class=\"formControl\">\n        <label> email </label>\n        <div class=\"input-box\">\n          <input type=\"text\" formControlName=\"name\" />\n        </div>\n      </div>\n      <div class=\"formControl\">\n        <label> email </label>\n        <div class=\"input-box\">\n          <input type=\"text\" formControlName=\"name\" />\n        </div>\n      </div>\n      <div class=\"formControl\">\n        <label> email </label>\n        <div class=\"input-box\">\n          <input type=\"text\" formControlName=\"name\" />\n        </div>\n      </div>\n      <div class=\"formControl\">\n        <label> email </label>\n        <div class=\"input-box\">\n          <input type=\"text\" formControlName=\"name\" />\n        </div>\n      </div>\n      <div class=\"formControl\">\n        <label> email </label>\n        <div class=\"input-box\">\n          <input type=\"text\" formControlName=\"name\" />\n        </div>\n      </div>\n\n      <div class=\"section\">\n        <div class=\"title\">\n          Boje i tako to\n        </div>\n        <div class=\"line\"><div class=\"l\"></div></div>\n      </div>\n\n      <div class=\"formControl\">\n        <label> email </label>\n        <div class=\"input-box\">\n          <input type=\"text\" formControlName=\"name\" />\n        </div>\n      </div>\n      <div class=\"formControl\">\n        <label> email </label>\n        <div class=\"input-box\">\n          <input type=\"text\" formControlName=\"name\" />\n        </div>\n        <!-- <small>Valitadion msg</small> -->\n      </div>\n      <div class=\"formControl\">\n        <label> email </label>\n        <div class=\"input-box\">\n          <input type=\"text\" formControlName=\"name\" />\n        </div>\n        <!-- <small>Valitadion msg</small> -->\n      </div>\n      <!-- <div>\n          <label> size </label>\n          <select formControlName=\"size\">\n            <option value=\"small\">small</option>\n            <option value=\"small\">medium</option>\n            <option value=\"small\">large</option>\n          </select>\n          <small>Valitadion msg</small>\n        </div> -->\n      <div class=\"submit\">\n        <div class=\"right\">\n          <button type=\"submit\">SAČUVAJ</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Basic/navigation/navigation.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/Basic/navigation/navigation.component.ts ***!
  \**********************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _services_uredjaji_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/uredjaji.service */ "./src/app/services/uredjaji.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationComponent = /** @class */ (function () {
    //PROBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
    //public uredjajX: Uredjaj;
    function NavigationComponent(fb, uredjajService) {
        this.uredjajService = uredjajService;
        this.darinka = "Ostojic";
        this.trHover = 0;
        this.settingList = [
            { name: "Papiri", link: "/podesavanja/papiri", img: "papers_icon_ver1" },
            { name: "Mašine", link: "/podesavanja/masinezastampu", img: "printers_icon_ver1" },
            { name: "Digitalna Š.", link: "/podesavanja/digitalnastampa", img: "digitalPrinting_icon_ver1" },
            { name: "Boje", link: "/podesavanja/boje", img: "colors_icon_ver1" },
            { name: "Iz. Mediji", link: "/podesavanja/izlazni-mediji", img: "outputMedia_icon_ver1" },
            { name: "Raster", link: "/podesavanja/pzp", img: "raster_icon_ver1" },
            { name: "Rezanje", link: "/podesavanja/rezanje", img: "cutting_icon_ver1" },
            { name: "Savijanje", link: "/podesavanja/savijanje", img: "folding_icon_ver1" },
            { name: "Sito Štampa", link: "/podesavanja/sitostampa", img: "printers_icon_ver1" },
            { name: "PPŠ", link: "/podesavanja/pripremastampe/1", img: "preparation_icon_ver1" },
            { name: "Oprema", link: "/podesavanja/opreme", img: "equipment_icon_ver1" },
            { name: "Ostalo", link: "/podesavanja/ostalo", img: "other_icon_ver1" }
        ];
        //html
        this.settingListView = false;
        this.settingListViewF = false;
        this.bigNavigation = false;
        this.userForm = fb.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: null,
            size: null
        });
        this.send();
    }
    Object.defineProperty(NavigationComponent.prototype, "name", {
        get: function () {
            return this.userForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    NavigationComponent.prototype.send = function () {
    };
    NavigationComponent.prototype.reset = function () {
        this.userForm.reset();
    };
    NavigationComponent.prototype.ngOnInit = function () {
        // this.loadData();
    };
    // loadData(){
    //   this.uredjajService.getOne('opreme',1).subscribe((d)=>this.uredjajX = d as Uredjaj);
    //   this.uredjajService.getOne('opreme', 1).subscribe(
    //     (data) => {
    //       this.uredjajX=data as Uredjaj;
    //       console.log(this.uredjajX);
    //     }
    //   )
    // }
    NavigationComponent.prototype.moveToRight = function () {
        var _this = this;
        this.p = setInterval(function () {
            _this.panel.nativeElement.scrollLeft += 20;
        }, 50);
    };
    NavigationComponent.prototype.moveToLeft = function () {
        var _this = this;
        this.p = setInterval(function () {
            _this.panel.nativeElement.scrollLeft -= 20;
        }, 50);
    };
    NavigationComponent.prototype.stopMove = function () {
        clearInterval(this.p);
    };
    NavigationComponent.prototype.showHideBigNav = function () {
        this.bigNavigation = !this.bigNavigation;
        console.log(this.bigNavigation);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("probaa"),
        __metadata("design:type", String)
    ], NavigationComponent.prototype, "proba", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('panel', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NavigationComponent.prototype, "panel", void 0);
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-navigation",
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/Basic/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/Basic/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_uredjaji_service__WEBPACK_IMPORTED_MODULE_0__["UredjajiService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/Basic/pagination/pagination.component.css":
/*!***********************************************************!*\
  !*** ./src/app/Basic/pagination/pagination.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Jhc2ljL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Basic/pagination/pagination.component.html":
/*!************************************************************!*\
  !*** ./src/app/Basic/pagination/pagination.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"totalItems > 0\" class=\"container-pagination\">\n    <div class=\"center\">\n        <div class=\"pagination\">\n            <div class=\"first\" (click)=\"previous() \"></div>\n            <div class=\"prev\" (click)=\"firstPage()\">PRVA</div>\n            <div class=\"current\"><span *ngIf=\"currentPage<10\">0</span>{{currentPage+1}}</div>\n            <div class=\"line\"></div>\n            <div class=\"total\"><span *ngIf=\"totalPages<10\">0</span>{{totalPages}}</div>\n            <div class=\"next\" (click)=\"lastPage()\" >POSL</div>\n            <div class=\"last\" (click)=\"nextPage() \"></div>\n          </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/Basic/pagination/pagination.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/Basic/pagination/pagination.component.ts ***!
  \**********************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.eventEmiter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageEmiter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.currentPage = 0;
    }
    PaginationComponent.prototype.ngOnInit = function () {
        this.totalPages = Math.ceil((this.totalItems / this.itemPerPage));
    };
    PaginationComponent.prototype.ngOnChanges = function (changes) {
        var totalItems = changes.totalItems;
        this.totalItems = totalItems.currentValue;
        this.totalPages = Math.ceil((this.totalItems / this.itemPerPage));
    };
    PaginationComponent.prototype.nextPage = function () {
        if (this.totalPages - 1 > this.currentPage) {
            this.currentPage += 1;
            this.pageEmiter.emit(this.currentPage);
        }
    };
    PaginationComponent.prototype.previous = function () {
        if (this.currentPage > 0) {
            this.currentPage -= 1;
            this.pageEmiter.emit(this.currentPage);
        }
    };
    PaginationComponent.prototype.firstPage = function () {
        this.currentPage = 0;
        this.pageEmiter.emit(this.currentPage);
    };
    PaginationComponent.prototype.lastPage = function () {
        if (this.totalPages <= 1) {
            this.currentPage = 0;
        }
        else {
            this.currentPage = this.totalPages - 1;
        }
        this.pageEmiter.emit(this.currentPage);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "totalItems", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "itemPerPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "eventEmiter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "pageEmiter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "currentPage", void 0);
    PaginationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/app/Basic/pagination/pagination.component.html"),
            styles: [__webpack_require__(/*! ./pagination.component.css */ "./src/app/Basic/pagination/pagination.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/Basic/search/search.component.css":
/*!***************************************************!*\
  !*** ./src/app/Basic/search/search.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Jhc2ljL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Basic/search/search.component.html":
/*!****************************************************!*\
  !*** ./src/app/Basic/search/search.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@animation_1]=\"isSearchOpen\" class=\"container-form container-search\">\n  <div  class=\"center\">\n    <div class=\"header\">\n      PRETRAGA\n    </div>\n    <form [formGroup]=\"form\" (ngSubmit)=\"send()\" >\n      <div *ngFor=\"let s of searches\" class=\"formControl\" [ngClass]=\"{'formControl-modern': s.currency}\" >\n        <label>\n          {{s.displayName}}\n          <span class=\"help-btn\">\n            <span\n              class=\"help\"\n              *ngIf=\"s.help && help != s.help\"\n              (click)=\"help = s.help\"\n            ></span>\n            <span\n              class=\"help-close\"\n              *ngIf=\"help == s.help\"\n              (click)=\"help = ''\"\n            ></span>\n          </span>\n        </label>\n        <div class=\"help-box\" *ngIf=\"help == s.help\" (mouseleave)=\"help = ''\">\n          <div class=\"content\">\n            {{s.help}} <span *ngIf=\"s.example\" >Primer: {{s.example}} </span>\n          </div>\n        </div>\n        <div class=\"input-box\">\n          <input type=\"text\" formControlName=\"{{s.name}}\" />\n          <div *ngIf=\"s.currency\" class=\"valute\">{{s.currency}}</div>\n        </div>\n        <div *ngIf=\"test(s.name)\" class=\"validation\">\n          <small>! {{ test(s.name) }}</small>\n        </div> \n      </div>\n      <div class=\"submit\">\n        <div class=\"right\">\n          <button [disabled]=\"form.invalid\" type=\"submit\">PRETRAŽI</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/Basic/search/search.component.ts":
/*!**************************************************!*\
  !*** ./src/app/Basic/search/search.component.ts ***!
  \**************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(fb) {
        this.fb = fb;
        this.searchesEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // html
        this.help = '';
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    // kreiranje forme
    SearchComponent.prototype.createForm = function () {
        this.form = this.fb.group({});
        for (var _i = 0, _a = this.searches; _i < _a.length; _i++) {
            var s = _a[_i];
            this.form.addControl(s.name, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](s.value, this.addValidators(s)));
        }
    };
    // slanje ispunjene forme
    SearchComponent.prototype.send = function () {
        for (var _i = 0, _a = this.searches; _i < _a.length; _i++) {
            var s = _a[_i];
            if (this.form.get(s.name)) {
                s.value = this.form.get(s.name).value;
            }
        }
        this.searchesEvent.emit(this.searches);
    };
    // dodavanje validatora za polja
    SearchComponent.prototype.addValidators = function (s) {
        var r = [];
        if (s.minLength) {
            r.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(s.minLength));
        }
        if (s.minValue) {
            r.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(s.minValue));
        }
        if (s.maxValue) {
            r.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(s.maxValue));
        }
        if (s.currency) {
            r.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^-?(0|[1-9]\d*)?$/));
        }
        return r;
    };
    // Provera gresaka 
    SearchComponent.prototype.test = function (i) {
        var x = this.form.get(i);
        if (x.touched) {
            if (x.invalid) {
                if (x.errors.required) {
                    return "Ovo polje je obavezno";
                }
                else if (x.errors.minlength) {
                    return "Unos je prekratak";
                }
                else if (x.errors.pattern) {
                    return 'Unos mora biti pozitivan broj';
                }
                else {
                    return "Pogresan unos";
                }
            }
        }
        else {
            return false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "searches", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "searchesEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "isSearchOpen", void 0);
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/Basic/search/search.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('animation_1', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, display: 'none' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('1 => 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('200ms')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('200ms'))
                ])
            ],
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/Basic/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/Basic/table/table.component.css":
/*!*************************************************!*\
  !*** ./src/app/Basic/table/table.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Jhc2ljL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Basic/table/table.component.html":
/*!**************************************************!*\
  !*** ./src/app/Basic/table/table.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<div class=\"container-header\">\n  <div class=\"center\">\n    <div class=\"header\">\n      <div class=\"left\"></div>\n      <div class=\"title\"> {{ title }} </div>\n      <div class=\"options\">\n        <div class=\"search\" (click)=\"toggleSearch()\"></div>\n        <div class=\"refresh\" (click)=\"refresh()\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Search -->\n<app-search [searches]=\"searches\" [isSearchOpen]=\"isSearchOpen\" (searchesEvent)=\"filter($event)\" ></app-search>\n\n<!-- List -->\n<div class=\"container-list\">\n  <div class=\"left\" (mouseenter)=\"moveToLeft()\" (mouseleave)=\"stopMove()\"></div>\n  <div class=\"center\">\n    <div #table class=\"container-table first-col-big\">\n      <div class=\"fix\">\n        <table class=\"table-p-fixed\">\n          <thead>\n            <tr>\n              <th>\n                {{ schemes[0].displayName }}\n                <span class=\"sort\">\n                  <span\n                    (click)=\"changeSort(schemes[0].name, 'asc')\"\n                    class=\"asc\"\n                    [ngClass]=\"{\n                      'asc-active': checkSort(schemes[0].name, 'asc')\n                    }\"\n                  ></span>\n                  <span\n                    (click)=\"changeSort(schemes[0].name, 'desc')\"\n                    class=\"desc\"\n                    [ngClass]=\"{\n                      'desc-active': checkSort(schemes[0].name, 'desc')\n                    }\"\n                  ></span>\n                </span>\n              </th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr\n              *ngFor=\"let s of stock; let i = index\"\n              [class.active]=\"trHover == i\"\n              (mouseover)=\"trHover = i\"\n              (mouseleave)=\"trHover = -1\"\n            >\n              <td>\n                <span\n                  [class.delete-active]=\"trHover == i\"\n                  class=\"delete\"\n                  (click)=\"deleteItem(s.id)\"\n                ></span>\n                <p (click) = \"linkToChange(s.id)\" >\n                  {{ s[schemes[0].name] }}\n                </p>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <table class=\"table-p-scroll\">\n        <thead>\n          <tr>\n            <th *ngFor=\"let t of schemes | slice: 1; let i = index\">\n              {{ t.displayName }} <span *ngIf=\"t.currency\">({{t.currency}})</span>\n              <span class=\"sort\">\n                <span\n                  (click)=\"changeSort(t.name, 'asc')\"\n                  class=\"asc\"\n                  [ngClass]=\"{ 'asc-active': checkSort(t.name, 'asc') }\"\n                ></span>\n                <span\n                  (click)=\"changeSort(t.name, 'desc')\"\n                  class=\"desc\"\n                  [ngClass]=\"{ 'desc-active': checkSort(t.name, 'desc') }\"\n                ></span>\n              </span>\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr\n            *ngFor=\"let s of stock; let i = index\"\n            [class.active]=\"trHover == i\"\n            (mouseover)=\"trHover = i\"\n            (mouseleave)=\"trHover = -1\"\n            (click) = \"linkToChange(s.id)\"\n            \n          >\n            <td *ngFor=\"let t of schemes | slice: 1; let i = index\">\n              <span *ngIf=\"objectInObject(t)\"> {{ s[t.name][t.attribute] }} </span>\n              <span *ngIf=\"!objectInObject(t)\"> {{ s[t.name] }} </span>\n             \n              \n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div *ngIf=\"totalItems == 0\" class=\"message\">\n      Nažalost nije pronjena nijedna stavka za zadati kriterijum.\n      <span (click)=\"refresh()\">Pokusajte ponovo.</span>\n    </div>\n  </div>\n  <div\n    class=\"right\"\n    (mouseenter)=\"moveToRight()\"\n    (mouseleave)=\"stopMove()\"\n  ></div>\n</div>\n\n<!-- Pagination-->\n<app-pagination *ngIf=\"stock\" (pageEmiter)=\"changePage($event)\" [totalItems]=\"totalItems\" [itemPerPage]=\"itemPerPage\" [currentPage]=\"currentPage\"></app-pagination>\n\n<!-- Footer -->\n<div class=\"container-footer-btn\">\n  <div [routerLink]='routerLinkA' class=\"moon\">\n    <div class=\"symbol\">+</div>\n    <div class=\"text\">Dodaj</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Basic/table/table.component.ts":
/*!************************************************!*\
  !*** ./src/app/Basic/table/table.component.ts ***!
  \************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/rest.service */ "./src/app/services/rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TableComponent = /** @class */ (function () {
    function TableComponent(rs, router) {
        this.rs = rs;
        this.router = router;
        // Html DOM 
        this.isSearchOpen = false;
        // table hover
        this.trHover = -1;
    }
    TableComponent.prototype.ngOnInit = function () {
        this.preparation();
        this.loadData();
    };
    TableComponent.prototype.preparation = function () {
        //this.path ="opreme";
        this.sortElement = 'id';
        this.sortOrder = 'asc';
        this.currentPage = 0;
        this.itemPerPage = 12;
        this.routerLinkA = '/podesavanja/' + this.path + '/dodaj';
    };
    TableComponent.prototype.loadData = function () {
        var _this = this;
        this.rs.getAllP(this.path, this.currentPage, this.itemPerPage, this.sortElement, this.sortOrder, this.searches).subscribe(function (d) {
            _this.stock = d.body;
            _this.totalItems = +d.headers.get('X-Total-Count');
        });
    };
    TableComponent.prototype.filter = function ($event) {
        this.searches = $event;
        this.currentPage = 0;
        this.loadData();
    };
    TableComponent.prototype.changePage = function ($event) {
        this.currentPage = $event;
        this.loadData();
    };
    TableComponent.prototype.deleteItem = function (id) {
        var _this = this;
        this.rs.delete(this.path, id).subscribe(function () { _this.loadData(); });
    };
    TableComponent.prototype.changeSort = function (sortE, sortO) {
        this.sortElement = sortE;
        this.sortOrder = sortO;
        this.currentPage = 0;
        this.currentPage = 0;
        this.loadData();
    };
    TableComponent.prototype.checkSort = function (sortE, sortO) {
        if (this.sortElement == sortE && this.sortOrder == sortO) {
            return true;
        }
        else {
            return false;
        }
    };
    TableComponent.prototype.refresh = function () {
        this.preparation();
        for (var _i = 0, _a = this.searches; _i < _a.length; _i++) {
            var s = _a[_i];
            s.value = null;
        }
        if (this.isSearchOpen) {
            this.toggleSearch();
        }
        this.loadData();
    };
    TableComponent.prototype.linkToChange = function (id) {
        this.router.navigate(['/podesavanja/' + this.path + '/' + id]);
    };
    TableComponent.prototype.objectInObject = function (s) {
        if (s.listPath) {
            return true;
        }
        else {
            return false;
        }
    };
    // table left - right
    TableComponent.prototype.moveToRight = function () {
        var _this = this;
        this.timer = setInterval(function () {
            _this.table.nativeElement.scrollLeft += 30;
        }, 50);
    };
    TableComponent.prototype.moveToLeft = function () {
        var _this = this;
        this.timer = setInterval(function () {
            _this.table.nativeElement.scrollLeft -= 30;
        }, 50);
    };
    TableComponent.prototype.stopMove = function () {
        clearInterval(this.timer);
    };
    // Toggle search
    TableComponent.prototype.toggleSearch = function () {
        var _this = this;
        if (this.isSearchOpen) {
            setTimeout(function () {
                _this.isSearchOpen = false;
            }, 200);
        }
        else {
            setTimeout(function () {
                _this.isSearchOpen = true;
            }, 200);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "path", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TableComponent.prototype, "schemes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TableComponent.prototype, "searches", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('table', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TableComponent.prototype, "table", void 0);
    TableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/Basic/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.css */ "./src/app/Basic/table/table.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <app-navigation></app-navigation>\n  <!-- <app-oprema></app-oprema> -->\n  <router-outlet></router-outlet>\n</div>\n\n<div class=\"mob-security\">\n  <div class=\"text\">:( Nažalost ovo je još uvek razvojna verzija sajta i nije dostupan na mobilnim uređajima.</div>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.nameList = ['Mladen', 'Nemanja', 'Dejan', 'Mark'];
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _components_podesavanja_priprema_stampe_priprema_stampe_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/podesavanja/priprema-stampe/priprema-stampe.component */ "./src/app/components/podesavanja/priprema-stampe/priprema-stampe.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Basic_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Basic/navigation/navigation.component */ "./src/app/Basic/navigation/navigation.component.ts");
/* harmony import */ var _components_podesavanja_podesavanja_podesavanja_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/podesavanja/podesavanja/podesavanja.component */ "./src/app/components/podesavanja/podesavanja/podesavanja.component.ts");
/* harmony import */ var _services_uredjaji_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/uredjaji.service */ "./src/app/services/uredjaji.service.ts");
/* harmony import */ var _components_podesavanja_papiri_papiri_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/podesavanja/papiri/papiri.component */ "./src/app/components/podesavanja/papiri/papiri.component.ts");
/* harmony import */ var _components_podesavanja_masine_masine_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/podesavanja/masine/masine.component */ "./src/app/components/podesavanja/masine/masine.component.ts");
/* harmony import */ var _components_podesavanja_boje_boje_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/podesavanja/boje/boje.component */ "./src/app/components/podesavanja/boje/boje.component.ts");
/* harmony import */ var _components_podesavanja_izlazni_mediji_izlazni_mediji_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/podesavanja/izlazni-mediji/izlazni-mediji.component */ "./src/app/components/podesavanja/izlazni-mediji/izlazni-mediji.component.ts");
/* harmony import */ var _components_podesavanja_rezanje_rezanje_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/podesavanja/rezanje/rezanje.component */ "./src/app/components/podesavanja/rezanje/rezanje.component.ts");
/* harmony import */ var _components_podesavanja_savijanje_savijanje_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/podesavanja/savijanje/savijanje.component */ "./src/app/components/podesavanja/savijanje/savijanje.component.ts");
/* harmony import */ var _components_podesavanja_digitalna_stampa_digitalna_stampa_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/podesavanja/digitalna-stampa/digitalna-stampa.component */ "./src/app/components/podesavanja/digitalna-stampa/digitalna-stampa.component.ts");
/* harmony import */ var _components_podesavanja_sito_stampa_sito_stampa_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/podesavanja/sito-stampa/sito-stampa.component */ "./src/app/components/podesavanja/sito-stampa/sito-stampa.component.ts");
/* harmony import */ var _components_podesavanja_procenat_zauzetosti_povrsine_procenat_zauzetosti_povrsine_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/podesavanja/procenat-zauzetosti-povrsine/procenat-zauzetosti-povrsine.component */ "./src/app/components/podesavanja/procenat-zauzetosti-povrsine/procenat-zauzetosti-povrsine.component.ts");
/* harmony import */ var _components_podesavanja_oprema_oprema_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/podesavanja/oprema/oprema.component */ "./src/app/components/podesavanja/oprema/oprema.component.ts");
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/rest.service */ "./src/app/services/rest.service.ts");
/* harmony import */ var _Basic_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Basic/pagination/pagination.component */ "./src/app/Basic/pagination/pagination.component.ts");
/* harmony import */ var _Basic_home_home_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Basic/home/home.component */ "./src/app/Basic/home/home.component.ts");
/* harmony import */ var _Basic_search_search_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Basic/search/search.component */ "./src/app/Basic/search/search.component.ts");
/* harmony import */ var _Basic_table_table_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Basic/table/table.component */ "./src/app/Basic/table/table.component.ts");
/* harmony import */ var _Basic_form_form_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Basic/form/form.component */ "./src/app/Basic/form/form.component.ts");
/* harmony import */ var _Basic_list_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Basic/list/list.component */ "./src/app/Basic/list/list.component.ts");
/* harmony import */ var _components_podesavanja_masine_digitalne_masine_digitalne_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/podesavanja/masine-digitalne/masine-digitalne.component */ "./src/app/components/podesavanja/masine-digitalne/masine-digitalne.component.ts");
/* harmony import */ var _components_podesavanja_rezanje_ulaganje_rezanje_ulaganje_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/podesavanja/rezanje-ulaganje/rezanje-ulaganje.component */ "./src/app/components/podesavanja/rezanje-ulaganje/rezanje-ulaganje.component.ts");
/* harmony import */ var _components_podesavanja_obrezivanje_obrezivanje_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/podesavanja/obrezivanje/obrezivanje.component */ "./src/app/components/podesavanja/obrezivanje/obrezivanje.component.ts");
/* harmony import */ var _components_podesavanja_savijanje_priprema_savijanje_priprema_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/podesavanja/savijanje-priprema/savijanje-priprema.component */ "./src/app/components/podesavanja/savijanje-priprema/savijanje-priprema.component.ts");
/* harmony import */ var _components_podesavanja_savijanje_paralelno_savijanje_paralelno_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/podesavanja/savijanje-paralelno/savijanje-paralelno.component */ "./src/app/components/podesavanja/savijanje-paralelno/savijanje-paralelno.component.ts");
/* harmony import */ var _components_podesavanja_savijanje_unakrsno_savijanje_unakrsno_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/podesavanja/savijanje-unakrsno/savijanje-unakrsno.component */ "./src/app/components/podesavanja/savijanje-unakrsno/savijanje-unakrsno.component.ts");
/* harmony import */ var _components_podesavanja_sito_boja_sito_boja_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/podesavanja/sito-boja/sito-boja.component */ "./src/app/components/podesavanja/sito-boja/sito-boja.component.ts");
/* harmony import */ var _components_podesavanja_sito_sablon_sito_sablon_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/podesavanja/sito-sablon/sito-sablon.component */ "./src/app/components/podesavanja/sito-sablon/sito-sablon.component.ts");
/* harmony import */ var _components_podesavanja_sito_sptf_sito_sptf_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/podesavanja/sito-sptf/sito-sptf.component */ "./src/app/components/podesavanja/sito-sptf/sito-sptf.component.ts");
/* harmony import */ var _components_podesavanja_sito_viskozitet_sito_viskozitet_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/podesavanja/sito-viskozitet/sito-viskozitet.component */ "./src/app/components/podesavanja/sito-viskozitet/sito-viskozitet.component.ts");
/* harmony import */ var _components_kalkulator_kalkulator_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/kalkulator/kalkulator.component */ "./src/app/components/kalkulator/kalkulator.component.ts");
/* harmony import */ var _services_security_authentication_service_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./services-security/authentication-service.service */ "./src/app/services-security/authentication-service.service.ts");
/* harmony import */ var _services_security_jwt_utils_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./services-security/jwt-utils.service */ "./src/app/services-security/jwt-utils.service.ts");
/* harmony import */ var _services_security_token_interceptor_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./services-security/token-interceptor.service */ "./src/app/services-security/token-interceptor.service.ts");
/* harmony import */ var _services_security_can_activate_auth_guard__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./services-security/can-activate-auth.guard */ "./src/app/services-security/can-activate-auth.guard.ts");
/* harmony import */ var _Basic_login_login_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./Basic/login/login.component */ "./src/app/Basic/login/login.component.ts");
/* harmony import */ var _components_podesavanja_podesavanje_podesavanje_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/podesavanja/podesavanje/podesavanje.component */ "./src/app/components/podesavanja/podesavanje/podesavanje.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














































var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _Basic_home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"] },
    { path: 'podesavanja', canActivate: [_services_security_can_activate_auth_guard__WEBPACK_IMPORTED_MODULE_42__["CanActivateAuthGuard"]], children: [
            { path: '', component: _components_podesavanja_podesavanja_podesavanja_component__WEBPACK_IMPORTED_MODULE_9__["PodesavanjaComponent"] },
            { path: 'opreme/:id', component: _components_podesavanja_oprema_oprema_component__WEBPACK_IMPORTED_MODULE_20__["OpremaComponent"] },
            { path: 'opreme', component: _components_podesavanja_oprema_oprema_component__WEBPACK_IMPORTED_MODULE_20__["OpremaComponent"] },
            { path: 'papiri/:id', component: _components_podesavanja_papiri_papiri_component__WEBPACK_IMPORTED_MODULE_11__["PapiriComponent"] },
            { path: 'papiri', component: _components_podesavanja_papiri_papiri_component__WEBPACK_IMPORTED_MODULE_11__["PapiriComponent"] },
            { path: 'masinezastampu/:id', component: _components_podesavanja_masine_masine_component__WEBPACK_IMPORTED_MODULE_12__["MasineComponent"] },
            { path: 'masinezastampu', component: _components_podesavanja_masine_masine_component__WEBPACK_IMPORTED_MODULE_12__["MasineComponent"] },
            { path: 'boje/:id', component: _components_podesavanja_boje_boje_component__WEBPACK_IMPORTED_MODULE_13__["BojeComponent"] },
            { path: 'boje', component: _components_podesavanja_boje_boje_component__WEBPACK_IMPORTED_MODULE_13__["BojeComponent"] },
            { path: 'izlazni-mediji/:id', component: _components_podesavanja_izlazni_mediji_izlazni_mediji_component__WEBPACK_IMPORTED_MODULE_14__["IzlazniMedijiComponent"] },
            { path: 'izlazni-mediji', component: _components_podesavanja_izlazni_mediji_izlazni_mediji_component__WEBPACK_IMPORTED_MODULE_14__["IzlazniMedijiComponent"] },
            { path: 'pzp/:id', component: _components_podesavanja_procenat_zauzetosti_povrsine_procenat_zauzetosti_povrsine_component__WEBPACK_IMPORTED_MODULE_19__["ProcenatZauzetostiPovrsineComponent"] },
            { path: 'pzp', component: _components_podesavanja_procenat_zauzetosti_povrsine_procenat_zauzetosti_povrsine_component__WEBPACK_IMPORTED_MODULE_19__["ProcenatZauzetostiPovrsineComponent"] },
            { path: 'pripremastampe/:id', component: _components_podesavanja_priprema_stampe_priprema_stampe_component__WEBPACK_IMPORTED_MODULE_0__["PripremaStampeComponent"] },
            { path: 'digitalne-masine/:id', component: _components_podesavanja_masine_digitalne_masine_digitalne_component__WEBPACK_IMPORTED_MODULE_28__["MasineDigitalneComponent"] },
            { path: 'digitalne-masine', component: _components_podesavanja_masine_digitalne_masine_digitalne_component__WEBPACK_IMPORTED_MODULE_28__["MasineDigitalneComponent"] },
            { path: 'rezanja/:id', component: _components_podesavanja_rezanje_rezanje_component__WEBPACK_IMPORTED_MODULE_15__["RezanjeComponent"] },
            { path: 'rezanja', component: _components_podesavanja_rezanje_rezanje_component__WEBPACK_IMPORTED_MODULE_15__["RezanjeComponent"] },
            { path: 'rezanje-ulaganja/:id', component: _components_podesavanja_rezanje_ulaganje_rezanje_ulaganje_component__WEBPACK_IMPORTED_MODULE_29__["RezanjeUlaganjeComponent"] },
            { path: 'rezanje-ulaganja', component: _components_podesavanja_rezanje_ulaganje_rezanje_ulaganje_component__WEBPACK_IMPORTED_MODULE_29__["RezanjeUlaganjeComponent"] },
            { path: 'obrezivanja/:id', component: _components_podesavanja_obrezivanje_obrezivanje_component__WEBPACK_IMPORTED_MODULE_30__["ObrezivanjeComponent"] },
            { path: 'obrezivanja', component: _components_podesavanja_obrezivanje_obrezivanje_component__WEBPACK_IMPORTED_MODULE_30__["ObrezivanjeComponent"] },
            { path: 'savijanja-priprema/:id', component: _components_podesavanja_savijanje_priprema_savijanje_priprema_component__WEBPACK_IMPORTED_MODULE_31__["SavijanjePripremaComponent"] },
            { path: 'savijanja-priprema', component: _components_podesavanja_savijanje_priprema_savijanje_priprema_component__WEBPACK_IMPORTED_MODULE_31__["SavijanjePripremaComponent"] },
            { path: 'savijanja-paralelno/:id', component: _components_podesavanja_savijanje_paralelno_savijanje_paralelno_component__WEBPACK_IMPORTED_MODULE_32__["SavijanjeParalelnoComponent"] },
            { path: 'savijanja-paralelno', component: _components_podesavanja_savijanje_paralelno_savijanje_paralelno_component__WEBPACK_IMPORTED_MODULE_32__["SavijanjeParalelnoComponent"] },
            { path: 'savijanja-unakrsno/:id', component: _components_podesavanja_savijanje_unakrsno_savijanje_unakrsno_component__WEBPACK_IMPORTED_MODULE_33__["SavijanjeUnakrsnoComponent"] },
            { path: 'savijanja-unakrsno', component: _components_podesavanja_savijanje_unakrsno_savijanje_unakrsno_component__WEBPACK_IMPORTED_MODULE_33__["SavijanjeUnakrsnoComponent"] },
            { path: 'sito-boje/:id', component: _components_podesavanja_sito_boja_sito_boja_component__WEBPACK_IMPORTED_MODULE_34__["SitoBojaComponent"] },
            { path: 'sito-boje', component: _components_podesavanja_sito_boja_sito_boja_component__WEBPACK_IMPORTED_MODULE_34__["SitoBojaComponent"] },
            { path: 'sito-sabloni/:id', component: _components_podesavanja_sito_sablon_sito_sablon_component__WEBPACK_IMPORTED_MODULE_35__["SitoSablonComponent"] },
            { path: 'sito-sabloni', component: _components_podesavanja_sito_sablon_sito_sablon_component__WEBPACK_IMPORTED_MODULE_35__["SitoSablonComponent"] },
            { path: 'sito-sptfi/:id', component: _components_podesavanja_sito_sptf_sito_sptf_component__WEBPACK_IMPORTED_MODULE_36__["SitoSptfComponent"] },
            { path: 'sito-sptfi', component: _components_podesavanja_sito_sptf_sito_sptf_component__WEBPACK_IMPORTED_MODULE_36__["SitoSptfComponent"] },
            { path: 'sito-viskoziteti/:id', component: _components_podesavanja_sito_viskozitet_sito_viskozitet_component__WEBPACK_IMPORTED_MODULE_37__["SitoViskozitetComponent"] },
            { path: 'sito-viskoziteti', component: _components_podesavanja_sito_viskozitet_sito_viskozitet_component__WEBPACK_IMPORTED_MODULE_37__["SitoViskozitetComponent"] },
        ] },
    { path: 'kalkulator', component: _components_kalkulator_kalkulator_component__WEBPACK_IMPORTED_MODULE_38__["KalkulatorComponent"] },
    { path: 'login', component: _Basic_login_login_component__WEBPACK_IMPORTED_MODULE_43__["LoginComponent"] },
    { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _Basic_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"],
                _components_podesavanja_podesavanja_podesavanja_component__WEBPACK_IMPORTED_MODULE_9__["PodesavanjaComponent"],
                _components_podesavanja_papiri_papiri_component__WEBPACK_IMPORTED_MODULE_11__["PapiriComponent"],
                _components_podesavanja_masine_masine_component__WEBPACK_IMPORTED_MODULE_12__["MasineComponent"],
                _components_podesavanja_boje_boje_component__WEBPACK_IMPORTED_MODULE_13__["BojeComponent"],
                _components_podesavanja_izlazni_mediji_izlazni_mediji_component__WEBPACK_IMPORTED_MODULE_14__["IzlazniMedijiComponent"],
                _components_podesavanja_rezanje_rezanje_component__WEBPACK_IMPORTED_MODULE_15__["RezanjeComponent"],
                _components_podesavanja_savijanje_savijanje_component__WEBPACK_IMPORTED_MODULE_16__["SavijanjeComponent"],
                _components_podesavanja_digitalna_stampa_digitalna_stampa_component__WEBPACK_IMPORTED_MODULE_17__["DigitalnaStampaComponent"],
                _components_podesavanja_sito_stampa_sito_stampa_component__WEBPACK_IMPORTED_MODULE_18__["SitoStampaComponent"],
                _components_podesavanja_procenat_zauzetosti_povrsine_procenat_zauzetosti_povrsine_component__WEBPACK_IMPORTED_MODULE_19__["ProcenatZauzetostiPovrsineComponent"],
                _components_podesavanja_oprema_oprema_component__WEBPACK_IMPORTED_MODULE_20__["OpremaComponent"],
                _Basic_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_22__["PaginationComponent"],
                _Basic_home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"],
                _Basic_search_search_component__WEBPACK_IMPORTED_MODULE_24__["SearchComponent"],
                _Basic_table_table_component__WEBPACK_IMPORTED_MODULE_25__["TableComponent"],
                _Basic_form_form_component__WEBPACK_IMPORTED_MODULE_26__["FormComponent"],
                _Basic_list_list_component__WEBPACK_IMPORTED_MODULE_27__["ListComponent"],
                _components_podesavanja_priprema_stampe_priprema_stampe_component__WEBPACK_IMPORTED_MODULE_0__["PripremaStampeComponent"],
                _components_podesavanja_masine_digitalne_masine_digitalne_component__WEBPACK_IMPORTED_MODULE_28__["MasineDigitalneComponent"],
                _components_podesavanja_rezanje_ulaganje_rezanje_ulaganje_component__WEBPACK_IMPORTED_MODULE_29__["RezanjeUlaganjeComponent"],
                _components_podesavanja_obrezivanje_obrezivanje_component__WEBPACK_IMPORTED_MODULE_30__["ObrezivanjeComponent"],
                _components_podesavanja_savijanje_priprema_savijanje_priprema_component__WEBPACK_IMPORTED_MODULE_31__["SavijanjePripremaComponent"],
                _components_podesavanja_savijanje_paralelno_savijanje_paralelno_component__WEBPACK_IMPORTED_MODULE_32__["SavijanjeParalelnoComponent"],
                _components_podesavanja_savijanje_unakrsno_savijanje_unakrsno_component__WEBPACK_IMPORTED_MODULE_33__["SavijanjeUnakrsnoComponent"],
                _components_podesavanja_sito_boja_sito_boja_component__WEBPACK_IMPORTED_MODULE_34__["SitoBojaComponent"],
                _components_podesavanja_sito_sablon_sito_sablon_component__WEBPACK_IMPORTED_MODULE_35__["SitoSablonComponent"],
                _components_podesavanja_sito_sptf_sito_sptf_component__WEBPACK_IMPORTED_MODULE_36__["SitoSptfComponent"],
                _components_podesavanja_sito_viskozitet_sito_viskozitet_component__WEBPACK_IMPORTED_MODULE_37__["SitoViskozitetComponent"],
                _components_podesavanja_podesavanje_podesavanje_component__WEBPACK_IMPORTED_MODULE_44__["PodesavanjeComponent"],
                _components_kalkulator_kalkulator_component__WEBPACK_IMPORTED_MODULE_38__["KalkulatorComponent"],
                _Basic_login_login_component__WEBPACK_IMPORTED_MODULE_43__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _services_security_token_interceptor_service__WEBPACK_IMPORTED_MODULE_41__["TokenInterceptorService"],
                    multi: true
                },
                _services_security_authentication_service_service__WEBPACK_IMPORTED_MODULE_39__["AuthenticationService"],
                _services_security_can_activate_auth_guard__WEBPACK_IMPORTED_MODULE_42__["CanActivateAuthGuard"],
                _services_security_jwt_utils_service__WEBPACK_IMPORTED_MODULE_40__["JwtUtilsService"],
                _services_uredjaji_service__WEBPACK_IMPORTED_MODULE_10__["UredjajiService"],
                _services_rest_service__WEBPACK_IMPORTED_MODULE_21__["RestService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/kalkulator/kalkulator.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/kalkulator/kalkulator.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMva2Fsa3VsYXRvci9rYWxrdWxhdG9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/kalkulator/kalkulator.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/kalkulator/kalkulator.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-calculator\">\n  <div class=\"calculator\">\n    <div class=\"header\">\n      <div class=\"logo\"></div>\n    </div>\n    <div class=\"display\" [ngClass]=\"{'display-invalid' : this.inputInvalid}\" >\n      <div class=\"robot\"> <span>></span> {{robot}}</div>\n      <input #input [readonly]=\"inputReadOnly\"  [(ngModel)]=\"answer\" type=\"text\"  />\n    </div>\n    <div class=\"buttons\">\n      <div (click)=\"virtualKeyboard('7')\" class=\"btn b-7\" [ngClass]=\"{'b-7-active' : this.numbersKey}\"></div>\n      <div (click)=\"virtualKeyboard('8')\" class=\"btn b-8\" [ngClass]=\"{'b-8-active' : this.numbersKey}\"></div>\n      <div (click)=\"virtualKeyboard('9')\" class=\"btn b-9\" [ngClass]=\"{'b-9-active' : this.numbersKey}\"></div>\n      <div class=\"btn b-text\" [ngClass]=\"{'b-text-active' : this.textKey}\"></div>\n      <div (click)=\"virtualKeyboard('4')\" class=\"btn b-4\" [ngClass]=\"{'b-4-active' : this.numbersKey}\"></div>\n      <div (click)=\"virtualKeyboard('5')\" class=\"btn b-5\" [ngClass]=\"{'b-5-active' : this.numbersKey}\"></div>\n      <div (click)=\"virtualKeyboard('6')\" class=\"btn b-6\" [ngClass]=\"{'b-6-active' : this.numbersKey}\"></div>\n      <div (click)=\"virtualKeyboard('yes')\" class=\"btn b-yes\" [ngClass]=\"{'b-yes-active' : this.yesKey}\"></div>\n      <div (click)=\"virtualKeyboard('1')\" class=\"btn b-1\" [ngClass]=\"{'b-1-active' : this.numbersKey}\"></div>\n      <div (click)=\"virtualKeyboard('2')\" class=\"btn b-2\" [ngClass]=\"{'b-2-active' : this.numbersKey}\"></div>\n      <div (click)=\"virtualKeyboard('3')\" class=\"btn b-3\" [ngClass]=\"{'b-3-active' : this.numbersKey}\"></div>\n      <div (click)=\"virtualKeyboard('no')\" class=\"btn b-no\" [ngClass]=\"{'b-no-active' : this.noKey}\"></div>\n      <div (click)=\"virtualKeyboard('0')\" class=\"btn b-0\" [ngClass]=\"{'b-0-active' : this.numbersKey}\"></div>\n      <div (click)=\"virtualKeyboard('.')\" class=\"btn b-dot\" [ngClass]=\"{'b-dot-active' : this.numbersKey}\"></div>\n      <div (click)=\"virtualKeyboard('delete')\"  class=\"btn b-delete\" [ngClass]=\"{'b-delete-active' : this.deleteKey}\"></div>\n      <div class=\"btn b-list\" [ngClass]=\"{'b-list-active' : this.listKey}\"></div>\n      <div (click)=\"helpToggle()\" class=\"btn b-help\"  [ngClass]=\"{'b-help-active' : this.helpKey}\"></div>\n      <div (click)=\"virtualKeyboard('prev')\" (mouseenter)=\"virtualKeyboardHover('prev')\" (mouseleave)=\"virtualKeyboardHoverOut('prev')\" class=\"btn b-pre\" [ngClass]=\"{'b-pre-active' : this.preKey}\"></div>\n      <div (click)=\"virtualKeyboard('next')\" (mouseenter)=\"virtualKeyboardHover('next')\" (mouseleave)=\"virtualKeyboardHoverOut('next')\"class=\"btn b-next\" [ngClass]=\"{'b-next-active' : this.nextKey}\"></div>\n      <div (click)=\"virtualKeyboard('enter')\" class=\"btn b-enter\" [ngClass]=\"{'b-enter-active' : this.eneterKey}\"></div>\n    </div>\n    <div  *ngIf=\"smallList\" class=\"smallList\"  >\n      <div *ngFor=\"let i of smallList\"  (mouseenter)=\"smallListChoice = i\" (click)=\"saveAnswerSmallList()\" class=\"item\" [ngClass]=\"{'item-choice' : i===smallListChoice}\" >{{i}}</div>\n    </div>\n    \n\n    <!--List Machines-->\n    <div  *ngIf=\"specialListPrintMachines && specialList\" class=\"specialList\">\n      <table>\n        <tr>\n          <th>Naziv</th>\n          <th style=\"width: 30%\">Br. Boja</th>\n        </tr>\n        <tr *ngFor=\"let item of specialList\" (click)=\"saveAnswerSpecialList()\" (mouseenter)=\"specialListChoice = item\" [ngClass]=\"{'item-choice' : item==specialListChoice}\">\n          <td>{{item.naziv}}</td>\n          <td >{{item.brojBoja}}</td>\n        </tr>\n      </table>\n    </div>\n\n    <!--List Platform -->\n    <div  *ngIf=\"specialListPrintPlatform && specialList\" class=\"specialList\">\n      <table>\n        <tr>\n          <th style=\"text-align: center\">Uređaji ({{currentPagePrint()}}/{{totalPagesPrint()}})</th>\n        </tr>\n        <tr *ngFor=\"let item of specialList\" (click)=\"saveAnswerSpecialList()\" (mouseenter)=\"specialListChoice = item\" [ngClass]=\"{'item-choice' : item==specialListChoice}\">\n          <td>{{item.naziv}} </td>\n        </tr>\n      </table>\n    </div>\n\n    <!--List Colors -->\n    <div  *ngIf=\"specialListColors && specialList\" class=\"specialList\">\n      <table>\n        <tr>\n          <th style=\"text-align: center\">Boje ({{currentPagePrint()}}/{{totalPagesPrint()}})</th>\n        </tr>\n        <tr *ngFor=\"let item of specialList\" (click)=\"saveAnswerSpecialList()\" (mouseenter)=\"specialListChoice = item\" [ngClass]=\"{'item-choice' : item==specialListChoice}\">\n          <td>{{item.naziv}} </td>\n        </tr>\n      </table>\n    </div>\n\n    <!--List Text -->\n    <div  *ngIf=\"specialListPrintText && specialList\" class=\"specialList\">\n      <table>\n        <tr>\n          <th style=\"text-align: center\">Procenat zauzetosti površine ({{currentPagePrint()}}/{{totalPagesPrint()}})</th>\n        </tr>\n        <tr *ngFor=\"let item of specialList\" (click)=\"saveAnswerSpecialList()\" (mouseenter)=\"specialListChoice = item\" [ngClass]=\"{'item-choice' : item==specialListChoice}\">\n          <td>{{item.vrstaPosla}} </td>\n        </tr>\n      </table>\n    </div>\n    \n    <!--List Paper type-->\n    <div  *ngIf=\"specialListPaperType && specialList\" class=\"specialList\">\n      <table>\n        <tr>\n          <th style=\"text-align: center\">Tip papira ({{currentPagePrint()}}/{{totalPagesPrint()}})</th>\n        </tr>\n        <tr *ngFor=\"let item of specialList\" (click)=\"saveAnswerSpecialList()\" (mouseenter)=\"specialListChoice = item\" [ngClass]=\"{'item-choice' : item==specialListChoice}\">\n          <td>{{item.naziv}} </td>\n        </tr>\n      </table>\n    </div>\n    \n    <!--List Papers-->\n    <div  *ngIf=\"specialList && specialList_PapersSection \" class=\"specialList-Paper\">\n      <table>\n        <tr>\n          <th>Papiri ({{currentPagePrint()}}/{{totalPagesPrint()}})</th>\n        </tr>\n        <tr *ngFor=\"let item of specialList\" (click)=\"addChoiceToListMany()\" (mouseenter)=\"specialListChoice = item\" [ngClass]=\"{'item-select-choice' :  item==specialListChoice && checkChoiceListMany(item)==true, 'item-choice' :  item==specialListChoice,'item-select' : checkChoiceListMany(item)}\">\n          <td><span class=\"name\">{{item.naziv}} </span> <span class=\"type\"> - {{item.tipPapira.naziv}}</span> <br> <span class=\"gr\"> | {{item.gramatura}} g/m² | </span> <span class=\"dimensions\"> | {{item.x}} x {{item.y}} mm |</span> </td>\n        </tr>\n      </table>\n    </div>\n\n    <div *ngIf=\"shareOfsetR\" class=\"results-ofset\">\n      <table>\n        <tr>\n          <th colspan=\"2\"> Detaljnije </th>\n        </tr>\n        <tr>\n          <td>Vreme proizvodnje:</td>\n          <td>{{decimal(ukupnoVremeProizvodnje)}} h</td>\n        </tr>\n        <tr>\n          <td>Troskovi proizvodnje:</td>\n          <td>{{decimal(ukupniTrskoskoviProizvodnje)}} din</td>\n        </tr>\n        <tr>\n          <td>Cena papira:</td>\n          <td>{{decimal(ukupnaCenaPapira)}} din</td>\n        </tr>\n        <tr>\n          <td>Cena boje: </td>\n          <td>{{decimal(ukupnaCenaBoje)}} din</td>\n        </tr>\n      </table>\n    </div>\n\n\n\n    \n   \n    <div #help *ngIf=\"helpSection\" class=\"help\">\n      <div class=\"title\">Pomoć</div>\n      <div class=\"text\">{{helpText}}</div>\n    </div>\n    <div class=\"big-button\">\n        <div (click)=\"virtualKeyboard('bigButton')\"   class=\"btn\"  [ngClass]=\"{'btn-active' : this.emptyKey}\" >{{emptyKeyText}}</div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/kalkulator/kalkulator.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/kalkulator/kalkulator.component.ts ***!
  \***************************************************************/
/*! exports provided: KalkulatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KalkulatorComponent", function() { return KalkulatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest.service */ "./src/app/services/rest.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KalkulatorComponent = /** @class */ (function () {
    function KalkulatorComponent(fb, rs) {
        this.fb = fb;
        this.rs = rs;
        // Robot
        this.robot = "";
        this.robotNeedAnswer = null;
        // Input
        this.inputReadOnly = true;
        this.inputInvalid = false;
        this.specialList_CurrentPage = 0;
        this.specialList_ItemPerPage = 4;
        this.specialList_SortOrder = "asc";
        this.specialList_PapersSection = false;
        this.specialList_printMachinesSection = false;
        this.specialList_equipmentsSection = false;
        this.specialListPrintMachines = false;
        this.specialListPaperType = false;
        this.specialListPrintPlatform = false;
        this.specialListPrintText = false;
        this.specialListColors = false;
        // Array
        this.array = [];
        this.arrayItem = {};
        this.arrayCounter = 0;
        this.arrayMax = 0;
        this.arrayAttribute = 0;
        this.arrayAttributeCounter = 0;
        // Keyboard
        this.textKey = false;
        this.helpKey = false;
        this.numbersKey = false;
        this.noKey = false;
        this.yesKey = false;
        this.eneterKey = false;
        this.preKey = false;
        this.nextKey = false;
        this.listKey = false;
        this.deleteKey = false;
        this.emptyKey = false;
        this.helpText = null;
        this.helpCopy = null;
        this.helpSection = false;
        this.shareOfsetR = false;
        this.form = fb.group({});
    }
    KalkulatorComponent.prototype.ngOnInit = function () {
        this.loadData();
        this.step = 0;
        this.stepByStep();
    };
    // Step by step ------------------------------------------------------------------------------
    KalkulatorComponent.prototype.stepByStep = function () {
        // UVOD
        if (this.step === 0) {
            this.stepConfirmation("Zdravo, ja sam Gridulator.", "Zdravo");
        }
        else if (this.step === 1) {
            this.stepText("Kalkulacije ponekad mogu biti baš složen proces, ali ne brini zato sam ja ovde :)");
        }
        else if (this.step === 2) {
            this.stepInputText("Kako se zovete?", "imeKorisnika");
        }
        else if (this.step === 3) {
            var aText = '';
            if (this.form.get("imeKorisnika").value == 'Mrgud' ||
                this.form.get("imeKorisnika").value == 'Nina' ||
                this.form.get("imeKorisnika").value == 'Nikoleta') {
                aText = ' <3';
            }
            this.stepText("Drago mi je " + this.form.get("imeKorisnika").value + aText + ".");
        }
        else if (this.step === 4) {
            this.stepInputBoolean("Prvi put me koristite?", "prviPut");
        }
        else if (this.step === 5) {
            this.stepText("Kao što ste primetili ja nisam običan kalkulator, osim ovog razgovora mogu jos po nešto.");
        }
        else if (this.step === 6) {
            this.stepSpecialExampleOfFunction("Na primer ovo");
        }
        else if (this.step === 7) {
            this.stepText("Kul zar ne? Na ovaj način ću vam pokazivati dostupne opcije za određeno pitanje.");
        }
        else if (this.step === 8) {
            this.stepSpecialExampleOfTasterText("Na primer ako se od Vas traži da date tekstualni odgovor ja ću upaliti ovaj taster:");
        }
        else if (this.step === 9) {
            this.stepSpecialExampleOfTasterList("Ili ako treba da izaberete odgovor iz liste odgovora upaliću ovaj:");
        }
        else if (this.step === 10) {
            this.stepSpecialExampleOfTasterHelp('Naravno uvek se možete obratiti za dodatnu pomoć na tasteru "pomoć (?)" koja je takođe dostupna na tasteru "ctrl" na tastaturi.');
        }
        else if (this.step === 11) {
            this.stepConfirmation("Vreme je da uradimo kalkulaciju. Da li se slažete?", "Slažem se!");
        }
        // KALKULACIJE
        else if (this.step === 12) {
            this.stepSmallList("Za koju štampu želite da radimo kalkulacije", "tipStampe", ["Ofset štampa", "Digitalna štampa", "Sito štampa"], "Ofset štampa");
        }
        else if (this.step === 13) {
            this.stepInputNumber("Navedite potrebnu količinu grafičkog proizvoda (tiraž)", "tiraz", "", 1, 500000);
        }
        else if (this.step === 500) {
            this.stepSmallList("Izaberite tip proizvoda koji želite da štampate.", "tipProizvoda", ["Plakat", "Letak", "Brošura"], "Plakat");
        }
        // PLAKAT i LETAK
        else if (this.step === 501) {
            this.stepInputNumber("Navedite širinu grafičkog proizvoda u mm.", "sirinaProizvoda");
        }
        else if (this.step === 502) {
            this.stepInputNumber("Navedite dužinu grafičkog proizvoda u mm.", "duzinaProizvoda");
        }
        else if (this.step === 503) {
            this.stepInputBoolean("Da li ste naveli obrezan format", "obrezanFormatProizvodaB");
        }
        else if (this.step === 504) {
            this.stepSpecialListPrintMachine("Izaberite mašinu za štampu.", "masinaZaStampu");
        }
        else if (this.step === 505) {
            // provera validnosti - masina za stampu i format proizvoda
            if (this.checkPrintMachineAndPaper(this.get('masinaZaStampu'))) {
                this.formatProizvodaNeobrezan();
                this.tabakZaStampu(false);
                this.nextStep();
            }
            else {
                this.step = 9999;
                this.stepByStep();
            }
        }
        else if (this.step === 506) {
            this.stepInputBoolean("Pronađeno je više od 100 papira koji odgovaraju Vašim zahtevima, da li želite da izvršim sortiranje pre konačnog odabira?", "sortiranjePapiraB");
        }
        else if (this.step === 507) {
            this.stepInputNumber("Navedite minimalnu gramaturu papira?", "sortiranjePapiraMinGramatura", "0");
        }
        else if (this.step === 508) {
            this.stepInputNumber("Navedite maksimalnu gramaturu papira?", "sortiranjePapiraMaxGramatura", "400");
        }
        else if (this.step === 509) {
            this.stepInputBoolean("Da li zelite da izaberete tip papira?", "sortiranjePapiraTipB");
        }
        else if (this.step === 510) {
            this.stepSpecialListPaperType("Izaberite tip papira.", "sortiranjePapiraTip");
        }
        else if (this.step === 511) {
            this.stepSpecialListPapers("Izaberite papir koji želite. Pritiskom na taster 's' možete da izaberete više papira a ja ću proceniti koji papir Vam najviše odgovara. ", "papir");
        }
        else if (this.step === 512) {
            this.stepConfirmation("Na osnovu procenta ostatka izabran je " + this.form.get("papir").value.naziv + " papir, gramature: " + this.form.get("papir").value.gramatura + " g/m\u00B2, tip: " + this.form.get("papir").value.tipPapira.naziv + ". Dimenzije papira su: " + this.form.get("papir").value.x + " x " + this.form.get("papir").value.y + " mm. ", 'Uredu');
        }
        // BROSURA
        // Osnovno
        else if (this.step === 550) {
            this.stepInputNumber("Navedite broj strana brošure uključujući korice (4 strane).", "obimProizvoda");
        }
        else if (this.step === 551) {
            this.stepInputNumber("Navedite širinu grafičkog proizvoda u mm.", "sirinaProizvoda");
        }
        else if (this.step === 552) {
            this.stepInputNumber("Navedite dužinu grafičkog proizvoda u mm.", "duzinaProizvoda");
        }
        else if (this.step === 553) {
            this.stepInputBoolean("Da li ste naveli obrezan format", "obrezanFormatProizvodaB");
        }
        else if (this.step === 554) {
            this.stepInputBoolean("Da li se korice i knjižni blok štampaju na istoj mašini", "masinaZaStampuIstaB");
        }
        else if (this.step === 555) {
            this.stepSpecialListPrintMachine("Izaberite mašinu za štampu knjižnog bloka.", "masinaZaStampu");
        }
        else if (this.step === 556) {
            this.stepSpecialListPrintMachine("Izaberite mašinu za štampu korica.", "masinaZaStampuKorica");
        }
        else if (this.step === 557) {
            this.stepSpecialListPrintMachine("Izaberite mašinu za štampu.", "masinaZaStampu");
        }
        else if (this.step === 558) {
            // provera validnosti - masina za stampu i format proizvoda
            if (this.checkPrintMachineAndPaper(this.get('masinaZaStampu'))) {
                this.formatProizvodaNeobrezan();
                if (this.get('masinaZaStampuIstaB')) {
                    this.tabakZaStampu(false);
                }
                else {
                    this.tabakZaStampu(false);
                    this.tabakZaStampu(true);
                }
            }
            else {
                this.step = 9999;
                this.stepByStep();
            }
        }
        else if (this.step === 559) {
            this.stepInputBoolean("Da li se korice i knjižni blok štampaju na istom papiru?", "papirZaStampuKoricaB");
        }
        else if (this.step === 560) {
            this.stepText("Okej, hajde prvo da izaberemo papir za korice.");
        }
        else if (this.step === 561) {
            this.stepInputBoolean("Pronađeno je više od 100 papira koji odgovaraju Vašim zahtevima, da li želite da izvršim sortiranje pre konačnog odabira?", "sortiranjePapiraB");
        }
        else if (this.step === 562) {
            this.stepInputNumber("Navedite minimalnu gramaturu papira?", "sortiranjePapiraMinGramatura", "0");
        }
        else if (this.step === 563) {
            this.stepInputNumber("Navedite maksimalnu gramaturu papira?", "sortiranjePapiraMaxGramatura", "400");
        }
        else if (this.step === 564) {
            this.stepInputBoolean("Da li zelite da izaberete tip papira?", "sortiranjePapiraTipB");
        }
        else if (this.step === 565) {
            this.stepSpecialListPaperType("Izaberite tip papira.", "sortiranjePapiraTip");
        }
        else if (this.step === 566) {
            this.stepSpecialListPapers("Izaberite papir koji želite. Pritiskom na taster 's' možete da izaberete više papira a ja ću proceniti koji papir Vam najviše odgovara. ", "papirKorice");
        }
        else if (this.step === 567) {
            this.stepConfirmation("Na osnovu procenta ostatka izabran je " + this.form.get("papirKorice").value.naziv + " papir, gramature: " + this.form.get("papirKorice").value.gramatura + " g/m\u00B2, tip: " + this.form.get("papirKorice").value.tipPapira.naziv + ". Dimenzije papira su: " + this.form.get("papirKorice").value.x + " x " + this.form.get("papirKorice").value.y + " mm. ", 'Uredu');
        }
        else if (this.step === 568) {
            this.stepText("Sad treba da izaberemo papir za knjižni blok");
        }
        else if (this.step === 569) {
            this.stepInputBoolean("Pronađeno je više od 100 papira koji odgovaraju Vašim zahtevima, da li želite da izvršim sortiranje pre konačnog odabira?", "sortiranjePapiraB");
        }
        else if (this.step === 570) {
            this.stepInputNumber("Navedite minimalnu gramaturu papira?", "sortiranjePapiraMinGramatura", "0");
        }
        else if (this.step === 571) {
            this.stepInputNumber("Navedite maksimalnu gramaturu papira?", "sortiranjePapiraMaxGramatura", "400");
        }
        else if (this.step === 572) {
            this.stepInputBoolean("Da li zelite da izaberete tip papira?", "sortiranjePapiraTipB");
        }
        else if (this.step === 573) {
            this.stepSpecialListPaperType("Izaberite tip papira.", "sortiranjePapiraTip");
        }
        else if (this.step === 574) {
            this.stepSpecialListPapers("Izaberite papir koji želite. Pritiskom na taster 's' možete da izaberete više papira a ja ću proceniti koji papir Vam najviše odgovara. ", "papir");
        }
        else if (this.step === 575) {
            this.stepConfirmation("Na osnovu procenta ostatka izabran je " + this.form.get("papir").value.naziv + " papir, gramature: " + this.form.get("papir").value.gramatura + " g/m\u00B2, tip: " + this.form.get("papir").value.tipPapira.naziv + ". Dimenzije papira su: " + this.form.get("papir").value.x + " x " + this.form.get("papir").value.y + " mm. ", 'Uredu');
        }
        else if (this.step === 580) {
            this.stepText('Sledeći korak...', 20);
        }
        // Priprema stampe
        else if (this.step === 599) {
            this.stepConfirmation("Svaki grafički proizvod zahteva pripremu štampe. Unesimo podatke za pripremu štampe.", 'Uredu');
        }
        // Preuzimanje posla i pripremne operacije
        else if (this.step === 600) {
            this.stepInputBoolean("Da li je potreban pregled posla?", "ps_pregledPosla");
        }
        else if (this.step === 601) {
            this.stepInputBoolean("Da li je potrebno upoznavanje sa radnim zadatkom?", "ps_upoznavanjePosla");
        }
        else if (this.step === 602) {
            this.stepInputBoolean("Da li je potrebno arhiviranje podataka?", "ps_arhiviranjePodataka");
        }
        else if (this.step === 603) {
            this.stepInputBoolean("Da li je potrebno prenošenje podataka?", "ps_prenosPodatakaB");
        }
        else if (this.step === 604) {
            this.stepInputNumber("Koliko fajlova je potrebno preneti? (do 10mb)", "ps_prenosPodatakaDo10mb", "0");
        }
        else if (this.step === 605) {
            this.stepInputNumber("Koliko fajlova je potrebno preneti? (preko 10mb)", "ps_prenosPodatakaPreko10mb", "0");
        }
        // Obrada i unos teksta
        else if (this.step === 606) {
            this.stepInputBoolean("Da li potrebno izvršiti obradu i unos teksta?", "ps_obradaTekstaB");
        }
        else if (this.step === 607) {
            this.stepInputBoolean("Da li potrebno izvršiti obradu i unos jednostavnog rukopisa?", "ps_jednostavanRukopisB");
        }
        else if (this.step === 608) {
            this.stepInputNumber("Koliko karaktera?", "ps_jednostavanRukopis", '0', 0, 1000000);
        }
        else if (this.step === 609) {
            this.stepInputBoolean("Da li potrebno izvršiti obradu i unos složenog rukopisa?", "ps_slozenRukopisB");
        }
        else if (this.step === 610) {
            this.stepInputNumber("Koliko karaktera?", "ps_slozenRukopis", '0', 0, 1000000);
        }
        else if (this.step === 611) {
            this.stepInputBoolean("Da li potrebno izvršiti obradu i unos tehničkog testa, formula ili simbola?", "ps_tehnickiTekstB");
        }
        else if (this.step === 612) {
            this.stepInputNumber("Koliko karaktera?", "ps_tehnickiTekst", '0', 0, 1000000);
        }
        else if (this.step === 613) {
            this.stepInputBoolean("Da li potrebno izvršiti obradu i unos teksta na stranom jeziku?", "ps_straniTekstB");
        }
        else if (this.step === 614) {
            this.stepInputNumber("Koliko karaktera?", "ps_straniTekst", '0', 0, 1000000);
        }
        else if (this.step === 615) {
            this.stepInputBoolean("Da li potrebno izvršiti obradu i unos ASCII teksta?", "ps_asciiTekstB");
        }
        else if (this.step === 616) {
            this.stepInputNumber("Koliko karaktera?", "ps_asciiTekst", '0', 0, 1000000);
        }
        // Kreiranje slika
        else if (this.step === 617) {
            this.stepInputBoolean("Da li je potreno kreiranje slika (ilustracije, slikanje, skeniranje itd.)?", "ps_kreiranjeSlikaB");
        }
        else if (this.step === 618) {
            this.stepInputBoolean("Da li je potrebno crtanje ili ilustracije?", "ps_ilustracijeB");
        }
        else if (this.step === 619) {
            this.stepInputNumber("Koliko imate JEDNOSTAVNIH crtža ili ilustracija?", "ps_ilustracije_j", "0");
        }
        else if (this.step === 620) {
            this.stepInputNumber("Koliko imate PROSEČNIH crtža ili ilustracija?", "ps_ilustracije_p", "0");
        }
        else if (this.step === 621) {
            this.stepInputNumber("Koliko imate SLOŽENIH crtža ili ilustracija?", "ps_ilustracije_s", "0");
        }
        else if (this.step === 622) {
            this.stepInputBoolean("Da li je potrebno SLIKANJE?", "ps_slikanjeB");
        }
        else if (this.step === 623) {
            this.stepInputNumber("Koliko JEDNOSTAVNIH slikanja je potrebno?", "ps_slikanje_j", "0");
        }
        else if (this.step === 624) {
            this.stepInputNumber("Koliko PROSEČNIH slikanja je potrebno?", "ps_slikanje_p", "0");
        }
        else if (this.step === 625) {
            this.stepInputNumber("Koliko SLOŽENIH slikanja je potrebno?", "ps_slikanje_s", "0");
        }
        else if (this.step === 626) {
            this.stepInputBoolean("Da li je potrebno SKENIRANJE (linijski)?", "ps_skeniranjeLinijskiB");
        }
        else if (this.step === 627) {
            this.stepInputNumber("Koliko JEDNOSTAVNIH skeniranja je potrebno?", "ps_skeniranjeLinijski_j", "0");
        }
        else if (this.step === 628) {
            this.stepInputNumber("Koliko PROSEČNIH skeniranja je potrebno?", "ps_skeniranjeLinijski_p", "0");
        }
        else if (this.step === 629) {
            this.stepInputNumber("Koliko SLOŽENIH skeniranja je potrebno?", "ps_skeniranjeLinijski_s", "0");
        }
        else if (this.step === 630) {
            this.stepInputBoolean("Da li je potrebno SKENIRANJE (raster - c/b)?", "ps_skeniranjeRasterB");
        }
        else if (this.step === 631) {
            this.stepInputNumber("Koliko JEDNOSTAVNIH skeniranja je potrebno?", "ps_skeniranjeRaster_j", "0");
        }
        else if (this.step === 632) {
            this.stepInputNumber("Koliko PROSEČNIH skeniranja je potrebno?", "ps_skeniranjeRaster_p", "0");
        }
        else if (this.step === 633) {
            this.stepInputNumber("Koliko SLOŽENIH skeniranja je potrebno?", "ps_skeniranjeRaster_s", "0");
        }
        else if (this.step === 634) {
            this.stepInputBoolean("Da li je potrebno SKENIRANJE (RGB - CMYK)?", "ps_skeniranjeRgbB");
        }
        else if (this.step === 635) {
            this.stepInputNumber("Koliko JEDNOSTAVNIH skeniranja je potrebno?", "ps_skeniranjeRgb_j", "0");
        }
        else if (this.step === 636) {
            this.stepInputNumber("Koliko PROSEČNIH skeniranja je potrebno?", "ps_skeniranjeRgb_p", "0");
        }
        else if (this.step === 637) {
            this.stepInputNumber("Koliko SLOŽENIH skeniranja je potrebno?", "ps_skeniranjeRgb_s", "0");
        }
        // prelom i montaza
        else if (this.step === 638) {
            this.stepSmallList("Koji je stepen složenosti preloma stranice?", "ps_prelomStranice", ["Jednostavan", "Prosečan", "Složen"], "Jednostavan");
        }
        else if (this.step === 639) {
            this.stepSmallList("Koji je stepen složenosti montaže?", "ps_montaza", ["Jednostavan", "Prosečan", "Složen"], "Jednostavan");
        }
        else if (this.step === 640) {
            this.stepInputNumber("Koliko slika je potrebno dodatno obraditi?", "ps_dodatnaObradaSlikaU", "0");
        }
        else if (this.step === 641) {
            this.stepSmallList("Koji je stepen složenosti dodatne obrade slika?", "ps_dodatnaObradaSlika", ["Jednostavan", "Prosečan", "Složen"], "Jednostavan");
        }
        else if (this.step === 642) {
            this.stepSmallList("Izaberite izlazne medije?", "ps_izlazniMedijiTip", ["Laserski otisak", "Digitalni probni otisak", "CTP"], "CTP");
        }
        else if (this.step === 643) {
            this.stepSmallList("Koji je stepen složenosti izlaznih medija?", "ps_izlazniMedijiSlozenost", ["Jednostavan", "Prosečan", "Složen"], "Jednostavan");
        }
        else if (this.step === 644) {
            this.stepSpecialListPlatform("Izaberite platformu na kojoj želite da radite digitalnu pripremu.", "ps_oprema");
        }
        else if (this.step === 645) {
            this.stepText('Sledeći korak...', 20);
        }
        // ------- STAMPA -------
        // * preokret
        // 701 - plakat
        // 731 - letak
        // 751 - brosura
        // * 760 sledece
        else if (this.step === 700) {
            this.stepConfirmation("Na redu su podaci o štampi", "Uredu");
        }
        // Plakat
        else if (this.step === 701) {
            this.stepSmallList("Vreme pripreme mašine za štampu", "st_pripremaMasine", ["Jednostavano", "Prosečno", "Složeno"], "Jednostavano");
        }
        else if (this.step === 702) {
            this.stepSmallList("Složenot štampe - prosečan broj otisaka", "st_stampa", ["Jednostavna", "Prosečna", "Složena"], "Jednostavna");
        }
        else if (this.step === 703) {
            this.stepInputBoolean("Da li na mašini radi samo jedan mašinista?", "st_masinista");
        }
        else if (this.step === 704) {
            this.stepInputBoolean("Da li na mašini radi pomoćni radnik?", "st_pomocniRadnik");
        }
        else if (this.step === 705) {
            this.stepInputBoolean("Da li na mašini radi ulagač?", "st_ulagac");
        }
        else if (this.step === 706) {
            this.stepInputBoolean("Da li na mašini radi drugi mašinista?", "st_drugiMasinista");
        }
        // Letak
        else if (this.step === 731) {
            this.stepSmallList("Vreme pripreme mašine za štampu", "st_pripremaMasine", ["Jednostavano", "Prosečno", "Složeno"], "Jednostavano");
        }
        else if (this.step === 732) {
            this.stepSmallList("Složenot štampe - prosečan broj otisaka", "st_stampa", ["Jednostavna", "Prosečna", "Složena"], "Jednostavna");
        }
        else if (this.step === 733) {
            this.stepInputBoolean("Da li na mašini radi samo jedan mašinista?", "st_masinista");
        }
        else if (this.step === 734) {
            this.stepInputBoolean("Da li na mašini radi pomoćni radnik?", "st_pomocniRadnik");
        }
        else if (this.step === 735) {
            this.stepInputBoolean("Da li na mašini radi ulagač?", "st_ulagac");
        }
        else if (this.step === 736) {
            this.stepInputBoolean("Da li na mašini radi drugi mašinista?", "st_drugiMasinista");
        }
        // Brosura
        // korice
        else if (this.step === 737) {
            this.stepConfirmation("Pošto se mašina za štampu korica i knjižnog bloka razlikuju hajde prvo da utvrdimo parametra za korice.", "Uredu");
        }
        else if (this.step === 738) {
            this.stepSmallList("Vreme pripreme mašine za štampu. (korice)", "st_pripremaMasine_korice", ["Jednostavano", "Prosečno", "Složeno"], "Jednostavano");
        }
        else if (this.step === 739) {
            this.stepSmallList("Složenot štampe - prosečan broj otisaka. (korice)", "st_stampa_korice", ["Jednostavna", "Prosečna", "Složena"], "Jednostavna");
        }
        else if (this.step === 740) {
            this.stepInputBoolean("Da li na mašini radi samo jedan mašinista? (korice)", "st_masinista_korice");
        }
        else if (this.step === 741) {
            this.stepInputBoolean("Da li na mašini radi pomoćni radnik? (korice)", "st_pomocniRadnik_korice");
        }
        else if (this.step === 742) {
            this.stepInputBoolean("Da li na mašini radi ulagač? (korice)", "st_ulagac_korice");
        }
        else if (this.step === 743) {
            this.stepInputBoolean("Da li na mašini radi drugi mašinista? (korice)", "st_drugiMasinista_korice");
        }
        else if (this.step === 744) {
            this.stepConfirmation("Na redu su parametri o knjižnom bloku.", "Uredu");
        }
        // knjižni blok
        else if (this.step === 745) {
            this.stepSmallList("Vreme pripreme mašine za štampu", "st_pripremaMasine", ["Jednostavano", "Prosečno", "Složeno"], "Jednostavano");
        }
        else if (this.step === 746) {
            this.stepSmallList("Složenot štampe - prosečan broj otisaka", "st_stampa", ["Jednostavna", "Prosečna", "Složena"], "Jednostavna");
        }
        else if (this.step === 747) {
            this.stepInputBoolean("Da li na mašini radi samo jedan mašinista?", "st_masinista");
        }
        else if (this.step === 748) {
            this.stepInputBoolean("Da li na mašini radi pomoćni radnik?", "st_pomocniRadnik");
        }
        else if (this.step === 749) {
            this.stepInputBoolean("Da li na mašini radi ulagač?", "st_ulagac");
        }
        else if (this.step === 750) {
            this.stepInputBoolean("Da li na mašini radi drugi mašinista?", "st_drugiMasinista");
        }
        else if (this.step === 760) {
            this.stepText('Sledeći korak...', 20);
        }
        // ------- UTROSAK BOJE -------
        // * preokret
        // 800 - plakat
        // 828 - letak
        // 860 - brosura
        //
        else if (this.step === 799) {
            this.stepConfirmation("Unesimo podatke o utrošku boje.", "Uredu");
        }
        // Plakat
        else if (this.step === 800) {
            this.stepInputBoolean("Da li štampana površina prelazi preko celog plakata?", "ub_povrsina_max");
        }
        else if (this.step === 801) {
            this.stepInputNumber("Napišite širinu površine štampe u mm.", "ub_povrsina_sirina");
        }
        else if (this.step === 802) {
            this.stepInputNumber("Napišite dužinu površine štampe u mm.", "ub_povrsina_duzina");
        }
        else if (this.step === 803) {
            this.stepInputBoolean("Da li se nalazi slika preko cele površine?", "ub_sadrzaj_maxSlika");
        }
        else if (this.step === 804) {
            this.stepInputBoolean("Da li je cela površina štampe obojena u neku boju?", "ub_pozadina");
        }
        else if (this.step === 805) {
            this.stepSpecialListColors("Izaberite boju:", "ub_pozadinaBoja");
        }
        else if (this.step === 806) {
            this.stepInputBoolean("Da li se nalazi tekst preko cele površine?", "ub_sadrzaj_maxTekst");
        }
        else if (this.step === 807) {
            this.stepInputNumber("Koliko slika sadrži štampana površina", "ub_sadrzaj_brSlika");
        }
        else if (this.step === 808) {
            this.stepInputArray("Unesite duzinu slike", "ub_sadrzaj_dimenzijeSlika", [{ 'name': 'x', 'max': 10000, 'text': 'Navedite širinu slike' },
                { 'name': 'y', 'max': 10000, 'text': 'Navedite dužinu slike' },], "ub_sadrzaj_brSlika");
        }
        else if (this.step === 809) {
            this.stepInputBoolean("Da li je ostatak površine štampe čini tekst? Ukoliko se tekst prestampava izaberite opciju 'ne'.", "ub_sadrzaj_tekstOstatak");
        }
        else if (this.step === 810) {
            this.stepInputBoolean("Da li se tekst prestampava? U ovom slučaju morate znati tačne dimenzije teksta.", "ub_sadrzaj_tekstPrestampavanje");
        }
        else if (this.step === 811) {
            this.stepInputNumber("Koliko tekstova(sekcija) sadrži štampana površina", "ub_sadrzaj_brTekstova");
        }
        else if (this.step === 812) {
            this.stepInputArray("", "ub_sadrzaj_dimenzijeTeksta", [{ 'name': 'x', 'max': 10000, 'text': 'Navedite širinu sekcije' },
                { 'name': 'y', 'max': 10000, 'text': 'Navedite dužinu sekcije' },], "ub_sadrzaj_brTekstova");
        }
        else if (this.step === 813) {
            this.stepInputBoolean("Da li je tekst beo", "ub_sadrzaj_tekstBeli");
        }
        else if (this.step === 814) {
            this.stepSpecialListColors("Izaberite boju teksta:", "ub_sadrzaj_bojaTeksta");
        }
        else if (this.step === 815) {
            this.stepSpecialListText("Izaberite složenost teksta", "ub_sadrzaj_slozenostTeksta");
        }
        // Letak
        else if (this.step === 828) {
            this.stepInputBoolean("Da li vrši štampa na obe strane letka?", "ub_povrsina_double");
        }
        else if (this.step === 829) {
            this.stepConfirmation("Kako bi povećali preciznost razdvojio sam letak na prednju i zadnju stranu, prvo ćemo zapisati informacije o PREDNJOJ strani letka.", "OK!");
        }
        // Letak - prva strana
        else if (this.step === 830) {
            this.stepInputBoolean("Da li štampana površina prelazi preko cele strane letka?", "ub_povrsina_max");
        }
        else if (this.step === 831) {
            this.stepInputNumber("Napišite širinu površine štampe u mm.", "ub_povrsina_sirina");
        }
        else if (this.step === 832) {
            this.stepInputNumber("Napišite dužinu površine štampe u mm.", "ub_povrsina_duzina");
        }
        else if (this.step === 833) {
            this.stepInputBoolean("Da li se nalazi slika preko cele površine?", "ub_sadrzaj_maxSlika");
        }
        else if (this.step === 834) {
            this.stepInputBoolean("Da li je cela površina štampe obojena u neku boju?", "ub_pozadina");
        }
        else if (this.step === 835) {
            this.stepSpecialListColors("Izaberite boju:", "ub_pozadinaBoja");
        }
        else if (this.step === 836) {
            this.stepInputBoolean("Da li se nalazi tekst preko cele površine?", "ub_sadrzaj_maxTekst");
        }
        else if (this.step === 837) {
            this.stepInputNumber("Koliko slika sadrži štampana površina", "ub_sadrzaj_brSlika");
        }
        else if (this.step === 838) {
            this.stepInputArray("Unesite duzinu slike", "ub_sadrzaj_dimenzijeSlika", [{ 'name': 'x', 'max': 10000, 'text': 'Navedite širinu slike' },
                { 'name': 'y', 'max': 10000, 'text': 'Navedite dužinu slike' },], "ub_sadrzaj_brSlika");
        }
        else if (this.step === 839) {
            this.stepInputBoolean("Da li je ostatak površine štampe čini tekst? Ukoliko se tekst prestampava izaberite opciju 'ne'.", "ub_sadrzaj_tekstOstatak");
        }
        else if (this.step === 840) {
            this.stepInputBoolean("Da li se tekst prestampava? U ovom slučaju morate znati tačne dimenzije teksta.", "ub_sadrzaj_tekstPrestampavanje");
        }
        else if (this.step === 841) {
            this.stepInputNumber("Koliko tekstova(sekcija) sadrži štampana površina", "ub_sadrzaj_brTekstova");
        }
        else if (this.step === 842) {
            this.stepInputArray("", "ub_sadrzaj_dimenzijeTeksta", [{ 'name': 'x', 'max': 10000, 'text': 'Navedite širinu sekcije' },
                { 'name': 'y', 'max': 10000, 'text': 'Navedite dužinu sekcije' },], "ub_sadrzaj_brTekstova");
        }
        else if (this.step === 843) {
            this.stepInputBoolean("Da li je tekst beo", "ub_sadrzaj_tekstBeli");
        }
        else if (this.step === 844) {
            this.stepSpecialListColors("Izaberite boju teksta:", "ub_sadrzaj_bojaTeksta");
        }
        else if (this.step === 845) {
            this.stepSpecialListText("Izaberite složenost teksta", "ub_sadrzaj_slozenostTeksta");
        }
        // Letak - druga strana
        else if (this.step === 849) {
            this.stepConfirmation("Okrenimo letak, nadalje treba upisati informacije za zadnju stranu letka.", "Okrenuo");
        }
        else if (this.step === 850) {
            this.stepInputBoolean("Da li štampana površina prelazi preko celog letka?", "ub_povrsina_max_B");
        }
        else if (this.step === 851) {
            this.stepInputNumber("Napišite širinu površine štampe u mm.", "ub_povrsina_sirina_B");
        }
        else if (this.step === 852) {
            this.stepInputNumber("Napišite dužinu površine štampe u mm.", "ub_povrsina_duzina_B");
        }
        else if (this.step === 853) {
            this.stepInputBoolean("Da li se nalazi slika preko cele površine?", "ub_sadrzaj_maxSlika_B");
        }
        else if (this.step === 854) {
            this.stepInputBoolean("Da li je cela površina štampe obojena u neku boju?", "ub_pozadina_B");
        }
        else if (this.step === 855) {
            this.stepSpecialListColors("Izaberite boju:", "ub_pozadinaBoja_B");
        }
        else if (this.step === 856) {
            this.stepInputBoolean("Da li se nalazi tekst preko cele površine?", "ub_sadrzaj_maxTekst_B");
        }
        else if (this.step === 857) {
            this.stepInputNumber("Koliko slika sadrži štampana površina", "ub_sadrzaj_brSlika_B");
        }
        else if (this.step === 858) {
            this.stepInputArray("Unesite duzinu slike", "ub_sadrzaj_dimenzijeSlika_B", [{ 'name': 'x', 'max': 10000, 'text': 'Navedite širinu slike' },
                { 'name': 'y', 'max': 10000, 'text': 'Navedite dužinu slike' },], "ub_sadrzaj_brSlika_B");
        }
        else if (this.step === 859) {
            this.stepInputBoolean("Da li je ostatak površine štampe čini tekst? Ukoliko se tekst prestampava izaberite opciju 'ne'.", "ub_sadrzaj_tekstOstatak_B");
        }
        else if (this.step === 860) {
            this.stepInputBoolean("Da li se tekst prestampava? U ovom slučaju morate znati tačne dimenzije teksta.", "ub_sadrzaj_tekstPrestampavanje_B");
        }
        else if (this.step === 861) {
            this.stepInputNumber("Koliko tekstova(sekcija) sadrži štampana površina", "ub_sadrzaj_brTekstova_B");
        }
        else if (this.step === 862) {
            this.stepInputArray("", "ub_sadrzaj_dimenzijeTeksta_B", [{ 'name': 'x', 'max': 10000, 'text': 'Navedite širinu sekcije' },
                { 'name': 'y', 'max': 10000, 'text': 'Navedite dužinu sekcije' },], "ub_sadrzaj_brTekstova_B");
        }
        else if (this.step === 863) {
            this.stepInputBoolean("Da li je tekst beo", "ub_sadrzaj_tekstBeli_B");
        }
        else if (this.step === 864) {
            this.stepSpecialListColors("Izaberite boju teksta:", "ub_sadrzaj_bojaTeksta_B");
        }
        else if (this.step === 865) {
            this.stepSpecialListText("Izaberite složenost teksta", "ub_sadrzaj_slozenostTeksta_B");
        }
        //Brosura
        else if (this.step === 896) {
            this.stepConfirmation("Brošuru je moguće odvojiti u dve celine, korice i knjižni blok. Prvi na redu su podaci vezani za KORICE.", "Uredu");
        }
        else if (this.step === 897) {
            this.stepInputBoolean("Da li se vrši štampa samo na spoljašnu stranu korica?", "ub_korice_double");
        }
        else if (this.step === 898) {
            this.stepConfirmation("Kako bi povećali preciznost razdvojio sam korice na prednju i zadnju stranu.", "OK!");
        }
        else if (this.step === 899) {
            this.stepConfirmation("Kako bi povećali preciznost razdvojio sam korice na četiri segmenta: prednja-spoljna, zadnja-spoljna, prednja-unutrašnja i zadnja-unutrašnja strana. Prvo ćemo izvršiti zapis podataka za PREDNJU-SPOLJAŠNU stranu korica.", "OK!");
        }
        // prednja-spoljna
        else if (this.step === 900) {
            this.stepInputBoolean("Da li štampana površina prelazi preko cele strane?", "ub_povrsina_max_korice_A");
        }
        else if (this.step === 901) {
            this.stepInputNumber("Napišite širinu površine štampe u mm.", "ub_povrsina_sirina_korice_A");
        }
        else if (this.step === 902) {
            this.stepInputNumber("Napišite dužinu površine štampe u mm.", "ub_povrsina_duzina_korice_A");
        }
        else if (this.step === 903) {
            this.stepInputBoolean("Da li se nalazi slika preko cele površine štampe?", "ub_sadrzaj_maxSlika_korice_A");
        }
        else if (this.step === 904) {
            this.stepInputBoolean("Da li je cela površina štampe obojena u neku boju?", "ub_pozadina_korice_A");
        }
        else if (this.step === 905) {
            this.stepSpecialListColors("Izaberite boju:", "ub_pozadinaBoja_korice_A");
        }
        else if (this.step === 906) {
            this.stepInputBoolean("Da li se nalazi tekst preko cele površine štampe?", "ub_sadrzaj_maxTekst_korice_A");
        }
        else if (this.step === 907) {
            this.stepInputNumber("Koliko slika sadrži štampana površina", "ub_sadrzaj_brSlika_korice_A");
        }
        else if (this.step === 908) {
            this.stepInputArray("Unesite duzinu slike", "ub_sadrzaj_dimenzijeSlika_korice_A", [{ 'name': 'x', 'max': 10000, 'text': 'Navedite širinu slike' },
                { 'name': 'y', 'max': 10000, 'text': 'Navedite dužinu slike' },], "ub_sadrzaj_brSlika_korice_A");
        }
        else if (this.step === 909) {
            this.stepInputBoolean("Da li je ostatak površine štampe čini tekst? Ukoliko se tekst prestampava izaberite opciju 'ne'.", "ub_sadrzaj_tekstOstatak_korice_A");
        }
        else if (this.step === 910) {
            this.stepInputBoolean("Da li se tekst prestampava? U ovom slučaju morate znati tačne dimenzije teksta.", "ub_sadrzaj_tekstPrestampavanje_korice_A");
        }
        else if (this.step === 911) {
            this.stepInputNumber("Koliko tekstova(sekcija) sadrži štampana površina", "ub_sadrzaj_brTekstova_korice_A");
        }
        else if (this.step === 912) {
            this.stepInputArray("", "ub_sadrzaj_dimenzijeTeksta_A", [{ 'name': 'x', 'max': 10000, 'text': 'Navedite širinu sekcije' },
                { 'name': 'y', 'max': 10000, 'text': 'Navedite dužinu sekcije' },], "ub_sadrzaj_brTekstova_korice_A");
        }
        else if (this.step === 913) {
            this.stepInputBoolean("Da li je tekst beo", "ub_sadrzaj_tekstBeli_korice_A");
        }
        else if (this.step === 914) {
            this.stepSpecialListColors("Izaberite boju teksta:", "ub_sadrzaj_bojaTeksta_korice_A");
        }
        else if (this.step === 915) {
            this.stepSpecialListText("Izaberite složenost teksta", "ub_sadrzaj_slozenostTeksta_korice_A");
        }
        else if (this.step === 916) {
            this.stepInputBoolean("Da li se vrši lakiranje korica sa spoljne strane?", "ub_pozadina_lakiranje");
        }
        else if (this.step === 919) {
            this.stepConfirmation("Okrenimo korice, nadalje treba upisati informacije za spoljnu-zadnju stranu korica.", "Okrenuo");
        }
        // Zadnja-spoljna strana
        else if (this.step === 920) {
            this.stepInputBoolean("Da li štampana površina prelazi preko cele strane?", "ub_povrsina_max_korice_B");
        }
        else if (this.step === 921) {
            this.stepInputNumber("Napišite širinu površine štampe u mm.", "ub_povrsina_sirina_korice_B");
        }
        else if (this.step === 922) {
            this.stepInputNumber("Napišite dužinu površine štampe u mm.", "ub_povrsina_duzina_korice_B");
        }
        else if (this.step === 923) {
            this.stepInputBoolean("Da li se nalazi slika preko cele štampane površine?", "ub_sadrzaj_maxSlika_korice_B");
        }
        else if (this.step === 924) {
            this.stepInputBoolean("Da li je cela površina štampe obojena u neku boju?", "ub_pozadina_korice_B");
        }
        else if (this.step === 925) {
            this.stepSpecialListColors("Izaberite boju:", "ub_pozadinaBoja_korice_B");
        }
        else if (this.step === 926) {
            this.stepInputBoolean("Da li se nalazi tekst preko cele površine?", "ub_sadrzaj_maxTekst_korice_B");
        }
        else if (this.step === 927) {
            this.stepInputNumber("Koliko slika sadrži štampana površina", "ub_sadrzaj_brSlika_korice_B");
        }
        else if (this.step === 928) {
            this.stepInputArray("Unesite duzinu slike", "ub_sadrzaj_dimenzijeSlika_korice_B", [{ 'name': 'x', 'max': 10000, 'text': 'Navedite širinu slike' },
                { 'name': 'y', 'max': 10000, 'text': 'Navedite dužinu slike' },], "ub_sadrzaj_brSlika_korice_B");
        }
        else if (this.step === 929) {
            this.stepInputBoolean("Da li je ostatak površine štampe čini tekst? Ukoliko se tekst prestampava izaberite opciju 'ne'.", "ub_sadrzaj_tekstOstatak_korice_B");
        }
        else if (this.step === 930) {
            this.stepInputBoolean("Da li se tekst prestampava? U ovom slučaju morate znati tačne dimenzije teksta.", "ub_sadrzaj_tekstPrestampavanje_korice_B");
        }
        else if (this.step === 931) {
            this.stepInputNumber("Koliko tekstova(sekcija) sadrži štampana površina", "ub_sadrzaj_brTekstova_korice_B");
        }
        else if (this.step === 932) {
            this.stepInputArray("", "ub_sadrzaj_dimenzijeTeksta_B", [{ 'name': 'x', 'max': 10000, 'text': 'Navedite širinu sekcije' },
                { 'name': 'y', 'max': 10000, 'text': 'Navedite dužinu sekcije' },], "ub_sadrzaj_brTekstova_korice_B");
        }
        else if (this.step === 933) {
            this.stepInputBoolean("Da li je tekst beo", "ub_sadrzaj_tekstBeli_korice_B");
        }
        else if (this.step === 934) {
            this.stepSpecialListColors("Izaberite boju teksta:", "ub_sadrzaj_bojaTeksta_korice_B");
        }
        else if (this.step === 935) {
            this.stepSpecialListText("Izaberite složenost teksta", "ub_sadrzaj_slozenostTeksta_korice_B");
        }
        // prednja-unutrasnja strana
        else if (this.step === 939) {
            this.stepConfirmation("Hajde da otvorimo korice, nadalje treba upisati informacije za unutrašju-prednju stranu korica.", "Otvorio");
        }
        else if (this.step === 940) {
            this.stepInputBoolean("Da li štampana površina prelazi preko cele strane?", "ub_povrsina_max_korice_C");
        }
        else if (this.step === 941) {
            this.stepInputNumber("Napišite širinu površine štampe u mm.", "ub_povrsina_sirina_korice_C");
        }
        else if (this.step === 942) {
            this.stepInputNumber("Napišite dužinu površine štampe u mm.", "ub_povrsina_duzina_korice_C");
        }
        else if (this.step === 943) {
            this.stepInputBoolean("Da li se nalazi slika preko cele štampane površine?", "ub_sadrzaj_maxSlika_korice_C");
        }
        else if (this.step === 944) {
            this.stepInputBoolean("Da li je cela površina štampe obojena u neku boju?", "ub_pozadina_korice_C");
        }
        else if (this.step === 945) {
            this.stepSpecialListColors("Izaberite boju:", "ub_pozadinaBoja_korice_C");
        }
        else if (this.step === 946) {
            this.stepInputBoolean("Da li se nalazi tekst preko cele štampane površine?", "ub_sadrzaj_maxTekst_korice_C");
        }
        else if (this.step === 947) {
            this.stepInputNumber("Koliko slika sadrži štampana površina", "ub_sadrzaj_brSlika_korice_C");
        }
        else if (this.step === 948) {
            this.stepInputArray("Unesite duzinu slike", "ub_sadrzaj_dimenzijeSlika_korice_C", [{ 'name': 'x', 'max': 10000, 'text': 'Navedite širinu slike' },
                { 'name': 'y', 'max': 10000, 'text': 'Navedite dužinu slike' },], "ub_sadrzaj_brSlika_korice_C");
        }
        else if (this.step === 949) {
            this.stepInputBoolean("Da li je ostatak površine štampe čini tekst? Ukoliko se tekst prestampava izaberite opciju 'ne'.", "ub_sadrzaj_tekstOstatak_korice_C");
        }
        else if (this.step === 950) {
            this.stepInputBoolean("Da li se tekst prestampava? U ovom slučaju morate znati tačne dimenzije teksta.", "ub_sadrzaj_tekstPrestampavanje_korice_C");
        }
        else if (this.step === 951) {
            this.stepInputNumber("Koliko tekstova(sekcija) sadrži štampana površina", "ub_sadrzaj_brTekstova_korice_C");
        }
        else if (this.step === 952) {
            this.stepInputArray("", "ub_sadrzaj_dimenzijeTeksta_C", [{ 'name': 'x', 'max': 10000, 'text': 'Navedite širinu sekcije' },
                { 'name': 'y', 'max': 10000, 'text': 'Navedite dužinu sekcije' },], "ub_sadrzaj_brTekstova_korice_C");
        }
        else if (this.step === 953) {
            this.stepInputBoolean("Da li je tekst beo", "ub_sadrzaj_tekstBeli_korice_C");
        }
        else if (this.step === 954) {
            this.stepSpecialListColors("Izaberite boju teksta:", "ub_sadrzaj_bojaTeksta_korice_C");
        }
        else if (this.step === 955) {
            this.stepSpecialListText("Izaberite složenost teksta", "ub_sadrzaj_slozenostTeksta_korice_C");
        }
        // zadnja-unutrasnja strana
        else if (this.step === 959) {
            this.stepConfirmation("Okrenimo ponovo korice, nadalje treba upisati informacije za unutrašju-zadnju stranu korica.", "Okrenuo!");
        }
        else if (this.step === 960) {
            this.stepInputBoolean("Da li štampana površina prelazi preko cele strane?", "ub_povrsina_max_korice_D");
        }
        else if (this.step === 961) {
            this.stepInputNumber("Napišite širinu površine štampe u mm.", "ub_povrsina_sirina_korice_D");
        }
        else if (this.step === 962) {
            this.stepInputNumber("Napišite dužinu površine štampe u mm.", "ub_povrsina_duzina_korice_D");
        }
        else if (this.step === 963) {
            this.stepInputBoolean("Da li se nalazi slika preko cele štampane površine?", "ub_sadrzaj_maxSlika_korice_D");
        }
        else if (this.step === 964) {
            this.stepInputBoolean("Da li je cela površina štampe obojena u neku boju?", "ub_pozadina_korice_D");
        }
        else if (this.step === 965) {
            this.stepSpecialListColors("Izaberite boju:", "ub_pozadinaBoja_korice_D");
        }
        else if (this.step === 966) {
            this.stepInputBoolean("Da li se nalazi tekst preko cele štampane površine?", "ub_sadrzaj_maxTekst_korice_D");
        }
        else if (this.step === 967) {
            this.stepInputNumber("Koliko slika sadrži štampana površina", "ub_sadrzaj_brSlika_korice_D");
        }
        else if (this.step === 968) {
            this.stepInputArray("Unesite duzinu slike", "ub_sadrzaj_dimenzijeSlika_korice_D", [{ 'name': 'x', 'max': 10000, 'text': 'Navedite širinu slike' },
                { 'name': 'y', 'max': 10000, 'text': 'Navedite dužinu slike' },], "ub_sadrzaj_brSlika_korice_D");
        }
        else if (this.step === 969) {
            this.stepInputBoolean("Da li je ostatak površine štampe čini tekst? Ukoliko se tekst prestampava izaberite opciju 'ne'.", "ub_sadrzaj_tekstOstatak_korice_D");
        }
        else if (this.step === 970) {
            this.stepInputBoolean("Da li se tekst prestampava? U ovom slučaju morate znati tačne dimenzije teksta.", "ub_sadrzaj_tekstPrestampavanje_korice_D");
        }
        else if (this.step === 971) {
            this.stepInputNumber("Koliko tekstova(sekcija) sadrži štampana površina", "ub_sadrzaj_brTekstova_korice_D");
        }
        else if (this.step === 972) {
            this.stepInputArray("", "ub_sadrzaj_dimenzijeTeksta_D", [{ 'name': 'x', 'max': 10000, 'text': 'Navedite širinu sekcije' },
                { 'name': 'y', 'max': 10000, 'text': 'Navedite dužinu sekcije' },], "ub_sadrzaj_brTekstova_korice_D");
        }
        else if (this.step === 973) {
            this.stepInputBoolean("Da li je tekst beo", "ub_sadrzaj_tekstBeli_korice_D");
        }
        else if (this.step === 974) {
            this.stepSpecialListColors("Izaberite boju teksta:", "ub_sadrzaj_bojaTeksta_korice_D");
        }
        else if (this.step === 975) {
            this.stepSpecialListText("Izaberite složenost teksta", "ub_sadrzaj_slozenostTeksta_korice_D");
        }
        // Knjižni blok
        else if (this.step === 997) {
            this.stepConfirmation("Vreme je za knjižni blok. Prvo treba da utvrdimo sistem po kom je najbolje da zapišemo podatke o štampanim površinama knjižnog bloka.", "Uredu");
        }
        else if (this.step === 998) {
            this.stepSmallList("Izaberite sistem. Da bi se lakše odlučili koji sistem da uzmete pogledajte 'pomoć'. ", "ub_knjizniBlok_sistem", ["Copy-paste", "Par-nepar", "Ukupno"], "Copy-paste");
        }
        // copy-paste sistem
        else if (this.step === 999) {
            this.stepConfirmation("U 'copy-paste' sistemu polazimo od prepostavke da su sve stranice u pogledu količine teksta i slika iste ili bar slične. Sad zamislite jednu 'prosečnu' stranu vaše brošure i recite mi šta vidite. ", "Zamislio");
        }
        else if (this.step === 1000) {
            this.stepInputBoolean("Da li štampana površina prelazi preko cele stranice Vaše brošure?", "ub_povrsina_max_kblok");
        }
        else if (this.step === 1001) {
            this.stepInputNumber("Napišite širinu površine štampe u mm.", "ub_povrsina_sirina_kblok");
        }
        else if (this.step === 1002) {
            this.stepInputNumber("Napišite dužinu površine štampe u mm.", "ub_povrsina_duzina_kblok");
        }
        else if (this.step === 1003) {
            this.stepInputBoolean("Da li se nalazi slika preko cele površine?", "ub_sadrzaj_maxSlika_kblok");
        }
        else if (this.step === 1004) {
            this.stepInputBoolean("Da li je cela površina štampe obojena u neku boju?", "ub_pozadina_kblok");
        }
        else if (this.step === 1005) {
            this.stepSpecialListColors("Izaberite boju:", "ub_pozadinaBoja_kblok");
        }
        else if (this.step === 1006) {
            this.stepInputBoolean("Da li se nalazi tekst preko cele površine?", "ub_sadrzaj_maxTekst_kblok");
        }
        else if (this.step === 1007) {
            this.stepInputNumber("Koliko slika sadrži štampana površina", "ub_sadrzaj_brSlika_kblok");
        }
        else if (this.step === 1008) {
            this.stepInputArray("Unesite duzinu slike", "ub_sadrzaj_dimenzijeSlika_kblok", [{ 'name': 'x', 'max': 10000, 'text': 'Navedite širinu slike' },
                { 'name': 'y', 'max': 10000, 'text': 'Navedite dužinu slike' },], "ub_sadrzaj_brSlika_kblok");
        }
        else if (this.step === 1009) {
            this.stepInputBoolean("Da li je ostatak površine štampe čini tekst? Ukoliko se tekst prestampava izaberite opciju 'ne'.", "ub_sadrzaj_tekstOstatak_kblok");
        }
        else if (this.step === 1010) {
            this.stepInputBoolean("Da li se tekst prestampava? U ovom slučaju morate znati tačne dimenzije teksta.", "ub_sadrzaj_tekstPrestampavanje_kblok");
        }
        else if (this.step === 1011) {
            this.stepInputNumber("Koliko tekstova(sekcija) sadrži štampana površina", "ub_sadrzaj_brTekstova_kblok");
        }
        else if (this.step === 1012) {
            this.stepInputArray("", "ub_sadrzaj_dimenzijeTeksta_kblok", [{ 'name': 'x', 'max': 10000, 'text': 'Navedite širinu sekcije' },
                { 'name': 'y', 'max': 10000, 'text': 'Navedite dužinu sekcije' },], "ub_sadrzaj_brTekstova_kblok");
        }
        else if (this.step === 1013) {
            this.stepInputBoolean("Da li je tekst beo", "ub_sadrzaj_tekstBeli_kblok");
        }
        else if (this.step === 1014) {
            this.stepSpecialListColors("Izaberite boju teksta:", "ub_sadrzaj_bojaTeksta_kblok");
        }
        else if (this.step === 1015) {
            this.stepSpecialListText("Izaberite složenost teksta", "ub_sadrzaj_slozenostTeksta_kblok");
        }
        // par-nepar sistem
        else if (this.step === 1019) {
            this.stepConfirmation("U 'par-nepar' sistemu razvojili smo parne i neparne strane brošure u odnosu na njihov sadržaj. Molim Vas zamislite svoju brošuru i recite nam kako izgledaju neparne stranice Vaše brošure.", "Zamislio");
        }
        else if (this.step === 1020) {
            this.stepInputBoolean("Da li štampana površina prelazi preko cele stranice Vaše brošure?", "ub_povrsina_max_kblok_A");
        }
        else if (this.step === 1021) {
            this.stepInputNumber("Napišite širinu površine štampe u mm.", "ub_povrsina_sirina_kblok_A");
        }
        else if (this.step === 1022) {
            this.stepInputNumber("Napišite dužinu površine štampe u mm.", "ub_povrsina_duzina_kblok_A");
        }
        else if (this.step === 1023) {
            this.stepInputBoolean("Da li se nalazi slika preko cele površine?", "ub_sadrzaj_maxSlika_kblok_A");
        }
        else if (this.step === 1024) {
            this.stepInputBoolean("Da li je cela površina štampe obojena u neku boju?", "ub_pozadina_kblok_A");
        }
        else if (this.step === 1025) {
            this.stepSpecialListColors("Izaberite boju:", "ub_pozadinaBoja_kblok_A");
        }
        else if (this.step === 1026) {
            this.stepInputBoolean("Da li se nalazi tekst preko cele površine?", "ub_sadrzaj_maxTekst_kblok_A");
        }
        else if (this.step === 1027) {
            this.stepInputNumber("Koliko slika sadrži štampana površina", "ub_sadrzaj_brSlika_kblok_A");
        }
        else if (this.step === 1028) {
            this.stepInputArray("Unesite duzinu slike", "ub_sadrzaj_dimenzijeSlika_kblok_A", [{ 'name': 'x', 'max': 10000, 'text': 'Navedite širinu slike' },
                { 'name': 'y', 'max': 10000, 'text': 'Navedite dužinu slike' },], "ub_sadrzaj_brSlika_kblok_A");
        }
        else if (this.step === 1029) {
            this.stepInputBoolean("Da li je ostatak površine štampe čini tekst? Ukoliko se tekst prestampava izaberite opciju 'ne'.", "ub_sadrzaj_tekstOstatak_kblok_A");
        }
        else if (this.step === 1030) {
            this.stepInputBoolean("Da li se tekst prestampava? U ovom slučaju morate znati tačne dimenzije teksta.", "ub_sadrzaj_tekstPrestampavanje_kblok_A");
        }
        else if (this.step === 1031) {
            this.stepInputNumber("Koliko tekstova(sekcija) sadrži štampana površina", "ub_sadrzaj_brTekstova_kblok_A");
        }
        else if (this.step === 1032) {
            this.stepInputArray("", "ub_sadrzaj_dimenzijeTeksta_kblok_A", [{ 'name': 'x', 'max': 10000, 'text': 'Navedite širinu sekcije' },
                { 'name': 'y', 'max': 10000, 'text': 'Navedite dužinu sekcije' },], "ub_sadrzaj_brTekstova_kblok_A");
        }
        else if (this.step === 1033) {
            this.stepInputBoolean("Da li je tekst beo", "ub_sadrzaj_tekstBeli_kblok_A");
        }
        else if (this.step === 1034) {
            this.stepSpecialListColors("Izaberite boju teksta:", "ub_sadrzaj_bojaTeksta_kblok_A");
        }
        else if (this.step === 1035) {
            this.stepSpecialListText("Izaberite složenost teksta", "ub_sadrzaj_slozenostTeksta_kblok_A");
        }
        // Parne
        else if (this.step === 1039) {
            this.stepConfirmation("Pređimo na parne stranice Vaše brošure.", "Zamislio");
        }
        else if (this.step === 1040) {
            this.stepInputBoolean("Da li štampana površina prelazi preko cele stranice Vaše brošure?", "ub_povrsina_max_kblok_B");
        }
        else if (this.step === 1041) {
            this.stepInputNumber("Napišite širinu površine štampe u mm.", "ub_povrsina_sirina_kblok_B");
        }
        else if (this.step === 1042) {
            this.stepInputNumber("Napišite dužinu površine štampe u mm.", "ub_povrsina_duzina_kblok_B");
        }
        else if (this.step === 1043) {
            this.stepInputBoolean("Da li se nalazi slika preko cele površine?", "ub_sadrzaj_maxSlika_kblok_B");
        }
        else if (this.step === 1044) {
            this.stepInputBoolean("Da li je cela površina štampe obojena u neku boju?", "ub_pozadina_kblok_B");
        }
        else if (this.step === 1045) {
            this.stepSpecialListColors("Izaberite boju:", "ub_pozadinaBoja_kblok_B");
        }
        else if (this.step === 1046) {
            this.stepInputBoolean("Da li se nalazi tekst preko cele površine?", "ub_sadrzaj_maxTekst_kblok_B");
        }
        else if (this.step === 1047) {
            this.stepInputNumber("Koliko slika sadrži štampana površina", "ub_sadrzaj_brSlika_kblok_B");
        }
        else if (this.step === 1048) {
            this.stepInputArray("Unesite duzinu slike", "ub_sadrzaj_dimenzijeSlika_kblok_B", [{ 'name': 'x', 'max': 10000, 'text': 'Navedite širinu slike' },
                { 'name': 'y', 'max': 10000, 'text': 'Navedite dužinu slike' },], "ub_sadrzaj_brSlika_kblok_B");
        }
        else if (this.step === 1049) {
            this.stepInputBoolean("Da li je ostatak površine štampe čini tekst? Ukoliko se tekst prestampava izaberite opciju 'ne'.", "ub_sadrzaj_tekstOstatak_kblok_B");
        }
        else if (this.step === 1050) {
            this.stepInputBoolean("Da li se tekst prestampava? U ovom slučaju morate znati tačne dimenzije teksta.", "ub_sadrzaj_tekstPrestampavanje_kblok_B");
        }
        else if (this.step === 1051) {
            this.stepInputNumber("Koliko tekstova(sekcija) sadrži štampana površina", "ub_sadrzaj_brTekstova_kblok_B");
        }
        else if (this.step === 1052) {
            this.stepInputArray("", "ub_sadrzaj_dimenzijeTeksta_kblok_B", [{ 'name': 'x', 'max': 10000, 'text': 'Navedite širinu sekcije' },
                { 'name': 'y', 'max': 10000, 'text': 'Navedite dužinu sekcije' },], "ub_sadrzaj_brTekstova_kblok_B");
        }
        else if (this.step === 1053) {
            this.stepInputBoolean("Da li je tekst beo", "ub_sadrzaj_tekstBeli_kblok_B");
        }
        else if (this.step === 1054) {
            this.stepSpecialListColors("Izaberite boju teksta:", "ub_sadrzaj_bojaTeksta_kblok_B");
        }
        else if (this.step === 1055) {
            this.stepSpecialListText("Izaberite složenost teksta", "ub_sadrzaj_slozenostTeksta_kblok_B");
        }
        else if (this.step === 1056) {
            this.stepText("Kraj");
        }
        // Ukupno sistem
        else if (this.step === 1059) {
            this.stepConfirmation("'Ukupno' sistem se koristi kada je sadržaj brošure prilično različit. U ovom sitemu prvo ćemo definisati površinu štampe a zatim odrediti ukupan broj i dimenzije slika i tekstova. ", "Uredu");
        }
        else if (this.step === 1060) {
            this.stepInputBoolean("Da li prosečna štampana površina prelazi preko cele stranice Vaše brošure?", "ub_povrsina_max_kblok");
        }
        else if (this.step === 1061) {
            this.stepInputNumber("Napišite širinu površine štampe u mm.", "ub_povrsina_sirina_kblok");
        }
        else if (this.step === 1062) {
            this.stepInputNumber("Napišite dužinu površine štampe u mm.", "ub_povrsina_duzina_kblok");
        }
        else if (this.step === 1063) {
            this.stepInputNumber("Koliko slika sadrži brošura?", "ub_sadrzaj_brSlika_kblok");
        }
        else if (this.step === 1064) {
            this.stepInputArray("Unesite duzinu slike", "ub_sadrzaj_dimenzijeSlika_kblok", [{ 'name': 'x', 'max': 10000, 'text': 'Navedite širinu slike' },
                { 'name': 'y', 'max': 10000, 'text': 'Navedite dužinu slike' },], "ub_sadrzaj_brSlika_kblok");
        }
        else if (this.step === 1065) {
            this.stepSpecialListColors("Izaberite boju teksta za sve tekstove.", "ub_sadrzaj_bojaTeksta_kblok");
        }
        else if (this.step === 1066) {
            this.stepSpecialListText("Izaberite složenost teksta za sve tekstove.", "ub_sadrzaj_slozenostTeksta_kblok");
        }
        else if (this.step === 1080) {
            this.stepInputNumber("Rastur za boju u procentima?", "ub_rastur", '0');
        }
        else if (this.step === 1081) {
            this.stepText("Sledeci korak...", 20);
        }
        // ------- ZGO -------
        else if (this.step === 1100) {
            this.stepConfirmation("Ostalo je jos samo da unesemo osnovne parametre za završnu grafičku obradu.", "Uredu");
        }
        else if (this.step === 1101) {
            this.stepInputNumber("Koja je cena rada na mašini za rezanje? (din/h)", "zgo_rezanje_cena", "1800");
        }
        else if (this.step === 1102) {
            this.stepInputNumber("Koja je cena rada na mašini za savijanje? (din/h)", "zgo_savijanje_cena", "1700");
        }
        else if (this.step === 1103) {
            this.stepInputNumber("Koja je cena rada na mašini za šivenje? (din/h)", "zgo_sivenje_cena", "1750");
        }
        else if (this.step === 1104) {
            this.stepInputNumber("Vreme pripreme mašine za šivenje? (h)", "zgo_sivenje_priprema", "0.2");
        }
        else if (this.step === 1105) {
            this.stepInputNumber("Brzina šivenja? (brošura/h)", "zgo_sivenje_brzina", "900");
        }
        else if (this.step === 1106) {
            this.stepInputNumber("Koliko brosura ulagati pri zavrsnom rezanju?", "zgo_rezanje_zavrsno", '2', 1, 10);
        }
        else if (this.step === 1107) {
            this.stepInputBoolean("Da li je potrebno izvrsiti savijanje letka?", "zgo_savijanje_letak");
        }
        else if (this.step === 1107.1) {
            this.stepInputBoolean("Da li savijanje treba izvršiti po dužoj strani?", "zgo_savijanje_letak_strana");
        }
        else if (this.step === 1108) {
            this.stepText("Sledeće...");
        }
        else if (this.step === 1117) {
            this.calculateOfset();
            this.stepConfirmationResults("Cena vašeg proizvoda:", "Hvala");
        }
        else if (this.step === 1118) {
            this.form = this.fb.group({});
            this.step = 11;
            console.log(this.form.value);
            this.nextStep();
        }
        // Digitalna stampa
        else if (this.step === 1999) {
            this.stepInputNumber("Navedite potrebnu količinu grafičkog proizvoda (tiraž)", "tiraz", "", 1, 500000);
        }
        else if (this.step === 2000) {
            this.stepInputNumber("Navedite širinu grafičkog proizvoda u mm.", "sirinaProizvoda");
        }
        else if (this.step === 2001) {
            this.stepInputNumber("Navedite dužinu grafičkog proizvoda u mm.", "duzinaProizvoda");
        }
        else if (this.step === 2002) {
            this.stepInputBoolean("Da li ste naveli obrezan format", "obrezanFormatProizvodaB");
        }
        else if (this.step === 2003) {
            this.stepSpecialListDigitalPrintMachine("Izaberite mašinu za štampu.", "masinaZaStampu");
        }
        else if (this.step === 2004) {
            this.form.addControl("tipProizvoda", new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Letak', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]));
            this.formatProizvodaNeobrezan();
            this.tabakZaStampu(false);
            this.nextStep();
        }
        else if (this.step === 2005) {
            console.log(this.form.value);
            this.stepInputBoolean("Da li se vrši štampa na obe strane papira?", "stampaNaObeStrane");
        }
        else if (this.step === 2006) {
            this.calculateDigital();
            this.stepConfirmationResultsDigital("Cena vašeg proizvoda:", "Hvala");
        }
        else if (this.step === 2007) {
            this.form = this.fb.group({});
            this.step = 11;
            this.nextStep();
        }
        // Sito stampa
        else if (this.step === 3000) {
            this.stepConfirmation(":( Nažalost, ja sam jos uvek mali da bih sve znao (ver 0.1). Poseti me uskoro i verujem da ću ti tad moći pomoći!", "Vidimo se uskoro!");
        }
        else if (this.step === 3001) {
            this.form = this.fb.group({});
            this.step = 11;
            this.nextStep();
        }
        else if (this.step === 9999) {
            this.stepConfirmation("Upssss! Da li ste sigurni da ovaj proizvod mozete da štampate na izabranoj mašini. Mislim da je proizvod ipak prevelik za masinu. Hajde da probamo ponovo :)", "Uredu");
        }
        else if (this.step === 23334) {
            this.stepConfirmation("Vreme je da uradimo kalkulaciju. Da li se slažete?", "Slažem se!");
        }
    };
    // NextStep
    KalkulatorComponent.prototype.nextStep = function () {
        if (this.step === 4) {
            if (this.get("prviPut")) {
                this.step = 5;
            }
            else {
                this.step = 11;
            }
        }
        else if (this.step === 12) {
            if (this.get("tipStampe") === "Sito štampa") {
                this.step = 3000;
            }
            else {
                this.step = 13;
            }
        }
        else if (this.step === 13) {
            if (this.get("tipStampe") === "Ofset štampa") {
                this.step = 500;
            }
            else if (this.get("tipStampe") === "Sito štampa") {
                this.step = 8000;
            }
            else if (this.get("tipStampe") === "Digitalna štampa") {
                this.step = 2000;
            }
        }
        else if (this.step === 500) {
            if (this.get("tipProizvoda") === "Plakat") {
                this.step = 501;
            }
            else if (this.get("tipProizvoda") === "Letak") {
                this.step = 501;
            }
            else if (this.get("tipProizvoda") === "Brošura") {
                this.step = 550;
            }
        }
        else if (this.step === 506) {
            if (this.get("sortiranjePapiraB") == true) {
                this.step = 507;
            }
            else {
                this.step = 511;
            }
        }
        else if (this.step === 509) {
            if (this.get("sortiranjePapiraTipB")) {
                this.step = 510;
            }
            else {
                this.step = 511;
            }
        }
        else if (this.step === 512) {
            this.step = 580;
        }
        else if (this.step === 554) {
            if (this.get("masinaZaStampuIstaB")) {
                this.step = 557;
            }
            else {
                this.step = 555;
            }
        }
        else if (this.step === 558) {
            if (this.get("masinaZaStampuIstaB")) {
                this.step = 569;
            }
            else {
                this.step = 559;
            }
        }
        else if (this.step === 559) {
            if (this.get("papirZaStampuKoricaB")) {
                this.step = 506;
            }
            else {
                this.step = 560;
            }
        }
        else if (this.step === 561) {
            if (this.get("sortiranjePapiraB")) {
                this.step = 562;
            }
            else {
                this.step = 566;
            }
        }
        else if (this.step === 564) {
            if (this.get("sortiranjePapiraB")) {
                this.step = 565;
            }
            else {
                this.step = 566;
            }
        }
        else if (this.step === 556) {
            this.step = 558;
        }
        else if (this.step === 569) {
            if (this.get("sortiranjePapiraB")) {
                this.step = 570;
            }
            else {
                this.step = 574;
            }
        }
        else if (this.step === 572) {
            if (this.get("sortiranjePapiraTipB")) {
                this.step = 573;
            }
            else {
                this.step = 574;
            }
        }
        else if (this.step === 575) {
            this.step = 580;
        }
        // Priprema stampe
        // Prenos podataka
        else if (this.step === 603) {
            if (this.get("ps_prenosPodatakaB")) {
                this.step = 604;
            }
            else {
                this.step = 606;
            }
        }
        // Obrada i unos teksta
        else if (this.step === 606) {
            if (this.get("ps_obradaTekstaB")) {
                this.step = 607;
            }
            else {
                this.step = 617;
            }
        }
        else if (this.step === 607) {
            if (this.get("ps_jednostavanRukopisB")) {
                this.step = 608;
            }
            else {
                this.step = 609;
            }
        }
        else if (this.step === 609) {
            if (this.get("ps_slozenRukopisB")) {
                this.step = 610;
            }
            else {
                this.step = 611;
            }
        }
        else if (this.step === 611) {
            if (this.get("ps_tehnickiTekstB")) {
                this.step = 612;
            }
            else {
                this.step = 613;
            }
        }
        else if (this.step === 613) {
            if (this.get("ps_straniTekstB")) {
                this.step = 614;
            }
            else {
                this.step = 615;
            }
        }
        else if (this.step === 615) {
            if (this.get("ps_asciiTekstB")) {
                this.step = 616;
            }
            else {
                this.step = 617;
            }
        }
        // Kreiranje slika
        else if (this.step === 617) {
            if (this.get("ps_kreiranjeSlikaB")) {
                this.step = 618;
            }
            else {
                this.step = 638;
            }
        }
        else if (this.step === 618) {
            if (this.get("ps_ilustracijeB")) {
                this.step = 619;
            }
            else {
                this.step = 622;
            }
        }
        else if (this.step === 622) {
            if (this.get("ps_slikanjeB")) {
                this.step = 623;
            }
            else {
                this.step = 626;
            }
        }
        else if (this.step === 626) {
            if (this.get("ps_skeniranjeLinijskiB")) {
                this.step = 627;
            }
            else {
                this.step = 630;
            }
        }
        else if (this.step === 630) {
            if (this.get("ps_skeniranjeRasterB")) {
                this.step = 631;
            }
            else {
                this.step = 634;
            }
        }
        else if (this.step === 634) {
            if (this.get("ps_skeniranjeRgbB")) {
                this.step = 635;
            }
            else {
                this.step = 638;
            }
        }
        else if (this.step === 640) {
            if (this.get("ps_dodatnaObradaSlikaU") != 0) {
                this.step = 641;
            }
            else {
                this.step = 642;
            }
        }
        // ------- STAMPA -------
        // Plakat
        else if (this.step === 700) {
            if (this.get("tipProizvoda") === "Plakat") {
                this.step = 701;
            }
            else if (this.get("tipProizvoda") === "Letak") {
                this.step = 731;
            }
            else if (this.get("tipProizvoda") === "Brošura") {
                if (this.get('masinaZaStampuIstaB')) {
                    this.step = 731;
                }
                else {
                    this.step = 737;
                }
            }
        }
        else if (this.step === 703) {
            if (this.get("st_masinista")) {
                this.step = 760;
            }
            else {
                this.step = 704;
            }
        }
        else if (this.step === 706) {
            this.step = 760;
        }
        // Letak
        else if (this.step === 733) {
            if (this.get("st_masinista")) {
                this.step = 760;
            }
            else {
                this.step = 734;
            }
        }
        else if (this.step === 736) {
            this.step = 760;
        }
        // Brosura
        // Korice
        else if (this.step === 740) {
            if (this.get("st_masinista_korice")) {
                this.step = 745;
            }
            else {
                this.step = 741;
            }
        }
        // Knjižni blok
        else if (this.step === 747) {
            if (this.get("st_masinista")) {
                this.step = 760;
            }
            else {
                this.step = 748;
            }
        }
        else if (this.step === 750) {
            this.step = 760;
        }
        // ------- UTROSAK BOJE -------
        // *Preokret
        else if (this.step === 799) {
            if (this.get("tipProizvoda") === "Plakat") {
                this.step = 800;
            }
            else if (this.get("tipProizvoda") === "Letak") {
                this.step = 828;
            }
            else if (this.get("tipProizvoda") === "Brošura") {
                this.step = 896;
            }
        }
        // Plakat
        else if (this.step === 800) {
            if (this.get("ub_povrsina_max")) {
                this.step = 803;
            }
            else {
                this.step = 801;
            }
        }
        else if (this.step === 803) {
            if (this.get("ub_sadrzaj_maxSlika")) {
                this.step = 1080;
            }
            else {
                this.step = 804;
            }
        }
        else if (this.step === 804) {
            if (this.get("ub_pozadina")) {
                this.step = 805;
            }
            else {
                this.step = 806;
            }
        }
        else if (this.step === 806) {
            if (this.get("ub_sadrzaj_maxTekst")) {
                if (this.get("ub_pozadina")) {
                    this.step = 813;
                }
                else {
                    this.step = 814;
                }
            }
            else {
                this.step = 807;
            }
        }
        else if (this.step === 807) {
            if (this.get("ub_sadrzaj_brSlika") != 0) {
                this.step = 808;
            }
            else {
                this.step = 811;
            }
        }
        else if (this.step === 809) {
            if (this.get("ub_sadrzaj_tekstOstatak")) {
                if (this.get("ub_pozadina")) {
                    this.step = 813;
                }
                else {
                    this.step = 814;
                }
            }
            else {
                this.step = 810;
            }
        }
        else if (this.step === 810) {
            if (this.get("ub_sadrzaj_tekstPrestampavanje")) {
                this.step = 811;
            }
            else {
                if (this.get("ub_pozadina")) {
                    this.step = 813;
                }
                else {
                    this.step = 814;
                }
            }
        }
        else if (this.step === 811) {
            if (this.get("ub_sadrzaj_brTekstova") != 0) {
                this.step = 812;
            }
            else {
                this.step = 1080;
            }
        }
        else if (this.step === 813) {
            if (this.get("ub_sadrzaj_tekstBeli")) {
                this.step = 815;
            }
            else {
                this.step = 814;
            }
        }
        else if (this.step === 815) {
            this.step = 1080;
        }
        // Letak
        else if (this.step === 828) {
            if (this.get("ub_povrsina_double")) {
                this.step = 829;
            }
            else {
                this.step = 830;
            }
        }
        else if (this.step === 830) {
            if (this.get("ub_povrsina_max")) {
                this.step = 833;
            }
            else {
                this.step = 831;
            }
        }
        else if (this.step === 833) {
            if (this.get("ub_sadrzaj_maxSlika")) {
                if (this.get("ub_povrsina_double")) {
                    this.step = 849;
                }
                else {
                    this.step = 1080;
                }
            }
            else {
                this.step = 834;
            }
        }
        else if (this.step === 834) {
            if (this.get("ub_pozadina")) {
                this.step = 835;
            }
            else {
                this.step = 836;
            }
        }
        else if (this.step === 836) {
            if (this.get("ub_sadrzaj_maxTekst")) {
                if (this.get("ub_pozadina")) {
                    this.step = 843;
                }
                else {
                    this.step = 844;
                }
            }
            else {
                this.step = 837;
            }
        }
        else if (this.step === 837) {
            if (this.get("ub_sadrzaj_brSlika") != 0) {
                this.step = 838;
            }
            else {
                this.step = 841;
            }
        }
        else if (this.step === 839) {
            if (this.get("ub_sadrzaj_tekstOstatak")) {
                if (this.get("ub_pozadina")) {
                    this.step = 843;
                }
                else {
                    this.step = 844;
                }
            }
            else {
                this.step = 840;
            }
        }
        else if (this.step === 840) {
            if (this.get("ub_sadrzaj_tekstPrestampavanje")) {
                this.step = 841;
            }
            else {
                if (this.get("ub_pozadina")) {
                    this.step = 843;
                }
                else {
                    this.step = 844;
                }
            }
        }
        else if (this.step === 841) {
            if (this.get("ub_sadrzaj_brTekstova") != 0) {
                this.step = 842;
            }
            else {
                if (this.get("ub_povrsina_double")) {
                    this.step = 849;
                }
                else {
                    this.step = 1080;
                }
            }
        }
        else if (this.step === 843) {
            if (this.get("ub_sadrzaj_tekstBeli")) {
                this.step = 845;
            }
            else {
                this.step = 844;
            }
        }
        // Okret
        else if (this.step === 845) {
            if (this.get("ub_povrsina_double")) {
                this.step = 849;
            }
            else {
                this.step = 1080;
            }
        }
        // Druga strana
        else if (this.step === 850) {
            if (this.get("ub_povrsina_max_B")) {
                this.step = 853;
            }
            else {
                this.step = 851;
            }
        }
        else if (this.step === 853) {
            if (this.get("ub_sadrzaj_maxSlika_B")) {
                this.step = 1080;
            }
            else {
                this.step = 854;
            }
        }
        else if (this.step === 854) {
            if (this.get("ub_pozadina_B")) {
                this.step = 855;
            }
            else {
                this.step = 856;
            }
        }
        else if (this.step === 856) {
            if (this.get("ub_sadrzaj_maxTekst_B")) {
                if (this.get("ub_pozadina_B")) {
                    this.step = 863;
                }
                else {
                    this.step = 864;
                }
            }
            else {
                this.step = 857;
            }
        }
        else if (this.step === 857) {
            if (this.get("ub_sadrzaj_brSlika_B") != 0) {
                this.step = 858;
            }
            else {
                this.step = 861;
            }
        }
        else if (this.step === 859) {
            if (this.get("ub_sadrzaj_tekstOstatak_B")) {
                if (this.get("ub_pozadina_B")) {
                    this.step = 863;
                }
                else {
                    this.step = 864;
                }
            }
            else {
                this.step = 860;
            }
        }
        else if (this.step === 860) {
            if (this.get("ub_sadrzaj_tekstPrestampavanje_B")) {
                this.step = 861;
            }
            else {
                if (this.get("ub_pozadina_B")) {
                    this.step = 863;
                }
                else {
                    this.step = 864;
                }
            }
        }
        else if (this.step === 861) {
            if (this.get("ub_sadrzaj_brTekstova_B") != 0) {
                this.step = 862;
            }
            else {
                this.step = 1080;
            }
        }
        else if (this.step === 863) {
            if (this.get("ub_sadrzaj_tekstBeli_B")) {
                this.step = 865;
            }
            else {
                this.step = 864;
            }
        }
        else if (this.step === 865) {
            this.step = 1080;
        }
        // Brosura
        // Korice
        else if (this.step === 897) {
            if (this.get("ub_korice_double")) {
                this.step = 898;
            }
            else {
                this.step = 899;
            }
        }
        else if (this.step === 898) {
            this.step = 900;
        }
        // Prednja-spoljasna
        else if (this.step === 900) {
            if (this.get("ub_povrsina_max_korice_A")) {
                this.step = 903;
            }
            else {
                this.step = 901;
            }
        }
        else if (this.step === 903) {
            if (this.get("ub_sadrzaj_maxSlika_korice_A")) {
                this.step = 919;
            }
            else {
                this.step = 904;
            }
        }
        else if (this.step === 904) {
            if (this.get("ub_pozadina_korice_A")) {
                this.step = 905;
            }
            else {
                this.step = 906;
            }
        }
        else if (this.step === 906) {
            if (this.get("ub_sadrzaj_maxTekst_korice_A")) {
                if (this.get("ub_pozadina_korice_A")) {
                    this.step = 913;
                }
                else {
                    this.step = 914;
                }
            }
            else {
                this.step = 907;
            }
        }
        else if (this.step === 907) {
            if (this.get("ub_sadrzaj_brSlika_korice_A") != 0) {
                this.step = 908;
            }
            else {
                this.step = 911;
            }
        }
        else if (this.step === 909) {
            if (this.get("ub_sadrzaj_tekstOstatak_korice_A")) {
                if (this.get("ub_pozadina_korice_A")) {
                    this.step = 913;
                }
                else {
                    this.step = 914;
                }
            }
            else {
                this.step = 910;
            }
        }
        else if (this.step === 910) {
            if (this.get("ub_sadrzaj_tekstPrestampavanje_korice_A")) {
                this.step = 911;
            }
            else {
                if (this.get("ub_pozadina_korice_A")) {
                    this.step = 913;
                }
                else {
                    this.step = 914;
                }
            }
        }
        else if (this.step === 911) {
            if (this.get("ub_sadrzaj_brTekstova_korice_A") != 0) {
                this.step = 912;
            }
            else {
                this.step = 919;
            }
        }
        else if (this.step === 913) {
            if (this.get("ub_sadrzaj_tekstBeli_korice_A")) {
                this.step = 915;
            }
            else {
                this.step = 914;
            }
        }
        else if (this.step === 916) {
            this.step = 919;
        }
        // Zadnja-spoljasna
        else if (this.step === 920) {
            if (this.get("ub_povrsina_max_korice_B")) {
                this.step = 923;
            }
            else {
                this.step = 921;
            }
        }
        else if (this.step === 923) {
            if (this.get("ub_sadrzaj_maxSlika_korice_B")) {
                if (this.get("ub_korice_double")) {
                    this.step = 997;
                }
                else {
                    this.step = 939;
                }
            }
            else {
                this.step = 924;
            }
        }
        else if (this.step === 924) {
            if (this.get("ub_pozadina_korice_B")) {
                this.step = 925;
            }
            else {
                this.step = 926;
            }
        }
        else if (this.step === 926) {
            if (this.get("ub_sadrzaj_maxTekst_korice_B")) {
                if (this.get("ub_pozadina_korice_B")) {
                    this.step = 933;
                }
                else {
                    this.step = 934;
                }
            }
            else {
                this.step = 927;
            }
        }
        else if (this.step === 927) {
            if (this.get("ub_sadrzaj_brSlika_korice_B") != 0) {
                this.step = 928;
            }
            else {
                this.step = 931;
            }
        }
        else if (this.step === 929) {
            if (this.get("ub_sadrzaj_tekstOstatak_korice_B")) {
                if (this.get("ub_pozadina_korice_B")) {
                    this.step = 933;
                }
                else {
                    this.step = 934;
                }
            }
            else {
                this.step = 930;
            }
        }
        else if (this.step === 930) {
            if (this.get("ub_sadrzaj_tekstPrestampavanje_korice_B")) {
                this.step = 931;
            }
            else {
                if (this.get("ub_pozadina_korice_B")) {
                    this.step = 933;
                }
                else {
                    this.step = 934;
                }
            }
        }
        else if (this.step === 931) {
            if (this.get("ub_sadrzaj_brTekstova_korice_B") != 0) {
                this.step = 932;
            }
            else {
                if (this.get("ub_korice_double")) {
                    this.step = 997;
                }
                else {
                    this.step = 939;
                }
            }
        }
        else if (this.step === 933) {
            if (this.get("ub_sadrzaj_tekstBeli_korice_B")) {
                this.step = 935;
            }
            else {
                this.step = 934;
            }
        }
        else if (this.step === 935) {
            if (this.get("ub_korice_double")) {
                this.step = 997;
            }
            else {
                this.step = 939;
            }
        }
        // prednja-unutrasnja
        else if (this.step === 940) {
            if (this.get("ub_povrsina_max_korice_C")) {
                this.step = 943;
            }
            else {
                this.step = 941;
            }
        }
        else if (this.step === 943) {
            if (this.get("ub_sadrzaj_maxSlika_korice_C")) {
                this.step = 959;
            }
            else {
                this.step = 944;
            }
        }
        else if (this.step === 944) {
            if (this.get("ub_pozadina_korice_C")) {
                this.step = 945;
            }
            else {
                this.step = 946;
            }
        }
        else if (this.step === 946) {
            if (this.get("ub_sadrzaj_maxTekst_korice_C")) {
                if (this.get("ub_pozadina_korice_C")) {
                    this.step = 953;
                }
                else {
                    this.step = 954;
                }
            }
            else {
                this.step = 947;
            }
        }
        else if (this.step === 947) {
            if (this.get("ub_sadrzaj_brSlika_korice_C") != 0) {
                this.step = 948;
            }
            else {
                this.step = 951;
            }
        }
        else if (this.step === 949) {
            if (this.get("ub_sadrzaj_tekstOstatak_korice_C")) {
                if (this.get("ub_pozadina_korice_C")) {
                    this.step = 953;
                }
                else {
                    this.step = 954;
                }
            }
            else {
                this.step = 950;
            }
        }
        else if (this.step === 950) {
            if (this.get("ub_sadrzaj_tekstPrestampavanje_korice_C")) {
                this.step = 951;
            }
            else {
                if (this.get("ub_pozadina_korice_C")) {
                    this.step = 953;
                }
                else {
                    this.step = 954;
                }
            }
        }
        else if (this.step === 951) {
            if (this.get("ub_sadrzaj_brTekstova_korice_C") != 0) {
                this.step = 952;
            }
            else {
                this.step = 959;
            }
        }
        else if (this.step === 953) {
            if (this.get("ub_sadrzaj_tekstBeli_korice_C")) {
                this.step = 955;
            }
            else {
                this.step = 954;
            }
        }
        else if (this.step === 955) {
            this.step = 959;
        }
        // zadnja-unutrasnja
        else if (this.step === 960) {
            if (this.get("ub_povrsina_max_korice_D")) {
                this.step = 963;
            }
            else {
                this.step = 961;
            }
        }
        else if (this.step === 963) {
            if (this.get("ub_sadrzaj_maxSlika_korice_D")) {
                this.step = 997;
            }
            else {
                this.step = 964;
            }
        }
        else if (this.step === 964) {
            if (this.get("ub_pozadina_korice_D")) {
                this.step = 965;
            }
            else {
                this.step = 966;
            }
        }
        else if (this.step === 966) {
            if (this.get("ub_sadrzaj_maxTekst_korice_D")) {
                if (this.get("ub_pozadina_korice_D")) {
                    this.step = 973;
                }
                else {
                    this.step = 974;
                }
            }
            else {
                this.step = 967;
            }
        }
        else if (this.step === 967) {
            if (this.get("ub_sadrzaj_brSlika_korice_D") != 0) {
                this.step = 968;
            }
            else {
                this.step = 971;
            }
        }
        else if (this.step === 969) {
            if (this.get("ub_sadrzaj_tekstOstatak_korice_D")) {
                if (this.get("ub_pozadina_korice_D")) {
                    this.step = 973;
                }
                else {
                    this.step = 974;
                }
            }
            else {
                this.step = 970;
            }
        }
        else if (this.step === 970) {
            if (this.get("ub_sadrzaj_tekstPrestampavanje_korice_D")) {
                this.step = 971;
            }
            else {
                if (this.get("ub_pozadina_korice_D")) {
                    this.step = 973;
                }
                else {
                    this.step = 974;
                }
            }
        }
        else if (this.step === 971) {
            if (this.get("ub_sadrzaj_brTekstova_korice_D") != 0) {
                this.step = 972;
            }
            else {
                this.step = 997;
            }
        }
        else if (this.step === 973) {
            if (this.get("ub_sadrzaj_tekstBeli_korice_D")) {
                this.step = 975;
            }
            else {
                this.step = 974;
            }
        }
        else if (this.step === 975) {
            this.step = 997;
        }
        // Knjizni blok
        // Sistem
        else if (this.step === 998) {
            if (this.get("ub_knjizniBlok_sistem") == "Copy-paste") {
                this.step = 999;
            }
            else if (this.get("ub_knjizniBlok_sistem") == "Par-nepar") {
                this.step = 1019;
            }
            else {
                this.step = 1059;
            }
        }
        // copy-paste sistem
        else if (this.step === 1000) {
            if (this.get("ub_povrsina_max_kblok")) {
                this.step = 1003;
            }
            else {
                this.step = 1001;
            }
        }
        else if (this.step === 1003) {
            if (this.get("ub_sadrzaj_maxSlika_kblok")) {
                this.step = 1080;
            }
            else {
                this.step = 1004;
            }
        }
        else if (this.step === 1004) {
            if (this.get("ub_pozadina_kblok")) {
                this.step = 1005;
            }
            else {
                this.step = 1006;
            }
        }
        else if (this.step === 1006) {
            if (this.get("ub_sadrzaj_maxTekst_kblok")) {
                if (this.get("ub_pozadina_kblok")) {
                    this.step = 1013;
                }
                else {
                    this.step = 1014;
                }
            }
            else {
                this.step = 1007;
            }
        }
        else if (this.step === 1007) {
            if (this.get("ub_sadrzaj_brSlika_kblok") != 0) {
                this.step = 1008;
            }
            else {
                this.step = 1011;
            }
        }
        else if (this.step === 1009) {
            if (this.get("ub_sadrzaj_tekstOstatak_kblok")) {
                if (this.get("ub_pozadina_kblok")) {
                    this.step = 1013;
                }
                else {
                    this.step = 1014;
                }
            }
            else {
                this.step = 1010;
            }
        }
        else if (this.step === 1010) {
            if (this.get("ub_sadrzaj_tekstPrestampavanje_kblok")) {
                this.step = 1011;
            }
            else {
                if (this.get("ub_pozadina_kblok")) {
                    this.step = 1013;
                }
                else {
                    this.step = 1014;
                }
            }
        }
        else if (this.step === 1011) {
            if (this.get("ub_sadrzaj_brTekstova_kblok") != 0) {
                this.step = 1012;
            }
            else {
                this.step = 1080;
            }
        }
        else if (this.step === 1013) {
            if (this.get("ub_sadrzaj_tekstBeli_kblok")) {
                this.step = 1015;
            }
            else {
                this.step = 1014;
            }
        }
        else if (this.step === 1015) {
            this.step = 1080;
        }
        // par-nepar sistem
        else if (this.step === 1020) {
            if (this.get("ub_povrsina_max_kblok_A")) {
                this.step = 1023;
            }
            else {
                this.step = 1021;
            }
        }
        else if (this.step === 1023) {
            if (this.get("ub_sadrzaj_maxSlika_kblok_A")) {
                this.step = 1039;
            }
            else {
                this.step = 1024;
            }
        }
        else if (this.step === 1024) {
            if (this.get("ub_pozadina_kblok_A")) {
                this.step = 1025;
            }
            else {
                this.step = 1026;
            }
        }
        else if (this.step === 1026) {
            if (this.get("ub_sadrzaj_maxTekst_kblok_A")) {
                if (this.get("ub_pozadina_kblok_A")) {
                    this.step = 1033;
                }
                else {
                    this.step = 1034;
                }
            }
            else {
                this.step = 1027;
            }
        }
        else if (this.step === 1027) {
            if (this.get("ub_sadrzaj_brSlika_kblok_A") != 0) {
                this.step = 1028;
            }
            else {
                this.step = 1031;
            }
        }
        else if (this.step === 1029) {
            if (this.get("ub_sadrzaj_tekstOstatak_kblok_A")) {
                if (this.get("ub_pozadina_kblok_A")) {
                    this.step = 1033;
                }
                else {
                    this.step = 1034;
                }
            }
            else {
                this.step = 1030;
            }
        }
        else if (this.step === 1030) {
            if (this.get("ub_sadrzaj_tekstPrestampavanje_kblok_A")) {
                this.step = 1031;
            }
            else {
                if (this.get("ub_pozadina_kblok_A")) {
                    this.step = 1033;
                }
                else {
                    this.step = 1034;
                }
            }
        }
        else if (this.step === 1031) {
            if (this.get("ub_sadrzaj_brTekstova_kblok_A") != 0) {
                this.step = 1032;
            }
            else {
                this.step = 1039;
            }
        }
        else if (this.step === 1033) {
            if (this.get("ub_sadrzaj_tekstBeli_kblok_A")) {
                this.step = 1035;
            }
            else {
                this.step = 1034;
            }
        }
        else if (this.step === 1035) {
            this.step = 1039;
        }
        // parne
        else if (this.step === 1040) {
            if (this.get("ub_povrsina_max_kblok_B")) {
                this.step = 1043;
            }
            else {
                this.step = 1041;
            }
        }
        else if (this.step === 1043) {
            if (this.get("ub_sadrzaj_maxSlika_kblok_B")) {
                this.step = 1080;
            }
            else {
                this.step = 1044;
            }
        }
        else if (this.step === 1044) {
            if (this.get("ub_pozadina_kblok_B")) {
                this.step = 1045;
            }
            else {
                this.step = 1046;
            }
        }
        else if (this.step === 1046) {
            if (this.get("ub_sadrzaj_maxTekst_kblok_B")) {
                if (this.get("ub_pozadina_kblok_B")) {
                    this.step = 1053;
                }
                else {
                    this.step = 1054;
                }
            }
            else {
                this.step = 1047;
            }
        }
        else if (this.step === 1047) {
            if (this.get("ub_sadrzaj_brSlika_kblok_B") != 0) {
                this.step = 1048;
            }
            else {
                this.step = 1051;
            }
        }
        else if (this.step === 1049) {
            if (this.get("ub_sadrzaj_tekstOstatak_kblok_B")) {
                if (this.get("ub_pozadina_kblok_B")) {
                    this.step = 1053;
                }
                else {
                    this.step = 1054;
                }
            }
            else {
                this.step = 1050;
            }
        }
        else if (this.step === 1050) {
            if (this.get("ub_sadrzaj_tekstPrestampavanje_kblok_B")) {
                this.step = 1051;
            }
            else {
                if (this.get("ub_pozadina_kblok_B")) {
                    this.step = 1053;
                }
                else {
                    this.step = 1054;
                }
            }
        }
        else if (this.step === 1051) {
            if (this.get("ub_sadrzaj_brTekstova_kblok_B") != 0) {
                this.step = 1052;
            }
            else {
                this.step = 1080;
            }
        }
        else if (this.step === 1053) {
            if (this.get("ub_sadrzaj_tekstBeli_kblok_B")) {
                this.step = 1055;
            }
            else {
                this.step = 1054;
            }
        }
        else if (this.step === 1055) {
            this.step = 1080;
        }
        // Ukupno sistem
        else if (this.step === 1060) {
            if (this.get("ub_povrsina_max_kblok")) {
                this.step = 1063;
            }
            else {
                this.step = 1061;
            }
        }
        else if (this.step === 1063) {
            if (this.get("ub_sadrzaj_brSlika_kblok") != 0) {
                this.step = 1064;
            }
            else {
                this.step = 1065;
            }
        }
        else if (this.step === 1066) {
            this.step = 1080;
        }
        // ------- ZGO -------
        else if (this.step === 1101) {
            if (this.get("tipProizvoda") === "Plakat") {
                this.step = 1108;
            }
            else {
                this.step = 1102;
            }
        }
        else if (this.step === 1102) {
            if (this.get("tipProizvoda") === "Letak") {
                this.step = 1107;
            }
            else {
                this.step = 1103;
            }
        }
        else if (this.step === 1107) {
            if (this.get("zgo_savijanje_letak")) {
                this.step = 1107.1;
            }
            else {
                this.step = 108;
            }
        }
        else if (this.step === 1107.1) {
            this.step = 1108;
        }
        else if (this.step === 1106) {
            this.step = 1108;
        }
        // Povezivanje
        // Osnovno - priprema stampe
        else if (this.step === 580) {
            this.step = 599;
        }
        // Priprema stampe - stampa
        else if (this.step === 645) {
            this.step = 700;
        }
        // stampa - utrosak boje
        else if (this.step === 760) {
            this.step = 799;
        }
        // utrosak boje - zgo
        else if (this.step === 1081) {
            this.step = 1100;
        }
        // zgo - kraj
        else if (this.step === 1108) {
            this.step = 1117;
        }
        // kraj
        // Error
        else if (this.step === 9999) {
            if (this.get("tipProizvoda") === "Plakat") {
                this.step = 501;
            }
            else if (this.get("tipProizvoda") === "Letak") {
                this.step = 501;
            }
            else if (this.get("tipProizvoda") === "Brošura") {
                this.step = 550;
            }
        }
        else {
            this.step++;
        }
        this.stepByStep();
    };
    KalkulatorComponent.prototype.get = function (formControlName) {
        return this.form.get(formControlName).value;
    };
    // Steps ------------------------------------------------------------------------------
    // Step Confirmation
    KalkulatorComponent.prototype.stepConfirmation = function (message, confBtnText) {
        var _this = this;
        this.changeRobot(message).then(function (res) {
            _this.answerType = "conf";
            _this.lightKeyboard();
            _this.createHelp();
            _this.emptyKeyText = confBtnText;
        });
    };
    KalkulatorComponent.prototype.stepConfirmationResults = function (message, confBtnText) {
        var _this = this;
        this.changeRobot(message).then(function (res) {
            _this.shareOfsetR = true;
            var price = Number(_this.ukupnaCena).toFixed(2);
            _this.answer =
                price + ' din';
            _this.answerType = "conf";
            _this.lightKeyboard();
            _this.createHelp();
            _this.emptyKeyText = confBtnText;
        });
    };
    KalkulatorComponent.prototype.stepConfirmationResultsDigital = function (message, confBtnText) {
        var _this = this;
        this.changeRobot(message).then(function (res) {
            var price = Number(_this.ukupnaCena).toFixed(2);
            _this.answer =
                price + ' din';
            _this.answerType = "conf";
            _this.lightKeyboard();
            _this.createHelp();
            _this.emptyKeyText = confBtnText;
        });
    };
    // Step only text
    KalkulatorComponent.prototype.stepText = function (message, pauseAfter) {
        var _this = this;
        if (pauseAfter === void 0) { pauseAfter = 70; }
        this.changeRobot(message, pauseAfter).then(function (res) {
            _this.nextStep();
        });
    };
    // Step input text
    KalkulatorComponent.prototype.stepInputText = function (message, formControlName, minLenght, maxLenght) {
        var _this = this;
        if (minLenght === void 0) { minLenght = 2; }
        if (maxLenght === void 0) { maxLenght = 20; }
        this.form.addControl(formControlName, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(minLenght),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(maxLenght)
        ]));
        this.formControlName = formControlName;
        this.changeRobot(message).then(function (res) {
            _this.answerType = 'text';
            _this.pripareInput();
            _this.lightKeyboard();
            _this.createHelp();
        });
    };
    // Step input number
    KalkulatorComponent.prototype.stepInputNumber = function (message, formControlName, def, min, max) {
        var _this = this;
        if (min === void 0) { min = 0; }
        if (max === void 0) { max = 10000; }
        this.form.addControl(formControlName, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('\\-?\\d*\\.?\\d{1,2}'),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(min),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(max)
        ]));
        this.formControlName = formControlName;
        this.changeRobot(message).then(function (res) {
            _this.answerType = 'number';
            _this.pripareInput();
            _this.lightKeyboard();
            _this.createHelp();
            _this.answer = def;
        });
    };
    // Step input boolean
    KalkulatorComponent.prototype.stepInputBoolean = function (message, formControlName) {
        var _this = this;
        this.form.addControl(formControlName, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]));
        this.formControlName = formControlName;
        this.changeRobot(message).then(function (res) {
            _this.answerType = 'boolean';
            _this.lightKeyboard();
            _this.createHelp();
        });
    };
    // Step small list
    KalkulatorComponent.prototype.stepSmallList = function (message, formControlName, list, def) {
        var _this = this;
        this.form.addControl(formControlName, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]));
        this.formControlName = formControlName;
        this.changeRobot(message).then(function (res) {
            _this.smallList = list;
            _this.smallListChoice = def;
            _this.answerType = "smallList";
            _this.createHelp();
        });
    };
    // Steps special list (machine, papers)
    // Print machine
    KalkulatorComponent.prototype.stepSpecialListPrintMachine = function (message, formControlName) {
        var _this = this;
        this.form.addControl(formControlName, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]));
        this.formControlName = formControlName;
        this.changeRobot(message).then(function (res) {
            _this.answerType = "specialList-one";
            _this.specialList_Path = "masinezastampu";
            _this.specialList_SortElement = "id";
            _this.specialList_ChoiceOne = true;
            _this.specialList_Searches = [];
            _this.specialListPrintMachines = true;
            _this.loadSpecialList();
            _this.lightKeyboard();
            _this.createHelp();
        });
    };
    KalkulatorComponent.prototype.stepSpecialListDigitalPrintMachine = function (message, formControlName) {
        var _this = this;
        this.form.addControl(formControlName, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]));
        this.formControlName = formControlName;
        this.changeRobot(message).then(function (res) {
            _this.answerType = "specialList-one";
            _this.specialList_Path = "digitalne-masine";
            _this.specialList_SortElement = "id";
            _this.specialList_ChoiceOne = true;
            _this.specialList_Searches = [];
            _this.specialListPrintMachines = true;
            _this.loadSpecialList();
            _this.lightKeyboard();
            _this.createHelp();
        });
    };
    KalkulatorComponent.prototype.stepSpecialListText = function (message, formControlName) {
        var _this = this;
        this.form.addControl(formControlName, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]));
        this.formControlName = formControlName;
        this.changeRobot(message).then(function (res) {
            _this.answerType = "specialList-one";
            _this.specialList_Path = "pzp";
            _this.specialList_SortElement = "id";
            _this.specialList_ChoiceOne = true;
            _this.specialList_Searches = [];
            _this.specialListPrintText = true;
            _this.loadSpecialList();
            _this.lightKeyboard();
            _this.createHelp();
        });
    };
    KalkulatorComponent.prototype.stepSpecialListPlatform = function (message, formControlName) {
        var _this = this;
        this.form.addControl(formControlName, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]));
        this.formControlName = formControlName;
        this.changeRobot(message).then(function (res) {
            _this.answerType = "specialList-one";
            _this.specialList_Path = "opreme";
            _this.specialList_SortElement = "id";
            _this.specialList_ChoiceOne = true;
            _this.specialList_Searches = [];
            _this.specialListPrintPlatform = true;
            _this.loadSpecialList();
            _this.lightKeyboard();
            _this.createHelp();
        });
    };
    // Colors Ofset
    KalkulatorComponent.prototype.stepSpecialListColors = function (message, formControlName) {
        var _this = this;
        this.form.addControl(formControlName, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]));
        this.formControlName = formControlName;
        this.changeRobot(message).then(function (res) {
            _this.answerType = "specialList-one";
            _this.specialList_Path = "boje";
            _this.specialList_SortElement = "id";
            _this.specialList_ChoiceOne = true;
            _this.specialList_Searches = [
                { 'name': 'tipPapiraNaziv', 'value': _this.get('papir').tipPapira.naziv },
                { 'name': 'naziv', 'value': '' },
            ];
            if (_this.get('tipProizvoda') == 'Brošura') {
                if (_this.get('masinaZaStampuIstaB') == false &&
                    _this.get('papirZaStampuKoricaB') == false) {
                    _this.specialList_Searches = [
                        { 'name': 'tipPapiraNaziv', 'value': _this.get('papirKorice').tipPapira.naziv },
                        { 'name': 'naziv', 'value': '' },
                    ];
                }
            }
            _this.specialListColors = true;
            _this.loadSpecialList();
            _this.lightKeyboard();
            _this.createHelp();
        });
    };
    // PaperType
    KalkulatorComponent.prototype.stepSpecialListPaperType = function (message, formControlName) {
        var _this = this;
        this.form.addControl(formControlName, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]));
        this.formControlName = formControlName;
        this.changeRobot(message).then(function (res) {
            _this.answerType = "specialList-one";
            _this.specialList_Path = "tip-papira";
            _this.specialList_SortElement = "id";
            _this.specialList_ChoiceOne = true;
            _this.specialList_Searches = [];
            _this.specialListPaperType = true;
            _this.loadSpecialList();
            _this.lightKeyboard();
            _this.createHelp();
        });
    };
    // Papers
    KalkulatorComponent.prototype.stepSpecialListPapers = function (message, formControlName) {
        var _this = this;
        this.form.addControl(formControlName, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]));
        this.formControlName = formControlName;
        this.changeRobot(message).then(function (res) {
            _this.answerType = "specialList-many";
            _this.specialList_Path = "papiri";
            _this.specialList_SortElement = "id";
            //this.specialList_ChoiceOne = true;
            _this.specialList_Searches = [];
            if (_this.get('sortiranjePapiraB')) {
                _this.specialList_Searches = [
                    { 'name': 'minGramatura', 'value': _this.get('sortiranjePapiraMinGramatura') },
                    { 'name': 'maxGramatura', 'value': _this.get('sortiranjePapiraMaxGramatura') },
                ];
                if (_this.get('sortiranjePapiraTipB')) {
                    _this.specialList_Searches.push({ 'name': 'tipNaziv', 'value': _this.get('sortiranjePapiraTip').naziv });
                }
            }
            _this.loadSpecialList();
            _this.specialList_PapersSection = true;
            _this.lightKeyboard();
            _this.createHelp();
        });
    };
    KalkulatorComponent.prototype.loadSpecialList = function () {
        var _this = this;
        this.rs
            .getAllP(this.specialList_Path, this.specialList_CurrentPage, this.specialList_ItemPerPage, this.specialList_SortElement, "asc", this.specialList_Searches)
            .subscribe(function (d) {
            _this.specialList = d.body;
            _this.specialList_TotalItems = +d.headers.get("X-Total-Count");
            _this.specialListChoice = _this.specialList[0];
        });
    };
    // Step array
    KalkulatorComponent.prototype.stepInputArray = function (message, formControlName, obj, formUse, min, max) {
        if (min === void 0) { min = 0; }
        if (max === void 0) { max = 10000; }
        this.form.addControl(formControlName, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
        ]));
        this.arrayScheme = obj;
        this.arrayText = message;
        this.formControlName = formControlName;
        this.answerType = 'array';
        this.arrayMax = this.form.get(formUse).value;
        this.pripareInput();
        this.answer = '';
        this.arrayAttributeCounter = 0;
        this.arrayCounter = 0;
        this.changeRobotText(this.arrayScheme[0].text + ' ' + (this.arrayCounter + 1));
    };
    // Steps examples of function
    KalkulatorComponent.prototype.stepSpecialExampleOfFunction = function (message) {
        var _this = this;
        this.changeRobot(message, 80).then(function (res) {
            _this.gameOfRobot().then(function (res) {
                _this.nextStep();
            });
        });
    };
    KalkulatorComponent.prototype.stepSpecialExampleOfTasterText = function (message) {
        var _this = this;
        this.changeRobot(message, 80).then(function (res) {
            _this.textKey = true;
            _this.nextStep();
        });
    };
    KalkulatorComponent.prototype.stepSpecialExampleOfTasterList = function (message) {
        var _this = this;
        this.changeRobot(message, 80).then(function (res) {
            _this.listKey = true;
            _this.nextStep();
        });
    };
    KalkulatorComponent.prototype.stepSpecialExampleOfTasterHelp = function (message) {
        var _this = this;
        this.changeRobot(message).then(function (res) {
            _this.emptyKeyText = "Uredu";
            _this.answerType = "conf";
            _this.lightKeyboard();
            _this.createHelp();
        });
    };
    // Save answer ------------------------------------------------------------------------------
    KalkulatorComponent.prototype.saveAnswerAgree = function () {
        if (this.answerType === "conf") {
            this.nextStep();
            this.emptyKey = null;
        }
    };
    KalkulatorComponent.prototype.saveAnswerText = function () {
        var _a;
        this.form.patchValue((_a = {}, _a[this.formControlName] = this.answer, _a));
        this.checkAnswerAndSend();
    };
    KalkulatorComponent.prototype.saveAnswerNumber = function () {
        var _a;
        this.form.patchValue((_a = {}, _a[this.formControlName] = +this.answer, _a));
        this.checkAnswerAndSend();
    };
    KalkulatorComponent.prototype.saveAnswerBoolean = function (b) {
        var _a;
        this.form.patchValue((_a = {}, _a[this.formControlName] = b, _a));
        this.nextStep();
    };
    KalkulatorComponent.prototype.saveAnswerSmallList = function () {
        var _a;
        this.form.patchValue((_a = {}, _a[this.formControlName] = this.smallListChoice, _a));
        this.nextStep();
    };
    KalkulatorComponent.prototype.saveAnswerSpecialList = function () {
        var _a;
        this.form.patchValue((_a = {}, _a[this.formControlName] = this.specialListChoice, _a));
        this.nextStep();
    };
    KalkulatorComponent.prototype.saveInputArray = function () {
        var _a;
        if (this.arrayCounter < this.arrayMax) {
            if (this.arrayAttributeCounter < this.arrayScheme.length) {
                if (!this.isNumber(this.answer) || +this.answer < 0 || +this.answer > 10000) {
                    this.inputInvalid = true;
                    return false;
                }
                this.inputInvalid = false;
                this.arrayItem[this.arrayScheme[this.arrayAttributeCounter].name] = +this.answer;
                this.arrayAttributeCounter++;
                this.answer = '';
                if (this.arrayAttributeCounter < (this.arrayScheme.length)) {
                    this.changeRobotText(this.arrayScheme[this.arrayAttributeCounter].text + ' ' + (this.arrayCounter + 1));
                }
                if (this.arrayAttributeCounter == this.arrayScheme.length) {
                    this.saveInputArray();
                }
            }
            else {
                this.arrayAttributeCounter = 0;
                this.array.push(this.arrayItem);
                this.arrayItem = {};
                this.arrayCounter++;
                if (this.arrayCounter == this.arrayMax) {
                    this.form.patchValue((_a = {}, _a[this.formControlName] = this.array, _a));
                    this.nextStep();
                    return;
                }
                this.changeRobotText(this.arrayScheme[this.arrayAttributeCounter].text + ' ' + (this.arrayCounter + 1));
            }
        }
        else {
        }
    };
    KalkulatorComponent.prototype.savePaper = function () {
        if (this.formControlName === 'papir') {
            this.osnovniTabak(false);
        }
        else {
            this.osnovniTabak(true);
        }
        this.nextStep();
    };
    KalkulatorComponent.prototype.checkAnswerAndSend = function () {
        var _this = this;
        var fc = this.form.get(this.formControlName);
        var robotTextCopy = this.robot;
        var newRobotText;
        //console.log(this.form.get(this.formControlName));
        //console.log (this.formControlName);
        if (fc.invalid) {
            this.inputInvalid = true;
            if (fc.errors.required) {
                newRobotText = "Unos je obavezan";
            }
            else if (fc.errors.minlength) {
                newRobotText = "Unos je prekratak";
            }
            else if (fc.errors.pattern) {
                newRobotText = "Unos mora biti broj";
            }
            else if (fc.errors.min) {
                newRobotText = "Minimalni unos je " + fc.errors.min.min;
            }
            else if (fc.errors.max) {
                newRobotText = "Maksimalni unos je " + fc.errors.max.max;
            }
            else {
                newRobotText = "Pogresan unos";
            }
            this.changeRobot(newRobotText).then(function (res) {
                _this.changeRobot(robotTextCopy);
            });
            return false;
        }
        else {
            this.inputInvalid = false;
            this.nextStep();
            return true;
        }
    };
    // Help ------------------------------------------------------------------------------
    KalkulatorComponent.prototype.createHelp = function () {
        this.helpKey = true;
        if (this.step === -1) {
            this.helpText = "test";
        }
        else if (this.step === 10) {
            this.helpText = 'Dobrodosli u sekciju pomoć. Neka pitanja će jednostavno biti potrebno dodatno objasniti kako bi Vi dali što precizniji odgovor. To objašnjenje će te moći naći ovde. Ako postoji dodatno objašenje za određeno pitanje taster pomoć će "svetleti". Prečica na tastaturi za pomoć je "CTRL", tako da sad možete da probate da otvorite i zatvorite pomoć preko tastera "CRTL".   Takođe u zavisnosti od faze programa dostupne su različite prečice preko tastature. Koristite "Enter" kako bi potvrdili odgovor. Na pitanja gde se očekuje da odgovorite sa da ili ne možete koristiti taster "n" za negativan odgovor dok za pozitivan odgovor možete koristiti taster "y" ili "Enter".  Kroz liste se možete kretati putem "strelica" taster "gore" i "dole" menja trenutni izbor dok taster "levo" i "desno" menja trenutnu stranu. ';
        }
        else if (this.step === 12) {
            this.helpText =
                "Ako vam je potrebna štampa na papiru u većim količinama izaberite opciju ofset štampa. U slučaju da želite štampu na tekstilu kao na primer majice i zastave, izaberite sito štampu. Digitalna štampa je štampa na papiru, a prednost ove štampe je isplatljivost na manjem broju primeraka štampe.";
        }
        else {
            this.helpKey = false;
        }
    };
    KalkulatorComponent.prototype.helpToggle = function () {
        if (this.helpText) {
            if (!this.helpSection) {
                this.helpSection = true;
                this.preKey = true;
                this.nextKey = true;
                this.emptyKey = true;
                if (this.answerType === 'conf') {
                    this.helpCopy = this.emptyKeyText;
                    this.emptyKeyText = 'Zatvori pomoć';
                }
                else {
                    this.emptyKeyText = 'Zatvori pomoć';
                }
            }
            else {
                this.helpSection = false;
                this.preKey = false;
                this.nextKey = false;
                this.emptyKey = false;
                if (this.answerType === 'conf') {
                    this.emptyKeyText = this.helpCopy;
                    this.emptyKey = true;
                }
                else {
                    this.emptyKeyText = '';
                }
            }
        }
    };
    KalkulatorComponent.prototype.helpMoveToUpClick = function () {
        if (this.helpSection) {
            this.helpDiv.nativeElement.scrollTop -= 15;
        }
    };
    KalkulatorComponent.prototype.helpMoveToDownClick = function () {
        if (this.helpSection) {
            this.helpDiv.nativeElement.scrollTop += 15;
        }
    };
    KalkulatorComponent.prototype.helpMoveToUp = function () {
        var _this = this;
        if (this.helpSection) {
            this.helpMoveT = setInterval(function () {
                _this.helpDiv.nativeElement.scrollTop -= 5;
            }, 50);
        }
    };
    KalkulatorComponent.prototype.helpMoveToDown = function () {
        var _this = this;
        if (this.helpSection) {
            this.helpMoveT = setInterval(function () {
                _this.helpDiv.nativeElement.scrollTop += 5;
            }, 50);
        }
    };
    KalkulatorComponent.prototype.helpMoveStop = function () {
        clearInterval(this.helpMoveT);
    };
    // Keyboard ------------------------------------------------------------------------------
    KalkulatorComponent.prototype.keyboard = function (event) {
        //console.log(event);
        if (this.robotThinks) {
            return; // blokator
        }
        if (event.key === 'Enter' || event.key == 'NumpadEnter') {
            if (this.helpSection) {
                this.helpToggle();
            }
            else if (this.answerType === 'text') {
                this.saveAnswerText();
            }
            else if (this.answerType === 'number') {
                this.saveAnswerNumber();
            }
            else if (this.answerType === 'boolean') {
                this.saveAnswerBoolean(true);
            }
            else if (this.answerType === 'conf') {
                this.saveAnswerAgree();
            }
            else if (this.answerType === 'smallList') {
                this.saveAnswerSmallList();
            }
            else if (this.answerType === 'specialList-one') {
                this.saveAnswerSpecialList();
            }
            else if (this.answerType === 'specialList-many') {
                if (this.specialList_ChoiceList.length < 1) {
                    return;
                }
                this.savePaper();
            }
            else if (this.answerType === 'array') {
                this.saveInputArray();
            }
        }
        if (event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40) {
            if (this.helpSection == true) {
                if (event.keyCode === 39) {
                    this.helpMoveToDownClick();
                }
                else if (event.keyCode === 37) {
                    this.helpMoveToUpClick();
                }
            }
            else if (this.answerType === 'smallList') {
                this.changeChoiceSmallList(event.keyCode);
            }
            else if (this.answerType === 'specialList-one') {
                this.changeChoiceSpecialListOne(event.keyCode);
            }
            else if (this.answerType === 'specialList-many') {
                this.changeChoiceSpecialListMany(event.keyCode);
            }
        }
        if (event.key === "Control") {
            if (this.helpText) {
                this.helpToggle();
            }
        }
        if (event.key === 'y' || event.key === "Y") {
            if (this.answerType === 'boolean') {
                this.saveAnswerBoolean(true);
            }
        }
        if (event.key === 'n' || event.key === "N") {
            if (this.answerType === 'boolean') {
                this.saveAnswerBoolean(false);
            }
        }
        if (event.key === 's') {
            if (this.answerType === 'specialList-many') {
                this.addChoiceToListMany();
            }
        }
    };
    // Virtual keyboard ------------------------------------------------------------------------------
    KalkulatorComponent.prototype.virtualKeyboard = function (s) {
        if (this.robotThinks) {
            return; // blokator
        }
        // Numbers
        if (s == 1 || s == 2 || s == 3 || s == 4 || s == 5 || s == 6 || s == 7 || s == 8 || s == 9 || s == 0) {
            if (this.answerType === 'number' || this.answerType === 'array') {
                if (!this.answer) {
                    this.answer = '';
                }
                this.answer = this.answer + s;
            }
        }
        // ,
        else if (s == '.') {
            this.answer = this.answer + '.';
        }
        // Delete
        else if (s == 'delete') {
            //console.log('upisan je delete')
            if (this.answerType === "text" || this.answerType === "number" || this.answerType === "array") {
                if (this.answer != "") {
                    this.answer = this.answer.slice(0, -1);
                }
            }
        }
        // True - Yes
        else if (s == 'yes') {
            //console.log('upisan je true')
            if (this.answerType === "boolean") {
                this.saveAnswerBoolean(true);
            }
        }
        // False - No
        else if (s == 'no') {
            //console.log('upisan je false')
            if (this.answerType === "boolean") {
                this.saveAnswerBoolean(false);
            }
        }
        // List
        else if (s == 'list') {
            // console.log('upisan je list')
        }
        // Enter
        else if (s == 'enter') {
            if (this.helpSection) {
                this.helpToggle();
            }
            else if (this.answerType === 'text') {
                this.saveAnswerText();
            }
            else if (this.answerType === 'number') {
                this.saveAnswerNumber();
            }
            else if (this.answerType === "specialList-many") {
                if (this.specialList_ChoiceList.length < 1) {
                    return;
                }
                this.savePaper();
            }
            else if (this.answerType === "array") {
                this.saveInputArray();
            }
        }
        // BigButton
        else if (s == 'bigButton') {
            if (this.helpSection) {
                this.helpToggle();
            }
            else if (this.answerType === "conf") {
                this.saveAnswerAgree();
            }
        }
        // Previous
        else if (s == 'prev') {
            if (this.helpSection == true) {
                this.helpMoveToUpClick();
            }
            else if (this.answerType === "specialList-many" || this.answerType === "specialList-one") {
                this.previousPage();
            }
        }
        // Next
        else if (s == 'next') {
            if (this.helpSection == true) {
                this.helpMoveToDownClick();
            }
            else if (this.answerType === "specialList-many" || this.answerType === "specialList-one") {
                this.nextPage();
            }
        }
        // Focus input
        this.input.nativeElement.focus();
    };
    KalkulatorComponent.prototype.virtualKeyboardHover = function (s) {
        if (this.robotThinks) {
            return; // blokator
        }
        if (s == 'prev') {
            if (this.helpSection == true) {
                this.helpMoveToUp();
            }
        }
        else if (s === 'next') {
            if (this.helpSection == true) {
                this.helpMoveToDown();
            }
        }
    };
    KalkulatorComponent.prototype.virtualKeyboardHoverOut = function (s) {
        if (this.robotThinks) {
            return; // blokator
        }
        if (s === 'prev') {
            if (this.helpSection == true) {
                this.helpMoveStop();
            }
        }
        else if (s === 'next') {
            if (this.helpSection == true) {
                this.helpMoveStop();
            }
        }
    };
    // Small list ------------------------------------------------------------------------------
    KalkulatorComponent.prototype.changeChoiceSmallList = function (key) {
        var _this = this;
        var currentIndex = this.smallList.findIndex(function (item) { return item === _this.smallListChoice; });
        // Up
        if (key == 38) {
            if (currentIndex == 0) {
                this.smallListChoice = this.smallList[this.smallList.length - 1];
            }
            else {
                this.smallListChoice = this.smallList[currentIndex - 1];
            }
            // Down
        }
        else if (key == 40) {
            //console.log(this.smallList.length);
            if (currentIndex == this.smallList.length - 1) {
                this.smallListChoice = this.smallList[0];
            }
            else {
                this.smallListChoice = this.smallList[currentIndex + 1];
            }
        }
    };
    KalkulatorComponent.prototype.changeChoiceSpecialListOne = function (key) {
        var _this = this;
        var currentIndex = this.specialList.findIndex(function (item) { return item === _this.specialListChoice; });
        if (key === 38) {
            if (currentIndex == 0) {
                this.specialListChoice = this.specialList[this.specialList.length - 1];
            }
            else {
                this.specialListChoice = this.specialList[currentIndex - 1];
            }
        }
        else if (key === 40) {
            if (currentIndex == this.specialList.length - 1) {
                this.specialListChoice = this.specialList[0];
            }
            else {
                this.specialListChoice = this.specialList[currentIndex + 1];
            }
        }
        else if (key === 37) {
            this.previousPage();
        }
        else if (key === 39) {
            this.nextPage();
        }
    };
    KalkulatorComponent.prototype.changeChoiceSpecialListMany = function (key) {
        var _this = this;
        var currentIndex = this.specialList.findIndex(function (item) { return item === _this.specialListChoice; });
        if (key === 38) {
            if (currentIndex == 0) {
                this.specialListChoice = this.specialList[this.specialList.length - 1];
            }
            else {
                this.specialListChoice = this.specialList[currentIndex - 1];
            }
        }
        else if (key === 40) {
            if (currentIndex == this.specialList.length - 1) {
                this.specialListChoice = this.specialList[0];
            }
            else {
                this.specialListChoice = this.specialList[currentIndex + 1];
            }
        }
        else if (key === 37) {
            this.previousPage();
        }
        else if (key === 39) {
            this.nextPage();
        }
    };
    KalkulatorComponent.prototype.addChoiceToListMany = function () {
        for (var _i = 0, _a = this.specialList_ChoiceList; _i < _a.length; _i++) {
            var obj = _a[_i];
            if (obj.id === this.specialListChoice.id) {
                var index = this.specialList_ChoiceList.indexOf(this.specialListChoice);
                this.specialList_ChoiceList.splice(index, 1);
                //console.log(index);
                return;
            }
        }
        this.specialList_ChoiceList.push(this.specialListChoice);
        //console.log(this.specialList_ChoiceList);
    };
    KalkulatorComponent.prototype.checkChoiceListMany = function (o) {
        for (var _i = 0, _a = this.specialList_ChoiceList; _i < _a.length; _i++) {
            var obj = _a[_i];
            if (obj.id === o.id) {
                return true;
            }
        }
        return false;
    };
    KalkulatorComponent.prototype.previousPage = function () {
        if (this.specialList_CurrentPage > 0) {
            this.specialList_CurrentPage--;
            this.loadSpecialList();
        }
    };
    KalkulatorComponent.prototype.nextPage = function () {
        if (this.specialList_CurrentPage <
            Math.ceil(this.specialList_TotalItems / 4) - 1) {
            this.specialList_CurrentPage++;
            this.loadSpecialList();
        }
    };
    KalkulatorComponent.prototype.currentPagePrint = function () {
        return this.specialList_CurrentPage + 1;
    };
    KalkulatorComponent.prototype.totalPagesPrint = function () {
        return Math.ceil(this.specialList_TotalItems / 4);
    };
    KalkulatorComponent.prototype.changeRobot = function (robotText, pauseAfter) {
        var _this = this;
        if (pauseAfter === void 0) { pauseAfter = 0; }
        return new Promise(function (resolve, reject) {
            var pause = 20; // pauza pre pocetka prikaza
            var characterCount = 0;
            var statusOfChangeRobot = "delete";
            _this.robotThinks = setInterval(function () {
                if (pause > 0) {
                    pause--; // smanjuje pocetnu pauzu
                }
                else if (_this.robot != "" && statusOfChangeRobot === "delete") {
                    _this.robot = _this.robot.slice(0, -4);
                }
                else if (_this.robot === "" && statusOfChangeRobot === "delete") {
                    statusOfChangeRobot = "create";
                    _this.refreshCalculator();
                }
                else if (statusOfChangeRobot === "create") {
                    if (characterCount < robotText.length) {
                        _this.robot += robotText[characterCount];
                        characterCount++;
                    }
                    else {
                        statusOfChangeRobot = "end";
                    }
                }
                else if (statusOfChangeRobot === "end") {
                    if (pauseAfter == 0) {
                        clearInterval(_this.robotThinks);
                        _this.robotThinks = null;
                        resolve();
                    }
                    else {
                        pauseAfter--;
                    }
                }
            }, 12);
        });
    };
    KalkulatorComponent.prototype.changeRobotText = function (robotText) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var pause = 20; // pauza pre pocetka prikaza
            var characterCount = 0;
            var statusOfChangeRobot = "delete";
            _this.robotThinks = setInterval(function () {
                if (pause > 0) {
                    pause--; // smanjuje pocetnu pauzu
                }
                else if (_this.robot != "" && statusOfChangeRobot === "delete") {
                    _this.robot = _this.robot.slice(0, -4);
                }
                else if (_this.robot === "" && statusOfChangeRobot === "delete") {
                    statusOfChangeRobot = "create";
                }
                else if (statusOfChangeRobot === "create") {
                    if (characterCount < robotText.length) {
                        _this.robot += robotText[characterCount];
                        characterCount++;
                    }
                    else {
                        statusOfChangeRobot = "end";
                    }
                }
                else if (statusOfChangeRobot === "end") {
                    clearInterval(_this.robotThinks);
                    _this.robotThinks = null;
                    resolve();
                }
            }, 10);
        });
    };
    KalkulatorComponent.prototype.gameOfRobot = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var i = 0; // pauza pre pocetka prikaza
            _this.robotThinks = setInterval(function () {
                if (i < 19) {
                    if (i === 0) {
                        _this.textKey = true;
                    }
                    else if (i === 1) {
                        _this.yesKey = true;
                    }
                    else if (i === 2) {
                        _this.noKey = true;
                    }
                    else if (i === 3) {
                        _this.listKey = true;
                    }
                    else if (i === 4) {
                        _this.eneterKey = true;
                    }
                    else if (i === 5) {
                        _this.nextKey = true;
                    }
                    else if (i === 6) {
                        _this.preKey = true;
                    }
                    else if (i === 7) {
                        _this.helpKey = true;
                    }
                    else if (i === 8) {
                        _this.numbersKey = true;
                    }
                    else if (i === 9) {
                        // pause
                    }
                    else if (i === 10) {
                        _this.numbersKey = false;
                    }
                    else if (i === 11) {
                        _this.helpKey = false;
                    }
                    else if (i === 12) {
                        _this.preKey = false;
                    }
                    else if (i === 13) {
                        _this.nextKey = false;
                    }
                    else if (i === 14) {
                        _this.eneterKey = false;
                    }
                    else if (i === 15) {
                        _this.listKey = false;
                    }
                    else if (i === 16) {
                        _this.noKey = false;
                    }
                    else if (i === 17) {
                        _this.yesKey = false;
                    }
                    else if (i === 18) {
                        _this.textKey = false;
                    }
                    i++;
                }
                else {
                    clearInterval(_this.robotThinks);
                    _this.robotThinks = null;
                    resolve();
                }
            }, 200);
        });
    };
    KalkulatorComponent.prototype.pripareInput = function () {
        this.inputReadOnly = false;
        this.input.nativeElement.focus();
    };
    KalkulatorComponent.prototype.lightKeyboard = function () {
        if (this.answerType === 'text') {
            this.textKey = true;
            this.eneterKey = true;
        }
        else if (this.answerType === 'number') {
            this.numbersKey = true;
            this.eneterKey = true;
        }
        else if (this.answerType === 'boolean') {
            this.noKey = true;
            this.yesKey = true;
        }
        else if (this.answerType === 'conf') {
            this.emptyKey = true;
        }
        else if (this.answerType === 'smallList') {
        }
        else if (this.answerType === 'specialList-one') {
            this.preKey = true;
            this.nextKey = true;
        }
        else if (this.answerType === 'specialList-many') {
            this.preKey = true;
            this.nextKey = true;
            this.eneterKey = true;
        }
    };
    KalkulatorComponent.prototype.preFromKeyBoardClick = function () {
        if (this.answerType === "specialList") {
            this.previousPage();
        }
    };
    KalkulatorComponent.prototype.preFromKeyBoardHover = function () { };
    KalkulatorComponent.prototype.nextFromKeyBoardClick = function () {
        if (this.answerType === "specialList") {
            this.nextPage();
        }
    };
    KalkulatorComponent.prototype.nextFromKeyBoardHover = function () { };
    //refresh calculator
    KalkulatorComponent.prototype.refreshCalculator = function () {
        if (this.inputInvalid) {
            return; // u slucaju da input nije validan nece dopustiti resetovanje
        }
        this.answer = "";
        this.inputReadOnly = true;
        this.smallList = null;
        this.smallListChoice = null;
        this.helpCopy = null;
        this.helpSection = false;
        this.helpText = null;
        this.textKey = false;
        this.helpKey = false;
        this.numbersKey = false;
        this.noKey = false;
        this.yesKey = false;
        this.eneterKey = false;
        this.preKey = false;
        this.nextKey = false;
        this.listKey = false;
        this.deleteKey = false;
        this.emptyKey = null;
        this.emptyKeyText = '';
        this.specialList = null;
        this.specialList_Path = null;
        this.specialList_CurrentPage = 0;
        this.specialList_TotalItems = null;
        this.specialList_ItemPerPage = 4;
        this.specialList_SortElement = null;
        this.specialList_SortOrder = 'asc';
        this.specialList_Searches = null;
        this.specialList_ChoiceOne = null;
        this.specialList_ChoiceList = [];
        this.specialList_PapersSection = false;
        this.specialList_printMachinesSection = false;
        this.specialList_equipmentsSection = false;
        this.specialListPrintMachines = false;
        this.specialListPaperType = false;
        this.specialListPrintPlatform = false;
        this.specialListPrintText = false;
        this.specialListColors = false;
        // Array
        this.array = [];
        this.arrayItem = {};
        this.arrayCounter = 0;
        this.arrayMax = 0;
        this.arrayText = null;
        this.arrayScheme = null;
        this.arrayAttribute = 0;
        this.arrayAttributeCounter = 0;
        // Div
        this.shareOfsetR = false;
    };
    // ******************* CALCULATOR CALCULATIONs *************************
    KalkulatorComponent.prototype.formatProizvodaNeobrezan = function () {
        var obrezan = this.get('obrezanFormatProizvodaB');
        var tipProizvoda = this.get('tipProizvoda');
        var sirinaProizvoda = this.get('sirinaProizvoda');
        var duzinaProizvoda = this.get('duzinaProizvoda');
        if (obrezan) {
            if (tipProizvoda === 'Plakat') {
                sirinaProizvoda += 6;
                duzinaProizvoda += 6;
            }
            else if (tipProizvoda === 'Letak') {
                sirinaProizvoda += 6;
                duzinaProizvoda += 6;
            }
            else if (tipProizvoda === 'Brošura') {
                sirinaProizvoda += 3;
                duzinaProizvoda += 6;
            }
        }
        this.form.patchValue({ 'sirinaProizvoda': sirinaProizvoda });
        this.form.patchValue({ 'duzinaProizvoda': duzinaProizvoda });
    };
    KalkulatorComponent.prototype.tabakZaStampu = function (korice) {
        // Tip proizvoda
        var tipProizvoda = this.get('tipProizvoda');
        // Stamparska masina
        var Wm = this.get('masinaZaStampu').x; // maksimalna sirina stamparske masine (mm)
        var Hm = this.get('masinaZaStampu').y; // maksimalna duzina stamparkse masine (mm)
        if (korice) {
            Wm = this.get('masinaZaStampuKorica').x;
            Hm = this.get('masinaZaStampuKorica').y;
        }
        // Tehnoloske povrsine
        Wm = Wm - 10;
        Hm = Hm - 19;
        // Dimenzije proizvoda
        var Wp = this.get('sirinaProizvoda'); // sirina proizvoda (mm)
        var Hp = this.get('duzinaProizvoda'); // duzina proizvoda (mm)
        // Dimenzije tabaka za stampu?
        var sirinaTabakZaStampu;
        var duzinaTabakaZaStampu;
        var otpadTabakaZaStampu;
        var brojProizvodaPoTabakuZaStampu;
        if (tipProizvoda === 'Plakat' || tipProizvoda === 'Letak') {
            var Wm_x = Wm; // Sirina masine
            var Hm_x = Hm; // Duzina masine
            var Wp_x = Wp; // Sirina prozivoda
            var Hp_x = Hp; // Duzina proizvoda
            var WbP_x = Math.floor(Wm_x / Wp_x); // Br. proizvoda po sirini
            var HbP_x = Math.floor(Hm_x / Hp_x); // Br. proizvoda po duzini
            var Bp_x = WbP_x * HbP_x; // Ukupan broj proizvoda
            var WoP_x = Wm_x - (Wp_x * WbP_x); // Ostatak po sirini
            var HoP_x = Hm_x - (Hp_x * HbP_x); // Ostatak po duzini
            var WoQ_x = false; // Da li ima proizvoda u ostatku
            var HoQ_x = false; // Da li ima proizvoda u ostatku
            if (Hp_x >= Wp_x) {
                if (HoP_x >= Wp_x) {
                    Bp_x = Bp_x + Math.floor(Wm_x / Hp_x);
                    WoQ_x = true;
                }
            }
            else {
                if (WoP_x >= Hp_x) {
                    Bp_x = Bp_x + Math.floor(Hm_x / Wp_x);
                    HoQ_x = true;
                }
            }
            var Op_x = ((Wm_x * Hm_x) - (Bp_x * Wp_x * Hp_x)) / (Wm * Hm) * 100; // Ostatak u procentima
            var Wm_y = Wm; // Sirina masine
            var Hm_y = Hm; // Duzina masine
            var Wp_y = Hp; // Sirina prozivoda
            var Hp_y = Wp; // Duzina proizvoda
            var WbP_y = Math.floor(Wm_y / Wp_y); // Br. proizvoda po sirini
            var HbP_y = Math.floor(Hm_y / Hp_y); // Br. proizvoda po duzini
            var Bp_y = WbP_y * HbP_y; // Ukupan broj proizvoda
            var WoP_y = Wm_y - (Wp_y * WbP_y); // Ostatak po sirini
            var HoP_y = Hm_y - (Hp_y * HbP_y); // Ostatak po duzini
            var WoQ_y = false; // Da li ima proizvoda u ostatku
            var HoQ_y = false; // Da li ima proizvoda u ostatku
            if (Hp_y >= Wp_y) {
                if (HoP_y >= Wp_y) {
                    Bp_y = Bp_y + Math.floor(Wm_y / Hp_y);
                    WoQ_y = true;
                }
            }
            else {
                if (WoP_y >= Hp_y) {
                    Bp_y = Bp_y + Math.floor(Hm_y / Wp_y);
                    HoQ_y = true;
                }
            }
            var Op_y = ((Wm_y * Hm_y) - (Bp_y * Wp_y * Hp_y)) / (Wm * Hm) * 100;
            var Wst = void 0;
            var Hst = void 0;
            if (Bp_x >= Bp_y) {
                brojProizvodaPoTabakuZaStampu = Bp_x;
                otpadTabakaZaStampu = Op_x;
                Wst = WbP_x * Wp_x + 10;
                Hst = HbP_x * Hp_x + 19;
                if (HoQ_x) {
                    Wst = Wst + Hp_x;
                }
                else if (WoQ_x) {
                    Hst = Hst + Wp_x;
                }
            }
            else {
                otpadTabakaZaStampu = Op_y;
                brojProizvodaPoTabakuZaStampu = Bp_y;
                Wst = WbP_y * Wp_y + 10;
                Hst = HbP_y * Hp_y + 19;
                if (HoQ_y) {
                    Wst = Wst + Hp_y;
                }
                else if (WoQ_y) {
                    Hst = Hst + Wp_y;
                }
            }
            sirinaTabakZaStampu = Wst;
            duzinaTabakaZaStampu = Hst;
        }
        else if (tipProizvoda === 'Brošura') {
            var Wm_x = Wm; // Sirina masine
            var Hm_x = Hm; // Duzina masine
            var Wp_x = Wp; // Sirina prozivoda
            var Hp_x = Hp; // Duzina proizvoda
            var WbP_x = Math.floor(Wm_x / Wp_x); // Br. proizvoda po sirini
            var HbP_x = Math.floor(Hm_x / Hp_x); // Br. proizvoda po duzini
            var Bp_x = WbP_x * HbP_x; // Ukupan broj proizvoda
            var Op_x = ((Wm_x * Hm_x) - (Bp_x * Wp_x * Hp_x)) / (Wm * Hm) * 100; // Ostatak u procentima
            var Wm_y = Wm; // Sirina masine
            var Hm_y = Hm; // Duzina masine
            var Wp_y = Hp; // Sirina prozivoda
            var Hp_y = Wp; // Duzina proizvoda
            var WbP_y = Math.floor(Wm_y / Wp_y); // Br. proizvoda po sirini
            var HbP_y = Math.floor(Hm_y / Hp_y); // Br. proizvoda po duzini
            var Bp_y = WbP_y * HbP_y; // Ukupan broj proizvoda
            var Op_y = ((Wm_y * Hm_y) - (Bp_y * Wp_y * Hp_y)) / (Wm * Hm) * 100;
            var Wst = void 0;
            var Hst = void 0;
            if (Bp_x >= Bp_y) {
                brojProizvodaPoTabakuZaStampu = Bp_x;
                otpadTabakaZaStampu = Op_x;
                Wst = WbP_x * Wp_x + 10;
                Hst = HbP_x * Hp_x + 19;
            }
            else {
                otpadTabakaZaStampu = Op_y;
                brojProizvodaPoTabakuZaStampu = Bp_y;
                Wst = WbP_y * Wp_y + 10;
                Hst = HbP_y * Hp_y + 19;
            }
            sirinaTabakZaStampu = Wst;
            duzinaTabakaZaStampu = Hst;
        }
        // Cuvanje
        if (korice) {
            this.form.addControl('sirinaTabakZaStampuKorice', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](sirinaTabakZaStampu));
            this.form.addControl('duzinaTabakaZaStampuKorice', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](duzinaTabakaZaStampu));
            this.form.addControl('brojProizvodaPoTabakuZaStampuKorice', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](brojProizvodaPoTabakuZaStampu));
        }
        else {
            this.form.addControl('sirinaTabakZaStampu', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](sirinaTabakZaStampu));
            this.form.addControl('duzinaTabakaZaStampu', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](duzinaTabakaZaStampu));
            this.form.addControl('brojProizvodaPoTabakuZaStampu', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](brojProizvodaPoTabakuZaStampu));
        }
        //this.form.addControl( 'sirinaTabakZaStampu', new FormControl(sirinaTabakZaStampu));
        //this.form.addControl( 'duzinaTabakaZaStampu', new FormControl(duzinaTabakaZaStampu));
        //this.form.addControl( 'otpadTabakaZaStampu', new FormControl(otpadTabakaZaStampu));
    };
    KalkulatorComponent.prototype.osnovniTabak = function (korice) {
        var sirinaTabakZaStampu = this.get('sirinaTabakZaStampu');
        var duzinaTabakaZaStampu = this.get('duzinaTabakaZaStampu');
        var papiri = this.specialList_ChoiceList;
        //let sirinaTabakZaStampu = 322; //test
        //let duzinaTabakaZaStampu = 436; //test
        var br = 0;
        var ostatak = 100;
        var papir;
        for (var _i = 0, papiri_1 = papiri; _i < papiri_1.length; _i++) {
            var p = papiri_1[_i];
            var Wm_x = p.x; // Sirina osnovnog papira
            var Hm_x = p.y; // Duzina osnovnog papira
            var Wp_x = sirinaTabakZaStampu; // Sirina tabaka za stampu
            var Hp_x = duzinaTabakaZaStampu; // Duzina tabaka za stampu
            var WbP_x = Math.floor(Wm_x / Wp_x); // Br. tabaka za stampu po sirini
            var HbP_x = Math.floor(Hm_x / Hp_x); // Br. tabaka za stampu  duzini
            var Bp_x = WbP_x * HbP_x; // Ukupan broj tabaka za stampu 
            var WoP_x = Wm_x - (Wp_x * WbP_x); // Ostatak po sirini
            var HoP_x = Hm_x - (Hp_x * HbP_x); // Ostatak po duzini
            if (Hp_x >= Wp_x) {
                if (HoP_x >= Wp_x) {
                    Bp_x = Bp_x + Math.floor(Wm_x / Hp_x);
                }
            }
            else {
                if (WoP_x >= Hp_x) {
                    Bp_x = Bp_x + Math.floor(Hm_x / Wp_x);
                }
            }
            var Op_x = ((Wm_x * Hm_x) - (Bp_x * Wp_x * Hp_x)) / (Wm_x * Hm_x) * 100; // Ostatak u procentima
            // console.log('id ' + p.id + ' '+ p.naziv + ' 1 ' + p.x + 'x' + p.y ); // test
            // console.log(Op_x); //test
            if (ostatak > Op_x) {
                ostatak = Op_x;
                papir = p;
                br = Bp_x;
            }
            var Wm_y = p.x; // Sirina osnovnog papira
            var Hm_y = p.y; // Duzina osnovnog papira
            var Wp_y = duzinaTabakaZaStampu; // Sirina tabaka za stampu
            var Hp_y = sirinaTabakZaStampu; // Duzina tabaka za stampu
            var WbP_y = Math.floor(Wm_y / Wp_y); // Br. tabaka za stampu po sirini
            var HbP_y = Math.floor(Hm_y / Hp_y); // Br. tabaka za stampu po duzini
            var Bp_y = WbP_y * HbP_y; // Ukupan broj tabaka za stampu
            var WoP_y = Wm_y - (Wp_y * WbP_y); // Ostatak po sirini
            var HoP_y = Hm_y - (Hp_y * HbP_y); // Ostatak po duzini
            if (Hp_y >= Wp_y) {
                if (HoP_y >= Wp_y) {
                    Bp_y = Bp_y + Math.floor(Wm_y / Hp_y);
                }
            }
            else {
                if (WoP_y >= Hp_y) {
                    Bp_y = Bp_y + Math.floor(Hm_y / Wp_y);
                }
            }
            var Op_y = ((Wm_y * Hm_y) - (Bp_y * Wp_y * Hp_y)) / (Wm_y * Hm_y) * 100; // Ostatak u procentima
            // console.log('id ' + p.id + ' '+ p.naziv + ' 1 ' + p.x + 'x' + p.y ); test
            // console.log(Op_y); test
            if (ostatak > Op_y) {
                ostatak = Op_y;
                papir = p;
                br = Bp_y;
            }
        }
        if (korice) {
            this.form.patchValue({ 'papirKorice': papir });
            this.form.addControl('brojTabakaZaStampuPoOsnovnomTabakuKorice', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](br));
        }
        else {
            this.form.patchValue({ 'papir': papir });
            this.form.addControl('brojTabakaZaStampuPoOsnovnomTabaku', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](br));
        }
    };
    // Proveriti cemu sluzi???
    KalkulatorComponent.prototype.bestPaper = function () {
        console.log('bestPaper(!)');
        console.log('tip proizvoda: ' + this.get('tipProizvoda'));
        console.log('sirina proizvoda: ' + this.get('sirinaProizvoda'));
        console.log('duzina proizvoda: ' + this.get('duzinaProizvoda'));
        console.log('da li je obrezan format: ' + this.get('obrezanFormatProizvodaB'));
        console.log('masina za stampu ');
        console.log(this.get('masinaZaStampu'));
        console.log('izabrani papiri:');
        console.log(this.specialList_ChoiceList);
        var tipProizvoda = this.get('tipProizvoda');
        var obrezanFormat = this.get('obrezanFormatProizvodaB');
        var Wm = this.get('masinaZaStampu').x; // maksimalna sirina stamparske masine (mm)
        var Hm = this.get('masinaZaStampu').y; // maksimalna duzina stamparkse masine (mm)
        // Tehnoloske povrsine
        Wm = Wm - 10;
        Hm = Hm - 19;
        // Test masina
        Wm = 510;
        Hm = 735;
        var Wp = this.get('sirinaProizvoda'); // sirina proizvoda (mm)
        var Hp = this.get('duzinaProizvoda'); // duzina proizvoda (mm)
        // Obrezan - neobrezan
        if (obrezanFormat) {
            if (tipProizvoda === 'Plakat') {
                Wp = Wp + 6;
                Hp = Hp + 6;
            }
        }
        // Test proizvod
        Wp = 303;
        Hp = 213;
        // papiri
        var papiri = this.specialList_ChoiceList;
        // trazi se
        var WbP; // broj proizvoda po sirini (kom)
        var HbP; // broj proizvoda po sirini (kom)
        var Bp = 0; // broj proizvoda
        var WoP; // ostatak po sirini na tabaku za stampu
        var HoP; // ostatak po duzini na tabaku za 
        var Op = 100; // procentat ostatka
        var Wtzs; // sirina tabaka za stampu (mm)
        var Htzs; // duzina tabaka za stampu (mm)
        var Wb; // broj tabaka po sirini (kom)
        var Hb; // broj tabaka po duzini (kom)
        var b; // ukupan broj tabaka (kom)
        var Wo; // ostaktak po sirini (mm)
        var Ho; // ostatak po duzini
        var bestB = 0; // najvise proizvoda
        var bestO = 100; // najmanje ostatak
        var papir; // najbolji papir
        // Format tabaka za stampu
        if (tipProizvoda === 'Plakat') {
            var Wm_x = Wm; // Sirina masine
            var Hm_x = Hm; // Duzina masine
            var Wp_x = Wp; // Sirina prozivoda
            var Hp_x = Hp; // Duzina proizvoda
            var WbP_x = Math.floor(Wm_x / Wp_x); // Br. proizvoda po sirini
            var HbP_x = Math.floor(Hm_x / Hp_x); // Br. proizvoda po duzini
            var Bp_x = WbP_x * HbP_x; // Ukupan broj proizvoda
            var WoP_x = Wm_x - (Wp_x * WbP_x); // Ostatak po sirini
            var HoP_x = Hm_x - (Hp_x * HbP_x); // Ostatak po duzini
            var WoQ_x = false; // Da li ima proizvoda u ostatku
            var HoQ_x = false; // Da li ima proizvoda u ostatku
            var Op_x = ((Wm_x * Hm_x) - (Bp_x * Wp_x * Hp_x)) / (Wm * Hm) * 100; // Ostatak u procentima
            var Wm_y = Wm; // Sirina masine
            var Hm_y = Hm; // Duzina masine
            var Wp_y = Hp; // Sirina prozivoda
            var Hp_y = Wp; // Duzina proizvoda
            var WbP_y = Math.floor(Wm_y / Wp_y); // Br. proizvoda po sirini
            var HbP_y = Math.floor(Hm_y / Hp_y); // Br. proizvoda po duzini
            var Bp_y = WbP_y * HbP_y; // Ukupan broj proizvoda
            var WoP_y = Wm_y - (Wp_y * WbP_y); // Ostatak po sirini
            var HoP_y = Hm_y - (Hp_y * HbP_y); // Ostatak po duzini
            var WoQ_y = false; // Da li ima proizvoda u ostatku
            var HoQ_y = false; // Da li ima proizvoda u ostatku
            var Op_y = ((Wm_y * Hm_y) - (Bp_y * Wp_y * Hp_y)) / (Wm * Hm) * 100;
            var Wst = void 0;
            var Hst = void 0;
            if (Bp_x > Bp_y) {
                Wst = WbP_x * Wp_x + 10;
                console.log('w: ' + Wst);
                Hst = HbP_x * Hp_x + 19;
                console.log('h: ' + Hst);
            }
            else {
                Wst = WbP_y * Wp_y + 10;
                console.log('W: ' + Wst);
                Hst = HbP_y * Hp_y + 19;
                console.log('H: ' + Hst);
            }
            //console.log('Dimenzije - stamparski tabak sirina: ' + Wst + "duzina: " + Hst);
        }
        // Izracunavanje najboljeg papira
        if (tipProizvoda === 'Plakat') {
        }
        // Wm = machine.x;
        //Hm = machine.y;
        // for(let paper of papers){
        //   Wp = paper.x;
        //   Hp = paper.y;
        //   Wb = Math.floor(Wm / Wp);
        //   Hb = Math.floor(Hm / Hp);
        // }
    };
    // Proveriti cemu sluzi ???
    KalkulatorComponent.prototype.bestPaperrrr = function () {
        console.log('bestPaper(!)');
        console.log('tip proizvoda: ' + this.get('tipProizvoda'));
        console.log('sirina proizvoda: ' + this.get('sirinaProizvoda'));
        console.log('duzina proizvoda: ' + this.get('duzinaProizvoda'));
        console.log('da li je obrezan format: ' + this.get('obrezanFormatProizvodaB'));
        console.log('masina za stampu ');
        console.log(this.get('masinaZaStampu'));
        console.log('izabrani papiri:');
        console.log(this.specialList_ChoiceList);
        var tipProizvoda = this.get('tipProizvoda');
        var obrezanFormat = this.get('obrezanFormatProizvodaB');
        var Wm = this.get('masinaZaStampu').x; // maksimalna sirina stamparske masine (mm)
        var Hm = this.get('masinaZaStampu').y; // maksimalna duzina stamparkse masine (mm)
        // Tehnoloske povrsine
        Wm = Wm - 10;
        Hm = Hm - 19;
        // Test masina
        Wm = 500;
        Hm = 707;
        var Wp = this.get('sirinaProizvoda'); // sirina proizvoda (mm)
        var Hp = this.get('duzinaProizvoda'); // duzina proizvoda (mm)
        // Obrezan - neobrezan
        if (obrezanFormat) {
            if (tipProizvoda === 'Plakat') {
                Wp = Wp + 6;
                Hp = Hp + 6;
            }
        }
        // Test proizvod
        Wp = 210;
        Hp = 290;
        // papiri
        var papiri = this.specialList_ChoiceList;
        // trazi se
        var WbP; // broj proizvoda po sirini (kom)
        var HbP; // broj proizvoda po sirini (kom)
        var Bp = 0; // broj proizvoda
        var WoP; // ostatak po sirini na tabaku za stampu
        var HoP; // ostatak po duzini na tabaku za 
        var Op = 100; // procentat ostatka
        var Wtzs; // sirina tabaka za stampu (mm)
        var Htzs; // duzina tabaka za stampu (mm)
        var Wb; // broj tabaka po sirini (kom)
        var Hb; // broj tabaka po duzini (kom)
        var b; // ukupan broj tabaka (kom)
        var Wo; // ostaktak po sirini (mm)
        var Ho; // ostatak po duzini
        var bestB = 0; // najvise proizvoda
        var bestO = 100; // najmanje ostatak
        var papir; // najbolji papir
        // Format tabaka za stampu
        if (tipProizvoda === 'Plakat') {
            var Wm_x = Wm; // Sirina masine
            var Hm_x = Hm; // Duzina masine
            var Wp_x = Wp; // Sirina prozivoda
            var Hp_x = Hp; // Duzina proizvoda
            var WbP_x = Math.floor(Wm_x / Wp_x); // Br. proizvoda po sirini
            var HbP_x = Math.floor(Hm_x / Hp_x); // Br. proizvoda po duzini
            var Bp_x = WbP_x * HbP_x; // Ukupan broj proizvoda
            var WoP_x = Wm_x - (Wp_x * WbP_x); // Ostatak po sirini
            var HoP_x = Hm_x - (Hp_x * HbP_x); // Ostatak po duzini
            var WoQ_x = false; // Da li ima proizvoda u ostatku
            var HoQ_x = false; // Da li ima proizvoda u ostatku
            console.log('Wm_x ' + Wm_x);
            console.log('Hm_x ' + Hm_x);
            console.log('Wp_x ' + Wp_x);
            console.log('Hp_x ' + Hp_x);
            console.log('WbP_x ' + WbP_x);
            console.log('HbP_x ' + HbP_x);
            console.log('Bp_x ' + Bp_x);
            console.log('WoP_x ' + WoP_x);
            console.log('HoP_x ' + HoP_x);
            if (Hp_x >= Wp_x) {
                if (HoP_x >= Wp_x) {
                    Bp_x = Bp_x + Math.floor(Wm_x / Hp_x);
                    WoQ_x = true;
                }
            }
            else {
                if (WoP_x >= Hp_x) {
                    Bp_x = Bp_x + Math.floor(Hm_x / Wp_x);
                    HoQ_x = true;
                }
            }
            var Op_x = ((Wm_x * Hm_x) - (Bp_x * Wp_x * Hp_x)) / (Wm * Hm) * 100; // Ostatak u procentima
            console.log(Bp_x);
            console.log(Op_x);
            var Wm_y = Wm; // Sirina masine
            var Hm_y = Hm; // Duzina masine
            var Wp_y = Hp; // Sirina prozivoda
            var Hp_y = Wp; // Duzina proizvoda
            var WbP_y = Math.floor(Wm_y / Wp_y); // Br. proizvoda po sirini
            var HbP_y = Math.floor(Hm_y / Hp_y); // Br. proizvoda po duzini
            var Bp_y = WbP_y * HbP_y; // Ukupan broj proizvoda
            var WoP_y = Wm_y - (Wp_y * WbP_y); // Ostatak po sirini
            var HoP_y = Hm_y - (Hp_y * HbP_y); // Ostatak po duzini
            var WoQ_y = false; // Da li ima proizvoda u ostatku
            var HoQ_y = false; // Da li ima proizvoda u ostatku
            console.log('Wm_y ' + Wm_y);
            console.log('Hm_y ' + Hm_y);
            console.log('Wp_y ' + Wp_y);
            console.log('Hp_y ' + Hp_y);
            console.log('WbP_y ' + WbP_y);
            console.log('HbP_y ' + HbP_y);
            console.log('Bp_y ' + Bp_y);
            console.log('WoP_y ' + WoP_y);
            console.log('HoP_y ' + HoP_y);
            if (Hp_y >= Wp_y) {
                if (HoP_y >= Wp_y) {
                    Bp_y = Bp_y + Math.floor(Wm_y / Hp_y);
                    WoQ_y = true;
                }
            }
            else {
                if (WoP_y >= Hp_y) {
                    Bp_y = Bp_y + Math.floor(Hm_y / Wp_y);
                    HoQ_y = true;
                }
            }
            var Op_y = ((Wm_y * Hm_y) - (Bp_y * Wp_y * Hp_y)) / (Wm * Hm) * 100;
            console.log(Bp_y);
            console.log(Op_y);
            var Wst = void 0;
            var Hst = void 0;
            if (Bp_x > Bp_y) {
                Wst = WbP_x * Wp_x + 10;
                console.log('w: ' + Wst);
                Hst = HbP_x * Hp_x + 19;
                console.log('h: ' + Hst);
                if (HoQ_x) {
                    Wst = Wst + Hp_x;
                }
                else if (WoQ_x) {
                    Hst = Hst + Wp_x;
                }
            }
            else {
                Wst = WbP_y * Wp_y + 10;
                console.log('W: ' + Wst);
                Hst = HbP_y * Hp_y + 19;
                console.log('H: ' + Hst);
                if (HoQ_y) {
                    Wst = Wst + Hp_y;
                }
                else if (WoQ_y) {
                    Hst = Hst + Wp_y;
                }
            }
            console.log('Dimenzije - stamparski tabak sirina: ' + Wst + "duzina: " + Hst);
        }
        // Izracunavanje najboljeg papira
        if (tipProizvoda === 'Plakat') {
        }
        // Wm = machine.x;
        //Hm = machine.y;
        // for(let paper of papers){
        //   Wp = paper.x;
        //   Hp = paper.y;
        //   Wb = Math.floor(Wm / Wp);
        //   Hb = Math.floor(Hm / Hp);
        // }
    };
    KalkulatorComponent.prototype.loadData = function () {
        var _this = this;
        // priprema stampe
        this.rs.getOne('pripremastampe', 1)
            .subscribe(function (d) {
            _this.pripremaStampe = d;
        });
        // Oprema
        this.rs.getAll('opreme')
            .subscribe(function (d) {
            _this.oprema = d;
        });
        // Izlazni mediji
        this.rs.getAll('izlazni-mediji')
            .subscribe(function (d) {
            _this.izlazniMediji = d;
        });
        this.rs.getAll('rezanje-ulaganja')
            .subscribe(function (d) {
            _this.rezanjeUlaganja = d;
        });
        this.rs.getAll('rezanja')
            .subscribe(function (d) {
            _this.rezanja = d;
        });
        this.rs.getAll('obrezivanja')
            .subscribe(function (d) {
            _this.obrezivanja = d;
        });
        this.rs.getAll('savijanja-priprema')
            .subscribe(function (d) {
            _this.savijanjePripreme = d;
        });
        this.rs.getAll('savijanja-unakrsno')
            .subscribe(function (d) {
            _this.savijanjaUnakrsna = d;
        });
        this.rs.getAll('savijanja-paralelno')
            .subscribe(function (d) {
            _this.savijanjaParalelna = d;
        });
        this.rs.getAll('boje')
            .subscribe(function (d) {
            _this.boje = d;
        });
        this.rs.getAll('pzp')
            .subscribe(function (d) {
            _this.procentiZpovrisine = d;
        });
    };
    KalkulatorComponent.prototype.consoleTitle = function () {
        console.log(this.form.value);
        console.log('-------------------------------------------');
        console.log('                GRIDULATOR                 ');
        console.log('-------------------------------------------');
    };
    KalkulatorComponent.prototype.calculateOfset = function () {
        this.consoleTitle();
        // vreme
        var vreme = 0;
        var vreme_pripremaStampe = 0;
        var vreme_stampe = 0;
        var vreme_zgo = 0;
        // troskovi
        var troskovi = 0;
        var troskovi_pripremaStampe = 0;
        var troskovi_stampe = 0;
        var troskovi_zgo = 0;
        var troskovi_boje = 0;
        var troskovi_papira = 0;
        // rezultati
        var res = this.form.value;
        // trazi se
        // Broj tabaka za stampu
        var brojTabakaZaStampu = 0;
        var brojTabakaZaStampuKorice = 0;
        var tabakNaOkretanjeB = false;
        var brojTabakaNaOkretanje = 0;
        // Broj tabaka osnovnog formata
        var brojTabakaOsnovnogFormata = 0;
        var brojTabakaOsnovnogFormataKorice = 0;
        // Broj boja
        var brojBoja_Plakat = 0;
        var brojBoja_Letak_A = 0;
        var brojBoja_Letak_B = 0;
        var brojBoja_Korice_A = 0;
        var brojBoja_Korice_B = 0;
        var brojBoja_Korice_C = 0;
        var brojBoja_Korice_D = 0;
        var brojBoja_KBlok = 0;
        // makulatura
        var makulatura = 1;
        var makulatura_NaOkretanje = 1;
        var makulatura_Korice = 1;
        // Broj tabaka za stampu
        if (res.tipProizvoda == 'Plakat') {
            brojTabakaZaStampu = (res.tiraz / res.brojProizvodaPoTabakuZaStampu);
            // Provera
            console.log('Broj tabaka za stampu: ' + brojTabakaZaStampu);
        }
        else if (res.tipProizvoda == 'Letak') {
            brojTabakaZaStampu = (res.tiraz / res.brojProizvodaPoTabakuZaStampu);
            // Provera
            console.log('Broj tabaka za stampu: ' + brojTabakaZaStampu);
        }
        else if (res.tipProizvoda == 'Brošura') {
            // I slucaj - korice i knjizni blok na istom papiru
            if (res.masinaZaStampuIstaB) {
                // Provera da li je potreban tabak na okretanje
                var ostatak = res.obimProizvoda % (res.brojProizvodaPoTabakuZaStampu * 2);
                if (ostatak != 0) {
                    tabakNaOkretanjeB = true;
                }
                if (tabakNaOkretanjeB) {
                    brojTabakaZaStampu =
                        (res.tiraz * Math.floor(res.obimProizvoda / (res.brojProizvodaPoTabakuZaStampu * 2)));
                    brojTabakaNaOkretanje = (res.tiraz * 0.5);
                }
                else {
                    brojTabakaZaStampu =
                        (res.tiraz * (res.obimProizvoda / (res.brojProizvodaPoTabakuZaStampu * 2)));
                }
            }
            // II slucaj - korice i knjizni blok na razlicitim papirima ili masinama
            else {
                var ostatak = (res.obimProizvoda - 4) % (res.brojProizvodaPoTabakuZaStampu * 2);
                if (ostatak != 0) {
                    tabakNaOkretanjeB = true;
                }
                if (tabakNaOkretanjeB) {
                    brojTabakaZaStampu =
                        (res.tiraz * Math.floor((res.obimProizvoda - 4) / (res.brojProizvodaPoTabakuZaStampu * 2)));
                    brojTabakaNaOkretanje = (res.tiraz * 0.5);
                }
                else {
                    brojTabakaZaStampu =
                        (res.tiraz * ((res.obimProizvoda - 4) / (res.brojProizvodaPoTabakuZaStampu * 2)));
                }
                brojTabakaZaStampuKorice =
                    (res.tiraz / (res.brojProizvodaPoTabakuZaStampuKorice * 2 / 4));
            }
            // Provera
            console.log('Broj tabaka za stampu: ' + brojTabakaZaStampu);
            console.log('Broj tabaka za stampu korica: ' + brojTabakaZaStampuKorice);
            console.log('Broj tabaka na okretanje: ' + brojTabakaNaOkretanje);
        }
        // Broj boja
        if (res.tipProizvoda == 'Plakat') {
            // I - sadrzi samo tekst
            if (res.ub_sadrzaj_maxTekst) {
                brojBoja_Plakat = 1;
                // II - sadrzi test ali je i pozadina u boji = 2 boje 
                if (res.ub_pozadina) {
                    brojBoja_Plakat = 2;
                    // III - sadrzi tekst ali je pozadina u negaivu = 1 boja
                    if (res.ub_sadrzaj_tekstBeli) {
                        brojBoja_Plakat = 1;
                    }
                }
            }
            // Sadrzi slike - slike su uvek u 4 boje
            else {
                brojBoja_Plakat = 4;
            }
            // Provera
            console.log('Broj boja plakat: ' + brojBoja_Plakat);
        }
        else if (res.tipProizvoda == 'Letak') {
            if (res.ub_povrsina_double) {
                // Strana b
                if (res.ub_sadrzaj_maxTekst_B) {
                    brojBoja_Letak_B = 1;
                    if (res.ub_pozadina_B) {
                        brojBoja_Letak_B = 2;
                        if (res.ub_sadrzaj_tekstBeli_B) {
                            brojBoja_Letak_B = 1;
                        }
                    }
                }
                else {
                    brojBoja_Letak_B = 4;
                }
            }
            // Strana a
            if (res.ub_sadrzaj_maxTekst) {
                brojBoja_Letak_A = 1;
                if (res.ub_pozadina) {
                    brojBoja_Letak_A = 2;
                    if (res.ub_sadrzaj_tekstBeli) {
                        brojBoja_Letak_A = 1;
                    }
                }
            }
            else {
                brojBoja_Letak_A = 4;
            }
            // Provera
            console.log('Broj boja letak A: ' + brojBoja_Letak_A);
            console.log('Broj boja letak A: ' + brojBoja_Letak_B);
        }
        else if (res.tipProizvoda == 'Brošura') {
            if (res.ub_korice_double) {
                // Prednja - unutrasnja -Korice C
                if (res.ub_sadrzaj_maxTekst_korice_C) {
                    brojBoja_Korice_C = 1;
                    if (res.ub_pozadina_korice_C) {
                        brojBoja_Korice_C = 2;
                        if (res.ub_sadrzaj_tekstBeli_korice_C) {
                            brojBoja_Korice_C = 1;
                        }
                    }
                }
                else {
                    brojBoja_Korice_C = 4;
                }
                // Provera
                console.log('Broj boja korice C (prednja - unutrasnja): ' + brojBoja_Korice_C);
                // Zadnja - unutrasnja -Korice D
                if (res.ub_sadrzaj_maxTekst_korice_D) {
                    brojBoja_Korice_D = 1;
                    if (res.ub_pozadina_korice_D) {
                        brojBoja_Korice_D = 2;
                        if (res.ub_sadrzaj_tekstBeli_korice_D) {
                            brojBoja_Korice_D = 1;
                        }
                    }
                }
                else {
                    brojBoja_Korice_D = 4;
                }
                // Provera
                console.log('Broj boja korice D (zadnja - unutrasnja): ' + brojBoja_Korice_D);
            }
            // Prednja - spoljna - Korice A
            if (res.ub_sadrzaj_maxTekst_korice_A) {
                brojBoja_Korice_A = 1;
                if (res.ub_pozadina_korice_A) {
                    brojBoja_Korice_A = 2;
                    if (res.ub_sadrzaj_tekstBeli_korice_A) {
                        brojBoja_Korice_A = 1;
                    }
                }
            }
            else {
                brojBoja_Korice_A = 4;
            }
            // Zadnja - spoljna -Korice B
            if (res.ub_sadrzaj_maxTekst_korice_B) {
                brojBoja_Korice_B = 1;
                if (res.ub_pozadina_korice_B) {
                    brojBoja_Korice_B = 2;
                    if (res.ub_sadrzaj_tekstBeli_korice_B) {
                        brojBoja_Korice_B = 1;
                    }
                }
            }
            else {
                brojBoja_Korice_B = 4;
            }
            // Lakiranje korica
            if (res.ub_pozadina_lakiranje) {
                brojBoja_Korice_A += 1;
                brojBoja_Korice_B += 1;
            }
            // Provera
            console.log('Broj boja korice A (prednja - spoljasna): ' + brojBoja_Korice_A);
            console.log('Broj boja korice B (zadnja - spoljasna): ' + brojBoja_Korice_B);
            // Knjizni blok
            if (res.ub_knjizniBlok_sistem == 'Copy-paste') {
                if (res.ub_sadrzaj_maxTekst_kblok) {
                    brojBoja_KBlok = 1;
                    if (res.ub_pozadina_kblok) {
                        brojBoja_KBlok = 2;
                        if (res.ub_sadrzaj_tekstBeli_kblok) {
                            brojBoja_KBlok = 1;
                        }
                    }
                }
                else {
                    brojBoja_KBlok = 4;
                }
            }
            else if (res.ub_knjizniBlok_sistem == 'Par-nepar') {
                var brojBoja_KBlok_A = void 0;
                var brojBoja_KBlok_B = void 0;
                if (res.ub_sadrzaj_maxTekst_kblok_A) {
                    brojBoja_KBlok_A = 1;
                    if (res.ub_pozadina_kblok_A) {
                        brojBoja_KBlok_A = 2;
                        if (res.ub_sadrzaj_tekstBeli_kblok_A) {
                            brojBoja_KBlok_A = 1;
                        }
                    }
                }
                else {
                    brojBoja_KBlok_A = 4;
                }
                if (res.ub_sadrzaj_maxTekst_kblok_B) {
                    brojBoja_KBlok_B = 1;
                    if (res.ub_pozadina_kblok_B) {
                        brojBoja_KBlok_B = 2;
                        if (res.ub_sadrzaj_tekstBeli_kblok_B) {
                            brojBoja_KBlok_B = 1;
                        }
                    }
                }
                else {
                    brojBoja_KBlok_B = 4;
                }
                if (brojBoja_KBlok_A >= brojBoja_KBlok_B) {
                    brojBoja_KBlok = brojBoja_KBlok_A;
                }
                else {
                    brojBoja_KBlok = brojBoja_KBlok_B;
                }
                // Provera da li je stampa samo u jednoj boji
                if (brojBoja_KBlok_A == 1 && brojBoja_KBlok_B == 1) {
                    if (res.ub_sadrzaj_maxTekst_kblok_A) {
                        if (res.ub_sadrzaj_maxTekst_kblok_B) {
                            if (res.ub_pozadina_kblok_A && res.ub_pozadina_kblok_B) {
                                if (res.ub_pozadinaBoja_kblok_A.id == res.ub_pozadinaBoja_kblok_B.id) {
                                    if (res.ub_sadrzaj_tekstBeli_kblok_B && res.ub_sadrzaj_tekstBeli_kblok_B) {
                                        brojBoja_KBlok = 1;
                                    }
                                    else {
                                        brojBoja_KBlok = 2;
                                    }
                                }
                            }
                            else {
                                if (res.ub_sadrzaj_bojaTeksta_kblok_A.id == res.ub_sadrzaj_bojaTeksta_kblok_B.id) {
                                    brojBoja_KBlok = 1;
                                }
                                else {
                                    brojBoja_KBlok = 2;
                                }
                            }
                        }
                    }
                }
            }
            else if (res.ub_knjizniBlok_sistem == 'Ukupno') {
                if (res.ub_sadrzaj_brSlika_kblok == 0) {
                    brojBoja_KBlok = 1;
                }
                else {
                    brojBoja_KBlok = 4;
                }
            }
            // Provera
            console.log('Broj boja knjizni blok: ' + brojBoja_KBlok);
        }
        // Makulatura
        if (res.tipProizvoda == 'Plakat') {
            if (res.masinaZaStampu.brojBoja == 1) {
                if (brojBoja_Plakat == 1) {
                    makulatura += 0.02;
                }
                else if (brojBoja_Plakat == 2) {
                    makulatura += 0.04;
                }
                else if (brojBoja_Plakat == 4) {
                    makulatura += 0.08;
                }
            }
            else if (res.masinaZaStampu.brojBoja == 2) {
                if (brojBoja_Plakat == 1) {
                    makulatura += 0.02;
                }
                else if (brojBoja_Plakat == 2) {
                    makulatura += 0.03;
                }
                else if (brojBoja_Plakat == 4) {
                    makulatura += 0.06;
                }
            }
            else if (res.masinaZaStampu.brojBoja == 4) {
                if (brojBoja_Plakat == 1) {
                    makulatura += 0.02;
                }
                else if (brojBoja_Plakat == 2) {
                    makulatura += 0.03;
                }
                else if (brojBoja_Plakat == 4) {
                    makulatura += 0.04;
                }
            }
            // Provera
            console.log('Makulatura: ' + makulatura);
        }
        else if (res.tipProizvoda == 'Letak') {
            if (res.ub_povrsina_double) {
                if (res.masinaZaStampu.brojBoja == 1) {
                    if (brojBoja_Letak_B == 1) {
                        makulatura += 0.02;
                    }
                    else if (brojBoja_Letak_B == 2) {
                        makulatura += 0.04;
                    }
                    else if (brojBoja_Letak_B == 4) {
                        makulatura += 0.08;
                    }
                }
                else if (res.masinaZaStampu.brojBoja == 2) {
                    if (brojBoja_Letak_B == 1) {
                        makulatura += 0.02;
                    }
                    else if (brojBoja_Letak_B == 2) {
                        makulatura += 0.03;
                    }
                    else if (brojBoja_Letak_B == 4) {
                        makulatura += 0.06;
                    }
                }
                else if (res.masinaZaStampu.brojBoja == 4) {
                    if (brojBoja_Letak_B == 1) {
                        makulatura += 0.02;
                    }
                    else if (brojBoja_Letak_B == 2) {
                        makulatura += 0.03;
                    }
                    else if (brojBoja_Letak_B == 4) {
                        makulatura += 0.04;
                    }
                }
            }
            if (res.masinaZaStampu.brojBoja == 1) {
                if (brojBoja_Letak_A == 1) {
                    makulatura += 0.02;
                }
                else if (brojBoja_Letak_A == 2) {
                    makulatura += 0.04;
                }
                else if (brojBoja_Letak_A == 4) {
                    makulatura += 0.08;
                }
            }
            else if (res.masinaZaStampu.brojBoja == 2) {
                if (brojBoja_Letak_A == 1) {
                    makulatura += 0.02;
                }
                else if (brojBoja_Letak_A == 2) {
                    makulatura += 0.03;
                }
                else if (brojBoja_Letak_A == 4) {
                    makulatura += 0.06;
                }
            }
            else if (res.masinaZaStampu.brojBoja == 4) {
                if (brojBoja_Letak_A == 1) {
                    makulatura += 0.02;
                }
                else if (brojBoja_Letak_A == 2) {
                    makulatura += 0.03;
                }
                else if (brojBoja_Letak_A == 4) {
                    makulatura += 0.04;
                }
            }
            // Provera
            console.log('Makulatura: ' + makulatura);
        }
        else if (res.tipProizvoda == 'Brošura') {
            if (res.masinaZaStampuIstaB) {
                var brojBojaBrosura = 0;
                var brojBojaKorice = 0;
                for (var _i = 0, _a = [brojBoja_Korice_A, brojBoja_Korice_B,
                    brojBoja_Korice_C, brojBoja_Korice_D]; _i < _a.length; _i++) {
                    var b = _a[_i];
                    if (b > brojBojaKorice) {
                        brojBojaKorice = b;
                    }
                }
                if (brojBoja_KBlok >= brojBojaKorice) {
                    brojBojaBrosura = brojBoja_KBlok;
                }
                else {
                    brojBojaBrosura = brojBojaKorice;
                }
                // makulatura za sve
                if (res.masinaZaStampu.brojBoja == 1) {
                    if (brojBojaBrosura == 1) {
                        makulatura += 0.04;
                    }
                    else if (brojBojaBrosura == 2) {
                        makulatura += 0.08;
                    }
                    else if (brojBojaBrosura >= 4) {
                        makulatura += 0.16;
                    }
                }
                if (res.masinaZaStampu.brojBoja == 2) {
                    if (brojBojaBrosura == 1) {
                        makulatura += 0.04;
                    }
                    else if (brojBojaBrosura == 2) {
                        makulatura += 0.06;
                    }
                    else if (brojBojaBrosura >= 4) {
                        makulatura += 0.12;
                    }
                }
                if (res.masinaZaStampu.brojBoja == 4) {
                    if (brojBojaBrosura == 1) {
                        makulatura += 0.04;
                    }
                    else if (brojBojaBrosura == 2) {
                        makulatura += 0.06;
                    }
                    else if (brojBojaBrosura >= 4) {
                        makulatura += 0.08;
                    }
                }
                // makulatura tabak na okretanje
                if (tabakNaOkretanjeB) {
                    makulatura_NaOkretanje = makulatura / 2;
                }
            }
            else {
                // Korice
                // Unutrasnje korice
                if (!res.ub_korice_double) {
                    var brojBojaKorice_Unutrasnje = void 0;
                    if (brojBoja_Korice_C >= brojBoja_Korice_D) {
                        brojBojaKorice_Unutrasnje = brojBoja_Korice_C;
                    }
                    else {
                        brojBojaKorice_Unutrasnje = brojBoja_Korice_D;
                    }
                    if (res.masinaZaStampuKorica.brojBoja == 1) {
                        if (brojBojaKorice_Unutrasnje == 1) {
                            makulatura_Korice += 0.02;
                        }
                        else if (brojBojaKorice_Unutrasnje == 2) {
                            makulatura_Korice += 0.04;
                        }
                        else if (brojBojaKorice_Unutrasnje == 4) {
                            makulatura_Korice += 0.08;
                        }
                    }
                    else if (res.masinaZaStampuKorica.brojBoja == 2) {
                        if (brojBojaKorice_Unutrasnje == 1) {
                            makulatura_Korice += 0.02;
                        }
                        else if (brojBojaKorice_Unutrasnje == 2) {
                            makulatura_Korice += 0.03;
                        }
                        else if (brojBojaKorice_Unutrasnje == 4) {
                            makulatura_Korice += 0.06;
                        }
                    }
                    else if (res.masinaZaStampuKorica.brojBoja == 4) {
                        if (brojBojaKorice_Unutrasnje == 1) {
                            makulatura_Korice += 0.02;
                        }
                        else if (brojBojaKorice_Unutrasnje == 2) {
                            makulatura_Korice += 0.03;
                        }
                        else if (brojBojaKorice_Unutrasnje == 4) {
                            makulatura_Korice += 0.04;
                        }
                    }
                }
                // Spoljasne
                var brojBojaKorice_Spoljasne = void 0;
                if (brojBoja_Korice_A >= brojBoja_Korice_B) {
                    brojBojaKorice_Spoljasne = brojBoja_Korice_A;
                }
                else {
                    brojBojaKorice_Spoljasne = brojBoja_Korice_B;
                }
                if (res.masinaZaStampuKorica.brojBoja == 1) {
                    if (brojBojaKorice_Spoljasne == 1) {
                        makulatura_Korice += 0.02;
                    }
                    else if (brojBojaKorice_Spoljasne == 2) {
                        makulatura_Korice += 0.04;
                    }
                    else if (brojBojaKorice_Spoljasne == 4) {
                        makulatura_Korice += 0.06;
                    }
                    else if (brojBojaKorice_Spoljasne == 5) {
                        makulatura_Korice += 0.08;
                    }
                }
                else if (res.masinaZaStampuKorica.brojBoja == 2) {
                    if (brojBojaKorice_Spoljasne == 1) {
                        makulatura_Korice += 0.02;
                    }
                    else if (brojBojaKorice_Spoljasne == 2) {
                        makulatura_Korice += 0.03;
                    }
                    else if (brojBojaKorice_Spoljasne == 4) {
                        makulatura_Korice += 0.06;
                    }
                    else if (brojBojaKorice_Spoljasne == 5) {
                        makulatura_Korice += 0.075;
                    }
                }
                else if (res.masinaZaStampuKorica.brojBoja == 4) {
                    if (brojBojaKorice_Spoljasne == 1) {
                        makulatura_Korice += 0.02;
                    }
                    else if (brojBojaKorice_Spoljasne == 2) {
                        makulatura_Korice += 0.03;
                    }
                    else if (brojBojaKorice_Spoljasne == 4) {
                        makulatura_Korice += 0.04;
                    }
                    else if (brojBojaKorice_Spoljasne == 5) {
                        makulatura_Korice += 0.05;
                    }
                }
                // Knjizni blok
                if (res.masinaZaStampu.brojBoja == 1) {
                    if (brojBoja_KBlok == 1) {
                        makulatura += 0.04;
                    }
                    else if (brojBoja_KBlok == 2) {
                        makulatura += 0.08;
                    }
                    else if (brojBoja_KBlok >= 4) {
                        makulatura += 0.16;
                    }
                }
                if (res.masinaZaStampu.brojBoja == 2) {
                    if (brojBoja_KBlok == 1) {
                        makulatura += 0.04;
                    }
                    else if (brojBoja_KBlok == 2) {
                        makulatura += 0.06;
                    }
                    else if (brojBoja_KBlok >= 4) {
                        makulatura += 0.12;
                    }
                }
                if (res.masinaZaStampu.brojBoja == 4) {
                    if (brojBoja_KBlok == 1) {
                        makulatura += 0.04;
                    }
                    else if (brojBoja_KBlok == 2) {
                        makulatura += 0.06;
                    }
                    else if (brojBoja_KBlok >= 4) {
                        makulatura += 0.08;
                    }
                }
                // makulatura tabak na okretanje
                if (tabakNaOkretanjeB) {
                    makulatura_NaOkretanje = 1 + ((makulatura - 1) / 2);
                }
            }
            // Provera
            console.log('Makulatura: ' + makulatura);
            console.log('Makulatura korice: ' + makulatura_Korice);
            console.log('Makulatura na okretanje: ' + makulatura_NaOkretanje);
        }
        // Broj tabaka za stampu + makulatura
        brojTabakaZaStampu = brojTabakaZaStampu * makulatura;
        brojTabakaZaStampuKorice = brojTabakaZaStampuKorice * makulatura_Korice;
        brojTabakaNaOkretanje = brojTabakaNaOkretanje * makulatura_NaOkretanje;
        // Provera
        console.log('Broj tabaka za stampu: ' + brojTabakaZaStampu);
        console.log('Broj tabaka za stampu korica: ' + brojTabakaZaStampuKorice);
        console.log('Broj tabaka na okretanje: ' + brojTabakaNaOkretanje);
        // Broj tabaka osnovnog formata
        if (res.tipProizvoda == 'Plakat') {
            brojTabakaOsnovnogFormata =
                brojTabakaZaStampu / res.brojTabakaZaStampuPoOsnovnomTabaku;
            // Provera
            console.log('Broj tabaka osnovnog formata:' + brojTabakaOsnovnogFormata);
        }
        else if (res.tipProizvoda == 'Letak') {
            brojTabakaOsnovnogFormata =
                brojTabakaZaStampu / res.brojTabakaZaStampuPoOsnovnomTabaku;
            // Provera
            console.log('Broj tabaka osnovnog formata:' + brojTabakaOsnovnogFormata);
        }
        else if (res.tipProizvoda == 'Brošura') {
            brojTabakaOsnovnogFormata =
                brojTabakaZaStampu / res.brojTabakaZaStampuPoOsnovnomTabaku;
            if (tabakNaOkretanjeB) {
                brojTabakaOsnovnogFormata = brojTabakaOsnovnogFormata +
                    brojTabakaNaOkretanje / res.brojTabakaZaStampuPoOsnovnomTabaku;
            }
            if (!res.papirZaStampuKoricaB) {
                brojTabakaOsnovnogFormataKorice =
                    brojTabakaZaStampuKorice / res.brojTabakaZaStampuPoOsnovnomTabakuKorice;
            }
            else {
                brojTabakaOsnovnogFormata = brojTabakaOsnovnogFormata +
                    brojTabakaZaStampuKorice / res.brojTabakaZaStampuPoOsnovnomTabaku;
            }
            // Provera
            console.log('Broj tabaka osnovnog formata:' + brojTabakaOsnovnogFormata);
            console.log('Broj tabaka osnovnog formata (korice):' + brojTabakaOsnovnogFormataKorice);
        }
        // Cena papira
        // **** PRIPREMA STAMPE ****
        var vreme_pripremaStampe_osnovno = 0;
        var vreme_pripremaStampe_prenosPodataka = 0;
        var vreme_pripremaStampe_kreiraneTeksta = 0;
        var vreme_pripremaStampe_kreiranjeSlika = 0;
        var vreme_pripremaStampe_prelom = 0;
        var vreme_pripremeStampe_montaza = 0;
        var vreme_pripremeStampe_obradaSlika = 0;
        var vreme_pripremeStampe_DTP = 0;
        // Preuzimanje posla i pripremne operacije
        // Pregled
        if (res.ps_pregledPosla) {
            vreme_pripremaStampe_osnovno += this.pripremaStampe.pp_pregledPosla;
        }
        // Upoznavanje sa radnim zadatkom
        if (res.ps_upoznavanjePosla) {
            vreme_pripremaStampe_osnovno += this.pripremaStampe.pp_upoznavanjePosla;
        }
        // Arhiviranje podataka
        if (res.ps_arhiviranjePodataka) {
            vreme_pripremaStampe_osnovno += this.pripremaStampe.pp_arhiviranjePodataka;
        }
        // Rukovanje i prenos informacija / teksta
        if (res.ps_prenosPodatakaB) {
            vreme_pripremaStampe_prenosPodataka =
                (res.ps_prenosPodatakaDo10mb * this.pripremaStampe.pp_prenosPodataka_do10mb) +
                    (res.ps_prenosPodatakaPreko10mb * this.pripremaStampe.pp_prenosPodataka_preko10mb);
        }
        // Obrada teksta
        if (res.ps_obradaTekstaB) {
            if (res.ps_jednostavanRukopisB) {
                vreme_pripremaStampe_kreiraneTeksta +=
                    (res.ps_jednostavanRukopis * this.pripremaStampe.ot_jednostavanRukopis_u / 1000) +
                        (res.ps_jednostavanRukopis * this.pripremaStampe.ot_jednostavanRukopis_o / 1000);
            }
            if (res.ps_slozenRukopisB) {
                vreme_pripremaStampe_kreiraneTeksta +=
                    (res.ps_slozenRukopis * this.pripremaStampe.ot_slozenRukopis_u / 1000) +
                        (res.ps_slozenRukopis * this.pripremaStampe.ot_slozenRukopis_o / 1000);
            }
            if (res.ps_tehnickiTekstB) {
                vreme_pripremaStampe_kreiraneTeksta +=
                    (res.ps_tehnickiTekst * this.pripremaStampe.ot_tehnickiTekst_u / 1000) +
                        (res.ps_tehnickiTekst * this.pripremaStampe.ot_tehnickiTekst_o / 1000);
            }
            if (res.ps_straniTekstB) {
                vreme_pripremaStampe_kreiraneTeksta +=
                    (res.ps_straniTekst * this.pripremaStampe.ot_straniTekst_u / 1000) +
                        (res.ps_straniTekst * this.pripremaStampe.ot_straniTekst_o / 1000);
            }
            if (res.ps_asciiTekstB) {
                vreme_pripremaStampe_kreiraneTeksta +=
                    (res.ps_straniTekst * this.pripremaStampe.ot_unosTeksta_u / 1000) +
                        (res.ps_straniTekst * this.pripremaStampe.ot_unosTeksta_o / 1000);
            }
        }
        // Kreiranje slika
        if (res.ps_kreiranjeSlikaB) {
            if (res.ps_ilustracijeB) {
                // jednostavne
                if (res.ps_ilustracije_j >= 1) {
                    vreme_pripremaStampe_kreiranjeSlika += this.pripremaStampe.ks_ilustracije_j;
                }
                if (res.ps_ilustracije_j > 1) {
                    vreme_pripremaStampe_kreiranjeSlika +=
                        (res.ps_ilustracije_j - 1) * this.pripremaStampe.ks_ilustracije_j * 0.7;
                }
                // prosecne
                if (res.ps_ilustracije_p >= 1) {
                    vreme_pripremaStampe_kreiranjeSlika += this.pripremaStampe.ks_ilustracije_p;
                }
                if (res.ps_ilustracije_p > 1) {
                    vreme_pripremaStampe_kreiranjeSlika +=
                        (res.ps_ilustracije_p - 1) * this.pripremaStampe.ks_ilustracije_p * 0.7;
                }
                // slozene
                if (res.ps_ilustracije_s >= 1) {
                    vreme_pripremaStampe_kreiranjeSlika += this.pripremaStampe.ks_ilustracije_s;
                }
                if (res.ps_ilustracije_s > 1) {
                    vreme_pripremaStampe_kreiranjeSlika +=
                        (res.ps_ilustracije_s - 1) * this.pripremaStampe.ks_ilustracije_p * 0.7;
                }
            }
            if (res.ps_slikanjeB) {
                // jednostavne
                if (res.ps_slikanje_j >= 1) {
                    vreme_pripremaStampe_kreiranjeSlika += this.pripremaStampe.ks_slikanje_j;
                }
                if (res.ps_slikanje_j > 1) {
                    vreme_pripremaStampe_kreiranjeSlika +=
                        (res.ps_slikanje_j - 1) * this.pripremaStampe.ks_slikanje_j * 0.7;
                }
                // prosecne
                if (res.ps_slikanje_p >= 1) {
                    vreme_pripremaStampe_kreiranjeSlika += this.pripremaStampe.ks_slikanje_p;
                }
                if (res.ps_slikanje_p > 1) {
                    vreme_pripremaStampe_kreiranjeSlika +=
                        (res.ps_slikanje_p - 1) * this.pripremaStampe.ks_slikanje_p * 0.7;
                }
                // slozene
                if (res.ps_slikanje_s >= 1) {
                    vreme_pripremaStampe_kreiranjeSlika += this.pripremaStampe.ks_slikanje_s;
                }
                if (res.ps_slikanje_s > 1) {
                    vreme_pripremaStampe_kreiranjeSlika +=
                        (res.ps_slikanje_s - 1) * this.pripremaStampe.ks_slikanje_s * 0.7;
                }
            }
            if (res.ps_skeniranjeLinijskiB) {
                // jednostavne
                if (res.ps_skeniranjeLinijski_j >= 1) {
                    vreme_pripremaStampe_kreiranjeSlika += this.pripremaStampe.ks_skeniranjeLinijski_j;
                }
                if (res.ps_skeniranjeLinijski_j > 1) {
                    vreme_pripremaStampe_kreiranjeSlika +=
                        (res.ps_skeniranjeLinijski_j - 1) * this.pripremaStampe.ks_skeniranjeLinijski_j * 0.7;
                }
                // prosecne
                if (res.ps_skeniranjeLinijski_p >= 1) {
                    vreme_pripremaStampe_kreiranjeSlika += this.pripremaStampe.ks_skeniranjeLinijski_p;
                }
                if (res.ps_skeniranjeLinijski_p > 1) {
                    vreme_pripremaStampe_kreiranjeSlika +=
                        (res.ps_skeniranjeLinijski_p - 1) * this.pripremaStampe.ks_skeniranjeLinijski_p * 0.7;
                }
                // slozene
                if (res.ps_skeniranjeLinijski_s >= 1) {
                    vreme_pripremaStampe_kreiranjeSlika += this.pripremaStampe.ks_skeniranjeLinijski_s;
                }
                if (res.ps_skeniranjeLinijski_s > 1) {
                    vreme_pripremaStampe_kreiranjeSlika +=
                        (res.ps_skeniranjeLinijski_s - 1) * this.pripremaStampe.ks_skeniranjeLinijski_s * 0.7;
                }
            }
            if (res.ps_skeniranjeRasterB) {
                // jednostavne
                if (res.ps_skeniranjeRaster_j >= 1) {
                    vreme_pripremaStampe_kreiranjeSlika += this.pripremaStampe.ks_skeniranjeRaster_j;
                }
                if (res.ps_skeniranjeRaster_j > 1) {
                    vreme_pripremaStampe_kreiranjeSlika +=
                        (res.ps_skeniranjeRaster_j - 1) * this.pripremaStampe.ks_skeniranjeRaster_j * 0.7;
                }
                // prosecne
                if (res.ps_skeniranjeRaster_p >= 1) {
                    vreme_pripremaStampe_kreiranjeSlika += this.pripremaStampe.ks_skeniranjeRaster_p;
                }
                if (res.ps_skeniranjeRaster_p > 1) {
                    vreme_pripremaStampe_kreiranjeSlika +=
                        (res.ps_skeniranjeRaster_p - 1) * this.pripremaStampe.ks_skeniranjeRaster_p * 0.7;
                }
                // slozene
                if (res.ps_skeniranjeRaster_s >= 1) {
                    vreme_pripremaStampe_kreiranjeSlika += this.pripremaStampe.ks_skeniranjeRaster_s;
                }
                if (res.ps_skeniranjeRaster_s > 1) {
                    vreme_pripremaStampe_kreiranjeSlika +=
                        (res.ps_skeniranjeRaster_s - 1) * this.pripremaStampe.ks_skeniranjeRaster_s * 0.7;
                }
            }
            if (res.ps_skeniranjeRgbB) {
                // jednostavne
                if (res.ps_skeniranjeRgb_j >= 1) {
                    vreme_pripremaStampe_kreiranjeSlika += this.pripremaStampe.ks_skeniranjeRGB_j;
                }
                if (res.ps_skeniranjeRgb_j > 1) {
                    vreme_pripremaStampe_kreiranjeSlika +=
                        (res.ps_skeniranjeRgb_j - 1) * this.pripremaStampe.ks_skeniranjeRGB_j * 0.7;
                }
                // prosecne
                if (res.ps_skeniranjeRgb_p >= 1) {
                    vreme_pripremaStampe_kreiranjeSlika += this.pripremaStampe.ks_skeniranjeRGB_p;
                }
                if (res.ps_skeniranjeRgb_p > 1) {
                    vreme_pripremaStampe_kreiranjeSlika +=
                        (res.ps_skeniranjeRgb_p - 1) * this.pripremaStampe.ks_skeniranjeRGB_p * 0.7;
                }
                // slozene
                if (res.ps_skeniranjeRgb_s >= 1) {
                    vreme_pripremaStampe_kreiranjeSlika += this.pripremaStampe.ks_skeniranjeRGB_s;
                }
                if (res.ps_skeniranjeRgb_s > 1) {
                    vreme_pripremaStampe_kreiranjeSlika +=
                        (res.ps_skeniranjeRgb_s - 1) * this.pripremaStampe.ks_skeniranjeRGB_s * 0.7;
                }
            }
        }
        // Prelom, montaza, dodatna obrada slika
        // Prelom
        if (res.tipProizvoda == 'Plakat') {
            if (res.ps_prelomStranice == "Jednostavan") {
                vreme_pripremaStampe_prelom = this.pripremaStampe.fm_prelopStranice_j;
            }
            else if (res.ps_prelomStranice == "Prosečan") {
                vreme_pripremaStampe_prelom = this.pripremaStampe.fm_prelopStranice_p;
            }
            else if (res.ps_prelomStranice == "Složen") {
                vreme_pripremaStampe_prelom = this.pripremaStampe.fm_prelopStranice_s;
            }
        }
        else if (res.tipProizvoda == 'Letak') {
            if (res.ub_povrsina_double) {
                if (res.ps_prelomStranice == "Jednostavan") {
                    vreme_pripremaStampe_prelom = this.pripremaStampe.fm_prelopStranice_j * 1.7;
                }
                else if (res.ps_prelomStranice == "Prosečan") {
                    vreme_pripremaStampe_prelom = this.pripremaStampe.fm_prelopStranice_p * 1.7;
                }
                else if (res.ps_prelomStranice == "Složen") {
                    vreme_pripremaStampe_prelom = this.pripremaStampe.fm_prelopStranice_s * 1.7;
                }
            }
            else {
                if (res.ps_prelomStranice == "Jednostavan") {
                    vreme_pripremaStampe_prelom = this.pripremaStampe.fm_prelopStranice_j;
                }
                else if (res.ps_prelomStranice == "Prosečan") {
                    vreme_pripremaStampe_prelom = this.pripremaStampe.fm_prelopStranice_p;
                }
                else if (res.ps_prelomStranice == "Složen") {
                    vreme_pripremaStampe_prelom = this.pripremaStampe.fm_prelopStranice_s;
                }
            }
        }
        else if (res.tipProizvoda == 'Brošura') {
            if (res.ps_prelomStranice == "Jednostavan") {
                vreme_pripremaStampe_prelom =
                    this.pripremaStampe.fm_prelopStranice_j +
                        ((res.obimProizvoda - 1)) * this.pripremaStampe.fm_prelopStranice_j * 0.7;
            }
            else if (res.ps_prelomStranice == "Prosečan") {
                vreme_pripremaStampe_prelom =
                    this.pripremaStampe.fm_prelopStranice_p +
                        ((res.obimProizvoda - 1)) * this.pripremaStampe.fm_prelopStranice_p * 0.7;
            }
            else if (res.ps_prelomStranice == "Složen") {
                vreme_pripremaStampe_prelom =
                    this.pripremaStampe.fm_prelopStranice_s +
                        ((res.obimProizvoda - 1)) * this.pripremaStampe.fm_prelopStranice_s * 0.7;
            }
        }
        // Montaza
        if (res.tipProizvoda == 'Plakat') {
            if (res.ps_montaza == 'Jednostavan') {
                vreme_pripremeStampe_montaza = this.pripremaStampe.fm_montaza_j;
            }
            else if (res.ps_montaza == 'Prosečan') {
                vreme_pripremeStampe_montaza = this.pripremaStampe.fm_montaza_p;
            }
            else if (res.ps_montaza == 'Složen') {
                vreme_pripremeStampe_montaza = this.pripremaStampe.fm_montaza_s;
            }
        }
        else if (res.tipProizvoda == 'Letak') {
            if (res.ub_povrsina_double) {
                if (res.ps_montaza == "Jednostavan") {
                    vreme_pripremeStampe_montaza = this.pripremaStampe.fm_montaza_j * 1.7;
                }
                else if (res.ps_montaza == "Prosečan") {
                    vreme_pripremeStampe_montaza = this.pripremaStampe.fm_montaza_p * 1.7;
                }
                else if (res.ps_montaza == "Složen") {
                    vreme_pripremeStampe_montaza = this.pripremaStampe.fm_montaza_s * 1.7;
                }
            }
            else {
                if (res.ps_montaza == "Jednostavan") {
                    vreme_pripremeStampe_montaza = this.pripremaStampe.fm_montaza_j;
                }
                else if (res.ps_montaza == "Prosečan") {
                    vreme_pripremeStampe_montaza = this.pripremaStampe.fm_montaza_p;
                }
                else if (res.ps_montaza == "Složen") {
                    vreme_pripremeStampe_montaza = this.pripremaStampe.fm_montaza_s;
                }
            }
        }
        else if (res.tipProizvoda == 'Brošura') {
            var m = 0;
            var m_korice = 0;
            // I slucaj - korice i knjizni blok na istom papiru
            if (res.masinaZaStampuIstaB) {
                // Provera da li je potreban tabak na okretanje
                var ostatak = res.obimProizvoda % (res.brojProizvodaPoTabakuZaStampu * 2);
                if (ostatak != 0) {
                    tabakNaOkretanjeB = true;
                }
                if (tabakNaOkretanjeB) {
                    m = Math.floor(res.obimProizvoda / (res.brojProizvodaPoTabakuZaStampu * 2));
                    m = m * 2;
                    m += 1;
                }
                else {
                    m = Math.floor(res.obimProizvoda / (res.brojProizvodaPoTabakuZaStampu * 2));
                    m = m * 2;
                }
            }
            // II slucaj - korice i knjizni blok na razlicitim papirima ili masinama
            else {
                var ostatak = (res.obimProizvoda - 4) % (res.brojProizvodaPoTabakuZaStampu * 2);
                if (ostatak != 0) {
                    tabakNaOkretanjeB = true;
                }
                if (tabakNaOkretanjeB) {
                    m = Math.floor(res.obimProizvoda / (res.brojProizvodaPoTabakuZaStampu * 2));
                    m = m * 2;
                    m += 1;
                }
                else {
                    m = Math.floor(res.obimProizvoda / (res.brojProizvodaPoTabakuZaStampu * 2));
                    m = m * 2;
                }
                if (!res.ub_korice_double) {
                    m_korice = 2;
                }
                else {
                    m_korice = 1;
                }
            }
            // provera
            console.log('Broj montaza knjiznji blok:' + m);
            console.log('Broj montaza korice: ' + m_korice);
            if (res.ps_montaza == 'Jednostavan') {
                vreme_pripremeStampe_montaza =
                    (1 * this.pripremaStampe.fm_montaza_j) +
                        ((m - 1) * this.pripremaStampe.fm_montaza_j * 0.7);
                // Dodatna montraza za korice
                if (m_korice != 0) {
                    vreme_pripremeStampe_montaza +=
                        (1 * this.pripremaStampe.fm_montaza_j) +
                            ((m_korice - 1) * this.pripremaStampe.fm_montaza_j * 0.7);
                }
            }
            else if (res.ps_montaza == 'Prosečan') {
                vreme_pripremeStampe_montaza =
                    (1 * this.pripremaStampe.fm_montaza_p) +
                        ((m - 1) * this.pripremaStampe.fm_montaza_p * 0.7);
                if (m_korice != 0) {
                    // Dodatna montraza za korice
                    vreme_pripremeStampe_montaza +=
                        (1 * this.pripremaStampe.fm_montaza_p) +
                            ((m_korice - 1) * this.pripremaStampe.fm_montaza_p * 0.7);
                }
            }
            else if (res.ps_montaza == 'Složen') {
                vreme_pripremeStampe_montaza =
                    (1 * this.pripremaStampe.fm_montaza_s) +
                        ((m - 1) * this.pripremaStampe.fm_montaza_s * 0.7);
                // Dodatna montraza za korice
                if (m_korice != 0) {
                    vreme_pripremeStampe_montaza +=
                        (1 * this.pripremaStampe.fm_montaza_s) +
                            ((m_korice - 1) * this.pripremaStampe.fm_montaza_s * 0.7);
                }
            }
        }
        // Dodatna obrada slika
        if (res.ps_dodatnaObradaSlikaU != 0) {
            if (res.ps_dodatnaObradaSlika == "Jednostavan") {
                vreme_pripremeStampe_obradaSlika =
                    res.ps_dodatnaObradaSlikaU * this.pripremaStampe.dos_dodatnaObradaSLika_j;
            }
            else if (res.ps_dodatnaObradaSlika == "Prosečan") {
                vreme_pripremeStampe_obradaSlika =
                    res.ps_dodatnaObradaSlikaU * this.pripremaStampe.dos_dodatnaObradaSLika_p;
            }
            else if (res.ps_dodatnaObradaSlika == "Složen") {
                vreme_pripremeStampe_obradaSlika =
                    res.ps_dodatnaObradaSlikaU * this.pripremaStampe.dos_dodatnaObradaSLika_s;
            }
        }
        // Troskovi izrade izlaznih medija i materila izlaznih medija
        var troskoviIzradeIzlaznihMedija = 0;
        var troskoviMaterilaIzlaznihMedija = 0;
        // Odredjivanje izlaznogMedija i opreme
        var izlazniMed;
        var opremaMed;
        for (var _b = 0, _c = this.izlazniMediji; _b < _c.length; _b++) {
            var i = _c[_b];
            if (res.ps_izlazniMedijiTip == i.tip) {
                izlazniMed = i;
            }
        }
        for (var _d = 0, _e = this.oprema; _d < _e.length; _d++) {
            var o = _e[_d];
            if (res.ps_izlazniMedijiTip == o.tip) {
                opremaMed = o;
            }
        }
        // Odredjivanje faktora i cena
        var cenaOpreme = opremaMed.cena;
        var cenaMaterijala = izlazniMed.trkoskoviMaterijala;
        var faktor;
        if (res.ps_izlazniMedijiSlozenost == 'Jednostavan') {
            faktor = izlazniMed.j;
        }
        else if (res.ps_izlazniMedijiSlozenost == 'Prosečan') {
            faktor = izlazniMed.p;
        }
        else if (res.ps_izlazniMedijiSlozenost == 'Složen') {
            faktor = izlazniMed.s;
        }
        // izrada i matrilaj izlaznih medija
        if (res.ps_izlazniMedijiTip == 'Laserski otisak') {
            if (res.tipProizvoda == 'Plakat') {
                // Izrada
                troskoviIzradeIzlaznihMedija +=
                    (1 * faktor * cenaOpreme);
                // Materijal
                troskoviMaterilaIzlaznihMedija +=
                    (1 * (res.sirinaProizvoda * res.duzinaProizvoda)
                        / 1000 * cenaMaterijala);
            }
            else if (res.tipProizvoda == 'Letak') {
                if (res.ub_povrsina_double) {
                    // Izrada
                    troskoviIzradeIzlaznihMedija +=
                        (1 * faktor * cenaOpreme);
                    // Materijal
                    troskoviMaterilaIzlaznihMedija +=
                        (1 * (res.sirinaProizvoda * res.duzinaProizvoda)
                            / 1000 * cenaMaterijala);
                }
                // Izrada
                troskoviIzradeIzlaznihMedija +=
                    (1 * faktor * cenaOpreme);
                // Materijal
                troskoviMaterilaIzlaznihMedija +=
                    (1 * (res.sirinaProizvoda * res.duzinaProizvoda)
                        / 1000 * cenaMaterijala);
            }
            else if (res.tipProizvoda == 'Brošura') {
                // Izrada
                troskoviIzradeIzlaznihMedija +=
                    (res.obimProizvoda * faktor * cenaOpreme);
                // Materijal
                troskoviMaterilaIzlaznihMedija +=
                    (res.obimProizvoda * (res.sirinaProizvoda * res.duzinaProizvoda)
                        / 1000 * cenaMaterijala);
            }
        }
        else if (res.ps_izlazniMedijiTip == 'Digitalni probni otisak') {
            if (res.tipProizvoda == 'Plakat') {
                // Izrada
                troskoviIzradeIzlaznihMedija +=
                    (1 * faktor * cenaOpreme);
                // Materijal
                troskoviMaterilaIzlaznihMedija +=
                    (1 * (res.sirinaProizvoda * res.duzinaProizvoda)
                        / 1000 * cenaMaterijala);
            }
            else if (res.tipProizvoda == 'Letak') {
                if (res.ub_povrsina_double) {
                    // Izrada
                    troskoviIzradeIzlaznihMedija +=
                        (1 * faktor * cenaOpreme);
                    // Materijal
                    troskoviMaterilaIzlaznihMedija +=
                        (1 * (res.sirinaProizvoda * res.duzinaProizvoda)
                            / 1000 * cenaMaterijala);
                }
                // Izrada
                troskoviIzradeIzlaznihMedija +=
                    (1 * faktor * cenaOpreme);
                // Materijal
                troskoviMaterilaIzlaznihMedija +=
                    (1 * (res.sirinaProizvoda * res.duzinaProizvoda)
                        / 1000 * cenaMaterijala);
            }
            else if (res.tipProizvoda == 'Brošura') {
                // Izrada
                troskoviIzradeIzlaznihMedija +=
                    (res.obimProizvoda * faktor * cenaOpreme);
                // Materijal
                troskoviMaterilaIzlaznihMedija +=
                    (res.obimProizvoda * (res.sirinaProizvoda * res.duzinaProizvoda)
                        / 1000 * cenaMaterijala);
            }
        }
        else if (res.ps_izlazniMedijiTip == 'CTP') {
            if (res.tipProizvoda == 'Plakat') {
                // Izrada
                troskoviIzradeIzlaznihMedija +=
                    (1 * 1 * brojBoja_Plakat * faktor * cenaOpreme);
                // Materijal
                troskoviMaterilaIzlaznihMedija +=
                    (1 * 1 * brojBoja_Plakat *
                        ((res.masinaZaStampu.x * res.masinaZaStampu.y) / 1000000)
                        * cenaMaterijala);
            }
            else if (res.tipProizvoda == 'Letak') {
                if (res.ub_povrsina_double) {
                    // strana b
                    // Izrada
                    troskoviIzradeIzlaznihMedija +=
                        (1 * 1 * brojBoja_Letak_B * faktor * cenaOpreme);
                    // Materijal
                    troskoviMaterilaIzlaznihMedija +=
                        (1 * 1 * brojBoja_Letak_B *
                            ((res.masinaZaStampu.x * res.masinaZaStampu.y) / 1000000)
                            * cenaMaterijala);
                }
                // strana a
                // Izrada
                troskoviIzradeIzlaznihMedija +=
                    (1 * 1 * brojBoja_Letak_A * faktor * cenaOpreme);
                // Materijal
                troskoviMaterilaIzlaznihMedija +=
                    (1 * 1 * brojBoja_Letak_A *
                        ((res.masinaZaStampu.x * res.masinaZaStampu.y) / 1000000)
                        * cenaMaterijala);
            }
            else if (res.tipProizvoda == 'Brošura') {
                if (res.masinaZaStampuIstaB) {
                    // Broj boja  boja brosure (celokupna jer ne mozemo
                    // znati koja ce se strana gde stampati)
                    var brojBojaBrosura = 0;
                    var brojBojaKorice = 0;
                    for (var _f = 0, _g = [brojBoja_Korice_A, brojBoja_Korice_B,
                        brojBoja_Korice_C, brojBoja_Korice_D]; _f < _g.length; _f++) {
                        var b = _g[_f];
                        if (b > brojBojaKorice) {
                            brojBojaKorice = b;
                        }
                    }
                    if (brojBoja_KBlok >= brojBojaKorice) {
                        brojBojaBrosura = brojBoja_KBlok;
                    }
                    else {
                        brojBojaBrosura = brojBojaKorice;
                    }
                    // Izrada
                    troskoviIzradeIzlaznihMedija +=
                        ((res.obimProizvoda / res.brojProizvodaPoTabakuZaStampu) *
                            brojBojaBrosura * faktor * cenaOpreme);
                    // Materijal
                    troskoviMaterilaIzlaznihMedija +=
                        ((res.obimProizvoda / res.brojProizvodaPoTabakuZaStampu) *
                            brojBojaBrosura *
                            ((res.masinaZaStampu.x * res.masinaZaStampu.y) / 1000000)
                            * cenaMaterijala);
                }
                else {
                    // Ako se stampa unutrasnjost
                    if (!res.ub_korice_double) {
                        var brojBojaKorice_Unutrasnje = void 0;
                        if (brojBoja_Korice_C >= brojBoja_Korice_D) {
                            brojBojaKorice_Unutrasnje = brojBoja_Korice_C;
                        }
                        else {
                            brojBojaKorice_Unutrasnje = brojBoja_Korice_D;
                        }
                        // Izrada
                        troskoviIzradeIzlaznihMedija +=
                            (1 * 1 * brojBojaKorice_Unutrasnje * faktor * cenaOpreme);
                        // Materijal
                        troskoviMaterilaIzlaznihMedija +=
                            (1 * 1 * brojBojaKorice_Unutrasnje *
                                ((res.masinaZaStampuKorica.x * res.masinaZaStampuKorica.y) /
                                    1000000) * cenaMaterijala);
                    }
                    var brojBojaKorice_Spoljasne = void 0;
                    if (brojBoja_Korice_A >= brojBoja_Korice_B) {
                        brojBojaKorice_Spoljasne = brojBoja_Korice_A;
                    }
                    else {
                        brojBojaKorice_Spoljasne = brojBoja_Korice_B;
                    }
                    // Troskovi izrade izlaznih medija
                    troskoviIzradeIzlaznihMedija +=
                        (1 * 1 * brojBojaKorice_Spoljasne * faktor * cenaOpreme);
                    // Materijal
                    troskoviMaterilaIzlaznihMedija +=
                        (1 * 1 * brojBojaKorice_Spoljasne *
                            ((res.masinaZaStampuKorica.x * res.masinaZaStampuKorica.y) /
                                1000000) * cenaMaterijala);
                    // Knjizni blok
                    // Troskovi izrade izlaznih medija
                    troskoviIzradeIzlaznihMedija +=
                        ((res.obimProizvoda - 4) / res.brojProizvodaPoTabakuZaStampu *
                            brojBoja_KBlok * faktor * cenaOpreme);
                    // Materijal
                    troskoviMaterilaIzlaznihMedija +=
                        ((res.obimProizvoda - 4) / res.brojProizvodaPoTabakuZaStampu *
                            brojBoja_KBlok *
                            ((res.masinaZaStampu.x * res.masinaZaStampu.y) /
                                1000000) * cenaMaterijala);
                }
            }
        }
        // Sabiranje vremena i troskova pripreme stampe
        // Vreme pripreme stampe
        vreme_pripremaStampe =
            vreme_pripremaStampe_osnovno +
                vreme_pripremaStampe_prenosPodataka +
                vreme_pripremaStampe_kreiraneTeksta +
                vreme_pripremaStampe_kreiranjeSlika +
                vreme_pripremaStampe_prelom +
                vreme_pripremeStampe_montaza +
                vreme_pripremeStampe_obradaSlika;
        // Troskovi pripreme stampe
        troskovi_pripremaStampe =
            (vreme_pripremaStampe * res.ps_oprema.cena) +
                troskoviIzradeIzlaznihMedija +
                troskoviMaterilaIzlaznihMedija;
        // **** STAMPA ****
        if (res.tipProizvoda == 'Plakat' || res.tipProizvoda == 'Letak') {
            //Vreme jedne pripreme masine
            var vremePripremeMasine = void 0;
            if (res.st_pripremaMasine == 'Jednostavano') {
                vremePripremeMasine = res.masinaZaStampu.vremePripreme_j;
            }
            else if (res.st_pripremaMasine == 'Prosečno') {
                vremePripremeMasine = res.masinaZaStampu.vremePripreme_p;
            }
            else if (res.st_pripremaMasine == 'Složeno') {
                vremePripremeMasine = res.masinaZaStampu.vremePripreme_s;
            }
            // Brzina stampe
            var brzinaStampe = void 0;
            if (res.st_stampa == 'Jednostavna') {
                brzinaStampe = res.masinaZaStampu.brojOtisaka_j;
            }
            else if (res.st_stampa == 'Prosečna') {
                brzinaStampe = res.masinaZaStampu.brojOtisaka_p;
            }
            else if (res.st_stampa == 'Složena') {
                brzinaStampe = res.masinaZaStampu.brojOtisaka_s;
            }
            // Vreme pranja masine
            var vremePranjaMasine = res.masinaZaStampu.vremePranja;
            // Radnici na masini
            var masinista = 0;
            var pomocniRadnik = 0;
            var pomocniUlagac = 0;
            var drugiMasinista = 0;
            if (res.st_masinista) {
                masinista = res.masinaZaStampu.normaMasinista;
            }
            else {
                masinista = res.masinaZaStampu.normaMasinista;
                if (res.st_pomocniRadnik) {
                    pomocniRadnik = res.masinaZaStampu.normaPomocniradnik;
                }
                if (res.st_ulagac) {
                    pomocniUlagac = res.masinaZaStampu.normaUlagac;
                }
                if (res.st_drugiMasinista) {
                    drugiMasinista = res.masinaZaStampu.normaDrugiMasinista;
                }
            }
            //Broj priprema masine
            var brPripremaMasine = void 0;
            if (res.tipProizvoda == 'Plakat') {
                brPripremaMasine = brojBoja_Plakat / res.masinaZaStampu.brojBoja;
            }
            else if (res.tipProizvoda == 'Letak') {
                brPripremaMasine =
                    Math.ceil(brojBoja_Letak_A / res.masinaZaStampu.brojBoja) +
                        Math.ceil(brojBoja_Letak_B / res.masinaZaStampu.brojBoja);
            }
            // Vreme stampe
            vreme_stampe =
                (brPripremaMasine * vremePripremeMasine) +
                    (brojTabakaZaStampu / brzinaStampe) +
                    vremePranjaMasine;
            // U slucaju da se stampa sa obe strane letka
            if (res.tipProizvoda == 'Letak') {
                if (res.ub_povrsina_double) {
                    vreme_stampe =
                        (brPripremaMasine * vremePripremeMasine) +
                            (brojTabakaZaStampu * 2 / brzinaStampe) +
                            vremePranjaMasine;
                }
            }
            // Troskovi stampe
            troskovi_stampe =
                vreme_stampe * (masinista + pomocniRadnik + pomocniUlagac + drugiMasinista);
        }
        else if (res.tipProizvoda == 'Brošura') {
            //Vreme jedne pripreme masine
            var vremePripremeMasine = void 0;
            var vremePripremeMasine_korice = void 0;
            // jedna masina 
            if (res.st_pripremaMasine == 'Jednostavano') {
                vremePripremeMasine = res.masinaZaStampu.vremePripreme_j;
            }
            else if (res.st_pripremaMasine == 'Prosečno') {
                vremePripremeMasine = res.masinaZaStampu.vremePripreme_p;
            }
            else if (res.st_pripremaMasine == 'Složeno') {
                vremePripremeMasine = res.masinaZaStampu.vremePripreme_s;
            }
            // dve masine
            if (!res.masinaZaStampuIstaB) {
                if (res.st_pripremaMasine_korice == 'Jednostavano') {
                    vremePripremeMasine_korice = res.masinaZaStampuKorica.vremePripreme_j;
                }
                else if (res.st_pripremaMasine_korice == 'Prosečno') {
                    vremePripremeMasine_korice = res.masinaZaStampuKorica.vremePripreme_p;
                }
                else if (res.st_pripremaMasine_korice == 'Složeno') {
                    vremePripremeMasine_korice = res.masinaZaStampuKorica.vremePripreme_s;
                }
            }
            // Brzina stampe
            var brzinaStampe = void 0;
            var brzinaStampe_korice = void 0;
            // Jedna masina
            if (res.st_stampa == 'Jednostavna') {
                brzinaStampe = res.masinaZaStampu.brojOtisaka_j;
            }
            else if (res.st_stampa == 'Prosečna') {
                brzinaStampe = res.masinaZaStampu.brojOtisaka_p;
            }
            else if (res.st_stampa == 'Složena') {
                brzinaStampe = res.masinaZaStampu.brojOtisaka_s;
            }
            // Dve masine
            if (!res.masinaZaStampuIstaB) {
                if (res.st_stampa_korice == 'Jednostavna') {
                    brzinaStampe_korice = res.masinaZaStampuKorica.brojOtisaka_j;
                }
                else if (res.st_stampa_korice == 'Prosečna') {
                    brzinaStampe_korice = res.masinaZaStampuKorica.brojOtisaka_p;
                }
                else if (res.st_stampa_korice == 'Složena') {
                    brzinaStampe_korice = res.masinaZaStampuKorica.brojOtisaka_s;
                }
            }
            // Vreme pranja masine
            // Jedna masina
            var vremePranjaMasine = res.masinaZaStampu.vremePranja;
            // Dve masine
            var vremePranjaMasine_korice = void 0;
            if (!res.masinaZaStampuIstaB) {
                vremePranjaMasine_korice = res.masinaZaStampuKorica.vremePranja;
            }
            // Radnici na masini
            // Jedna masina
            var masinista = 0;
            var pomocniRadnik = 0;
            var pomocniUlagac = 0;
            var drugiMasinista = 0;
            if (res.st_masinista) {
                masinista = res.masinaZaStampu.normaMasinista;
            }
            else {
                masinista = res.masinaZaStampu.normaMasinista;
                if (res.st_pomocniRadnik) {
                    pomocniRadnik = res.masinaZaStampu.normaPomocniradnik;
                }
                if (res.st_ulagac) {
                    pomocniUlagac = res.masinaZaStampu.normaUlagac;
                }
                if (res.st_drugiMasinista) {
                    drugiMasinista = res.masinaZaStampu.normaDrugiMasinista;
                }
            }
            // Dve masine
            var masinista_korice = 0;
            var pomocniRadnik_korice = 0;
            var pomocniUlagac_korice = 0;
            var drugiMasinista_korice = 0;
            if (!res.masinaZaStampuIstaB) {
                if (res.st_masinista_korice) {
                    masinista_korice = res.masinaZaStampuKorica.normaMasinista;
                }
                else {
                    masinista_korice = res.masinaZaStampuKorica.normaMasinista;
                    if (res.st_pomocniRadnik_korice) {
                        pomocniRadnik_korice = res.masinaZaStampuKorica.normaPomocniradnik;
                    }
                    if (res.st_ulagac_korice) {
                        pomocniUlagac_korice = res.masinaZaStampuKorica.normaUlagac;
                    }
                    if (res.st_drugiMasinista_korice) {
                        drugiMasinista_korice = res.masinaZaStampuKorica.normaDrugiMasinista;
                    }
                }
            }
            //Broj priprema masine
            var brPripremaMasine = void 0;
            var brPripremaMasine_korice = 0;
            //Broj priprema ako se stampa na jednoj masini
            var brojBojaBrosura = 0;
            var brojBojaKorice = 0;
            for (var _h = 0, _j = [brojBoja_Korice_A, brojBoja_Korice_B,
                brojBoja_Korice_C, brojBoja_Korice_D]; _h < _j.length; _h++) {
                var b = _j[_h];
                if (b > brojBojaKorice) {
                    brojBojaKorice = b;
                }
            }
            if (brojBoja_KBlok >= brojBojaKorice) {
                brojBojaBrosura = brojBoja_KBlok;
            }
            else {
                brojBojaBrosura = brojBojaKorice;
            }
            brPripremaMasine =
                (res.obimProizvoda / res.brojProizvodaPoTabakuZaStampu)
                    * brojBojaBrosura / res.masinaZaStampu.brojBoja;
            // Broj priprema ako se stampa na dve masine
            if (!res.masinaZaStampuIstaB) {
                brPripremaMasine =
                    ((res.obimProizvoda - 4) / res.brojProizvodaPoTabakuZaStampu)
                        * brojBoja_KBlok / res.masinaZaStampu.brojBoja;
                // stampa na unustrasnju koricu
                if (!res.ub_korice_double) {
                    var brojBojaKorice_Unutrasnje = void 0;
                    if (brojBoja_Korice_C >= brojBoja_Korice_D) {
                        brojBojaKorice_Unutrasnje = brojBoja_Korice_C;
                    }
                    else {
                        brojBojaKorice_Unutrasnje = brojBoja_Korice_D;
                    }
                    brPripremaMasine_korice +=
                        1 * brojBojaKorice_Unutrasnje / res.masinaZaStampu.brojBoja;
                }
                // štampa samo na spoljasnu koricu
                // odredjivanje broj boja korica
                var brojBojaKorice_Spoljasne = void 0;
                if (brojBoja_Korice_A >= brojBoja_Korice_B) {
                    brojBojaKorice_Spoljasne = brojBoja_Korice_A;
                }
                else {
                    brojBojaKorice_Spoljasne = brojBoja_Korice_B;
                }
                brPripremaMasine_korice +=
                    1 * brojBojaKorice_Spoljasne / res.masinaZaStampu.brojBoja;
            }
            // Vreme stampe
            var vremeStampe_knjizniBlok = 0;
            var vremeStampe_korice = 0;
            if (res.masinaZaStampuIstaB) {
                vreme_stampe =
                    (brPripremaMasine * vremePripremeMasine) +
                        ((brojTabakaZaStampu + brojTabakaNaOkretanje) * 2 / brzinaStampe) +
                        vremePranjaMasine;
            }
            else {
                vremeStampe_knjizniBlok =
                    (brPripremaMasine * vremePripremeMasine) +
                        ((brojTabakaZaStampu + brojTabakaNaOkretanje) * 2 / brzinaStampe) +
                        vremePranjaMasine;
                // Stampa samo na spolje korice
                if (res.ub_korice_double) {
                    vremeStampe_korice +=
                        (brPripremaMasine_korice * vremePripremeMasine_korice) +
                            (brojTabakaZaStampuKorice / brzinaStampe_korice) +
                            vremePranjaMasine_korice;
                }
                else {
                    vremeStampe_korice +=
                        (brPripremaMasine_korice * vremePripremeMasine_korice) +
                            (brojTabakaZaStampuKorice * 2 / brzinaStampe_korice) +
                            vremePranjaMasine_korice;
                }
                vreme_stampe = vremeStampe_korice + vremeStampe_knjizniBlok;
            }
            // Troskovi stampe
            if (res.masinaZaStampuIstaB) {
                troskovi_stampe =
                    vreme_stampe * (masinista + pomocniRadnik + pomocniUlagac + drugiMasinista);
            }
            else {
                troskovi_stampe =
                    vremeStampe_knjizniBlok * (masinista + pomocniRadnik + pomocniUlagac + drugiMasinista) +
                        vremeStampe_korice * (masinista_korice + pomocniRadnik_korice + pomocniUlagac_korice + drugiMasinista_korice);
            }
        }
        // ***
        // ZGO
        console.log('ZGO');
        if (res.tipProizvoda == 'Plakat' || res.tipProizvoda == 'Letak') {
            // Pripremno rezanje ili obrezivanje
            var vremePripremnogRezanja = 0;
            var brojTabakaUlaganjaPripremnoRezanje = void 0;
            var brojUlaganjaPripremnoRezanje = void 0;
            // Broj tabaka pri ulaganju
            for (var _k = 0, _l = this.rezanjeUlaganja; _k < _l.length; _k++) {
                var u = _l[_k];
                if (u.tipPapira.naziv == res.papir.tipPapira.naziv && u.gramatura == res.papir.gramatura) {
                    brojTabakaUlaganjaPripremnoRezanje = u.brojTabaka;
                }
            }
            // Broj Ulaganja
            brojUlaganjaPripremnoRezanje =
                Math.ceil(brojTabakaOsnovnogFormata / brojTabakaUlaganjaPripremnoRezanje);
            var tabakOsnovniD = res.papir.y;
            var tabakOsnovniS = res.papir.x;
            // Provera
            console.log('Broj ulaganja pripremno reznaje: ' + brojUlaganjaPripremnoRezanje);
            // Rezanje
            if (res.brojTabakaZaStampuPoOsnovnomTabaku > 1) {
                for (var _m = 0, _o = this.rezanja; _m < _o.length; _m++) {
                    var r = _o[_m];
                    if (tabakOsnovniS <= r.x && tabakOsnovniD <= r.y && res.brojTabakaZaStampuPoOsnovnomTabaku == r.brojIzrezanihTabaka) {
                        vremePripremnogRezanja =
                            r.pripremnoVreme +
                                r.vremeRezanja * brojUlaganjaPripremnoRezanje;
                        break;
                    }
                }
            }
            // Obrezivanje
            else {
                for (var _p = 0, _q = this.obrezivanja; _p < _q.length; _p++) {
                    var o = _q[_p];
                    if (tabakOsnovniS <= o.x && tabakOsnovniD <= o.y) {
                        vremePripremnogRezanja =
                            o.pripremnoVreme1 +
                                o.vremeRezanja1;
                        break;
                    }
                }
            }
            // Zavrsno rezanje
            var vremeZavrsnogRezanja = 0;
            var brojTabakaUlaganjaZavrsnoRezanje = brojTabakaUlaganjaPripremnoRezanje;
            var brojUlaganjaZavrsnoRezanje = void 0;
            // Broj Ulaganja
            brojUlaganjaZavrsnoRezanje =
                Math.ceil(brojTabakaZaStampu / brojTabakaUlaganjaZavrsnoRezanje);
            // Provera
            console.log('Broj ulaganja zavrsno rezanje: ' + brojUlaganjaZavrsnoRezanje);
            // Definisanje sirine i duzine (moze se desiti da je obrnuto)
            var tabakZaStampuD = void 0;
            var tabakZaStampuS = void 0;
            if (res.sirinaTabakZaStampu >= res.duzinaTabakaZaStampu) {
                tabakZaStampuD = res.sirinaTabakZaStampu;
                tabakZaStampuS = res.duzinaTabakaZaStampu;
            }
            else {
                tabakZaStampuD = res.duzinaTabakaZaStampu;
                tabakZaStampuS = res.sirinaTabakZaStampu;
            }
            // Rezanje
            if (res.brojProizvodaPoTabakuZaStampu > 1) {
                for (var _r = 0, _s = this.rezanja; _r < _s.length; _r++) {
                    var r = _s[_r];
                    if (tabakZaStampuS <= r.x && tabakZaStampuD <= r.y
                        && res.brojProizvodaPoTabakuZaStampu == r.brojIzrezanihTabaka) {
                        vremeZavrsnogRezanja =
                            r.pripremnoVreme +
                                r.vremeRezanja * brojUlaganjaZavrsnoRezanje;
                        break;
                    }
                }
            }
            // Obrezivanje
            else {
                for (var _t = 0, _u = this.obrezivanja; _t < _u.length; _t++) {
                    var o = _u[_t];
                    if (tabakZaStampuS <= o.x && tabakZaStampuD <= o.y) {
                        vremeZavrsnogRezanja =
                            o.pripremnoVreme2 +
                                o.vremeRezanja2 * brojUlaganjaZavrsnoRezanje;
                        break;
                    }
                }
            }
            if (res.tipProizvoda == 'Letak') {
                if (res.zgo_savijanje_letak) {
                    // Paralelno savijanje
                    var vreme_savijanja_letka = 0;
                    var savijanje_letka_vremePripreme = 0;
                    var savijanje_letka_brzinaSavijanja = 0;
                    // Vreme pripreme paralenog savijanja
                    for (var _v = 0, _w = this.savijanjePripreme; _v < _w.length; _v++) {
                        var s = _w[_v];
                        if (s.tipSavijanja == "Paralelno") {
                            if (s.tipOperacije == "Savijanje (prvo)") {
                                savijanje_letka_vremePripreme += s.vremePripreme;
                            }
                        }
                    }
                    console.log('Vreme pripreme paralelno savijanje (letak): ' +
                        savijanje_letka_vremePripreme);
                    var x = void 0;
                    var y = void 0;
                    if (res.sirinaProizvoda >= res.duzinaProizvoda) {
                        y = res.sirinaProizvoda;
                        x = res.duzinaProizvoda;
                    }
                    else {
                        y = res.duzinaProizvoda;
                        x = res.sirinaProizvoda;
                    }
                    if (res.zgo_savijanje_letak_strana) {
                        y = y / 2;
                    }
                    else {
                        x = x / 2;
                    }
                    var izlazniProizvodX = void 0;
                    var izlazniProizvodY = void 0;
                    if (x >= y) {
                        izlazniProizvodX = y;
                        izlazniProizvodY = x;
                    }
                    else {
                        izlazniProizvodX = x;
                        izlazniProizvodY = y;
                    }
                    // Brzina paralenog savijanja
                    for (var _x = 0, _y = this.savijanjaParalelna; _x < _y.length; _x++) {
                        var s = _y[_x];
                        if (s.duzinaTabaka >= izlazniProizvodY) {
                            if (izlazniProizvodX <= 510 && izlazniProizvodY <= 660) {
                                savijanje_letka_brzinaSavijanja = s.malaMasina;
                            }
                            else {
                                savijanje_letka_brzinaSavijanja = s.velikaMasina;
                            }
                            break;
                        }
                    }
                    // Broj savijanja
                    var brojSavijanja = res.tiraz * makulatura;
                    // Vreme savijanja
                    vreme_savijanja_letka =
                        savijanje_letka_vremePripreme +
                            brojSavijanja /
                                savijanje_letka_brzinaSavijanja;
                    console.log('Vreme paralelno savijanje (letak): ' +
                        vreme_savijanja_letka);
                    // Dodavanje na racun
                    vreme_zgo += vreme_savijanja_letka;
                    troskovi_zgo += (vreme_savijanja_letka * res.zgo_savijanje_cena);
                }
            }
            console.log('Pripremno vreme rezanje: ' + vremePripremnogRezanja);
            console.log('Zavrsno vreme rezanja: ' + vremeZavrsnogRezanja);
            // Racun
            vreme_zgo += vremePripremnogRezanja + vremeZavrsnogRezanja;
            troskovi_zgo +=
                (vremePripremnogRezanja + vremeZavrsnogRezanja) * res.zgo_rezanje_cena;
        }
        else if (res.tipProizvoda == 'Brošura') {
            // Korice i knjizni blok na istoj masini
            if (res.masinaZaStampuIstaB) {
                // Pripremno rezanje ili obrezivanje
                var vremePripremnogRezanja = 0;
                var brojTabakaUlaganjaPripremnoRezanje = void 0;
                var brojUlaganjaPripremnoRezanje = void 0;
                // Broj tabaka pri ulaganju
                for (var _z = 0, _0 = this.rezanjeUlaganja; _z < _0.length; _z++) {
                    var u = _0[_z];
                    if (u.tipPapira.naziv == res.papir.tipPapira.naziv && u.gramatura == res.papir.gramatura) {
                        brojTabakaUlaganjaPripremnoRezanje = u.brojTabaka;
                    }
                }
                // Broj Ulaganja
                brojUlaganjaPripremnoRezanje =
                    Math.ceil(brojTabakaOsnovnogFormata / brojTabakaUlaganjaPripremnoRezanje);
                var tabakOsnovniD = res.papir.y;
                var tabakOsnovniS = res.papir.x;
                console.log('Broj ulaganja pripremno rezanje: ' + brojUlaganjaPripremnoRezanje);
                // Rezanje
                if (res.brojTabakaZaStampuPoOsnovnomTabaku > 1) {
                    for (var _1 = 0, _2 = this.rezanja; _1 < _2.length; _1++) {
                        var r = _2[_1];
                        if (tabakOsnovniS <= r.x && tabakOsnovniD <= r.y && res.brojTabakaZaStampuPoOsnovnomTabaku == r.brojIzrezanihTabaka) {
                            vremePripremnogRezanja =
                                r.pripremnoVreme +
                                    r.vremeRezanja * brojUlaganjaPripremnoRezanje;
                            break;
                        }
                    }
                }
                // Obrezivanje
                else {
                    for (var _3 = 0, _4 = this.obrezivanja; _3 < _4.length; _3++) {
                        var o = _4[_3];
                        if (tabakOsnovniS <= o.x && tabakOsnovniD <= o.y) {
                            vremePripremnogRezanja =
                                o.pripremnoVreme1 +
                                    o.vremeRezanja1;
                            break;
                        }
                    }
                }
                console.log('vremePripremnogRezanja' + vremePripremnogRezanja);
                // Zavrsno rezanje
                var tirazMakulatura = void 0;
                var vremeZavrsnogRezanja = 0;
                var brojBrosuraUlaganjaZavrsnogRezanje = void 0;
                var brojUlaganjaZavrsnogRezanje = void 0;
                // Tiraz + makulatura
                tirazMakulatura = res.tiraz * makulatura;
                // Broj brosur pri jednom ulaganju
                brojBrosuraUlaganjaZavrsnogRezanje =
                    Math.floor(brojTabakaUlaganjaPripremnoRezanje / (res.obimProizvoda / 2));
                // Definizanje dimenzija ulaganja
                brojBrosuraUlaganjaZavrsnogRezanje = brojBrosuraUlaganjaZavrsnogRezanje * res.zgo_rezanje_zavrsno;
                var rezanjeSirina = 0;
                var rezanjeDuzina = 0;
                if (res.sirinaProizvoda * res.zgo_rezanje_zavrsno >= res.duzinaProizvoda) {
                    rezanjeDuzina = res.sirinaProizvoda * res.zgo_rezanje_zavrsno;
                    rezanjeSirina = res.duzinaProizvoda;
                }
                else {
                    rezanjeDuzina = res.duzinaProizvoda;
                    rezanjeSirina = res.sirinaProizvoda * res.zgo_rezanje_zavrsno;
                }
                // Broj ulaganja
                brojUlaganjaZavrsnogRezanje =
                    Math.ceil(tirazMakulatura / brojBrosuraUlaganjaZavrsnogRezanje);
                //
                console.log('brojUlaganjaZavrsnogRezanje' + brojUlaganjaZavrsnogRezanje);
                if (res.zgo_rezanje_zavrsno > 1) {
                    for (var _5 = 0, _6 = this.rezanja; _5 < _6.length; _5++) {
                        var r = _6[_5];
                        if (rezanjeSirina <= r.x && rezanjeDuzina <= r.y && res.zgo_rezanje_zavrsno == r.brojIzrezanihTabaka) {
                            vremeZavrsnogRezanja =
                                r.pripremnoVreme +
                                    r.vremeRezanja * brojUlaganjaZavrsnogRezanje;
                            break;
                        }
                    }
                }
                else {
                    for (var _7 = 0, _8 = this.obrezivanja; _7 < _8.length; _7++) {
                        var o = _8[_7];
                        if (rezanjeSirina <= o.x && rezanjeDuzina <= o.y) {
                            vremeZavrsnogRezanja =
                                o.pripremnoVreme2 +
                                    o.vremeRezanja2;
                            break;
                        }
                    }
                }
                console.log('vremeZavrsnogRezanja' + vremeZavrsnogRezanja);
                // Savijanje
                // Broj unakrsnih savijanja
                var brojUnakrsnihSavijanja = 0;
                var brojUS = res.brojProizvodaPoTabakuZaStampu;
                console.log(brojUS);
                console.log('brojUS' + brojUS);
                while (brojUS > 1) {
                    brojUS = brojUS / 2;
                    brojUnakrsnihSavijanja++;
                }
                console.log('brojUnakrsnihSavijanja' + brojUnakrsnihSavijanja);
                // Vreme pripreme unakrsnog savijanja
                var savijanjePriprema = 0;
                for (var _9 = 0, _10 = this.savijanjePripreme; _9 < _10.length; _9++) {
                    var s = _10[_9];
                    if (s.tipSavijanja == "Unakrsno") {
                        if (s.tipOperacije == "Savijanje (prvo)") {
                            savijanjePriprema += s.vremePripreme;
                            console.log(s);
                        }
                        else if (s.tipOperacije == "Savijanje (naredno)") {
                            savijanjePriprema += (s.vremePripreme * (brojUnakrsnihSavijanja - 1));
                            console.log(s);
                        }
                    }
                }
                console.log('savijanjePriprema' + savijanjePriprema);
                // Brzina unakrsnog savijanja
                var brzinaUnakrsnogSavijanja = void 0;
                // Provera duzine i sirine
                var sirinaProizvodaZaSavijanje = void 0;
                var duzinaProizvodaZaSavijanje = void 0;
                if (res.sirinaProizvoda >= res.duzinaProizvoda) {
                    duzinaProizvodaZaSavijanje = res.sirinaProizvoda;
                    sirinaProizvodaZaSavijanje = res.duzinaProizvoda;
                }
                else {
                    duzinaProizvodaZaSavijanje = res.duzinaProizvoda;
                    sirinaProizvodaZaSavijanje = res.sirinaProizvoda;
                }
                for (var _11 = 0, _12 = this.savijanjaUnakrsna; _11 < _12.length; _11++) {
                    var s = _12[_11];
                    if (s.brojSavijanja == brojUnakrsnihSavijanja) {
                        if (sirinaProizvodaZaSavijanje <= 180 &&
                            duzinaProizvodaZaSavijanje <= 250) {
                            brzinaUnakrsnogSavijanja = s.manje;
                        }
                        else {
                            brzinaUnakrsnogSavijanja = s.vece;
                        }
                    }
                }
                console.log('brzinaUnakrsnogSavijanja' + brzinaUnakrsnogSavijanja);
                // Vreme unakrsnog savijanja
                var vremeUnakrsnogSavijanja = savijanjePriprema + brojTabakaZaStampu / brzinaUnakrsnogSavijanja;
                console.log('vremeUnakrsnogSavijanja' + vremeUnakrsnogSavijanja);
                // Sivenje
                var vremeSivenja = res.zgo_sivenje_priprema + ((res.tiraz * makulatura) / res.zgo_sivenje_brzina);
                console.log('vremeSivenja' + vremeSivenja);
                vreme_zgo =
                    vremePripremnogRezanja +
                        vremeZavrsnogRezanja +
                        vremeUnakrsnogSavijanja +
                        vremeSivenja;
                troskovi_zgo =
                    (vremePripremnogRezanja + vremeZavrsnogRezanja) * res.zgo_rezanje_cena +
                        vremeUnakrsnogSavijanja * res.zgo_savijanje_cena +
                        vremeSivenja * res.zgo_sivenje_cena;
            }
            // Korice i knjizni blok na razlicitoj masini
            else {
                // *** 
                // Pripremno rezanje knjiznog bloka
                var vreme_pripremnoRezanje_kBlok = 0;
                var pripremnoRezanje_kBlok_naslaga = void 0;
                var pripremnoRezanje_kBlok_brojUlaganja = void 0;
                // Naslaga
                for (var _13 = 0, _14 = this.rezanjeUlaganja; _13 < _14.length; _13++) {
                    var u = _14[_13];
                    if (u.tipPapira.naziv == res.papir.tipPapira.naziv && u.gramatura == res.papir.gramatura) {
                        pripremnoRezanje_kBlok_naslaga = u.brojTabaka;
                    }
                }
                // Broj ulaganja
                pripremnoRezanje_kBlok_brojUlaganja =
                    Math.ceil(brojTabakaOsnovnogFormata / pripremnoRezanje_kBlok_naslaga);
                // Rezanje ili obrezivanje
                // Rezanje
                if (res.brojTabakaZaStampuPoOsnovnomTabaku > 1) {
                    for (var _15 = 0, _16 = this.rezanja; _15 < _16.length; _15++) {
                        var r = _16[_15];
                        if (res.papir.x <= r.x && res.papir.y <= r.y && res.brojTabakaZaStampuPoOsnovnomTabaku == r.brojIzrezanihTabaka) {
                            vreme_pripremnoRezanje_kBlok =
                                r.pripremnoVreme +
                                    r.vremeRezanja * pripremnoRezanje_kBlok_brojUlaganja;
                            break;
                        }
                    }
                }
                // Obrezivanje
                else {
                    for (var _17 = 0, _18 = this.obrezivanja; _17 < _18.length; _17++) {
                        var o = _18[_17];
                        if (res.papir.x <= o.x && res.papir.x <= o.y) {
                            vreme_pripremnoRezanje_kBlok =
                                o.pripremnoVreme1 +
                                    o.vremeRezanja1;
                            break;
                        }
                    }
                }
                console.log('Vreme pripremnog rezanja (knjizni blok): ' + vreme_pripremnoRezanje_kBlok);
                // ***
                // Medjurezanje knjizni blok (slucaj tabaka na okretanje)
                var vreme_medjuRezanje_kBlok = 0;
                if (brojTabakaNaOkretanje != 0) {
                    var medjuRezanje_kBlok_naslaga = void 0;
                    var medjuRezanje_kBlok_brojUlaganja = void 0;
                    // Naslaga
                    for (var _19 = 0, _20 = this.rezanjeUlaganja; _19 < _20.length; _19++) {
                        var u = _20[_19];
                        if (u.tipPapira.naziv == res.papir.tipPapira.naziv && u.gramatura == res.papir.gramatura) {
                            medjuRezanje_kBlok_naslaga = u.brojTabaka;
                        }
                    }
                    // Broj ulaganja
                    medjuRezanje_kBlok_brojUlaganja =
                        Math.ceil(brojTabakaNaOkretanje / medjuRezanje_kBlok_naslaga);
                    // Provera sirine i duzine
                    var x_1; // sirina
                    var y_1; // duzina
                    if (res.duzinaTabakaZaStampu >= res.sirinaTabakZaStampu) {
                        y_1 = res.duzinaTabakaZaStampu;
                        x_1 = res.sirinaTabakZaStampu;
                    }
                    else {
                        x_1 = res.duzinaTabakaZaStampu;
                        y_1 = res.sirinaTabakZaStampu;
                    }
                    // Rezanje ili obrezivanje
                    // Rezanje
                    if ((res.brojProizvodaPoTabakuZaStampu / 2) > 1) {
                        for (var _21 = 0, _22 = this.rezanja; _21 < _22.length; _21++) {
                            var r = _22[_21];
                            if (x_1 <= r.x && y_1 <= r.y && (res.brojProizvodaPoTabakuZaStampu / 2) == r.brojIzrezanihTabaka) {
                                vreme_medjuRezanje_kBlok =
                                    r.pripremnoVreme +
                                        r.vremeRezanja * medjuRezanje_kBlok_brojUlaganja;
                                break;
                            }
                        }
                    }
                    // Obrezivanje
                    else {
                        for (var _23 = 0, _24 = this.obrezivanja; _23 < _24.length; _23++) {
                            var o = _24[_23];
                            if (x_1 <= o.x && y_1 <= o.y) {
                                vreme_medjuRezanje_kBlok =
                                    o.pripremnoVreme1 +
                                        o.vremeRezanja1 * medjuRezanje_kBlok_brojUlaganja;
                                break;
                            }
                        }
                    }
                    console.log('Vreme medjuRezanja (knjizni blok): ' + vreme_medjuRezanje_kBlok);
                }
                // *** 
                // Pripremno rezanje korica
                var vreme_pripremnoRezanje_korice = 0;
                var pripremnoRezanje_korice_naslaga = void 0;
                var pripremnoRezanje_korice_brojUlaganja = void 0;
                // Papir - papir kao knjizni blok ili razlicit
                var papirKorice = void 0;
                if (res.papirZaStampuKoricaB) {
                    papirKorice = res.papir;
                }
                else {
                    papirKorice = res.papirKorice;
                }
                // Naslaga
                for (var _25 = 0, _26 = this.rezanjeUlaganja; _25 < _26.length; _25++) {
                    var u = _26[_25];
                    if (u.tipPapira.naziv == papirKorice.tipPapira.naziv && u.gramatura == papirKorice.gramatura) {
                        pripremnoRezanje_korice_naslaga = u.brojTabaka;
                    }
                }
                // Broj Ulaganja
                pripremnoRezanje_korice_brojUlaganja =
                    Math.ceil(brojTabakaOsnovnogFormataKorice / pripremnoRezanje_korice_naslaga);
                // Rezanje
                if (res.brojTabakaZaStampuPoOsnovnomTabakuKorice > 1) {
                    for (var _27 = 0, _28 = this.rezanja; _27 < _28.length; _27++) {
                        var r = _28[_27];
                        if (papirKorice.x <= r.x && papirKorice.y <= r.y && res.brojTabakaZaStampuPoOsnovnomTabakuKorice == r.brojIzrezanihTabaka) {
                            vreme_pripremnoRezanje_korice =
                                r.pripremnoVreme +
                                    r.vremeRezanja * pripremnoRezanje_korice_brojUlaganja;
                            break;
                        }
                    }
                }
                // Obrezivanje
                else {
                    for (var _29 = 0, _30 = this.obrezivanja; _29 < _30.length; _29++) {
                        var o = _30[_29];
                        if (papirKorice.x <= o.x && papirKorice.y <= o.y) {
                            vreme_pripremnoRezanje_korice =
                                o.pripremnoVreme1 +
                                    o.vremeRezanja1 * pripremnoRezanje_korice_brojUlaganja;
                            break;
                        }
                    }
                }
                console.log('Vreme pripremnog rezanja (korice): ' + vreme_pripremnoRezanje_korice);
                // ***
                // Medjurezanje korice (slucaj 2 ili vise korica na tabaku)
                var vreme_medjuRezanje_korice = 0;
                if (res.brojProizvodaPoTabakuZaStampuKorice > 3) {
                    var medjuRezanje_korice_naslaga = void 0;
                    var medjuRezanje_korice_brojUlaganja = void 0;
                    // Papir - papir kao knjizni blok ili razlicit
                    var papirKorice_1;
                    if (res.papirZaStampuKoricaB) {
                        papirKorice_1 = res.papir;
                    }
                    else {
                        papirKorice_1 = res.papirKorice;
                    }
                    // Naslaga
                    for (var _31 = 0, _32 = this.rezanjeUlaganja; _31 < _32.length; _31++) {
                        var u = _32[_31];
                        if (u.tipPapira.naziv == papirKorice_1.tipPapira.naziv && u.gramatura == papirKorice_1.gramatura) {
                            medjuRezanje_korice_naslaga = u.brojTabaka;
                        }
                    }
                    // Provera sirine i duzine
                    var x_2; // sirina
                    var y_2; // duzina
                    if (res.sirinaTabakZaStampuKorice >= res.duzinaTabakaZaStampuKorice) {
                        y_2 = res.sirinaTabakZaStampuKorice;
                        x_2 = res.duzinaTabakaZaStampuKorice;
                    }
                    else {
                        y_2 = res.duzinaTabakaZaStampuKorice;
                        x_2 = res.sirinaTabakZaStampuKorice;
                    }
                    // Broj ulaganja
                    medjuRezanje_korice_brojUlaganja =
                        Math.ceil(brojTabakaZaStampuKorice / medjuRezanje_korice_naslaga);
                    // Rezanje
                    if ((res.brojProizvodaPoTabakuZaStampuKorice / 2) > 1) {
                        for (var _33 = 0, _34 = this.rezanja; _33 < _34.length; _33++) {
                            var r = _34[_33];
                            if (x_2 <= r.x && y_2 <= r.y && (res.brojProizvodaPoTabakuZaStampuKorice / 2) == r.brojIzrezanihTabaka) {
                                vreme_medjuRezanje_korice =
                                    r.pripremnoVreme +
                                        r.vremeRezanja * medjuRezanje_korice_brojUlaganja;
                                break;
                            }
                        }
                    }
                    // Obrezivanje
                    else {
                        for (var _35 = 0, _36 = this.obrezivanja; _35 < _36.length; _35++) {
                            var o = _36[_35];
                            if (x_2 <= o.x && y_2 <= o.y) {
                                vreme_medjuRezanje_korice =
                                    o.pripremnoVreme1 +
                                        o.vremeRezanja1 * medjuRezanje_korice_brojUlaganja;
                                break;
                            }
                        }
                    }
                }
                console.log('Vreme medjuRezanja (korice): ' + vreme_medjuRezanje_korice);
                // ***
                // Zavrsno rezanje
                var vreme_zavrsnoRezanje = void 0;
                var zavrsnoRezanje_naslaga = void 0; // Velicina naslage
                var zavrsnoRezanje_brojBrosuraUNaslazi = void 0; // Broj brosura u jednoj naslazi
                var zavrsnoRezanje_brojBrosuraPoUlaganju = void 0; // Broj brosura po jednom ulaganju
                var zavrsnoRezanje_brojUlaganja = void 0; // Broj ulaganja
                var brojBrosuraSaMakulatorom = void 0; // Ukupan broj brosura (tiraz + makulatura)
                var makulaturaZavrsnoRezanje 
                // Naslaga
                = void 0; // Ukupna najmanja makulatura
                // Naslaga
                for (var _37 = 0, _38 = this.rezanjeUlaganja; _37 < _38.length; _37++) {
                    var u = _38[_37];
                    if (u.tipPapira.naziv == res.papir.tipPapira.naziv && u.gramatura == res.papir.gramatura) {
                        zavrsnoRezanje_naslaga = u.brojTabaka;
                    }
                }
                // Broj brosura sa makulaturom
                // Utvrdjivanje najmanje makulature
                if (makulatura_NaOkretanje != 1 && makulatura_NaOkretanje < makulatura_Korice) {
                    makulaturaZavrsnoRezanje = makulatura_NaOkretanje;
                }
                else {
                    makulaturaZavrsnoRezanje = makulatura_Korice;
                }
                if (makulatura_NaOkretanje == 1 && makulatura < makulatura_Korice) {
                    makulaturaZavrsnoRezanje = makulatura;
                }
                // Broj brosura sa makulaturom
                brojBrosuraSaMakulatorom = res.tiraz * makulaturaZavrsnoRezanje;
                // Broj brosura u okviru jedne naslage
                zavrsnoRezanje_brojBrosuraUNaslazi =
                    Math.floor(zavrsnoRezanje_naslaga / (res.obimProizvoda / 2));
                // Broj brosura po jednom ulaganju
                zavrsnoRezanje_brojBrosuraPoUlaganju =
                    zavrsnoRezanje_brojBrosuraUNaslazi * res.zgo_rezanje_zavrsno;
                // Broj ulaganja
                zavrsnoRezanje_brojUlaganja =
                    Math.ceil(brojBrosuraSaMakulatorom / zavrsnoRezanje_brojBrosuraPoUlaganju);
                // Utvrdjivanje sirine i duzine
                // Vreme zavrsnog rezanja
                // 1. provera sirine i duzine brosure
                var x = void 0;
                var y = void 0;
                if (res.sirinaProizvoda >= res.duzinaProizvoda) {
                    y = res.sirinaProizvoda;
                    x = res.duzinaProizvoda;
                }
                else {
                    y = res.duzinaProizvoda;
                    x = res.sirinaProizvoda;
                }
                // Rezanje ili obrezivanje
                if (res.zgo_rezanje_zavrsno > 1) {
                    for (var _39 = 0, _40 = this.rezanja; _39 < _40.length; _39++) {
                        var r = _40[_39];
                        if (x <= r.x && y <= r.y && res.zgo_rezanje_zavrsno == r.brojIzrezanihTabaka) {
                            vreme_zavrsnoRezanje =
                                r.pripremnoVreme +
                                    r.vremeRezanja * zavrsnoRezanje_brojUlaganja;
                            break;
                        }
                    }
                }
                // Obrezivanje
                else {
                    for (var _41 = 0, _42 = this.obrezivanja; _41 < _42.length; _41++) {
                        var o = _42[_41];
                        if (x <= o.x && y <= o.y) {
                            vreme_zavrsnoRezanje =
                                o.pripremnoVreme1 +
                                    o.vremeRezanja1 * zavrsnoRezanje_brojUlaganja;
                            break;
                        }
                    }
                }
                console.log('Vreme zavrsnog rezanja: ' + vreme_zavrsnoRezanje);
                // ***
                // Savijanje knjizni blok
                var vreme_savijanja_kBlok = 0;
                var savijanje_kBlok_brojUnakrsnihSavijanja = 0;
                var savijanje_kBlok_vremePripreme = 0;
                var savijanjekBlok_brzinaSavijanja = 0;
                var savijanje_kBlok_brojStrPoTabaku = void 0;
                // Broj unakrsnih savijanja
                savijanje_kBlok_brojStrPoTabaku = res.brojProizvodaPoTabakuZaStampu;
                var brojUS = res.brojProizvodaPoTabakuZaStampu;
                while (savijanje_kBlok_brojStrPoTabaku > 1) {
                    savijanje_kBlok_brojStrPoTabaku = savijanje_kBlok_brojStrPoTabaku / 2;
                    savijanje_kBlok_brojUnakrsnihSavijanja++;
                }
                console.log('Broj unakrsnih savijanja (knjizni blok): ' + savijanje_kBlok_brojUnakrsnihSavijanja);
                // Vreme pripreme unakrsnog savijanja
                for (var _43 = 0, _44 = this.savijanjePripreme; _43 < _44.length; _43++) {
                    var s = _44[_43];
                    if (s.tipSavijanja == "Unakrsno") {
                        if (s.tipOperacije == "Savijanje (prvo)") {
                            savijanje_kBlok_vremePripreme += s.vremePripreme;
                        }
                        else if (s.tipOperacije == "Savijanje (naredno)") {
                            savijanje_kBlok_vremePripreme += (s.vremePripreme * (savijanje_kBlok_brojUnakrsnihSavijanja - 1));
                        }
                    }
                }
                console.log('Vreme pripreme unakrsno savijanje (knjizni blok): ' + savijanje_kBlok_vremePripreme);
                // Brzina unakrsnog savijanja
                var izlazniProizvodX = void 0; // sirina izlaznog proizvoda
                var izlazniProizvodY = void 0; // duzina izlaznog proizvoda
                if (res.sirinaProizvoda >= res.duzinaProizvoda) {
                    izlazniProizvodY = res.sirinaProizvoda;
                    izlazniProizvodX = res.duzinaProizvoda;
                }
                else {
                    izlazniProizvodY = res.duzinaProizvoda;
                    izlazniProizvodX = res.sirinaProizvoda;
                }
                for (var _45 = 0, _46 = this.savijanjaUnakrsna; _45 < _46.length; _45++) {
                    var s = _46[_45];
                    if (s.brojSavijanja == savijanje_kBlok_brojUnakrsnihSavijanja) {
                        if (izlazniProizvodX <= 180 && izlazniProizvodY <= 250) {
                            savijanjekBlok_brzinaSavijanja = s.manje;
                        }
                        else {
                            savijanjekBlok_brzinaSavijanja = s.vece;
                        }
                    }
                }
                console.log('Brzina unakrsno savijanje (knjizni blok): ' + savijanjekBlok_brzinaSavijanja);
                // Vreme savijanja
                vreme_savijanja_kBlok =
                    savijanje_kBlok_vremePripreme + brojTabakaZaStampu / savijanjekBlok_brzinaSavijanja;
                console.log('Vreme unakrsno savijanje (knjizni blok): ' + vreme_savijanja_kBlok);
                // ***
                // Paralelno savijanje medjutabaka
                var vreme_savijanja_kBlok_naOkretanje = 0;
                if (brojTabakaNaOkretanje != 0) {
                    var savijanje_kBlok__naOkretanje_vremePripreme = 0;
                    var savijanje_kBlok__naOkretanje_brzinaSavijanja = 0;
                    // Vreme pripreme paralenog savijanja
                    for (var _47 = 0, _48 = this.savijanjePripreme; _47 < _48.length; _47++) {
                        var s = _48[_47];
                        if (s.tipSavijanja == "Paralelno") {
                            if (s.tipOperacije == "Savijanje (prvo)") {
                                savijanje_kBlok__naOkretanje_vremePripreme += s.vremePripreme;
                            }
                        }
                    }
                    console.log('Vreme pripreme paralelno savijanje (knjizni blok - na okretanje): ' +
                        savijanje_kBlok__naOkretanje_vremePripreme);
                    // Brzina paralenog savijanja
                    var izlazniProizvodX_1; // sirina izlaznog proizvoda
                    var izlazniProizvodY_1; // duzina izlaznog proizvoda
                    if (res.sirinaProizvoda >= res.duzinaProizvoda) {
                        izlazniProizvodY_1 = res.sirinaProizvoda;
                        izlazniProizvodX_1 = res.duzinaProizvoda;
                    }
                    else {
                        izlazniProizvodY_1 = res.duzinaProizvoda;
                        izlazniProizvodX_1 = res.sirinaProizvoda;
                    }
                    for (var _49 = 0, _50 = this.savijanjaParalelna; _49 < _50.length; _49++) {
                        var s = _50[_49];
                        if (s.duzinaTabaka >= izlazniProizvodY_1) {
                            if (izlazniProizvodX_1 <= 510 && izlazniProizvodY_1 <= 660) {
                                savijanje_kBlok__naOkretanje_brzinaSavijanja = s.malaMasina;
                            }
                            else {
                                savijanje_kBlok__naOkretanje_brzinaSavijanja = s.velikaMasina;
                            }
                            break;
                        }
                    }
                    console.log('Brzina paralelno savijanje (knjizni blok - na okretanje): ' +
                        savijanje_kBlok__naOkretanje_brzinaSavijanja);
                    vreme_savijanja_kBlok_naOkretanje =
                        savijanje_kBlok__naOkretanje_vremePripreme +
                            (brojTabakaNaOkretanje *
                                (res.brojProizvodaPoTabakuZaStampu / 2)) /
                                savijanje_kBlok__naOkretanje_brzinaSavijanja;
                }
                console.log('Vreme paraleno savijanje (knjizni blok - na okretanje): ' +
                    vreme_savijanja_kBlok_naOkretanje);
                // ***
                // Paralelno savijanje korica
                var vreme_savijanja_korice = 0;
                var savijanje_korice_vremePripreme = 0;
                var savijanje_korice_brzinaSavijanja = 0;
                // Vreme pripreme paralenog savijanja
                for (var _51 = 0, _52 = this.savijanjePripreme; _51 < _52.length; _51++) {
                    var s = _52[_51];
                    if (s.tipSavijanja == "Paralelno") {
                        if (s.tipOperacije == "Savijanje (prvo)") {
                            savijanje_korice_vremePripreme += s.vremePripreme;
                        }
                    }
                }
                console.log('Vreme pripreme paralelno savijanje (korice): ' +
                    savijanje_korice_vremePripreme);
                // Brzina paralenog savijanja
                var izlazniProizvodXX = void 0; // sirina izlaznog proizvoda
                var izlazniProizvodYY = void 0; // duzina izlaznog proizvoda
                if (res.sirinaProizvoda >= res.duzinaProizvoda) {
                    izlazniProizvodYY = res.sirinaProizvoda;
                    izlazniProizvodXX = res.duzinaProizvoda;
                }
                else {
                    izlazniProizvodYY = res.duzinaProizvoda;
                    izlazniProizvodXX = res.sirinaProizvoda;
                }
                for (var _53 = 0, _54 = this.savijanjaParalelna; _53 < _54.length; _53++) {
                    var s = _54[_53];
                    if (s.duzinaTabaka >= izlazniProizvodYY) {
                        if (izlazniProizvodXX <= 510 && izlazniProizvodYY <= 660) {
                            savijanje_korice_brzinaSavijanja = s.malaMasina;
                        }
                        else {
                            savijanje_korice_brzinaSavijanja = s.velikaMasina;
                        }
                        break;
                    }
                }
                console.log('Brzina paralelno savijanje (knjizni blok - na okretanje): ' +
                    savijanje_korice_brzinaSavijanja);
                // Broj savijanja
                var savijanje_korice_brojProizvodaPoTabaku = 0;
                if (!res.papirZaStampuKoricaB) {
                    savijanje_korice_brojProizvodaPoTabaku = res.brojProizvodaPoTabakuZaStampuKorice;
                }
                else {
                    savijanje_korice_brojProizvodaPoTabaku = res.brojProizvodaPoTabakuZaStampu;
                }
                vreme_savijanja_korice =
                    savijanje_korice_vremePripreme +
                        (brojTabakaZaStampuKorice *
                            (savijanje_korice_brojProizvodaPoTabaku / 2)) /
                            savijanje_korice_brzinaSavijanja;
                console.log('Vreme paraleno savijanje (korice): ' +
                    vreme_savijanja_korice);
                // ***
                // Sivenje
                var vreme_sivenje = 0;
                var vreme_sivenje_makulatura = 1;
                var sivenje_brojBrosuraSaMakulatorom = 0;
                // Broj brosura sa makulaturom
                // Utvrdjivanje najmanje makulature
                //Test
                console.log('Test makulature:');
                console.log(makulatura_NaOkretanje);
                console.log(makulatura_Korice);
                console.log(makulatura);
                if (makulatura_NaOkretanje != 1 && makulatura_NaOkretanje < makulatura_Korice) {
                    vreme_sivenje_makulatura = makulatura_NaOkretanje;
                }
                else {
                    vreme_sivenje_makulatura = makulatura_Korice;
                }
                if (makulatura_NaOkretanje == 1 && makulatura < makulatura_Korice) {
                    vreme_sivenje_makulatura = makulatura;
                }
                console.log('Makulatura sivenja: ' + vreme_sivenje_makulatura);
                // Broj brosura sa makulaturom
                sivenje_brojBrosuraSaMakulatorom = res.tiraz * vreme_sivenje_makulatura;
                // Vreme sivenja
                vreme_sivenje =
                    res.zgo_sivenje_priprema +
                        (sivenje_brojBrosuraSaMakulatorom / res.zgo_sivenje_brzina);
                console.log('Vreme sivenja: ' + vreme_sivenje);
                // ***
                // VREME ZGO
                vreme_zgo =
                    vreme_pripremnoRezanje_kBlok +
                        vreme_medjuRezanje_kBlok +
                        vreme_pripremnoRezanje_korice +
                        vreme_medjuRezanje_korice +
                        vreme_zavrsnoRezanje +
                        vreme_savijanja_kBlok +
                        vreme_savijanja_kBlok_naOkretanje +
                        vreme_savijanja_korice +
                        vreme_sivenje;
                troskovi_zgo =
                    (vreme_pripremnoRezanje_kBlok +
                        vreme_medjuRezanje_kBlok +
                        vreme_pripremnoRezanje_korice +
                        vreme_medjuRezanje_korice +
                        vreme_zavrsnoRezanje) * res.zgo_rezanje_cena +
                        (vreme_savijanja_kBlok +
                            vreme_savijanja_kBlok_naOkretanje +
                            vreme_savijanja_korice) * res.zgo_savijanje_cena +
                        vreme_sivenje * res.zgo_sivenje_cena;
            }
        }
        // **** UTROSAK BOJE ****
        var boja_ukupnaCena = 0;
        var bojaCenaBoje = [
            { 'naziv': 'Cyan', 'cena': 1450 },
            { 'naziv': 'Magenta', 'cena': 1620 },
            { 'naziv': 'Yellow', 'cena': 2120 },
            { 'naziv': 'Black', 'cena': 1300 },
            { 'naziv': 'Braon', 'cena': 2350 },
            { 'naziv': 'Crvena', 'cena': 1250 },
            { 'naziv': 'Narandzasta', 'cena': 2540 },
            { 'naziv': 'Ljubicasta', 'cena': 2600 },
            { 'naziv': 'Lak', 'cena': 3210 },
        ];
        // ***
        // Plakat
        if (res.tipProizvoda == 'Plakat') {
            var rastur = 1 + (res.ub_rastur / 100);
            // Ukupna stampana povrsina
            var boja_povrsinaStampe = void 0;
            // Slike
            var boja_slike_povrsina = 0;
            // Pozadina
            var boja_pozadina_povrsina = 0;
            var boja_pozadina_boja = void 0;
            // Tekst
            var boja_tekst_povrsina = 0;
            var boja_tekst_boja = void 0;
            var boja_tekst_bojaBela = false;
            var boja_tekst_slozenost = void 0;
            // Stamapan pozadina sadrzi i tekst i slike
            var boja_razlicitSadrzaj = true;
            // Stampa preko cele povrsine ili deo povrsine
            if (res.ub_povrsina_max) {
                boja_povrsinaStampe =
                    res.sirinaProizvoda * res.duzinaProizvoda;
            }
            else {
                boja_povrsinaStampe =
                    res.ub_povrsina_sirina * res.ub_povrsina_duzina;
            }
            // Preko cele povrsine slika
            if (res.ub_sadrzaj_maxSlika) {
                boja_razlicitSadrzaj = false;
                boja_slike_povrsina = boja_povrsinaStampe;
            }
            // Cela povrsina stampe obojena u boju
            if (res.ub_pozadina) {
                boja_pozadina_povrsina = boja_povrsinaStampe;
                boja_pozadina_boja = res.ub_pozadinaBoja;
            }
            // Preko cele povrsine tekst
            if (res.ub_sadrzaj_maxTekst) {
                boja_razlicitSadrzaj = false;
                boja_tekst_povrsina = boja_povrsinaStampe;
                // Boja teskta bela ili druga boja
                if (res.ub_pozadina) {
                    boja_tekst_bojaBela = true;
                }
                else {
                    boja_tekst_boja = res.ub_sadrzaj_bojaTeksta;
                }
                // Slozenost teksta
                boja_tekst_slozenost = res.ub_sadrzaj_slozenostTeksta;
            }
            // Mesovit sadrzaj
            if (boja_razlicitSadrzaj) {
                // Slike
                if (res.ub_sadrzaj_brSlika != 0) {
                    for (var _55 = 0, _56 = res.ub_sadrzaj_dimenzijeSlika; _55 < _56.length; _55++) {
                        var s = _56[_55];
                        boja_slike_povrsina +=
                            s.x * s.y;
                    }
                }
                if (res.ub_sadrzaj_tekstOstatak) {
                    boja_tekst_boja = res.ub_sadrzaj_bojaTeksta;
                    boja_tekst_slozenost = res.ub_sadrzaj_slozenostTeksta;
                    boja_tekst_povrsina =
                        boja_povrsinaStampe - boja_slike_povrsina;
                }
                // Tekstovi
                if (!res.ub_sadrzaj_tekstOstatak || res.ub_sadrzaj_tekstPrestampavanje) {
                    if (res.ub_sadrzaj_brSlika != 0) {
                        for (var _57 = 0, _58 = res.ub_sadrzaj_dimenzijeTeksta; _57 < _58.length; _57++) {
                            var t = _58[_57];
                            boja_tekst_povrsina +=
                                t.x * t.y;
                        }
                        // Boja teksta
                        if (res.ub_pozadina) {
                            if (res.ub_sadrzaj_tekstBeli) {
                                boja_tekst_bojaBela = true;
                            }
                        }
                        else {
                            boja_tekst_boja = res.ub_sadrzaj_bojaTeksta;
                        }
                        // Slozenost teksta
                        boja_tekst_slozenost = res.ub_sadrzaj_slozenostTeksta;
                    }
                }
            }
            // ***
            // Racun
            // Slike
            if (boja_slike_povrsina != 0) {
                var C_boja = void 0;
                var C_zauzetos = void 0;
                var C_cena = void 0;
                var M_boja = void 0;
                var M_zauzetos = void 0;
                var M_cena = void 0;
                var Y_boja = void 0;
                var Y_zauzetos = void 0;
                var Y_cena = void 0;
                var B_boja = void 0;
                var B_zauzetos = void 0;
                var B_cena = void 0;
                // U slucaju da tekst prelazi preko slike i da je beo
                if (boja_tekst_povrsina != 0) {
                    if (boja_tekst_bojaBela && !res.ub_pozadina) {
                        boja_slike_povrsina =
                            boja_slike_povrsina *
                                ((100 - boja_tekst_slozenost.vrednost) / 100);
                    }
                }
                // Definisanje boja za CMYK sliku
                for (var _59 = 0, _60 = this.boje; _59 < _60.length; _59++) {
                    var b = _60[_59];
                    if (b.tipPapira.naziv === res.papir.tipPapira.naziv) {
                        if (b.naziv == 'Cyan') {
                            C_boja = b;
                        }
                        if (b.naziv == 'Magenta') {
                            M_boja = b;
                        }
                        if (b.naziv == 'Yellow') {
                            Y_boja = b;
                        }
                        if (b.naziv == 'Black') {
                            B_boja = b;
                        }
                    }
                }
                // Definisanje procenta zauzeuzetosti CMYK boja
                for (var _61 = 0, _62 = this.procentiZpovrisine; _61 < _62.length; _61++) {
                    var z = _62[_61];
                    if (C_boja.naziv == z.vrstaPosla) {
                        C_zauzetos = z;
                    }
                    if (M_boja.naziv == z.vrstaPosla) {
                        M_zauzetos = z;
                    }
                    if (Y_boja.naziv == z.vrstaPosla) {
                        Y_zauzetos = z;
                    }
                    if (B_boja.naziv == z.vrstaPosla) {
                        B_zauzetos = z;
                    }
                }
                // Definisanje cena boja
                for (var _63 = 0, bojaCenaBoje_1 = bojaCenaBoje; _63 < bojaCenaBoje_1.length; _63++) {
                    var cb = bojaCenaBoje_1[_63];
                    if (cb.naziv == C_boja.naziv) {
                        C_cena = cb.cena;
                    }
                    if (cb.naziv == M_boja.naziv) {
                        M_cena = cb.cena;
                    }
                    if (cb.naziv == Y_boja.naziv) {
                        Y_cena = cb.cena;
                    }
                    if (cb.naziv == B_boja.naziv) {
                        B_cena = cb.cena;
                    }
                }
                // Dodavanje na ukupnu cenu
                boja_ukupnaCena +=
                    (boja_slike_povrsina / 1000000) * C_zauzetos.vrednost / 100 / C_boja.vredost * C_cena +
                        (boja_slike_povrsina / 1000000) * M_zauzetos.vrednost / 100 / M_boja.vredost * M_cena +
                        (boja_slike_povrsina / 1000000) * Y_zauzetos.vrednost / 100 / Y_boja.vredost * Y_cena +
                        (boja_slike_povrsina / 1000000) * B_zauzetos.vrednost / 100 / B_boja.vredost * B_cena;
                console.log('Povrsina slika: ' + boja_slike_povrsina);
            }
            if (boja_tekst_povrsina != 0) {
                if (!boja_tekst_bojaBela) {
                    // Cena boje
                    var X_cena = void 0;
                    for (var _64 = 0, bojaCenaBoje_2 = bojaCenaBoje; _64 < bojaCenaBoje_2.length; _64++) {
                        var cb = bojaCenaBoje_2[_64];
                        if (cb.naziv == boja_tekst_boja.naziv) {
                            X_cena = cb.cena;
                        }
                    }
                    // Dodavanje na ukupnu cenu
                    boja_ukupnaCena +=
                        (boja_tekst_povrsina / 1000000) * boja_tekst_slozenost.vrednost / 100 / boja_tekst_boja.vredost * X_cena;
                    console.log('Povrsina teksta: ' + boja_tekst_povrsina);
                }
            }
            // Pozadina
            if (boja_pozadina_povrsina != 0) {
                if (boja_slike_povrsina != 0) {
                    boja_pozadina_povrsina -= boja_slike_povrsina;
                }
                if (boja_tekst_povrsina != 0) {
                    if (boja_tekst_bojaBela) {
                        boja_pozadina_povrsina =
                            boja_pozadina_povrsina *
                                ((100 - boja_tekst_slozenost.vrednost) / 100);
                    }
                }
                //Cena boje
                var X_cena = void 0;
                for (var _65 = 0, bojaCenaBoje_3 = bojaCenaBoje; _65 < bojaCenaBoje_3.length; _65++) {
                    var cb = bojaCenaBoje_3[_65];
                    if (cb.naziv == boja_pozadina_boja.naziv) {
                        X_cena = cb.cena;
                    }
                }
                // Dodavanje na ukupnu cenu
                boja_ukupnaCena +=
                    (boja_pozadina_povrsina / 1000000) / boja_pozadina_boja.vredost * X_cena;
                console.log('Povrsina pozadina: ' + boja_pozadina_povrsina);
            }
            // Cena boje ukupan tiraz
            boja_ukupnaCena =
                boja_ukupnaCena * (res.tiraz * makulatura) * rastur;
        }
        // Letak
        if (res.tipProizvoda == 'Letak') {
            var rastur = 1 + (res.ub_rastur / 100);
            // Ukupna stampana povrsina
            var boja_povrsinaStampe = void 0;
            var boja_povrsinaStampe_B = void 0; // Druga strana
            // Slike
            var boja_slike_povrsina = 0;
            var boja_slike_povrsina_B = 0;
            // Pozadina
            var boja_pozadina_povrsina = 0;
            var boja_pozadina_boja = void 0;
            var boja_pozadina_povrsina_B = 0;
            var boja_pozadina_boja_B = void 0;
            // Tekst
            var boja_tekst_povrsina = 0;
            var boja_tekst_boja = void 0;
            var boja_tekst_bojaBela = false;
            var boja_tekst_slozenost = void 0;
            var boja_tekst_povrsina_B = 0;
            var boja_tekst_boja_B = void 0;
            var boja_tekst_bojaBela_B = false;
            var boja_tekst_slozenost_B = void 0;
            // Stamapan pozadina sadrzi i tekst i slike
            var boja_razlicitSadrzaj = true;
            var boja_razlicitSadrzaj_B = true;
            // Stampa preko cele povrsine ili deo povrsine
            // I - strana
            if (res.ub_povrsina_max) {
                boja_povrsinaStampe =
                    res.sirinaProizvoda * res.duzinaProizvoda;
            }
            else {
                boja_povrsinaStampe =
                    res.ub_povrsina_sirina * res.ub_povrsina_duzina;
            }
            // II - strana
            if (res.ub_povrsina_max_B) {
                boja_povrsinaStampe_B =
                    res.sirinaProizvoda * res.duzinaProizvoda;
            }
            else {
                boja_povrsinaStampe_B =
                    res.ub_povrsina_sirina_B * res.ub_povrsina_duzina_B;
            }
            // Preko cele povrsine slika
            // I
            if (res.ub_sadrzaj_maxSlika) {
                boja_razlicitSadrzaj = false;
                boja_slike_povrsina = boja_povrsinaStampe;
            }
            // II
            if (res.ub_sadrzaj_maxSlika_B) {
                boja_razlicitSadrzaj_B = false;
                boja_slike_povrsina_B = boja_povrsinaStampe_B;
            }
            // Cela povrsina stampe obojena u boju
            // I
            if (res.ub_pozadina) {
                boja_pozadina_povrsina = boja_povrsinaStampe;
                boja_pozadina_boja = res.ub_pozadinaBoja;
            }
            // II
            if (res.ub_pozadina_B) {
                boja_pozadina_povrsina_B = boja_povrsinaStampe_B;
                boja_pozadina_boja_B = res.ub_pozadinaBoja_B;
            }
            // Preko cele povrsine tekst
            // I
            if (res.ub_sadrzaj_maxTekst) {
                boja_razlicitSadrzaj = false;
                boja_tekst_povrsina = boja_povrsinaStampe;
                // Boja teskta bela ili druga boja
                if (res.ub_pozadina) {
                    boja_tekst_bojaBela = true;
                }
                else {
                    boja_tekst_boja = res.ub_sadrzaj_bojaTeksta;
                }
                // Slozenost teksta
                boja_tekst_slozenost = res.ub_sadrzaj_slozenostTeksta;
            }
            // II
            if (res.ub_sadrzaj_maxTekst_B) {
                boja_razlicitSadrzaj_B = false;
                boja_tekst_povrsina_B = boja_povrsinaStampe_B;
                // Boja teskta bela ili druga boja
                if (res.ub_pozadina_B) {
                    boja_tekst_bojaBela_B = true;
                }
                else {
                    boja_tekst_boja_B = res.ub_sadrzaj_bojaTeksta_B;
                }
                // Slozenost teksta
                boja_tekst_slozenost_B = res.ub_sadrzaj_slozenostTeksta_B;
            }
            // Mesovit sadrzaj
            // I
            if (boja_razlicitSadrzaj) {
                // Slike
                if (res.ub_sadrzaj_brSlika != 0) {
                    for (var _66 = 0, _67 = res.ub_sadrzaj_dimenzijeSlika; _66 < _67.length; _66++) {
                        var s = _67[_66];
                        boja_slike_povrsina +=
                            s.x * s.y;
                    }
                }
                if (res.ub_sadrzaj_tekstOstatak) {
                    boja_tekst_boja = res.ub_sadrzaj_bojaTeksta;
                    boja_tekst_slozenost = res.ub_sadrzaj_slozenostTeksta;
                    boja_tekst_povrsina =
                        boja_povrsinaStampe - boja_slike_povrsina;
                }
                // Tekstovi
                if (!res.ub_sadrzaj_tekstOstatak || res.ub_sadrzaj_tekstPrestampavanje) {
                    if (res.ub_sadrzaj_brSlika != 0) {
                        for (var _68 = 0, _69 = res.ub_sadrzaj_dimenzijeTeksta; _68 < _69.length; _68++) {
                            var t = _69[_68];
                            boja_tekst_povrsina +=
                                t.x * t.y;
                        }
                        // Boja teksta
                        if (res.ub_pozadina) {
                            if (res.ub_sadrzaj_tekstBeli) {
                                boja_tekst_bojaBela = true;
                            }
                        }
                        else {
                            boja_tekst_boja = res.ub_sadrzaj_bojaTeksta;
                        }
                        // Slozenost teksta
                        boja_tekst_slozenost = res.ub_sadrzaj_slozenostTeksta;
                    }
                }
            }
            // II
            if (boja_razlicitSadrzaj_B) {
                // Slike
                if (res.ub_sadrzaj_brSlika_B != 0) {
                    for (var _70 = 0, _71 = res.ub_sadrzaj_dimenzijeSlika_B; _70 < _71.length; _70++) {
                        var s = _71[_70];
                        boja_slike_povrsina_B +=
                            s.x * s.y;
                    }
                }
                if (res.ub_sadrzaj_tekstOstatak_B) {
                    boja_tekst_boja_B = res.ub_sadrzaj_bojaTeksta_B;
                    boja_tekst_slozenost_B = res.ub_sadrzaj_slozenostTeksta_B;
                    boja_tekst_povrsina_B =
                        boja_povrsinaStampe_B - boja_slike_povrsina_B;
                }
                // Tekstovi
                if (!res.ub_sadrzaj_tekstOstatak_B || res.ub_sadrzaj_tekstPrestampavanje_B) {
                    if (res.ub_sadrzaj_brSlika_B != 0) {
                        for (var _72 = 0, _73 = res.ub_sadrzaj_dimenzijeTeksta_B; _72 < _73.length; _72++) {
                            var t = _73[_72];
                            boja_tekst_povrsina_B +=
                                t.x * t.y;
                        }
                        // Boja teksta
                        if (res.ub_pozadina_B) {
                            if (res.ub_sadrzaj_tekstBeli_B) {
                                boja_tekst_bojaBela_B = true;
                            }
                        }
                        else {
                            boja_tekst_boja_B = res.ub_sadrzaj_bojaTeksta_B;
                        }
                        // Slozenost teksta
                        boja_tekst_slozenost_B = res.ub_sadrzaj_slozenostTeksta_B;
                    }
                }
            }
            // ***
            // Racun
            // Slike
            // I
            if (boja_slike_povrsina != 0) {
                var C_boja = void 0;
                var C_zauzetos = void 0;
                var C_cena = void 0;
                var M_boja = void 0;
                var M_zauzetos = void 0;
                var M_cena = void 0;
                var Y_boja = void 0;
                var Y_zauzetos = void 0;
                var Y_cena = void 0;
                var B_boja = void 0;
                var B_zauzetos = void 0;
                var B_cena = void 0;
                // U slucaju da tekst prelazi preko slike i da je beo
                if (boja_tekst_povrsina != 0) {
                    if (boja_tekst_bojaBela && !res.ub_pozadina) {
                        boja_slike_povrsina =
                            boja_slike_povrsina *
                                ((100 - boja_tekst_slozenost.vrednost) / 100);
                    }
                }
                // Definisanje boja za CMYK sliku
                for (var _74 = 0, _75 = this.boje; _74 < _75.length; _74++) {
                    var b = _75[_74];
                    if (b.tipPapira.naziv === res.papir.tipPapira.naziv) {
                        if (b.naziv == 'Cyan') {
                            C_boja = b;
                        }
                        if (b.naziv == 'Magenta') {
                            M_boja = b;
                        }
                        if (b.naziv == 'Yellow') {
                            Y_boja = b;
                        }
                        if (b.naziv == 'Black') {
                            B_boja = b;
                        }
                    }
                }
                // Definisanje procenta zauzeuzetosti CMYK boja
                for (var _76 = 0, _77 = this.procentiZpovrisine; _76 < _77.length; _76++) {
                    var z = _77[_76];
                    if (C_boja.naziv == z.vrstaPosla) {
                        C_zauzetos = z;
                    }
                    if (M_boja.naziv == z.vrstaPosla) {
                        M_zauzetos = z;
                    }
                    if (Y_boja.naziv == z.vrstaPosla) {
                        Y_zauzetos = z;
                    }
                    if (B_boja.naziv == z.vrstaPosla) {
                        B_zauzetos = z;
                    }
                }
                // Definisanje cena boja
                for (var _78 = 0, bojaCenaBoje_4 = bojaCenaBoje; _78 < bojaCenaBoje_4.length; _78++) {
                    var cb = bojaCenaBoje_4[_78];
                    if (cb.naziv == C_boja.naziv) {
                        C_cena = cb.cena;
                    }
                    if (cb.naziv == M_boja.naziv) {
                        M_cena = cb.cena;
                    }
                    if (cb.naziv == Y_boja.naziv) {
                        Y_cena = cb.cena;
                    }
                    if (cb.naziv == B_boja.naziv) {
                        B_cena = cb.cena;
                    }
                }
                // Dodavanje na ukupnu cenu
                boja_ukupnaCena +=
                    (boja_slike_povrsina / 1000000) * C_zauzetos.vrednost / 100 / C_boja.vredost * C_cena +
                        (boja_slike_povrsina / 1000000) * M_zauzetos.vrednost / 100 / M_boja.vredost * M_cena +
                        (boja_slike_povrsina / 1000000) * Y_zauzetos.vrednost / 100 / Y_boja.vredost * Y_cena +
                        (boja_slike_povrsina / 1000000) * B_zauzetos.vrednost / 100 / B_boja.vredost * B_cena;
                console.log('Povrsina slika: ' + boja_slike_povrsina);
            }
            // II
            if (boja_slike_povrsina_B != 0) {
                var C_boja = void 0;
                var C_zauzetos = void 0;
                var C_cena = void 0;
                var M_boja = void 0;
                var M_zauzetos = void 0;
                var M_cena = void 0;
                var Y_boja = void 0;
                var Y_zauzetos = void 0;
                var Y_cena = void 0;
                var B_boja = void 0;
                var B_zauzetos = void 0;
                var B_cena = void 0;
                // U slucaju da tekst prelazi preko slike i da je beo
                if (boja_tekst_povrsina_B != 0) {
                    if (boja_tekst_bojaBela_B && !res.ub_pozadina_B) {
                        boja_slike_povrsina_B =
                            boja_slike_povrsina_B *
                                ((100 - boja_tekst_slozenost_B.vrednost) / 100);
                    }
                }
                // Definisanje boja za CMYK sliku
                for (var _79 = 0, _80 = this.boje; _79 < _80.length; _79++) {
                    var b = _80[_79];
                    if (b.tipPapira.naziv === res.papir.tipPapira.naziv) {
                        if (b.naziv == 'Cyan') {
                            C_boja = b;
                        }
                        if (b.naziv == 'Magenta') {
                            M_boja = b;
                        }
                        if (b.naziv == 'Yellow') {
                            Y_boja = b;
                        }
                        if (b.naziv == 'Black') {
                            B_boja = b;
                        }
                    }
                }
                // Definisanje procenta zauzeuzetosti CMYK boja
                for (var _81 = 0, _82 = this.procentiZpovrisine; _81 < _82.length; _81++) {
                    var z = _82[_81];
                    if (C_boja.naziv == z.vrstaPosla) {
                        C_zauzetos = z;
                    }
                    if (M_boja.naziv == z.vrstaPosla) {
                        M_zauzetos = z;
                    }
                    if (Y_boja.naziv == z.vrstaPosla) {
                        Y_zauzetos = z;
                    }
                    if (B_boja.naziv == z.vrstaPosla) {
                        B_zauzetos = z;
                    }
                }
                // Definisanje cena boja
                for (var _83 = 0, bojaCenaBoje_5 = bojaCenaBoje; _83 < bojaCenaBoje_5.length; _83++) {
                    var cb = bojaCenaBoje_5[_83];
                    if (cb.naziv == C_boja.naziv) {
                        C_cena = cb.cena;
                    }
                    if (cb.naziv == M_boja.naziv) {
                        M_cena = cb.cena;
                    }
                    if (cb.naziv == Y_boja.naziv) {
                        Y_cena = cb.cena;
                    }
                    if (cb.naziv == B_boja.naziv) {
                        B_cena = cb.cena;
                    }
                }
                // Dodavanje na ukupnu cenu
                boja_ukupnaCena +=
                    (boja_slike_povrsina_B / 1000000) * C_zauzetos.vrednost / 100 / C_boja.vredost * C_cena +
                        (boja_slike_povrsina_B / 1000000) * M_zauzetos.vrednost / 100 / M_boja.vredost * M_cena +
                        (boja_slike_povrsina_B / 1000000) * Y_zauzetos.vrednost / 100 / Y_boja.vredost * Y_cena +
                        (boja_slike_povrsina_B / 1000000) * B_zauzetos.vrednost / 100 / B_boja.vredost * B_cena;
                console.log('Povrsina slika: ' + boja_slike_povrsina_B);
            }
            // Tekst
            // I
            if (boja_tekst_povrsina != 0) {
                if (!boja_tekst_bojaBela) {
                    // Cena boje
                    var X_cena = void 0;
                    for (var _84 = 0, bojaCenaBoje_6 = bojaCenaBoje; _84 < bojaCenaBoje_6.length; _84++) {
                        var cb = bojaCenaBoje_6[_84];
                        if (cb.naziv == boja_tekst_boja.naziv) {
                            X_cena = cb.cena;
                        }
                    }
                    // Dodavanje na ukupnu cenu
                    boja_ukupnaCena +=
                        (boja_tekst_povrsina / 1000000) * boja_tekst_slozenost.vrednost / 100 / boja_tekst_boja.vredost * X_cena;
                    console.log('Povrsina teksta: ' + boja_tekst_povrsina);
                }
            }
            // II
            if (boja_tekst_povrsina_B != 0) {
                if (!boja_tekst_bojaBela_B) {
                    // Cena boje
                    var X_cena = void 0;
                    for (var _85 = 0, bojaCenaBoje_7 = bojaCenaBoje; _85 < bojaCenaBoje_7.length; _85++) {
                        var cb = bojaCenaBoje_7[_85];
                        if (cb.naziv == boja_tekst_boja_B.naziv) {
                            X_cena = cb.cena;
                        }
                    }
                    // Dodavanje na ukupnu cenu
                    boja_ukupnaCena +=
                        (boja_tekst_povrsina_B / 1000000) * boja_tekst_slozenost_B.vrednost / 100 / boja_tekst_boja_B.vredost * X_cena;
                    console.log('Povrsina teksta: ' + boja_tekst_povrsina_B);
                }
            }
            // Pozadina
            // I
            if (boja_pozadina_povrsina != 0) {
                if (boja_slike_povrsina != 0) {
                    boja_pozadina_povrsina -= boja_slike_povrsina;
                }
                if (boja_tekst_povrsina != 0) {
                    if (boja_tekst_bojaBela) {
                        boja_pozadina_povrsina =
                            boja_pozadina_povrsina *
                                ((100 - boja_tekst_slozenost.vrednost) / 100);
                    }
                }
                //Cena boje
                var X_cena = void 0;
                for (var _86 = 0, bojaCenaBoje_8 = bojaCenaBoje; _86 < bojaCenaBoje_8.length; _86++) {
                    var cb = bojaCenaBoje_8[_86];
                    if (cb.naziv == boja_pozadina_boja.naziv) {
                        X_cena = cb.cena;
                    }
                }
                // Dodavanje na ukupnu cenu
                boja_ukupnaCena +=
                    (boja_pozadina_povrsina / 1000000) / boja_pozadina_boja.vredost * X_cena;
                console.log('Povrsina pozadina: ' + boja_pozadina_povrsina);
            }
            // II
            if (boja_pozadina_povrsina_B != 0) {
                if (boja_slike_povrsina_B != 0) {
                    boja_pozadina_povrsina_B -= boja_slike_povrsina_B;
                }
                if (boja_tekst_povrsina_B != 0) {
                    if (boja_tekst_bojaBela_B) {
                        boja_pozadina_povrsina_B =
                            boja_pozadina_povrsina_B *
                                ((100 - boja_tekst_slozenost_B.vrednost) / 100);
                    }
                }
                //Cena boje
                var X_cena = void 0;
                for (var _87 = 0, bojaCenaBoje_9 = bojaCenaBoje; _87 < bojaCenaBoje_9.length; _87++) {
                    var cb = bojaCenaBoje_9[_87];
                    if (cb.naziv == boja_pozadina_boja_B.naziv) {
                        X_cena = cb.cena;
                    }
                }
                // Dodavanje na ukupnu cenu
                boja_ukupnaCena +=
                    (boja_pozadina_povrsina_B / 1000000) / boja_pozadina_boja_B.vredost * X_cena;
                console.log('Povrsina pozadina: ' + boja_pozadina_povrsina_B);
            }
            // Cena boje ukupan tiraz
            // Cena boje ukupan tiraz
            boja_ukupnaCena =
                boja_ukupnaCena * (res.tiraz * makulatura) * rastur;
        }
        // Brosura
        if (res.tipProizvoda == 'Brošura') {
            // Stampa unutrasnje korice
            var boja_UnutrasnjeKoriceB = !res.ub_korice_double;
            var boja_kblokSistem = res.ub_knjizniBlok_sistem;
            var papirKorice = void 0;
            var rastur = 1 + (res.ub_rastur / 100);
            if (!res.masinaZaStampuIstaB && !res.papirZaStampuKoricaB) {
                papirKorice = res.papirKorice;
            }
            else {
                papirKorice = res.papir;
            }
            // Ukupna stampana povrsina
            var boja_povrsinaStampe_korice_A = void 0; // Prednja Spoljna
            var boja_povrsinaStampe_korice_B = void 0; // Zadnja Spoljna
            var boja_povrsinaStampe_korice_C = void 0; // Prednja Spoljna
            var boja_povrsinaStampe_korice_D = void 0; // Zadnja Spoljna
            var boja_povrsinaStampe_kblok_A = void 0; // Knjizni blok par - NEPAR
            var boja_povrsinaStampe_kblok_B = void 0; // Knjizni blok PAR - NEPAR
            var boja_povrsinaStampe_kblok = void 0; // Knjizni blok copyPaste
            // Slike
            var boja_slike_povrsina_korice_A = 0;
            var boja_slike_povrsina_korice_B = 0;
            var boja_slike_povrsina_korice_C = 0;
            var boja_slike_povrsina_korice_D = 0;
            var boja_slike_povrsina_kblok_A = 0;
            var boja_slike_povrsina_kblok_B = 0;
            var boja_slike_povrsina_kblok = 0;
            // Pozadina
            var boja_pozadina_povrsina_korice_A = 0;
            var boja_pozadina_boja_korice_A = void 0;
            var boja_pozadina_povrsina_korice_B = 0;
            var boja_pozadina_boja_korice_B = void 0;
            var boja_pozadina_povrsina_korice_C = 0;
            var boja_pozadina_boja_korice_C = void 0;
            var boja_pozadina_povrsina_korice_D = 0;
            var boja_pozadina_boja_korice_D = void 0;
            var boja_pozadina_povrsina_kblok_A = 0;
            var boja_pozadina_boja_kblok_A = void 0;
            var boja_pozadina_povrsina_kblok_B = 0;
            var boja_pozadina_boja_kblok_B = void 0;
            var boja_pozadina_povrsina_kblok = 0;
            var boja_pozadina_boja_kblok = void 0;
            // Tekst
            var boja_tekst_povrsina_korice_A = 0;
            var boja_tekst_boja_korice_A = void 0;
            var boja_tekst_bojaBela_korice_A = false;
            var boja_tekst_slozenost_korice_A = void 0;
            var boja_tekst_povrsina_korice_B = 0;
            var boja_tekst_boja_korice_B = void 0;
            var boja_tekst_bojaBela_korice_B = false;
            var boja_tekst_slozenost_korice_B = void 0;
            var boja_tekst_povrsina_korice_C = 0;
            var boja_tekst_boja_korice_C = void 0;
            var boja_tekst_bojaBela_korice_C = false;
            var boja_tekst_slozenost_korice_C = void 0;
            var boja_tekst_povrsina_korice_D = 0;
            var boja_tekst_boja_korice_D = void 0;
            var boja_tekst_bojaBela_korice_D = false;
            var boja_tekst_slozenost_korice_D = void 0;
            var boja_tekst_povrsina_kblok_A = 0;
            var boja_tekst_boja_kblok_A = void 0;
            var boja_tekst_bojaBela_kblok_A = false;
            var boja_tekst_slozenost_kblok_A = void 0;
            var boja_tekst_povrsina_kblok_B = 0;
            var boja_tekst_boja_kblok_B = void 0;
            var boja_tekst_bojaBela_kblok_B = false;
            var boja_tekst_slozenost_kblok_B = void 0;
            var boja_tekst_povrsina_kblok = 0;
            var boja_tekst_boja_kblok = void 0;
            var boja_tekst_bojaBela_kblok = false;
            var boja_tekst_slozenost_kblok = void 0;
            // Stamapan pozadina sadrzi i tekst i slike
            var boja_razlicitSadrzaj_korice_A = true;
            var boja_razlicitSadrzaj_korice_B = true;
            var boja_razlicitSadrzaj_korice_C = true;
            var boja_razlicitSadrzaj_korice_D = true;
            var boja_razlicitSadrzaj_kblok_A = true;
            var boja_razlicitSadrzaj_kblok_B = true;
            var boja_razlicitSadrzaj_kblok = true;
            // Stampa preko cele povrsine ili deo povrsine
            // I 
            if (res.ub_povrsina_max_korice_A) {
                boja_povrsinaStampe_korice_A =
                    res.sirinaProizvoda * res.duzinaProizvoda;
            }
            else {
                boja_povrsinaStampe_korice_A =
                    res.ub_povrsina_sirina_korice_A * res.ub_povrsina_duzina_korice_A;
            }
            // II 
            if (res.ub_povrsina_max_korice_B) {
                boja_povrsinaStampe_korice_B =
                    res.sirinaProizvoda * res.duzinaProizvoda;
            }
            else {
                boja_povrsinaStampe_korice_B =
                    res.ub_povrsina_sirina_korice_B * res.ub_povrsina_duzina_korice_B;
            }
            // III 
            if (boja_UnutrasnjeKoriceB && res.ub_povrsina_max_korice_C) {
                boja_povrsinaStampe_korice_C =
                    res.sirinaProizvoda * res.duzinaProizvoda;
            }
            else {
                boja_povrsinaStampe_korice_C =
                    res.ub_povrsina_sirina_korice_C * res.ub_povrsina_duzina_korice_C;
            }
            // IV
            if (boja_UnutrasnjeKoriceB && res.ub_povrsina_max_korice_D) {
                boja_povrsinaStampe_korice_D =
                    res.sirinaProizvoda * res.duzinaProizvoda;
            }
            else {
                boja_povrsinaStampe_korice_D =
                    res.ub_povrsina_sirina_korice_D * res.ub_povrsina_duzina_korice_D;
            }
            // K / I
            if (boja_kblokSistem == 'Par-nepar' && res.ub_povrsina_max_kblok_A) {
                boja_povrsinaStampe_kblok_A =
                    res.sirinaProizvoda * res.duzinaProizvoda;
            }
            else {
                boja_povrsinaStampe_kblok_A =
                    res.ub_povrsina_sirina_kblok_A * res.ub_povrsina_duzina_kblok_A;
            }
            // K / II 
            if (boja_kblokSistem == 'Par-nepar' && res.ub_povrsina_max_kblok_B) {
                boja_povrsinaStampe_kblok_B =
                    res.sirinaProizvoda * res.duzinaProizvoda;
            }
            else {
                boja_povrsinaStampe_kblok_B =
                    res.ub_povrsina_sirina_kblok_B * res.ub_povrsina_duzina_kblok_B;
            }
            // K / III 
            if (boja_kblokSistem == 'Copy-paste' && res.ub_povrsina_max_kblok) {
                boja_povrsinaStampe_kblok =
                    res.sirinaProizvoda * res.duzinaProizvoda;
            }
            else {
                boja_povrsinaStampe_kblok =
                    res.ub_povrsina_sirina_kblok * res.ub_povrsina_duzina_kblok;
            }
            // K / IV 
            if (boja_kblokSistem == 'Ukupno' && res.ub_povrsina_max_kblok) {
                boja_povrsinaStampe_kblok =
                    res.sirinaProizvoda * res.duzinaProizvoda;
            }
            else {
                boja_povrsinaStampe_kblok =
                    res.ub_povrsina_sirina_kblok * res.ub_povrsina_duzina_kblok;
            }
            // Preko cele povrsine slika
            // I
            if (res.ub_sadrzaj_maxSlika_korice_A) {
                boja_razlicitSadrzaj_korice_A = false;
                boja_slike_povrsina_korice_A = boja_povrsinaStampe_korice_A;
            }
            // II
            if (res.ub_sadrzaj_maxSlika_korice_B) {
                boja_razlicitSadrzaj_korice_B = false;
                boja_slike_povrsina_korice_B = boja_povrsinaStampe_korice_B;
            }
            // III
            if (boja_UnutrasnjeKoriceB && res.ub_sadrzaj_maxSlika_korice_C) {
                boja_razlicitSadrzaj_korice_C = false;
                boja_slike_povrsina_korice_C = boja_povrsinaStampe_korice_C;
            }
            // IV
            if (boja_UnutrasnjeKoriceB && res.ub_sadrzaj_maxSlika_korice_D) {
                boja_razlicitSadrzaj_korice_D = false;
                boja_slike_povrsina_korice_D = boja_povrsinaStampe_korice_D;
            }
            // K / I
            if (boja_kblokSistem == 'Par-nepar' && res.ub_sadrzaj_maxSlika_kblok_A) {
                boja_razlicitSadrzaj_kblok_A = false;
                boja_slike_povrsina_kblok_A = boja_povrsinaStampe_kblok_A;
            }
            // K / II
            if (boja_kblokSistem == 'Par-nepar' && res.ub_sadrzaj_maxSlika_kblok_B) {
                boja_razlicitSadrzaj_kblok_B = false;
                boja_slike_povrsina_kblok_B = boja_povrsinaStampe_kblok_B;
            }
            // K / III
            if (boja_kblokSistem == 'Copy-paste' && res.ub_sadrzaj_maxSlika_kblok) {
                boja_razlicitSadrzaj_kblok = false;
                boja_slike_povrsina_kblok = boja_povrsinaStampe_kblok;
            }
            // Cela povrsina stampe obojena u boju
            // I
            if (res.ub_pozadina_korice_A) {
                boja_pozadina_povrsina_korice_A = boja_povrsinaStampe_korice_A;
                boja_pozadina_boja_korice_A = res.ub_pozadinaBoja_korice_A;
            }
            // II
            if (res.ub_pozadina_korice_B) {
                boja_pozadina_povrsina_korice_B = boja_povrsinaStampe_korice_B;
                boja_pozadina_boja_korice_B = res.ub_pozadinaBoja_korice_B;
            }
            // III
            if (boja_UnutrasnjeKoriceB && res.ub_pozadina_korice_C) {
                boja_pozadina_povrsina_korice_C = boja_povrsinaStampe_korice_C;
                boja_pozadina_boja_korice_C = res.ub_pozadinaBoja_korice_C;
            }
            // IV
            if (boja_UnutrasnjeKoriceB && res.ub_pozadina_korice_D) {
                boja_pozadina_povrsina_korice_D = boja_povrsinaStampe_korice_D;
                boja_pozadina_boja_korice_D = res.ub_pozadinaBoja_korice_D;
            }
            // K / I
            if (boja_kblokSistem == 'Par-nepar' && res.ub_pozadina_kblok_A) {
                boja_pozadina_povrsina_kblok_A = boja_povrsinaStampe_kblok_A;
                boja_pozadina_boja_kblok_A = res.ub_pozadinaBoja_kblok_A;
            }
            // K / II
            if (boja_kblokSistem == 'Par-nepar' && res.ub_pozadina_kblok_B) {
                boja_pozadina_povrsina_kblok_B = boja_povrsinaStampe_kblok_B;
                boja_pozadina_boja_kblok_B = res.ub_pozadinaBoja_kblok_B;
            }
            // K / III
            if (boja_kblokSistem == 'Copy-paste' && res.ub_pozadina_kblok) {
                boja_pozadina_povrsina_kblok = boja_povrsinaStampe_kblok;
                boja_pozadina_boja_kblok = res.ub_pozadinaBoja_kblok;
            }
            // Preko cele povrsine tekst
            // I
            if (res.ub_sadrzaj_maxTekst_korice_A) {
                boja_razlicitSadrzaj_korice_A = false;
                boja_tekst_povrsina_korice_A = boja_povrsinaStampe_korice_A;
                // Boja teskta bela ili druga boja
                if (res.ub_pozadina_korice_A) {
                    boja_tekst_bojaBela_korice_A = true;
                }
                else {
                    boja_tekst_boja_korice_A = res.ub_sadrzaj_bojaTeksta_korice_A;
                }
                // Slozenost teksta
                boja_tekst_slozenost_korice_A = res.ub_sadrzaj_slozenostTeksta_korice_A;
            }
            // II
            if (res.ub_sadrzaj_maxTekst_korice_B) {
                boja_razlicitSadrzaj_korice_B = false;
                boja_tekst_povrsina_korice_B = boja_povrsinaStampe_korice_B;
                // Boja teskta bela ili druga boja
                if (res.ub_pozadina_korice_B) {
                    boja_tekst_bojaBela_korice_B = true;
                }
                else {
                    boja_tekst_boja_korice_B = res.ub_sadrzaj_bojaTeksta_korice_B;
                }
                // Slozenost teksta
                boja_tekst_slozenost_korice_B = res.ub_sadrzaj_slozenostTeksta_korice_B;
            }
            // III
            if (boja_UnutrasnjeKoriceB && res.ub_sadrzaj_maxTekst_korice_C) {
                boja_razlicitSadrzaj_korice_C = false;
                boja_tekst_povrsina_korice_C = boja_povrsinaStampe_korice_C;
                // Boja teskta bela ili druga boja
                if (res.ub_pozadina_korice_C) {
                    boja_tekst_bojaBela_korice_C = true;
                }
                else {
                    boja_tekst_boja_korice_C = res.ub_sadrzaj_bojaTeksta_korice_C;
                }
                // Slozenost teksta
                boja_tekst_slozenost_korice_C = res.ub_sadrzaj_slozenostTeksta_korice_C;
            }
            // IV
            if (boja_UnutrasnjeKoriceB && res.ub_sadrzaj_maxTekst_korice_D) {
                boja_razlicitSadrzaj_korice_D = false;
                boja_tekst_povrsina_korice_D = boja_povrsinaStampe_korice_D;
                // Boja teskta bela ili druga boja
                if (res.ub_pozadina_korice_D) {
                    boja_tekst_bojaBela_korice_D = true;
                }
                else {
                    boja_tekst_boja_korice_D = res.ub_sadrzaj_bojaTeksta_korice_D;
                }
                // Slozenost teksta
                boja_tekst_slozenost_korice_D = res.ub_sadrzaj_slozenostTeksta_korice_D;
            }
            // K / I
            if (boja_kblokSistem == 'Par-nepar' && res.ub_sadrzaj_maxTekst_kblok_A) {
                boja_razlicitSadrzaj_kblok_A = false;
                boja_tekst_povrsina_kblok_A = boja_povrsinaStampe_kblok_A;
                // Boja teskta bela ili druga boja
                if (res.ub_pozadina_kblok_A) {
                    boja_tekst_bojaBela_kblok_A = true;
                }
                else {
                    boja_tekst_boja_kblok_A = res.ub_sadrzaj_bojaTeksta_kblok_A;
                }
                // Slozenost teksta
                boja_tekst_slozenost_kblok_A = res.ub_sadrzaj_slozenostTeksta_kblok_A;
            }
            // K / II
            if (boja_kblokSistem == 'Par-nepar' && res.ub_sadrzaj_maxTekst_kblok_B) {
                boja_razlicitSadrzaj_kblok_B = false;
                boja_tekst_povrsina_kblok_B = boja_povrsinaStampe_kblok_B;
                // Boja teskta bela ili druga boja
                if (res.ub_pozadina_kblok_B) {
                    boja_tekst_bojaBela_kblok_B = true;
                }
                else {
                    boja_tekst_boja_kblok_B = res.ub_sadrzaj_bojaTeksta_kblok_B;
                }
                // Slozenost teksta
                boja_tekst_slozenost_kblok_B = res.ub_sadrzaj_slozenostTeksta_kblok_B;
            }
            // K / III
            if (boja_kblokSistem == 'Copy-paste' && res.ub_sadrzaj_maxTekst_kblok) {
                boja_razlicitSadrzaj_kblok = false;
                boja_tekst_povrsina_kblok = boja_povrsinaStampe_kblok;
                // Boja teskta bela ili druga boja
                if (res.ub_pozadina_kblok) {
                    boja_tekst_bojaBela_kblok = true;
                }
                else {
                    boja_tekst_boja_kblok = res.ub_sadrzaj_bojaTeksta_kblok;
                }
                // Slozenost teksta
                boja_tekst_slozenost_kblok = res.ub_sadrzaj_slozenostTeksta_kblok;
            }
            // Mesovit sadrzaj
            // I
            if (boja_razlicitSadrzaj_korice_A) {
                // Slike
                if (res.ub_sadrzaj_brSlika_korice_A != 0) {
                    for (var _88 = 0, _89 = res.ub_sadrzaj_dimenzijeSlika_korice_A; _88 < _89.length; _88++) {
                        var s = _89[_88];
                        boja_slike_povrsina_korice_A +=
                            s.x * s.y;
                    }
                }
                if (res.ub_sadrzaj_tekstOstatak_korice_A) {
                    boja_tekst_boja_korice_A = res.ub_sadrzaj_bojaTeksta_korice_A;
                    boja_tekst_slozenost_korice_A = res.ub_sadrzaj_slozenostTeksta_korice_A;
                    boja_tekst_povrsina_korice_A =
                        boja_povrsinaStampe_korice_A - boja_slike_povrsina_korice_A;
                }
                // Tekstovi
                if (!res.ub_sadrzaj_tekstOstatak_korice_A || res.ub_sadrzaj_tekstPrestampavanje_korice_A) {
                    if (res.ub_sadrzaj_brSlika_korice_A != 0) {
                        for (var _90 = 0, _91 = res.ub_sadrzaj_dimenzijeTeksta_korice_A; _90 < _91.length; _90++) {
                            var t = _91[_90];
                            boja_tekst_povrsina_korice_A +=
                                t.x * t.y;
                        }
                        // Boja teksta
                        if (res.ub_pozadina_korice_A) {
                            if (res.ub_sadrzaj_tekstBeli_korice_A) {
                                boja_tekst_bojaBela_korice_A = true;
                            }
                        }
                        else {
                            boja_tekst_boja_korice_A = res.ub_sadrzaj_bojaTeksta_korice_A;
                        }
                        // Slozenost teksta
                        boja_tekst_slozenost_korice_A = res.ub_sadrzaj_slozenostTeksta_korice_A;
                    }
                }
            }
            // II
            if (boja_razlicitSadrzaj_korice_B) {
                // Slike
                if (res.ub_sadrzaj_brSlika_korice_B != 0) {
                    for (var _92 = 0, _93 = res.ub_sadrzaj_dimenzijeSlika_korice_B; _92 < _93.length; _92++) {
                        var s = _93[_92];
                        boja_slike_povrsina_korice_B +=
                            s.x * s.y;
                    }
                }
                if (res.ub_sadrzaj_tekstOstatak_korice_B) {
                    boja_tekst_boja_korice_B = res.ub_sadrzaj_bojaTeksta_korice_B;
                    boja_tekst_slozenost_korice_B = res.ub_sadrzaj_slozenostTeksta_korice_B;
                    boja_tekst_povrsina_korice_B =
                        boja_povrsinaStampe_korice_B - boja_slike_povrsina_korice_B;
                }
                // Tekstovi
                if (!res.ub_sadrzaj_tekstOstatak_korice_B || res.ub_sadrzaj_tekstPrestampavanje_korice_B) {
                    if (res.ub_sadrzaj_brSlika_korice_B != 0) {
                        for (var _94 = 0, _95 = res.ub_sadrzaj_dimenzijeTeksta_korice_B; _94 < _95.length; _94++) {
                            var t = _95[_94];
                            boja_tekst_povrsina_korice_B +=
                                t.x * t.y;
                        }
                        // Boja teksta
                        if (res.ub_pozadina_korice_B) {
                            if (res.ub_sadrzaj_tekstBeli_korice_B) {
                                boja_tekst_bojaBela_korice_B = true;
                            }
                        }
                        else {
                            boja_tekst_boja_korice_B = res.ub_sadrzaj_bojaTeksta_korice_B;
                        }
                        // Slozenost teksta
                        boja_tekst_slozenost_korice_B = res.ub_sadrzaj_slozenostTeksta_korice_B;
                    }
                }
            }
            // III - p
            if (boja_UnutrasnjeKoriceB && boja_razlicitSadrzaj_korice_C) {
                // Slike
                if (res.ub_sadrzaj_brSlika_korice_C != 0) {
                    for (var _96 = 0, _97 = res.ub_sadrzaj_dimenzijeSlika_korice_C; _96 < _97.length; _96++) {
                        var s = _97[_96];
                        boja_slike_povrsina_korice_C +=
                            s.x * s.y;
                    }
                }
                if (res.ub_sadrzaj_tekstOstatak_korice_C) {
                    boja_tekst_boja_korice_C = res.ub_sadrzaj_bojaTeksta_korice_C;
                    boja_tekst_slozenost_korice_C = res.ub_sadrzaj_slozenostTeksta_korice_C;
                    boja_tekst_povrsina_korice_C =
                        boja_povrsinaStampe_korice_C - boja_slike_povrsina_korice_C;
                }
                // Tekstovi
                if (!res.ub_sadrzaj_tekstOstatak_korice_C || res.ub_sadrzaj_tekstPrestampavanje_korice_C) {
                    if (res.ub_sadrzaj_brSlika_korice_C != 0) {
                        for (var _98 = 0, _99 = res.ub_sadrzaj_dimenzijeTeksta_korice_C; _98 < _99.length; _98++) {
                            var t = _99[_98];
                            boja_tekst_povrsina_korice_C +=
                                t.x * t.y;
                        }
                        // Boja teksta
                        if (res.ub_pozadina_korice_C) {
                            if (res.ub_sadrzaj_tekstBeli_korice_C) {
                                boja_tekst_bojaBela_korice_C = true;
                            }
                        }
                        else {
                            boja_tekst_boja_korice_C = res.ub_sadrzaj_bojaTeksta_korice_C;
                        }
                        // Slozenost teksta
                        boja_tekst_slozenost_korice_C = res.ub_sadrzaj_slozenostTeksta_korice_C;
                    }
                }
            }
            // IV - p
            if (boja_UnutrasnjeKoriceB && boja_razlicitSadrzaj_korice_D) {
                // Slike
                if (res.ub_sadrzaj_brSlika_korice_D != 0) {
                    for (var _100 = 0, _101 = res.ub_sadrzaj_dimenzijeSlika_korice_D; _100 < _101.length; _100++) {
                        var s = _101[_100];
                        boja_slike_povrsina_korice_D +=
                            s.x * s.y;
                    }
                }
                if (res.ub_sadrzaj_tekstOstatak_korice_D) {
                    boja_tekst_boja_korice_D = res.ub_sadrzaj_bojaTeksta_korice_D;
                    boja_tekst_slozenost_korice_D = res.ub_sadrzaj_slozenostTeksta_korice_D;
                    boja_tekst_povrsina_korice_D =
                        boja_povrsinaStampe_korice_D - boja_slike_povrsina_korice_D;
                }
                // Tekstovi
                if (!res.ub_sadrzaj_tekstOstatak_korice_D || res.ub_sadrzaj_tekstPrestampavanje_korice_D) {
                    if (res.ub_sadrzaj_brSlika_korice_D != 0) {
                        for (var _102 = 0, _103 = res.ub_sadrzaj_dimenzijeTeksta_korice_D; _102 < _103.length; _102++) {
                            var t = _103[_102];
                            boja_tekst_povrsina_korice_D +=
                                t.x * t.y;
                        }
                        // Boja teksta
                        if (res.ub_pozadina_korice_D) {
                            if (res.ub_sadrzaj_tekstBeli_korice_D) {
                                boja_tekst_bojaBela_korice_D = true;
                            }
                        }
                        else {
                            boja_tekst_boja_korice_D = res.ub_sadrzaj_bojaTeksta_korice_D;
                        }
                        // Slozenost teksta
                        boja_tekst_slozenost_korice_D = res.ub_sadrzaj_slozenostTeksta_korice_D;
                    }
                }
            }
            // K / I - p
            if (boja_kblokSistem == 'Par-nepar' && boja_razlicitSadrzaj_kblok_A) {
                // Slike
                if (res.ub_sadrzaj_brSlika_kblok_A != 0) {
                    for (var _104 = 0, _105 = res.ub_sadrzaj_dimenzijeSlika_kblok_A; _104 < _105.length; _104++) {
                        var s = _105[_104];
                        boja_slike_povrsina_kblok_A +=
                            s.x * s.y;
                    }
                }
                if (res.ub_sadrzaj_tekstOstatak_kblok_A) {
                    boja_tekst_boja_kblok_A = res.ub_sadrzaj_bojaTeksta_kblok_A;
                    boja_tekst_slozenost_kblok_A = res.ub_sadrzaj_slozenostTeksta_kblok_A;
                    boja_tekst_povrsina_kblok_A =
                        boja_povrsinaStampe_kblok_A - boja_slike_povrsina_kblok_A;
                }
                // Tekstovi
                if (!res.ub_sadrzaj_tekstOstatak_kblok_A || res.ub_sadrzaj_tekstPrestampavanje_kblok_A) {
                    if (res.ub_sadrzaj_brSlika_kblok_A != 0) {
                        for (var _106 = 0, _107 = res.ub_sadrzaj_dimenzijeTeksta_kblok_A; _106 < _107.length; _106++) {
                            var t = _107[_106];
                            boja_tekst_povrsina_kblok_A +=
                                t.x * t.y;
                        }
                        // Boja teksta
                        if (res.ub_pozadina_kblok_A) {
                            if (res.ub_sadrzaj_tekstBeli_kblok_A) {
                                boja_tekst_bojaBela_kblok_A = true;
                            }
                        }
                        else {
                            boja_tekst_boja_kblok_A = res.ub_sadrzaj_bojaTeksta_kblok_A;
                        }
                        // Slozenost teksta
                        boja_tekst_slozenost_kblok_A = res.ub_sadrzaj_slozenostTeksta_kblok_A;
                    }
                }
            }
            // K / II - p
            if (boja_kblokSistem == 'Par-nepar' && boja_razlicitSadrzaj_kblok_B) {
                // Slike
                if (res.ub_sadrzaj_brSlika_kblok_B != 0) {
                    for (var _108 = 0, _109 = res.ub_sadrzaj_dimenzijeSlika_kblok_B; _108 < _109.length; _108++) {
                        var s = _109[_108];
                        boja_slike_povrsina_kblok_B +=
                            s.x * s.y;
                    }
                }
                if (res.ub_sadrzaj_tekstOstatak_kblok_B) {
                    boja_tekst_boja_kblok_B = res.ub_sadrzaj_bojaTeksta_kblok_B;
                    boja_tekst_slozenost_kblok_B = res.ub_sadrzaj_slozenostTeksta_kblok_B;
                    boja_tekst_povrsina_kblok_B =
                        boja_povrsinaStampe_kblok_B - boja_slike_povrsina_kblok_B;
                }
                // Tekstovi
                if (!res.ub_sadrzaj_tekstOstatak_kblok_B || res.ub_sadrzaj_tekstPrestampavanje_kblok_B) {
                    if (res.ub_sadrzaj_brSlika_kblok_B != 0) {
                        for (var _110 = 0, _111 = res.ub_sadrzaj_dimenzijeTeksta_kblok_B; _110 < _111.length; _110++) {
                            var t = _111[_110];
                            boja_tekst_povrsina_kblok_B +=
                                t.x * t.y;
                        }
                        // Boja teksta
                        if (res.ub_pozadina_kblok_B) {
                            if (res.ub_sadrzaj_tekstBeli_kblok_B) {
                                boja_tekst_bojaBela_kblok_B = true;
                            }
                        }
                        else {
                            boja_tekst_boja_kblok_B = res.ub_sadrzaj_bojaTeksta_kblok_B;
                        }
                        // Slozenost teksta
                        boja_tekst_slozenost_kblok_B = res.ub_sadrzaj_slozenostTeksta_kblok_B;
                    }
                }
            }
            // K / III - p
            if (boja_kblokSistem == 'Copy-paste' && boja_razlicitSadrzaj_kblok) {
                // Slike
                if (res.ub_sadrzaj_brSlika_kblok != 0) {
                    for (var _112 = 0, _113 = res.ub_sadrzaj_dimenzijeSlika_kblok; _112 < _113.length; _112++) {
                        var s = _113[_112];
                        boja_slike_povrsina_kblok +=
                            s.x * s.y;
                    }
                }
                if (res.ub_sadrzaj_tekstOstatak_kblok) {
                    boja_tekst_slozenost_kblok = res.ub_sadrzaj_slozenostTeksta_kblok;
                    boja_tekst_boja_kblok = res.ub_sadrzaj_bojaTeksta_kblok;
                    boja_tekst_povrsina_kblok =
                        boja_povrsinaStampe_kblok - boja_slike_povrsina_kblok;
                }
                // Tekstovi
                if (!res.ub_sadrzaj_tekstOstatak_kblok || res.ub_sadrzaj_tekstPrestampavanje_kblok) {
                    if (res.ub_sadrzaj_brSlika_kblok != 0) {
                        for (var _114 = 0, _115 = res.ub_sadrzaj_dimenzijeTeksta_kblok; _114 < _115.length; _114++) {
                            var t = _115[_114];
                            boja_tekst_povrsina_kblok +=
                                t.x * t.y;
                        }
                        // Boja teksta
                        if (res.ub_pozadina_kblok) {
                            if (res.ub_sadrzaj_tekstBeli_kblok) {
                                boja_tekst_bojaBela_kblok = true;
                            }
                        }
                        else {
                            boja_tekst_boja_kblok = res.ub_sadrzaj_bojaTeksta_kblok;
                        }
                        // Slozenost teksta
                        boja_tekst_slozenost_kblok = res.ub_sadrzaj_slozenostTeksta_kblok;
                    }
                }
            }
            // K / IV - p
            if (boja_kblokSistem == 'Ukupno' && boja_razlicitSadrzaj_kblok) {
                // Text
                boja_tekst_povrsina_kblok = boja_povrsinaStampe_kblok;
                // Slike
                if (res.ub_sadrzaj_brSlika_kblok != 0) {
                    for (var _116 = 0, _117 = res.ub_sadrzaj_dimenzijeSlika_kblok; _116 < _117.length; _116++) {
                        var s = _117[_116];
                        boja_slike_povrsina_kblok +=
                            s.x * s.y;
                        boja_tekst_povrsina_kblok -=
                            s.x * s.y;
                    }
                }
                // Boja teksta
                boja_tekst_boja_kblok = res.ub_sadrzaj_bojaTeksta_kblok;
                // Slozenost teksta
                boja_tekst_slozenost_kblok = res.ub_sadrzaj_slozenostTeksta_kblok;
            }
            // ***
            // Racun
            // Slike
            // I
            if (boja_slike_povrsina_korice_A != 0) {
                var C_boja = void 0;
                var C_zauzetos = void 0;
                var C_cena = void 0;
                var M_boja = void 0;
                var M_zauzetos = void 0;
                var M_cena = void 0;
                var Y_boja = void 0;
                var Y_zauzetos = void 0;
                var Y_cena = void 0;
                var B_boja = void 0;
                var B_zauzetos = void 0;
                var B_cena = void 0;
                // U slucaju da tekst prelazi preko slike i da je beo
                if (boja_tekst_povrsina_korice_A != 0) {
                    if (boja_tekst_bojaBela_korice_A && !res.ub_pozadina_korice_A) {
                        boja_slike_povrsina_korice_A =
                            boja_slike_povrsina_korice_A *
                                ((100 - boja_tekst_slozenost_korice_A.vrednost) / 100);
                    }
                }
                // Definisanje boja za CMYK sliku
                for (var _118 = 0, _119 = this.boje; _118 < _119.length; _118++) {
                    var b = _119[_118];
                    if (b.tipPapira.naziv === papirKorice.tipPapira.naziv) {
                        if (b.naziv == 'Cyan') {
                            C_boja = b;
                        }
                        if (b.naziv == 'Magenta') {
                            M_boja = b;
                        }
                        if (b.naziv == 'Yellow') {
                            Y_boja = b;
                        }
                        if (b.naziv == 'Black') {
                            B_boja = b;
                        }
                    }
                }
                // Definisanje procenta zauzeuzetosti CMYK boja
                for (var _120 = 0, _121 = this.procentiZpovrisine; _120 < _121.length; _120++) {
                    var z = _121[_120];
                    if (C_boja.naziv == z.vrstaPosla) {
                        C_zauzetos = z;
                    }
                    if (M_boja.naziv == z.vrstaPosla) {
                        M_zauzetos = z;
                    }
                    if (Y_boja.naziv == z.vrstaPosla) {
                        Y_zauzetos = z;
                    }
                    if (B_boja.naziv == z.vrstaPosla) {
                        B_zauzetos = z;
                    }
                }
                // Definisanje cena boja
                for (var _122 = 0, bojaCenaBoje_10 = bojaCenaBoje; _122 < bojaCenaBoje_10.length; _122++) {
                    var cb = bojaCenaBoje_10[_122];
                    if (cb.naziv == C_boja.naziv) {
                        C_cena = cb.cena;
                    }
                    if (cb.naziv == M_boja.naziv) {
                        M_cena = cb.cena;
                    }
                    if (cb.naziv == Y_boja.naziv) {
                        Y_cena = cb.cena;
                    }
                    if (cb.naziv == B_boja.naziv) {
                        B_cena = cb.cena;
                    }
                }
                // Dodavanje na ukupnu cenu
                boja_ukupnaCena +=
                    (boja_slike_povrsina_korice_A / 1000000) * C_zauzetos.vrednost / 100 / C_boja.vredost * C_cena +
                        (boja_slike_povrsina_korice_A / 1000000) * M_zauzetos.vrednost / 100 / M_boja.vredost * M_cena +
                        (boja_slike_povrsina_korice_A / 1000000) * Y_zauzetos.vrednost / 100 / Y_boja.vredost * Y_cena +
                        (boja_slike_povrsina_korice_A / 1000000) * B_zauzetos.vrednost / 100 / B_boja.vredost * B_cena;
                console.log('Povrsina slika: ' + boja_slike_povrsina_korice_A);
            }
            // II
            if (boja_slike_povrsina_korice_B != 0) {
                var C_boja = void 0;
                var C_zauzetos = void 0;
                var C_cena = void 0;
                var M_boja = void 0;
                var M_zauzetos = void 0;
                var M_cena = void 0;
                var Y_boja = void 0;
                var Y_zauzetos = void 0;
                var Y_cena = void 0;
                var B_boja = void 0;
                var B_zauzetos = void 0;
                var B_cena = void 0;
                // U slucaju da tekst prelazi preko slike i da je beo
                if (boja_tekst_povrsina_korice_B != 0) {
                    if (boja_tekst_bojaBela_korice_B && !res.ub_pozadina_korice_B) {
                        boja_slike_povrsina_korice_B =
                            boja_slike_povrsina_korice_B *
                                ((100 - boja_tekst_slozenost_korice_B.vrednost) / 100);
                    }
                }
                // Definisanje boja za CMYK sliku
                for (var _123 = 0, _124 = this.boje; _123 < _124.length; _123++) {
                    var b = _124[_123];
                    if (b.tipPapira.naziv === papirKorice.tipPapira.naziv) {
                        if (b.naziv == 'Cyan') {
                            C_boja = b;
                        }
                        if (b.naziv == 'Magenta') {
                            M_boja = b;
                        }
                        if (b.naziv == 'Yellow') {
                            Y_boja = b;
                        }
                        if (b.naziv == 'Black') {
                            B_boja = b;
                        }
                    }
                }
                // Definisanje procenta zauzeuzetosti CMYK boja
                for (var _125 = 0, _126 = this.procentiZpovrisine; _125 < _126.length; _125++) {
                    var z = _126[_125];
                    if (C_boja.naziv == z.vrstaPosla) {
                        C_zauzetos = z;
                    }
                    if (M_boja.naziv == z.vrstaPosla) {
                        M_zauzetos = z;
                    }
                    if (Y_boja.naziv == z.vrstaPosla) {
                        Y_zauzetos = z;
                    }
                    if (B_boja.naziv == z.vrstaPosla) {
                        B_zauzetos = z;
                    }
                }
                // Definisanje cena boja
                for (var _127 = 0, bojaCenaBoje_11 = bojaCenaBoje; _127 < bojaCenaBoje_11.length; _127++) {
                    var cb = bojaCenaBoje_11[_127];
                    if (cb.naziv == C_boja.naziv) {
                        C_cena = cb.cena;
                    }
                    if (cb.naziv == M_boja.naziv) {
                        M_cena = cb.cena;
                    }
                    if (cb.naziv == Y_boja.naziv) {
                        Y_cena = cb.cena;
                    }
                    if (cb.naziv == B_boja.naziv) {
                        B_cena = cb.cena;
                    }
                }
                // Dodavanje na ukupnu cenu
                boja_ukupnaCena +=
                    (boja_slike_povrsina_korice_B / 1000000) * C_zauzetos.vrednost / 100 / C_boja.vredost * C_cena +
                        (boja_slike_povrsina_korice_B / 1000000) * M_zauzetos.vrednost / 100 / M_boja.vredost * M_cena +
                        (boja_slike_povrsina_korice_B / 1000000) * Y_zauzetos.vrednost / 100 / Y_boja.vredost * Y_cena +
                        (boja_slike_povrsina_korice_B / 1000000) * B_zauzetos.vrednost / 100 / B_boja.vredost * B_cena;
                console.log('Povrsina slika: ' + boja_slike_povrsina_korice_B);
            }
            // III
            if (boja_UnutrasnjeKoriceB && boja_slike_povrsina_korice_C != 0) {
                var C_boja = void 0;
                var C_zauzetos = void 0;
                var C_cena = void 0;
                var M_boja = void 0;
                var M_zauzetos = void 0;
                var M_cena = void 0;
                var Y_boja = void 0;
                var Y_zauzetos = void 0;
                var Y_cena = void 0;
                var B_boja = void 0;
                var B_zauzetos = void 0;
                var B_cena = void 0;
                // U slucaju da tekst prelazi preko slike i da je beo
                if (boja_tekst_povrsina_korice_C != 0) {
                    if (boja_tekst_bojaBela_korice_C && !res.ub_pozadina_korice_C) {
                        boja_slike_povrsina_korice_C =
                            boja_slike_povrsina_korice_C *
                                ((100 - boja_tekst_slozenost_korice_C.vrednost) / 100);
                    }
                }
                // Definisanje boja za CMYK sliku
                for (var _128 = 0, _129 = this.boje; _128 < _129.length; _128++) {
                    var b = _129[_128];
                    if (b.tipPapira.naziv === papirKorice.tipPapira.naziv) {
                        if (b.naziv == 'Cyan') {
                            C_boja = b;
                        }
                        if (b.naziv == 'Magenta') {
                            M_boja = b;
                        }
                        if (b.naziv == 'Yellow') {
                            Y_boja = b;
                        }
                        if (b.naziv == 'Black') {
                            B_boja = b;
                        }
                    }
                }
                // Definisanje procenta zauzeuzetosti CMYK boja
                for (var _130 = 0, _131 = this.procentiZpovrisine; _130 < _131.length; _130++) {
                    var z = _131[_130];
                    if (C_boja.naziv == z.vrstaPosla) {
                        C_zauzetos = z;
                    }
                    if (M_boja.naziv == z.vrstaPosla) {
                        M_zauzetos = z;
                    }
                    if (Y_boja.naziv == z.vrstaPosla) {
                        Y_zauzetos = z;
                    }
                    if (B_boja.naziv == z.vrstaPosla) {
                        B_zauzetos = z;
                    }
                }
                // Definisanje cena boja
                for (var _132 = 0, bojaCenaBoje_12 = bojaCenaBoje; _132 < bojaCenaBoje_12.length; _132++) {
                    var cb = bojaCenaBoje_12[_132];
                    if (cb.naziv == C_boja.naziv) {
                        C_cena = cb.cena;
                    }
                    if (cb.naziv == M_boja.naziv) {
                        M_cena = cb.cena;
                    }
                    if (cb.naziv == Y_boja.naziv) {
                        Y_cena = cb.cena;
                    }
                    if (cb.naziv == B_boja.naziv) {
                        B_cena = cb.cena;
                    }
                }
                // Dodavanje na ukupnu cenu
                boja_ukupnaCena +=
                    (boja_slike_povrsina_korice_C / 1000000) * C_zauzetos.vrednost / 100 / C_boja.vredost * C_cena +
                        (boja_slike_povrsina_korice_C / 1000000) * M_zauzetos.vrednost / 100 / M_boja.vredost * M_cena +
                        (boja_slike_povrsina_korice_C / 1000000) * Y_zauzetos.vrednost / 100 / Y_boja.vredost * Y_cena +
                        (boja_slike_povrsina_korice_C / 1000000) * B_zauzetos.vrednost / 100 / B_boja.vredost * B_cena;
                console.log('Povrsina slika: ' + boja_slike_povrsina_korice_C);
            }
            // IV
            if (boja_UnutrasnjeKoriceB && boja_slike_povrsina_korice_D != 0) {
                var C_boja = void 0;
                var C_zauzetos = void 0;
                var C_cena = void 0;
                var M_boja = void 0;
                var M_zauzetos = void 0;
                var M_cena = void 0;
                var Y_boja = void 0;
                var Y_zauzetos = void 0;
                var Y_cena = void 0;
                var B_boja = void 0;
                var B_zauzetos = void 0;
                var B_cena = void 0;
                // U slucaju da tekst prelazi preko slike i da je beo
                if (boja_tekst_povrsina_korice_D != 0) {
                    if (boja_tekst_bojaBela_korice_D && !res.ub_pozadina_korice_D) {
                        boja_slike_povrsina_korice_D =
                            boja_slike_povrsina_korice_D *
                                ((100 - boja_tekst_slozenost_korice_D.vrednost) / 100);
                    }
                }
                // Definisanje boja za CMYK sliku
                for (var _133 = 0, _134 = this.boje; _133 < _134.length; _133++) {
                    var b = _134[_133];
                    if (b.tipPapira.naziv === papirKorice.tipPapira.naziv) {
                        if (b.naziv == 'Cyan') {
                            C_boja = b;
                        }
                        if (b.naziv == 'Magenta') {
                            M_boja = b;
                        }
                        if (b.naziv == 'Yellow') {
                            Y_boja = b;
                        }
                        if (b.naziv == 'Black') {
                            B_boja = b;
                        }
                    }
                }
                // Definisanje procenta zauzeuzetosti CMYK boja
                for (var _135 = 0, _136 = this.procentiZpovrisine; _135 < _136.length; _135++) {
                    var z = _136[_135];
                    if (C_boja.naziv == z.vrstaPosla) {
                        C_zauzetos = z;
                    }
                    if (M_boja.naziv == z.vrstaPosla) {
                        M_zauzetos = z;
                    }
                    if (Y_boja.naziv == z.vrstaPosla) {
                        Y_zauzetos = z;
                    }
                    if (B_boja.naziv == z.vrstaPosla) {
                        B_zauzetos = z;
                    }
                }
                // Definisanje cena boja
                for (var _137 = 0, bojaCenaBoje_13 = bojaCenaBoje; _137 < bojaCenaBoje_13.length; _137++) {
                    var cb = bojaCenaBoje_13[_137];
                    if (cb.naziv == C_boja.naziv) {
                        C_cena = cb.cena;
                    }
                    if (cb.naziv == M_boja.naziv) {
                        M_cena = cb.cena;
                    }
                    if (cb.naziv == Y_boja.naziv) {
                        Y_cena = cb.cena;
                    }
                    if (cb.naziv == B_boja.naziv) {
                        B_cena = cb.cena;
                    }
                }
                // Dodavanje na ukupnu cenu
                boja_ukupnaCena +=
                    (boja_slike_povrsina_korice_D / 1000000) * C_zauzetos.vrednost / 100 / C_boja.vredost * C_cena +
                        (boja_slike_povrsina_korice_D / 1000000) * M_zauzetos.vrednost / 100 / M_boja.vredost * M_cena +
                        (boja_slike_povrsina_korice_D / 1000000) * Y_zauzetos.vrednost / 100 / Y_boja.vredost * Y_cena +
                        (boja_slike_povrsina_korice_D / 1000000) * B_zauzetos.vrednost / 100 / B_boja.vredost * B_cena;
                console.log('Povrsina slika: ' + boja_slike_povrsina_korice_D);
            }
            // K / I - p
            if (boja_kblokSistem == 'Par-nepar' && boja_slike_povrsina_kblok_A != 0) {
                var C_boja = void 0;
                var C_zauzetos = void 0;
                var C_cena = void 0;
                var M_boja = void 0;
                var M_zauzetos = void 0;
                var M_cena = void 0;
                var Y_boja = void 0;
                var Y_zauzetos = void 0;
                var Y_cena = void 0;
                var B_boja = void 0;
                var B_zauzetos = void 0;
                var B_cena = void 0;
                // U slucaju da tekst prelazi preko slike i da je beo
                if (boja_tekst_povrsina_kblok_A != 0) {
                    if (boja_tekst_bojaBela_kblok_A && !res.ub_pozadina_kblok_A) {
                        boja_slike_povrsina_kblok_A =
                            boja_slike_povrsina_kblok_A *
                                ((100 - boja_tekst_slozenost_kblok_A.vrednost) / 100);
                    }
                }
                // Definisanje boja za CMYK sliku
                for (var _138 = 0, _139 = this.boje; _138 < _139.length; _138++) {
                    var b = _139[_138];
                    if (b.tipPapira.naziv === res.papir.tipPapira.naziv) {
                        if (b.naziv == 'Cyan') {
                            C_boja = b;
                        }
                        if (b.naziv == 'Magenta') {
                            M_boja = b;
                        }
                        if (b.naziv == 'Yellow') {
                            Y_boja = b;
                        }
                        if (b.naziv == 'Black') {
                            B_boja = b;
                        }
                    }
                }
                // Definisanje procenta zauzeuzetosti CMYK boja
                for (var _140 = 0, _141 = this.procentiZpovrisine; _140 < _141.length; _140++) {
                    var z = _141[_140];
                    if (C_boja.naziv == z.vrstaPosla) {
                        C_zauzetos = z;
                    }
                    if (M_boja.naziv == z.vrstaPosla) {
                        M_zauzetos = z;
                    }
                    if (Y_boja.naziv == z.vrstaPosla) {
                        Y_zauzetos = z;
                    }
                    if (B_boja.naziv == z.vrstaPosla) {
                        B_zauzetos = z;
                    }
                }
                // Definisanje cena boja
                for (var _142 = 0, bojaCenaBoje_14 = bojaCenaBoje; _142 < bojaCenaBoje_14.length; _142++) {
                    var cb = bojaCenaBoje_14[_142];
                    if (cb.naziv == C_boja.naziv) {
                        C_cena = cb.cena;
                    }
                    if (cb.naziv == M_boja.naziv) {
                        M_cena = cb.cena;
                    }
                    if (cb.naziv == Y_boja.naziv) {
                        Y_cena = cb.cena;
                    }
                    if (cb.naziv == B_boja.naziv) {
                        B_cena = cb.cena;
                    }
                }
                // Dodavanje na ukupnu cenu
                var cenaX = (boja_slike_povrsina_kblok_A / 1000000) * C_zauzetos.vrednost / 100 / C_boja.vredost * C_cena +
                    (boja_slike_povrsina_kblok_A / 1000000) * M_zauzetos.vrednost / 100 / M_boja.vredost * M_cena +
                    (boja_slike_povrsina_kblok_A / 1000000) * Y_zauzetos.vrednost / 100 / Y_boja.vredost * Y_cena +
                    (boja_slike_povrsina_kblok_A / 1000000) * B_zauzetos.vrednost / 100 / B_boja.vredost * B_cena;
                boja_ukupnaCena += cenaX * (res.obimProizvoda - 4) / 2;
                console.log('Povrsina slika jedne stranice (Par nepar): ' + (boja_slike_povrsina_kblok_A / 1000000));
                console.log('Cena slika neparnih stranica (Par nepar): ' + cenaX);
            }
            // K / II -p
            if (boja_kblokSistem == 'Par-nepar' && boja_slike_povrsina_kblok_B != 0) {
                var C_boja = void 0;
                var C_zauzetos = void 0;
                var C_cena = void 0;
                var M_boja = void 0;
                var M_zauzetos = void 0;
                var M_cena = void 0;
                var Y_boja = void 0;
                var Y_zauzetos = void 0;
                var Y_cena = void 0;
                var B_boja = void 0;
                var B_zauzetos = void 0;
                var B_cena = void 0;
                // U slucaju da tekst prelazi preko slike i da je beo
                if (boja_tekst_povrsina_kblok_B != 0) {
                    if (boja_tekst_bojaBela_kblok_B && !res.ub_pozadina_kblok_B) {
                        boja_slike_povrsina_kblok_B =
                            boja_slike_povrsina_kblok_B *
                                ((100 - boja_tekst_slozenost_kblok_B.vrednost) / 100);
                    }
                }
                // Definisanje boja za CMYK sliku
                for (var _143 = 0, _144 = this.boje; _143 < _144.length; _143++) {
                    var b = _144[_143];
                    if (b.tipPapira.naziv === res.papir.tipPapira.naziv) {
                        if (b.naziv == 'Cyan') {
                            C_boja = b;
                        }
                        if (b.naziv == 'Magenta') {
                            M_boja = b;
                        }
                        if (b.naziv == 'Yellow') {
                            Y_boja = b;
                        }
                        if (b.naziv == 'Black') {
                            B_boja = b;
                        }
                    }
                }
                // Definisanje procenta zauzeuzetosti CMYK boja
                for (var _145 = 0, _146 = this.procentiZpovrisine; _145 < _146.length; _145++) {
                    var z = _146[_145];
                    if (C_boja.naziv == z.vrstaPosla) {
                        C_zauzetos = z;
                    }
                    if (M_boja.naziv == z.vrstaPosla) {
                        M_zauzetos = z;
                    }
                    if (Y_boja.naziv == z.vrstaPosla) {
                        Y_zauzetos = z;
                    }
                    if (B_boja.naziv == z.vrstaPosla) {
                        B_zauzetos = z;
                    }
                }
                // Definisanje cena boja
                for (var _147 = 0, bojaCenaBoje_15 = bojaCenaBoje; _147 < bojaCenaBoje_15.length; _147++) {
                    var cb = bojaCenaBoje_15[_147];
                    if (cb.naziv == C_boja.naziv) {
                        C_cena = cb.cena;
                    }
                    if (cb.naziv == M_boja.naziv) {
                        M_cena = cb.cena;
                    }
                    if (cb.naziv == Y_boja.naziv) {
                        Y_cena = cb.cena;
                    }
                    if (cb.naziv == B_boja.naziv) {
                        B_cena = cb.cena;
                    }
                }
                // Dodavanje na ukupnu cenu
                var cenaX = (boja_slike_povrsina_kblok_B / 1000000) * C_zauzetos.vrednost / 100 / C_boja.vredost * C_cena +
                    (boja_slike_povrsina_kblok_B / 1000000) * M_zauzetos.vrednost / 100 / M_boja.vredost * M_cena +
                    (boja_slike_povrsina_kblok_B / 1000000) * Y_zauzetos.vrednost / 100 / Y_boja.vredost * Y_cena +
                    (boja_slike_povrsina_kblok_B / 1000000) * B_zauzetos.vrednost / 100 / B_boja.vredost * B_cena;
                boja_ukupnaCena += cenaX * (res.obimProizvoda - 4) / 2;
                console.log('Povrsina slika jedne parne stranice (Par nepar): ' + (boja_slike_povrsina_kblok_B / 1000000));
                console.log('Cena slika parnih stranica (Par nepar): ' + cenaX);
            }
            // K / III - p
            if (boja_kblokSistem == 'Copy-paste' && boja_slike_povrsina_kblok != 0) {
                var C_boja = void 0;
                var C_zauzetos = void 0;
                var C_cena = void 0;
                var M_boja = void 0;
                var M_zauzetos = void 0;
                var M_cena = void 0;
                var Y_boja = void 0;
                var Y_zauzetos = void 0;
                var Y_cena = void 0;
                var B_boja = void 0;
                var B_zauzetos = void 0;
                var B_cena = void 0;
                // U slucaju da tekst prelazi preko slike i da je beo
                if (boja_tekst_povrsina_kblok != 0) {
                    if (boja_tekst_bojaBela_kblok && !res.ub_pozadina_kblok) {
                        boja_slike_povrsina_kblok =
                            boja_slike_povrsina_kblok *
                                ((100 - boja_tekst_slozenost_kblok.vrednost) / 100);
                    }
                }
                // Definisanje boja za CMYK sliku
                for (var _148 = 0, _149 = this.boje; _148 < _149.length; _148++) {
                    var b = _149[_148];
                    if (b.tipPapira.naziv === res.papir.tipPapira.naziv) {
                        if (b.naziv == 'Cyan') {
                            C_boja = b;
                        }
                        if (b.naziv == 'Magenta') {
                            M_boja = b;
                        }
                        if (b.naziv == 'Yellow') {
                            Y_boja = b;
                        }
                        if (b.naziv == 'Black') {
                            B_boja = b;
                        }
                    }
                }
                // Definisanje procenta zauzeuzetosti CMYK boja
                for (var _150 = 0, _151 = this.procentiZpovrisine; _150 < _151.length; _150++) {
                    var z = _151[_150];
                    if (C_boja.naziv == z.vrstaPosla) {
                        C_zauzetos = z;
                    }
                    if (M_boja.naziv == z.vrstaPosla) {
                        M_zauzetos = z;
                    }
                    if (Y_boja.naziv == z.vrstaPosla) {
                        Y_zauzetos = z;
                    }
                    if (B_boja.naziv == z.vrstaPosla) {
                        B_zauzetos = z;
                    }
                }
                // Definisanje cena boja
                for (var _152 = 0, bojaCenaBoje_16 = bojaCenaBoje; _152 < bojaCenaBoje_16.length; _152++) {
                    var cb = bojaCenaBoje_16[_152];
                    if (cb.naziv == C_boja.naziv) {
                        C_cena = cb.cena;
                    }
                    if (cb.naziv == M_boja.naziv) {
                        M_cena = cb.cena;
                    }
                    if (cb.naziv == Y_boja.naziv) {
                        Y_cena = cb.cena;
                    }
                    if (cb.naziv == B_boja.naziv) {
                        B_cena = cb.cena;
                    }
                }
                // Dodavanje na ukupnu cenu
                var cenaX = (boja_slike_povrsina_kblok / 1000000) * C_zauzetos.vrednost / 100 / C_boja.vredost * C_cena +
                    (boja_slike_povrsina_kblok / 1000000) * M_zauzetos.vrednost / 100 / M_boja.vredost * M_cena +
                    (boja_slike_povrsina_kblok / 1000000) * Y_zauzetos.vrednost / 100 / Y_boja.vredost * Y_cena +
                    (boja_slike_povrsina_kblok / 1000000) * B_zauzetos.vrednost / 100 / B_boja.vredost * B_cena;
                boja_ukupnaCena += cenaX * (res.obimProizvoda - 4);
                console.log('Povrsina slika jedne stranice (Copy-Paste): ' + (boja_slike_povrsina_kblok / 1000000));
                console.log('Cena slika jedne stranice (Copy-Paste): ' + cenaX);
            }
            // K / IV - p
            if (boja_kblokSistem == 'Ukupno' && boja_slike_povrsina_kblok != 0) {
                var C_boja = void 0;
                var C_zauzetos = void 0;
                var C_cena = void 0;
                var M_boja = void 0;
                var M_zauzetos = void 0;
                var M_cena = void 0;
                var Y_boja = void 0;
                var Y_zauzetos = void 0;
                var Y_cena = void 0;
                var B_boja = void 0;
                var B_zauzetos = void 0;
                var B_cena = void 0;
                // Definisanje boja za CMYK sliku
                for (var _153 = 0, _154 = this.boje; _153 < _154.length; _153++) {
                    var b = _154[_153];
                    if (b.tipPapira.naziv === res.papir.tipPapira.naziv) {
                        if (b.naziv == 'Cyan') {
                            C_boja = b;
                        }
                        if (b.naziv == 'Magenta') {
                            M_boja = b;
                        }
                        if (b.naziv == 'Yellow') {
                            Y_boja = b;
                        }
                        if (b.naziv == 'Black') {
                            B_boja = b;
                        }
                    }
                }
                // Definisanje procenta zauzeuzetosti CMYK boja
                for (var _155 = 0, _156 = this.procentiZpovrisine; _155 < _156.length; _155++) {
                    var z = _156[_155];
                    if (C_boja.naziv == z.vrstaPosla) {
                        C_zauzetos = z;
                    }
                    if (M_boja.naziv == z.vrstaPosla) {
                        M_zauzetos = z;
                    }
                    if (Y_boja.naziv == z.vrstaPosla) {
                        Y_zauzetos = z;
                    }
                    if (B_boja.naziv == z.vrstaPosla) {
                        B_zauzetos = z;
                    }
                }
                // Definisanje cena boja
                for (var _157 = 0, bojaCenaBoje_17 = bojaCenaBoje; _157 < bojaCenaBoje_17.length; _157++) {
                    var cb = bojaCenaBoje_17[_157];
                    if (cb.naziv == C_boja.naziv) {
                        C_cena = cb.cena;
                    }
                    if (cb.naziv == M_boja.naziv) {
                        M_cena = cb.cena;
                    }
                    if (cb.naziv == Y_boja.naziv) {
                        Y_cena = cb.cena;
                    }
                    if (cb.naziv == B_boja.naziv) {
                        B_cena = cb.cena;
                    }
                }
                // Dodavanje na ukupnu cenu
                var cenaX = (boja_slike_povrsina_kblok / 1000000) * C_zauzetos.vrednost / 100 / C_boja.vredost * C_cena +
                    (boja_slike_povrsina_kblok / 1000000) * M_zauzetos.vrednost / 100 / M_boja.vredost * M_cena +
                    (boja_slike_povrsina_kblok / 1000000) * Y_zauzetos.vrednost / 100 / Y_boja.vredost * Y_cena +
                    (boja_slike_povrsina_kblok / 1000000) * B_zauzetos.vrednost / 100 / B_boja.vredost * B_cena;
                boja_ukupnaCena += cenaX;
                console.log('Povrsina slika  (Ukupno): ' + (boja_slike_povrsina_kblok / 1000000));
                console.log('Cena slika jedne stranice (Copy-Paste): ' + cenaX);
            }
            // Tekst
            // I
            if (boja_tekst_povrsina_korice_A != 0) {
                if (!boja_tekst_bojaBela_korice_A) {
                    // Cena boje
                    var X_cena = void 0;
                    for (var _158 = 0, bojaCenaBoje_18 = bojaCenaBoje; _158 < bojaCenaBoje_18.length; _158++) {
                        var cb = bojaCenaBoje_18[_158];
                        if (cb.naziv == boja_tekst_boja_korice_A.naziv) {
                            X_cena = cb.cena;
                        }
                    }
                    // Dodavanje na ukupnu cenu
                    boja_ukupnaCena +=
                        (boja_tekst_povrsina_korice_A / 1000000) * boja_tekst_slozenost_korice_A.vrednost / 100 / boja_tekst_boja_korice_A.vredost * X_cena;
                    console.log('Povrsina teksta: ' + boja_tekst_povrsina_korice_A);
                }
            }
            // II
            if (boja_tekst_povrsina_korice_B != 0) {
                if (!boja_tekst_bojaBela_korice_B) {
                    // Cena boje
                    var X_cena = void 0;
                    for (var _159 = 0, bojaCenaBoje_19 = bojaCenaBoje; _159 < bojaCenaBoje_19.length; _159++) {
                        var cb = bojaCenaBoje_19[_159];
                        if (cb.naziv == boja_tekst_boja_korice_B.naziv) {
                            X_cena = cb.cena;
                        }
                    }
                    // Dodavanje na ukupnu cenu
                    boja_ukupnaCena +=
                        (boja_tekst_povrsina_korice_B / 1000000) * boja_tekst_slozenost_korice_B.vrednost / 100 / boja_tekst_boja_korice_B.vredost * X_cena;
                    console.log('Povrsina teksta: ' + boja_tekst_povrsina_korice_B);
                }
            }
            // III
            if (boja_UnutrasnjeKoriceB && boja_tekst_povrsina_korice_C != 0) {
                if (!boja_tekst_bojaBela_korice_C) {
                    // Cena boje
                    var X_cena = void 0;
                    for (var _160 = 0, bojaCenaBoje_20 = bojaCenaBoje; _160 < bojaCenaBoje_20.length; _160++) {
                        var cb = bojaCenaBoje_20[_160];
                        if (cb.naziv == boja_tekst_boja_korice_C.naziv) {
                            X_cena = cb.cena;
                        }
                    }
                    // Dodavanje na ukupnu cenu
                    boja_ukupnaCena +=
                        (boja_tekst_povrsina_korice_C / 1000000) * boja_tekst_slozenost_korice_C.vrednost / 100 / boja_tekst_boja_korice_C.vredost * X_cena;
                    console.log('Povrsina teksta: ' + boja_tekst_povrsina_korice_C);
                }
            }
            // IV
            if (boja_UnutrasnjeKoriceB && boja_tekst_povrsina_korice_D != 0) {
                if (!boja_tekst_bojaBela_korice_D) {
                    // Cena boje
                    var X_cena = void 0;
                    for (var _161 = 0, bojaCenaBoje_21 = bojaCenaBoje; _161 < bojaCenaBoje_21.length; _161++) {
                        var cb = bojaCenaBoje_21[_161];
                        if (cb.naziv == boja_tekst_boja_korice_D.naziv) {
                            X_cena = cb.cena;
                        }
                    }
                    // Dodavanje na ukupnu cenu
                    boja_ukupnaCena +=
                        (boja_tekst_povrsina_korice_D / 1000000) * boja_tekst_slozenost_korice_D.vrednost / 100 / boja_tekst_boja_korice_D.vredost * X_cena;
                    console.log('Povrsina teksta: ' + boja_tekst_povrsina_korice_D);
                }
            }
            // K / I - p
            if (boja_kblokSistem == 'Par-nepar' && boja_tekst_povrsina_kblok_A != 0) {
                if (!boja_tekst_bojaBela_kblok_A) {
                    // Cena boje
                    var X_cena = void 0;
                    for (var _162 = 0, bojaCenaBoje_22 = bojaCenaBoje; _162 < bojaCenaBoje_22.length; _162++) {
                        var cb = bojaCenaBoje_22[_162];
                        if (cb.naziv == boja_tekst_boja_kblok_A.naziv) {
                            X_cena = cb.cena;
                        }
                    }
                    // Dodavanje na ukupnu cenu
                    var cenaX = (boja_tekst_povrsina_kblok_A / 1000000) * boja_tekst_slozenost_kblok_A.vrednost / 100 / boja_tekst_boja_kblok_A.vredost * X_cena;
                    boja_ukupnaCena += cenaX * (res.obimProizvoda - 4) / 2;
                    console.log('Povrsina teksta jedne neparne stranice (Par - Nepar): ' + boja_tekst_povrsina_kblok_A);
                    console.log('Cena teksta neparnih stranice (Par - Nepar): ' + cenaX);
                }
            }
            // K / II - p
            if (boja_kblokSistem == 'Par-nepar' && boja_tekst_povrsina_kblok_B != 0) {
                if (!boja_tekst_bojaBela_kblok_B) {
                    // Cena boje
                    var X_cena = void 0;
                    for (var _163 = 0, bojaCenaBoje_23 = bojaCenaBoje; _163 < bojaCenaBoje_23.length; _163++) {
                        var cb = bojaCenaBoje_23[_163];
                        if (cb.naziv == boja_tekst_boja_kblok_B.naziv) {
                            X_cena = cb.cena;
                        }
                    }
                    // Dodavanje na ukupnu cenu
                    var cenaX = (boja_tekst_povrsina_kblok_B / 1000000) * boja_tekst_slozenost_kblok_B.vrednost / 100 / boja_tekst_boja_kblok_B.vredost * X_cena;
                    boja_ukupnaCena += cenaX * (res.obimProizvoda - 4) / 2;
                    console.log('Povrsina teksta jedne parne stranice (Par - Nepar): ' + boja_tekst_povrsina_kblok_B);
                    console.log('Cena teksta parnih stranice (Par - Nepar): ' + cenaX);
                }
            }
            // K / III - p
            if (boja_kblokSistem == 'Copy-paste' && boja_tekst_povrsina_kblok != 0) {
                if (!boja_tekst_bojaBela_kblok) {
                    // Cena boje
                    var X_cena = void 0;
                    for (var _164 = 0, bojaCenaBoje_24 = bojaCenaBoje; _164 < bojaCenaBoje_24.length; _164++) {
                        var cb = bojaCenaBoje_24[_164];
                        if (cb.naziv == boja_tekst_boja_kblok.naziv) {
                            X_cena = cb.cena;
                        }
                    }
                    // Dodavanje na ukupnu cenu
                    var cenaX = (boja_tekst_povrsina_kblok / 1000000) * boja_tekst_slozenost_kblok.vrednost / 100 / boja_tekst_boja_kblok.vredost * X_cena;
                    boja_ukupnaCena += cenaX * (res.obimProizvoda - 4);
                    console.log('Povrsina teksta jedne stranice (Copy-Paste): ' + boja_tekst_povrsina_kblok);
                    console.log('Cena teksta svih stranica (Copy-Paste): ' + cenaX);
                }
            }
            // K / IV - p
            if (boja_kblokSistem == 'Ukupno' && boja_tekst_povrsina_kblok != 0) {
                // Cena boje
                var X_cena = void 0;
                for (var _165 = 0, bojaCenaBoje_25 = bojaCenaBoje; _165 < bojaCenaBoje_25.length; _165++) {
                    var cb = bojaCenaBoje_25[_165];
                    if (cb.naziv == boja_tekst_boja_kblok.naziv) {
                        X_cena = cb.cena;
                    }
                }
                // Dodavanje na ukupnu cenu
                var cenaX = (boja_tekst_povrsina_kblok / 1000000) * boja_tekst_slozenost_kblok.vrednost / 100 / boja_tekst_boja_kblok.vredost * X_cena;
                boja_ukupnaCena += cenaX;
                console.log('Povrsina teksta svih stranice (Ukupno): ' + boja_tekst_povrsina_kblok);
                console.log('Cena teksta svih stranica (Ukupno): ' + cenaX);
            }
            // Pozadina
            // I
            if (boja_pozadina_povrsina_korice_A != 0) {
                if (boja_slike_povrsina_korice_A != 0) {
                    boja_pozadina_povrsina_korice_A -= boja_slike_povrsina_korice_A;
                }
                if (boja_tekst_povrsina_korice_A != 0) {
                    if (boja_tekst_bojaBela_korice_A) {
                        boja_pozadina_povrsina_korice_A =
                            boja_pozadina_povrsina_korice_A *
                                ((100 - boja_tekst_slozenost_korice_A.vrednost) / 100);
                    }
                }
                //Cena boje
                var X_cena = void 0;
                for (var _166 = 0, bojaCenaBoje_26 = bojaCenaBoje; _166 < bojaCenaBoje_26.length; _166++) {
                    var cb = bojaCenaBoje_26[_166];
                    if (cb.naziv == boja_pozadina_boja_korice_A.naziv) {
                        X_cena = cb.cena;
                    }
                }
                // Dodavanje na ukupnu cenu
                boja_ukupnaCena +=
                    (boja_pozadina_povrsina_korice_A / 1000000) / boja_pozadina_boja_korice_A.vredost * X_cena;
                console.log('Povrsina pozadina: ' + boja_pozadina_povrsina_korice_A);
            }
            // II
            if (boja_pozadina_povrsina_korice_B != 0) {
                if (boja_slike_povrsina_korice_B != 0) {
                    boja_pozadina_povrsina_korice_B -= boja_slike_povrsina_korice_B;
                }
                if (boja_tekst_povrsina_korice_B != 0) {
                    if (boja_tekst_bojaBela_korice_B) {
                        boja_pozadina_povrsina_korice_B =
                            boja_pozadina_povrsina_korice_B *
                                ((100 - boja_tekst_slozenost_korice_B.vrednost) / 100);
                    }
                }
                //Cena boje
                var X_cena = void 0;
                for (var _167 = 0, bojaCenaBoje_27 = bojaCenaBoje; _167 < bojaCenaBoje_27.length; _167++) {
                    var cb = bojaCenaBoje_27[_167];
                    if (cb.naziv == boja_pozadina_boja_korice_B.naziv) {
                        X_cena = cb.cena;
                    }
                }
                // Dodavanje na ukupnu cenu
                boja_ukupnaCena +=
                    (boja_pozadina_povrsina_korice_B / 1000000) / boja_pozadina_boja_korice_B.vredost * X_cena;
                console.log('Povrsina pozadina: ' + boja_pozadina_povrsina_korice_B);
            }
            // III
            if (boja_UnutrasnjeKoriceB && boja_pozadina_povrsina_korice_C != 0) {
                if (boja_slike_povrsina_korice_C != 0) {
                    boja_pozadina_povrsina_korice_C -= boja_slike_povrsina_korice_C;
                }
                if (boja_tekst_povrsina_korice_C != 0) {
                    if (boja_tekst_bojaBela_korice_C) {
                        boja_pozadina_povrsina_korice_C =
                            boja_pozadina_povrsina_korice_C *
                                ((100 - boja_tekst_slozenost_korice_C.vrednost) / 100);
                    }
                }
                //Cena boje
                var X_cena = void 0;
                for (var _168 = 0, bojaCenaBoje_28 = bojaCenaBoje; _168 < bojaCenaBoje_28.length; _168++) {
                    var cb = bojaCenaBoje_28[_168];
                    if (cb.naziv == boja_pozadina_boja_korice_C.naziv) {
                        X_cena = cb.cena;
                    }
                }
                // Dodavanje na ukupnu cenu
                boja_ukupnaCena +=
                    (boja_pozadina_povrsina_korice_C / 1000000) / boja_pozadina_boja_korice_C.vredost * X_cena;
                console.log('Povrsina pozadina: ' + boja_pozadina_povrsina_korice_C);
            }
            // IV
            if (boja_UnutrasnjeKoriceB && boja_pozadina_povrsina_korice_D != 0) {
                if (boja_slike_povrsina_korice_D != 0) {
                    boja_pozadina_povrsina_korice_D -= boja_slike_povrsina_korice_D;
                }
                if (boja_tekst_povrsina_korice_D != 0) {
                    if (boja_tekst_bojaBela_korice_D) {
                        boja_pozadina_povrsina_korice_D =
                            boja_pozadina_povrsina_korice_D *
                                ((100 - boja_tekst_slozenost_korice_D.vrednost) / 100);
                    }
                }
                //Cena boje
                var X_cena = void 0;
                for (var _169 = 0, bojaCenaBoje_29 = bojaCenaBoje; _169 < bojaCenaBoje_29.length; _169++) {
                    var cb = bojaCenaBoje_29[_169];
                    if (cb.naziv == boja_pozadina_boja_korice_D.naziv) {
                        X_cena = cb.cena;
                    }
                }
                // Dodavanje na ukupnu cenu
                boja_ukupnaCena +=
                    (boja_pozadina_povrsina_korice_D / 1000000) / boja_pozadina_boja_korice_D.vredost * X_cena;
                console.log('Povrsina pozadina: ' + boja_pozadina_povrsina_korice_D);
            }
            // K / I - p
            if (boja_kblokSistem == 'Par-nepar' && boja_pozadina_povrsina_kblok_A != 0) {
                if (boja_slike_povrsina_kblok_A != 0) {
                    boja_pozadina_povrsina_kblok_A -= boja_slike_povrsina_kblok_A;
                }
                if (boja_tekst_povrsina_kblok_A != 0) {
                    if (boja_tekst_bojaBela_kblok_A) {
                        boja_pozadina_povrsina_kblok_A =
                            boja_pozadina_povrsina_kblok_A *
                                ((100 - boja_tekst_slozenost_kblok_A.vrednost) / 100);
                    }
                }
                //Cena boje
                var X_cena = void 0;
                for (var _170 = 0, bojaCenaBoje_30 = bojaCenaBoje; _170 < bojaCenaBoje_30.length; _170++) {
                    var cb = bojaCenaBoje_30[_170];
                    if (cb.naziv == boja_pozadina_boja_kblok_A.naziv) {
                        X_cena = cb.cena;
                    }
                }
                // Dodavanje na ukupnu cenu
                var cenaX = (boja_pozadina_povrsina_kblok_A / 1000000) / boja_pozadina_boja_kblok_A.vredost * X_cena;
                boja_ukupnaCena += cenaX * (res.obimProizvoda - 4) / 2;
                console.log('Povrsina pozadine jedne neparne stranice (Par - Nepar): ' + boja_pozadina_povrsina_kblok_A);
                console.log('Cena pozadine svih neparnih stranica (Par - Nepar): ' + cenaX);
            }
            // K / II
            if (boja_kblokSistem == 'Par-nepar' && boja_pozadina_povrsina_kblok_B != 0) {
                if (boja_slike_povrsina_kblok_B != 0) {
                    boja_pozadina_povrsina_kblok_B -= boja_slike_povrsina_kblok_B;
                }
                if (boja_tekst_povrsina_kblok_B != 0) {
                    if (boja_tekst_bojaBela_kblok_B) {
                        boja_pozadina_povrsina_kblok_B =
                            boja_pozadina_povrsina_kblok_B *
                                ((100 - boja_tekst_slozenost_kblok_B.vrednost) / 100);
                    }
                }
                //Cena boje
                var X_cena = void 0;
                for (var _171 = 0, bojaCenaBoje_31 = bojaCenaBoje; _171 < bojaCenaBoje_31.length; _171++) {
                    var cb = bojaCenaBoje_31[_171];
                    if (cb.naziv == boja_pozadina_boja_kblok_B.naziv) {
                        X_cena = cb.cena;
                    }
                }
                // Dodavanje na ukupnu cenu
                var cenaX = (boja_pozadina_povrsina_kblok_B / 1000000) / boja_pozadina_boja_kblok_B.vredost * X_cena;
                boja_ukupnaCena += cenaX * (res.obimProizvoda - 4) / 2;
                console.log('Povrsina pozadine jedne parne stranice (Par - Nepar): ' + boja_pozadina_povrsina_kblok_B);
                console.log('Cena pozadine svih parnih stranica (Par - Nepar): ' + cenaX);
            }
            // K / III - p
            if (boja_kblokSistem == 'Copy-paste' && boja_pozadina_povrsina_kblok != 0) {
                if (boja_slike_povrsina_kblok != 0) {
                    boja_pozadina_povrsina_kblok -= boja_slike_povrsina_kblok;
                }
                if (boja_tekst_povrsina_kblok != 0) {
                    if (boja_tekst_bojaBela_kblok) {
                        boja_pozadina_povrsina_kblok =
                            boja_pozadina_povrsina_kblok *
                                ((100 - boja_tekst_slozenost_kblok.vrednost) / 100);
                    }
                }
                //Cena boje
                var X_cena = void 0;
                for (var _172 = 0, bojaCenaBoje_32 = bojaCenaBoje; _172 < bojaCenaBoje_32.length; _172++) {
                    var cb = bojaCenaBoje_32[_172];
                    if (cb.naziv == boja_pozadina_boja_kblok.naziv) {
                        X_cena = cb.cena;
                    }
                }
                // Dodavanje na ukupnu cenu
                var cenaX = (boja_pozadina_povrsina_kblok / 1000000) / boja_pozadina_boja_kblok.vredost * X_cena;
                boja_ukupnaCena += cenaX * (res.obimProizvoda - 4);
                console.log('Povrsina pozadine jedne stranice (Copy - paste): ' + boja_pozadina_povrsina_kblok);
                console.log('Cena pozadine svih stranica (Copy - paste): ' + cenaX);
            }
            // Cena boje ukupan tiraz
            boja_ukupnaCena =
                boja_ukupnaCena * (res.tiraz * makulatura) * rastur;
        }
        // *** CENA PAPIRA ***
        var p_ukupnaCena = 0;
        var p_papir = res.papir;
        if (p_papir.cena0 == 0) {
            var p_BrojPaketa = brojTabakaOsnovnogFormata / p_papir.brojTabakaPaket;
            if (brojTabakaOsnovnogFormata / 1000 * p_papir.masa > 2500) {
                p_ukupnaCena += brojTabakaOsnovnogFormata / 1000 * p_papir.cena4;
            }
            else if (p_BrojPaketa < 4) {
                p_ukupnaCena += brojTabakaOsnovnogFormata / 1000 * p_papir.cena1;
            }
            else if (p_BrojPaketa < 16) {
                p_ukupnaCena += brojTabakaOsnovnogFormata / 1000 * p_papir.cena2;
            }
            else {
                p_ukupnaCena += brojTabakaOsnovnogFormata / 1000 * p_papir.cena3;
            }
        }
        else {
            p_ukupnaCena += brojTabakaOsnovnogFormata / 1000 * p_papir.masa * p_papir.cena0;
        }
        if (res.tipProizvoda === 'Brošura' && !res.masinaZaStampuIstaB && !res.papirZaStampuKoricaB) {
            var p_papirKorice = res.papirKorice;
            if (p_papirKorice.cena0 == 0) {
                var p_BrojPaketa = brojTabakaOsnovnogFormata / p_papirKorice.brojTabakaPaket;
                if (brojTabakaOsnovnogFormata / 1000 * p_papirKorice.masa > 2500) {
                    p_ukupnaCena += brojTabakaOsnovnogFormata / 1000 * p_papirKorice.cena4;
                }
                else if (p_BrojPaketa < 4) {
                    p_ukupnaCena += brojTabakaOsnovnogFormata / 1000 * p_papirKorice.cena1;
                }
                else if (p_BrojPaketa < 16) {
                    p_ukupnaCena += brojTabakaOsnovnogFormata / 1000 * p_papirKorice.cena2;
                }
                else {
                    p_ukupnaCena += brojTabakaOsnovnogFormata / 1000 * p_papirKorice.cena3;
                }
            }
            else {
                p_ukupnaCena += brojTabakaOsnovnogFormata / 1000 * p_papirKorice.masa * p_papirKorice.cena0;
            }
        }
        // UKUPNO VREME I TROSKOVI
        vreme = vreme_pripremaStampe + vreme_stampe + vreme_zgo;
        troskovi =
            troskovi_pripremaStampe +
                troskovi_stampe +
                troskovi_zgo;
        this.ukupnoVremeProizvodnje = vreme;
        this.ukupniTrskoskoviProizvodnje = troskovi;
        this.ukupnaCenaPapira = p_ukupnaCena;
        this.ukupnaCenaBoje = boja_ukupnaCena;
        this.ukupnaCena =
            this.ukupnaCenaPapira +
                this.ukupnaCenaBoje +
                this.ukupniTrskoskoviProizvodnje;
        // this.shareOfsetResults();
        // console.log('------ Provera pripreme stampe ------')
        // console.log('Osnovno: ' + vreme_pripremaStampe_osnovno);
        // console.log('Prenos podataka: ' + vreme_pripremaStampe_prenosPodataka);
        // console.log('Kreiranje teksta: ' + vreme_pripremaStampe_kreiraneTeksta);
        // console.log('Kreiranje slika: ' + vreme_pripremaStampe_kreiranjeSlika);
        // console.log('Prelom: ' + vreme_pripremaStampe_prelom);
        // console.log('Montaza: ' + vreme_pripremeStampe_montaza);
        // console.log('Obrada slika: ' + vreme_pripremeStampe_obradaSlika);
        // console.log('DTP: ' + vreme_pripremeStampe_DTP);
        // console.log('Troskovi izrade izlaznih medija: ' + troskoviIzradeIzlaznihMedija)
        // console.log('Troskovi materijala izlaznih medija: ' + troskoviMaterilaIzlaznihMedija)
        console.log('-----* Provera zavrsnog racuna *-----');
        console.log('Ukupno vreme: ' + vreme);
        console.log('Ukupna cena: ' + troskovi);
        console.log('------------------------------------');
        console.log('Vreme pripreme stampe: ' + vreme_pripremaStampe);
        console.log('Vreme stampe: ' + vreme_stampe);
        console.log('Vreme zgo: ' + vreme_zgo);
        console.log('------------------------------------');
        console.log('Troskovi pripreme stampe: ' + troskovi_pripremaStampe);
        console.log('Troskovi stampe: ' + troskovi_stampe);
        console.log('Troskovi zgo: ' + troskovi_zgo);
        console.log('------------------------------------');
        console.log('Troskovi boje: ' + boja_ukupnaCena);
        console.log('Troskovi papira: ' + p_ukupnaCena);
    };
    KalkulatorComponent.prototype.calculateDigital = function () {
        // Rezultati
        var res = this.form.value;
        // Broj boja
        var brojBoja;
        // Masina za stampu
        var m = res.masinaZaStampu;
        // Tiraz
        var tiraz = res.tiraz;
        // Broj proizvoda na stamparskom tabaku
        var brojProizvodaPoNaTabaku = res.brojProizvodaPoTabakuZaStampu;
        // Cena prvog otiska
        var cenaPrvogOtiska;
        // Cena narednog otiska
        var cenaNarednogOtiska;
        // Ukupna cena
        var ukupnaCena;
        // Broj boja
        if (res.stampaNaObeStrane) {
            brojBoja = 8;
        }
        else {
            brojBoja = 4;
        }
        // Tiraz ( u stamp. tabacima)
        tiraz = Math.ceil(tiraz / brojProizvodaPoNaTabaku);
        // Cena prvog otiska
        cenaPrvogOtiska =
            (8 * m.trosakBoje * m.velicinaMakulature) +
                (m.vremeUlaganja + 0.017) * m.trosakStampe;
        if (!res.stampaNaObeStrane) {
            cenaPrvogOtiska = cenaPrvogOtiska / 2;
        }
        console.log('Cena prvog otiska: ' + cenaPrvogOtiska);
        // Broj obrtaja
        var brojObrtaja;
        if (m.tip == 'tabacna') {
            brojObrtaja = brojBoja * tiraz;
        }
        else {
            brojObrtaja = tiraz;
        }
        // Cena narednog otiska
        cenaNarednogOtiska =
            ((brojObrtaja / m.brzinaStampe) * m.trosakStampe) / tiraz +
                brojBoja * m.trosakBoje;
        console.log('Cena narednog otiska: ' + cenaNarednogOtiska);
        // Ukupna cena
        ukupnaCena =
            cenaPrvogOtiska +
                (tiraz - 1) * cenaNarednogOtiska;
        this.ukupnaCena = ukupnaCena;
    };
    // Results
    KalkulatorComponent.prototype.shareOfsetResults = function () {
        this.shareOfsetR = true;
        var price = Number(this.ukupnaCena).toFixed(2);
        this.answer =
            price + ' din';
    };
    // 117 function
    // Check numer
    KalkulatorComponent.prototype.isNumber = function (value) {
        return ((value != null) && !isNaN(Number(value.toString())));
    };
    KalkulatorComponent.prototype.decimal = function (b) {
        var retVal = Number(b).toFixed(2);
        return retVal;
    };
    // Specil validators
    KalkulatorComponent.prototype.checkPrintMachineAndPaper = function (machine) {
        var Wm = machine.x - 10;
        var Hm = machine.y - 19;
        var Wp = this.get('sirinaProizvoda') + 6;
        var Hp = this.get('duzinaProizvoda') + 6;
        if (Wp > Wm && Wp > Hm) {
            return false;
        }
        else if (Hp > Wm && Hp > Hm) {
            return false;
        }
        else if (Wp > Wm && Wp < Hm) {
            if (Hp > Wm) {
                return false;
            }
        }
        else if (Hp < Wm && Hp > Hm) {
            if (Wp < Hm) {
                return false;
            }
        }
        return true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("help", { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], KalkulatorComponent.prototype, "helpDiv", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("input"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], KalkulatorComponent.prototype, "input", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:keydown", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], KalkulatorComponent.prototype, "keyboard", null);
    KalkulatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-kalkulator",
            template: __webpack_require__(/*! ./kalkulator.component.html */ "./src/app/components/kalkulator/kalkulator.component.html"),
            styles: [__webpack_require__(/*! ./kalkulator.component.css */ "./src/app/components/kalkulator/kalkulator.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_services_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]])
    ], KalkulatorComponent);
    return KalkulatorComponent;
}());



/***/ }),

/***/ "./src/app/components/podesavanja/boje/boje.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/podesavanja/boje/boje.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9kZXNhdmFuamEvYm9qZS9ib2plLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/podesavanja/boje/boje.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/podesavanja/boje/boje.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table  [hidden]=\"!tableForm\" [title] =\"title\" [path] =\"path\" [searches]=\"searches\" [schemes]=\"schemes\"></app-table>\n<app-form  [hidden]=\"tableForm\" [title] =\"title\" [path] =\"path\" [schemes]=\"schemes\" [id]=\"id\"></app-form>"

/***/ }),

/***/ "./src/app/components/podesavanja/boje/boje.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/podesavanja/boje/boje.component.ts ***!
  \***************************************************************/
/*! exports provided: BojeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BojeComponent", function() { return BojeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BojeComponent = /** @class */ (function () {
    function BojeComponent(activeRoute) {
        this.activeRoute = activeRoute;
        // Basic
        this.title = 'Boje';
        this.path = 'boje';
        // Search
        this.searches = [
            { 'name': 'naziv', 'displayName': 'Naziv', 'value': '', 'currency': null, 'minLength': 3, 'minValue': null, 'maxValue': null, 'help': null, 'example': null },
            { 'name': 'tipPapiraNaziv', 'displayName': 'Tip papira', 'value': '', 'currency': null, 'minLength': 3, 'minValue': null, 'maxValue': null, 'help': null, 'example': null },
        ];
        //Schemes
        this.schemes = [
            { 'name': 'naziv', 'displayName': 'Naziv', 'value': '', 'currency': null, 'req': true, 'minLength': 3, 'minValue': null, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
            { 'name': 'tipPapira', 'displayName': 'Tip papira', 'value': '', 'currency': null, 'req': true, 'minLength': 3, 'minValue': null, 'maxValue': null, 'help': null, 'example': null, 'listPath': 'tip-papira', 'attribute': 'naziv', 'category': null },
            { 'name': 'vredost', 'displayName': 'Vrednost', 'value': '', 'currency': 'm²/kg boje', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Normativ pokrivenosti boje u zavisnosti od papira', 'example': null, 'listPath': null, 'category': null },
        ];
    }
    BojeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.paramMap
            .subscribe(function (params) {
            if (params.get('id')) {
                _this.tableForm = false;
                if (params.get('id') != 'dodaj') {
                    _this.id = +params.get('id');
                }
            }
            else {
                _this.tableForm = true;
            }
        });
    };
    BojeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-boje',
            template: __webpack_require__(/*! ./boje.component.html */ "./src/app/components/podesavanja/boje/boje.component.html"),
            styles: [__webpack_require__(/*! ./boje.component.css */ "./src/app/components/podesavanja/boje/boje.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BojeComponent);
    return BojeComponent;
}());



/***/ }),

/***/ "./src/app/components/podesavanja/digitalna-stampa/digitalna-stampa.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/podesavanja/digitalna-stampa/digitalna-stampa.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9kZXNhdmFuamEvZGlnaXRhbG5hLXN0YW1wYS9kaWdpdGFsbmEtc3RhbXBhLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/podesavanja/digitalna-stampa/digitalna-stampa.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/podesavanja/digitalna-stampa/digitalna-stampa.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  digitalna-stampa works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/podesavanja/digitalna-stampa/digitalna-stampa.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/podesavanja/digitalna-stampa/digitalna-stampa.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DigitalnaStampaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigitalnaStampaComponent", function() { return DigitalnaStampaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DigitalnaStampaComponent = /** @class */ (function () {
    function DigitalnaStampaComponent() {
    }
    DigitalnaStampaComponent.prototype.ngOnInit = function () {
    };
    DigitalnaStampaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-digitalna-stampa',
            template: __webpack_require__(/*! ./digitalna-stampa.component.html */ "./src/app/components/podesavanja/digitalna-stampa/digitalna-stampa.component.html"),
            styles: [__webpack_require__(/*! ./digitalna-stampa.component.css */ "./src/app/components/podesavanja/digitalna-stampa/digitalna-stampa.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DigitalnaStampaComponent);
    return DigitalnaStampaComponent;
}());



/***/ }),

/***/ "./src/app/components/podesavanja/izlazni-mediji/izlazni-mediji.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/podesavanja/izlazni-mediji/izlazni-mediji.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9kZXNhdmFuamEvaXpsYXpuaS1tZWRpamkvaXpsYXpuaS1tZWRpamkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/podesavanja/izlazni-mediji/izlazni-mediji.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/podesavanja/izlazni-mediji/izlazni-mediji.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table  [hidden]=\"!tableForm\" [title] =\"title\" [path] =\"path\" [searches]=\"searches\" [schemes]=\"schemes\"></app-table>\n<app-form  [hidden]=\"tableForm\" [title] =\"title\" [path] =\"path\" [schemes]=\"schemes\" [id]=\"id\"></app-form>"

/***/ }),

/***/ "./src/app/components/podesavanja/izlazni-mediji/izlazni-mediji.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/podesavanja/izlazni-mediji/izlazni-mediji.component.ts ***!
  \***********************************************************************************/
/*! exports provided: IzlazniMedijiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IzlazniMedijiComponent", function() { return IzlazniMedijiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IzlazniMedijiComponent = /** @class */ (function () {
    function IzlazniMedijiComponent(activeRoute) {
        this.activeRoute = activeRoute;
        // Basic
        this.title = 'Izlazni mediji';
        this.path = 'izlazni-mediji';
        // Search
        this.searches = [
            { 'name': 'tip', 'displayName': 'Tip', 'value': '', 'currency': null, 'minLength': 2, 'minValue': null, 'maxValue': null, 'help': null, 'example': null },
        ];
        // Schemes
        this.schemes = [
            { 'name': 'tip', 'displayName': 'Tip', 'value': '', 'currency': null, 'req': true, 'minLength': 3, 'minValue': null, 'maxValue': null, 'help': 'Tip izlaznih medija', 'example': 'Laserski otisak, CTP, itd.', 'listPath': null, 'category': null },
            { 'name': 'j', 'displayName': 'IM - jednostavan', 'value': '', 'currency': "h/strana", 'req': true, 'minLength': null, 'minValue': 0.01, 'maxValue': null, 'help': 'Nivo složenosti - jednostavan', 'example': '0.05 h/strana', 'listPath': null, 'category': null },
            { 'name': 'p', 'displayName': 'IM - prosečan', 'value': '', 'currency': "h/strana", 'req': true, 'minLength': null, 'minValue': 0.01, 'maxValue': null, 'help': 'Nivo složenosti - prosečan', 'example': '0.05 h/strana', 'listPath': null, 'category': null },
            { 'name': 's', 'displayName': 'IM - složen', 'value': '', 'currency': "h/strana", 'req': true, 'minLength': null, 'minValue': 0.01, 'maxValue': null, 'help': 'Nivo složenosti - složen', 'example': '0.05 h/strana', 'listPath': null, 'category': null },
            { 'name': 'trkoskoviMaterijala', 'displayName': 'Troškovi materijala', 'value': '', 'currency': "din/m²", 'req': true, 'minLength': null, 'minValue': 1, 'maxValue': null, 'help': 'Sveobuhvatni troškovi materijala', 'example': "2800 din/m²", 'listPath': null, 'category': null },
        ];
    }
    IzlazniMedijiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.paramMap
            .subscribe(function (params) {
            if (params.get('id')) {
                _this.tableForm = false;
                if (params.get('id') != 'dodaj') {
                    _this.id = +params.get('id');
                }
            }
            else {
                _this.tableForm = true;
            }
        });
    };
    IzlazniMedijiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-izlazni-mediji',
            template: __webpack_require__(/*! ./izlazni-mediji.component.html */ "./src/app/components/podesavanja/izlazni-mediji/izlazni-mediji.component.html"),
            styles: [__webpack_require__(/*! ./izlazni-mediji.component.css */ "./src/app/components/podesavanja/izlazni-mediji/izlazni-mediji.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], IzlazniMedijiComponent);
    return IzlazniMedijiComponent;
}());



/***/ }),

/***/ "./src/app/components/podesavanja/masine-digitalne/masine-digitalne.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/podesavanja/masine-digitalne/masine-digitalne.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9kZXNhdmFuamEvbWFzaW5lLWRpZ2l0YWxuZS9tYXNpbmUtZGlnaXRhbG5lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/podesavanja/masine-digitalne/masine-digitalne.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/podesavanja/masine-digitalne/masine-digitalne.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table  [hidden]=\"!tableForm\" [title] =\"title\" [path] =\"path\" [searches]=\"searches\" [schemes]=\"schemes\"></app-table>\n<app-form  [hidden]=\"tableForm\" [title] =\"title\" [path] =\"path\" [schemes]=\"schemes\" [id]=\"id\"></app-form>"

/***/ }),

/***/ "./src/app/components/podesavanja/masine-digitalne/masine-digitalne.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/podesavanja/masine-digitalne/masine-digitalne.component.ts ***!
  \***************************************************************************************/
/*! exports provided: MasineDigitalneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasineDigitalneComponent", function() { return MasineDigitalneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MasineDigitalneComponent = /** @class */ (function () {
    function MasineDigitalneComponent(activeRoute) {
        this.activeRoute = activeRoute;
        // Basic
        this.title = 'Digitalne mašine';
        this.path = 'digitalne-masine';
        // Search
        this.searches = [
            { 'name': 'naziv', 'displayName': 'Naziv', 'value': '', 'currency': null, 'minLength': 3, 'minValue': null, 'maxValue': null, 'help': null, 'example': null },
            { 'name': 'tip', 'displayName': 'Tip mašine', 'value': '', 'currency': null, 'minLength': 3, 'minValue': null, 'maxValue': null, 'help': null, 'example': null },
            { 'name': 'minbrojBoja1', 'displayName': 'Broj boja A (min)', 'value': '', 'currency': 'boja', 'minLength': null, 'minValue': 0, 'maxValue': 10, 'help': 'Minimalni broj boja koje je mašina u mogućnosti da odšampa sa jedne strane', 'example': null },
            { 'name': 'maxBrojBoja1', 'displayName': 'Broj boja A (max)', 'value': '', 'currency': 'boja', 'minLength': null, 'minValue': 0, 'maxValue': 10, 'help': 'Maksimalni broj boja koje je mašina u mogućnosti da odšampa sa jedne strane', 'example': null },
            { 'name': 'minbrojBoja2', 'displayName': 'Broj boja B (min)', 'value': '', 'currency': 'boja', 'minLength': null, 'minValue': 0, 'maxValue': 10, 'help': 'Minimalni broj boja koje je mašina u mogućnosti da odšampa sa druge strane', 'example': null },
            { 'name': 'maxBrojBoja2', 'displayName': 'Broj boja B (max)', 'value': '', 'currency': 'boja', 'minLength': null, 'minValue': 0, 'maxValue': 10, 'help': 'Maksimalni broj boja koje je mašina u mogućnosti da odšampa sa druge strane', 'example': null },
            { 'name': 'minSirina', 'displayName': 'Širina (min)', 'value': '', 'currency': 'mm', 'minLength': null, 'minValue': 0, 'maxValue': 1000, 'help': null, 'example': null },
            { 'name': 'maxSirina', 'displayName': 'Širina (max)', 'value': '', 'currency': 'mm', 'minLength': null, 'minValue': 0, 'maxValue': 1000, 'help': null, 'example': null },
            { 'name': 'minDuzina', 'displayName': 'Dužina (min)', 'value': '', 'currency': 'mm', 'minLength': null, 'minValue': 0, 'maxValue': 1999, 'help': null, 'example': null },
            { 'name': 'maxDuzina', 'displayName': 'Dužina (max)', 'value': '', 'currency': 'mm', 'minLength': null, 'minValue': 0, 'maxValue': 2000, 'help': null, 'example': null },
            { 'name': 'minVremeUlaganja', 'displayName': 'Vreme ulaganja (min)', 'value': '', 'currency': 'h', 'minLength': null, 'minValue': 0, 'maxValue': 1999, 'help': null, 'example': null },
            { 'name': 'maxVremeUlaganja', 'displayName': 'Vreme ulaganja (max)', 'value': '', 'currency': 'h', 'minLength': null, 'minValue': 0, 'maxValue': 2000, 'help': null, 'example': null },
            { 'name': 'minVelicinaMakulature', 'displayName': 'Veličina makul. (min)', 'value': '', 'currency': 'tabaka', 'minLength': null, 'minValue': 0, 'maxValue': 1999, 'help': null, 'example': null },
            { 'name': 'maxVelicinaMakulature', 'displayName': 'Veličina makul. (max)', 'value': '', 'currency': 'tabaka', 'minLength': null, 'minValue': 0, 'maxValue': 2000, 'help': null, 'example': null },
            { 'name': 'minVremeStampeMakulature', 'displayName': 'Trošak štampe (min)', 'value': '', 'currency': 'min/tabaka', 'minLength': null, 'minValue': 0, 'maxValue': 1999, 'help': null, 'example': null },
            { 'name': 'maxVremeStampeMakulature', 'displayName': 'Trošak štampe (max)', 'value': '', 'currency': 'min/tabaka', 'minLength': null, 'minValue': 0, 'maxValue': 2000, 'help': null, 'example': null },
            { 'name': 'minTrosakStampe', 'displayName': 'Vreme št. makul. (min)', 'value': '', 'currency': 'din/h', 'minLength': null, 'minValue': 0, 'maxValue': 1999, 'help': null, 'example': null },
            { 'name': 'maxTrosakStampe', 'displayName': 'Vreme št. makul. (max)', 'value': '', 'currency': 'din/h', 'minLength': null, 'minValue': 0, 'maxValue': 2000, 'help': null, 'example': null },
            { 'name': 'minBrzinaStampe', 'displayName': 'Brzina štampe (min)', 'value': '', 'currency': 'otisaka/h', 'minLength': null, 'minValue': 0, 'maxValue': 1999, 'help': null, 'example': null },
            { 'name': 'maxBrzinaStampe', 'displayName': 'Brzina štampe (max)', 'value': '', 'currency': 'otisaka/h', 'minLength': null, 'minValue': 0, 'maxValue': 2000, 'help': null, 'example': null },
            { 'name': 'minTrosakBoje', 'displayName': 'Trošak boje (min)', 'value': '', 'currency': 'din/boji', 'minLength': null, 'minValue': 0, 'maxValue': 1999, 'help': null, 'example': null },
            { 'name': 'maxTrosakBoje', 'displayName': 'Trošak boje (max)', 'value': '', 'currency': 'din/boji', 'minLength': null, 'minValue': 0, 'maxValue': 2000, 'help': null, 'example': null },
        ];
        //Schemes
        this.schemes = [
            { 'name': 'naziv', 'displayName': 'Naziv', 'value': '', 'currency': null, 'req': true, 'minLength': 3, 'minValue': null, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
            { 'name': 'tip', 'displayName': 'Tip mašine', 'value': '', 'currency': null, 'req': true, 'minLength': 3, 'minValue': null, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
            { 'name': 'brojBoja1', 'displayName': 'Broj boja A', 'value': '', 'currency': 'boje', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Broj boja koje je mašina u mogućnosti da odšampa sa jedne strane', 'example': null, 'listPath': null, 'category': null },
            { 'name': 'brojBoja2', 'displayName': 'Broj boja B', 'value': '', 'currency': 'boje', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Broj boja koje je mašina u mogućnosti da odšampa sa jedne strane', 'example': null, 'listPath': null, 'category': null },
            { 'name': 'x', 'displayName': 'Maksimalna širina', 'value': '', 'currency': 'mm', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
            { 'name': 'y', 'displayName': 'Maksimalna dužina', 'value': '', 'currency': 'mm', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
            { 'name': 'vremeUlaganja', 'displayName': 'Vreme ulaganja', 'value': '', 'currency': 'h', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
            { 'name': 'vremeStampeMakulature', 'displayName': 'Vreme štampe makul.', 'value': '', 'currency': 'min/tabaka', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Broj tabaka koju mašina odštampa u minuti', 'example': null, 'listPath': null, 'category': null },
            { 'name': 'velicinaMakulature', 'displayName': 'Veličina makulature', 'value': '', 'currency': 'tabaka', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
            { 'name': 'trosakStampe', 'displayName': 'Trošak štampe', 'value': '', 'currency': 'din/h', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
            { 'name': 'brzinaStampe', 'displayName': 'Brzina štampe', 'value': '', 'currency': 'otisaka/h', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
            { 'name': 'trosakBoje', 'displayName': 'Trošak boje', 'value': '', 'currency': 'din/boji', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
        ];
    }
    MasineDigitalneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.paramMap
            .subscribe(function (params) {
            if (params.get('id')) {
                _this.tableForm = false;
                if (params.get('id') != 'dodaj') {
                    _this.id = +params.get('id');
                }
            }
            else {
                _this.tableForm = true;
            }
        });
    };
    MasineDigitalneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-masine-digitalne',
            template: __webpack_require__(/*! ./masine-digitalne.component.html */ "./src/app/components/podesavanja/masine-digitalne/masine-digitalne.component.html"),
            styles: [__webpack_require__(/*! ./masine-digitalne.component.css */ "./src/app/components/podesavanja/masine-digitalne/masine-digitalne.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], MasineDigitalneComponent);
    return MasineDigitalneComponent;
}());



/***/ }),

/***/ "./src/app/components/podesavanja/masine/masine.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/podesavanja/masine/masine.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9kZXNhdmFuamEvbWFzaW5lL21hc2luZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/podesavanja/masine/masine.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/podesavanja/masine/masine.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table  [hidden]=\"!tableForm\" [title] =\"title\" [path] =\"path\" [searches]=\"searches\" [schemes]=\"schemes\"></app-table>\n<app-form  [hidden]=\"tableForm\" [title] =\"title\" [path] =\"path\" [schemes]=\"schemes\" [id]=\"id\"></app-form>"

/***/ }),

/***/ "./src/app/components/podesavanja/masine/masine.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/podesavanja/masine/masine.component.ts ***!
  \*******************************************************************/
/*! exports provided: MasineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasineComponent", function() { return MasineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MasineComponent = /** @class */ (function () {
    function MasineComponent(activeRoute) {
        this.activeRoute = activeRoute;
        // Basic
        this.title = 'Mašine za štampu';
        this.path = 'masinezastampu';
        // Search
        this.searches = [
            { 'name': 'naziv', 'displayName': 'Naziv', 'value': '', 'currency': null, 'minLength': 3, 'minValue': null, 'maxValue': null, 'help': null, 'example': null },
            { 'name': 'brojboja', 'displayName': 'Broj boja', 'value': '', 'currency': 'boja', 'minLength': null, 'minValue': 0, 'maxValue': 10, 'help': null, 'example': null },
            { 'name': 'minsirina', 'displayName': 'Širina (min)', 'value': '', 'currency': 'mm', 'minLength': null, 'minValue': 0, 'maxValue': 1000, 'help': null, 'example': null },
            { 'name': 'maxsirina', 'displayName': 'Širina (max)', 'value': '', 'currency': 'mm', 'minLength': null, 'minValue': 0, 'maxValue': 1000, 'help': null, 'example': null },
            { 'name': 'minduzina', 'displayName': 'Dužina (min)', 'value': '', 'currency': 'mm', 'minLength': null, 'minValue': 0, 'maxValue': 1999, 'help': null, 'example': null },
            { 'name': 'maxduzina', 'displayName': 'Dužina (max)', 'value': '', 'currency': 'mm', 'minLength': null, 'minValue': 0, 'maxValue': 2000, 'help': null, 'example': null },
        ];
        //Schemes
        this.schemes = [
            { 'name': 'naziv', 'displayName': 'Naziv', 'value': '', 'currency': null, 'req': true, 'minLength': 3, 'minValue': null, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
            { 'name': 'brojBoja', 'displayName': 'Broj boja', 'value': '', 'currency': 'boje', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
            { 'name': 'x', 'displayName': 'Maksimalna širina', 'value': '', 'currency': 'mm', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
            { 'name': 'y', 'displayName': 'Maksimalna dužina', 'value': '', 'currency': 'mm', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
            { 'name': 'vremePripreme_j', 'displayName': 'Vreme pripreme j', 'value': '', 'currency': 'h', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Vreme pripreme - jednostavno', 'example': null, 'listPath': null, 'category': null },
            { 'name': 'vremePripreme_p', 'displayName': 'Vreme pripreme p', 'value': '', 'currency': 'h', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Vreme pripreme - prosečno', 'example': null, 'listPath': null, 'category': null },
            { 'name': 'vremePripreme_s', 'displayName': 'Vreme pripreme s', 'value': '', 'currency': 'h', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Vreme pripreme - složeno', 'example': null, 'listPath': null, 'category': null },
            { 'name': 'brojOtisaka_j', 'displayName': 'Broj otisaka j', 'value': '', 'currency': 'kom/h', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Broj otisaka - jednostavno', 'example': null, 'listPath': null, 'category': null },
            { 'name': 'brojOtisaka_p', 'displayName': 'Broj otisaka p', 'value': '', 'currency': 'kom/h', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Broj otisaka - prosečno', 'example': null, 'listPath': null, 'category': null },
            { 'name': 'brojOtisaka_s', 'displayName': 'Broj otisaka s', 'value': '', 'currency': 'kom/h', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Broj otisaka - složeno', 'example': null, 'listPath': null, 'category': null },
            { 'name': 'vremePranja', 'displayName': 'Vreme pranja', 'value': '', 'currency': 'h', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
            { 'name': 'normaMasinista', 'displayName': 'Norma mašinista', 'value': '', 'currency': 'din/h', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Norma za 70% produktivnist za 1 mašinistu', 'example': null, 'listPath': null, 'category': null },
            { 'name': 'normaPomocniradnik', 'displayName': 'Norma pomoćni radnik', 'value': '', 'currency': 'din/h', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Norma za 70% produktivnist za pomoćnog radnika', 'example': null, 'listPath': null, 'category': null },
            { 'name': 'normaUlagac', 'displayName': 'Norma ulagač', 'value': '', 'currency': 'din/h', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Norma za 70% produktivnist za 1 ulagača', 'example': null, 'listPath': null, 'category': null },
            { 'name': 'normaDrugiMasinista', 'displayName': 'Norma drugi mašinista', 'value': '', 'currency': 'din/h', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Norma za 70% produktivnist za drugog mašinistu', 'example': null, 'listPath': null, 'category': null },
        ];
    }
    MasineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.paramMap
            .subscribe(function (params) {
            if (params.get('id')) {
                _this.tableForm = false;
                if (params.get('id') != 'dodaj') {
                    _this.id = +params.get('id');
                }
            }
            else {
                _this.tableForm = true;
            }
        });
    };
    MasineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-masine',
            template: __webpack_require__(/*! ./masine.component.html */ "./src/app/components/podesavanja/masine/masine.component.html"),
            styles: [__webpack_require__(/*! ./masine.component.css */ "./src/app/components/podesavanja/masine/masine.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], MasineComponent);
    return MasineComponent;
}());



/***/ }),

/***/ "./src/app/components/podesavanja/obrezivanje/obrezivanje.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/podesavanja/obrezivanje/obrezivanje.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9kZXNhdmFuamEvb2JyZXppdmFuamUvb2JyZXppdmFuamUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/podesavanja/obrezivanje/obrezivanje.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/podesavanja/obrezivanje/obrezivanje.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table  [hidden]=\"!tableForm\" [title] =\"title\" [path] =\"path\" [searches]=\"searches\" [schemes]=\"schemes\"></app-table>\n<app-form  [hidden]=\"tableForm\" [title] =\"title\" [path] =\"path\" [schemes]=\"schemes\" [id]=\"id\"></app-form>"

/***/ }),

/***/ "./src/app/components/podesavanja/obrezivanje/obrezivanje.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/podesavanja/obrezivanje/obrezivanje.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ObrezivanjeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObrezivanjeComponent", function() { return ObrezivanjeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ObrezivanjeComponent = /** @class */ (function () {
    function ObrezivanjeComponent(activeRoute) {
        this.activeRoute = activeRoute;
        // Basic
        this.title = 'Obrezivanje';
        this.path = 'obrezivanja';
        // Search
        this.searches = [
            { 'name': 'minSirina', 'displayName': 'Širina (min)', 'value': '', 'currency': 'mm', 'minLength': null, 'minValue': 0, 'maxValue': 1000, 'help': null, 'example': null },
            { 'name': 'maxSirina', 'displayName': 'Širina (max)', 'value': '', 'currency': 'mm', 'minLength': null, 'minValue': 0, 'maxValue': 1000, 'help': null, 'example': null },
            { 'name': 'minDuzina', 'displayName': 'Dužina (min)', 'value': '', 'currency': 'mm', 'minLength': null, 'minValue': 0, 'maxValue': 1999, 'help': null, 'example': null },
            { 'name': 'maxDuzina', 'displayName': 'Dužina (max)', 'value': '', 'currency': 'mm', 'minLength': null, 'minValue': 0, 'maxValue': 2000, 'help': null, 'example': null },
            { 'name': 'minVremeRezanja1', 'displayName': 'Vreme rezanja (min)', 'value': '', 'currency': 'h / 1-2 strane', 'minLength': null, 'minValue': null, 'maxValue': 10000, 'help': null, 'example': null },
            { 'name': 'maxVremeRezanja1', 'displayName': 'Vreme rezanja (max)', 'value': '', 'currency': 'h / 1-2 strane', 'minLength': null, 'minValue': null, 'maxValue': 10000, 'help': null, 'example': null },
            { 'name': 'minVremeRezanja2', 'displayName': 'Vreme rezanja (min)', 'value': '', 'currency': 'h / 3-4 strane', 'minLength': null, 'minValue': null, 'maxValue': 1000, 'help': null, 'example': null },
            { 'name': 'maxVremeRezanja2', 'displayName': 'Vreme rezanja (max)', 'value': '', 'currency': 'h / 3-4 strane', 'minLength': null, 'minValue': null, 'maxValue': 1000, 'help': null, 'example': null },
            { 'name': 'minPripremnoVreme', 'displayName': 'Pripremno vreme (min)', 'value': '', 'currency': 'h', 'minLength': null, 'minValue': null, 'maxValue': null, 'help': 'Osnovna cena', 'example': null },
            { 'name': 'maxPriprepnoVreme', 'displayName': 'Pripremno vreme (max)', 'value': '', 'currency': 'h', 'minLength': null, 'minValue': null, 'maxValue': null, 'help': null, 'example': null },
        ];
        //Schemes
        this.schemes = [
            { 'name': 'x', 'displayName': 'Širina', 'value': '', 'currency': 'mm', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
            { 'name': 'y', 'displayName': 'Dužina', 'value': '', 'currency': 'mm', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
            { 'name': 'vremeRezanja1', 'displayName': 'Vreme rezanja', 'value': '', 'currency': 'h / 1-2 strane', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
            { 'name': 'vremeRezanja2', 'displayName': 'Vreme rezanja', 'value': '', 'currency': 'h / 3-4 strane', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
            { 'name': 'pripremnoVreme1', 'displayName': 'Pripremno vreme', 'value': '', 'currency': 'h / 1-2 strane', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
            { 'name': 'pripremnoVreme2', 'displayName': 'Pripremno vreme', 'value': '', 'currency': 'h / 3-4 strane', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
        ];
    }
    ObrezivanjeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.paramMap
            .subscribe(function (params) {
            if (params.get('id')) {
                _this.tableForm = false;
                if (params.get('id') != 'dodaj') {
                    _this.id = +params.get('id');
                }
            }
            else {
                _this.tableForm = true;
            }
        });
    };
    ObrezivanjeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-obrezivanje',
            template: __webpack_require__(/*! ./obrezivanje.component.html */ "./src/app/components/podesavanja/obrezivanje/obrezivanje.component.html"),
            styles: [__webpack_require__(/*! ./obrezivanje.component.css */ "./src/app/components/podesavanja/obrezivanje/obrezivanje.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ObrezivanjeComponent);
    return ObrezivanjeComponent;
}());



/***/ }),

/***/ "./src/app/components/podesavanja/oprema/oprema.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/podesavanja/oprema/oprema.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9kZXNhdmFuamEvb3ByZW1hL29wcmVtYS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/podesavanja/oprema/oprema.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/podesavanja/oprema/oprema.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table  [hidden]=\"!tableForm\" [title] =\"title\" [path] =\"path\" [searches]=\"searches\" [schemes]=\"schemes\"></app-table>\n<app-form  [hidden]=\"tableForm\" [title] =\"title\" [path] =\"path\" [schemes]=\"schemes\" [id]=\"id\"></app-form>"

/***/ }),

/***/ "./src/app/components/podesavanja/oprema/oprema.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/podesavanja/oprema/oprema.component.ts ***!
  \*******************************************************************/
/*! exports provided: OpremaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpremaComponent", function() { return OpremaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OpremaComponent = /** @class */ (function () {
    function OpremaComponent(activeRoute) {
        this.activeRoute = activeRoute;
        // Basic
        this.title = 'Oprema';
        this.path = 'opreme';
        // Search
        this.searches = [
            { 'name': 'naziv', 'displayName': 'Naziv', 'value': '', 'currency': null, 'minLength': 3, 'minValue': null, 'maxValue': null, 'help': 'Unesite ime i prezime', 'example': 'Mladen Potrebic' },
            { 'name': 'mincena', 'displayName': 'Cena od', 'value': 1, 'currency': 'RSD', 'minLength': null, 'minValue': 1, 'maxValue': null, 'help': null, 'example': null },
            { 'name': 'maxcena', 'displayName': 'Cena do', 'value': 1000000, 'currency': 'RSD', 'minLength': null, 'minValue': 1, 'maxValue': null, 'help': null, 'example': null },
        ];
        //Schemes
        this.schemes = [
            { 'name': 'naziv', 'displayName': 'Naziv', 'value': '', 'currency': null, 'req': true, 'minLength': 3, 'minValue': null, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
            { 'name': 'tip', 'displayName': 'Tip opreme', 'value': '', 'currency': null, 'req': true, 'minLength': 3, 'minValue': null, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
            { 'name': 'cena', 'displayName': 'Cena', 'value': '', 'currency': 'din/h', 'req': true, 'minLength': null, 'minValue': null, 'maxValue': null, 'help': 'Troškovi korišćenja opreme', 'example': '1800 din/h', 'listPath': null, 'category': null },
        ];
    }
    OpremaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.paramMap
            .subscribe(function (params) {
            if (params.get('id')) {
                _this.tableForm = false;
                if (params.get('id') != 'dodaj') {
                    _this.id = +params.get('id');
                }
            }
            else {
                _this.tableForm = true;
            }
        });
    };
    OpremaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-oprema',
            template: __webpack_require__(/*! ./oprema.component.html */ "./src/app/components/podesavanja/oprema/oprema.component.html"),
            styles: [__webpack_require__(/*! ./oprema.component.css */ "./src/app/components/podesavanja/oprema/oprema.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], OpremaComponent);
    return OpremaComponent;
}());



/***/ }),

/***/ "./src/app/components/podesavanja/papiri/papiri.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/podesavanja/papiri/papiri.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9kZXNhdmFuamEvcGFwaXJpL3BhcGlyaS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/podesavanja/papiri/papiri.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/podesavanja/papiri/papiri.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table  [hidden]=\"!tableForm\" [title] =\"title\" [path] =\"path\" [searches]=\"searches\" [schemes]=\"schemes\"></app-table>\n<app-form  [hidden]=\"tableForm\" [title] =\"title\" [path] =\"path\" [schemes]=\"schemes\" [id]=\"id\"></app-form>"

/***/ }),

/***/ "./src/app/components/podesavanja/papiri/papiri.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/podesavanja/papiri/papiri.component.ts ***!
  \*******************************************************************/
/*! exports provided: PapiriComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PapiriComponent", function() { return PapiriComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PapiriComponent = /** @class */ (function () {
    function PapiriComponent(activeRoute) {
        this.activeRoute = activeRoute;
        // Basic
        this.title = 'Papiri';
        this.path = 'papiri';
        // Search
        this.searches = [
            { 'name': 'naziv', 'displayName': 'Naziv', 'value': '', 'currency': null, 'minLength': 3, 'minValue': null, 'maxValue': null, 'help': null, 'example': null },
            { 'name': 'tipNaziv', 'displayName': 'Tip papira', 'value': '', 'currency': null, 'minLength': 3, 'minValue': null, 'maxValue': null, 'help': null, 'example': null },
            { 'name': 'minGramatura', 'displayName': 'Gramatura (min)', 'value': '', 'currency': 'g/m²', 'minLength': null, 'minValue': 0, 'maxValue': 1000, 'help': null, 'example': null },
            { 'name': 'maxGramatura', 'displayName': 'Gramatura (max)', 'value': '', 'currency': 'g/m²', 'minLength': null, 'minValue': 0, 'maxValue': 1000, 'help': null, 'example': null },
            { 'name': 'minSirina', 'displayName': 'Širina (min)', 'value': '', 'currency': 'mm', 'minLength': null, 'minValue': 0, 'maxValue': 1000, 'help': null, 'example': null },
            { 'name': 'maxSirina', 'displayName': 'Širina (max)', 'value': '', 'currency': 'mm', 'minLength': null, 'minValue': 0, 'maxValue': 1000, 'help': null, 'example': null },
            { 'name': 'minDuzina', 'displayName': 'Dužina (min)', 'value': '', 'currency': 'mm', 'minLength': null, 'minValue': 0, 'maxValue': 1999, 'help': null, 'example': null },
            { 'name': 'maxDuzina', 'displayName': 'Dužina (max)', 'value': '', 'currency': 'mm', 'minLength': null, 'minValue': 0, 'maxValue': 2000, 'help': null, 'example': null },
            { 'name': 'minBrojTabakaPaket', 'displayName': 'Broj tabaka (min)', 'value': '', 'currency': 'tabaka', 'minLength': null, 'minValue': 0, 'maxValue': 10000, 'help': null, 'example': null },
            { 'name': 'maxBrojTabakaPaket', 'displayName': 'Broj tabaka (max)', 'value': '', 'currency': 'tabaka', 'minLength': null, 'minValue': 0, 'maxValue': 10000, 'help': null, 'example': null },
            { 'name': 'minMasa', 'displayName': 'Masa (min)', 'value': '', 'currency': 'kg/1000t', 'minLength': null, 'minValue': 0, 'maxValue': 1000, 'help': null, 'example': null },
            { 'name': 'maxMasa', 'displayName': 'Masa (max)', 'value': '', 'currency': 'kg/1000t', 'minLength': null, 'minValue': 0, 'maxValue': 1000, 'help': null, 'example': null },
            { 'name': 'minCena0', 'displayName': 'Cena A (min)', 'value': '', 'currency': 'din/kg', 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Osnovna cena', 'example': null },
            { 'name': 'maxCena0', 'displayName': 'Cena A (max)', 'value': '', 'currency': 'din/kg', 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': null, 'example': null },
            { 'name': 'minCena1', 'displayName': 'Cena B (min)', 'value': '', 'currency': '1000t/din', 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Cena na 1000 tabaka u dinarima - od 1 do 4 paketa', 'example': null },
            { 'name': 'maxCena1', 'displayName': 'Cena B (max)', 'value': '', 'currency': '1000t/din', 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': null, 'example': null },
            { 'name': 'minCena2', 'displayName': 'Cena C (min)', 'value': '', 'currency': '1000t/din', 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Cena na 1000 tabaka u dinarima - od 4 do 16 paketa', 'example': null },
            { 'name': 'maxCena2', 'displayName': 'Cena C (max)', 'value': '', 'currency': '1000t/din', 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': null, 'example': null },
            { 'name': 'minCena3', 'displayName': 'Cena D (min)', 'value': '', 'currency': '1000t/din', 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Cena na 1000 tabaka u dinarima - preko 16 paketa', 'example': null },
            { 'name': 'maxCena3', 'displayName': 'Cena D (max)', 'value': '', 'currency': '1000t/din', 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': null, 'example': null },
            { 'name': 'minCena4', 'displayName': 'Cena F (min)', 'value': '', 'currency': '1000t/din', 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Cena na 1000 tabaka u dinarima - preko 2500 kg', 'example': null },
            { 'name': 'maxCena4', 'displayName': 'Cena F (max)', 'value': '', 'currency': '1000t/din', 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': null, 'example': null },
        ];
        //Schemes
        this.schemes = [
            { 'name': 'naziv', 'displayName': 'Naziv', 'value': '', 'currency': null, 'req': true, 'minLength': 3, 'minValue': null, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
            { 'name': 'tipPapira', 'displayName': 'Tip papira', 'value': '', 'currency': null, 'req': true, 'minLength': 3, 'minValue': null, 'maxValue': null, 'help': null, 'example': null, 'listPath': 'tip-papira', 'attribute': 'naziv', 'category': null },
            { 'name': 'gramatura', 'displayName': 'Gramatura', 'value': '', 'currency': 'g/m²', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
            { 'name': 'x', 'displayName': 'Širina', 'value': '', 'currency': 'mm', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
            { 'name': 'y', 'displayName': 'Dužina', 'value': '', 'currency': 'mm', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Smer vlakanaca je određen dužinom', 'example': null, 'listPath': null, 'category': null },
            { 'name': 'brojTabakaPaket', 'displayName': 'Broj tab. u paketu', 'value': '', 'currency': 'kom', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
            { 'name': 'masa', 'displayName': 'Masa', 'value': '', 'currency': 'kg/1000 t', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
            { 'name': 'cena0', 'displayName': 'Cena A', 'value': '', 'currency': 'din/kg', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Osnovna cena', 'example': null, 'listPath': null, 'category': null },
            { 'name': 'cena1', 'displayName': 'Cena B', 'value': '', 'currency': '1000t/din', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Cena na 1000 tabaka u dinarima - od 1 do 4 paketa', 'example': null, 'listPath': null, 'category': null },
            { 'name': 'cena2', 'displayName': 'Cena C', 'value': '', 'currency': '1000t/din', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Cena na 1000 tabaka u dinarima - od 4 do 16 paketa', 'example': null, 'listPath': null, 'category': null },
            { 'name': 'cena3', 'displayName': 'Cena D', 'value': '', 'currency': '1000t/din', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Cena na 1000 tabaka u dinarima - preko 16 paketa', 'example': null, 'listPath': null, 'category': null },
            { 'name': 'cena4', 'displayName': 'Cena F', 'value': '', 'currency': '1000t/din', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Cena na 1000 tabaka u dinarima - preko 2500 kg', 'example': null, 'listPath': null, 'category': null },
        ];
    }
    PapiriComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.paramMap
            .subscribe(function (params) {
            if (params.get('id')) {
                _this.tableForm = false;
                if (params.get('id') != 'dodaj') {
                    _this.id = +params.get('id');
                }
            }
            else {
                _this.tableForm = true;
            }
        });
    };
    PapiriComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-papiri',
            template: __webpack_require__(/*! ./papiri.component.html */ "./src/app/components/podesavanja/papiri/papiri.component.html"),
            styles: [__webpack_require__(/*! ./papiri.component.css */ "./src/app/components/podesavanja/papiri/papiri.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], PapiriComponent);
    return PapiriComponent;
}());



/***/ }),

/***/ "./src/app/components/podesavanja/podesavanja/podesavanja.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/podesavanja/podesavanja/podesavanja.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9kZXNhdmFuamEvcG9kZXNhdmFuamEvcG9kZXNhdmFuamEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/podesavanja/podesavanja/podesavanja.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/podesavanja/podesavanja/podesavanja.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-settings\">\n  <div class=\"header\">\n    Podešavanja\n  </div>\n  <div class=\"list-items\">\n    <div *ngFor=\"let item of settingList\" class=\"item\"  [routerLink]=\"item.link\">\n      <div class=\"img\">\n        <img src=\"assets/117/settings/{{ item.img }}.svg\" />\n      </div>\n      <div class=\"title\">\n          {{ item.name }}\n        </div>\n    </div>\n  </div>\n  <div class=\"reset\">\n    <div class=\"text\" *ngIf=\"resteStartTekst\" (click)=\"resetNextStep()\">Resetuj sva podešavanja</div>\n    <div class=\"textNext\" *ngIf=\"resetXTekst\">Da li ste sigurni? {{resetX}} + {{resetY}} = <input (keyup)=\"resetP($event)\" autofocus  type=\"text\"> </div>\n    <div class=\"textValid\" *ngIf=\"textValid\"> Resetovanje je započeto..</div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/podesavanja/podesavanja/podesavanja.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/podesavanja/podesavanja/podesavanja.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PodesavanjaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodesavanjaComponent", function() { return PodesavanjaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PodesavanjaComponent = /** @class */ (function () {
    function PodesavanjaComponent() {
        this.settingList = [
            { name: "Papiri", link: "/podesavanja/papiri", img: "papers_icon_ver1" },
            { name: "Mašine", link: "/podesavanja/masinezastampu", img: "printers_icon_ver1" },
            { name: "PPŠ", link: "/podesavanja/pripremastampe/1", img: "preparation_icon_ver1" },
            { name: "Iz. Mediji", link: "/podesavanja/izlazni-mediji", img: "outputMedia_icon_ver1" },
            { name: "Oprema", link: "/podesavanja/opreme", img: "equipment_icon_ver1" },
            { name: "Boje", link: "/podesavanja/boje", img: "colors_icon_ver1" },
            { name: "Raster", link: "/podesavanja/pzp", img: "raster_icon_ver1" },
            { name: "Rez. - Ulaganj", link: "/podesavanja/rezanje-ulaganja", img: "cuttingInv_icon_ver1" },
            { name: "Rezanje", link: "/podesavanja/rezanje", img: "cutting_icon_ver1" },
            { name: "Obrezivanje", link: "/podesavanja/obrezivanja", img: "croping_icon_ver1" },
            { name: "Savijanja pripr.", link: "/podesavanja/savijanja-priprema", img: "bending-preparations_icon_ver1" },
            { name: "Savijanja paralelno", link: "/podesavanja/savijanja-paralelno", img: "parallel-bending_icon_ver1" },
            { name: "Savijanje unakrsno", link: "/podesavanja/savijanja-unakrsno", img: "folding_icon_ver1" },
            { name: "Digitalne Mašine", link: "/podesavanja/digitalne-masine", img: "digitalPrinting_icon_ver1" },
            { name: "Sito šabloni", link: "/podesavanja/sito-sabloni", img: "screen-printing_icon_ver1" },
            { name: "Sito boje", link: "/podesavanja/sito-boje", img: "screenPrintingColors_icon_ver1" },
            { name: "Sito sptf", link: "/podesavanja/sito-sptfi", img: "screenPrintingSptf_icon_ver1" },
            { name: "Sito viskozitet", link: "/podesavanja/sito-viskoziteti", img: "screenPrintingViscosity_icon_ver1" },
        ];
        this.resteStartTekst = true;
        this.resetXTekst = false;
        this.textValid = false;
    }
    PodesavanjaComponent.prototype.ngOnInit = function () {
        this.resetX = Math.floor(Math.random() * Math.floor(5));
        this.resetY = Math.floor(Math.random() * Math.floor(5));
    };
    PodesavanjaComponent.prototype.resetNextStep = function () {
        this.resteStartTekst = false;
        this.resetXTekst = true;
    };
    PodesavanjaComponent.prototype.resetP = function (event) {
        if (this.resetX + this.resetY == +event.key) {
            this.resetXTekst = false;
            this.textValid = true;
        }
    };
    PodesavanjaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-podesavanja',
            template: __webpack_require__(/*! ./podesavanja.component.html */ "./src/app/components/podesavanja/podesavanja/podesavanja.component.html"),
            styles: [__webpack_require__(/*! ./podesavanja.component.css */ "./src/app/components/podesavanja/podesavanja/podesavanja.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PodesavanjaComponent);
    return PodesavanjaComponent;
}());



/***/ }),

/***/ "./src/app/components/podesavanja/podesavanje/podesavanje.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/podesavanja/podesavanje/podesavanje.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9kZXNhdmFuamEvcG9kZXNhdmFuamUvcG9kZXNhdmFuamUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/podesavanja/podesavanje/podesavanje.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/podesavanja/podesavanje/podesavanje.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  podesavanje works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/podesavanja/podesavanje/podesavanje.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/podesavanja/podesavanje/podesavanje.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PodesavanjeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodesavanjeComponent", function() { return PodesavanjeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PodesavanjeComponent = /** @class */ (function () {
    function PodesavanjeComponent() {
    }
    PodesavanjeComponent.prototype.ngOnInit = function () {
    };
    PodesavanjeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-podesavanje',
            template: __webpack_require__(/*! ./podesavanje.component.html */ "./src/app/components/podesavanja/podesavanje/podesavanje.component.html"),
            styles: [__webpack_require__(/*! ./podesavanje.component.css */ "./src/app/components/podesavanja/podesavanje/podesavanje.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PodesavanjeComponent);
    return PodesavanjeComponent;
}());



/***/ }),

/***/ "./src/app/components/podesavanja/priprema-stampe/priprema-stampe.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/podesavanja/priprema-stampe/priprema-stampe.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9kZXNhdmFuamEvcHJpcHJlbWEtc3RhbXBlL3ByaXByZW1hLXN0YW1wZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/podesavanja/priprema-stampe/priprema-stampe.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/podesavanja/priprema-stampe/priprema-stampe.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table  [hidden]=\"!tableForm\" [title] =\"title\" [path] =\"path\" [searches]=\"searches\" [schemes]=\"schemes\"></app-table>\n<app-form  [hidden]=\"tableForm\" [title] =\"title\" [path] =\"path\" [schemes]=\"schemes\" [id]=\"id\"></app-form>"

/***/ }),

/***/ "./src/app/components/podesavanja/priprema-stampe/priprema-stampe.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/podesavanja/priprema-stampe/priprema-stampe.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PripremaStampeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PripremaStampeComponent", function() { return PripremaStampeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PripremaStampeComponent = /** @class */ (function () {
    function PripremaStampeComponent(activeRoute) {
        this.activeRoute = activeRoute;
        // Basic
        this.title = 'Priprema štampe';
        this.path = 'pripremastampe';
        // Search
        this.searches = [];
        //Schemes
        this.schemes = [
            { 'name': 'pp_pregledPosla', 'displayName': 'Pregled posla', 'value': '', 'currency': 'h', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
            { 'name': 'pp_upoznavanjePosla', 'displayName': 'Upoznavanje posla', 'value': '', 'currency': 'h', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Upoznavanje sa radnim zadatkom', 'example': null, 'listPath': null, 'category': null },
            { 'name': 'pp_arhiviranjePodataka', 'displayName': 'Arhiviranje podataka', 'value': '', 'currency': 'h', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
            { 'name': 'pp_prenosPodataka_do10mb', 'displayName': 'Ruk. i prenos do 10mb', 'value': '', 'currency': 'h', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Rukovanje i prenos informacija/teksta do 10mb', 'example': null, 'listPath': null, 'category': null },
            { 'name': 'pp_prenosPodataka_preko10mb', 'displayName': 'Ruk. i prenos', 'value': '', 'currency': 'h', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Rukovanje i prenos informacija/teksta iznad 10mb', 'example': null, 'listPath': null, 'category': null },
            { 'name': 'ot_jednostavanRukopis_u', 'displayName': 'Jednostavan rukopis U', 'value': '', 'currency': 'h/1000k', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Jednostavan rukopis - Unos teksta', 'example': '0.1000 h / 1000 karaktera', 'listPath': null, 'category': null },
            { 'name': 'ot_jednostavanRukopis_o', 'displayName': 'Jednostavan rukopis K', 'value': '', 'currency': 'h/1000k', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Jednostavan rukopis - Korektura', 'example': '0.1000 h / 1000 karaktera', 'listPath': null, 'category': null },
            { 'name': 'ot_slozenRukopis_u', 'displayName': 'Složen rukopis U', 'value': '', 'currency': 'h/1000k', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Složen rukopis - Unos teksta', 'example': '0.1000 h / 1000 karaktera', 'listPath': null, 'category': null },
            { 'name': 'ot_slozenRukopis_o', 'displayName': 'Složen rukopis K', 'value': '', 'currency': 'h/1000k', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Složen rukopis - Korektura', 'example': '0.1000 h / 1000 karaktera', 'listPath': null, 'category': null },
            { 'name': 'ot_tehnickiTekst_u', 'displayName': 'Tehnički tekst U', 'value': '', 'currency': 'h/1000k', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Tehnički tekst - Unost teksta', 'example': '0.1000 h / 1000 karaktera', 'listPath': null, 'category': null },
            { 'name': 'ot_tehnickiTekst_o', 'displayName': 'Tehnički tekst K', 'value': '', 'currency': 'h/1000k', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Tehnički tekst - Korektura', 'example': '0.1000 h / 1000 karaktera', 'listPath': null, 'category': null },
            { 'name': 'ot_straniTekst_u', 'displayName': 'Strani tekst U', 'value': '', 'currency': 'h/1000k', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Strani tekst - Unost teksta', 'example': '0.1000 h / 1000 karaktera', 'listPath': null, 'category': null },
            { 'name': 'ot_straniTekst_o', 'displayName': 'Strani tekst K', 'value': '', 'currency': 'h/1000k', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Strani tekst - Korektura', 'example': '0.1000 h / 1000 karaktera', 'listPath': null, 'category': null },
            { 'name': 'ot_unosTeksta_u', 'displayName': 'ASCII tekst U', 'value': '', 'currency': 'h/1000k', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Unošenje ASCII teksta - Unost teksta', 'example': '0.1000 h / 1000 karaktera', 'listPath': null, 'category': null },
            { 'name': 'ot_unosTeksta_o', 'displayName': 'ASCII tekst K', 'value': '', 'currency': 'h/1000k', 'req': false, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'ASCII tekst - Korektura', 'example': '0.1000 h / 1000 karaktera', 'listPath': null, 'category': null },
            { 'name': 'ks_ilustracije_j', 'displayName': 'Ilustracije J', 'value': '', 'currency': 'h/slika', 'req': false, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Ilustracije i crtanje - Jednostavano', 'example': '0.1 h/slika', 'listPath': null, 'category': null },
            { 'name': 'ks_ilustracije_p', 'displayName': 'Ilustracije P', 'value': '', 'currency': 'h/slika', 'req': false, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Ilustracije i crtanje - Prosečno', 'example': '0.1 h/slika', 'listPath': null, 'category': null },
            { 'name': 'ks_ilustracije_s', 'displayName': 'Ilustracije S', 'value': '', 'currency': 'h/slika', 'req': false, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Ilustracije i crtanje - Složeno', 'example': '0.1 h/slika', 'listPath': null, 'category': null },
            { 'name': 'ks_slikanje_j', 'displayName': 'Slikanje J', 'value': '', 'currency': 'h/slika', 'req': false, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Slikanje - Jednostavano', 'example': '0.1 h/slika', 'listPath': null, 'category': null },
            { 'name': 'ks_slikanje_p', 'displayName': 'Slikanje P', 'value': '', 'currency': 'h/slika', 'req': false, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Slikanje - Prosečno', 'example': '0.1 h/slika', 'listPath': null, 'category': null },
            { 'name': 'ks_slikanje_s', 'displayName': 'Slikanje S', 'value': '', 'currency': 'h/slika', 'req': false, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Slikanje - Složeno', 'example': '0.1 h/slika', 'listPath': null, 'category': null },
            { 'name': 'ks_skeniranjeLinijski_j', 'displayName': 'Skeniranje (linijski) J', 'value': '', 'currency': 'h/slika', 'req': false, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Skeniranje (linijski) - Jednostavano', 'example': '0.1 h/slika', 'listPath': null, 'category': null },
            { 'name': 'ks_skeniranjeLinijski_p', 'displayName': 'Skeniranje (linijski) P', 'value': '', 'currency': 'h/slika', 'req': false, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Skeniranje (linijski) - Prosečno', 'example': '0.1 h/slika', 'listPath': null, 'category': null },
            { 'name': 'ks_skeniranjeLinijski_s', 'displayName': 'Skeniranje (linijski) S', 'value': '', 'currency': 'h/slika', 'req': false, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Skeniranje (linijski) - Složeno', 'example': '0.1 h/slika', 'listPath': null, 'category': null },
            { 'name': 'ks_skeniranjeRaster_j', 'displayName': 'Skeniranje (raster) J', 'value': '', 'currency': 'h/slika', 'req': false, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Skeniranje (raster - c/b) - Jednostavano', 'example': '0.1 h/slika', 'listPath': null, 'category': null },
            { 'name': 'ks_skeniranjeRaster_p', 'displayName': 'Skeniranje (raster) P', 'value': '', 'currency': 'h/slika', 'req': false, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Skeniranje (raster - c/b) - Prosečno', 'example': '0.1 h/slika', 'listPath': null, 'category': null },
            { 'name': 'ks_skeniranjeRaster_s', 'displayName': 'Skeniranje (raster) S', 'value': '', 'currency': 'h/slika', 'req': false, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Skeniranje (raster - c/b) - Složeno', 'example': '0.1 h/slika', 'listPath': null, 'category': null },
            { 'name': 'ks_skeniranjeRGB_j', 'displayName': 'Skeniranje (RGB) J', 'value': '', 'currency': 'h/slika', 'req': false, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Skeniranje (RGB, CMYK) - Jednostavano', 'example': '0.1 h/slika', 'listPath': null, 'category': null },
            { 'name': 'ks_skeniranjeRGB_p', 'displayName': 'Skeniranje (RGB) P', 'value': '', 'currency': 'h/slika', 'req': false, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Skeniranje (RGB, CMYK) - Prosečno', 'example': '0.1 h/slika', 'listPath': null, 'category': null },
            { 'name': 'ks_skeniranjeRGB_s', 'displayName': 'Skeniranje (RGB) S', 'value': '', 'currency': 'h/slika', 'req': false, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Skeniranje (RGB, CMYK) - Složeno', 'example': '0.1 h/slika', 'listPath': null, 'category': null },
            { 'name': 'fm_prelopStranice_j', 'displayName': 'Prelom stranice J', 'value': '', 'currency': 'h/strana', 'req': false, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Prelom stranica i uređivanje - Jednostavano', 'example': '0.1 h/strana', 'listPath': null, 'category': null },
            { 'name': 'fm_prelopStranice_p', 'displayName': 'Prelom stranice P', 'value': '', 'currency': 'h/strana', 'req': false, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Prelom stranica i uređivanje - Prosečno', 'example': '0.1 h/strana', 'listPath': null, 'category': null },
            { 'name': 'fm_prelopStranice_s', 'displayName': 'Prelom stranice S', 'value': '', 'currency': 'h/strana', 'req': false, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Prelom stranica i uređivanje - Složeno', 'example': '0.1 h/strana', 'listPath': null, 'category': null },
            { 'name': 'fm_montaza_j', 'displayName': 'Elektronska montaža J', 'value': '', 'currency': 'h/strana', 'req': false, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Elektronska montaža - Jednostavana', 'example': '0.1 h/strana', 'listPath': null, 'category': null },
            { 'name': 'fm_montaza_p', 'displayName': 'Elektronska montaža P', 'value': '', 'currency': 'h/strana', 'req': false, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Elektronska montaža - Prosečna', 'example': '0.1 h/strana', 'listPath': null, 'category': null },
            { 'name': 'fm_montaza_s', 'displayName': 'Elektronska montaža S', 'value': '', 'currency': 'h/strana', 'req': false, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Elektronska montaža - Složena', 'example': '0.1 h/strana', 'listPath': null, 'category': null },
            { 'name': 'dos_dodatnaObradaSLika_j', 'displayName': 'Dodatna obrada slike J', 'value': '', 'currency': 'h/slika', 'req': false, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Dodatna obrada slike - Jednostavana', 'example': '0.1 h/slika', 'listPath': null, 'category': null },
            { 'name': 'dos_dodatnaObradaSLika_p', 'displayName': 'Dodatna obrada slike P', 'value': '', 'currency': 'h/slika', 'req': false, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Dodatna obrada slike - Prosečna', 'example': '0.1 h/slika', 'listPath': null, 'category': null },
            { 'name': 'dos_dodatnaObradaSLika_s', 'displayName': 'Dodatna obrada slike S', 'value': '', 'currency': 'h/slika', 'req': false, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Dodatna obrada slike - Složena', 'example': '0.1 h/slika', 'listPath': null, 'category': null },
        ];
    }
    PripremaStampeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.paramMap
            .subscribe(function (params) {
            if (params.get('id')) {
                _this.tableForm = false;
                if (params.get('id') != 'dodaj') {
                    _this.id = +params.get('id');
                }
            }
            else {
                _this.tableForm = true;
            }
        });
    };
    PripremaStampeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-priprema-stampe',
            template: __webpack_require__(/*! ./priprema-stampe.component.html */ "./src/app/components/podesavanja/priprema-stampe/priprema-stampe.component.html"),
            styles: [__webpack_require__(/*! ./priprema-stampe.component.css */ "./src/app/components/podesavanja/priprema-stampe/priprema-stampe.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], PripremaStampeComponent);
    return PripremaStampeComponent;
}());



/***/ }),

/***/ "./src/app/components/podesavanja/procenat-zauzetosti-povrsine/procenat-zauzetosti-povrsine.component.css":
/*!****************************************************************************************************************!*\
  !*** ./src/app/components/podesavanja/procenat-zauzetosti-povrsine/procenat-zauzetosti-povrsine.component.css ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9kZXNhdmFuamEvcHJvY2VuYXQtemF1emV0b3N0aS1wb3Zyc2luZS9wcm9jZW5hdC16YXV6ZXRvc3RpLXBvdnJzaW5lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/podesavanja/procenat-zauzetosti-povrsine/procenat-zauzetosti-povrsine.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/components/podesavanja/procenat-zauzetosti-povrsine/procenat-zauzetosti-povrsine.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table  [hidden]=\"!tableForm\" [title] =\"title\" [path] =\"path\" [searches]=\"searches\" [schemes]=\"schemes\"></app-table>\n<app-form  [hidden]=\"tableForm\" [title] =\"title\" [path] =\"path\" [schemes]=\"schemes\" [id]=\"id\"></app-form>"

/***/ }),

/***/ "./src/app/components/podesavanja/procenat-zauzetosti-povrsine/procenat-zauzetosti-povrsine.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/podesavanja/procenat-zauzetosti-povrsine/procenat-zauzetosti-povrsine.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ProcenatZauzetostiPovrsineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcenatZauzetostiPovrsineComponent", function() { return ProcenatZauzetostiPovrsineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProcenatZauzetostiPovrsineComponent = /** @class */ (function () {
    function ProcenatZauzetostiPovrsineComponent(activeRoute) {
        this.activeRoute = activeRoute;
        // Basic
        this.title = 'Procenat zauzetosti površine';
        this.path = 'pzp';
        // Search
        this.searches = [
            { 'name': 'vrstaposla', 'displayName': 'Vrsta posla', 'value': '', 'currency': null, 'minLength': 3, 'minValue': null, 'maxValue': null, 'help': null, 'example': null },
            { 'name': 'minvrednost', 'displayName': 'Minimalna vrednost', 'value': '', 'currency': '%', 'minLength': null, 'minValue': 0, 'maxValue': 1000, 'help': null, 'example': null },
            { 'name': 'maxvrednost', 'displayName': 'Maksimalna vrednost', 'value': '', 'currency': '%', 'minLength': null, 'minValue': 0, 'maxValue': 1000, 'help': null, 'example': null },
        ];
        //Schemes
        this.schemes = [
            { 'name': 'vrednost', 'displayName': 'Procenat zauz. površine', 'value': '', 'currency': '%', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
            { 'name': 'vrstaPosla', 'displayName': 'Vrsta posla', 'value': '', 'currency': null, 'req': true, 'minLength': 3, 'minValue': null, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
        ];
    }
    ProcenatZauzetostiPovrsineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.paramMap
            .subscribe(function (params) {
            if (params.get('id')) {
                _this.tableForm = false;
                if (params.get('id') != 'dodaj') {
                    _this.id = +params.get('id');
                }
            }
            else {
                _this.tableForm = true;
            }
        });
    };
    ProcenatZauzetostiPovrsineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-procenat-zauzetosti-povrsine',
            template: __webpack_require__(/*! ./procenat-zauzetosti-povrsine.component.html */ "./src/app/components/podesavanja/procenat-zauzetosti-povrsine/procenat-zauzetosti-povrsine.component.html"),
            styles: [__webpack_require__(/*! ./procenat-zauzetosti-povrsine.component.css */ "./src/app/components/podesavanja/procenat-zauzetosti-povrsine/procenat-zauzetosti-povrsine.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ProcenatZauzetostiPovrsineComponent);
    return ProcenatZauzetostiPovrsineComponent;
}());



/***/ }),

/***/ "./src/app/components/podesavanja/rezanje-ulaganje/rezanje-ulaganje.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/podesavanja/rezanje-ulaganje/rezanje-ulaganje.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9kZXNhdmFuamEvcmV6YW5qZS11bGFnYW5qZS9yZXphbmplLXVsYWdhbmplLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/podesavanja/rezanje-ulaganje/rezanje-ulaganje.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/podesavanja/rezanje-ulaganje/rezanje-ulaganje.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table  [hidden]=\"!tableForm\" [title] =\"title\" [path] =\"path\" [searches]=\"searches\" [schemes]=\"schemes\"></app-table>\n<app-form  [hidden]=\"tableForm\" [title] =\"title\" [path] =\"path\" [schemes]=\"schemes\" [id]=\"id\"></app-form>"

/***/ }),

/***/ "./src/app/components/podesavanja/rezanje-ulaganje/rezanje-ulaganje.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/podesavanja/rezanje-ulaganje/rezanje-ulaganje.component.ts ***!
  \***************************************************************************************/
/*! exports provided: RezanjeUlaganjeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RezanjeUlaganjeComponent", function() { return RezanjeUlaganjeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RezanjeUlaganjeComponent = /** @class */ (function () {
    function RezanjeUlaganjeComponent(activeRoute) {
        this.activeRoute = activeRoute;
        // Basic
        this.title = 'Ulaganje papira (rezanje)';
        this.path = 'rezanje-ulaganja';
        // Search
        this.searches = [
            { 'name': 'tipPapira', 'displayName': 'Tip papira', 'value': '', 'currency': null, 'minLength': 3, 'minValue': null, 'maxValue': null, 'help': null, 'example': null },
            { 'name': 'mingramatura', 'displayName': 'Gramatura (min)', 'value': '', 'currency': 'g/m²', 'minLength': null, 'minValue': 0, 'maxValue': 1000, 'help': null, 'example': null },
            { 'name': 'maxgramatura', 'displayName': 'Gramatura (max)', 'value': '', 'currency': 'g/m²', 'minLength': null, 'minValue': 0, 'maxValue': 1000, 'help': null, 'example': null },
        ];
        //Schemes
        this.schemes = [
            { 'name': 'brojTabaka', 'displayName': 'Broj tabaka', 'value': '', 'currency': 'tabaka', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Broj tabaka pri jednom ulaganju', 'example': null, 'listPath': null, 'category': null },
            { 'name': 'tipPapira', 'displayName': 'Tip papira', 'value': '', 'currency': null, 'req': true, 'minLength': 3, 'minValue': null, 'maxValue': null, 'help': null, 'example': null, 'listPath': 'tip-papira', 'attribute': 'naziv', 'category': null },
            { 'name': 'gramatura', 'displayName': 'Gramatura', 'value': '', 'currency': 'g/m²', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
        ];
    }
    RezanjeUlaganjeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.paramMap
            .subscribe(function (params) {
            if (params.get('id')) {
                _this.tableForm = false;
                if (params.get('id') != 'dodaj') {
                    _this.id = +params.get('id');
                }
            }
            else {
                _this.tableForm = true;
            }
        });
    };
    RezanjeUlaganjeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rezanje-ulaganje',
            template: __webpack_require__(/*! ./rezanje-ulaganje.component.html */ "./src/app/components/podesavanja/rezanje-ulaganje/rezanje-ulaganje.component.html"),
            styles: [__webpack_require__(/*! ./rezanje-ulaganje.component.css */ "./src/app/components/podesavanja/rezanje-ulaganje/rezanje-ulaganje.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], RezanjeUlaganjeComponent);
    return RezanjeUlaganjeComponent;
}());



/***/ }),

/***/ "./src/app/components/podesavanja/rezanje/rezanje.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/podesavanja/rezanje/rezanje.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9kZXNhdmFuamEvcmV6YW5qZS9yZXphbmplLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/podesavanja/rezanje/rezanje.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/podesavanja/rezanje/rezanje.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table  [hidden]=\"!tableForm\" [title] =\"title\" [path] =\"path\" [searches]=\"searches\" [schemes]=\"schemes\"></app-table>\n<app-form  [hidden]=\"tableForm\" [title] =\"title\" [path] =\"path\" [schemes]=\"schemes\" [id]=\"id\"></app-form>"

/***/ }),

/***/ "./src/app/components/podesavanja/rezanje/rezanje.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/podesavanja/rezanje/rezanje.component.ts ***!
  \*********************************************************************/
/*! exports provided: RezanjeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RezanjeComponent", function() { return RezanjeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RezanjeComponent = /** @class */ (function () {
    function RezanjeComponent(activeRoute) {
        this.activeRoute = activeRoute;
        // Basic
        this.title = 'Rezanje';
        this.path = 'rezanja';
        // Search
        this.searches = [
            { 'name': 'minSirina', 'displayName': 'Širina (min)', 'value': '', 'currency': 'mm', 'minLength': null, 'minValue': 0, 'maxValue': 1000, 'help': null, 'example': null },
            { 'name': 'maxSirina', 'displayName': 'Širina (max)', 'value': '', 'currency': 'mm', 'minLength': null, 'minValue': 0, 'maxValue': 1000, 'help': null, 'example': null },
            { 'name': 'minDuzina', 'displayName': 'Dužina (min)', 'value': '', 'currency': 'mm', 'minLength': null, 'minValue': 0, 'maxValue': 1999, 'help': null, 'example': null },
            { 'name': 'maxDuzina', 'displayName': 'Dužina (max)', 'value': '', 'currency': 'mm', 'minLength': null, 'minValue': 0, 'maxValue': 2000, 'help': null, 'example': null },
            { 'name': 'minBrojIzrezanihTabaka', 'displayName': 'Br. izrezanih tab. (min)', 'value': '', 'currency': 'tabaka', 'minLength': null, 'minValue': 0, 'maxValue': 1999, 'help': null, 'example': null },
            { 'name': 'maxBrojIzrezanihTabaka', 'displayName': 'Br. izrezanih tab. (max)', 'value': '', 'currency': 'tabaka', 'minLength': null, 'minValue': 0, 'maxValue': 2000, 'help': null, 'example': null },
            { 'name': 'minVremeRezanja', 'displayName': 'Vreme rezanja (min)', 'value': '', 'currency': 'h', 'minLength': null, 'minValue': 0, 'maxValue': 1999, 'help': null, 'example': null },
            { 'name': 'maxVremeRezanja', 'displayName': 'Vreme rezanja (max)', 'value': '', 'currency': 'h', 'minLength': null, 'minValue': 0, 'maxValue': 2000, 'help': null, 'example': null },
            { 'name': 'minPripremnoVreme', 'displayName': 'Priprepno vreme (min)', 'value': '', 'currency': 'h', 'minLength': null, 'minValue': 0, 'maxValue': 1999, 'help': null, 'example': null },
            { 'name': 'maxPripremnoVreme', 'displayName': 'Priprepno vreme (max)', 'value': '', 'currency': 'h', 'minLength': null, 'minValue': 0, 'maxValue': 2000, 'help': null, 'example': null },
        ];
        //Schemes
        this.schemes = [
            { 'name': 'x', 'displayName': 'Maksimalna širina', 'value': '', 'currency': 'mm', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
            { 'name': 'y', 'displayName': 'Maksimalna dužina', 'value': '', 'currency': 'mm', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
            { 'name': 'brojIzrezanihTabaka', 'displayName': 'Br. izrezanih tabaka', 'value': '', 'currency': 'tabaka', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Broj tabaka izrezan iz jednog tabaka', 'example': null, 'listPath': null, 'category': null },
            { 'name': 'vremeRezanja', 'displayName': 'Vreme rezanja', 'value': '', 'currency': 'h', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Vreme rezanja po jednom ulaganju', 'example': null, 'listPath': null, 'category': null },
            { 'name': 'pripremnoVreme', 'displayName': 'Priprepno vreme', 'value': '', 'currency': 'h', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
        ];
    }
    RezanjeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.paramMap
            .subscribe(function (params) {
            if (params.get('id')) {
                _this.tableForm = false;
                if (params.get('id') != 'dodaj') {
                    _this.id = +params.get('id');
                }
            }
            else {
                _this.tableForm = true;
            }
        });
    };
    RezanjeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rezanje',
            template: __webpack_require__(/*! ./rezanje.component.html */ "./src/app/components/podesavanja/rezanje/rezanje.component.html"),
            styles: [__webpack_require__(/*! ./rezanje.component.css */ "./src/app/components/podesavanja/rezanje/rezanje.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], RezanjeComponent);
    return RezanjeComponent;
}());



/***/ }),

/***/ "./src/app/components/podesavanja/savijanje-paralelno/savijanje-paralelno.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/podesavanja/savijanje-paralelno/savijanje-paralelno.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9kZXNhdmFuamEvc2F2aWphbmplLXBhcmFsZWxuby9zYXZpamFuamUtcGFyYWxlbG5vLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/podesavanja/savijanje-paralelno/savijanje-paralelno.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/podesavanja/savijanje-paralelno/savijanje-paralelno.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table  [hidden]=\"!tableForm\" [title] =\"title\" [path] =\"path\" [searches]=\"searches\" [schemes]=\"schemes\"></app-table>\n<app-form  [hidden]=\"tableForm\" [title] =\"title\" [path] =\"path\" [schemes]=\"schemes\" [id]=\"id\"></app-form>"

/***/ }),

/***/ "./src/app/components/podesavanja/savijanje-paralelno/savijanje-paralelno.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/podesavanja/savijanje-paralelno/savijanje-paralelno.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: SavijanjeParalelnoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavijanjeParalelnoComponent", function() { return SavijanjeParalelnoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SavijanjeParalelnoComponent = /** @class */ (function () {
    function SavijanjeParalelnoComponent(activeRoute) {
        this.activeRoute = activeRoute;
        // Basic
        this.title = 'Savijanje - paralelno';
        this.path = 'savijanja-paralelno';
        // Search
        this.searches = [
            { 'name': 'minDuzinaTabaka', 'displayName': 'Duzina tabaka (min)', 'value': '', 'currency': 'tabaka/h', 'minLength': null, 'minValue': null, 'maxValue': 1000, 'help': null, 'example': null },
            { 'name': 'maxDuzinaTabaka', 'displayName': 'Duzina tabaka(max)', 'value': '', 'currency': 'tabaka/h', 'minLength': null, 'minValue': null, 'maxValue': 1000, 'help': null, 'example': null },
        ];
        //Schemes
        this.schemes = [
            { 'name': 'duzinaTabaka', 'displayName': 'Duzina tabaka', 'value': '', 'currency': 'mm', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
            { 'name': 'malaMasina', 'displayName': 'Mala mašina', 'value': '', 'currency': 'tabaka/h', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
            { 'name': 'velikaMasina', 'displayName': 'Velika mašina', 'value': '', 'currency': 'tabaka/h', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
        ];
    }
    SavijanjeParalelnoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.paramMap
            .subscribe(function (params) {
            if (params.get('id')) {
                _this.tableForm = false;
                if (params.get('id') != 'dodaj') {
                    _this.id = +params.get('id');
                }
            }
            else {
                _this.tableForm = true;
            }
        });
    };
    SavijanjeParalelnoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-savijanje-paralelno',
            template: __webpack_require__(/*! ./savijanje-paralelno.component.html */ "./src/app/components/podesavanja/savijanje-paralelno/savijanje-paralelno.component.html"),
            styles: [__webpack_require__(/*! ./savijanje-paralelno.component.css */ "./src/app/components/podesavanja/savijanje-paralelno/savijanje-paralelno.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SavijanjeParalelnoComponent);
    return SavijanjeParalelnoComponent;
}());



/***/ }),

/***/ "./src/app/components/podesavanja/savijanje-priprema/savijanje-priprema.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/components/podesavanja/savijanje-priprema/savijanje-priprema.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9kZXNhdmFuamEvc2F2aWphbmplLXByaXByZW1hL3NhdmlqYW5qZS1wcmlwcmVtYS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/podesavanja/savijanje-priprema/savijanje-priprema.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/podesavanja/savijanje-priprema/savijanje-priprema.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table  [hidden]=\"!tableForm\" [title] =\"title\" [path] =\"path\" [searches]=\"searches\" [schemes]=\"schemes\"></app-table>\n<app-form  [hidden]=\"tableForm\" [title] =\"title\" [path] =\"path\" [schemes]=\"schemes\" [id]=\"id\"></app-form>"

/***/ }),

/***/ "./src/app/components/podesavanja/savijanje-priprema/savijanje-priprema.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/podesavanja/savijanje-priprema/savijanje-priprema.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SavijanjePripremaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavijanjePripremaComponent", function() { return SavijanjePripremaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SavijanjePripremaComponent = /** @class */ (function () {
    function SavijanjePripremaComponent(activeRoute) {
        this.activeRoute = activeRoute;
        // Basic
        this.title = 'Savijanje - pripremno vreme';
        this.path = 'savijanja-priprema';
        // Search
        this.searches = [
            { 'name': 'tipOperacije', 'displayName': 'Tip operacije', 'value': '', 'currency': null, 'minLength': 3, 'minValue': null, 'maxValue': null, 'help': null, 'example': null },
            { 'name': 'tipSavijanja', 'displayName': 'Tip savijanja', 'value': '', 'currency': null, 'minLength': 3, 'minValue': null, 'maxValue': null, 'help': null, 'example': null },
            { 'name': 'minVremePripreme', 'displayName': 'Vreme pripreme (min)', 'value': '', 'currency': 'h', 'minLength': null, 'minValue': null, 'maxValue': 1000, 'help': null, 'example': null },
            { 'name': 'maxVremePripreme', 'displayName': 'Vreme pripreme (max)', 'value': '', 'currency': 'h', 'minLength': null, 'minValue': null, 'maxValue': 1000, 'help': null, 'example': null },
        ];
        //Schemes
        this.schemes = [
            { 'name': 'tipOperacije', 'displayName': 'Tip operacije', 'value': '', 'currency': null, 'req': true, 'minLength': 3, 'minValue': null, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
            { 'name': 'tipSavijanja', 'displayName': 'Tip savijanja', 'value': '', 'currency': null, 'req': true, 'minLength': 3, 'minValue': null, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
            { 'name': 'vremePripreme', 'displayName': 'Vreme pripreme', 'value': '', 'currency': 'h', 'req': true, 'minLength': null, 'minValue': null, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
        ];
    }
    SavijanjePripremaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.paramMap
            .subscribe(function (params) {
            if (params.get('id')) {
                _this.tableForm = false;
                if (params.get('id') != 'dodaj') {
                    _this.id = +params.get('id');
                }
            }
            else {
                _this.tableForm = true;
            }
        });
    };
    SavijanjePripremaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-savijanje-priprema',
            template: __webpack_require__(/*! ./savijanje-priprema.component.html */ "./src/app/components/podesavanja/savijanje-priprema/savijanje-priprema.component.html"),
            styles: [__webpack_require__(/*! ./savijanje-priprema.component.css */ "./src/app/components/podesavanja/savijanje-priprema/savijanje-priprema.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SavijanjePripremaComponent);
    return SavijanjePripremaComponent;
}());



/***/ }),

/***/ "./src/app/components/podesavanja/savijanje-unakrsno/savijanje-unakrsno.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/components/podesavanja/savijanje-unakrsno/savijanje-unakrsno.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9kZXNhdmFuamEvc2F2aWphbmplLXVuYWtyc25vL3NhdmlqYW5qZS11bmFrcnNuby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/podesavanja/savijanje-unakrsno/savijanje-unakrsno.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/podesavanja/savijanje-unakrsno/savijanje-unakrsno.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table  [hidden]=\"!tableForm\" [title] =\"title\" [path] =\"path\" [searches]=\"searches\" [schemes]=\"schemes\"></app-table>\n<app-form  [hidden]=\"tableForm\" [title] =\"title\" [path] =\"path\" [schemes]=\"schemes\" [id]=\"id\"></app-form>"

/***/ }),

/***/ "./src/app/components/podesavanja/savijanje-unakrsno/savijanje-unakrsno.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/podesavanja/savijanje-unakrsno/savijanje-unakrsno.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SavijanjeUnakrsnoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavijanjeUnakrsnoComponent", function() { return SavijanjeUnakrsnoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SavijanjeUnakrsnoComponent = /** @class */ (function () {
    function SavijanjeUnakrsnoComponent(activeRoute) {
        this.activeRoute = activeRoute;
        // Basic
        this.title = 'Savijanje - unakrsno';
        this.path = 'savijanja-unakrsno';
        // Search
        this.searches = [
            { 'name': 'minBrojSavijanja', 'displayName': 'Broj savijanja (min)', 'value': '', 'currency': 'savijanja', 'minLength': null, 'minValue': null, 'maxValue': 1000, 'help': null, 'example': null },
            { 'name': 'maxBrojSavijanja', 'displayName': 'Broj savijanja(max)', 'value': '', 'currency': 'savijanja', 'minLength': null, 'minValue': null, 'maxValue': 1000, 'help': null, 'example': null },
        ];
        //Schemes
        this.schemes = [
            { 'name': 'brojSavijanja', 'displayName': 'Broj savijanja', 'value': '', 'currency': 'savijanja', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
            { 'name': 'manje', 'displayName': '< 180 x 250mm', 'value': '', 'currency': 'tabaka/h', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
            { 'name': 'vece', 'displayName': '> 180 x 250mm', 'value': '', 'currency': 'tabaka/h', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
        ];
    }
    SavijanjeUnakrsnoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.paramMap
            .subscribe(function (params) {
            if (params.get('id')) {
                _this.tableForm = false;
                if (params.get('id') != 'dodaj') {
                    _this.id = +params.get('id');
                }
            }
            else {
                _this.tableForm = true;
            }
        });
    };
    SavijanjeUnakrsnoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-savijanje-unakrsno',
            template: __webpack_require__(/*! ./savijanje-unakrsno.component.html */ "./src/app/components/podesavanja/savijanje-unakrsno/savijanje-unakrsno.component.html"),
            styles: [__webpack_require__(/*! ./savijanje-unakrsno.component.css */ "./src/app/components/podesavanja/savijanje-unakrsno/savijanje-unakrsno.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SavijanjeUnakrsnoComponent);
    return SavijanjeUnakrsnoComponent;
}());



/***/ }),

/***/ "./src/app/components/podesavanja/savijanje/savijanje.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/podesavanja/savijanje/savijanje.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9kZXNhdmFuamEvc2F2aWphbmplL3NhdmlqYW5qZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/podesavanja/savijanje/savijanje.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/podesavanja/savijanje/savijanje.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  savijanje works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/podesavanja/savijanje/savijanje.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/podesavanja/savijanje/savijanje.component.ts ***!
  \*************************************************************************/
/*! exports provided: SavijanjeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavijanjeComponent", function() { return SavijanjeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SavijanjeComponent = /** @class */ (function () {
    function SavijanjeComponent() {
    }
    SavijanjeComponent.prototype.ngOnInit = function () {
    };
    SavijanjeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-savijanje',
            template: __webpack_require__(/*! ./savijanje.component.html */ "./src/app/components/podesavanja/savijanje/savijanje.component.html"),
            styles: [__webpack_require__(/*! ./savijanje.component.css */ "./src/app/components/podesavanja/savijanje/savijanje.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SavijanjeComponent);
    return SavijanjeComponent;
}());



/***/ }),

/***/ "./src/app/components/podesavanja/sito-boja/sito-boja.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/podesavanja/sito-boja/sito-boja.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9kZXNhdmFuamEvc2l0by1ib2phL3NpdG8tYm9qYS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/podesavanja/sito-boja/sito-boja.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/podesavanja/sito-boja/sito-boja.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table  [hidden]=\"!tableForm\" [title] =\"title\" [path] =\"path\" [searches]=\"searches\" [schemes]=\"schemes\"></app-table>\n<app-form  [hidden]=\"tableForm\" [title] =\"title\" [path] =\"path\" [schemes]=\"schemes\" [id]=\"id\"></app-form>"

/***/ }),

/***/ "./src/app/components/podesavanja/sito-boja/sito-boja.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/podesavanja/sito-boja/sito-boja.component.ts ***!
  \*************************************************************************/
/*! exports provided: SitoBojaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitoBojaComponent", function() { return SitoBojaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SitoBojaComponent = /** @class */ (function () {
    function SitoBojaComponent(activeRoute) {
        this.activeRoute = activeRoute;
        // Basic
        this.title = 'Savijanje - boje';
        this.path = 'sito-boje';
        // Search
        this.searches = [
            { 'name': 'naziv', 'displayName': 'Naziv', 'value': '', 'currency': null, 'minLength': 3, 'minValue': null, 'maxValue': null, 'help': null, 'example': null },
            { 'name': 'minCena', 'displayName': 'Cena (min)', 'value': '', 'currency': 'din/kg', 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Osnovna cena', 'example': null },
            { 'name': 'maxCena', 'displayName': 'Cena (max)', 'value': '', 'currency': 'din/kg', 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': null, 'example': null },
        ];
        //Schemes
        this.schemes = [
            { 'name': 'naziv', 'displayName': 'Naziv', 'value': '', 'currency': null, 'req': true, 'minLength': 3, 'minValue': null, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
            { 'name': 'cena', 'displayName': 'Cena', 'value': '', 'currency': 'din/kg', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': 'Osnovna cena', 'example': null, 'listPath': null, 'category': null },
        ];
    }
    SitoBojaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.paramMap
            .subscribe(function (params) {
            if (params.get('id')) {
                _this.tableForm = false;
                if (params.get('id') != 'dodaj') {
                    _this.id = +params.get('id');
                }
            }
            else {
                _this.tableForm = true;
            }
        });
    };
    SitoBojaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sito-boja',
            template: __webpack_require__(/*! ./sito-boja.component.html */ "./src/app/components/podesavanja/sito-boja/sito-boja.component.html"),
            styles: [__webpack_require__(/*! ./sito-boja.component.css */ "./src/app/components/podesavanja/sito-boja/sito-boja.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SitoBojaComponent);
    return SitoBojaComponent;
}());



/***/ }),

/***/ "./src/app/components/podesavanja/sito-sablon/sito-sablon.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/podesavanja/sito-sablon/sito-sablon.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9kZXNhdmFuamEvc2l0by1zYWJsb24vc2l0by1zYWJsb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/podesavanja/sito-sablon/sito-sablon.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/podesavanja/sito-sablon/sito-sablon.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table  [hidden]=\"!tableForm\" [title] =\"title\" [path] =\"path\" [searches]=\"searches\" [schemes]=\"schemes\"></app-table>\n<app-form  [hidden]=\"tableForm\" [title] =\"title\" [path] =\"path\" [schemes]=\"schemes\" [id]=\"id\"></app-form>"

/***/ }),

/***/ "./src/app/components/podesavanja/sito-sablon/sito-sablon.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/podesavanja/sito-sablon/sito-sablon.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SitoSablonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitoSablonComponent", function() { return SitoSablonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SitoSablonComponent = /** @class */ (function () {
    function SitoSablonComponent(activeRoute) {
        this.activeRoute = activeRoute;
        // Basic
        this.title = 'Sito - šabloni';
        this.path = 'sito-sabloni';
        // Search
        this.searches = [
            { 'name': 'minDebljinaSablonam', 'displayName': 'Debljina šablona (min)', 'value': '', 'currency': 'mikrona', 'minLength': null, 'minValue': 0, 'maxValue': 1000, 'help': null, 'example': null },
            { 'name': 'maxDebljinaSablona', 'displayName': 'Debljina šablona (max)', 'value': '', 'currency': 'mikrona', 'minLength': null, 'minValue': 0, 'maxValue': 1000, 'help': null, 'example': null },
            { 'name': 'minFaktorSablona', 'displayName': 'Faktor šablona (min)', 'value': '', 'currency': 'f', 'minLength': null, 'minValue': null, 'maxValue': 1000, 'help': null, 'example': null },
            { 'name': 'maxFaktorSablona', 'displayName': 'Faktor šablona (max)', 'value': '', 'currency': 'f', 'minLength': null, 'minValue': null, 'maxValue': 1000, 'help': null, 'example': null },
        ];
        //Schemes
        this.schemes = [
            { 'name': 'debljinaSablona', 'displayName': 'Debljina šablona', 'value': '', 'currency': 'mikrona', 'req': true, 'minLength': null, 'minValue': 0, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
            { 'name': 'faktorSablona', 'displayName': 'Faktor šablona', 'value': '', 'currency': 'f', 'req': true, 'minLength': null, 'minValue': null, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
        ];
    }
    SitoSablonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.paramMap
            .subscribe(function (params) {
            if (params.get('id')) {
                _this.tableForm = false;
                if (params.get('id') != 'dodaj') {
                    _this.id = +params.get('id');
                }
            }
            else {
                _this.tableForm = true;
            }
        });
    };
    SitoSablonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sito-sablon',
            template: __webpack_require__(/*! ./sito-sablon.component.html */ "./src/app/components/podesavanja/sito-sablon/sito-sablon.component.html"),
            styles: [__webpack_require__(/*! ./sito-sablon.component.css */ "./src/app/components/podesavanja/sito-sablon/sito-sablon.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SitoSablonComponent);
    return SitoSablonComponent;
}());



/***/ }),

/***/ "./src/app/components/podesavanja/sito-sptf/sito-sptf.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/podesavanja/sito-sptf/sito-sptf.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9kZXNhdmFuamEvc2l0by1zcHRmL3NpdG8tc3B0Zi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/podesavanja/sito-sptf/sito-sptf.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/podesavanja/sito-sptf/sito-sptf.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table  [hidden]=\"!tableForm\" [title] =\"title\" [path] =\"path\" [searches]=\"searches\" [schemes]=\"schemes\"></app-table>\n<app-form  [hidden]=\"tableForm\" [title] =\"title\" [path] =\"path\" [schemes]=\"schemes\" [id]=\"id\"></app-form>"

/***/ }),

/***/ "./src/app/components/podesavanja/sito-sptf/sito-sptf.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/podesavanja/sito-sptf/sito-sptf.component.ts ***!
  \*************************************************************************/
/*! exports provided: SitoSptfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitoSptfComponent", function() { return SitoSptfComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SitoSptfComponent = /** @class */ (function () {
    function SitoSptfComponent(activeRoute) {
        this.activeRoute = activeRoute;
        // Basic
        this.title = 'Sito - SPTF';
        this.path = 'sito-sptfi';
        // Search
        this.searches = [
            { 'name': 'debljinaMatarijala', 'displayName': 'Debljina materijala', 'value': '', 'currency': null, 'minLength': 2, 'minValue': null, 'maxValue': null, 'help': null, 'example': null },
            { 'name': 'minSptf', 'displayName': 'SPTF (min)', 'value': '', 'currency': 'faktor', 'minLength': null, 'minValue': null, 'maxValue': 1000, 'help': null, 'example': null },
            { 'name': 'maxSptf', 'displayName': 'SPTF (max)', 'value': '', 'currency': 'faktor', 'minLength': null, 'minValue': null, 'maxValue': 1000, 'help': null, 'example': null },
        ];
        //Schemes
        this.schemes = [
            { 'name': 'debljinaMatarijala', 'displayName': 'Debljina materijala', 'value': '', 'currency': null, 'req': true, 'minLength': 2, 'minValue': null, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
            { 'name': 'sptf', 'displayName': 'SPTF', 'value': '', 'currency': 'faktor', 'req': true, 'minLength': null, 'minValue': null, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
        ];
    }
    SitoSptfComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.paramMap
            .subscribe(function (params) {
            if (params.get('id')) {
                _this.tableForm = false;
                if (params.get('id') != 'dodaj') {
                    _this.id = +params.get('id');
                }
            }
            else {
                _this.tableForm = true;
            }
        });
    };
    SitoSptfComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sito-sptf',
            template: __webpack_require__(/*! ./sito-sptf.component.html */ "./src/app/components/podesavanja/sito-sptf/sito-sptf.component.html"),
            styles: [__webpack_require__(/*! ./sito-sptf.component.css */ "./src/app/components/podesavanja/sito-sptf/sito-sptf.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SitoSptfComponent);
    return SitoSptfComponent;
}());



/***/ }),

/***/ "./src/app/components/podesavanja/sito-stampa/sito-stampa.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/podesavanja/sito-stampa/sito-stampa.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9kZXNhdmFuamEvc2l0by1zdGFtcGEvc2l0by1zdGFtcGEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/podesavanja/sito-stampa/sito-stampa.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/podesavanja/sito-stampa/sito-stampa.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  sito-stampa works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/podesavanja/sito-stampa/sito-stampa.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/podesavanja/sito-stampa/sito-stampa.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SitoStampaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitoStampaComponent", function() { return SitoStampaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SitoStampaComponent = /** @class */ (function () {
    function SitoStampaComponent() {
    }
    SitoStampaComponent.prototype.ngOnInit = function () {
    };
    SitoStampaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sito-stampa',
            template: __webpack_require__(/*! ./sito-stampa.component.html */ "./src/app/components/podesavanja/sito-stampa/sito-stampa.component.html"),
            styles: [__webpack_require__(/*! ./sito-stampa.component.css */ "./src/app/components/podesavanja/sito-stampa/sito-stampa.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SitoStampaComponent);
    return SitoStampaComponent;
}());



/***/ }),

/***/ "./src/app/components/podesavanja/sito-viskozitet/sito-viskozitet.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/podesavanja/sito-viskozitet/sito-viskozitet.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9kZXNhdmFuamEvc2l0by12aXNrb3ppdGV0L3NpdG8tdmlza296aXRldC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/podesavanja/sito-viskozitet/sito-viskozitet.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/podesavanja/sito-viskozitet/sito-viskozitet.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table  [hidden]=\"!tableForm\" [title] =\"title\" [path] =\"path\" [searches]=\"searches\" [schemes]=\"schemes\"></app-table>\n<app-form  [hidden]=\"tableForm\" [title] =\"title\" [path] =\"path\" [schemes]=\"schemes\" [id]=\"id\"></app-form>"

/***/ }),

/***/ "./src/app/components/podesavanja/sito-viskozitet/sito-viskozitet.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/podesavanja/sito-viskozitet/sito-viskozitet.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SitoViskozitetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitoViskozitetComponent", function() { return SitoViskozitetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SitoViskozitetComponent = /** @class */ (function () {
    function SitoViskozitetComponent(activeRoute) {
        this.activeRoute = activeRoute;
        // Basic
        this.title = 'Sito - viskozitet';
        this.path = 'sito-viskoziteti';
        // Search
        this.searches = [
            { 'name': 'viskozitet', 'displayName': 'Viskozitet', 'value': '', 'currency': null, 'minLength': 2, 'minValue': null, 'maxValue': null, 'help': null, 'example': null },
            { 'name': 'minFaktorPodesavanja', 'displayName': 'Podešavanje(min)', 'value': '', 'currency': 'faktor', 'minLength': null, 'minValue': null, 'maxValue': 1000, 'help': null, 'example': null },
            { 'name': 'maxFaktorPodesavanja', 'displayName': 'Podešavanje (max)', 'value': '', 'currency': 'faktor', 'minLength': null, 'minValue': null, 'maxValue': 1000, 'help': null, 'example': null },
        ];
        //Schemes
        this.schemes = [
            { 'name': 'viskozitet', 'displayName': 'Viskozitet', 'value': '', 'currency': null, 'req': true, 'minLength': 2, 'minValue': null, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
            { 'name': 'faktorPodesavanja', 'displayName': 'Podešavanje', 'value': '', 'currency': 'faktor', 'req': true, 'minLength': null, 'minValue': null, 'maxValue': null, 'help': null, 'example': null, 'listPath': null, 'category': null },
        ];
    }
    SitoViskozitetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.paramMap
            .subscribe(function (params) {
            if (params.get('id')) {
                _this.tableForm = false;
                if (params.get('id') != 'dodaj') {
                    _this.id = +params.get('id');
                }
            }
            else {
                _this.tableForm = true;
            }
        });
    };
    SitoViskozitetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sito-viskozitet',
            template: __webpack_require__(/*! ./sito-viskozitet.component.html */ "./src/app/components/podesavanja/sito-viskozitet/sito-viskozitet.component.html"),
            styles: [__webpack_require__(/*! ./sito-viskozitet.component.css */ "./src/app/components/podesavanja/sito-viskozitet/sito-viskozitet.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SitoViskozitetComponent);
    return SitoViskozitetComponent;
}());



/***/ }),

/***/ "./src/app/services-security/authentication-service.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/services-security/authentication-service.service.ts ***!
  \*********************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _jwt_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwt-utils.service */ "./src/app/services-security/jwt-utils.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, jwtUtilsService) {
        this.http = http;
        this.jwtUtilsService = jwtUtilsService;
        this.loginPath = '/api/login';
    }
    AuthenticationService.prototype.login = function (username, password) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(this.loginPath, JSON.stringify({ username: username, password: password }), { headers: headers });
    };
    AuthenticationService.prototype.getToken = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var token = currentUser && currentUser.token;
        return token ? token : "";
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        if (this.getToken() != '')
            return true;
        else
            return false;
    };
    AuthenticationService.prototype.getCurrentUser = function () {
        if (localStorage.currentUser) {
            return JSON.parse(localStorage.currentUser);
        }
        else {
            return undefined;
        }
    };
    AuthenticationService.prototype.isAdmin = function () {
        return this.getCurrentUser().roles.indexOf('ADMINISTRATOR') >= 0;
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _jwt_utils_service__WEBPACK_IMPORTED_MODULE_2__["JwtUtilsService"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services-security/can-activate-auth.guard.ts":
/*!**************************************************************!*\
  !*** ./src/app/services-security/can-activate-auth.guard.ts ***!
  \**************************************************************/
/*! exports provided: CanActivateAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanActivateAuthGuard", function() { return CanActivateAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication-service.service */ "./src/app/services-security/authentication-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CanActivateAuthGuard = /** @class */ (function () {
    function CanActivateAuthGuard(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    CanActivateAuthGuard.prototype.canActivate = function (next, state) {
        if (this.authenticationService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    CanActivateAuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_authentication_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CanActivateAuthGuard);
    return CanActivateAuthGuard;
}());



/***/ }),

/***/ "./src/app/services-security/jwt-utils.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services-security/jwt-utils.service.ts ***!
  \********************************************************/
/*! exports provided: JwtUtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtUtilsService", function() { return JwtUtilsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JwtUtilsService = /** @class */ (function () {
    function JwtUtilsService() {
    }
    JwtUtilsService.prototype.getRoles = function (token) {
        var jwtData = token.split('.')[1];
        var decodedJwtJsonData = window.atob(jwtData);
        var decodedJwtData = JSON.parse(decodedJwtJsonData);
        return decodedJwtData.roles.map(function (x) { return x.authority; }) || [];
    };
    JwtUtilsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], JwtUtilsService);
    return JwtUtilsService;
}());



/***/ }),

/***/ "./src/app/services-security/token-interceptor.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/services-security/token-interceptor.service.ts ***!
  \****************************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication-service.service */ "./src/app/services-security/authentication-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(inj) {
        this.inj = inj;
    }
    TokenInterceptorService.prototype.intercept = function (request, next) {
        var authenticationService = this.inj.get(_authentication_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]);
        request = request.clone({
            setHeaders: {
                'X-Auth-Token': "" + authenticationService.getToken()
            }
        });
        return next.handle(request);
    };
    TokenInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "./src/app/services/rest.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/rest.service.ts ***!
  \******************************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RestService = /** @class */ (function () {
    function RestService(httpClient) {
        this.httpClient = httpClient;
        this.api = "http://116.203.85.250:8080/api/";
    }
    RestService.prototype.getOne = function (path, id) {
        return this.httpClient.get("" + this.api + path + "/" + id);
    };
    RestService.prototype.getAll = function (path) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append("page", '0');
        params = params.append("size", '100000');
        params = params.append("sort", 'id' + ',' + 'asc');
        return this.httpClient.get("" + this.api + path + "/", { params: params });
    };
    RestService.prototype.getAllP = function (path, currentPage, pageSize, sortElement, sortOrder, searches) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append("page", currentPage.toString());
        params = params.append("size", pageSize.toString());
        params = params.append("sort", sortElement + ',' + sortOrder);
        for (var _i = 0, searches_1 = searches; _i < searches_1.length; _i++) {
            var search = searches_1[_i];
            if (search.value != null) {
                params = params.append(search.name, search.value.toString());
            }
        }
        return this.httpClient.get(this.api + path + "/", { params: params, observe: 'response' });
    };
    RestService.prototype.delete = function (path, id) {
        return this.httpClient.delete("" + this.api + path + "/" + id);
    };
    RestService.prototype.update = function (path, o) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append("Content-Type", "application/json");
        return this.httpClient.put(this.api + path + "/" + o.id, o, { params: params });
    };
    RestService.prototype.save = function (path, o) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append("Content-Type", "application/json");
        return this.httpClient.post(this.api + path, o, { params: params });
    };
    RestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RestService);
    return RestService;
}());



/***/ }),

/***/ "./src/app/services/uredjaji.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/uredjaji.service.ts ***!
  \**********************************************/
/*! exports provided: UredjajiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UredjajiService", function() { return UredjajiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UredjajiService = /** @class */ (function () {
    function UredjajiService(httpClient) {
        this.httpClient = httpClient;
        this.api = "http://localhost:8080/api/";
    }
    UredjajiService.prototype.getOne = function (path, id) {
        return this.httpClient.get("" + this.api + path + "/" + id);
    };
    UredjajiService.prototype.getAll = function () {
    };
    UredjajiService.prototype.change = function () {
    };
    UredjajiService.prototype.save = function () {
    };
    UredjajiService.prototype.getOneX = function (path, id) {
        var _this = this;
        var proba = this.httpClient.get("" + this.api + path + "/" + id);
        proba.subscribe(function (data) {
            _this.results = data;
        });
        return this.results;
    };
    UredjajiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UredjajiService);
    return UredjajiService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\WF\GridKalkulator_Diplomski\1. Program\2. Aplikacija\web-app\gridKalkulator\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map