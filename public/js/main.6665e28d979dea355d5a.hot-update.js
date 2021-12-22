self["webpackHotUpdatereact_shopping_cart"]("main",{

/***/ "./src/client/App.tsx":
/*!****************************!*\
  !*** ./src/client/App.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _Cart_Item_Item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cart/Item/Item */ "./src/client/Cart/Item/Item.tsx");
/* harmony import */ var _Cart_Cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cart/Cart */ "./src/client/Cart/Cart.tsx");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/Drawer.js");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "./node_modules/@material-ui/core/esm/LinearProgress/LinearProgress.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_icons_AddShoppingCart__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/AddShoppingCart */ "./node_modules/@material-ui/icons/AddShoppingCart.js");
/* harmony import */ var _material_ui_icons_Restore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Restore */ "./node_modules/@material-ui/icons/Restore.js");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Badge */ "./node_modules/@material-ui/core/esm/Badge/Badge.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/Dialog.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js");
/* harmony import */ var _App_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App.styles */ "./src/client/App.styles.ts");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var _a, _b;
var _c;
_c = __webpack_require__.$Refresh$.signature();



// Components










// Styles


var getCheeses = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_d) {
    switch (_d.label) {
        case 0: return [4 /*yield*/, fetch("api/cheeses")];
        case 1: return [4 /*yield*/, (_d.sent()).json()];
        case 2: return [2 /*return*/, _d.sent()];
    }
}); }); };
// fetch the fake json I created to show the recent purchse history
var getRecentLists = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_d) {
    switch (_d.label) {
        case 0: return [4 /*yield*/, fetch("api/recent")];
        case 1: return [4 /*yield*/, (_d.sent()).json()];
        case 2: return [2 /*return*/, _d.sent()];
    }
}); }); };
// display dialog when clicking cheese cards
function SimpleDialog(props) {
    var onClose = props.onClose, open = props.open, itemDescription = props.itemDescription;
    var handleClose = function () {
        onClose();
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5__.default, __assign({ onClose: handleClose, open: open }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__.default, { children: itemDescription }, void 0) }), void 0));
}
_a = SimpleDialog;
__webpack_require__.$Refresh$.register(_a, "SimpleDialog");
var App = _c(function () {
    _c();
    var _d = react__WEBPACK_IMPORTED_MODULE_1__.useState(false), open = _d[0], setOpen = _d[1];
    var _e = react__WEBPACK_IMPORTED_MODULE_1__.useState(''), itemDescription = _e[0], setItemDescription = _e[1];
    var _f = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), cartOpen = _f[0], setCartOpen = _f[1];
    var _g = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), cartItems = _g[0], setCartItems = _g[1];
    var _h = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useQuery)('cheeses', getCheeses), data = _h.data, isLoading = _h.isLoading, error = _h.error;
    console.log(data);
    //collect id and other information from getRecentLists fetched from backend
    var response = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useQuery)('rencentlist', getRecentLists);
    var recentList = response.data;
    var handleClickOpen = function (itemDescription) {
        setOpen(true);
        setItemDescription(itemDescription);
    };
    var handleClose = function () {
        setOpen(false);
    };
    //show id, title, amount and price in recent purchase history dialog
    var handleShowRecentDialog = function () {
        console.log(recentList);
        var itemDescription = recentList.map(function (item) {
            var id = item.id, title = item.title, amount = item.amount, price = item.price;
            return "id:" + id + " title:" + title + " amount" + amount + " price" + price;
        }).join(',\n');
        handleClickOpen(itemDescription);
    };
    var getTotalItems = function (items) {
        return items.reduce(function (ack, item) { return ack + item.amount; }, 0);
    };
    //show description as string in dialog
    var handleShowDialog = function (itemDescription) {
        console.log(itemDescription);
        handleClickOpen(itemDescription);
    };
    var handleAddToCart = function (clickedItem) {
        setCartItems(function (prev) {
            // 1. Is the item already added in the cart?
            var isItemInCart = prev.find(function (item) { return item.id === clickedItem.id; });
            if (isItemInCart) {
                return prev.map(function (item) {
                    return item.id === clickedItem.id
                        ? __assign(__assign({}, item), { amount: item.amount + 1 }) : item;
                });
            }
            // First time the item is added
            return __spreadArrays(prev, [__assign(__assign({}, clickedItem), { amount: 1 })]);
        });
    };
    var handleRemoveFromCart = function (id) {
        setCartItems(function (prev) {
            return prev.reduce(function (ack, item) {
                if (item.id === id) {
                    if (item.amount === 1)
                        return ack;
                    return __spreadArrays(ack, [__assign(__assign({}, item), { amount: item.amount - 1 })]);
                }
                else {
                    return __spreadArrays(ack, [item]);
                }
            }, []);
        });
    };
    if (isLoading)
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0);
    if (error)
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: "Something went wrong ..." }, void 0);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_App_styles__WEBPACK_IMPORTED_MODULE_4__.Wrapper, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_App_styles__WEBPACK_IMPORTED_MODULE_4__.StyledAppBar, __assign({ position: "static" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.default, __assign({ container: true, direction: "row", justify: "space-between", alignItems: "center" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_App_styles__WEBPACK_IMPORTED_MODULE_4__.StyledButton, __assign({ onClick: function () { handleShowRecentDialog(); } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_icons_Restore__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0),
                                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.default, __assign({ variant: "subtitle2" }, { children: "Recent Purchases" }), void 0)] }), void 0),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_App_styles__WEBPACK_IMPORTED_MODULE_4__.HeaderTypography, __assign({ variant: "h3", noWrap: true }, { children: "Welcome to Patient Zero's Cheeseria" }), void 0),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_App_styles__WEBPACK_IMPORTED_MODULE_4__.StyledButton, __assign({ onClick: function () { return setCartOpen(true); } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_13__.default, __assign({ badgeContent: getTotalItems(cartItems), color: 'error', "data-cy": "badge-count" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_icons_AddShoppingCart__WEBPACK_IMPORTED_MODULE_14__.default, {}, void 0) }), void 0),
                                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.default, __assign({ variant: "subtitle2" }, { children: "Cart" }), void 0)] }), void 0)] }), void 0) }, void 0) }), void 0),
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_15__.default, __assign({ anchor: 'right', open: cartOpen, onClose: function () { return setCartOpen(false); } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Cart_Cart__WEBPACK_IMPORTED_MODULE_3__.default, { cartItems: cartItems, addToCart: handleAddToCart, removeFromCart: handleRemoveFromCart }, void 0) }), void 0),
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.default, __assign({ container: true, spacing: 3 }, { children: data === null || data === void 0 ? void 0 : data.map(function (item) { return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.default, __assign({ item: true, xs: 12, sm: 4 }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Cart_Item_Item__WEBPACK_IMPORTED_MODULE_2__.default, { item: item, handleAddToCart: handleAddToCart, handleShowDialog: handleShowDialog }, void 0) }), item.id)); }) }), void 0),
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SimpleDialog, { open: open, itemDescription: itemDescription, onClose: handleClose }, void 0)] }, void 0));
}, "9mgVQgVaOQJkkW6mwlvly83dfvk=", false, function () { return [react_query__WEBPACK_IMPORTED_MODULE_7__.useQuery, react_query__WEBPACK_IMPORTED_MODULE_7__.useQuery]; });
_b = App;
__webpack_require__.$Refresh$.register(_b, "App");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


const currentExports = __react_refresh_utils__.getModuleExports(module.id);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}

/***/ }),

/***/ "./src/client/Cart/Cart.tsx":
/*!**********************************!*\
  !*** ./src/client/Cart/Cart.tsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _CartItem_CartItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CartItem/CartItem */ "./src/client/Cart/CartItem/CartItem.tsx");
/* harmony import */ var _Cart_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cart.styles */ "./src/client/Cart/Cart.styles.ts");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;




//POST data saved in cart to backend server
function postData(url, data) {
    if (url === void 0) { url = ''; }
    if (data === void 0) { data = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, fetch(url, {
                        method: 'POST',
                        mode: 'cors',
                        cache: 'no-cache',
                        credentials: 'same-origin',
                        headers: {
                            'Content-Type': 'application/json'
                            // 'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        redirect: 'follow',
                        referrerPolicy: 'no-referrer',
                        body: JSON.stringify(data) // body data type must match "Content-Type" header
                    })];
                case 1:
                    response = _b.sent();
                    return [2 /*return*/, response.json()]; // parses JSON response into native JavaScript objects
            }
        });
    });
}
var Cart = function (_b) {
    var cartItems = _b.cartItems, addToCart = _b.addToCart, removeFromCart = _b.removeFromCart;
    var calculateTotal = function (items) {
        return items.reduce(function (ack, item) { return ack + item.amount * item.price; }, 0);
    };
    //save the id and amount of items purchased in cart
    var handleSubmit = function (items) {
        var obj = items.map(function (item) {
            var id = item.id, amount = item.amount;
            return {
                id: id,
                amount: amount
            };
        });
        console.log(obj);
        postData("api/purchase", { obj: obj })
            .then(function (data) {
            console.log('success', data); // JSON data parsed by `data.json()` call
        });
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Cart_styles__WEBPACK_IMPORTED_MODULE_2__.Wrapper, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", { children: "Your Shopping Cart" }, void 0),
            cartItems.length === 0 ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: "No items in cart." }, void 0) : null,
            cartItems.map(function (item) { return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CartItem_CartItem__WEBPACK_IMPORTED_MODULE_1__.default, { item: item, addToCart: addToCart, removeFromCart: removeFromCart }, item.id)); }),
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", { children: ["Total: $", calculateTotal(cartItems).toFixed(2)] }, void 0),
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__.default, __assign({ onClick: function () { handleSubmit(cartItems); } }, { children: "Purchase" }), void 0)] }, void 0));
};
_a = Cart;
__webpack_require__.$Refresh$.register(_a, "Cart");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);


const currentExports = __react_refresh_utils__.getModuleExports(module.id);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}

/***/ }),

/***/ "./src/client/Cart/Item/Item.tsx":
/*!***************************************!*\
  !*** ./src/client/Cart/Item/Item.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _Item_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Item.styles */ "./src/client/Cart/Item/Item.styles.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;


// Styles

var Item = function (_b) {
    var item = _b.item, handleAddToCart = _b.handleAddToCart, handleShowDialog = _b.handleShowDialog;
    return (
    //make sure only the pics and titles are available to click to show the dialog
    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Item_styles__WEBPACK_IMPORTED_MODULE_1__.Wrapper, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: item.image, alt: item.title, onClick: function () { handleShowDialog(item.description); } }, void 0),
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ onClick: function () { handleShowDialog(item.description); } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { children: item.title }, void 0),
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", { children: ["$", item.price] }, void 0)] }), void 0),
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__.default, __assign({ onClick: function () { return handleAddToCart(item); }, "data-cy": "add-to-cart-" + item.id }, { children: "Add to cart" }), void 0)] }, void 0));
};
_a = Item;
__webpack_require__.$Refresh$.register(_a, "Item");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);


const currentExports = __react_refresh_utils__.getModuleExports(module.id);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6cfbf9f8879cdb2658e1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1zaG9wcGluZy1jYXJ0Ly4vc3JjL2NsaWVudC9BcHAudHN4Iiwid2VicGFjazovL3JlYWN0LXNob3BwaW5nLWNhcnQvLi9zcmMvY2xpZW50L0NhcnQvQ2FydC50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtc2hvcHBpbmctY2FydC8uL3NyYy9jbGllbnQvQ2FydC9JdGVtL0l0ZW0udHN4Iiwid2VicGFjazovL3JlYWN0LXNob3BwaW5nLWNhcnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFJLElBQUksU0FBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFNBQUksSUFBSSxTQUFJO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHVDQUFZO0FBQzhDO0FBQ3ZCO0FBQ0Q7QUFDdkM7QUFDb0M7QUFDTDtBQUNlO0FBQ2dCO0FBQ3BCO0FBQzJCO0FBQ2hCO0FBQ1Q7QUFDRTtBQUNVO0FBQ3hEO0FBQ3FGO0FBQzdCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0RBQUksQ0FBQyw2REFBTSw2REFBNkQsc0RBQUksQ0FBQyxrRUFBVztBQUNwRztBQUNBO0FBQ0Esc0NBQVk7QUFDWjtBQUNBO0FBQ0EsYUFBYSwyQ0FBYztBQUMzQixhQUFhLDJDQUFjO0FBQzNCLGFBQWEsK0NBQVE7QUFDckIsYUFBYSwrQ0FBUTtBQUNyQixhQUFhLHFEQUFRO0FBQ3JCO0FBQ0E7QUFDQSxtQkFBbUIscURBQVE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxzREFBSSxDQUFDLHFFQUFjO0FBQ2xDO0FBQ0EsZUFBZSxzREFBSTtBQUNuQixZQUFZLHVEQUFLLENBQUMsZ0RBQU8sZUFBZSxzREFBSSxDQUFDLHFEQUFZLCtDQUErQyxzREFBSSxDQUFDLHNEQUFPLGNBQWMsdURBQUssQ0FBQyw0REFBSSwrR0FBK0csdURBQUssQ0FBQyxxREFBWSxnRkFBZ0Ysc0RBQUksQ0FBQyxnRUFBVztBQUM3VyxvQ0FBb0Msc0RBQUksQ0FBQyx1REFBVTtBQUNuRCw0QkFBNEIsc0RBQUksQ0FBQyx5REFBZ0I7QUFDakQsNEJBQTRCLHVEQUFLLENBQUMscURBQVksZ0ZBQWdGLHNEQUFJLENBQUMsNkRBQUssNkdBQTZHLHNEQUFJLENBQUMsd0VBQW1CO0FBQzdRLG9DQUFvQyxzREFBSSxDQUFDLHVEQUFVO0FBQ25ELFlBQVksc0RBQUksQ0FBQyw4REFBTSxpSEFBaUgsc0RBQUksQ0FBQywrQ0FBSTtBQUNqSixZQUFZLHNEQUFJLENBQUMsNERBQUksdUlBQXVJLHNEQUFJLENBQUMsNERBQUksc0RBQXNELHNEQUFJLENBQUMsb0RBQUk7QUFDcE8sWUFBWSxzREFBSTtBQUNoQixnRUFBZ0UsaURBQVEsRUFBRSxpREFBUTtBQUNsRjtBQUNBLHNDQUFZO0FBQ1osaUVBQWUsR0FBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqTG5CLGdCQUFnQixTQUFJLElBQUksU0FBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQUksSUFBSSxTQUFJO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrRDtBQUNwQjtBQUNIO0FBQ007QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1REFBSyxDQUFDLGlEQUFPLGVBQWUsc0RBQUk7QUFDNUMscUNBQXFDLHNEQUFJO0FBQ3pDLG9EQUFvRCxzREFBSSxDQUFDLHVEQUFRO0FBQ2pFLFlBQVksdURBQUs7QUFDakIsWUFBWSxzREFBSSxDQUFDLDZEQUFNO0FBQ3ZCO0FBQ0E7QUFDQSxzQ0FBWTtBQUNaLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1R3BCLGdCQUFnQixTQUFJLElBQUksU0FBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytEO0FBQ2pCO0FBQzlDO0FBQ3dDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1REFBSyxDQUFDLGlEQUFPLGVBQWUsc0RBQUk7QUFDcEMsWUFBWSx1REFBSyxnR0FBZ0csc0RBQUk7QUFDckgsb0JBQW9CLHVEQUFLO0FBQ3pCLFlBQVksc0RBQUksQ0FBQyw2REFBTTtBQUN2QjtBQUNBO0FBQ0Esc0NBQVk7QUFDWixpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzQnBCLHNEIiwiZmlsZSI6Im1haW4uNjY2NWUyOGQ5NzlkZWEzNTVkNWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xudmFyIF9fc3ByZWFkQXJyYXlzID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5cykgfHwgZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcbiAgICByZXR1cm4gcjtcbn07XG52YXIgX2EsIF9iO1xudmFyIF9jO1xuX2MgPSAkUmVmcmVzaFNpZyQoKTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LXF1ZXJ5Jztcbi8vIENvbXBvbmVudHNcbmltcG9ydCBJdGVtIGZyb20gJy4vQ2FydC9JdGVtL0l0ZW0nO1xuaW1wb3J0IENhcnQgZnJvbSAnLi9DYXJ0L0NhcnQnO1xuaW1wb3J0IERyYXdlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXInO1xuaW1wb3J0IExpbmVhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzJztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IEFkZFNob3BwaW5nQ2FydEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FkZFNob3BwaW5nQ2FydCc7XG5pbXBvcnQgUmVzdG9yZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1Jlc3RvcmUnO1xuaW1wb3J0IEJhZGdlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JhZGdlJztcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZSc7XG4vLyBTdHlsZXNcbmltcG9ydCB7IFdyYXBwZXIsIFN0eWxlZEJ1dHRvbiwgU3R5bGVkQXBwQmFyLCBIZWFkZXJUeXBvZ3JhcGh5IH0gZnJvbSAnLi9BcHAuc3R5bGVzJztcbmltcG9ydCB7IFRvb2xiYXIsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG52YXIgZ2V0Q2hlZXNlcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2QpIHtcbiAgICBzd2l0Y2ggKF9kLmxhYmVsKSB7XG4gICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgZmV0Y2goXCJhcGkvY2hlZXNlc1wiKV07XG4gICAgICAgIGNhc2UgMTogcmV0dXJuIFs0IC8qeWllbGQqLywgKF9kLnNlbnQoKSkuanNvbigpXTtcbiAgICAgICAgY2FzZSAyOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Quc2VudCgpXTtcbiAgICB9XG59KTsgfSk7IH07XG4vLyBmZXRjaCB0aGUgZmFrZSBqc29uIEkgY3JlYXRlZCB0byBzaG93IHRoZSByZWNlbnQgcHVyY2hzZSBoaXN0b3J5XG52YXIgZ2V0UmVjZW50TGlzdHMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkgeyByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9kKSB7XG4gICAgc3dpdGNoIChfZC5sYWJlbCkge1xuICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKFwiYXBpL3JlY2VudFwiKV07XG4gICAgICAgIGNhc2UgMTogcmV0dXJuIFs0IC8qeWllbGQqLywgKF9kLnNlbnQoKSkuanNvbigpXTtcbiAgICAgICAgY2FzZSAyOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Quc2VudCgpXTtcbiAgICB9XG59KTsgfSk7IH07XG4vLyBkaXNwbGF5IGRpYWxvZyB3aGVuIGNsaWNraW5nIGNoZWVzZSBjYXJkc1xuZnVuY3Rpb24gU2ltcGxlRGlhbG9nKHByb3BzKSB7XG4gICAgdmFyIG9uQ2xvc2UgPSBwcm9wcy5vbkNsb3NlLCBvcGVuID0gcHJvcHMub3BlbiwgaXRlbURlc2NyaXB0aW9uID0gcHJvcHMuaXRlbURlc2NyaXB0aW9uO1xuICAgIHZhciBoYW5kbGVDbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb25DbG9zZSgpO1xuICAgIH07XG4gICAgcmV0dXJuIChfanN4KERpYWxvZywgX19hc3NpZ24oeyBvbkNsb3NlOiBoYW5kbGVDbG9zZSwgb3Blbjogb3BlbiB9LCB7IGNoaWxkcmVuOiBfanN4KERpYWxvZ1RpdGxlLCB7IGNoaWxkcmVuOiBpdGVtRGVzY3JpcHRpb24gfSwgdm9pZCAwKSB9KSwgdm9pZCAwKSk7XG59XG5fYSA9IFNpbXBsZURpYWxvZztcbiRSZWZyZXNoUmVnJChfYSwgXCJTaW1wbGVEaWFsb2dcIik7XG52YXIgQXBwID0gX2MoZnVuY3Rpb24gKCkge1xuICAgIF9jKCk7XG4gICAgdmFyIF9kID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpLCBvcGVuID0gX2RbMF0sIHNldE9wZW4gPSBfZFsxXTtcbiAgICB2YXIgX2UgPSBSZWFjdC51c2VTdGF0ZSgnJyksIGl0ZW1EZXNjcmlwdGlvbiA9IF9lWzBdLCBzZXRJdGVtRGVzY3JpcHRpb24gPSBfZVsxXTtcbiAgICB2YXIgX2YgPSB1c2VTdGF0ZShmYWxzZSksIGNhcnRPcGVuID0gX2ZbMF0sIHNldENhcnRPcGVuID0gX2ZbMV07XG4gICAgdmFyIF9nID0gdXNlU3RhdGUoW10pLCBjYXJ0SXRlbXMgPSBfZ1swXSwgc2V0Q2FydEl0ZW1zID0gX2dbMV07XG4gICAgdmFyIF9oID0gdXNlUXVlcnkoJ2NoZWVzZXMnLCBnZXRDaGVlc2VzKSwgZGF0YSA9IF9oLmRhdGEsIGlzTG9hZGluZyA9IF9oLmlzTG9hZGluZywgZXJyb3IgPSBfaC5lcnJvcjtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAvL2NvbGxlY3QgaWQgYW5kIG90aGVyIGluZm9ybWF0aW9uIGZyb20gZ2V0UmVjZW50TGlzdHMgZmV0Y2hlZCBmcm9tIGJhY2tlbmRcbiAgICB2YXIgcmVzcG9uc2UgPSB1c2VRdWVyeSgncmVuY2VudGxpc3QnLCBnZXRSZWNlbnRMaXN0cyk7XG4gICAgdmFyIHJlY2VudExpc3QgPSByZXNwb25zZS5kYXRhO1xuICAgIHZhciBoYW5kbGVDbGlja09wZW4gPSBmdW5jdGlvbiAoaXRlbURlc2NyaXB0aW9uKSB7XG4gICAgICAgIHNldE9wZW4odHJ1ZSk7XG4gICAgICAgIHNldEl0ZW1EZXNjcmlwdGlvbihpdGVtRGVzY3JpcHRpb24pO1xuICAgIH07XG4gICAgdmFyIGhhbmRsZUNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICB9O1xuICAgIC8vc2hvdyBpZCwgdGl0bGUsIGFtb3VudCBhbmQgcHJpY2UgaW4gcmVjZW50IHB1cmNoYXNlIGhpc3RvcnkgZGlhbG9nXG4gICAgdmFyIGhhbmRsZVNob3dSZWNlbnREaWFsb2cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlY2VudExpc3QpO1xuICAgICAgICB2YXIgaXRlbURlc2NyaXB0aW9uID0gcmVjZW50TGlzdC5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHZhciBpZCA9IGl0ZW0uaWQsIHRpdGxlID0gaXRlbS50aXRsZSwgYW1vdW50ID0gaXRlbS5hbW91bnQsIHByaWNlID0gaXRlbS5wcmljZTtcbiAgICAgICAgICAgIHJldHVybiBcImlkOlwiICsgaWQgKyBcIiB0aXRsZTpcIiArIHRpdGxlICsgXCIgYW1vdW50XCIgKyBhbW91bnQgKyBcIiBwcmljZVwiICsgcHJpY2U7XG4gICAgICAgIH0pLmpvaW4oJyxcXG4nKTtcbiAgICAgICAgaGFuZGxlQ2xpY2tPcGVuKGl0ZW1EZXNjcmlwdGlvbik7XG4gICAgfTtcbiAgICB2YXIgZ2V0VG90YWxJdGVtcyA9IGZ1bmN0aW9uIChpdGVtcykge1xuICAgICAgICByZXR1cm4gaXRlbXMucmVkdWNlKGZ1bmN0aW9uIChhY2ssIGl0ZW0pIHsgcmV0dXJuIGFjayArIGl0ZW0uYW1vdW50OyB9LCAwKTtcbiAgICB9O1xuICAgIC8vc2hvdyBkZXNjcmlwdGlvbiBhcyBzdHJpbmcgaW4gZGlhbG9nXG4gICAgdmFyIGhhbmRsZVNob3dEaWFsb2cgPSBmdW5jdGlvbiAoaXRlbURlc2NyaXB0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW1EZXNjcmlwdGlvbik7XG4gICAgICAgIGhhbmRsZUNsaWNrT3BlbihpdGVtRGVzY3JpcHRpb24pO1xuICAgIH07XG4gICAgdmFyIGhhbmRsZUFkZFRvQ2FydCA9IGZ1bmN0aW9uIChjbGlja2VkSXRlbSkge1xuICAgICAgICBzZXRDYXJ0SXRlbXMoZnVuY3Rpb24gKHByZXYpIHtcbiAgICAgICAgICAgIC8vIDEuIElzIHRoZSBpdGVtIGFscmVhZHkgYWRkZWQgaW4gdGhlIGNhcnQ/XG4gICAgICAgICAgICB2YXIgaXNJdGVtSW5DYXJ0ID0gcHJldi5maW5kKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtLmlkID09PSBjbGlja2VkSXRlbS5pZDsgfSk7XG4gICAgICAgICAgICBpZiAoaXNJdGVtSW5DYXJ0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXYubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmlkID09PSBjbGlja2VkSXRlbS5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgaXRlbSksIHsgYW1vdW50OiBpdGVtLmFtb3VudCArIDEgfSkgOiBpdGVtO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRmlyc3QgdGltZSB0aGUgaXRlbSBpcyBhZGRlZFxuICAgICAgICAgICAgcmV0dXJuIF9fc3ByZWFkQXJyYXlzKHByZXYsIFtfX2Fzc2lnbihfX2Fzc2lnbih7fSwgY2xpY2tlZEl0ZW0pLCB7IGFtb3VudDogMSB9KV0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHZhciBoYW5kbGVSZW1vdmVGcm9tQ2FydCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBzZXRDYXJ0SXRlbXMoZnVuY3Rpb24gKHByZXYpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmV2LnJlZHVjZShmdW5jdGlvbiAoYWNrLCBpdGVtKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmFtb3VudCA9PT0gMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2s7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfX3NwcmVhZEFycmF5cyhhY2ssIFtfX2Fzc2lnbihfX2Fzc2lnbih7fSwgaXRlbSksIHsgYW1vdW50OiBpdGVtLmFtb3VudCAtIDEgfSldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfX3NwcmVhZEFycmF5cyhhY2ssIFtpdGVtXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgW10pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGlmIChpc0xvYWRpbmcpXG4gICAgICAgIHJldHVybiBfanN4KExpbmVhclByb2dyZXNzLCB7fSwgdm9pZCAwKTtcbiAgICBpZiAoZXJyb3IpXG4gICAgICAgIHJldHVybiBfanN4KFwiZGl2XCIsIHsgY2hpbGRyZW46IFwiU29tZXRoaW5nIHdlbnQgd3JvbmcgLi4uXCIgfSwgdm9pZCAwKTtcbiAgICByZXR1cm4gKF9qc3hzKFdyYXBwZXIsIHsgY2hpbGRyZW46IFtfanN4KFN0eWxlZEFwcEJhciwgX19hc3NpZ24oeyBwb3NpdGlvbjogXCJzdGF0aWNcIiB9LCB7IGNoaWxkcmVuOiBfanN4KFRvb2xiYXIsIHsgY2hpbGRyZW46IF9qc3hzKEdyaWQsIF9fYXNzaWduKHsgY29udGFpbmVyOiB0cnVlLCBkaXJlY3Rpb246IFwicm93XCIsIGp1c3RpZnk6IFwic3BhY2UtYmV0d2VlblwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiIH0sIHsgY2hpbGRyZW46IFtfanN4cyhTdHlsZWRCdXR0b24sIF9fYXNzaWduKHsgb25DbGljazogZnVuY3Rpb24gKCkgeyBoYW5kbGVTaG93UmVjZW50RGlhbG9nKCk7IH0gfSwgeyBjaGlsZHJlbjogW19qc3goUmVzdG9yZUljb24sIHt9LCB2b2lkIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2pzeChUeXBvZ3JhcGh5LCBfX2Fzc2lnbih7IHZhcmlhbnQ6IFwic3VidGl0bGUyXCIgfSwgeyBjaGlsZHJlbjogXCJSZWNlbnQgUHVyY2hhc2VzXCIgfSksIHZvaWQgMCldIH0pLCB2b2lkIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9qc3goSGVhZGVyVHlwb2dyYXBoeSwgX19hc3NpZ24oeyB2YXJpYW50OiBcImgzXCIsIG5vV3JhcDogdHJ1ZSB9LCB7IGNoaWxkcmVuOiBcIldlbGNvbWUgdG8gUGF0aWVudCBaZXJvJ3MgQ2hlZXNlcmlhXCIgfSksIHZvaWQgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2pzeHMoU3R5bGVkQnV0dG9uLCBfX2Fzc2lnbih7IG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldENhcnRPcGVuKHRydWUpOyB9IH0sIHsgY2hpbGRyZW46IFtfanN4KEJhZGdlLCBfX2Fzc2lnbih7IGJhZGdlQ29udGVudDogZ2V0VG90YWxJdGVtcyhjYXJ0SXRlbXMpLCBjb2xvcjogJ2Vycm9yJywgXCJkYXRhLWN5XCI6IFwiYmFkZ2UtY291bnRcIiB9LCB7IGNoaWxkcmVuOiBfanN4KEFkZFNob3BwaW5nQ2FydEljb24sIHt9LCB2b2lkIDApIH0pLCB2b2lkIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2pzeChUeXBvZ3JhcGh5LCBfX2Fzc2lnbih7IHZhcmlhbnQ6IFwic3VidGl0bGUyXCIgfSwgeyBjaGlsZHJlbjogXCJDYXJ0XCIgfSksIHZvaWQgMCldIH0pLCB2b2lkIDApXSB9KSwgdm9pZCAwKSB9LCB2b2lkIDApIH0pLCB2b2lkIDApLFxuICAgICAgICAgICAgX2pzeChEcmF3ZXIsIF9fYXNzaWduKHsgYW5jaG9yOiAncmlnaHQnLCBvcGVuOiBjYXJ0T3Blbiwgb25DbG9zZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0Q2FydE9wZW4oZmFsc2UpOyB9IH0sIHsgY2hpbGRyZW46IF9qc3goQ2FydCwgeyBjYXJ0SXRlbXM6IGNhcnRJdGVtcywgYWRkVG9DYXJ0OiBoYW5kbGVBZGRUb0NhcnQsIHJlbW92ZUZyb21DYXJ0OiBoYW5kbGVSZW1vdmVGcm9tQ2FydCB9LCB2b2lkIDApIH0pLCB2b2lkIDApLFxuICAgICAgICAgICAgX2pzeChHcmlkLCBfX2Fzc2lnbih7IGNvbnRhaW5lcjogdHJ1ZSwgc3BhY2luZzogMyB9LCB7IGNoaWxkcmVuOiBkYXRhID09PSBudWxsIHx8IGRhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRhdGEubWFwKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiAoX2pzeChHcmlkLCBfX2Fzc2lnbih7IGl0ZW06IHRydWUsIHhzOiAxMiwgc206IDQgfSwgeyBjaGlsZHJlbjogX2pzeChJdGVtLCB7IGl0ZW06IGl0ZW0sIGhhbmRsZUFkZFRvQ2FydDogaGFuZGxlQWRkVG9DYXJ0LCBoYW5kbGVTaG93RGlhbG9nOiBoYW5kbGVTaG93RGlhbG9nIH0sIHZvaWQgMCkgfSksIGl0ZW0uaWQpKTsgfSkgfSksIHZvaWQgMCksXG4gICAgICAgICAgICBfanN4KFNpbXBsZURpYWxvZywgeyBvcGVuOiBvcGVuLCBpdGVtRGVzY3JpcHRpb246IGl0ZW1EZXNjcmlwdGlvbiwgb25DbG9zZTogaGFuZGxlQ2xvc2UgfSwgdm9pZCAwKV0gfSwgdm9pZCAwKSk7XG59LCBcIjltZ1ZRZ1ZhT1FKa2tXNm13bHZseTgzZGZ2az1cIiwgZmFsc2UsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIFt1c2VRdWVyeSwgdXNlUXVlcnldOyB9KTtcbl9iID0gQXBwO1xuJFJlZnJlc2hSZWckKF9iLCBcIkFwcFwiKTtcbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xudmFyIF9hO1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBDYXJ0SXRlbSBmcm9tICcuL0NhcnRJdGVtL0NhcnRJdGVtJztcbmltcG9ydCB7IFdyYXBwZXIgfSBmcm9tICcuL0NhcnQuc3R5bGVzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbi8vUE9TVCBkYXRhIHNhdmVkIGluIGNhcnQgdG8gYmFja2VuZCBzZXJ2ZXJcbmZ1bmN0aW9uIHBvc3REYXRhKHVybCwgZGF0YSkge1xuICAgIGlmICh1cmwgPT09IHZvaWQgMCkgeyB1cmwgPSAnJzsgfVxuICAgIGlmIChkYXRhID09PSB2b2lkIDApIHsgZGF0YSA9IHt9OyB9XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzcG9uc2U7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKHVybCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiAnY29ycycsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWNoZTogJ25vLWNhY2hlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3Q6ICdmb2xsb3cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJyZXJQb2xpY3k6ICduby1yZWZlcnJlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSAvLyBib2R5IGRhdGEgdHlwZSBtdXN0IG1hdGNoIFwiQ29udGVudC1UeXBlXCIgaGVhZGVyXG4gICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2UuanNvbigpXTsgLy8gcGFyc2VzIEpTT04gcmVzcG9uc2UgaW50byBuYXRpdmUgSmF2YVNjcmlwdCBvYmplY3RzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxudmFyIENhcnQgPSBmdW5jdGlvbiAoX2IpIHtcbiAgICB2YXIgY2FydEl0ZW1zID0gX2IuY2FydEl0ZW1zLCBhZGRUb0NhcnQgPSBfYi5hZGRUb0NhcnQsIHJlbW92ZUZyb21DYXJ0ID0gX2IucmVtb3ZlRnJvbUNhcnQ7XG4gICAgdmFyIGNhbGN1bGF0ZVRvdGFsID0gZnVuY3Rpb24gKGl0ZW1zKSB7XG4gICAgICAgIHJldHVybiBpdGVtcy5yZWR1Y2UoZnVuY3Rpb24gKGFjaywgaXRlbSkgeyByZXR1cm4gYWNrICsgaXRlbS5hbW91bnQgKiBpdGVtLnByaWNlOyB9LCAwKTtcbiAgICB9O1xuICAgIC8vc2F2ZSB0aGUgaWQgYW5kIGFtb3VudCBvZiBpdGVtcyBwdXJjaGFzZWQgaW4gY2FydFxuICAgIHZhciBoYW5kbGVTdWJtaXQgPSBmdW5jdGlvbiAoaXRlbXMpIHtcbiAgICAgICAgdmFyIG9iaiA9IGl0ZW1zLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgdmFyIGlkID0gaXRlbS5pZCwgYW1vdW50ID0gaXRlbS5hbW91bnQ7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICBhbW91bnQ6IGFtb3VudFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKG9iaik7XG4gICAgICAgIHBvc3REYXRhKFwiYXBpL3B1cmNoYXNlXCIsIHsgb2JqOiBvYmogfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycsIGRhdGEpOyAvLyBKU09OIGRhdGEgcGFyc2VkIGJ5IGBkYXRhLmpzb24oKWAgY2FsbFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiAoX2pzeHMoV3JhcHBlciwgeyBjaGlsZHJlbjogW19qc3goXCJoMlwiLCB7IGNoaWxkcmVuOiBcIllvdXIgU2hvcHBpbmcgQ2FydFwiIH0sIHZvaWQgMCksXG4gICAgICAgICAgICBjYXJ0SXRlbXMubGVuZ3RoID09PSAwID8gX2pzeChcInBcIiwgeyBjaGlsZHJlbjogXCJObyBpdGVtcyBpbiBjYXJ0LlwiIH0sIHZvaWQgMCkgOiBudWxsLFxuICAgICAgICAgICAgY2FydEl0ZW1zLm1hcChmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gKF9qc3goQ2FydEl0ZW0sIHsgaXRlbTogaXRlbSwgYWRkVG9DYXJ0OiBhZGRUb0NhcnQsIHJlbW92ZUZyb21DYXJ0OiByZW1vdmVGcm9tQ2FydCB9LCBpdGVtLmlkKSk7IH0pLFxuICAgICAgICAgICAgX2pzeHMoXCJoMlwiLCB7IGNoaWxkcmVuOiBbXCJUb3RhbDogJFwiLCBjYWxjdWxhdGVUb3RhbChjYXJ0SXRlbXMpLnRvRml4ZWQoMildIH0sIHZvaWQgMCksXG4gICAgICAgICAgICBfanN4KEJ1dHRvbiwgX19hc3NpZ24oeyBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IGhhbmRsZVN1Ym1pdChjYXJ0SXRlbXMpOyB9IH0sIHsgY2hpbGRyZW46IFwiUHVyY2hhc2VcIiB9KSwgdm9pZCAwKV0gfSwgdm9pZCAwKSk7XG59O1xuX2EgPSBDYXJ0O1xuJFJlZnJlc2hSZWckKF9hLCBcIkNhcnRcIik7XG5leHBvcnQgZGVmYXVsdCBDYXJ0O1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfYTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG4vLyBTdHlsZXNcbmltcG9ydCB7IFdyYXBwZXIgfSBmcm9tICcuL0l0ZW0uc3R5bGVzJztcbnZhciBJdGVtID0gZnVuY3Rpb24gKF9iKSB7XG4gICAgdmFyIGl0ZW0gPSBfYi5pdGVtLCBoYW5kbGVBZGRUb0NhcnQgPSBfYi5oYW5kbGVBZGRUb0NhcnQsIGhhbmRsZVNob3dEaWFsb2cgPSBfYi5oYW5kbGVTaG93RGlhbG9nO1xuICAgIHJldHVybiAoXG4gICAgLy9tYWtlIHN1cmUgb25seSB0aGUgcGljcyBhbmQgdGl0bGVzIGFyZSBhdmFpbGFibGUgdG8gY2xpY2sgdG8gc2hvdyB0aGUgZGlhbG9nXG4gICAgX2pzeHMoV3JhcHBlciwgeyBjaGlsZHJlbjogW19qc3goXCJpbWdcIiwgeyBzcmM6IGl0ZW0uaW1hZ2UsIGFsdDogaXRlbS50aXRsZSwgb25DbGljazogZnVuY3Rpb24gKCkgeyBoYW5kbGVTaG93RGlhbG9nKGl0ZW0uZGVzY3JpcHRpb24pOyB9IH0sIHZvaWQgMCksXG4gICAgICAgICAgICBfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgaGFuZGxlU2hvd0RpYWxvZyhpdGVtLmRlc2NyaXB0aW9uKTsgfSB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImgzXCIsIHsgY2hpbGRyZW46IGl0ZW0udGl0bGUgfSwgdm9pZCAwKSxcbiAgICAgICAgICAgICAgICAgICAgX2pzeHMoXCJoM1wiLCB7IGNoaWxkcmVuOiBbXCIkXCIsIGl0ZW0ucHJpY2VdIH0sIHZvaWQgMCldIH0pLCB2b2lkIDApLFxuICAgICAgICAgICAgX2pzeChCdXR0b24sIF9fYXNzaWduKHsgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gaGFuZGxlQWRkVG9DYXJ0KGl0ZW0pOyB9LCBcImRhdGEtY3lcIjogXCJhZGQtdG8tY2FydC1cIiArIGl0ZW0uaWQgfSwgeyBjaGlsZHJlbjogXCJBZGQgdG8gY2FydFwiIH0pLCB2b2lkIDApXSB9LCB2b2lkIDApKTtcbn07XG5fYSA9IEl0ZW07XG4kUmVmcmVzaFJlZyQoX2EsIFwiSXRlbVwiKTtcbmV4cG9ydCBkZWZhdWx0IEl0ZW07XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2Y2ZiZjlmODg3OWNkYjI2NThlMVwiKSJdLCJzb3VyY2VSb290IjoiIn0=