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
var getRecentLists = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_d) {
    switch (_d.label) {
        case 0: return [4 /*yield*/, fetch("api/recent")];
        case 1: return [4 /*yield*/, (_d.sent()).json()];
        case 2: return [2 /*return*/, _d.sent()];
    }
}); }); };
function SimpleDialog(props) {
    var onClose = props.onClose, open = props.open, itemDescription = props.itemDescription;
    var handleClose = function () {
        onClose();
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5__.default, __assign({ onClose: handleClose, open: open }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__.default, { children: itemDescription }, void 0) }), void 0));
}
_a = SimpleDialog;
__webpack_require__.$Refresh$.register(_a, "SimpleDialog");
// SimpleDialog.DialogType = {
//   onClose: DialogType.onClose,
//   open: DialogType.open,
// };
var App = _c(function () {
    _c();
    var _d = react__WEBPACK_IMPORTED_MODULE_1__.useState(false), open = _d[0], setOpen = _d[1];
    var _e = react__WEBPACK_IMPORTED_MODULE_1__.useState(''), itemDescription = _e[0], setItemDescription = _e[1];
    var _f = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), cartOpen = _f[0], setCartOpen = _f[1];
    var _g = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), cartItems = _g[0], setCartItems = _g[1];
    var _h = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useQuery)('cheeses', getCheeses), data = _h.data, isLoading = _h.isLoading, error = _h.error;
    console.log(data);
    var response = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useQuery)('rencentlist', getRecentLists);
    var recentList = response.data;
    var handleClickOpen = function (itemDescription) {
        setOpen(true);
        setItemDescription(itemDescription);
    };
    var handleClose = function (value) {
        setOpen(false);
    };
    var handleShowRecentDialog = function (items) {
        console.log(items);
    };
    var getTotalItems = function (items) {
        return items.reduce(function (ack, item) { return ack + item.amount; }, 0);
    };
    var handleShowDialog = function (itemDescription) {
        console.log(itemDescription, 111111);
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
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SimpleDialog, { open: open, 
                // type={type}
                itemDescription: itemDescription, onClose: handleClose }, void 0)] }, void 0));
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b9aa94449a0d9b260be8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1zaG9wcGluZy1jYXJ0Ly4vc3JjL2NsaWVudC9BcHAudHN4Iiwid2VicGFjazovL3JlYWN0LXNob3BwaW5nLWNhcnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFJLElBQUksU0FBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFNBQUksSUFBSSxTQUFJO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHVDQUFZO0FBQzhDO0FBQ3ZCO0FBQ0Q7QUFDdkM7QUFDb0M7QUFDTDtBQUNlO0FBQ2dCO0FBQ3BCO0FBQzJCO0FBQ2hCO0FBQ1Q7QUFDRTtBQUNVO0FBQ3hEO0FBQ3FGO0FBQzdCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzREFBSSxDQUFDLDZEQUFNLDZEQUE2RCxzREFBSSxDQUFDLGtFQUFXO0FBQ3BHO0FBQ0E7QUFDQSxzQ0FBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsMkNBQWM7QUFDM0IsYUFBYSwyQ0FBYztBQUMzQixhQUFhLCtDQUFRO0FBQ3JCLGFBQWEsK0NBQVE7QUFDckIsYUFBYSxxREFBUTtBQUNyQjtBQUNBLG1CQUFtQixxREFBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxzREFBSSxDQUFDLHFFQUFjO0FBQ2xDO0FBQ0EsZUFBZSxzREFBSTtBQUNuQixZQUFZLHVEQUFLLENBQUMsZ0RBQU8sZUFBZSxzREFBSSxDQUFDLHFEQUFZLCtDQUErQyxzREFBSSxDQUFDLHNEQUFPLGNBQWMsdURBQUssQ0FBQyw0REFBSSwrR0FBK0csdURBQUssQ0FBQyxxREFBWSxnRkFBZ0Ysc0RBQUksQ0FBQyxnRUFBVztBQUM3VyxvQ0FBb0Msc0RBQUksQ0FBQyx1REFBVTtBQUNuRCw0QkFBNEIsc0RBQUksQ0FBQyx5REFBZ0I7QUFDakQsNEJBQTRCLHVEQUFLLENBQUMscURBQVksZ0ZBQWdGLHNEQUFJLENBQUMsNkRBQUssNkdBQTZHLHNEQUFJLENBQUMsd0VBQW1CO0FBQzdRLG9DQUFvQyxzREFBSSxDQUFDLHVEQUFVO0FBQ25ELFlBQVksc0RBQUksQ0FBQyw4REFBTSxpSEFBaUgsc0RBQUksQ0FBQywrQ0FBSTtBQUNqSixZQUFZLHNEQUFJLENBQUMsNERBQUksdUlBQXVJLHNEQUFJLENBQUMsNERBQUksc0RBQXNELHNEQUFJLENBQUMsb0RBQUk7QUFDcE8sWUFBWSxzREFBSTtBQUNoQjtBQUNBO0FBQ0EsZ0VBQWdFLGlEQUFRLEVBQUUsaURBQVE7QUFDbEY7QUFDQSxzQ0FBWTtBQUNaLGlFQUFlLEdBQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzdLbkIsc0QiLCJmaWxlIjoibWFpbi5lNTc0NzE3ZWUyYjkyZWE3MjBjYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG52YXIgX19zcHJlYWRBcnJheXMgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXlzKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xuICAgIHJldHVybiByO1xufTtcbnZhciBfYSwgX2I7XG52YXIgX2M7XG5fYyA9ICRSZWZyZXNoU2lnJCgpO1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuLy8gQ29tcG9uZW50c1xuaW1wb3J0IEl0ZW0gZnJvbSAnLi9DYXJ0L0l0ZW0vSXRlbSc7XG5pbXBvcnQgQ2FydCBmcm9tICcuL0NhcnQvQ2FydCc7XG5pbXBvcnQgRHJhd2VyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RyYXdlcic7XG5pbXBvcnQgTGluZWFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluZWFyUHJvZ3Jlc3MnO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgQWRkU2hvcHBpbmdDYXJ0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkU2hvcHBpbmdDYXJ0JztcbmltcG9ydCBSZXN0b3JlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUmVzdG9yZSc7XG5pbXBvcnQgQmFkZ2UgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQmFkZ2UnO1xuaW1wb3J0IERpYWxvZyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlJztcbi8vIFN0eWxlc1xuaW1wb3J0IHsgV3JhcHBlciwgU3R5bGVkQnV0dG9uLCBTdHlsZWRBcHBCYXIsIEhlYWRlclR5cG9ncmFwaHkgfSBmcm9tICcuL0FwcC5zdHlsZXMnO1xuaW1wb3J0IHsgVG9vbGJhciwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbnZhciBnZXRDaGVlc2VzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfZCkge1xuICAgIHN3aXRjaCAoX2QubGFiZWwpIHtcbiAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBmZXRjaChcImFwaS9jaGVlc2VzXCIpXTtcbiAgICAgICAgY2FzZSAxOiByZXR1cm4gWzQgLyp5aWVsZCovLCAoX2Quc2VudCgpKS5qc29uKCldO1xuICAgICAgICBjYXNlIDI6IHJldHVybiBbMiAvKnJldHVybiovLCBfZC5zZW50KCldO1xuICAgIH1cbn0pOyB9KTsgfTtcbnZhciBnZXRSZWNlbnRMaXN0cyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2QpIHtcbiAgICBzd2l0Y2ggKF9kLmxhYmVsKSB7XG4gICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgZmV0Y2goXCJhcGkvcmVjZW50XCIpXTtcbiAgICAgICAgY2FzZSAxOiByZXR1cm4gWzQgLyp5aWVsZCovLCAoX2Quc2VudCgpKS5qc29uKCldO1xuICAgICAgICBjYXNlIDI6IHJldHVybiBbMiAvKnJldHVybiovLCBfZC5zZW50KCldO1xuICAgIH1cbn0pOyB9KTsgfTtcbmZ1bmN0aW9uIFNpbXBsZURpYWxvZyhwcm9wcykge1xuICAgIHZhciBvbkNsb3NlID0gcHJvcHMub25DbG9zZSwgb3BlbiA9IHByb3BzLm9wZW4sIGl0ZW1EZXNjcmlwdGlvbiA9IHByb3BzLml0ZW1EZXNjcmlwdGlvbjtcbiAgICB2YXIgaGFuZGxlQ2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG9uQ2xvc2UoKTtcbiAgICB9O1xuICAgIHJldHVybiAoX2pzeChEaWFsb2csIF9fYXNzaWduKHsgb25DbG9zZTogaGFuZGxlQ2xvc2UsIG9wZW46IG9wZW4gfSwgeyBjaGlsZHJlbjogX2pzeChEaWFsb2dUaXRsZSwgeyBjaGlsZHJlbjogaXRlbURlc2NyaXB0aW9uIH0sIHZvaWQgMCkgfSksIHZvaWQgMCkpO1xufVxuX2EgPSBTaW1wbGVEaWFsb2c7XG4kUmVmcmVzaFJlZyQoX2EsIFwiU2ltcGxlRGlhbG9nXCIpO1xuLy8gU2ltcGxlRGlhbG9nLkRpYWxvZ1R5cGUgPSB7XG4vLyAgIG9uQ2xvc2U6IERpYWxvZ1R5cGUub25DbG9zZSxcbi8vICAgb3BlbjogRGlhbG9nVHlwZS5vcGVuLFxuLy8gfTtcbnZhciBBcHAgPSBfYyhmdW5jdGlvbiAoKSB7XG4gICAgX2MoKTtcbiAgICB2YXIgX2QgPSBSZWFjdC51c2VTdGF0ZShmYWxzZSksIG9wZW4gPSBfZFswXSwgc2V0T3BlbiA9IF9kWzFdO1xuICAgIHZhciBfZSA9IFJlYWN0LnVzZVN0YXRlKCcnKSwgaXRlbURlc2NyaXB0aW9uID0gX2VbMF0sIHNldEl0ZW1EZXNjcmlwdGlvbiA9IF9lWzFdO1xuICAgIHZhciBfZiA9IHVzZVN0YXRlKGZhbHNlKSwgY2FydE9wZW4gPSBfZlswXSwgc2V0Q2FydE9wZW4gPSBfZlsxXTtcbiAgICB2YXIgX2cgPSB1c2VTdGF0ZShbXSksIGNhcnRJdGVtcyA9IF9nWzBdLCBzZXRDYXJ0SXRlbXMgPSBfZ1sxXTtcbiAgICB2YXIgX2ggPSB1c2VRdWVyeSgnY2hlZXNlcycsIGdldENoZWVzZXMpLCBkYXRhID0gX2guZGF0YSwgaXNMb2FkaW5nID0gX2guaXNMb2FkaW5nLCBlcnJvciA9IF9oLmVycm9yO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIHZhciByZXNwb25zZSA9IHVzZVF1ZXJ5KCdyZW5jZW50bGlzdCcsIGdldFJlY2VudExpc3RzKTtcbiAgICB2YXIgcmVjZW50TGlzdCA9IHJlc3BvbnNlLmRhdGE7XG4gICAgdmFyIGhhbmRsZUNsaWNrT3BlbiA9IGZ1bmN0aW9uIChpdGVtRGVzY3JpcHRpb24pIHtcbiAgICAgICAgc2V0T3Blbih0cnVlKTtcbiAgICAgICAgc2V0SXRlbURlc2NyaXB0aW9uKGl0ZW1EZXNjcmlwdGlvbik7XG4gICAgfTtcbiAgICB2YXIgaGFuZGxlQ2xvc2UgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgc2V0T3BlbihmYWxzZSk7XG4gICAgfTtcbiAgICB2YXIgaGFuZGxlU2hvd1JlY2VudERpYWxvZyA9IGZ1bmN0aW9uIChpdGVtcykge1xuICAgICAgICBjb25zb2xlLmxvZyhpdGVtcyk7XG4gICAgfTtcbiAgICB2YXIgZ2V0VG90YWxJdGVtcyA9IGZ1bmN0aW9uIChpdGVtcykge1xuICAgICAgICByZXR1cm4gaXRlbXMucmVkdWNlKGZ1bmN0aW9uIChhY2ssIGl0ZW0pIHsgcmV0dXJuIGFjayArIGl0ZW0uYW1vdW50OyB9LCAwKTtcbiAgICB9O1xuICAgIHZhciBoYW5kbGVTaG93RGlhbG9nID0gZnVuY3Rpb24gKGl0ZW1EZXNjcmlwdGlvbikge1xuICAgICAgICBjb25zb2xlLmxvZyhpdGVtRGVzY3JpcHRpb24sIDExMTExMSk7XG4gICAgICAgIGhhbmRsZUNsaWNrT3BlbihpdGVtRGVzY3JpcHRpb24pO1xuICAgIH07XG4gICAgdmFyIGhhbmRsZUFkZFRvQ2FydCA9IGZ1bmN0aW9uIChjbGlja2VkSXRlbSkge1xuICAgICAgICBzZXRDYXJ0SXRlbXMoZnVuY3Rpb24gKHByZXYpIHtcbiAgICAgICAgICAgIC8vIDEuIElzIHRoZSBpdGVtIGFscmVhZHkgYWRkZWQgaW4gdGhlIGNhcnQ/XG4gICAgICAgICAgICB2YXIgaXNJdGVtSW5DYXJ0ID0gcHJldi5maW5kKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtLmlkID09PSBjbGlja2VkSXRlbS5pZDsgfSk7XG4gICAgICAgICAgICBpZiAoaXNJdGVtSW5DYXJ0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXYubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmlkID09PSBjbGlja2VkSXRlbS5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgaXRlbSksIHsgYW1vdW50OiBpdGVtLmFtb3VudCArIDEgfSkgOiBpdGVtO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRmlyc3QgdGltZSB0aGUgaXRlbSBpcyBhZGRlZFxuICAgICAgICAgICAgcmV0dXJuIF9fc3ByZWFkQXJyYXlzKHByZXYsIFtfX2Fzc2lnbihfX2Fzc2lnbih7fSwgY2xpY2tlZEl0ZW0pLCB7IGFtb3VudDogMSB9KV0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHZhciBoYW5kbGVSZW1vdmVGcm9tQ2FydCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBzZXRDYXJ0SXRlbXMoZnVuY3Rpb24gKHByZXYpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmV2LnJlZHVjZShmdW5jdGlvbiAoYWNrLCBpdGVtKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmFtb3VudCA9PT0gMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2s7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfX3NwcmVhZEFycmF5cyhhY2ssIFtfX2Fzc2lnbihfX2Fzc2lnbih7fSwgaXRlbSksIHsgYW1vdW50OiBpdGVtLmFtb3VudCAtIDEgfSldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfX3NwcmVhZEFycmF5cyhhY2ssIFtpdGVtXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgW10pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGlmIChpc0xvYWRpbmcpXG4gICAgICAgIHJldHVybiBfanN4KExpbmVhclByb2dyZXNzLCB7fSwgdm9pZCAwKTtcbiAgICBpZiAoZXJyb3IpXG4gICAgICAgIHJldHVybiBfanN4KFwiZGl2XCIsIHsgY2hpbGRyZW46IFwiU29tZXRoaW5nIHdlbnQgd3JvbmcgLi4uXCIgfSwgdm9pZCAwKTtcbiAgICByZXR1cm4gKF9qc3hzKFdyYXBwZXIsIHsgY2hpbGRyZW46IFtfanN4KFN0eWxlZEFwcEJhciwgX19hc3NpZ24oeyBwb3NpdGlvbjogXCJzdGF0aWNcIiB9LCB7IGNoaWxkcmVuOiBfanN4KFRvb2xiYXIsIHsgY2hpbGRyZW46IF9qc3hzKEdyaWQsIF9fYXNzaWduKHsgY29udGFpbmVyOiB0cnVlLCBkaXJlY3Rpb246IFwicm93XCIsIGp1c3RpZnk6IFwic3BhY2UtYmV0d2VlblwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiIH0sIHsgY2hpbGRyZW46IFtfanN4cyhTdHlsZWRCdXR0b24sIF9fYXNzaWduKHsgb25DbGljazogZnVuY3Rpb24gKCkgeyBoYW5kbGVTaG93UmVjZW50RGlhbG9nKCk7IH0gfSwgeyBjaGlsZHJlbjogW19qc3goUmVzdG9yZUljb24sIHt9LCB2b2lkIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2pzeChUeXBvZ3JhcGh5LCBfX2Fzc2lnbih7IHZhcmlhbnQ6IFwic3VidGl0bGUyXCIgfSwgeyBjaGlsZHJlbjogXCJSZWNlbnQgUHVyY2hhc2VzXCIgfSksIHZvaWQgMCldIH0pLCB2b2lkIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9qc3goSGVhZGVyVHlwb2dyYXBoeSwgX19hc3NpZ24oeyB2YXJpYW50OiBcImgzXCIsIG5vV3JhcDogdHJ1ZSB9LCB7IGNoaWxkcmVuOiBcIldlbGNvbWUgdG8gUGF0aWVudCBaZXJvJ3MgQ2hlZXNlcmlhXCIgfSksIHZvaWQgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2pzeHMoU3R5bGVkQnV0dG9uLCBfX2Fzc2lnbih7IG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldENhcnRPcGVuKHRydWUpOyB9IH0sIHsgY2hpbGRyZW46IFtfanN4KEJhZGdlLCBfX2Fzc2lnbih7IGJhZGdlQ29udGVudDogZ2V0VG90YWxJdGVtcyhjYXJ0SXRlbXMpLCBjb2xvcjogJ2Vycm9yJywgXCJkYXRhLWN5XCI6IFwiYmFkZ2UtY291bnRcIiB9LCB7IGNoaWxkcmVuOiBfanN4KEFkZFNob3BwaW5nQ2FydEljb24sIHt9LCB2b2lkIDApIH0pLCB2b2lkIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2pzeChUeXBvZ3JhcGh5LCBfX2Fzc2lnbih7IHZhcmlhbnQ6IFwic3VidGl0bGUyXCIgfSwgeyBjaGlsZHJlbjogXCJDYXJ0XCIgfSksIHZvaWQgMCldIH0pLCB2b2lkIDApXSB9KSwgdm9pZCAwKSB9LCB2b2lkIDApIH0pLCB2b2lkIDApLFxuICAgICAgICAgICAgX2pzeChEcmF3ZXIsIF9fYXNzaWduKHsgYW5jaG9yOiAncmlnaHQnLCBvcGVuOiBjYXJ0T3Blbiwgb25DbG9zZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0Q2FydE9wZW4oZmFsc2UpOyB9IH0sIHsgY2hpbGRyZW46IF9qc3goQ2FydCwgeyBjYXJ0SXRlbXM6IGNhcnRJdGVtcywgYWRkVG9DYXJ0OiBoYW5kbGVBZGRUb0NhcnQsIHJlbW92ZUZyb21DYXJ0OiBoYW5kbGVSZW1vdmVGcm9tQ2FydCB9LCB2b2lkIDApIH0pLCB2b2lkIDApLFxuICAgICAgICAgICAgX2pzeChHcmlkLCBfX2Fzc2lnbih7IGNvbnRhaW5lcjogdHJ1ZSwgc3BhY2luZzogMyB9LCB7IGNoaWxkcmVuOiBkYXRhID09PSBudWxsIHx8IGRhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRhdGEubWFwKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiAoX2pzeChHcmlkLCBfX2Fzc2lnbih7IGl0ZW06IHRydWUsIHhzOiAxMiwgc206IDQgfSwgeyBjaGlsZHJlbjogX2pzeChJdGVtLCB7IGl0ZW06IGl0ZW0sIGhhbmRsZUFkZFRvQ2FydDogaGFuZGxlQWRkVG9DYXJ0LCBoYW5kbGVTaG93RGlhbG9nOiBoYW5kbGVTaG93RGlhbG9nIH0sIHZvaWQgMCkgfSksIGl0ZW0uaWQpKTsgfSkgfSksIHZvaWQgMCksXG4gICAgICAgICAgICBfanN4KFNpbXBsZURpYWxvZywgeyBvcGVuOiBvcGVuLCBcbiAgICAgICAgICAgICAgICAvLyB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgICAgIGl0ZW1EZXNjcmlwdGlvbjogaXRlbURlc2NyaXB0aW9uLCBvbkNsb3NlOiBoYW5kbGVDbG9zZSB9LCB2b2lkIDApXSB9LCB2b2lkIDApKTtcbn0sIFwiOW1nVlFnVmFPUUpra1c2bXdsdmx5ODNkZnZrPVwiLCBmYWxzZSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gW3VzZVF1ZXJ5LCB1c2VRdWVyeV07IH0pO1xuX2IgPSBBcHA7XG4kUmVmcmVzaFJlZyQoX2IsIFwiQXBwXCIpO1xuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYjlhYTk0NDQ5YTBkOWIyNjBiZThcIikiXSwic291cmNlUm9vdCI6IiJ9