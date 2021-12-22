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
    var handleClose = function (x) {
        setOpen(false);
    };
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
/******/ 	__webpack_require__.h = () => ("0534b8b1155276f58ed3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1zaG9wcGluZy1jYXJ0Ly4vc3JjL2NsaWVudC9BcHAudHN4Iiwid2VicGFjazovL3JlYWN0LXNob3BwaW5nLWNhcnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFJLElBQUksU0FBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFNBQUksSUFBSSxTQUFJO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHVDQUFZO0FBQzhDO0FBQ3ZCO0FBQ0Q7QUFDdkM7QUFDb0M7QUFDTDtBQUNlO0FBQ2dCO0FBQ3BCO0FBQzJCO0FBQ2hCO0FBQ1Q7QUFDRTtBQUNVO0FBQ3hEO0FBQ3FGO0FBQzdCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzREFBSSxDQUFDLDZEQUFNLDZEQUE2RCxzREFBSSxDQUFDLGtFQUFXO0FBQ3BHO0FBQ0E7QUFDQSxzQ0FBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsMkNBQWM7QUFDM0IsYUFBYSwyQ0FBYztBQUMzQixhQUFhLCtDQUFRO0FBQ3JCLGFBQWEsK0NBQVE7QUFDckIsYUFBYSxxREFBUTtBQUNyQjtBQUNBLG1CQUFtQixxREFBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsc0RBQUksQ0FBQyxxRUFBYztBQUNsQztBQUNBLGVBQWUsc0RBQUk7QUFDbkIsWUFBWSx1REFBSyxDQUFDLGdEQUFPLGVBQWUsc0RBQUksQ0FBQyxxREFBWSwrQ0FBK0Msc0RBQUksQ0FBQyxzREFBTyxjQUFjLHVEQUFLLENBQUMsNERBQUksK0dBQStHLHVEQUFLLENBQUMscURBQVksZ0ZBQWdGLHNEQUFJLENBQUMsZ0VBQVc7QUFDN1csb0NBQW9DLHNEQUFJLENBQUMsdURBQVU7QUFDbkQsNEJBQTRCLHNEQUFJLENBQUMseURBQWdCO0FBQ2pELDRCQUE0Qix1REFBSyxDQUFDLHFEQUFZLGdGQUFnRixzREFBSSxDQUFDLDZEQUFLLDZHQUE2RyxzREFBSSxDQUFDLHdFQUFtQjtBQUM3USxvQ0FBb0Msc0RBQUksQ0FBQyx1REFBVTtBQUNuRCxZQUFZLHNEQUFJLENBQUMsOERBQU0saUhBQWlILHNEQUFJLENBQUMsK0NBQUk7QUFDakosWUFBWSxzREFBSSxDQUFDLDREQUFJLHVJQUF1SSxzREFBSSxDQUFDLDREQUFJLHNEQUFzRCxzREFBSSxDQUFDLG9EQUFJO0FBQ3BPLFlBQVksc0RBQUk7QUFDaEI7QUFDQTtBQUNBLGdFQUFnRSxpREFBUSxFQUFFLGlEQUFRO0FBQ2xGO0FBQ0Esc0NBQVk7QUFDWixpRUFBZSxHQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsTG5CLHNEIiwiZmlsZSI6Im1haW4uMTEyYzYzMDIyNjFjOWFlNGNmYzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xudmFyIF9fc3ByZWFkQXJyYXlzID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5cykgfHwgZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcbiAgICByZXR1cm4gcjtcbn07XG52YXIgX2EsIF9iO1xudmFyIF9jO1xuX2MgPSAkUmVmcmVzaFNpZyQoKTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LXF1ZXJ5Jztcbi8vIENvbXBvbmVudHNcbmltcG9ydCBJdGVtIGZyb20gJy4vQ2FydC9JdGVtL0l0ZW0nO1xuaW1wb3J0IENhcnQgZnJvbSAnLi9DYXJ0L0NhcnQnO1xuaW1wb3J0IERyYXdlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXInO1xuaW1wb3J0IExpbmVhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzJztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IEFkZFNob3BwaW5nQ2FydEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FkZFNob3BwaW5nQ2FydCc7XG5pbXBvcnQgUmVzdG9yZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1Jlc3RvcmUnO1xuaW1wb3J0IEJhZGdlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JhZGdlJztcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZSc7XG4vLyBTdHlsZXNcbmltcG9ydCB7IFdyYXBwZXIsIFN0eWxlZEJ1dHRvbiwgU3R5bGVkQXBwQmFyLCBIZWFkZXJUeXBvZ3JhcGh5IH0gZnJvbSAnLi9BcHAuc3R5bGVzJztcbmltcG9ydCB7IFRvb2xiYXIsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG52YXIgZ2V0Q2hlZXNlcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2QpIHtcbiAgICBzd2l0Y2ggKF9kLmxhYmVsKSB7XG4gICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgZmV0Y2goXCJhcGkvY2hlZXNlc1wiKV07XG4gICAgICAgIGNhc2UgMTogcmV0dXJuIFs0IC8qeWllbGQqLywgKF9kLnNlbnQoKSkuanNvbigpXTtcbiAgICAgICAgY2FzZSAyOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Quc2VudCgpXTtcbiAgICB9XG59KTsgfSk7IH07XG52YXIgZ2V0UmVjZW50TGlzdHMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkgeyByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9kKSB7XG4gICAgc3dpdGNoIChfZC5sYWJlbCkge1xuICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKFwiYXBpL3JlY2VudFwiKV07XG4gICAgICAgIGNhc2UgMTogcmV0dXJuIFs0IC8qeWllbGQqLywgKF9kLnNlbnQoKSkuanNvbigpXTtcbiAgICAgICAgY2FzZSAyOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Quc2VudCgpXTtcbiAgICB9XG59KTsgfSk7IH07XG5mdW5jdGlvbiBTaW1wbGVEaWFsb2cocHJvcHMpIHtcbiAgICB2YXIgb25DbG9zZSA9IHByb3BzLm9uQ2xvc2UsIG9wZW4gPSBwcm9wcy5vcGVuLCBpdGVtRGVzY3JpcHRpb24gPSBwcm9wcy5pdGVtRGVzY3JpcHRpb247XG4gICAgdmFyIGhhbmRsZUNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBvbkNsb3NlKCk7XG4gICAgfTtcbiAgICByZXR1cm4gKF9qc3goRGlhbG9nLCBfX2Fzc2lnbih7IG9uQ2xvc2U6IGhhbmRsZUNsb3NlLCBvcGVuOiBvcGVuIH0sIHsgY2hpbGRyZW46IF9qc3goRGlhbG9nVGl0bGUsIHsgY2hpbGRyZW46IGl0ZW1EZXNjcmlwdGlvbiB9LCB2b2lkIDApIH0pLCB2b2lkIDApKTtcbn1cbl9hID0gU2ltcGxlRGlhbG9nO1xuJFJlZnJlc2hSZWckKF9hLCBcIlNpbXBsZURpYWxvZ1wiKTtcbi8vIFNpbXBsZURpYWxvZy5EaWFsb2dUeXBlID0ge1xuLy8gICBvbkNsb3NlOiBEaWFsb2dUeXBlLm9uQ2xvc2UsXG4vLyAgIG9wZW46IERpYWxvZ1R5cGUub3Blbixcbi8vIH07XG52YXIgQXBwID0gX2MoZnVuY3Rpb24gKCkge1xuICAgIF9jKCk7XG4gICAgdmFyIF9kID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpLCBvcGVuID0gX2RbMF0sIHNldE9wZW4gPSBfZFsxXTtcbiAgICB2YXIgX2UgPSBSZWFjdC51c2VTdGF0ZSgnJyksIGl0ZW1EZXNjcmlwdGlvbiA9IF9lWzBdLCBzZXRJdGVtRGVzY3JpcHRpb24gPSBfZVsxXTtcbiAgICB2YXIgX2YgPSB1c2VTdGF0ZShmYWxzZSksIGNhcnRPcGVuID0gX2ZbMF0sIHNldENhcnRPcGVuID0gX2ZbMV07XG4gICAgdmFyIF9nID0gdXNlU3RhdGUoW10pLCBjYXJ0SXRlbXMgPSBfZ1swXSwgc2V0Q2FydEl0ZW1zID0gX2dbMV07XG4gICAgdmFyIF9oID0gdXNlUXVlcnkoJ2NoZWVzZXMnLCBnZXRDaGVlc2VzKSwgZGF0YSA9IF9oLmRhdGEsIGlzTG9hZGluZyA9IF9oLmlzTG9hZGluZywgZXJyb3IgPSBfaC5lcnJvcjtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB2YXIgcmVzcG9uc2UgPSB1c2VRdWVyeSgncmVuY2VudGxpc3QnLCBnZXRSZWNlbnRMaXN0cyk7XG4gICAgdmFyIHJlY2VudExpc3QgPSByZXNwb25zZS5kYXRhO1xuICAgIHZhciBoYW5kbGVDbGlja09wZW4gPSBmdW5jdGlvbiAoaXRlbURlc2NyaXB0aW9uKSB7XG4gICAgICAgIHNldE9wZW4odHJ1ZSk7XG4gICAgICAgIHNldEl0ZW1EZXNjcmlwdGlvbihpdGVtRGVzY3JpcHRpb24pO1xuICAgIH07XG4gICAgdmFyIGhhbmRsZUNsb3NlID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgc2V0T3BlbihmYWxzZSk7XG4gICAgfTtcbiAgICB2YXIgaGFuZGxlU2hvd1JlY2VudERpYWxvZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVjZW50TGlzdCk7XG4gICAgICAgIHZhciBpdGVtRGVzY3JpcHRpb24gPSByZWNlbnRMaXN0Lm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgdmFyIGlkID0gaXRlbS5pZCwgdGl0bGUgPSBpdGVtLnRpdGxlLCBhbW91bnQgPSBpdGVtLmFtb3VudCwgcHJpY2UgPSBpdGVtLnByaWNlO1xuICAgICAgICAgICAgcmV0dXJuIFwiaWQ6XCIgKyBpZCArIFwiIHRpdGxlOlwiICsgdGl0bGUgKyBcIiBhbW91bnRcIiArIGFtb3VudCArIFwiIHByaWNlXCIgKyBwcmljZTtcbiAgICAgICAgfSkuam9pbignLFxcbicpO1xuICAgICAgICBoYW5kbGVDbGlja09wZW4oaXRlbURlc2NyaXB0aW9uKTtcbiAgICB9O1xuICAgIHZhciBnZXRUb3RhbEl0ZW1zID0gZnVuY3Rpb24gKGl0ZW1zKSB7XG4gICAgICAgIHJldHVybiBpdGVtcy5yZWR1Y2UoZnVuY3Rpb24gKGFjaywgaXRlbSkgeyByZXR1cm4gYWNrICsgaXRlbS5hbW91bnQ7IH0sIDApO1xuICAgIH07XG4gICAgdmFyIGhhbmRsZVNob3dEaWFsb2cgPSBmdW5jdGlvbiAoaXRlbURlc2NyaXB0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW1EZXNjcmlwdGlvbiwgMTExMTExKTtcbiAgICAgICAgaGFuZGxlQ2xpY2tPcGVuKGl0ZW1EZXNjcmlwdGlvbik7XG4gICAgfTtcbiAgICB2YXIgaGFuZGxlQWRkVG9DYXJ0ID0gZnVuY3Rpb24gKGNsaWNrZWRJdGVtKSB7XG4gICAgICAgIHNldENhcnRJdGVtcyhmdW5jdGlvbiAocHJldikge1xuICAgICAgICAgICAgLy8gMS4gSXMgdGhlIGl0ZW0gYWxyZWFkeSBhZGRlZCBpbiB0aGUgY2FydD9cbiAgICAgICAgICAgIHZhciBpc0l0ZW1JbkNhcnQgPSBwcmV2LmZpbmQoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0uaWQgPT09IGNsaWNrZWRJdGVtLmlkOyB9KTtcbiAgICAgICAgICAgIGlmIChpc0l0ZW1JbkNhcnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldi5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uaWQgPT09IGNsaWNrZWRJdGVtLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9fYXNzaWduKF9fYXNzaWduKHt9LCBpdGVtKSwgeyBhbW91bnQ6IGl0ZW0uYW1vdW50ICsgMSB9KSA6IGl0ZW07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBGaXJzdCB0aW1lIHRoZSBpdGVtIGlzIGFkZGVkXG4gICAgICAgICAgICByZXR1cm4gX19zcHJlYWRBcnJheXMocHJldiwgW19fYXNzaWduKF9fYXNzaWduKHt9LCBjbGlja2VkSXRlbSksIHsgYW1vdW50OiAxIH0pXSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgdmFyIGhhbmRsZVJlbW92ZUZyb21DYXJ0ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHNldENhcnRJdGVtcyhmdW5jdGlvbiAocHJldikge1xuICAgICAgICAgICAgcmV0dXJuIHByZXYucmVkdWNlKGZ1bmN0aW9uIChhY2ssIGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uYW1vdW50ID09PSAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjaztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fc3ByZWFkQXJyYXlzKGFjaywgW19fYXNzaWduKF9fYXNzaWduKHt9LCBpdGVtKSwgeyBhbW91bnQ6IGl0ZW0uYW1vdW50IC0gMSB9KV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fc3ByZWFkQXJyYXlzKGFjaywgW2l0ZW1dKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBbXSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgaWYgKGlzTG9hZGluZylcbiAgICAgICAgcmV0dXJuIF9qc3goTGluZWFyUHJvZ3Jlc3MsIHt9LCB2b2lkIDApO1xuICAgIGlmIChlcnJvcilcbiAgICAgICAgcmV0dXJuIF9qc3goXCJkaXZcIiwgeyBjaGlsZHJlbjogXCJTb21ldGhpbmcgd2VudCB3cm9uZyAuLi5cIiB9LCB2b2lkIDApO1xuICAgIHJldHVybiAoX2pzeHMoV3JhcHBlciwgeyBjaGlsZHJlbjogW19qc3goU3R5bGVkQXBwQmFyLCBfX2Fzc2lnbih7IHBvc2l0aW9uOiBcInN0YXRpY1wiIH0sIHsgY2hpbGRyZW46IF9qc3goVG9vbGJhciwgeyBjaGlsZHJlbjogX2pzeHMoR3JpZCwgX19hc3NpZ24oeyBjb250YWluZXI6IHRydWUsIGRpcmVjdGlvbjogXCJyb3dcIiwganVzdGlmeTogXCJzcGFjZS1iZXR3ZWVuXCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIgfSwgeyBjaGlsZHJlbjogW19qc3hzKFN0eWxlZEJ1dHRvbiwgX19hc3NpZ24oeyBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IGhhbmRsZVNob3dSZWNlbnREaWFsb2coKTsgfSB9LCB7IGNoaWxkcmVuOiBbX2pzeChSZXN0b3JlSWNvbiwge30sIHZvaWQgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfanN4KFR5cG9ncmFwaHksIF9fYXNzaWduKHsgdmFyaWFudDogXCJzdWJ0aXRsZTJcIiB9LCB7IGNoaWxkcmVuOiBcIlJlY2VudCBQdXJjaGFzZXNcIiB9KSwgdm9pZCAwKV0gfSksIHZvaWQgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2pzeChIZWFkZXJUeXBvZ3JhcGh5LCBfX2Fzc2lnbih7IHZhcmlhbnQ6IFwiaDNcIiwgbm9XcmFwOiB0cnVlIH0sIHsgY2hpbGRyZW46IFwiV2VsY29tZSB0byBQYXRpZW50IFplcm8ncyBDaGVlc2VyaWFcIiB9KSwgdm9pZCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfanN4cyhTdHlsZWRCdXR0b24sIF9fYXNzaWduKHsgb25DbGljazogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0Q2FydE9wZW4odHJ1ZSk7IH0gfSwgeyBjaGlsZHJlbjogW19qc3goQmFkZ2UsIF9fYXNzaWduKHsgYmFkZ2VDb250ZW50OiBnZXRUb3RhbEl0ZW1zKGNhcnRJdGVtcyksIGNvbG9yOiAnZXJyb3InLCBcImRhdGEtY3lcIjogXCJiYWRnZS1jb3VudFwiIH0sIHsgY2hpbGRyZW46IF9qc3goQWRkU2hvcHBpbmdDYXJ0SWNvbiwge30sIHZvaWQgMCkgfSksIHZvaWQgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfanN4KFR5cG9ncmFwaHksIF9fYXNzaWduKHsgdmFyaWFudDogXCJzdWJ0aXRsZTJcIiB9LCB7IGNoaWxkcmVuOiBcIkNhcnRcIiB9KSwgdm9pZCAwKV0gfSksIHZvaWQgMCldIH0pLCB2b2lkIDApIH0sIHZvaWQgMCkgfSksIHZvaWQgMCksXG4gICAgICAgICAgICBfanN4KERyYXdlciwgX19hc3NpZ24oeyBhbmNob3I6ICdyaWdodCcsIG9wZW46IGNhcnRPcGVuLCBvbkNsb3NlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXRDYXJ0T3BlbihmYWxzZSk7IH0gfSwgeyBjaGlsZHJlbjogX2pzeChDYXJ0LCB7IGNhcnRJdGVtczogY2FydEl0ZW1zLCBhZGRUb0NhcnQ6IGhhbmRsZUFkZFRvQ2FydCwgcmVtb3ZlRnJvbUNhcnQ6IGhhbmRsZVJlbW92ZUZyb21DYXJ0IH0sIHZvaWQgMCkgfSksIHZvaWQgMCksXG4gICAgICAgICAgICBfanN4KEdyaWQsIF9fYXNzaWduKHsgY29udGFpbmVyOiB0cnVlLCBzcGFjaW5nOiAzIH0sIHsgY2hpbGRyZW46IGRhdGEgPT09IG51bGwgfHwgZGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGF0YS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIChfanN4KEdyaWQsIF9fYXNzaWduKHsgaXRlbTogdHJ1ZSwgeHM6IDEyLCBzbTogNCB9LCB7IGNoaWxkcmVuOiBfanN4KEl0ZW0sIHsgaXRlbTogaXRlbSwgaGFuZGxlQWRkVG9DYXJ0OiBoYW5kbGVBZGRUb0NhcnQsIGhhbmRsZVNob3dEaWFsb2c6IGhhbmRsZVNob3dEaWFsb2cgfSwgdm9pZCAwKSB9KSwgaXRlbS5pZCkpOyB9KSB9KSwgdm9pZCAwKSxcbiAgICAgICAgICAgIF9qc3goU2ltcGxlRGlhbG9nLCB7IG9wZW46IG9wZW4sIFxuICAgICAgICAgICAgICAgIC8vIHR5cGU9e3R5cGV9XG4gICAgICAgICAgICAgICAgaXRlbURlc2NyaXB0aW9uOiBpdGVtRGVzY3JpcHRpb24sIG9uQ2xvc2U6IGhhbmRsZUNsb3NlIH0sIHZvaWQgMCldIH0sIHZvaWQgMCkpO1xufSwgXCI5bWdWUWdWYU9RSmtrVzZtd2x2bHk4M2Rmdms9XCIsIGZhbHNlLCBmdW5jdGlvbiAoKSB7IHJldHVybiBbdXNlUXVlcnksIHVzZVF1ZXJ5XTsgfSk7XG5fYiA9IEFwcDtcbiRSZWZyZXNoUmVnJChfYiwgXCJBcHBcIik7XG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwNTM0YjhiMTE1NTI3NmY1OGVkM1wiKSJdLCJzb3VyY2VSb290IjoiIn0=