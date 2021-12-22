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
function SimpleDialog(props) {
    var onClose = props.onClose, open = props.open;
    var handleClose = function () {
        onClose();
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5__.default, __assign({ onClose: handleClose, open: open }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__.default, { children: "Set backup account" }, void 0) }), void 0));
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
    var handleClickOpen = function (itemDescription) {
        setOpen(true);
        setItemDescription(itemDescription);
    };
    var handleClose = function (value) {
        setOpen(false);
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
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_App_styles__WEBPACK_IMPORTED_MODULE_4__.Wrapper, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_App_styles__WEBPACK_IMPORTED_MODULE_4__.StyledAppBar, __assign({ position: "static" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.default, __assign({ container: true, direction: "row", justify: "space-between", alignItems: "center" }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_App_styles__WEBPACK_IMPORTED_MODULE_4__.StyledButton, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_icons_Restore__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0),
                                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.default, __assign({ variant: "subtitle2" }, { children: "Recent Purchases" }), void 0)] }, void 0),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_App_styles__WEBPACK_IMPORTED_MODULE_4__.HeaderTypography, __assign({ variant: "h3", noWrap: true }, { children: "Welcome to Patient Zero's Cheeseria" }), void 0),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_App_styles__WEBPACK_IMPORTED_MODULE_4__.StyledButton, __assign({ onClick: function () { return setCartOpen(true); } }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_13__.default, __assign({ badgeContent: getTotalItems(cartItems), color: 'error', "data-cy": "badge-count" }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_icons_AddShoppingCart__WEBPACK_IMPORTED_MODULE_14__.default, {}, void 0) }), void 0),
                                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.default, __assign({ variant: "subtitle2" }, { children: "Cart" }), void 0)] }), void 0)] }), void 0) }, void 0) }), void 0),
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_15__.default, __assign({ anchor: 'right', open: cartOpen, onClose: function () { return setCartOpen(false); } }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Cart_Cart__WEBPACK_IMPORTED_MODULE_3__.default, { cartItems: cartItems, addToCart: handleAddToCart, removeFromCart: handleRemoveFromCart }, void 0) }), void 0),
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.default, __assign({ container: true, spacing: 3 }, { children: data === null || data === void 0 ? void 0 : data.map(function (item) { return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.default, __assign({ item: true, xs: 12, sm: 4 }, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Cart_Item_Item__WEBPACK_IMPORTED_MODULE_2__.default, { item: item, handleAddToCart: handleAddToCart, handleShowDialog: handleShowDialog }, void 0) }), item.id)); }) }), void 0),
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SimpleDialog, { open: open, onClose: handleClose }, void 0)] }, void 0));
}, "tF8glVSeq9m8Po1Nin6w1pYaZpo=", false, function () { return [react_query__WEBPACK_IMPORTED_MODULE_7__.useQuery]; });
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
/******/ 	__webpack_require__.h = () => ("bfd3c35003a1b3f3449d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1zaG9wcGluZy1jYXJ0Ly4vc3JjL2NsaWVudC9BcHAudHN4Iiwid2VicGFjazovL3JlYWN0LXNob3BwaW5nLWNhcnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFJLElBQUksU0FBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFNBQUksSUFBSSxTQUFJO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHVDQUFZO0FBQzhDO0FBQ3ZCO0FBQ0Q7QUFDdkM7QUFDb0M7QUFDTDtBQUNlO0FBQ2dCO0FBQ3BCO0FBQzJCO0FBQ2hCO0FBQ1Q7QUFDRTtBQUNVO0FBQ3hEO0FBQ3FGO0FBQzdCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0RBQUksQ0FBQyw2REFBTSw2REFBNkQsc0RBQUksQ0FBQyxrRUFBVztBQUNwRztBQUNBO0FBQ0Esc0NBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDJDQUFjO0FBQzNCLGFBQWEsMkNBQWM7QUFDM0IsYUFBYSwrQ0FBUTtBQUNyQixhQUFhLCtDQUFRO0FBQ3JCLGFBQWEscURBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsc0RBQUksQ0FBQyxxRUFBYztBQUNsQztBQUNBLGVBQWUsc0RBQUk7QUFDbkIsWUFBWSx1REFBSyxDQUFDLGdEQUFPLGVBQWUsc0RBQUksQ0FBQyxxREFBWSwrQ0FBK0Msc0RBQUksQ0FBQyxzREFBTyxjQUFjLHVEQUFLLENBQUMsNERBQUksK0dBQStHLHVEQUFLLENBQUMscURBQVksZUFBZSxzREFBSSxDQUFDLGdFQUFXO0FBQzVTLG9DQUFvQyxzREFBSSxDQUFDLHVEQUFVO0FBQ25ELDRCQUE0QixzREFBSSxDQUFDLHlEQUFnQjtBQUNqRCw0QkFBNEIsdURBQUssQ0FBQyxxREFBWSxnRkFBZ0Ysc0RBQUksQ0FBQyw2REFBSyw2R0FBNkcsc0RBQUksQ0FBQyx3RUFBbUI7QUFDN1Esb0NBQW9DLHNEQUFJLENBQUMsdURBQVU7QUFDbkQsWUFBWSxzREFBSSxDQUFDLDhEQUFNLGlIQUFpSCxzREFBSSxDQUFDLCtDQUFJO0FBQ2pKLFlBQVksc0RBQUksQ0FBQyw0REFBSSx1SUFBdUksc0RBQUksQ0FBQyw0REFBSSxzREFBc0Qsc0RBQUksQ0FBQyxvREFBSTtBQUNwTyxZQUFZLHNEQUFJO0FBQ2hCLGdFQUFnRSxpREFBUTtBQUN4RTtBQUNBLHNDQUFZO0FBQ1osaUVBQWUsR0FBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0puQixzRCIsImZpbGUiOiJtYWluLjQxNTljMWZlNjQyMWU1YzdiNmRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbnZhciBfX3NwcmVhZEFycmF5cyA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheXMpIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxuICAgICAgICAgICAgcltrXSA9IGFbal07XG4gICAgcmV0dXJuIHI7XG59O1xudmFyIF9hLCBfYjtcbnZhciBfYztcbl9jID0gJFJlZnJlc2hTaWckKCk7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG4vLyBDb21wb25lbnRzXG5pbXBvcnQgSXRlbSBmcm9tICcuL0NhcnQvSXRlbS9JdGVtJztcbmltcG9ydCBDYXJ0IGZyb20gJy4vQ2FydC9DYXJ0JztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyJztcbmltcG9ydCBMaW5lYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5lYXJQcm9ncmVzcyc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBBZGRTaG9wcGluZ0NhcnRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BZGRTaG9wcGluZ0NhcnQnO1xuaW1wb3J0IFJlc3RvcmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9SZXN0b3JlJztcbmltcG9ydCBCYWRnZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CYWRnZSc7XG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xuLy8gU3R5bGVzXG5pbXBvcnQgeyBXcmFwcGVyLCBTdHlsZWRCdXR0b24sIFN0eWxlZEFwcEJhciwgSGVhZGVyVHlwb2dyYXBoeSB9IGZyb20gJy4vQXBwLnN0eWxlcyc7XG5pbXBvcnQgeyBUb29sYmFyLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xudmFyIGdldENoZWVzZXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkgeyByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9kKSB7XG4gICAgc3dpdGNoIChfZC5sYWJlbCkge1xuICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKFwiYXBpL2NoZWVzZXNcIildO1xuICAgICAgICBjYXNlIDE6IHJldHVybiBbNCAvKnlpZWxkKi8sIChfZC5zZW50KCkpLmpzb24oKV07XG4gICAgICAgIGNhc2UgMjogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9kLnNlbnQoKV07XG4gICAgfVxufSk7IH0pOyB9O1xuZnVuY3Rpb24gU2ltcGxlRGlhbG9nKHByb3BzKSB7XG4gICAgdmFyIG9uQ2xvc2UgPSBwcm9wcy5vbkNsb3NlLCBvcGVuID0gcHJvcHMub3BlbjtcbiAgICB2YXIgaGFuZGxlQ2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG9uQ2xvc2UoKTtcbiAgICB9O1xuICAgIHJldHVybiAoX2pzeChEaWFsb2csIF9fYXNzaWduKHsgb25DbG9zZTogaGFuZGxlQ2xvc2UsIG9wZW46IG9wZW4gfSwgeyBjaGlsZHJlbjogX2pzeChEaWFsb2dUaXRsZSwgeyBjaGlsZHJlbjogXCJTZXQgYmFja3VwIGFjY291bnRcIiB9LCB2b2lkIDApIH0pLCB2b2lkIDApKTtcbn1cbl9hID0gU2ltcGxlRGlhbG9nO1xuJFJlZnJlc2hSZWckKF9hLCBcIlNpbXBsZURpYWxvZ1wiKTtcbi8vIFNpbXBsZURpYWxvZy5EaWFsb2dUeXBlID0ge1xuLy8gICBvbkNsb3NlOiBEaWFsb2dUeXBlLm9uQ2xvc2UsXG4vLyAgIG9wZW46IERpYWxvZ1R5cGUub3Blbixcbi8vIH07XG52YXIgQXBwID0gX2MoZnVuY3Rpb24gKCkge1xuICAgIF9jKCk7XG4gICAgdmFyIF9kID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpLCBvcGVuID0gX2RbMF0sIHNldE9wZW4gPSBfZFsxXTtcbiAgICB2YXIgX2UgPSBSZWFjdC51c2VTdGF0ZSgnJyksIGl0ZW1EZXNjcmlwdGlvbiA9IF9lWzBdLCBzZXRJdGVtRGVzY3JpcHRpb24gPSBfZVsxXTtcbiAgICB2YXIgX2YgPSB1c2VTdGF0ZShmYWxzZSksIGNhcnRPcGVuID0gX2ZbMF0sIHNldENhcnRPcGVuID0gX2ZbMV07XG4gICAgdmFyIF9nID0gdXNlU3RhdGUoW10pLCBjYXJ0SXRlbXMgPSBfZ1swXSwgc2V0Q2FydEl0ZW1zID0gX2dbMV07XG4gICAgdmFyIF9oID0gdXNlUXVlcnkoJ2NoZWVzZXMnLCBnZXRDaGVlc2VzKSwgZGF0YSA9IF9oLmRhdGEsIGlzTG9hZGluZyA9IF9oLmlzTG9hZGluZywgZXJyb3IgPSBfaC5lcnJvcjtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB2YXIgaGFuZGxlQ2xpY2tPcGVuID0gZnVuY3Rpb24gKGl0ZW1EZXNjcmlwdGlvbikge1xuICAgICAgICBzZXRPcGVuKHRydWUpO1xuICAgICAgICBzZXRJdGVtRGVzY3JpcHRpb24oaXRlbURlc2NyaXB0aW9uKTtcbiAgICB9O1xuICAgIHZhciBoYW5kbGVDbG9zZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICB9O1xuICAgIHZhciBnZXRUb3RhbEl0ZW1zID0gZnVuY3Rpb24gKGl0ZW1zKSB7XG4gICAgICAgIHJldHVybiBpdGVtcy5yZWR1Y2UoZnVuY3Rpb24gKGFjaywgaXRlbSkgeyByZXR1cm4gYWNrICsgaXRlbS5hbW91bnQ7IH0sIDApO1xuICAgIH07XG4gICAgdmFyIGhhbmRsZVNob3dEaWFsb2cgPSBmdW5jdGlvbiAoaXRlbURlc2NyaXB0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW1EZXNjcmlwdGlvbiwgMTExMTExKTtcbiAgICAgICAgaGFuZGxlQ2xpY2tPcGVuKGl0ZW1EZXNjcmlwdGlvbik7XG4gICAgfTtcbiAgICB2YXIgaGFuZGxlQWRkVG9DYXJ0ID0gZnVuY3Rpb24gKGNsaWNrZWRJdGVtKSB7XG4gICAgICAgIHNldENhcnRJdGVtcyhmdW5jdGlvbiAocHJldikge1xuICAgICAgICAgICAgLy8gMS4gSXMgdGhlIGl0ZW0gYWxyZWFkeSBhZGRlZCBpbiB0aGUgY2FydD9cbiAgICAgICAgICAgIHZhciBpc0l0ZW1JbkNhcnQgPSBwcmV2LmZpbmQoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0uaWQgPT09IGNsaWNrZWRJdGVtLmlkOyB9KTtcbiAgICAgICAgICAgIGlmIChpc0l0ZW1JbkNhcnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldi5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uaWQgPT09IGNsaWNrZWRJdGVtLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9fYXNzaWduKF9fYXNzaWduKHt9LCBpdGVtKSwgeyBhbW91bnQ6IGl0ZW0uYW1vdW50ICsgMSB9KSA6IGl0ZW07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBGaXJzdCB0aW1lIHRoZSBpdGVtIGlzIGFkZGVkXG4gICAgICAgICAgICByZXR1cm4gX19zcHJlYWRBcnJheXMocHJldiwgW19fYXNzaWduKF9fYXNzaWduKHt9LCBjbGlja2VkSXRlbSksIHsgYW1vdW50OiAxIH0pXSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgdmFyIGhhbmRsZVJlbW92ZUZyb21DYXJ0ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHNldENhcnRJdGVtcyhmdW5jdGlvbiAocHJldikge1xuICAgICAgICAgICAgcmV0dXJuIHByZXYucmVkdWNlKGZ1bmN0aW9uIChhY2ssIGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uYW1vdW50ID09PSAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjaztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fc3ByZWFkQXJyYXlzKGFjaywgW19fYXNzaWduKF9fYXNzaWduKHt9LCBpdGVtKSwgeyBhbW91bnQ6IGl0ZW0uYW1vdW50IC0gMSB9KV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fc3ByZWFkQXJyYXlzKGFjaywgW2l0ZW1dKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBbXSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgaWYgKGlzTG9hZGluZylcbiAgICAgICAgcmV0dXJuIF9qc3goTGluZWFyUHJvZ3Jlc3MsIHt9LCB2b2lkIDApO1xuICAgIGlmIChlcnJvcilcbiAgICAgICAgcmV0dXJuIF9qc3goXCJkaXZcIiwgeyBjaGlsZHJlbjogXCJTb21ldGhpbmcgd2VudCB3cm9uZyAuLi5cIiB9LCB2b2lkIDApO1xuICAgIHJldHVybiAoX2pzeHMoV3JhcHBlciwgeyBjaGlsZHJlbjogW19qc3goU3R5bGVkQXBwQmFyLCBfX2Fzc2lnbih7IHBvc2l0aW9uOiBcInN0YXRpY1wiIH0sIHsgY2hpbGRyZW46IF9qc3goVG9vbGJhciwgeyBjaGlsZHJlbjogX2pzeHMoR3JpZCwgX19hc3NpZ24oeyBjb250YWluZXI6IHRydWUsIGRpcmVjdGlvbjogXCJyb3dcIiwganVzdGlmeTogXCJzcGFjZS1iZXR3ZWVuXCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIgfSwgeyBjaGlsZHJlbjogW19qc3hzKFN0eWxlZEJ1dHRvbiwgeyBjaGlsZHJlbjogW19qc3goUmVzdG9yZUljb24sIHt9LCB2b2lkIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2pzeChUeXBvZ3JhcGh5LCBfX2Fzc2lnbih7IHZhcmlhbnQ6IFwic3VidGl0bGUyXCIgfSwgeyBjaGlsZHJlbjogXCJSZWNlbnQgUHVyY2hhc2VzXCIgfSksIHZvaWQgMCldIH0sIHZvaWQgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2pzeChIZWFkZXJUeXBvZ3JhcGh5LCBfX2Fzc2lnbih7IHZhcmlhbnQ6IFwiaDNcIiwgbm9XcmFwOiB0cnVlIH0sIHsgY2hpbGRyZW46IFwiV2VsY29tZSB0byBQYXRpZW50IFplcm8ncyBDaGVlc2VyaWFcIiB9KSwgdm9pZCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfanN4cyhTdHlsZWRCdXR0b24sIF9fYXNzaWduKHsgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0Q2FydE9wZW4odHJ1ZSk7IH0gfSwgeyBjaGlsZHJlbjogW19qc3goQmFkZ2UsIF9fYXNzaWduKHsgYmFkZ2VDb250ZW50OiBnZXRUb3RhbEl0ZW1zKGNhcnRJdGVtcyksIGNvbG9yOiAnZXJyb3InLCBcImRhdGEtY3lcIjogXCJiYWRnZS1jb3VudFwiIH0sIHsgY2hpbGRyZW46IF9qc3goQWRkU2hvcHBpbmdDYXJ0SWNvbiwge30sIHZvaWQgMCkgfSksIHZvaWQgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfanN4KFR5cG9ncmFwaHksIF9fYXNzaWduKHsgdmFyaWFudDogXCJzdWJ0aXRsZTJcIiB9LCB7IGNoaWxkcmVuOiBcIkNhcnRcIiB9KSwgdm9pZCAwKV0gfSksIHZvaWQgMCldIH0pLCB2b2lkIDApIH0sIHZvaWQgMCkgfSksIHZvaWQgMCksXG4gICAgICAgICAgICBfanN4KERyYXdlciwgX19hc3NpZ24oeyBhbmNob3I6ICdyaWdodCcsIG9wZW46IGNhcnRPcGVuLCBvbkNsb3NlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXRDYXJ0T3BlbihmYWxzZSk7IH0gfSwgeyBjaGlsZHJlbjogX2pzeChDYXJ0LCB7IGNhcnRJdGVtczogY2FydEl0ZW1zLCBhZGRUb0NhcnQ6IGhhbmRsZUFkZFRvQ2FydCwgcmVtb3ZlRnJvbUNhcnQ6IGhhbmRsZVJlbW92ZUZyb21DYXJ0IH0sIHZvaWQgMCkgfSksIHZvaWQgMCksXG4gICAgICAgICAgICBfanN4KEdyaWQsIF9fYXNzaWduKHsgY29udGFpbmVyOiB0cnVlLCBzcGFjaW5nOiAzIH0sIHsgY2hpbGRyZW46IGRhdGEgPT09IG51bGwgfHwgZGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGF0YS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIChfanN4KEdyaWQsIF9fYXNzaWduKHsgaXRlbTogdHJ1ZSwgeHM6IDEyLCBzbTogNCB9LCB7IGNoaWxkcmVuOiBfanN4KEl0ZW0sIHsgaXRlbTogaXRlbSwgaGFuZGxlQWRkVG9DYXJ0OiBoYW5kbGVBZGRUb0NhcnQsIGhhbmRsZVNob3dEaWFsb2c6IGhhbmRsZVNob3dEaWFsb2cgfSwgdm9pZCAwKSB9KSwgaXRlbS5pZCkpOyB9KSB9KSwgdm9pZCAwKSxcbiAgICAgICAgICAgIF9qc3goU2ltcGxlRGlhbG9nLCB7IG9wZW46IG9wZW4sIG9uQ2xvc2U6IGhhbmRsZUNsb3NlIH0sIHZvaWQgMCldIH0sIHZvaWQgMCkpO1xufSwgXCJ0RjhnbFZTZXE5bThQbzFOaW42dzFwWWFacG89XCIsIGZhbHNlLCBmdW5jdGlvbiAoKSB7IHJldHVybiBbdXNlUXVlcnldOyB9KTtcbl9iID0gQXBwO1xuJFJlZnJlc2hSZWckKF9iLCBcIkFwcFwiKTtcbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImJmZDNjMzUwMDNhMWIzZjM0NDlkXCIpIl0sInNvdXJjZVJvb3QiOiIifQ==