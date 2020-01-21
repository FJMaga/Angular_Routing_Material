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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inicio/inicio.component */ "./src/app/inicio/inicio.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_2__["InicioComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding: 20px;\n}\ntable {\n  width: 100%;\n}\nth.mat-sort-header-sorted {\n  color: black;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"header\">\n    <h1>\n      Angular 6 Firebase\n    </h1>\n    <img width=\"550\" alt=\"Angular Logo\" src=\"https://enmilocalfunciona.io/content/images/2019/07/perrete-angular-8.png\">\n  </div>\n  <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n    </ng-container>\n  \n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n  \n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"weight\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Weight </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n    </ng-container>\n  \n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"symbol\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Symbol </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n    </ng-container>\n  \n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n  \n  <router-outlet></router-outlet>\n\n  <footer class=\"mdl-mega-footer\">\n    <div class=\"mdl-mega-footer__middle-section\">\n  \n      <div class=\"mdl-mega-footer__drop-down-section\">\n        <input class=\"mdl-mega-footer__heading-checkbox\" type=\"checkbox\" checked>\n        <h1 class=\"mdl-mega-footer__heading\">Features</h1>\n        <ul class=\"mdl-mega-footer__link-list\">\n          <li><a href=\"#\">About</a></li>\n          <li><a href=\"#\">Terms</a></li>\n          <li><a href=\"#\">Partners</a></li>\n          <li><a href=\"#\">Updates</a></li>\n        </ul>\n      </div>\n  \n      <div class=\"mdl-mega-footer__drop-down-section\">\n        <input class=\"mdl-mega-footer__heading-checkbox\" type=\"checkbox\" checked>\n        <h1 class=\"mdl-mega-footer__heading\">Details</h1>\n        <ul class=\"mdl-mega-footer__link-list\">\n          <li><a href=\"#\">Specs</a></li>\n          <li><a href=\"#\">Tools</a></li>\n          <li><a href=\"#\">Resources</a></li>\n        </ul>\n      </div>\n  \n      <div class=\"mdl-mega-footer__drop-down-section\">\n        <input class=\"mdl-mega-footer__heading-checkbox\" type=\"checkbox\" checked>\n        <h1 class=\"mdl-mega-footer__heading\">Technology</h1>\n        <ul class=\"mdl-mega-footer__link-list\">\n          <li><a href=\"#\">How it works</a></li>\n          <li><a href=\"#\">Patterns</a></li>\n          <li><a href=\"#\">Usage</a></li>\n          <li><a href=\"#\">Products</a></li>\n          <li><a href=\"#\">Contracts</a></li>\n        </ul>\n      </div>\n  \n      <div class=\"mdl-mega-footer__drop-down-section\">\n        <input class=\"mdl-mega-footer__heading-checkbox\" type=\"checkbox\" checked>\n        <h1 class=\"mdl-mega-footer__heading\">FAQ</h1>\n        <ul class=\"mdl-mega-footer__link-list\">\n          <li><a href=\"#\">Questions</a></li>\n          <li><a href=\"#\">Answers</a></li>\n          <li><a href=\"#\">Contact us</a></li>\n        </ul>\n      </div>\n  \n    </div>\n  \n    <div class=\"mdl-mega-footer__bottom-section\">\n      <div class=\"mdl-logo\">Title</div>\n      <ul class=\"mdl-mega-footer__link-list\">\n        <li><a href=\"#\">Help</a></li>\n        <li><a href=\"#\">Privacy & Terms</a></li>\n      </ul>\n    </div>\n  \n  </footer>\n</div>\n"

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
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var settings = { timestampsInSnapshots: true };
var config = {
    apiKey: "AIzaSyDzM171PlzGCXKWpksbD_tr1D5KUcnuZN8",
    authDomain: "angular6-b4fa0.firebaseapp.com",
    databaseURL: "https://angular6-b4fa0.firebaseio.com",
    projectId: "angular6-b4fa0",
    storageBucket: "angular6-b4fa0.appspot.com",
    messagingSenderId: "435305771488",
    appId: "1:435305771488:web:f70982d7af2b0e2b8ffb85",
    measurementId: "G-FCVP2B4W5Y"
};
var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
/**
 * @title Table with sorting
 */
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
    }
    AppComponent.prototype.ngOnInit = function () {
        firebase__WEBPACK_IMPORTED_MODULE_3__["initializeApp"](config);
        firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().settings(settings);
        this.dataSource.sort = this.sort;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], { read: true }),
        __metadata("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], AppComponent.prototype, "sort", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _boards_boards_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./boards/boards.component */ "./src/app/boards/boards.component.ts");
/* harmony import */ var _boards_detail_boards_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./boards-detail/boards-detail.component */ "./src/app/boards-detail/boards-detail.component.ts");
/* harmony import */ var _boards_create_boards_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./boards-create/boards-create.component */ "./src/app/boards-create/boards-create.component.ts");
/* harmony import */ var _boards_edit_boards_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./boards-edit/boards-edit.component */ "./src/app/boards-edit/boards-edit.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./inicio/inicio.component */ "./src/app/inicio/inicio.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { DualRingLoaderModule } from '@bit/joshk.ng-spinners.dualring-loader';








var appRoutes = [
    {
        path: 'boards',
        component: _boards_boards_component__WEBPACK_IMPORTED_MODULE_7__["BoardsComponent"],
        data: { title: 'Boards List' }
    },
    {
        path: 'boards-details/:id',
        component: _boards_detail_boards_detail_component__WEBPACK_IMPORTED_MODULE_8__["BoardsDetailComponent"],
        data: { title: 'Boards Details' }
    },
    {
        path: 'boards-create',
        component: _boards_create_boards_create_component__WEBPACK_IMPORTED_MODULE_9__["BoardsCreateComponent"],
        data: { title: 'Create Boards' }
    },
    {
        path: 'boards-edit/:id',
        component: _boards_edit_boards_edit_component__WEBPACK_IMPORTED_MODULE_10__["BoardsEditComponent"],
        data: { title: 'Edit Boards' }
    },
    { path: '',
        redirectTo: '/boards',
        pathMatch: 'full'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _boards_boards_component__WEBPACK_IMPORTED_MODULE_7__["BoardsComponent"],
                _boards_detail_boards_detail_component__WEBPACK_IMPORTED_MODULE_8__["BoardsDetailComponent"],
                _boards_create_boards_create_component__WEBPACK_IMPORTED_MODULE_9__["BoardsCreateComponent"],
                _boards_edit_boards_edit_component__WEBPACK_IMPORTED_MODULE_10__["BoardsEditComponent"],
                _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_12__["InicioComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                //DualRingLoaderModule,
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/boards-create/boards-create.component.css":
/*!***********************************************************!*\
  !*** ./src/app/boards-create/boards-create.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-full-width:nth-last-child() {\n  margin-bottom: 10px;\n}\n\n.button-row {\n  margin: 10px 0;\n}\n"

/***/ }),

/***/ "./src/app/boards-create/boards-create.component.html":
/*!************************************************************!*\
  !*** ./src/app/boards-create/boards-create.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\n  <a mat-fab color=\"primary\" [routerLink]=\"['/boards']\"><mat-icon>list</mat-icon></a>\n</div>\n<form [formGroup]=\"boardsForm\" (ngSubmit)=\"onFormSubmit(boardsForm.value)\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Title\" formControlName=\"title\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!boardsForm.get('title').valid && boardsForm.get('title').touched\">Please enter Board Title</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <textarea matInput placeholder=\"Description\" formControlName=\"description\"\n           [errorStateMatcher]=\"matcher\"></textarea>\n    <mat-error>\n      <span *ngIf=\"!boardsForm.get('description').valid && boardsForm.get('description').touched\">Please enter Board Description</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Author\" formControlName=\"author\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!boardsForm.get('author').valid && boardsForm.get('author').touched\">Please enter Board Author</span>\n    </mat-error>\n  </mat-form-field>\n  <div class=\"button-row\">\n    <button type=\"submit\" [disabled]=\"!boardsForm.valid\" mat-fab color=\"primary\"><mat-icon>save</mat-icon></button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/boards-create/boards-create.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/boards-create/boards-create.component.ts ***!
  \**********************************************************/
/*! exports provided: BoardsCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardsCreateComponent", function() { return BoardsCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fs.service */ "./src/app/fs.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BoardsCreateComponent = /** @class */ (function () {
    function BoardsCreateComponent(router, fs, formBuilder) {
        this.router = router;
        this.fs = fs;
        this.formBuilder = formBuilder;
        this.title = '';
        this.description = '';
        this.author = '';
    }
    BoardsCreateComponent.prototype.ngOnInit = function () {
        this.boardsForm = this.formBuilder.group({
            'title': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'description': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'author': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    BoardsCreateComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.fs.postBoards(form)
            .subscribe(function (res) {
            var id = res['key'];
            _this.router.navigate(['/boards-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    BoardsCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-boards-create',
            template: __webpack_require__(/*! ./boards-create.component.html */ "./src/app/boards-create/boards-create.component.html"),
            styles: [__webpack_require__(/*! ./boards-create.component.css */ "./src/app/boards-create/boards-create.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _fs_service__WEBPACK_IMPORTED_MODULE_2__["FsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], BoardsCreateComponent);
    return BoardsCreateComponent;
}());



/***/ }),

/***/ "./src/app/boards-detail/boards-detail.component.css":
/*!***********************************************************!*\
  !*** ./src/app/boards-detail/boards-detail.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  max-width: 500px;\n}\n\n.button-row {\n  margin: 10px 0;\n}\n\n.edit-btn {\n  margin: 0 20px 20px;\n}\n"

/***/ }),

/***/ "./src/app/boards-detail/boards-detail.component.html":
/*!************************************************************!*\
  !*** ./src/app/boards-detail/boards-detail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\n  <a mat-fab color=\"primary\" [routerLink]=\"['/boards']\"><mat-icon>list</mat-icon></a>\n</div>\n<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title><h2>{{board.title}}</h2></mat-card-title>\n    <mat-card-subtitle>{{board.description}}</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    <dl>\n      <dt>Title:</dt>\n      <dd>{{board.title}}</dd>\n      <dt>Description:</dt>\n      <dd>{{board.description}}</dd>\n      <dt>Author:</dt>\n      <dd>{{board.author}}</dd>\n    </dl>\n  </mat-card-content>\n  <mat-card-actions>\n    <a mat-fab color=\"primary\" [routerLink]=\"['/boards-edit', board.key]\" class=\"edit-btn\"><mat-icon>edit</mat-icon></a>\n    <a mat-fab color=\"warn\" (click)=\"deleteBoard(board.key)\"><mat-icon>delete</mat-icon></a>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/boards-detail/boards-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/boards-detail/boards-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: BoardsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardsDetailComponent", function() { return BoardsDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fs.service */ "./src/app/fs.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BoardsDetailComponent = /** @class */ (function () {
    function BoardsDetailComponent(route, router, fs) {
        this.route = route;
        this.router = router;
        this.fs = fs;
        this.board = {};
    }
    BoardsDetailComponent.prototype.ngOnInit = function () {
        this.getBoardDetails(this.route.snapshot.params['id']);
    };
    BoardsDetailComponent.prototype.getBoardDetails = function (id) {
        var _this = this;
        this.fs.getBoard(id)
            .subscribe(function (data) {
            console.log(data);
            _this.board = data;
        });
    };
    BoardsDetailComponent.prototype.deleteBoard = function (id) {
        var _this = this;
        this.fs.deleteBoards(id)
            .subscribe(function (res) {
            _this.router.navigate(['/boards']);
        }, function (err) {
            console.log(err);
        });
    };
    BoardsDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-boards-detail',
            template: __webpack_require__(/*! ./boards-detail.component.html */ "./src/app/boards-detail/boards-detail.component.html"),
            styles: [__webpack_require__(/*! ./boards-detail.component.css */ "./src/app/boards-detail/boards-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _fs_service__WEBPACK_IMPORTED_MODULE_2__["FsService"]])
    ], BoardsDetailComponent);
    return BoardsDetailComponent;
}());



/***/ }),

/***/ "./src/app/boards-edit/boards-edit.component.css":
/*!*******************************************************!*\
  !*** ./src/app/boards-edit/boards-edit.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-full-width:nth-last-child() {\n  margin-bottom: 10px;\n}\n\n.button-row {\n  margin: 10px 0;\n}\n"

/***/ }),

/***/ "./src/app/boards-edit/boards-edit.component.html":
/*!********************************************************!*\
  !*** ./src/app/boards-edit/boards-edit.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\n  <a mat-fab color=\"primary\" (click)=\"boardsDetails()\"><mat-icon>visibility</mat-icon></a>\n</div>\n<form [formGroup]=\"boardsForm\" (ngSubmit)=\"onFormSubmit(boardsForm.value)\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Title\" formControlName=\"title\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!boardsForm.get('title').valid && boardsForm.get('title').touched\">Please enter Book Title</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <textarea matInput placeholder=\"Description\" formControlName=\"description\"\n           [errorStateMatcher]=\"matcher\"></textarea>\n    <mat-error>\n      <span *ngIf=\"!boardsForm.get('description').valid && boardsForm.get('description').touched\">Please enter Book Description</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Author\" formControlName=\"author\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!boardsForm.get('author').valid && boardsForm.get('author').touched\">Please enter Book Author</span>\n    </mat-error>\n  </mat-form-field>\n  <div class=\"button-row\">\n    <button type=\"submit\" [disabled]=\"!boardsForm.valid\" mat-fab color=\"primary\"><mat-icon>save</mat-icon></button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/boards-edit/boards-edit.component.ts":
/*!******************************************************!*\
  !*** ./src/app/boards-edit/boards-edit.component.ts ***!
  \******************************************************/
/*! exports provided: BoardsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardsEditComponent", function() { return BoardsEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fs.service */ "./src/app/fs.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BoardsEditComponent = /** @class */ (function () {
    function BoardsEditComponent(router, route, fs, formBuilder) {
        this.router = router;
        this.route = route;
        this.fs = fs;
        this.formBuilder = formBuilder;
        this.id = '';
        this.title = '';
        this.description = '';
        this.author = '';
    }
    BoardsEditComponent.prototype.ngOnInit = function () {
        this.getBoard(this.route.snapshot.params['id']);
        this.boardsForm = this.formBuilder.group({
            'title': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'description': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'author': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    BoardsEditComponent.prototype.getBoard = function (id) {
        var _this = this;
        this.fs.getBoard(id).subscribe(function (data) {
            _this.id = data.key;
            _this.boardsForm.setValue({
                title: data.title,
                description: data.description,
                author: data.author
            });
        });
    };
    BoardsEditComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.fs.updateBoards(this.id, form)
            .subscribe(function (res) {
            _this.router.navigate(['/boards']);
        }, function (err) {
            console.log(err);
        });
    };
    BoardsEditComponent.prototype.boardsDetails = function () {
        this.router.navigate(['/boards-details', this.id]);
    };
    BoardsEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-boards-edit',
            template: __webpack_require__(/*! ./boards-edit.component.html */ "./src/app/boards-edit/boards-edit.component.html"),
            styles: [__webpack_require__(/*! ./boards-edit.component.css */ "./src/app/boards-edit/boards-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _fs_service__WEBPACK_IMPORTED_MODULE_2__["FsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], BoardsEditComponent);
    return BoardsEditComponent;
}());



/***/ }),

/***/ "./src/app/boards/boards.component.css":
/*!*********************************************!*\
  !*** ./src/app/boards/boards.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n  overflow: auto;\n}\n\n.title-col {\n  flex: 0 0 100px !important;\n  white-space: unset !important;\n}\n\n.button-row {\n  margin: 10px 0;\n}\n"

/***/ }),

/***/ "./src/app/boards/boards.component.html":
/*!**********************************************!*\
  !*** ./src/app/boards/boards.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\n  <a mat-fab color=\"primary\" [routerLink]=\"['/boards-create']\"><mat-icon>add</mat-icon></a>\n</div>\n<div class=\"example-container mat-elevation-z8\">\n  <table mat-table #table [dataSource]=\"dataSource\">\n\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n\n    <!-- Title Column -->\n    <ng-container matColumnDef=\"title\">\n      <th mat-header-cell *matHeaderCellDef> Title </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"title-col\"> {{element.title}} </td>\n    </ng-container>\n\n    <!-- Description Column -->\n    <ng-container matColumnDef=\"description\">\n      <th mat-header-cell *matHeaderCellDef> Description </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\n    </ng-container>\n\n    <!-- Author Column -->\n    <ng-container matColumnDef=\"author\">\n      <th mat-header-cell *matHeaderCellDef> Author </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.author}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [routerLink]=\"['/boards-details/', row.key]\"></tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/boards/boards.component.ts":
/*!********************************************!*\
  !*** ./src/app/boards/boards.component.ts ***!
  \********************************************/
/*! exports provided: BoardsComponent, BoardDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardsComponent", function() { return BoardsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardDataSource", function() { return BoardDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _fs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fs.service */ "./src/app/fs.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BoardsComponent = /** @class */ (function () {
    function BoardsComponent(fs) {
        this.fs = fs;
        this.displayedColumns = ['title', 'description', 'author'];
        this.dataSource = new BoardDataSource(this.fs);
    }
    BoardsComponent.prototype.ngOnInit = function () {
    };
    BoardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-boards',
            template: __webpack_require__(/*! ./boards.component.html */ "./src/app/boards/boards.component.html"),
            styles: [__webpack_require__(/*! ./boards.component.css */ "./src/app/boards/boards.component.css")]
        }),
        __metadata("design:paramtypes", [_fs_service__WEBPACK_IMPORTED_MODULE_2__["FsService"]])
    ], BoardsComponent);
    return BoardsComponent;
}());

var BoardDataSource = /** @class */ (function (_super) {
    __extends(BoardDataSource, _super);
    function BoardDataSource(fs) {
        var _this = _super.call(this) || this;
        _this.fs = fs;
        return _this;
    }
    BoardDataSource.prototype.connect = function () {
        return this.fs.getBoards();
    };
    BoardDataSource.prototype.disconnect = function () {
    };
    return BoardDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));



/***/ }),

/***/ "./src/app/fs.service.ts":
/*!*******************************!*\
  !*** ./src/app/fs.service.ts ***!
  \*******************************/
/*! exports provided: FsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FsService", function() { return FsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FsService = /** @class */ (function () {
    function FsService() {
        this.ref = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection('boards');
    }
    FsService.prototype.getBoards = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.ref.onSnapshot(function (querySnapshot) {
                var boards = [];
                querySnapshot.forEach(function (doc) {
                    var data = doc.data();
                    boards.push({
                        key: doc.id,
                        title: data.title,
                        description: data.description,
                        author: data.author
                    });
                });
                observer.next(boards);
            });
        });
    };
    FsService.prototype.getBoard = function (id) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.ref.doc(id).get().then(function (doc) {
                var data = doc.data();
                observer.next({
                    key: doc.id,
                    title: data.title,
                    description: data.description,
                    author: data.author
                });
            });
        });
    };
    FsService.prototype.postBoards = function (data) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.ref.add(data).then(function (doc) {
                observer.next({
                    key: doc.id,
                });
            });
        });
    };
    FsService.prototype.updateBoards = function (id, data) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.ref.doc(id).set(data).then(function () {
                observer.next();
            });
        });
    };
    FsService.prototype.deleteBoards = function (id) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.ref.doc(id).delete().then(function () {
                observer.next();
            });
        });
    };
    FsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FsService);
    return FsService;
}());



/***/ }),

/***/ "./src/app/inicio/inicio.component.css":
/*!*********************************************!*\
  !*** ./src/app/inicio/inicio.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/inicio/inicio.component.html":
/*!**********************************************!*\
  !*** ./src/app/inicio/inicio.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  inicio works!\n</p>\n"

/***/ }),

/***/ "./src/app/inicio/inicio.component.ts":
/*!********************************************!*\
  !*** ./src/app/inicio/inicio.component.ts ***!
  \********************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
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

var InicioComponent = /** @class */ (function () {
    function InicioComponent() {
    }
    InicioComponent.prototype.ngOnInit = function () {
    };
    InicioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inicio',
            template: __webpack_require__(/*! ./inicio.component.html */ "./src/app/inicio/inicio.component.html"),
            styles: [__webpack_require__(/*! ./inicio.component.css */ "./src/app/inicio/inicio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InicioComponent);
    return InicioComponent;
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

module.exports = __webpack_require__(/*! D:\Users\DAM 2\Documents\proyectoAngular\angular6-firebase-firestore-example-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map