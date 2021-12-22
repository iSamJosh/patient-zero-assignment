self["webpackHotUpdatereact_shopping_cart"]("main",{

/***/ "./node_modules/@material-ui/core/esm/Dialog/Dialog.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Dialog/Dialog.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Modal */ "./node_modules/@material-ui/core/esm/Modal/Modal.js");
/* harmony import */ var _Backdrop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Backdrop */ "./node_modules/@material-ui/core/esm/Backdrop/Backdrop.js");
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Fade */ "./node_modules/@material-ui/core/esm/Fade/Fade.js");
/* harmony import */ var _styles_transitions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/transitions */ "./node_modules/@material-ui/core/esm/styles/transitions.js");
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Paper */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");













var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      '@media print': {
        // Use !important to override the Modal inline-style.
        position: 'absolute !important'
      }
    },

    /* Styles applied to the container element if `scroll="paper"`. */
    scrollPaper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },

    /* Styles applied to the container element if `scroll="body"`. */
    scrollBody: {
      overflowY: 'auto',
      overflowX: 'hidden',
      textAlign: 'center',
      '&:after': {
        content: '""',
        display: 'inline-block',
        verticalAlign: 'middle',
        height: '100%',
        width: '0'
      }
    },

    /* Styles applied to the container element. */
    container: {
      height: '100%',
      '@media print': {
        height: 'auto'
      },
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 0
    },

    /* Styles applied to the `Paper` component. */
    paper: {
      margin: 32,
      position: 'relative',
      overflowY: 'auto',
      // Fix IE 11 issue, to remove at some point.
      '@media print': {
        overflowY: 'visible',
        boxShadow: 'none'
      }
    },

    /* Styles applied to the `Paper` component if `scroll="paper"`. */
    paperScrollPaper: {
      display: 'flex',
      flexDirection: 'column',
      maxHeight: 'calc(100% - 64px)'
    },

    /* Styles applied to the `Paper` component if `scroll="body"`. */
    paperScrollBody: {
      display: 'inline-block',
      verticalAlign: 'middle',
      textAlign: 'left' // 'initial' doesn't work on IE 11

    },

    /* Styles applied to the `Paper` component if `maxWidth=false`. */
    paperWidthFalse: {
      maxWidth: 'calc(100% - 64px)'
    },

    /* Styles applied to the `Paper` component if `maxWidth="xs"`. */
    paperWidthXs: {
      maxWidth: Math.max(theme.breakpoints.values.xs, 444),
      '&$paperScrollBody': (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)({}, theme.breakpoints.down(Math.max(theme.breakpoints.values.xs, 444) + 32 * 2), {
        maxWidth: 'calc(100% - 64px)'
      })
    },

    /* Styles applied to the `Paper` component if `maxWidth="sm"`. */
    paperWidthSm: {
      maxWidth: theme.breakpoints.values.sm,
      '&$paperScrollBody': (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)({}, theme.breakpoints.down(theme.breakpoints.values.sm + 32 * 2), {
        maxWidth: 'calc(100% - 64px)'
      })
    },

    /* Styles applied to the `Paper` component if `maxWidth="md"`. */
    paperWidthMd: {
      maxWidth: theme.breakpoints.values.md,
      '&$paperScrollBody': (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)({}, theme.breakpoints.down(theme.breakpoints.values.md + 32 * 2), {
        maxWidth: 'calc(100% - 64px)'
      })
    },

    /* Styles applied to the `Paper` component if `maxWidth="lg"`. */
    paperWidthLg: {
      maxWidth: theme.breakpoints.values.lg,
      '&$paperScrollBody': (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)({}, theme.breakpoints.down(theme.breakpoints.values.lg + 32 * 2), {
        maxWidth: 'calc(100% - 64px)'
      })
    },

    /* Styles applied to the `Paper` component if `maxWidth="xl"`. */
    paperWidthXl: {
      maxWidth: theme.breakpoints.values.xl,
      '&$paperScrollBody': (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)({}, theme.breakpoints.down(theme.breakpoints.values.xl + 32 * 2), {
        maxWidth: 'calc(100% - 64px)'
      })
    },

    /* Styles applied to the `Paper` component if `fullWidth={true}`. */
    paperFullWidth: {
      width: 'calc(100% - 64px)'
    },

    /* Styles applied to the `Paper` component if `fullScreen={true}`. */
    paperFullScreen: {
      margin: 0,
      width: '100%',
      maxWidth: '100%',
      height: '100%',
      maxHeight: 'none',
      borderRadius: 0,
      '&$paperScrollBody': {
        margin: 0,
        maxWidth: '100%'
      }
    }
  };
};
var defaultTransitionDuration = {
  enter: _styles_transitions__WEBPACK_IMPORTED_MODULE_6__.duration.enteringScreen,
  exit: _styles_transitions__WEBPACK_IMPORTED_MODULE_6__.duration.leavingScreen
};
/**
 * Dialogs are overlaid modal paper based components with a backdrop.
 */

var Dialog = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function Dialog(props, ref) {
  var BackdropProps = props.BackdropProps,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$disableBackdro = props.disableBackdropClick,
      disableBackdropClick = _props$disableBackdro === void 0 ? false : _props$disableBackdro,
      _props$disableEscapeK = props.disableEscapeKeyDown,
      disableEscapeKeyDown = _props$disableEscapeK === void 0 ? false : _props$disableEscapeK,
      _props$fullScreen = props.fullScreen,
      fullScreen = _props$fullScreen === void 0 ? false : _props$fullScreen,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$maxWidth = props.maxWidth,
      maxWidth = _props$maxWidth === void 0 ? 'sm' : _props$maxWidth,
      onBackdropClick = props.onBackdropClick,
      onClose = props.onClose,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onEscapeKeyDown = props.onEscapeKeyDown,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      open = props.open,
      _props$PaperComponent = props.PaperComponent,
      PaperComponent = _props$PaperComponent === void 0 ? _Paper__WEBPACK_IMPORTED_MODULE_7__.default : _props$PaperComponent,
      _props$PaperProps = props.PaperProps,
      PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
      _props$scroll = props.scroll,
      scroll = _props$scroll === void 0 ? 'paper' : _props$scroll,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? _Fade__WEBPACK_IMPORTED_MODULE_8__.default : _props$TransitionComp,
      _props$transitionDura = props.transitionDuration,
      transitionDuration = _props$transitionDura === void 0 ? defaultTransitionDuration : _props$transitionDura,
      TransitionProps = props.TransitionProps,
      ariaDescribedby = props['aria-describedby'],
      ariaLabelledby = props['aria-labelledby'],
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["BackdropProps", "children", "classes", "className", "disableBackdropClick", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "onEnter", "onEntered", "onEntering", "onEscapeKeyDown", "onExit", "onExited", "onExiting", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps", "aria-describedby", "aria-labelledby"]);

  var mouseDownTarget = react__WEBPACK_IMPORTED_MODULE_3__.useRef();

  var handleMouseDown = function handleMouseDown(event) {
    mouseDownTarget.current = event.target;
  };

  var handleBackdropClick = function handleBackdropClick(event) {
    // Ignore the events not coming from the "backdrop"
    // We don't want to close the dialog when clicking the dialog content.
    if (event.target !== event.currentTarget) {
      return;
    } // Make sure the event starts and ends on the same DOM element.


    if (event.target !== mouseDownTarget.current) {
      return;
    }

    mouseDownTarget.current = null;

    if (onBackdropClick) {
      onBackdropClick(event);
    }

    if (!disableBackdropClick && onClose) {
      onClose(event, 'backdropClick');
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Modal__WEBPACK_IMPORTED_MODULE_9__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__.default)(classes.root, className),
    BackdropComponent: _Backdrop__WEBPACK_IMPORTED_MODULE_10__.default,
    BackdropProps: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      transitionDuration: transitionDuration
    }, BackdropProps),
    closeAfterTransition: true,
    disableBackdropClick: disableBackdropClick,
    disableEscapeKeyDown: disableEscapeKeyDown,
    onEscapeKeyDown: onEscapeKeyDown,
    onClose: onClose,
    open: open,
    ref: ref
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(TransitionComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    appear: true,
    in: open,
    timeout: transitionDuration,
    onEnter: onEnter,
    onEntering: onEntering,
    onEntered: onEntered,
    onExit: onExit,
    onExiting: onExiting,
    onExited: onExited,
    role: "none presentation"
  }, TransitionProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__.default)(classes.container, classes["scroll".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_11__.default)(scroll))]),
    onMouseUp: handleBackdropClick,
    onMouseDown: handleMouseDown
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(PaperComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    elevation: 24,
    role: "dialog",
    "aria-describedby": ariaDescribedby,
    "aria-labelledby": ariaLabelledby
  }, PaperProps, {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__.default)(classes.paper, classes["paperScroll".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_11__.default)(scroll))], classes["paperWidth".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_11__.default)(String(maxWidth)))], PaperProps.className, fullScreen && classes.paperFullScreen, fullWidth && classes.paperFullWidth)
  }), children))));
});
 true ? Dialog.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The id(s) of the element(s) that describe the dialog.
   */
  'aria-describedby': (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

  /**
   * The id(s) of the element(s) that label the dialog.
   */
  'aria-labelledby': (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

  /**
   * @ignore
   */
  BackdropProps: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * Dialog children, usually the included sub-components.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

  /**
   * If `true`, clicking the backdrop will not fire the `onClose` callback.
   */
  disableBackdropClick: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   */
  disableEscapeKeyDown: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * If `true`, the dialog will be full-screen
   */
  fullScreen: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   */
  fullWidth: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   */
  maxWidth: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(['lg', 'md', 'sm', 'xl', 'xs', false]),

  /**
   * Callback fired when the backdrop is clicked.
   */
  onBackdropClick: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired before the dialog enters.
   */
  onEnter: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired when the dialog has entered.
   */
  onEntered: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired when the dialog is entering.
   */
  onEntering: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired when the escape key is pressed,
   * `disableKeyboard` is false and the modal is in focus.
   */
  onEscapeKeyDown: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired before the dialog exits.
   */
  onExit: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired when the dialog has exited.
   */
  onExited: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired when the dialog is exiting.
   */
  onExiting: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * If `true`, the Dialog is open.
   */
  open: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool.isRequired),

  /**
   * The component used to render the body of the dialog.
   */
  PaperComponent: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().elementType),

  /**
   * Props applied to the [`Paper`](/api/paper/) element.
   */
  PaperProps: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * Determine the container for scrolling the dialog.
   */
  scroll: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(['body', 'paper']),

  /**
   * The component used for the transition.
   * [Follow this guide](/components/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   */
  TransitionComponent: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().elementType),

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().number), prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
    appear: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
    enter: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
    exit: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number)
  })]),

  /**
   * Props applied to the [`Transition`](http://reactcommunity.org/react-transition-group/transition#Transition-props) element.
   */
  TransitionProps: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_12__.default)(styles, {
  name: 'MuiDialog'
})(Dialog));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");







var styles = {
  /* Styles applied to the root element. */
  root: {
    margin: 0,
    padding: '16px 24px',
    flex: '0 0 auto'
  }
};
var DialogTitle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function DialogTitle(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$disableTypogra = props.disableTypography,
      disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["children", "classes", "className", "disableTypography"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className),
    ref: ref
  }, other), disableTypography ? children : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_5__.default, {
    component: "h2",
    variant: "h6"
  }, children));
});
 true ? DialogTitle.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * If `true`, the children won't be wrapped by a typography component.
   * For instance, this can be useful to render an h4 instead of the default h2.
   */
  disableTypography: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__.default)(styles, {
  name: 'MuiDialogTitle'
})(DialogTitle));

/***/ }),

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
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), cartOpen = _d[0], setCartOpen = _d[1];
    var _e = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), cartItems = _e[0], setCartItems = _e[1];
    var _f = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useQuery)('cheeses', getCheeses), data = _f.data, isLoading = _f.isLoading, error = _f.error;
    console.log(data);
    var getTotalItems = function (items) {
        return items.reduce(function (ack, item) { return ack + item.amount; }, 0);
    };
    var handleShowDialog = function (itemDescription) {
        console.log(itemDescription, 111111);
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
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SimpleDialog, { open: open }, void 0)] }, void 0));
}, "sNjVdc7sEflwnqV2PP/uW1253TQ=", false, function () { return [react_query__WEBPACK_IMPORTED_MODULE_7__.useQuery]; });
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
/******/ 	__webpack_require__.h = () => ("9e25fca0cd03707b867a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1zaG9wcGluZy1jYXJ0Ly4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9EaWFsb2cvRGlhbG9nLmpzIiwid2VicGFjazovL3JlYWN0LXNob3BwaW5nLWNhcnQvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0RpYWxvZ1RpdGxlL0RpYWxvZ1RpdGxlLmpzIiwid2VicGFjazovL3JlYWN0LXNob3BwaW5nLWNhcnQvLi9zcmMvY2xpZW50L0FwcC50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtc2hvcHBpbmctY2FydC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwRDtBQUNnQztBQUNsQjtBQUN6QztBQUNJO0FBQ1g7QUFDc0I7QUFDRDtBQUNoQjtBQUNNO0FBQ1I7QUFDc0I7QUFDcEI7QUFDdEI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsa0ZBQWUsR0FBRztBQUM3QztBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNySm5CLHNEIiwiZmlsZSI6Im1haW4uY2EzZWYxMDRiZTQ0MmFkZjA0NWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgY2FwaXRhbGl6ZSBmcm9tICcuLi91dGlscy9jYXBpdGFsaXplJztcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9Nb2RhbCc7XG5pbXBvcnQgQmFja2Ryb3AgZnJvbSAnLi4vQmFja2Ryb3AnO1xuaW1wb3J0IEZhZGUgZnJvbSAnLi4vRmFkZSc7XG5pbXBvcnQgeyBkdXJhdGlvbiB9IGZyb20gJy4uL3N0eWxlcy90cmFuc2l0aW9ucyc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnLi4vUGFwZXInO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IHtcbiAgICAgICdAbWVkaWEgcHJpbnQnOiB7XG4gICAgICAgIC8vIFVzZSAhaW1wb3J0YW50IHRvIG92ZXJyaWRlIHRoZSBNb2RhbCBpbmxpbmUtc3R5bGUuXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUgIWltcG9ydGFudCdcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbnRhaW5lciBlbGVtZW50IGlmIGBzY3JvbGw9XCJwYXBlclwiYC4gKi9cbiAgICBzY3JvbGxQYXBlcjoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbnRhaW5lciBlbGVtZW50IGlmIGBzY3JvbGw9XCJib2R5XCJgLiAqL1xuICAgIHNjcm9sbEJvZHk6IHtcbiAgICAgIG92ZXJmbG93WTogJ2F1dG8nLFxuICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICB3aWR0aDogJzAnXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb250YWluZXIgZWxlbWVudC4gKi9cbiAgICBjb250YWluZXI6IHtcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgJ0BtZWRpYSBwcmludCc6IHtcbiAgICAgICAgaGVpZ2h0OiAnYXV0bydcbiAgICAgIH0sXG4gICAgICAvLyBXZSBkaXNhYmxlIHRoZSBmb2N1cyByaW5nIGZvciBtb3VzZSwgdG91Y2ggYW5kIGtleWJvYXJkIHVzZXJzLlxuICAgICAgb3V0bGluZTogMFxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYFBhcGVyYCBjb21wb25lbnQuICovXG4gICAgcGFwZXI6IHtcbiAgICAgIG1hcmdpbjogMzIsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIG92ZXJmbG93WTogJ2F1dG8nLFxuICAgICAgLy8gRml4IElFIDExIGlzc3VlLCB0byByZW1vdmUgYXQgc29tZSBwb2ludC5cbiAgICAgICdAbWVkaWEgcHJpbnQnOiB7XG4gICAgICAgIG92ZXJmbG93WTogJ3Zpc2libGUnLFxuICAgICAgICBib3hTaGFkb3c6ICdub25lJ1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYFBhcGVyYCBjb21wb25lbnQgaWYgYHNjcm9sbD1cInBhcGVyXCJgLiAqL1xuICAgIHBhcGVyU2Nyb2xsUGFwZXI6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgbWF4SGVpZ2h0OiAnY2FsYygxMDAlIC0gNjRweCknXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgUGFwZXJgIGNvbXBvbmVudCBpZiBgc2Nyb2xsPVwiYm9keVwiYC4gKi9cbiAgICBwYXBlclNjcm9sbEJvZHk6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICB0ZXh0QWxpZ246ICdsZWZ0JyAvLyAnaW5pdGlhbCcgZG9lc24ndCB3b3JrIG9uIElFIDExXG5cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBQYXBlcmAgY29tcG9uZW50IGlmIGBtYXhXaWR0aD1mYWxzZWAuICovXG4gICAgcGFwZXJXaWR0aEZhbHNlOiB7XG4gICAgICBtYXhXaWR0aDogJ2NhbGMoMTAwJSAtIDY0cHgpJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYFBhcGVyYCBjb21wb25lbnQgaWYgYG1heFdpZHRoPVwieHNcImAuICovXG4gICAgcGFwZXJXaWR0aFhzOiB7XG4gICAgICBtYXhXaWR0aDogTWF0aC5tYXgodGhlbWUuYnJlYWtwb2ludHMudmFsdWVzLnhzLCA0NDQpLFxuICAgICAgJyYkcGFwZXJTY3JvbGxCb2R5JzogX2RlZmluZVByb3BlcnR5KHt9LCB0aGVtZS5icmVha3BvaW50cy5kb3duKE1hdGgubWF4KHRoZW1lLmJyZWFrcG9pbnRzLnZhbHVlcy54cywgNDQ0KSArIDMyICogMiksIHtcbiAgICAgICAgbWF4V2lkdGg6ICdjYWxjKDEwMCUgLSA2NHB4KSdcbiAgICAgIH0pXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgUGFwZXJgIGNvbXBvbmVudCBpZiBgbWF4V2lkdGg9XCJzbVwiYC4gKi9cbiAgICBwYXBlcldpZHRoU206IHtcbiAgICAgIG1heFdpZHRoOiB0aGVtZS5icmVha3BvaW50cy52YWx1ZXMuc20sXG4gICAgICAnJiRwYXBlclNjcm9sbEJvZHknOiBfZGVmaW5lUHJvcGVydHkoe30sIHRoZW1lLmJyZWFrcG9pbnRzLmRvd24odGhlbWUuYnJlYWtwb2ludHMudmFsdWVzLnNtICsgMzIgKiAyKSwge1xuICAgICAgICBtYXhXaWR0aDogJ2NhbGMoMTAwJSAtIDY0cHgpJ1xuICAgICAgfSlcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBQYXBlcmAgY29tcG9uZW50IGlmIGBtYXhXaWR0aD1cIm1kXCJgLiAqL1xuICAgIHBhcGVyV2lkdGhNZDoge1xuICAgICAgbWF4V2lkdGg6IHRoZW1lLmJyZWFrcG9pbnRzLnZhbHVlcy5tZCxcbiAgICAgICcmJHBhcGVyU2Nyb2xsQm9keSc6IF9kZWZpbmVQcm9wZXJ0eSh7fSwgdGhlbWUuYnJlYWtwb2ludHMuZG93bih0aGVtZS5icmVha3BvaW50cy52YWx1ZXMubWQgKyAzMiAqIDIpLCB7XG4gICAgICAgIG1heFdpZHRoOiAnY2FsYygxMDAlIC0gNjRweCknXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYFBhcGVyYCBjb21wb25lbnQgaWYgYG1heFdpZHRoPVwibGdcImAuICovXG4gICAgcGFwZXJXaWR0aExnOiB7XG4gICAgICBtYXhXaWR0aDogdGhlbWUuYnJlYWtwb2ludHMudmFsdWVzLmxnLFxuICAgICAgJyYkcGFwZXJTY3JvbGxCb2R5JzogX2RlZmluZVByb3BlcnR5KHt9LCB0aGVtZS5icmVha3BvaW50cy5kb3duKHRoZW1lLmJyZWFrcG9pbnRzLnZhbHVlcy5sZyArIDMyICogMiksIHtcbiAgICAgICAgbWF4V2lkdGg6ICdjYWxjKDEwMCUgLSA2NHB4KSdcbiAgICAgIH0pXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgUGFwZXJgIGNvbXBvbmVudCBpZiBgbWF4V2lkdGg9XCJ4bFwiYC4gKi9cbiAgICBwYXBlcldpZHRoWGw6IHtcbiAgICAgIG1heFdpZHRoOiB0aGVtZS5icmVha3BvaW50cy52YWx1ZXMueGwsXG4gICAgICAnJiRwYXBlclNjcm9sbEJvZHknOiBfZGVmaW5lUHJvcGVydHkoe30sIHRoZW1lLmJyZWFrcG9pbnRzLmRvd24odGhlbWUuYnJlYWtwb2ludHMudmFsdWVzLnhsICsgMzIgKiAyKSwge1xuICAgICAgICBtYXhXaWR0aDogJ2NhbGMoMTAwJSAtIDY0cHgpJ1xuICAgICAgfSlcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBQYXBlcmAgY29tcG9uZW50IGlmIGBmdWxsV2lkdGg9e3RydWV9YC4gKi9cbiAgICBwYXBlckZ1bGxXaWR0aDoge1xuICAgICAgd2lkdGg6ICdjYWxjKDEwMCUgLSA2NHB4KSdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBQYXBlcmAgY29tcG9uZW50IGlmIGBmdWxsU2NyZWVuPXt0cnVlfWAuICovXG4gICAgcGFwZXJGdWxsU2NyZWVuOiB7XG4gICAgICBtYXJnaW46IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgbWF4SGVpZ2h0OiAnbm9uZScsXG4gICAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgICAnJiRwYXBlclNjcm9sbEJvZHknOiB7XG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJ1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG52YXIgZGVmYXVsdFRyYW5zaXRpb25EdXJhdGlvbiA9IHtcbiAgZW50ZXI6IGR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxuICBleGl0OiBkdXJhdGlvbi5sZWF2aW5nU2NyZWVuXG59O1xuLyoqXG4gKiBEaWFsb2dzIGFyZSBvdmVybGFpZCBtb2RhbCBwYXBlciBiYXNlZCBjb21wb25lbnRzIHdpdGggYSBiYWNrZHJvcC5cbiAqL1xuXG52YXIgRGlhbG9nID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gRGlhbG9nKHByb3BzLCByZWYpIHtcbiAgdmFyIEJhY2tkcm9wUHJvcHMgPSBwcm9wcy5CYWNrZHJvcFByb3BzLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGRpc2FibGVCYWNrZHJvID0gcHJvcHMuZGlzYWJsZUJhY2tkcm9wQ2xpY2ssXG4gICAgICBkaXNhYmxlQmFja2Ryb3BDbGljayA9IF9wcm9wcyRkaXNhYmxlQmFja2RybyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZUJhY2tkcm8sXG4gICAgICBfcHJvcHMkZGlzYWJsZUVzY2FwZUsgPSBwcm9wcy5kaXNhYmxlRXNjYXBlS2V5RG93bixcbiAgICAgIGRpc2FibGVFc2NhcGVLZXlEb3duID0gX3Byb3BzJGRpc2FibGVFc2NhcGVLID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlRXNjYXBlSyxcbiAgICAgIF9wcm9wcyRmdWxsU2NyZWVuID0gcHJvcHMuZnVsbFNjcmVlbixcbiAgICAgIGZ1bGxTY3JlZW4gPSBfcHJvcHMkZnVsbFNjcmVlbiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZnVsbFNjcmVlbixcbiAgICAgIF9wcm9wcyRmdWxsV2lkdGggPSBwcm9wcy5mdWxsV2lkdGgsXG4gICAgICBmdWxsV2lkdGggPSBfcHJvcHMkZnVsbFdpZHRoID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRmdWxsV2lkdGgsXG4gICAgICBfcHJvcHMkbWF4V2lkdGggPSBwcm9wcy5tYXhXaWR0aCxcbiAgICAgIG1heFdpZHRoID0gX3Byb3BzJG1heFdpZHRoID09PSB2b2lkIDAgPyAnc20nIDogX3Byb3BzJG1heFdpZHRoLFxuICAgICAgb25CYWNrZHJvcENsaWNrID0gcHJvcHMub25CYWNrZHJvcENsaWNrLFxuICAgICAgb25DbG9zZSA9IHByb3BzLm9uQ2xvc2UsXG4gICAgICBvbkVudGVyID0gcHJvcHMub25FbnRlcixcbiAgICAgIG9uRW50ZXJlZCA9IHByb3BzLm9uRW50ZXJlZCxcbiAgICAgIG9uRW50ZXJpbmcgPSBwcm9wcy5vbkVudGVyaW5nLFxuICAgICAgb25Fc2NhcGVLZXlEb3duID0gcHJvcHMub25Fc2NhcGVLZXlEb3duLFxuICAgICAgb25FeGl0ID0gcHJvcHMub25FeGl0LFxuICAgICAgb25FeGl0ZWQgPSBwcm9wcy5vbkV4aXRlZCxcbiAgICAgIG9uRXhpdGluZyA9IHByb3BzLm9uRXhpdGluZyxcbiAgICAgIG9wZW4gPSBwcm9wcy5vcGVuLFxuICAgICAgX3Byb3BzJFBhcGVyQ29tcG9uZW50ID0gcHJvcHMuUGFwZXJDb21wb25lbnQsXG4gICAgICBQYXBlckNvbXBvbmVudCA9IF9wcm9wcyRQYXBlckNvbXBvbmVudCA9PT0gdm9pZCAwID8gUGFwZXIgOiBfcHJvcHMkUGFwZXJDb21wb25lbnQsXG4gICAgICBfcHJvcHMkUGFwZXJQcm9wcyA9IHByb3BzLlBhcGVyUHJvcHMsXG4gICAgICBQYXBlclByb3BzID0gX3Byb3BzJFBhcGVyUHJvcHMgPT09IHZvaWQgMCA/IHt9IDogX3Byb3BzJFBhcGVyUHJvcHMsXG4gICAgICBfcHJvcHMkc2Nyb2xsID0gcHJvcHMuc2Nyb2xsLFxuICAgICAgc2Nyb2xsID0gX3Byb3BzJHNjcm9sbCA9PT0gdm9pZCAwID8gJ3BhcGVyJyA6IF9wcm9wcyRzY3JvbGwsXG4gICAgICBfcHJvcHMkVHJhbnNpdGlvbkNvbXAgPSBwcm9wcy5UcmFuc2l0aW9uQ29tcG9uZW50LFxuICAgICAgVHJhbnNpdGlvbkNvbXBvbmVudCA9IF9wcm9wcyRUcmFuc2l0aW9uQ29tcCA9PT0gdm9pZCAwID8gRmFkZSA6IF9wcm9wcyRUcmFuc2l0aW9uQ29tcCxcbiAgICAgIF9wcm9wcyR0cmFuc2l0aW9uRHVyYSA9IHByb3BzLnRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbiA9IF9wcm9wcyR0cmFuc2l0aW9uRHVyYSA9PT0gdm9pZCAwID8gZGVmYXVsdFRyYW5zaXRpb25EdXJhdGlvbiA6IF9wcm9wcyR0cmFuc2l0aW9uRHVyYSxcbiAgICAgIFRyYW5zaXRpb25Qcm9wcyA9IHByb3BzLlRyYW5zaXRpb25Qcm9wcyxcbiAgICAgIGFyaWFEZXNjcmliZWRieSA9IHByb3BzWydhcmlhLWRlc2NyaWJlZGJ5J10sXG4gICAgICBhcmlhTGFiZWxsZWRieSA9IHByb3BzWydhcmlhLWxhYmVsbGVkYnknXSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJCYWNrZHJvcFByb3BzXCIsIFwiY2hpbGRyZW5cIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiZGlzYWJsZUJhY2tkcm9wQ2xpY2tcIiwgXCJkaXNhYmxlRXNjYXBlS2V5RG93blwiLCBcImZ1bGxTY3JlZW5cIiwgXCJmdWxsV2lkdGhcIiwgXCJtYXhXaWR0aFwiLCBcIm9uQmFja2Ryb3BDbGlja1wiLCBcIm9uQ2xvc2VcIiwgXCJvbkVudGVyXCIsIFwib25FbnRlcmVkXCIsIFwib25FbnRlcmluZ1wiLCBcIm9uRXNjYXBlS2V5RG93blwiLCBcIm9uRXhpdFwiLCBcIm9uRXhpdGVkXCIsIFwib25FeGl0aW5nXCIsIFwib3BlblwiLCBcIlBhcGVyQ29tcG9uZW50XCIsIFwiUGFwZXJQcm9wc1wiLCBcInNjcm9sbFwiLCBcIlRyYW5zaXRpb25Db21wb25lbnRcIiwgXCJ0cmFuc2l0aW9uRHVyYXRpb25cIiwgXCJUcmFuc2l0aW9uUHJvcHNcIiwgXCJhcmlhLWRlc2NyaWJlZGJ5XCIsIFwiYXJpYS1sYWJlbGxlZGJ5XCJdKTtcblxuICB2YXIgbW91c2VEb3duVGFyZ2V0ID0gUmVhY3QudXNlUmVmKCk7XG5cbiAgdmFyIGhhbmRsZU1vdXNlRG93biA9IGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bihldmVudCkge1xuICAgIG1vdXNlRG93blRhcmdldC5jdXJyZW50ID0gZXZlbnQudGFyZ2V0O1xuICB9O1xuXG4gIHZhciBoYW5kbGVCYWNrZHJvcENsaWNrID0gZnVuY3Rpb24gaGFuZGxlQmFja2Ryb3BDbGljayhldmVudCkge1xuICAgIC8vIElnbm9yZSB0aGUgZXZlbnRzIG5vdCBjb21pbmcgZnJvbSB0aGUgXCJiYWNrZHJvcFwiXG4gICAgLy8gV2UgZG9uJ3Qgd2FudCB0byBjbG9zZSB0aGUgZGlhbG9nIHdoZW4gY2xpY2tpbmcgdGhlIGRpYWxvZyBjb250ZW50LlxuICAgIGlmIChldmVudC50YXJnZXQgIT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIE1ha2Ugc3VyZSB0aGUgZXZlbnQgc3RhcnRzIGFuZCBlbmRzIG9uIHRoZSBzYW1lIERPTSBlbGVtZW50LlxuXG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSBtb3VzZURvd25UYXJnZXQuY3VycmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG1vdXNlRG93blRhcmdldC5jdXJyZW50ID0gbnVsbDtcblxuICAgIGlmIChvbkJhY2tkcm9wQ2xpY2spIHtcbiAgICAgIG9uQmFja2Ryb3BDbGljayhldmVudCk7XG4gICAgfVxuXG4gICAgaWYgKCFkaXNhYmxlQmFja2Ryb3BDbGljayAmJiBvbkNsb3NlKSB7XG4gICAgICBvbkNsb3NlKGV2ZW50LCAnYmFja2Ryb3BDbGljaycpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWwsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpLFxuICAgIEJhY2tkcm9wQ29tcG9uZW50OiBCYWNrZHJvcCxcbiAgICBCYWNrZHJvcFByb3BzOiBfZXh0ZW5kcyh7XG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb246IHRyYW5zaXRpb25EdXJhdGlvblxuICAgIH0sIEJhY2tkcm9wUHJvcHMpLFxuICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uOiB0cnVlLFxuICAgIGRpc2FibGVCYWNrZHJvcENsaWNrOiBkaXNhYmxlQmFja2Ryb3BDbGljayxcbiAgICBkaXNhYmxlRXNjYXBlS2V5RG93bjogZGlzYWJsZUVzY2FwZUtleURvd24sXG4gICAgb25Fc2NhcGVLZXlEb3duOiBvbkVzY2FwZUtleURvd24sXG4gICAgb25DbG9zZTogb25DbG9zZSxcbiAgICBvcGVuOiBvcGVuLFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVHJhbnNpdGlvbkNvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIGFwcGVhcjogdHJ1ZSxcbiAgICBpbjogb3BlbixcbiAgICB0aW1lb3V0OiB0cmFuc2l0aW9uRHVyYXRpb24sXG4gICAgb25FbnRlcjogb25FbnRlcixcbiAgICBvbkVudGVyaW5nOiBvbkVudGVyaW5nLFxuICAgIG9uRW50ZXJlZDogb25FbnRlcmVkLFxuICAgIG9uRXhpdDogb25FeGl0LFxuICAgIG9uRXhpdGluZzogb25FeGl0aW5nLFxuICAgIG9uRXhpdGVkOiBvbkV4aXRlZCxcbiAgICByb2xlOiBcIm5vbmUgcHJlc2VudGF0aW9uXCJcbiAgfSwgVHJhbnNpdGlvblByb3BzKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLmNvbnRhaW5lciwgY2xhc3Nlc1tcInNjcm9sbFwiLmNvbmNhdChjYXBpdGFsaXplKHNjcm9sbCkpXSksXG4gICAgb25Nb3VzZVVwOiBoYW5kbGVCYWNrZHJvcENsaWNrLFxuICAgIG9uTW91c2VEb3duOiBoYW5kbGVNb3VzZURvd25cbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUGFwZXJDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBlbGV2YXRpb246IDI0LFxuICAgIHJvbGU6IFwiZGlhbG9nXCIsXG4gICAgXCJhcmlhLWRlc2NyaWJlZGJ5XCI6IGFyaWFEZXNjcmliZWRieSxcbiAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBhcmlhTGFiZWxsZWRieVxuICB9LCBQYXBlclByb3BzLCB7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucGFwZXIsIGNsYXNzZXNbXCJwYXBlclNjcm9sbFwiLmNvbmNhdChjYXBpdGFsaXplKHNjcm9sbCkpXSwgY2xhc3Nlc1tcInBhcGVyV2lkdGhcIi5jb25jYXQoY2FwaXRhbGl6ZShTdHJpbmcobWF4V2lkdGgpKSldLCBQYXBlclByb3BzLmNsYXNzTmFtZSwgZnVsbFNjcmVlbiAmJiBjbGFzc2VzLnBhcGVyRnVsbFNjcmVlbiwgZnVsbFdpZHRoICYmIGNsYXNzZXMucGFwZXJGdWxsV2lkdGgpXG4gIH0pLCBjaGlsZHJlbikpKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IERpYWxvZy5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgaWQocykgb2YgdGhlIGVsZW1lbnQocykgdGhhdCBkZXNjcmliZSB0aGUgZGlhbG9nLlxuICAgKi9cbiAgJ2FyaWEtZGVzY3JpYmVkYnknOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgaWQocykgb2YgdGhlIGVsZW1lbnQocykgdGhhdCBsYWJlbCB0aGUgZGlhbG9nLlxuICAgKi9cbiAgJ2FyaWEtbGFiZWxsZWRieSc6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIEJhY2tkcm9wUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIERpYWxvZyBjaGlsZHJlbiwgdXN1YWxseSB0aGUgaW5jbHVkZWQgc3ViLWNvbXBvbmVudHMuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIGNsaWNraW5nIHRoZSBiYWNrZHJvcCB3aWxsIG5vdCBmaXJlIHRoZSBgb25DbG9zZWAgY2FsbGJhY2suXG4gICAqL1xuICBkaXNhYmxlQmFja2Ryb3BDbGljazogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgaGl0dGluZyBlc2NhcGUgd2lsbCBub3QgZmlyZSB0aGUgYG9uQ2xvc2VgIGNhbGxiYWNrLlxuICAgKi9cbiAgZGlzYWJsZUVzY2FwZUtleURvd246IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBkaWFsb2cgd2lsbCBiZSBmdWxsLXNjcmVlblxuICAgKi9cbiAgZnVsbFNjcmVlbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGRpYWxvZyBzdHJldGNoZXMgdG8gYG1heFdpZHRoYC5cbiAgICpcbiAgICogTm90aWNlIHRoYXQgdGhlIGRpYWxvZyB3aWR0aCBncm93IGlzIGxpbWl0ZWQgYnkgdGhlIGRlZmF1bHQgbWFyZ2luLlxuICAgKi9cbiAgZnVsbFdpZHRoOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRGV0ZXJtaW5lIHRoZSBtYXgtd2lkdGggb2YgdGhlIGRpYWxvZy5cbiAgICogVGhlIGRpYWxvZyB3aWR0aCBncm93cyB3aXRoIHRoZSBzaXplIG9mIHRoZSBzY3JlZW4uXG4gICAqIFNldCB0byBgZmFsc2VgIHRvIGRpc2FibGUgYG1heFdpZHRoYC5cbiAgICovXG4gIG1heFdpZHRoOiBQcm9wVHlwZXMub25lT2YoWydsZycsICdtZCcsICdzbScsICd4bCcsICd4cycsIGZhbHNlXSksXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGJhY2tkcm9wIGlzIGNsaWNrZWQuXG4gICAqL1xuICBvbkJhY2tkcm9wQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBjb21wb25lbnQgcmVxdWVzdHMgdG8gYmUgY2xvc2VkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2suXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWFzb24gQ2FuIGJlOiBgXCJlc2NhcGVLZXlEb3duXCJgLCBgXCJiYWNrZHJvcENsaWNrXCJgLlxuICAgKi9cbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGJlZm9yZSB0aGUgZGlhbG9nIGVudGVycy5cbiAgICovXG4gIG9uRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBkaWFsb2cgaGFzIGVudGVyZWQuXG4gICAqL1xuICBvbkVudGVyZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBkaWFsb2cgaXMgZW50ZXJpbmcuXG4gICAqL1xuICBvbkVudGVyaW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgZXNjYXBlIGtleSBpcyBwcmVzc2VkLFxuICAgKiBgZGlzYWJsZUtleWJvYXJkYCBpcyBmYWxzZSBhbmQgdGhlIG1vZGFsIGlzIGluIGZvY3VzLlxuICAgKi9cbiAgb25Fc2NhcGVLZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSBkaWFsb2cgZXhpdHMuXG4gICAqL1xuICBvbkV4aXQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBkaWFsb2cgaGFzIGV4aXRlZC5cbiAgICovXG4gIG9uRXhpdGVkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgZGlhbG9nIGlzIGV4aXRpbmcuXG4gICAqL1xuICBvbkV4aXRpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBEaWFsb2cgaXMgb3Blbi5cbiAgICovXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCB0byByZW5kZXIgdGhlIGJvZHkgb2YgdGhlIGRpYWxvZy5cbiAgICovXG4gIFBhcGVyQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIFByb3BzIGFwcGxpZWQgdG8gdGhlIFtgUGFwZXJgXSgvYXBpL3BhcGVyLykgZWxlbWVudC5cbiAgICovXG4gIFBhcGVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIERldGVybWluZSB0aGUgY29udGFpbmVyIGZvciBzY3JvbGxpbmcgdGhlIGRpYWxvZy5cbiAgICovXG4gIHNjcm9sbDogUHJvcFR5cGVzLm9uZU9mKFsnYm9keScsICdwYXBlciddKSxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgdHJhbnNpdGlvbi5cbiAgICogW0ZvbGxvdyB0aGlzIGd1aWRlXSgvY29tcG9uZW50cy90cmFuc2l0aW9ucy8jdHJhbnNpdGlvbmNvbXBvbmVudC1wcm9wKSB0byBsZWFybiBtb3JlIGFib3V0IHRoZSByZXF1aXJlbWVudHMgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgVHJhbnNpdGlvbkNvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBUaGUgZHVyYXRpb24gZm9yIHRoZSB0cmFuc2l0aW9uLCBpbiBtaWxsaXNlY29uZHMuXG4gICAqIFlvdSBtYXkgc3BlY2lmeSBhIHNpbmdsZSB0aW1lb3V0IGZvciBhbGwgdHJhbnNpdGlvbnMsIG9yIGluZGl2aWR1YWxseSB3aXRoIGFuIG9iamVjdC5cbiAgICovXG4gIHRyYW5zaXRpb25EdXJhdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBhcHBlYXI6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZW50ZXI6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZXhpdDogUHJvcFR5cGVzLm51bWJlclxuICB9KV0pLFxuXG4gIC8qKlxuICAgKiBQcm9wcyBhcHBsaWVkIHRvIHRoZSBbYFRyYW5zaXRpb25gXShodHRwOi8vcmVhY3Rjb21tdW5pdHkub3JnL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvdHJhbnNpdGlvbiNUcmFuc2l0aW9uLXByb3BzKSBlbGVtZW50LlxuICAgKi9cbiAgVHJhbnNpdGlvblByb3BzOiBQcm9wVHlwZXMub2JqZWN0XG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aURpYWxvZydcbn0pKERpYWxvZyk7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnLi4vVHlwb2dyYXBoeSc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IHtcbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgcm9vdDoge1xuICAgIG1hcmdpbjogMCxcbiAgICBwYWRkaW5nOiAnMTZweCAyNHB4JyxcbiAgICBmbGV4OiAnMCAwIGF1dG8nXG4gIH1cbn07XG52YXIgRGlhbG9nVGl0bGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBEaWFsb2dUaXRsZShwcm9wcywgcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBfcHJvcHMkZGlzYWJsZVR5cG9ncmEgPSBwcm9wcy5kaXNhYmxlVHlwb2dyYXBoeSxcbiAgICAgIGRpc2FibGVUeXBvZ3JhcGh5ID0gX3Byb3BzJGRpc2FibGVUeXBvZ3JhID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlVHlwb2dyYSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJkaXNhYmxlVHlwb2dyYXBoeVwiXSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpLFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyKSwgZGlzYWJsZVR5cG9ncmFwaHkgPyBjaGlsZHJlbiA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFR5cG9ncmFwaHksIHtcbiAgICBjb21wb25lbnQ6IFwiaDJcIixcbiAgICB2YXJpYW50OiBcImg2XCJcbiAgfSwgY2hpbGRyZW4pKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gRGlhbG9nVGl0bGUucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGNoaWxkcmVuIHdvbid0IGJlIHdyYXBwZWQgYnkgYSB0eXBvZ3JhcGh5IGNvbXBvbmVudC5cbiAgICogRm9yIGluc3RhbmNlLCB0aGlzIGNhbiBiZSB1c2VmdWwgdG8gcmVuZGVyIGFuIGg0IGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgaDIuXG4gICAqL1xuICBkaXNhYmxlVHlwb2dyYXBoeTogUHJvcFR5cGVzLmJvb2xcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpRGlhbG9nVGl0bGUnXG59KShEaWFsb2dUaXRsZSk7IiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG52YXIgX19zcHJlYWRBcnJheXMgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXlzKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xuICAgIHJldHVybiByO1xufTtcbnZhciBfYSwgX2I7XG52YXIgX2M7XG5fYyA9ICRSZWZyZXNoU2lnJCgpO1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG4vLyBDb21wb25lbnRzXG5pbXBvcnQgSXRlbSBmcm9tICcuL0NhcnQvSXRlbS9JdGVtJztcbmltcG9ydCBDYXJ0IGZyb20gJy4vQ2FydC9DYXJ0JztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyJztcbmltcG9ydCBMaW5lYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5lYXJQcm9ncmVzcyc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBBZGRTaG9wcGluZ0NhcnRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BZGRTaG9wcGluZ0NhcnQnO1xuaW1wb3J0IFJlc3RvcmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9SZXN0b3JlJztcbmltcG9ydCBCYWRnZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CYWRnZSc7XG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xuLy8gU3R5bGVzXG5pbXBvcnQgeyBXcmFwcGVyLCBTdHlsZWRCdXR0b24sIFN0eWxlZEFwcEJhciwgSGVhZGVyVHlwb2dyYXBoeSB9IGZyb20gJy4vQXBwLnN0eWxlcyc7XG5pbXBvcnQgeyBUb29sYmFyLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xudmFyIGdldENoZWVzZXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkgeyByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9kKSB7XG4gICAgc3dpdGNoIChfZC5sYWJlbCkge1xuICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKFwiYXBpL2NoZWVzZXNcIildO1xuICAgICAgICBjYXNlIDE6IHJldHVybiBbNCAvKnlpZWxkKi8sIChfZC5zZW50KCkpLmpzb24oKV07XG4gICAgICAgIGNhc2UgMjogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9kLnNlbnQoKV07XG4gICAgfVxufSk7IH0pOyB9O1xuZnVuY3Rpb24gU2ltcGxlRGlhbG9nKHByb3BzKSB7XG4gICAgdmFyIG9uQ2xvc2UgPSBwcm9wcy5vbkNsb3NlLCBvcGVuID0gcHJvcHMub3BlbjtcbiAgICB2YXIgaGFuZGxlQ2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG9uQ2xvc2UoKTtcbiAgICB9O1xuICAgIHJldHVybiAoX2pzeChEaWFsb2csIF9fYXNzaWduKHsgb25DbG9zZTogaGFuZGxlQ2xvc2UsIG9wZW46IG9wZW4gfSwgeyBjaGlsZHJlbjogX2pzeChEaWFsb2dUaXRsZSwgeyBjaGlsZHJlbjogXCJTZXQgYmFja3VwIGFjY291bnRcIiB9LCB2b2lkIDApIH0pLCB2b2lkIDApKTtcbn1cbl9hID0gU2ltcGxlRGlhbG9nO1xuJFJlZnJlc2hSZWckKF9hLCBcIlNpbXBsZURpYWxvZ1wiKTtcbi8vIFNpbXBsZURpYWxvZy5EaWFsb2dUeXBlID0ge1xuLy8gICBvbkNsb3NlOiBEaWFsb2dUeXBlLm9uQ2xvc2UsXG4vLyAgIG9wZW46IERpYWxvZ1R5cGUub3Blbixcbi8vIH07XG52YXIgQXBwID0gX2MoZnVuY3Rpb24gKCkge1xuICAgIF9jKCk7XG4gICAgdmFyIF9kID0gdXNlU3RhdGUoZmFsc2UpLCBjYXJ0T3BlbiA9IF9kWzBdLCBzZXRDYXJ0T3BlbiA9IF9kWzFdO1xuICAgIHZhciBfZSA9IHVzZVN0YXRlKFtdKSwgY2FydEl0ZW1zID0gX2VbMF0sIHNldENhcnRJdGVtcyA9IF9lWzFdO1xuICAgIHZhciBfZiA9IHVzZVF1ZXJ5KCdjaGVlc2VzJywgZ2V0Q2hlZXNlcyksIGRhdGEgPSBfZi5kYXRhLCBpc0xvYWRpbmcgPSBfZi5pc0xvYWRpbmcsIGVycm9yID0gX2YuZXJyb3I7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgdmFyIGdldFRvdGFsSXRlbXMgPSBmdW5jdGlvbiAoaXRlbXMpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW1zLnJlZHVjZShmdW5jdGlvbiAoYWNrLCBpdGVtKSB7IHJldHVybiBhY2sgKyBpdGVtLmFtb3VudDsgfSwgMCk7XG4gICAgfTtcbiAgICB2YXIgaGFuZGxlU2hvd0RpYWxvZyA9IGZ1bmN0aW9uIChpdGVtRGVzY3JpcHRpb24pIHtcbiAgICAgICAgY29uc29sZS5sb2coaXRlbURlc2NyaXB0aW9uLCAxMTExMTEpO1xuICAgIH07XG4gICAgdmFyIGhhbmRsZUFkZFRvQ2FydCA9IGZ1bmN0aW9uIChjbGlja2VkSXRlbSkge1xuICAgICAgICBzZXRDYXJ0SXRlbXMoZnVuY3Rpb24gKHByZXYpIHtcbiAgICAgICAgICAgIC8vIDEuIElzIHRoZSBpdGVtIGFscmVhZHkgYWRkZWQgaW4gdGhlIGNhcnQ/XG4gICAgICAgICAgICB2YXIgaXNJdGVtSW5DYXJ0ID0gcHJldi5maW5kKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtLmlkID09PSBjbGlja2VkSXRlbS5pZDsgfSk7XG4gICAgICAgICAgICBpZiAoaXNJdGVtSW5DYXJ0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXYubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmlkID09PSBjbGlja2VkSXRlbS5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgaXRlbSksIHsgYW1vdW50OiBpdGVtLmFtb3VudCArIDEgfSkgOiBpdGVtO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRmlyc3QgdGltZSB0aGUgaXRlbSBpcyBhZGRlZFxuICAgICAgICAgICAgcmV0dXJuIF9fc3ByZWFkQXJyYXlzKHByZXYsIFtfX2Fzc2lnbihfX2Fzc2lnbih7fSwgY2xpY2tlZEl0ZW0pLCB7IGFtb3VudDogMSB9KV0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHZhciBoYW5kbGVSZW1vdmVGcm9tQ2FydCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBzZXRDYXJ0SXRlbXMoZnVuY3Rpb24gKHByZXYpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmV2LnJlZHVjZShmdW5jdGlvbiAoYWNrLCBpdGVtKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmFtb3VudCA9PT0gMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2s7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfX3NwcmVhZEFycmF5cyhhY2ssIFtfX2Fzc2lnbihfX2Fzc2lnbih7fSwgaXRlbSksIHsgYW1vdW50OiBpdGVtLmFtb3VudCAtIDEgfSldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfX3NwcmVhZEFycmF5cyhhY2ssIFtpdGVtXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgW10pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGlmIChpc0xvYWRpbmcpXG4gICAgICAgIHJldHVybiBfanN4KExpbmVhclByb2dyZXNzLCB7fSwgdm9pZCAwKTtcbiAgICBpZiAoZXJyb3IpXG4gICAgICAgIHJldHVybiBfanN4KFwiZGl2XCIsIHsgY2hpbGRyZW46IFwiU29tZXRoaW5nIHdlbnQgd3JvbmcgLi4uXCIgfSwgdm9pZCAwKTtcbiAgICByZXR1cm4gKF9qc3hzKFdyYXBwZXIsIHsgY2hpbGRyZW46IFtfanN4KFN0eWxlZEFwcEJhciwgX19hc3NpZ24oeyBwb3NpdGlvbjogXCJzdGF0aWNcIiB9LCB7IGNoaWxkcmVuOiBfanN4KFRvb2xiYXIsIHsgY2hpbGRyZW46IF9qc3hzKEdyaWQsIF9fYXNzaWduKHsgY29udGFpbmVyOiB0cnVlLCBkaXJlY3Rpb246IFwicm93XCIsIGp1c3RpZnk6IFwic3BhY2UtYmV0d2VlblwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiIH0sIHsgY2hpbGRyZW46IFtfanN4cyhTdHlsZWRCdXR0b24sIHsgY2hpbGRyZW46IFtfanN4KFJlc3RvcmVJY29uLCB7fSwgdm9pZCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9qc3goVHlwb2dyYXBoeSwgX19hc3NpZ24oeyB2YXJpYW50OiBcInN1YnRpdGxlMlwiIH0sIHsgY2hpbGRyZW46IFwiUmVjZW50IFB1cmNoYXNlc1wiIH0pLCB2b2lkIDApXSB9LCB2b2lkIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9qc3goSGVhZGVyVHlwb2dyYXBoeSwgX19hc3NpZ24oeyB2YXJpYW50OiBcImgzXCIsIG5vV3JhcDogdHJ1ZSB9LCB7IGNoaWxkcmVuOiBcIldlbGNvbWUgdG8gUGF0aWVudCBaZXJvJ3MgQ2hlZXNlcmlhXCIgfSksIHZvaWQgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2pzeHMoU3R5bGVkQnV0dG9uLCBfX2Fzc2lnbih7IG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldENhcnRPcGVuKHRydWUpOyB9IH0sIHsgY2hpbGRyZW46IFtfanN4KEJhZGdlLCBfX2Fzc2lnbih7IGJhZGdlQ29udGVudDogZ2V0VG90YWxJdGVtcyhjYXJ0SXRlbXMpLCBjb2xvcjogJ2Vycm9yJywgXCJkYXRhLWN5XCI6IFwiYmFkZ2UtY291bnRcIiB9LCB7IGNoaWxkcmVuOiBfanN4KEFkZFNob3BwaW5nQ2FydEljb24sIHt9LCB2b2lkIDApIH0pLCB2b2lkIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2pzeChUeXBvZ3JhcGh5LCBfX2Fzc2lnbih7IHZhcmlhbnQ6IFwic3VidGl0bGUyXCIgfSwgeyBjaGlsZHJlbjogXCJDYXJ0XCIgfSksIHZvaWQgMCldIH0pLCB2b2lkIDApXSB9KSwgdm9pZCAwKSB9LCB2b2lkIDApIH0pLCB2b2lkIDApLFxuICAgICAgICAgICAgX2pzeChEcmF3ZXIsIF9fYXNzaWduKHsgYW5jaG9yOiAncmlnaHQnLCBvcGVuOiBjYXJ0T3Blbiwgb25DbG9zZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0Q2FydE9wZW4oZmFsc2UpOyB9IH0sIHsgY2hpbGRyZW46IF9qc3goQ2FydCwgeyBjYXJ0SXRlbXM6IGNhcnRJdGVtcywgYWRkVG9DYXJ0OiBoYW5kbGVBZGRUb0NhcnQsIHJlbW92ZUZyb21DYXJ0OiBoYW5kbGVSZW1vdmVGcm9tQ2FydCB9LCB2b2lkIDApIH0pLCB2b2lkIDApLFxuICAgICAgICAgICAgX2pzeChHcmlkLCBfX2Fzc2lnbih7IGNvbnRhaW5lcjogdHJ1ZSwgc3BhY2luZzogMyB9LCB7IGNoaWxkcmVuOiBkYXRhID09PSBudWxsIHx8IGRhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRhdGEubWFwKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiAoX2pzeChHcmlkLCBfX2Fzc2lnbih7IGl0ZW06IHRydWUsIHhzOiAxMiwgc206IDQgfSwgeyBjaGlsZHJlbjogX2pzeChJdGVtLCB7IGl0ZW06IGl0ZW0sIGhhbmRsZUFkZFRvQ2FydDogaGFuZGxlQWRkVG9DYXJ0LCBoYW5kbGVTaG93RGlhbG9nOiBoYW5kbGVTaG93RGlhbG9nIH0sIHZvaWQgMCkgfSksIGl0ZW0uaWQpKTsgfSkgfSksIHZvaWQgMCksXG4gICAgICAgICAgICBfanN4KFNpbXBsZURpYWxvZywgeyBvcGVuOiBvcGVuIH0sIHZvaWQgMCldIH0sIHZvaWQgMCkpO1xufSwgXCJzTmpWZGM3c0VmbHducVYyUFAvdVcxMjUzVFE9XCIsIGZhbHNlLCBmdW5jdGlvbiAoKSB7IHJldHVybiBbdXNlUXVlcnldOyB9KTtcbl9iID0gQXBwO1xuJFJlZnJlc2hSZWckKF9iLCBcIkFwcFwiKTtcbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjllMjVmY2EwY2QwMzcwN2I4NjdhXCIpIl0sInNvdXJjZVJvb3QiOiIifQ==