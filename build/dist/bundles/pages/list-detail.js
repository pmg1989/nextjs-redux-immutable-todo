module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "undefined";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 75);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var app_constants_namespaceObject = {};
__webpack_require__.d(app_constants_namespaceObject, "INIT_TABBAR", function() { return INIT_TABBAR; });
__webpack_require__.d(app_constants_namespaceObject, "CHANGE_TABBAR", function() { return CHANGE_TABBAR; });
__webpack_require__.d(app_constants_namespaceObject, "TOGGLE_TABBAR", function() { return TOGGLE_TABBAR; });

// CONCATENATED MODULE: ./src/constants/app-constants.js
var INIT_TABBAR = 'INIT_TABBAR';
var CHANGE_TABBAR = 'CHANGE_TABBAR';
var TOGGLE_TABBAR = 'TOGGLE_TABBAR';
// EXTERNAL MODULE: ./src/constants/todo-constants.js
var todo_constants = __webpack_require__(12);

// CONCATENATED MODULE: ./src/constants/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return app_constants_namespaceObject; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "b", function() { return todo_constants; });





/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("redux-immutable");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("redux-create-reducer");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var app_actions_namespaceObject = {};
__webpack_require__.d(app_actions_namespaceObject, "initTabBar", function() { return app_actions_initTabBar; });
__webpack_require__.d(app_actions_namespaceObject, "changeTabBar", function() { return app_actions_changeTabBar; });
__webpack_require__.d(app_actions_namespaceObject, "toggleTabBar", function() { return app_actions_toggleTabBar; });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(1);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// EXTERNAL MODULE: external "classnames"
var external__classnames_ = __webpack_require__(2);
var external__classnames__default = /*#__PURE__*/__webpack_require__.n(external__classnames_);

// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(5);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: ./src/components/Container/Container.less
var Container_Container = __webpack_require__(20);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_Container);

// CONCATENATED MODULE: ./src/components/Container/Container.js






var Container_Container_Container = function Container(_ref) {
  var showTabBar = _ref.showTabBar,
      renderHeader = _ref.renderHeader,
      renderTabBar = _ref.renderTabBar,
      children = _ref.children;

  return external__react__default.a.createElement(
    'div',
    { className: Container_default.a.content_box },
    renderHeader,
    external__react__default.a.createElement(
      'div',
      { className: external__classnames__default()(Container_default.a.content, showTabBar && Container_default.a.with_tabbar) },
      children
    ),
    renderTabBar
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    showTabBar: state.getIn(['app', 'tabBar', 'show'])
  };
};

/* harmony default export */ var components_Container_Container = (Object(external__react_redux_["connect"])(mapStateToProps, null)(Container_Container_Container));
// CONCATENATED MODULE: ./src/components/Container/index.js


/* harmony default export */ var components_Container = (components_Container_Container);
// EXTERNAL MODULE: external "antd-mobile/lib/nav-bar"
var nav_bar_ = __webpack_require__(21);
var nav_bar__default = /*#__PURE__*/__webpack_require__.n(nav_bar_);

// EXTERNAL MODULE: external "antd-mobile/lib/icon"
var icon_ = __webpack_require__(22);
var icon__default = /*#__PURE__*/__webpack_require__.n(icon_);

// EXTERNAL MODULE: external "redux"
var external__redux_ = __webpack_require__(6);
var external__redux__default = /*#__PURE__*/__webpack_require__.n(external__redux_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(4);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./src/constants/index.js + 1 modules
var constants = __webpack_require__(7);

// CONCATENATED MODULE: ./src/actions/app/app-actions.js


var app_actions_initTabBar = function initTabBar(selectedTab, status) {
  return { type: constants["a" /* appConstants */].INIT_TABBAR, selectedTab: selectedTab, status: status };
};

var app_actions_changeTabBar = function changeTabBar(selectedTab) {
  return { type: constants["a" /* appConstants */].CHANGE_TABBAR, selectedTab: selectedTab };
};

var app_actions_toggleTabBar = function toggleTabBar(status) {
  return { type: constants["a" /* appConstants */].TOGGLE_TABBAR, status: status };
};
// CONCATENATED MODULE: ./src/actions/app/index.js


/* harmony default export */ var app = (app_actions_namespaceObject);
// EXTERNAL MODULE: ./src/components/Header/Header.less
var Header_Header = __webpack_require__(23);
var Header_default = /*#__PURE__*/__webpack_require__.n(Header_Header);

// CONCATENATED MODULE: ./src/components/Header/Header.js



var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }












var Header_Header_Header = function Header(_ref) {
  var children = _ref.children,
      showTabBar = _ref.showTabBar,
      rightContentType = _ref.rightContentType,
      onApp = _ref.onApp,
      headerProps = _objectWithoutProperties(_ref, ['children', 'showTabBar', 'rightContentType', 'onApp']);

  var dicRightContentType = {
    tabBar: external__react__default.a.createElement(
      'span',
      { className: external__classnames__default()(Header_default.a.btn_nav, showTabBar && Header_default.a.active), onClick: function onClick() {
          return onApp.toggleTabBar();
        } },
      external__react__default.a.createElement('i', null),
      external__react__default.a.createElement('i', null),
      external__react__default.a.createElement('i', null)
    )
  };

  var handleBack = function handleBack() {
    router__default.a.back();
  };

  var navBarProps = _extends({
    leftContent: '',
    icon: external__react__default.a.createElement(icon__default.a, { type: 'icon-arrow-left' }),
    mode: 'dark',
    onLeftClick: handleBack,
    rightContent: dicRightContentType[rightContentType] || headerProps.rightContent
  }, headerProps);

  return external__react__default.a.createElement(
    'div',
    { className: Header_default.a['fixed-top'] },
    external__react__default.a.createElement(Head, { title: children }),
    external__react__default.a.createElement(
      nav_bar__default.a,
      navBarProps,
      children.length > 12 ? children.substr(0, 12) + '...' : children
    )
  );
};

var Header_mapStateToProps = function mapStateToProps(state) {
  return {
    showTabBar: state.getIn(['app', 'tabBar', 'show'])
  };
};

var Header_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onApp: Object(external__redux_["bindActionCreators"])(app, dispatch)
  };
};

/* harmony default export */ var components_Header_Header = (Object(external__react_redux_["connect"])(Header_mapStateToProps, Header_mapDispatchToProps)(Header_Header_Header));
// CONCATENATED MODULE: ./src/components/Header/index.js


/* harmony default export */ var components_Header = (components_Header_Header);
// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(15);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./src/components/Link.js




var Link_MyLink = function MyLink(_ref) {
  var className = _ref.className,
      to = _ref.to,
      children = _ref.children;

  return external__react__default.a.createElement(
    link__default.a,
    { href: to },
    external__react__default.a.createElement(
      'a',
      { className: className },
      children
    )
  );
};

/* harmony default export */ var Link = (Link_MyLink);
// EXTERNAL MODULE: ./src/routes.js
var routes = __webpack_require__(24);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// CONCATENATED MODULE: ./src/components/ActiveLink.js
function ActiveLink__objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






var ActiveLink_ActiveLink = function ActiveLink(_ref) {
  var router = _ref.router,
      children = _ref.children,
      activeClassName = _ref.activeClassName,
      props = ActiveLink__objectWithoutProperties(_ref, ['router', 'children', 'activeClassName']);

  var child = external__react_["Children"].only(children);
  var className = child.props.className || '';
  if (props.to && props.to === router.pathname && activeClassName) {
    className = (className + ' ' + activeClassName).trim();
  } else if (props.route && '/' + props.route === router.pathname && activeClassName) {
    className = (className + ' ' + activeClassName).trim();
  }

  return external__react__default.a.createElement(
    routes["Link"],
    props,
    external__react__default.a.cloneElement(child, { className: className })
  );
};

/* harmony default export */ var components_ActiveLink = (Object(router_["withRouter"])(ActiveLink_ActiveLink));
// EXTERNAL MODULE: external "antd-mobile/lib/tab-bar"
var tab_bar_ = __webpack_require__(26);
var tab_bar__default = /*#__PURE__*/__webpack_require__.n(tab_bar_);

// EXTERNAL MODULE: external "immutable"
var external__immutable_ = __webpack_require__(3);
var external__immutable__default = /*#__PURE__*/__webpack_require__.n(external__immutable_);

// EXTERNAL MODULE: ./src/components/TabBar/TabBar.less
var TabBar = __webpack_require__(27);
var TabBar_default = /*#__PURE__*/__webpack_require__.n(TabBar);

// CONCATENATED MODULE: ./src/components/TabBar/TabBar.js


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var Item = tab_bar__default.a.Item;

var dicType = {
  home: '/',
  product: '/product/category',
  myCenter: '/account/center'
};

var TabBar_MyTabBar = function (_Component) {
  _inherits(MyTabBar, _Component);

  function MyTabBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MyTabBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MyTabBar.__proto__ || Object.getPrototypeOf(MyTabBar)).call.apply(_ref, [this].concat(args))), _this), _this.handlePress = function (type) {
      return function () {
        // this.props.onApp.changeTabBar(type)
        router__default.a.push(dicType[type]);
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MyTabBar, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          hidden = _props.hidden,
          selectedTab = _props.selectedTab,
          onApp = _props.onApp;

      onApp.initTabBar(selectedTab, !hidden);
    }
  }, {
    key: 'render',
    value: function render() {
      var tabBar = this.props.tabBar;

      var selectedTab = tabBar.get('active');
      var show = tabBar.get('show');

      return external__react__default.a.createElement(
        'div',
        { className: external__classnames__default()(TabBar_default.a.tabbar_box, show && TabBar_default.a.fixed) },
        external__react__default.a.createElement(
          tab_bar__default.a,
          {
            unselectedTintColor: '#666',
            tintColor: '#c83b33',
            barTintColor: 'white',
            hidden: !show
          },
          external__react__default.a.createElement(Item, {
            icon: external__react__default.a.createElement(Icon, { type: 'icon-index' }),
            selectedIcon: external__react__default.a.createElement(Icon, { type: 'icon-index-active' }),
            title: '\u9996\u9875',
            key: 'home',
            selected: selectedTab === 'home',
            onPress: this.handlePress('home')
          }),
          external__react__default.a.createElement(Item, {
            icon: external__react__default.a.createElement(Icon, { type: 'icon-category' }),
            selectedIcon: external__react__default.a.createElement(Icon, { type: 'icon-category-index' }),
            title: '\u5546\u54C1',
            key: 'product',
            selected: selectedTab === 'product',
            onPress: this.handlePress('product')
          }),
          external__react__default.a.createElement(Item, {
            icon: external__react__default.a.createElement(Icon, { type: 'icon-people' }),
            selectedIcon: external__react__default.a.createElement(Icon, { type: 'icon-people-active' }),
            title: '\u6211\u7684',
            key: 'myCenter',
            selected: selectedTab === 'myCenter',
            onPress: this.handlePress('myCenter')
          })
        )
      );
    }
  }]);

  return MyTabBar;
}(external__react_["Component"]);

TabBar_MyTabBar.defaultProps = {
  hidden: false,
  selectedTab: ''
};


var TabBar_mapStateToProps = function mapStateToProps(state) {
  return {
    tabBar: state.getIn(['app', 'tabBar'])
  };
};

var TabBar_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onApp: Object(external__redux_["bindActionCreators"])(app, dispatch)
  };
};

/* harmony default export */ var TabBar_TabBar = (Object(external__react_redux_["connect"])(TabBar_mapStateToProps, TabBar_mapDispatchToProps)(TabBar_MyTabBar));
// CONCATENATED MODULE: ./src/components/TabBar/index.js


/* harmony default export */ var components_TabBar = (TabBar_TabBar);
// CONCATENATED MODULE: ./src/components/Icon/MyIcon.js
var MyIcon__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function MyIcon__objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }




var MyIcon_MyIcon = function MyIcon(_ref) {
  var type = _ref.type,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 'md' : _ref$size,
      props = MyIcon__objectWithoutProperties(_ref, ['type', 'className', 'size']);

  return external__react__default.a.createElement(
    'svg',
    MyIcon__extends({ className: 'am-icon ' + type + ' am-icon-' + size + ' ' + className }, props),
    external__react__default.a.createElement('use', { xlinkHref: '#' + type })
  );
};

/* harmony default export */ var Icon_MyIcon = (MyIcon_MyIcon);
// CONCATENATED MODULE: ./src/components/Icon/index.js


/* harmony default export */ var Icon = (Icon_MyIcon);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(10);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(28);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./src/components/Head.js






var Head_MyHead = function MyHead(_ref) {
  var children = _ref.children,
      title = _ref.title;

  return external__react__default.a.createElement(
    head__default.a,
    null,
    external__react__default.a.createElement(
      'title',
      {
        className: 'jsx-1606093830' + ' ' + 'jsx-1606093830'
      },
      title
    ),
    external__react__default.a.createElement('meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no', className: 'jsx-1606093830' + ' ' + 'jsx-1606093830'
    }),
    external__react__default.a.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/css/nprogress.css', className: 'jsx-1606093830' + ' ' + 'jsx-1606093830'
    }),
    external__react__default.a.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/css/antd-mobile.min.css', className: 'jsx-1606093830' + ' ' + 'jsx-1606093830'
    }),
    external__react__default.a.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/css/todo.css', className: 'jsx-1606093830' + ' ' + 'jsx-1606093830'
    }),
    external__react__default.a.createElement('link', { rel: 'stylesheet', href: '/_next/static/style.css', className: 'jsx-1606093830' + ' ' + 'jsx-1606093830'
    }),
    children,
    external__react__default.a.createElement(style__default.a, {
      styleId: '1606093830',
      css: ['body{background-color:#eee !important;}', 'ul{list-style:none;margin:0;padding:0;}', '.am-accordion-header{font-size:0.28rem !important;font-weight:bold;}', '.am-grid-item-content{height:auto !important;}']
    })
  );
};

/* harmony default export */ var Head = (Head_MyHead);
// EXTERNAL MODULE: external "nprogress"
var external__nprogress_ = __webpack_require__(29);
var external__nprogress__default = /*#__PURE__*/__webpack_require__.n(external__nprogress_);

// EXTERNAL MODULE: ./src/components/Nav/Nav.less
var Nav = __webpack_require__(30);
var Nav_default = /*#__PURE__*/__webpack_require__.n(Nav);

// CONCATENATED MODULE: ./src/components/Nav/index.js







router__default.a.onRouteChangeStart = function (url) {
  console.log('Loading: ' + url);
  external__nprogress__default.a.start();
};
router__default.a.onRouteChangeComplete = function () {
  return external__nprogress__default.a.done();
};
router__default.a.onRouteChangeError = function () {
  return external__nprogress__default.a.done();
};

/* harmony default export */ var components_Nav = (function () {
  return external__react__default.a.createElement(
    'nav',
    null,
    external__react__default.a.createElement(
      'ul',
      { className: Nav_default.a['nav-box'] },
      external__react__default.a.createElement(
        'li',
        null,
        external__react__default.a.createElement(
          components_ActiveLink,
          { activeClassName: Nav_default.a.active, to: '/' },
          external__react__default.a.createElement(
            'a',
            { className: external__classnames__default()(Nav_default.a['nav-link'], Nav_default.a['home-link']) },
            'Home'
          )
        )
      ),
      external__react__default.a.createElement(
        'li',
        null,
        external__react__default.a.createElement(
          components_ActiveLink,
          { activeClassName: Nav_default.a.active, to: '/list' },
          external__react__default.a.createElement(
            'a',
            { className: Nav_default.a['nav-link'] },
            'list'
          )
        )
      ),
      external__react__default.a.createElement(
        'li',
        null,
        external__react__default.a.createElement(
          components_ActiveLink,
          { route: 'list-detail', params: { id: 1 }, activeClassName: Nav_default.a.active },
          external__react__default.a.createElement(
            'a',
            { className: Nav_default.a['nav-link'] },
            'list-detail'
          )
        )
      )
    )
  );
});
// CONCATENATED MODULE: ./src/components/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return components_Container; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "c", function() { return components_Header; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "e", function() { return Link; });
/* unused concated harmony import ActiveLink */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return components_ActiveLink; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "g", function() { return components_TabBar; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "d", function() { return Icon; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "b", function() { return Head; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "f", function() { return components_Nav; });











/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_ALL", function() { return SHOW_ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_ACTIVE", function() { return SHOW_ACTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_COMPLETED", function() { return SHOW_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK_ADD", function() { return TASK_ADD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK_DONE", function() { return TASK_DONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK_UNDONE", function() { return TASK_UNDONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK_EDIT", function() { return TASK_EDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK_REMOVE", function() { return TASK_REMOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK_FILTER", function() { return TASK_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TASK_LIST", function() { return FETCH_TASK_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_TITLES", function() { return FILTER_TITLES; });
var SHOW_ALL = 'SHOW_ALL';
var SHOW_ACTIVE = 'SHOW_ACTIVE';
var SHOW_COMPLETED = 'SHOW_COMPLETED';

var TASK_ADD = 'TASK_ADD';
var TASK_DONE = 'TASK_DONE';
var TASK_UNDONE = 'TASK_UNDONE';
var TASK_EDIT = 'TASK_EDIT';
var TASK_REMOVE = 'TASK_REMOVE';
var TASK_FILTER = 'TASK_FILTER';

var FETCH_TASK_LIST = 'FETCH_TASK_LIST';

var FILTER_TITLES = {
  ALL: 'ALL',
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED'
};

/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

var REACT_APP_API_ENV = 'dev';

module.exports = {
  STATIC_HOST: {
    dev: 'http://test5.mmstatic.airent.test.aiershou.com/react',
    staging: 'http://staging.mmstatic.airent.test.aiershou.com/react',
    prod: 'http://prod.mmstatic.airent.test.aiershou.com/react'
  }[REACT_APP_API_ENV],

  PROXY_HOST: {
    dev: 'https://dev.proxy.com',
    staging: 'https://staging.proxy.com',
    prod: 'https://prod.proxy.com'
  }[REACT_APP_API_ENV],

  assetPrefix: {
    dev: '',
    staging: 'http://test5.mmstatic.airent.test.aiershou.com/reac',
    prod: 'http://test5.mmstatic.airent.test.aiershou.com/reac'
  }[REACT_APP_API_ENV]
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "immutable"
var external__immutable_ = __webpack_require__(3);
var external__immutable__default = /*#__PURE__*/__webpack_require__.n(external__immutable_);

// EXTERNAL MODULE: external "redux-thunk"
var external__redux_thunk_ = __webpack_require__(17);
var external__redux_thunk__default = /*#__PURE__*/__webpack_require__.n(external__redux_thunk_);

// EXTERNAL MODULE: external "redux-logger"
var external__redux_logger_ = __webpack_require__(18);
var external__redux_logger__default = /*#__PURE__*/__webpack_require__.n(external__redux_logger_);

// EXTERNAL MODULE: external "next-redux-wrapper"
var external__next_redux_wrapper_ = __webpack_require__(19);
var external__next_redux_wrapper__default = /*#__PURE__*/__webpack_require__.n(external__next_redux_wrapper_);

// EXTERNAL MODULE: external "redux"
var external__redux_ = __webpack_require__(6);
var external__redux__default = /*#__PURE__*/__webpack_require__.n(external__redux_);

// EXTERNAL MODULE: ./src/utils/config.js
var config = __webpack_require__(14);
var config_default = /*#__PURE__*/__webpack_require__.n(config);

// EXTERNAL MODULE: external "redux-immutable"
var external__redux_immutable_ = __webpack_require__(8);
var external__redux_immutable__default = /*#__PURE__*/__webpack_require__.n(external__redux_immutable_);

// EXTERNAL MODULE: external "redux-create-reducer"
var external__redux_create_reducer_ = __webpack_require__(9);
var external__redux_create_reducer__default = /*#__PURE__*/__webpack_require__.n(external__redux_create_reducer_);

// EXTERNAL MODULE: ./src/constants/index.js + 1 modules
var constants = __webpack_require__(7);

// CONCATENATED MODULE: ./src/reducers/app/app-reducers.js
var _createReducer;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var $app = external__immutable__default.a.fromJS({
  tabBar: {
    active: '',
    show: true
  }
});

var app = Object(external__redux_create_reducer_["createReducer"])($app, (_createReducer = {}, _defineProperty(_createReducer, constants["a" /* appConstants */].INIT_TABBAR, function (state, _ref) {
  var selectedTab = _ref.selectedTab,
      status = _ref.status;

  return state.setIn(['tabBar', 'active'], selectedTab).setIn(['tabBar', 'show'], status);
}), _defineProperty(_createReducer, constants["a" /* appConstants */].CHANGE_TABBAR, function (state, _ref2) {
  var selectedTab = _ref2.selectedTab;

  return state.setIn(['tabBar', 'active'], selectedTab);
}), _defineProperty(_createReducer, constants["a" /* appConstants */].TOGGLE_TABBAR, function (state) {
  var show = state.getIn(['tabBar', 'show']);
  return state.setIn(['tabBar', 'show'], !show);
}), _createReducer));

/* harmony default export */ var app_reducers = (app);
// CONCATENATED MODULE: ./src/reducers/app/index.js


// CONCATENATED MODULE: ./src/reducers/tasks/tasks.js
var tasks__createReducer;

function tasks__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var ALL = constants["b" /* todoConstants */].FILTER_TITLES.ALL;


var $list = external__immutable__default.a.fromJS([]);

var list = Object(external__redux_create_reducer_["createReducer"])($list, (tasks__createReducer = {}, tasks__defineProperty(tasks__createReducer, constants["b" /* todoConstants */].FETCH_TASK_LIST, function (state, action) {
  return state.merge(action.list);
}), tasks__defineProperty(tasks__createReducer, constants["b" /* todoConstants */].TASK_ADD, function (state, action) {
  var index = state.size;
  var id = state.reduce(function (maxId, item) {
    return Math.max(item.get('id'), maxId);
  }, -1);
  return state.mergeIn([index], {
    done: false,
    id: id + 1,
    name: action.name
  });
}), tasks__defineProperty(tasks__createReducer, constants["b" /* todoConstants */].TASK_DONE, function (state, action) {
  var index = state.findIndex(function (item) {
    return item.get('id') === action.id;
  });
  return state.setIn([index, 'done'], true);
}), tasks__defineProperty(tasks__createReducer, constants["b" /* todoConstants */].TASK_UNDONE, function (state, action) {
  var index = state.findIndex(function (item) {
    return item.get('id') === action.id;
  });
  return state.setIn([index, 'done'], false);
}), tasks__defineProperty(tasks__createReducer, constants["b" /* todoConstants */].TASK_REMOVE, function (state, action) {
  var index = state.findIndex(function (item) {
    return item.get('id') === action.id;
  });
  return state.deleteIn([index]);
}), tasks__defineProperty(tasks__createReducer, constants["b" /* todoConstants */].TASK_EDIT, function (state, action) {
  var index = state.findIndex(function (item) {
    return item.get('id') === action.id;
  });
  return state.setIn([index, 'name'], action.name);
}), tasks__createReducer));

var $filter = external__immutable__default.a.fromJS(ALL);

var filter = Object(external__redux_create_reducer_["createReducer"])($filter, tasks__defineProperty({}, constants["b" /* todoConstants */].TASK_FILTER, function (state, action) {
  return action.filter;
}));

/* harmony default export */ var tasks = (Object(external__redux_immutable_["combineReducers"])({
  list: list,
  filter: filter
}));
// CONCATENATED MODULE: ./src/reducers/tasks/index.js


// CONCATENATED MODULE: ./src/reducers/index.js





/* harmony default export */ var reducers = (Object(external__redux_immutable_["combineReducers"])({
  app: app_reducers,
  tasks: tasks
}));
// CONCATENATED MODULE: ./src/store/createStore.js
/* unused harmony export initStore */
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }










function createMiddlewares() {
  // { isServer }
  var middlewares = [external__redux_thunk__default.a];
  if (config_default.a.env === 'development' && typeof window !== 'undefined') {
    middlewares.push(Object(external__redux_logger_["createLogger"])({
      level: 'info',
      collapsed: true,
      stateTransformer: function stateTransformer(state) {
        return state.toJS();
      }
    }));
  }

  return middlewares;
}

var createStore_initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var context = arguments[1];
  var isServer = context.isServer;

  var middlewares = createMiddlewares({ isServer: isServer });

  return Object(external__redux_["createStore"])(reducers, external__immutable__default.a.fromJS(initialState), Object(external__redux_["compose"])(external__redux_["applyMiddleware"].apply(undefined, _toConsumableArray(middlewares)), typeof window !== 'undefined' && window.devToolsExtension ? window.devToolsExtension() : function (f) {
    return f;
  }));
};

/* harmony default export */ var createStore = __webpack_exports__["a"] = (function (comp) {
  return external__next_redux_wrapper__default()(createStore_initStore)(comp);
});

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = {
	"content_box": "content_box___2QJPe",
	"content": "content___1tFMR",
	"with_tabbar": "with_tabbar___3OuZn"
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/nav-bar");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/icon");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = {
	"fixed-top": "fixed-top___nuVt3",
	"btn_nav": "btn_nav___3pIaR",
	"active": "active___29R6Q"
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var nextRoutes = __webpack_require__(25);

var routes = module.exports = nextRoutes();

var APP_ROUTES = [{
  page: 'index',
  pattern: '/'
}, {
  page: 'list',
  pattern: '/list'
}, {
  name: 'list-detail',
  page: 'list-detail',
  pattern: '/list/:id'
}, {
  page: 'help/index',
  pattern: '/help/index'
}];

APP_ROUTES.forEach(function (route) {
  return routes.add(route);
});

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("antd-mobile/lib/tab-bar");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = {
	"tabbar_box": "tabbar_box___3qu14",
	"fixed": "fixed___2_jXT"
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = {
	"nav-box": "nav-box___3YRi7",
	"active": "active___2o0nC",
	"nav-link": "nav-link___3ZoFK"
};

/***/ }),
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(76);


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/store/createStore.js + 5 modules
var createStore = __webpack_require__(16);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(1);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// EXTERNAL MODULE: ./src/components/index.js + 14 modules
var components = __webpack_require__(11);

// CONCATENATED MODULE: ./src/containers/ListDetail.js




var dic = {};

var ListDetail_ListDetail = function ListDetail(_ref) {
  var query = _ref.query;

  if (!dic[query.id]) {
    dic[query.id] = 1;
  } else {
    dic[query.id] += 1;
  }
  console.log(dic);

  var headerProps = {
    rightContentType: 'tabBar'
  };

  var containerProps = {
    renderHeader: external__react__default.a.createElement(
      components["c" /* Header */],
      headerProps,
      '\u5546\u54C1\u8BE6\u60C5\u9875'
    ),
    renderTabBar: external__react__default.a.createElement(components["g" /* TabBar */], { selectedTab: '', hidden: true })
  };

  return external__react__default.a.createElement(
    components["a" /* Container */],
    containerProps,
    external__react__default.a.createElement(components["f" /* Nav */], null),
    external__react__default.a.createElement(
      'div',
      { className: 'box' },
      'i am list detail: id: ',
      query.id
    ),
    external__react__default.a.createElement(
      'div',
      null,
      'Loading data from ',
      'https://dev.api.com'
    )
  );
};

ListDetail_ListDetail.getInitialProps = function (_ref2) {
  var query = _ref2.query;

  return {
    query: query
  };
};

/* harmony default export */ var containers_ListDetail = (ListDetail_ListDetail);
// CONCATENATED MODULE: ./pages/list-detail.js



/* harmony default export */ var list_detail = __webpack_exports__["default"] = (Object(createStore["a" /* default */])(containers_ListDetail));

/***/ })
/******/ ]);