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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-game-controller></app-game-controller>\n<router-outlet></router-outlet>\n");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n    background-color: rgb(255,215,215);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQ0FBa0M7QUFDdEMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsMjE1LDIxNSk7XG59Il19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'icecream-parlour';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _timer_timer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timer/timer.component */ "./src/app/timer/timer.component.ts");
/* harmony import */ var _rabbits_rabbits_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rabbits/rabbits.component */ "./src/app/rabbits/rabbits.component.ts");
/* harmony import */ var _toppings_toppings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./toppings/toppings.component */ "./src/app/toppings/toppings.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _bowl_bowl_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bowl/bowl.component */ "./src/app/bowl/bowl.component.ts");
/* harmony import */ var _game_controller_game_controller_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./game-controller/game-controller.component */ "./src/app/game-controller/game-controller.component.ts");











let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _timer_timer_component__WEBPACK_IMPORTED_MODULE_5__["TimerComponent"],
            _rabbits_rabbits_component__WEBPACK_IMPORTED_MODULE_6__["RabbitsComponent"],
            _toppings_toppings_component__WEBPACK_IMPORTED_MODULE_7__["ToppingsComponent"],
            _order_order_component__WEBPACK_IMPORTED_MODULE_8__["OrderComponent"],
            _bowl_bowl_component__WEBPACK_IMPORTED_MODULE_9__["BowlComponent"],
            _game_controller_game_controller_component__WEBPACK_IMPORTED_MODULE_10__["GameControllerComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/bowl/bowl.component.css":
/*!*****************************************!*\
  !*** ./src/app/bowl/bowl.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n    width: 45vw;\n    height: 45vw;\n    max-width: 45vh;\n    max-height: 45vh;\n    top: 5vw;\n    left: -22.5vw;\n    position: absolute;\n}\n\ndiv {\n    width: 45vw;\n    height: 45vw;\n    max-width: 45vh;\n    max-height: 45vh;\n    background-color: rgba(255, 255, 255, 0.3); \n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    border: 1px solid white;\n}\n\n@media screen and (min-width: 100vh) {\n    img {\n        top: 5vh;\n        left: -22.5vh;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm93bC9ib3dsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsUUFBUTtJQUNSLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsMENBQTBDO0lBQzFDLDRFQUE0RTtJQUM1RSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSTtRQUNJLFFBQVE7UUFDUixhQUFhO0lBQ2pCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9ib3dsL2Jvd2wuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gICAgd2lkdGg6IDQ1dnc7XG4gICAgaGVpZ2h0OiA0NXZ3O1xuICAgIG1heC13aWR0aDogNDV2aDtcbiAgICBtYXgtaGVpZ2h0OiA0NXZoO1xuICAgIHRvcDogNXZ3O1xuICAgIGxlZnQ6IC0yMi41dnc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5kaXYge1xuICAgIHdpZHRoOiA0NXZ3O1xuICAgIGhlaWdodDogNDV2dztcbiAgICBtYXgtd2lkdGg6IDQ1dmg7XG4gICAgbWF4LWhlaWdodDogNDV2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7IFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMHZoKSB7XG4gICAgaW1nIHtcbiAgICAgICAgdG9wOiA1dmg7XG4gICAgICAgIGxlZnQ6IC0yMi41dmg7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/bowl/bowl.component.ts":
/*!****************************************!*\
  !*** ./src/app/bowl/bowl.component.ts ***!
  \****************************************/
/*! exports provided: BowlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BowlComponent", function() { return BowlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let BowlComponent = class BowlComponent {
    constructor() {
        this.numToppings = 8;
        this.numRabbits = 8;
    }
    hideAll() {
        let i;
        for (i = 0; i < this.numToppings; i++) {
            document.getElementById("tb" + i).style.visibility = "hidden";
        }
        this.hideRabbits();
    }
    /* toggle between show topping or nah
     */
    unhideTopping(toppingNum) {
        if (document.getElementById("tb" + toppingNum).style.visibility === "visible") {
            document.getElementById("tb" + toppingNum).style.visibility = "hidden";
        }
        else {
            document.getElementById("tb" + toppingNum).style.visibility = "visible";
        }
    }
    unhideRabbit(rabbitNum) {
        this.hideRabbits();
        document.getElementById("rb" + rabbitNum).style.visibility = "visible";
    }
    hideRabbits() {
        let i;
        for (i = 0; i < this.numRabbits; i++) {
            document.getElementById("rb" + i).style.visibility = "hidden";
        }
    }
};
BowlComponent.ctorParameters = () => [];
BowlComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bowl',
        template: `
    <div>
      <img src="assets/cookie.png" id="tb7" />
      <img src="assets/chocolate.png" id="rb0" />
      <img src="assets/vanilla.png" id="rb1" />
      <img src="assets/strawberry.png" id="rb2" />
      <img src="assets/caramel.png" id="rb3" />
      <img src="assets/mint.png" id="rb4" />
      <img src="assets/cookies.png" id="rb5" />
      <img src="assets/neo.png" id="rb6" />
      <img src="assets/blueberry.png" id="rb7" />
      <img src="assets/chocoSauce.png" id="tb0" />
      <img src="assets/caramelSauce.png" id="tb3" />
      <img src="assets/sprinkles.png" id="tb1" />
      <img src="assets/banana.png" id="tb2" />
      <img src="assets/whipped.png" id="tb4" />
      <img src="assets/cherry.png" id="tb5" />
      <img src="assets/strawberries.png" id="tb6" />
      <img src="assets/bowl.png" id="bowl" />
    </div>
  `,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./bowl.component.css */ "./src/app/bowl/bowl.component.css")).default]
    })
], BowlComponent);



/***/ }),

/***/ "./src/app/game-controller/game-controller.component.css":
/*!***************************************************************!*\
  !*** ./src/app/game-controller/game-controller.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-toppings, app-rabbits {\n    top: -18vw;\n}\n\napp-bowl {\n    top: 4vw;\n    left: -17vw;\n}\n\napp-toppings, app-bowl, app-rabbits, app-timer, button, app-order, h2, #round, h4, h5, h6, #music, audio, #banner {\n    position: relative;\n}\n\napp-timer, #round {\n    left: 23vw;\n    top: -30vw;\n    font-size: 4vw;\n}\n\n#round {\n    font-size: 3vw;\n}\n\nbutton {\n    top: -30vw;\n    left: 12vw;\n    font-size: 3vw;\n    background-color: white;\n    width: 19vw;\n    max-width: 19vh;\n    height: 8vw;\n    max-height: 8vh;\n}\n\n#banner {\n    background-color: rgb(255, 255, 255);\n    padding: 5px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    width: 94vw;\n    max-width: 94vh;\n    top: -21vw;\n    font-size: 3vw;\n}\n\nbutton:hover {\n    background-color: #FFD7D7;\n    color: white;\n    cursor: pointer;\n}\n\n#new {\n    visibility: hidden;\n    left: 31vw;\n}\n\n#musiclabel {\n    top: -30vw;\n    left: 15vw;\n    font-size: 2vw;\n}\n\naudio {\n    width: 20vw;\n    height: 3vw;\n    max-width: 20vh;\n    max-height: 3vh;\n    top: -22vw;\n    left: -10vw;\n}\n\n@media screen and (min-width: 100vh) {\n    button {\n        left: 12vh;\n    }\n    \n    button, #round {\n        font-size: 3vh;\n        top: -30vh;\n    }\n\n    app-timer {\n        font-size: 4vh;\n        top: -30vh;\n    }\n\n    #musiclabel {\n        font-size: 2vh;\n        top: -30vh;\n        left: 15vh;\n    }\n\n    audio {\n        top: -22vh;\n        left: -10vh;\n    }\n\n    #banner {\n        top: -21vh;\n        font-size: 3vh;\n    }\n\n    app-toppings, app-rabbits {\n        top: -18vh;\n    }\n\n    app-bowl {\n        top: 4vh;\n        left: -17vh;\n    }\n\n    app-timer, #round {\n        left: 23vh;\n    }\n\n    #new {\n        left: 31vh;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS1jb250cm9sbGVyL2dhbWUtY29udHJvbGxlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksUUFBUTtJQUNSLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixVQUFVO0lBQ1YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsVUFBVTtJQUNWLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGVBQWU7SUFDZixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osNEVBQTRFO0lBQzVFLFdBQVc7SUFDWCxlQUFlO0lBQ2YsVUFBVTtJQUNWLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFVBQVU7SUFDVixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZUFBZTtJQUNmLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBSUE7SUFDSTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGNBQWM7UUFDZCxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsVUFBVTtJQUNkOztJQUVBO1FBQ0ksY0FBYztRQUNkLFVBQVU7UUFDVixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsV0FBVztJQUNmOztJQUVBO1FBQ0ksVUFBVTtRQUNWLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxRQUFRO1FBQ1IsV0FBVztJQUNmOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksVUFBVTtJQUNkO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9nYW1lLWNvbnRyb2xsZXIvZ2FtZS1jb250cm9sbGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtdG9wcGluZ3MsIGFwcC1yYWJiaXRzIHtcbiAgICB0b3A6IC0xOHZ3O1xufVxuXG5hcHAtYm93bCB7XG4gICAgdG9wOiA0dnc7XG4gICAgbGVmdDogLTE3dnc7XG59XG5cbmFwcC10b3BwaW5ncywgYXBwLWJvd2wsIGFwcC1yYWJiaXRzLCBhcHAtdGltZXIsIGJ1dHRvbiwgYXBwLW9yZGVyLCBoMiwgI3JvdW5kLCBoNCwgaDUsIGg2LCAjbXVzaWMsIGF1ZGlvLCAjYmFubmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmFwcC10aW1lciwgI3JvdW5kIHtcbiAgICBsZWZ0OiAyM3Z3O1xuICAgIHRvcDogLTMwdnc7XG4gICAgZm9udC1zaXplOiA0dnc7XG59XG5cbiNyb3VuZCB7XG4gICAgZm9udC1zaXplOiAzdnc7XG59XG5cbmJ1dHRvbiB7XG4gICAgdG9wOiAtMzB2dztcbiAgICBsZWZ0OiAxMnZ3O1xuICAgIGZvbnQtc2l6ZTogM3Z3O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAxOXZ3O1xuICAgIG1heC13aWR0aDogMTl2aDtcbiAgICBoZWlnaHQ6IDh2dztcbiAgICBtYXgtaGVpZ2h0OiA4dmg7XG59XG5cbiNiYW5uZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgICB3aWR0aDogOTR2dztcbiAgICBtYXgtd2lkdGg6IDk0dmg7XG4gICAgdG9wOiAtMjF2dztcbiAgICBmb250LXNpemU6IDN2dztcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEN0Q3O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNuZXcge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBsZWZ0OiAzMXZ3O1xufVxuXG4jbXVzaWNsYWJlbCB7XG4gICAgdG9wOiAtMzB2dztcbiAgICBsZWZ0OiAxNXZ3O1xuICAgIGZvbnQtc2l6ZTogMnZ3O1xufVxuXG5hdWRpbyB7XG4gICAgd2lkdGg6IDIwdnc7XG4gICAgaGVpZ2h0OiAzdnc7XG4gICAgbWF4LXdpZHRoOiAyMHZoO1xuICAgIG1heC1oZWlnaHQ6IDN2aDtcbiAgICB0b3A6IC0yMnZ3O1xuICAgIGxlZnQ6IC0xMHZ3O1xufVxuXG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwdmgpIHtcbiAgICBidXR0b24ge1xuICAgICAgICBsZWZ0OiAxMnZoO1xuICAgIH1cbiAgICBcbiAgICBidXR0b24sICNyb3VuZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogM3ZoO1xuICAgICAgICB0b3A6IC0zMHZoO1xuICAgIH1cblxuICAgIGFwcC10aW1lciB7XG4gICAgICAgIGZvbnQtc2l6ZTogNHZoO1xuICAgICAgICB0b3A6IC0zMHZoO1xuICAgIH1cblxuICAgICNtdXNpY2xhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAydmg7XG4gICAgICAgIHRvcDogLTMwdmg7XG4gICAgICAgIGxlZnQ6IDE1dmg7XG4gICAgfVxuXG4gICAgYXVkaW8ge1xuICAgICAgICB0b3A6IC0yMnZoO1xuICAgICAgICBsZWZ0OiAtMTB2aDtcbiAgICB9XG5cbiAgICAjYmFubmVyIHtcbiAgICAgICAgdG9wOiAtMjF2aDtcbiAgICAgICAgZm9udC1zaXplOiAzdmg7XG4gICAgfVxuXG4gICAgYXBwLXRvcHBpbmdzLCBhcHAtcmFiYml0cyB7XG4gICAgICAgIHRvcDogLTE4dmg7XG4gICAgfVxuXG4gICAgYXBwLWJvd2wge1xuICAgICAgICB0b3A6IDR2aDtcbiAgICAgICAgbGVmdDogLTE3dmg7XG4gICAgfVxuXG4gICAgYXBwLXRpbWVyLCAjcm91bmQge1xuICAgICAgICBsZWZ0OiAyM3ZoO1xuICAgIH1cblxuICAgICNuZXcge1xuICAgICAgICBsZWZ0OiAzMXZoO1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/game-controller/game-controller.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/game-controller/game-controller.component.ts ***!
  \**************************************************************/
/*! exports provided: GameControllerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameControllerComponent", function() { return GameControllerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _bowl_bowl_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bowl/bowl.component */ "./src/app/bowl/bowl.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../order/order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _rabbits_rabbits_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rabbits/rabbits.component */ "./src/app/rabbits/rabbits.component.ts");
/* harmony import */ var _timer_timer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../timer/timer.component */ "./src/app/timer/timer.component.ts");
/* harmony import */ var _toppings_toppings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../toppings/toppings.component */ "./src/app/toppings/toppings.component.ts");







let GameControllerComponent = class GameControllerComponent {
    constructor() {
        this.order = new _order_order_component__WEBPACK_IMPORTED_MODULE_3__["OrderComponent"]();
        this.rabbits = new _rabbits_rabbits_component__WEBPACK_IMPORTED_MODULE_4__["RabbitsComponent"]();
        this.toppings = new _toppings_toppings_component__WEBPACK_IMPORTED_MODULE_6__["ToppingsComponent"]();
        this.bowl = new _bowl_bowl_component__WEBPACK_IMPORTED_MODULE_2__["BowlComponent"]();
        this.timer = new _timer_timer_component__WEBPACK_IMPORTED_MODULE_5__["TimerComponent"]();
        this.timerStart = this.timer.time;
        this.round = 0;
        this.banner = "Complete the order before the clock runs out!";
    }
    ngOnInit() {
        this.nextOrder();
    }
    restart() {
        this.timerStart = 45;
        this.round = 0;
        this.banner = "Complete the order before the clock runs out!";
        document.getElementById("new").style.visibility = "hidden";
        document.getElementById("submit").style.visibility = "visible";
        this.order.resetAvailable();
        this.nextOrder();
    }
    onSelectRabbit(index) {
        this.bowl.unhideRabbit(index);
    }
    onSelectTopping(index) {
        this.bowl.unhideTopping(index);
    }
    nextOrder() {
        this.bowl.hideAll();
        this.updateRound();
        this.order.newOrder();
        this.rabbits.reset();
        this.toppings.reset();
        this.toppings.showAvailible(this.order.numToppingsAvailable);
        this.rabbits.showAvailible(this.order.numRabbitsAvailable);
        this.timer.updateTimer(this.timerStart);
    }
    /* get harder over time
     */
    updateRound() {
        this.round++;
        if (this.round % 1 === 0) {
            this.timerStart--;
        }
        if (this.round % 6 === 0) {
            this.order.moreToppings();
        }
        if (this.round % 5 === 0) {
            this.order.moreRabbits();
        }
    }
    submit() {
        this.bowl.hideAll();
        if (this.correct()) {
            this.banner = "Nice!";
            this.nextOrder();
        }
        else {
            this.banner = "You have angered the rabbits! GAME OVER";
            this.timer.updateTimer(0);
            document.getElementById("new").style.visibility = "visible";
            document.getElementById("submit").style.visibility = "hidden";
        }
    }
    /* must get the order right in time
     */
    correct() {
        var numToppings = this.toppings.chosen.length;
        if (this.timer.time === 0 ||
            this.rabbits.chosen !== this.order.rabbitPicked ||
            numToppings != this.order.numToPick) {
            return false;
        }
        //compare their toppings to order
        let i;
        for (i = 0; i < numToppings; i++) {
            if (!this.order.toppingsPicked.includes(this.toppings.chosen[i])) {
                return false;
            }
        }
        return true;
    }
};
GameControllerComponent.ctorParameters = () => [];
GameControllerComponent.propDecorators = {
    bowl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_bowl_bowl_component__WEBPACK_IMPORTED_MODULE_2__["BowlComponent"], {},] }],
    order: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_order_order_component__WEBPACK_IMPORTED_MODULE_3__["OrderComponent"], { static: true },] }],
    rabbits: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_rabbits_rabbits_component__WEBPACK_IMPORTED_MODULE_4__["RabbitsComponent"], {},] }],
    timer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_timer_timer_component__WEBPACK_IMPORTED_MODULE_5__["TimerComponent"], {},] }],
    toppings: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_toppings_toppings_component__WEBPACK_IMPORTED_MODULE_6__["ToppingsComponent"], {},] }]
};
GameControllerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game-controller',
        template: `
    <center>
      <app-order></app-order>
      <app-bowl></app-bowl>
      <h3 id="round"> Round {{ round }} </h3>
      <app-timer></app-timer>
      <button (click)="restart()" id="new">New Game</button>
      <button (click)="submit()" id="submit">Submit</button>
      <app-toppings (emitter)="onSelectTopping($event)"></app-toppings>
      <app-rabbits (emitter)="onSelectRabbit($event)"></app-rabbits>
      <p id="banner"> {{ this.banner }} </p>
      <div id="music">
        <audio autoplay loop controls>
          <source src="assets/Ice-Cream-Banana-rama-jama.mp3" type="audio/mpeg">
        </audio>
        <h6 id="musiclabel">Music by <a href='https://www.youtube.com/channel/UCLRjOVywtrSM9Jgpn_nqCCg' target='_blank'>Haunted Sky</a></h6>
      </div>
    </center>
  `,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./game-controller.component.css */ "./src/app/game-controller/game-controller.component.css")).default]
    })
], GameControllerComponent);



/***/ }),

/***/ "./src/app/order/order.component.css":
/*!*******************************************!*\
  !*** ./src/app/order/order.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#ordertxt {\n    background-color: rgb(255, 255, 255);\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    width: 92vw;\n    max-width: 92vh;\n    padding: 5px;\n    font-size: 3.5vw;\n}\n\n@media screen and (min-width: 100vh) {\n    #ordertxt {\n        font-size: 3.5vh;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXIvb3JkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQztJQUNwQyw0RUFBNEU7SUFDNUUsV0FBVztJQUNYLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL29yZGVyL29yZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjb3JkZXJ0eHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICAgIHdpZHRoOiA5MnZ3O1xuICAgIG1heC13aWR0aDogOTJ2aDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZm9udC1zaXplOiAzLjV2dztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwdmgpIHtcbiAgICAjb3JkZXJ0eHQge1xuICAgICAgICBmb250LXNpemU6IDMuNXZoO1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/order/order.component.ts":
/*!******************************************!*\
  !*** ./src/app/order/order.component.ts ***!
  \******************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OrderComponent = class OrderComponent {
    constructor() {
        this.toppingNames = ["Chocolate Sauce", "Sprinkles",
            "Banana", "Caramel Sauce", "Whipped Cream", "Cherry",
            "Strawberries", "Chocolate Chip Cookie"];
        this.rabbitNames = ["Chocolate", "Vanilla", "Strawberry",
            "Caramel", "Mint", "Cookies n' Cream", "Neopolitan", "Blue Moon"];
        this.toppingsPicked = [];
        this.rabbitPicked = 0;
        this.numToPick = 0;
        this.resetAvailable();
    }
    newOrder() {
        this.pickRabbit();
        this.pickToppings();
        this.setText();
        console.log(this.orderText);
    }
    resetAvailable() {
        this.numToppingsAvailable = 3;
        this.numRabbitsAvailable = 2;
    }
    moreRabbits() {
        if (this.numRabbitsAvailable < this.rabbitNames.length) {
            this.numRabbitsAvailable++;
        }
    }
    moreToppings() {
        if (this.numToppingsAvailable < this.toppingNames.length) {
            this.numToppingsAvailable++;
        }
    }
    pickRabbit() {
        var min = 0;
        var max = this.numRabbitsAvailable;
        this.rabbitPicked =
            Math.floor(Math.random() * (+max - +min)) + +min;
    }
    /* pick a random number of toppings
     * then randomly pick that many toppings
     */
    pickToppings() {
        this.toppingsPicked = [];
        var min = 0;
        var max = this.numToppingsAvailable;
        this.numToPick =
            Math.floor(Math.random() * (+max - +min)) + +min;
        let i;
        for (i = 0; i < this.numToPick; i++) {
            let picked = -1;
            let unique = false;
            while (!unique) {
                picked = Math.floor(Math.random() * (+max - +min)) + +min;
                unique = !this.toppingsPicked.includes(picked);
            }
            this.toppingsPicked.push(picked);
        }
    }
    setText() {
        let toppingsStr = "";
        let i;
        for (i = 0; i < this.toppingsPicked.length - 1; i++) {
            toppingsStr += this.toppingNames[this.toppingsPicked[i]] + ", ";
        }
        toppingsStr += this.toppingNames[this.toppingsPicked[i]];
        this.orderText = this.rabbitNames[this.rabbitPicked]
            + " icecream";
        if (this.numToPick > 0) {
            this.orderText += " with " + toppingsStr;
        }
    }
};
OrderComponent.ctorParameters = () => [];
OrderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order',
        template: `
    <div>
      <p id="ordertxt">
        {{ orderText }}
      </p>
    </div>
  `,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./order.component.css */ "./src/app/order/order.component.css")).default]
    })
], OrderComponent);



/***/ }),

/***/ "./src/app/rabbits/rabbits.component.css":
/*!***********************************************!*\
  !*** ./src/app/rabbits/rabbits.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n    width: 11.6vw;\n    height: 11.6vw;\n    max-width: 11.6vh;\n    max-height: 11.6vh;\n    display: inline;\n    border: 1px solid rgba(0,0,0,0)\n}\n\nimg:hover {\n    border: 1px dotted rgb(124, 86, 86);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmFiYml0cy9yYWJiaXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkMiLCJmaWxlIjoic3JjL2FwcC9yYWJiaXRzL3JhYmJpdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gICAgd2lkdGg6IDExLjZ2dztcbiAgICBoZWlnaHQ6IDExLjZ2dztcbiAgICBtYXgtd2lkdGg6IDExLjZ2aDtcbiAgICBtYXgtaGVpZ2h0OiAxMS42dmg7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMClcbn1cblxuaW1nOmhvdmVyIHtcbiAgICBib3JkZXI6IDFweCBkb3R0ZWQgcmdiKDEyNCwgODYsIDg2KTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/rabbits/rabbits.component.ts":
/*!**********************************************!*\
  !*** ./src/app/rabbits/rabbits.component.ts ***!
  \**********************************************/
/*! exports provided: RabbitsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RabbitsComponent", function() { return RabbitsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let RabbitsComponent = class RabbitsComponent {
    constructor() {
        this.emitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chosen = -1;
        this.numRabbits = 8;
    }
    reset() {
        this.chosen = -1;
    }
    choose(index) {
        this.chosen = index;
        this.emitter.emit(index);
    }
    showAvailible(numAvailable) {
        if (numAvailable > this.numRabbits)
            numAvailable = this.numRabbits;
        let i;
        for (i = 0; i < numAvailable; i++) {
            document.getElementById("r" + i).style.visibility = "visible";
        }
        for (i = numAvailable; i < this.numRabbits; i++) {
            //document.getElementById("r" + i).style.visibility = "hidden";
        }
    }
};
RabbitsComponent.ctorParameters = () => [];
RabbitsComponent.propDecorators = {
    emitter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
RabbitsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rabbits',
        template: `
    <div>
      <img src="assets/chocolate.png" id="r0" (click)="choose(0)"/>
      <img src="assets/vanilla.png" id="r1" (click)="choose(1)"/>
      <img src="assets/strawberry.png" id="r2" (click)="choose(2)"/>
      <img src="assets/caramel.png" id="r3" (click)="choose(3)"/>
      <img src="assets/mint.png" id="r4" (click)="choose(4)"/>
      <img src="assets/cookies.png" id="r5" (click)="choose(5)"/>
      <img src="assets/neo.png" id="r6" (click)="choose(6)"/>
      <img src="assets/blueberry.png" id="r7" (click)="choose(7)"/>
    </div>
  `,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./rabbits.component.css */ "./src/app/rabbits/rabbits.component.css")).default]
    })
], RabbitsComponent);



/***/ }),

/***/ "./src/app/timer/timer.component.css":
/*!*******************************************!*\
  !*** ./src/app/timer/timer.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbWVyL3RpbWVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/timer/timer.component.ts":
/*!******************************************!*\
  !*** ./src/app/timer/timer.component.ts ***!
  \******************************************/
/*! exports provided: TimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerComponent", function() { return TimerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TimerComponent = class TimerComponent {
    constructor() {
        this.time = 45;
        setInterval(() => this.updateTimer(this.time), 1000);
    }
    /* to restart clock give new number
     * else use this.time
     */
    updateTimer(time) {
        this.time = time - 1;
        if (this.time < 0)
            this.time = 0;
    }
};
TimerComponent.ctorParameters = () => [];
TimerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-timer',
        template: `<p> {{ time }} </p>`,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./timer.component.css */ "./src/app/timer/timer.component.css")).default]
    })
], TimerComponent);



/***/ }),

/***/ "./src/app/toppings/toppings.component.css":
/*!*************************************************!*\
  !*** ./src/app/toppings/toppings.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n    width: 11.6vw;\n    height: 11.6vw;\n    max-width: 11.6vh;\n    max-height: 11.6vh;\n    display: inline;\n    border: 1px solid rgba(0,0,0,0)\n}\n\nimg:hover {\n    border: 1px dotted rgb(124, 86, 86);\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wcGluZ3MvdG9wcGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJLG1DQUFtQztBQUN2QyIsImZpbGUiOiJzcmMvYXBwL3RvcHBpbmdzL3RvcHBpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICAgIHdpZHRoOiAxMS42dnc7XG4gICAgaGVpZ2h0OiAxMS42dnc7XG4gICAgbWF4LXdpZHRoOiAxMS42dmg7XG4gICAgbWF4LWhlaWdodDogMTEuNnZoO1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDApXG59XG5cbmltZzpob3ZlciB7XG4gICAgYm9yZGVyOiAxcHggZG90dGVkIHJnYigxMjQsIDg2LCA4Nik7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/toppings/toppings.component.ts":
/*!************************************************!*\
  !*** ./src/app/toppings/toppings.component.ts ***!
  \************************************************/
/*! exports provided: ToppingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToppingsComponent", function() { return ToppingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ToppingsComponent = class ToppingsComponent {
    constructor() {
        this.emitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chosen = [];
        this.numToppings = 8;
    }
    reset() {
        this.chosen = [];
    }
    choose(val) {
        if (this.chosen.includes(val)) {
            this.chosen.splice(this.chosen.indexOf(val), 1);
        }
        else {
            this.chosen.push(val);
        }
        this.emitter.emit(val);
    }
    showAvailible(numAvailable) {
        if (numAvailable > this.numToppings)
            numAvailable = this.numToppings;
        let i;
        for (i = 0; i < numAvailable; i++) {
            document.getElementById("t" + i).style.visibility = "visible";
        }
        for (i = numAvailable; i < this.numToppings; i++) {
            //document.getElementById("t" + i).style.visibility = "hidden";
        }
    }
};
ToppingsComponent.ctorParameters = () => [];
ToppingsComponent.propDecorators = {
    emitter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
ToppingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-toppings',
        template: `
    <div>
      <img src="assets/chocoSauce.png" id="t0" (click)="choose(0)" />
      <img src="assets/sprinkles.png" id="t1" (click)="choose(1)" />
      <img src="assets/banana.png" id="t2" (click)="choose(2)" />
      <img src="assets/caramelSauce.png" id="t3" (click)="choose(3)" />
      <img src="assets/whipped.png" id="t4" (click)="choose(4)" />
      <img src="assets/cherry.png" id="t5" (click)="choose(5)" />
      <img src="assets/strawberries.png" id="t6" (click)="choose(6)" />
      <img src="assets/cookie.png" id="t7" (click)="choose(7)" />
    </div>
  `,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./toppings.component.css */ "./src/app/toppings/toppings.component.css")).default]
    })
], ToppingsComponent);



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
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hanny/Desktop/programs/milas-icecream-parlour/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map