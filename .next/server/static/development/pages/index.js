module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./libs/config.ts":
/*!************************!*\
  !*** ./libs/config.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  url: "https://hasura.cap.edumatis.id/v1/graphql",
  wsurl: "wss://hasura.cap.edumatis.id/v1/graphql",
  table: "murid",
  use_client_id: true,
  identifierType: {
    id: "int",
    client_id: "int",
    password: "string",
    username: "string"
  },
  identifier: {
    id: "id",
    username: "nsa",
    fullname: "nama_murid",
    role: "'admin'",
    password: "password",
    client_id: "sekolah_id"
  },
  user: {
    login_columns: ["nsa", "nama_murid"],
    columns: ["id", "nisn", "nsa", "nama_murid", "password", "email", "sekolah_id"]
  },
  color: {
    main: "#613EEA",
    mainText: "#FFFFFF"
  }
});

/***/ }),

/***/ "./libs/nav/NavContainer.tsx":
/*!***********************************!*\
  !*** ./libs/nav/NavContainer.tsx ***!
  \***********************************/
/*! exports provided: default, createNavigateTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNavigateTo", function() { return createNavigateTo; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/Users/riz/Documents/edumatis-web/libs/nav/NavContainer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




const container = routes => {
  const routeStack = [];
  let navParam = {};
  return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["observer"])((props, ref) => {
    let screenRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
    let current = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["useObservable"])({
      name: ""
    });

    if (current.name === "") {
      _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(routes).map((r, index) => {
        if (index === 0) {
          current.name = r;
          screenRef.current = routes[r].screen;
        }
      });
    }

    const navigation = {
      _routes: routes,
      getParam: function (key) {
        return navParam[key];
      },
      dangerouslyGetParent: function () {
        return props.parentNavigation;
      },
      goBack: function () {
        if (routeStack.length > 0) {
          const screen = routeStack.pop();

          if (routes[screen.name]) {
            navParam = screen.data;
            screenRef.current = routes[screen.name].screen;
            current.name = screen.name;
          }
        }
      },
      navigate: function (screen, data) {
        routeStack.push({
          name: current.name,
          data: Object(mobx__WEBPACK_IMPORTED_MODULE_4__["toJS"])(navParam)
        });

        if (routes[screen]) {
          navParam = data;
          screenRef.current = routes[screen].screen;
          current.name = screen;
        }
      },
      replace: function (screen) {
        if (routes[screen]) {
          screenRef.current = routes[screen].screen;
          current.name = screen;
        }
      },
      popToTop: function () {
        if (props.parentNavigation) {
          props.parentNavigation.popToTop();
        } else {
          let first = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(routes)[0];

          current.name = first;
          screenRef.current = routes[first].screen;
        }
      }
    };
    const Component = screenRef.current;

    if (ref && ref.current) {
      ref.current = navigation;
    }

    return __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      navigation: navigation,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: undefined
    }));
  }, {
    forwardRef: true
  });
};

/* harmony default export */ __webpack_exports__["default"] = (data => {
  return container(data);
});
const createNavigateTo = function (navigation) {
  return function (screen) {
    navigation.replace(screen);
    if (navigation.closeDrawer) navigation.closeDrawer();
  };
};

/***/ }),

/***/ "./libs/nav/SideNav.tsx":
/*!******************************!*\
  !*** ./libs/nav/SideNav.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ui_Style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/Style */ "./libs/ui/Style.tsx");
/* harmony import */ var _NavContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavContainer */ "./libs/nav/NavContainer.tsx");

var _jsxFileName = "/Users/riz/Documents/edumatis-web/libs/nav/SideNav.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





const absoluteSideBar = {
  position: "absolute",
  left: 0,
  top: 0,
  bottom: 0,
  width: "30%",
  flexDirection: "row",
  alignItems: "stretch",
  zIndex: 99
};
const flexSideBar = {
  width: "30%",
  maxWidth: 280,
  flexDirection: "row",
  alignItems: "stretch"
};
const overlay = {
  position: "absolute",
  left: 0,
  top: 0,
  bottom: 0,
  right: 0,
  zIndex: 90
};
/* harmony default export */ __webpack_exports__["default"] = ((data, config = {}) => {
  const Container = Object(_NavContainer__WEBPACK_IMPORTED_MODULE_5__["default"])(data);

  if (config.contentComponent) {
    const SideBar = config.contentComponent;
    return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["observer"])(props => {
      const ref = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])({});
      const obs = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObservable"])({
        opened: false
      });
      Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(Object(_ui_Style__WEBPACK_IMPORTED_MODULE_4__["ResponsiveHandler"])(obs), []);
      Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
        if (ref.current) {
          ref.current.toggleDrawer = function () {
            obs.opened = !obs.opened;
          };

          ref.current.closeDrawer = function () {
            obs.opened = false;
          };
        }
      });
      return __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_3__["View"], {
        style: {
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          flexDirection: "row",
          alignItems: "stretch"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: undefined
      }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_3__["View"], {
        style: Object(_ui_Style__WEBPACK_IMPORTED_MODULE_4__["Responsive"])({
          xs: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, absoluteSideBar, {
            minWidth: "50%"
          }, {
            transform: [{
              scale: obs.opened ? 1 : 0
            }]
          }),
          sm: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, absoluteSideBar, {
            minWidth: "50%"
          }, {
            transform: [{
              scale: obs.opened ? 1 : 0
            }]
          }),
          md: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, flexSideBar, {
            transform: [{
              scale: 1
            }]
          }),
          lg: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, flexSideBar, {
            transform: [{
              scale: 1
            }]
          }),
          xl: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, flexSideBar, {
            transform: [{
              scale: 1
            }]
          }),
          xxl: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, flexSideBar, {
            transform: [{
              scale: 1
            }]
          })
        }, obs.width),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: undefined
      }, __jsx(SideBar, {
        navigation: ref.current,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: undefined
      })), obs.opened && __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_3__["TouchableOpacity"], {
        onPress: () => {
          obs.opened = false;
        },
        style: Object(_ui_Style__WEBPACK_IMPORTED_MODULE_4__["Responsive"])({
          xs: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, overlay),
          sm: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, overlay),
          md: {},
          lg: {},
          xl: {},
          xxl: {}
        }, obs.width),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: undefined
      }), __jsx(Container, {
        ref: ref,
        parentNavigation: props.navigation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: undefined
      }));
    });
  } else {
    return () => {
      return __jsx(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: undefined
      });
    };
  }
});

/***/ }),

/***/ "./libs/nav/StackNav.tsx":
/*!*******************************!*\
  !*** ./libs/nav/StackNav.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavContainer */ "./libs/nav/NavContainer.tsx");

var _jsxFileName = "/Users/riz/Documents/edumatis-web/libs/nav/StackNav.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = ((data, config = {}, isRoot = false) => {
  const Container = Object(_NavContainer__WEBPACK_IMPORTED_MODULE_2__["default"])(data);
  return props => {
    return __jsx(Container, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      parentNavigation: props.navigation,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: undefined
    }));
  };
});

/***/ }),

/***/ "./libs/queries/crud/createRecord.ts":
/*!*******************************************!*\
  !*** ./libs/queries/crud/createRecord.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./libs/config.ts");
/* harmony import */ var _user_checkSession__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/checkSession */ "./libs/queries/user/checkSession.ts");




/* harmony default export */ __webpack_exports__["default"] = (async (table, data, options) => {
  const opt = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, {
    useSession: true,
    debug: false,
    primaryKey: "id"
  }, options);

  const gql = `mutation create($data:${table}_insert_input!) {
    insert_${table}(
      objects: [$data]
    ) {
      returning {
        ${opt.primaryKey}
      }
    }
  }`;

  if (opt && opt.debug) {
    console.log(gql, data);
  }

  let headers = {
    "Content-Type": "application/json"
  };

  if (opt.useSession) {
    const session = await Object(_user_checkSession__WEBPACK_IMPORTED_MODULE_3__["checkSession"])();
    headers["X-Hasura-Session-Id"] = session.id;

    if (!session) {
      return false;
    }
  }

  const postData = {};

  for (let i in data) {
    if (i.endsWith("_aggregate")) {
      continue;
    }

    postData[i] = data[i];
  }

  const response = await fetch(_config__WEBPACK_IMPORTED_MODULE_2__["default"].url, {
    method: "POST",
    body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
      operationName: "create",
      query: gql,
      variables: {
        data: postData
      }
    }),
    headers
  });
  const json = await response.json();

  if (response.status !== 200) {
    if (json && json.errors && json.errors[0] && json.errors[0].message) {
      throw `
(Create Record Failed) ${json.errors[0].message} 

GraphQL Mutation:
${gql}

Data: 
${_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data, null, 2).replace(/"/gi, "'")}
        `.trim();
    }

    return null;
  }

  return json.data[`insert_${table}`].returning[0].id;
});

/***/ }),

/***/ "./libs/queries/crud/deleteRecord.ts":
/*!*******************************************!*\
  !*** ./libs/queries/crud/deleteRecord.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./libs/config.ts");
/* harmony import */ var _user_checkSession__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/checkSession */ "./libs/queries/user/checkSession.ts");




/* harmony default export */ __webpack_exports__["default"] = (async (table, data, options) => {
  const opt = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, {
    useSession: true,
    debug: false,
    primaryKey: "id"
  }, options);

  const pk = typeof data[opt.primaryKey] === "string" ? `"${data[opt.primaryKey]}"` : data[opt.primaryKey];
  const gql = `mutation delete {
    delete_${table}(
      where: {${opt.primaryKey}: {_eq: ${pk}}},
    ) {
      affected_rows
    }
  }`;
  let headers = {
    "Content-Type": "application/json"
  };

  if (opt.useSession) {
    const session = await Object(_user_checkSession__WEBPACK_IMPORTED_MODULE_3__["checkSession"])();
    headers["X-Hasura-Session-Id"] = session.id;

    if (!session) {
      return false;
    }
  }

  const response = await fetch(_config__WEBPACK_IMPORTED_MODULE_2__["default"].url, {
    method: "POST",
    body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
      operationName: "delete",
      query: gql
    }),
    headers
  });
  const json = await response.json();

  if (response.status !== 200) {
    if (json && json.errors && json.errors[0] && json.errors[0].message) {
      throw `
(Create Record Failed) ${json.errors[0].message} 

GraphQL Mutation:
${gql}

Data: 
${_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data, null, 2).replace(/"/gi, "'")}
        `.trim();
    }

    return null;
  }

  return json;
});

/***/ }),

/***/ "./libs/queries/crud/query.ts":
/*!************************************!*\
  !*** ./libs/queries/crud/query.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./libs/config.ts");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_4__);





/* harmony default export */ __webpack_exports__["default"] = (async (table, columns, options) => {
  const opt = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, {
    useSession: true,
    debug: false,
    where: {},
    args: "limit:1"
  }, options);

  const where = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(opt.where).map(w => {
    return `${w}: {_eq: ${_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(opt.where[w])}}`;
  });

  if (where.length > 0) {
    where[0] = ",where:{" + where[0];
    where[where.length - 1] = where[where.length - 1] + "}";
  }

  let tableArgs = `${opt.args || ''} ${where.join(",")}`.trim();

  if (tableArgs.length > 0) {
    tableArgs = `(${tableArgs})`;
  }

  const gql = `
    {
        ${table}${tableArgs} 
        ${typeof columns === "string" ? columns : "{" + columns.join("\n") + "}"}
        
    }`;

  if (opt.debug) {
    console.log(gql);
  }

  let headers = {
    "Content-Type": "application/json"
  };

  if (opt.useSession) {
    const sessionRaw = await react_native_web__WEBPACK_IMPORTED_MODULE_4__["AsyncStorage"].getItem("SESSION");
    const session = JSON.parse(sessionRaw || "false");

    if (!session) {
      return false;
    } else {
      headers["X-Hasura-Session-Id"] = session.id;
    }
  }

  const response = await fetch(_config__WEBPACK_IMPORTED_MODULE_3__["default"].url, {
    method: "POST",
    body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
      query: gql
    }),
    headers
  });
  const json = await response.json();

  if (response.status !== 200) {
    if (json && json.errors && json.errors[0] && json.errors[0].message) {
      throw `
  (Query Record Failed) ${json.errors[0].message} 
  
  GraphQL Query: ${gql}
  
  `;
    }

    return null;
  }

  if (typeof columns !== "string") {
    return json.data[table][0];
  } else {
    return json.data[table];
  }
});

/***/ }),

/***/ "./libs/queries/crud/rawQuery.ts":
/*!***************************************!*\
  !*** ./libs/queries/crud/rawQuery.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./libs/config.ts");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (async (query, options) => {
  const opt = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, {
    useSession: true,
    debug: false,
    where: {},
    args: "limit:1"
  }, options);

  let headers = {
    "Content-Type": "application/json"
  };

  if (opt.useSession) {
    const sessionRaw = await react_native_web__WEBPACK_IMPORTED_MODULE_3__["AsyncStorage"].getItem("SESSION");
    const session = JSON.parse(sessionRaw || "false");

    if (!session) {
      return false;
    } else {
      headers["X-Hasura-Session-Id"] = session.id;
    }
  }

  const response = await fetch(_config__WEBPACK_IMPORTED_MODULE_2__["default"].url, {
    method: "POST",
    body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
      query
    }),
    headers
  });
  const json = await response.json();
  return json.data;
});

/***/ }),

/***/ "./libs/queries/crud/streamQuery.ts":
/*!******************************************!*\
  !*** ./libs/queries/crud/streamQuery.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./libs/config.ts");




/* harmony default export */ __webpack_exports__["default"] = (async (query, wsCallback, options) => {
  const opt = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, {
    useSession: true,
    debug: false
  }, options);

  let headers = {
    "Content-Type": "application/json"
  };

  if (opt.useSession) {
    const sessionRaw = await react_native_web__WEBPACK_IMPORTED_MODULE_2__["AsyncStorage"].getItem("SESSION");
    const session = JSON.parse(sessionRaw || "false");

    if (!session) {
      return false;
    } else {
      headers["X-Hasura-Session-Id"] = session.id;
    }
  }

  const ws = new WebSocket(_config__WEBPACK_IMPORTED_MODULE_3__["default"].wsurl);

  ws.onopen = async () => {
    ws.send(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
      type: "connection_init",
      payload: {
        headers
      }
    }));
    ws.send(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
      id: "1",
      type: "start",
      payload: {
        variables: {},
        extensions: {},
        operationName: null,
        query
      }
    }));
  };

  ws.onmessage = e => {
    try {
      const data = JSON.parse(e.data);

      if (data.type === "data" || data.type === "error") {
        wsCallback(data);

        if (data.type === "error") {
          console.log(query, data);
        }
      }
    } catch (err) {}
  };

  ws.onerror = e => {// an error occurred
  };

  ws.onclose = e => {// connection closed
  };

  return ws;
});

/***/ }),

/***/ "./libs/queries/crud/updateRecord.ts":
/*!*******************************************!*\
  !*** ./libs/queries/crud/updateRecord.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./libs/config.ts");
/* harmony import */ var _user_checkSession__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/checkSession */ "./libs/queries/user/checkSession.ts");




/* harmony default export */ __webpack_exports__["default"] = (async (table, data, options) => {
  const opt = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, {
    useSession: true,
    debug: false,
    primaryKey: "id"
  }, options);

  const postData = {};

  for (let i in data) {
    if (i === opt.primaryKey || i.endsWith("_aggregate")) {
      continue;
    }

    postData[i] = data[i];
  }

  const gql = `mutation update($data:${table}_set_input!) {
    update_${table}(
      where: {${opt.primaryKey}: {_eq: "${data[opt.primaryKey]}"}},
      _set: $data
    ) {
      returning {
        ${opt.primaryKey}
      }
    }
  }`;

  if (opt && opt.debug) {
    console.log(gql, data);
  }

  let headers = {
    "Content-Type": "application/json"
  };

  if (opt.useSession) {
    const session = await Object(_user_checkSession__WEBPACK_IMPORTED_MODULE_3__["checkSession"])();
    headers["X-Hasura-Session-Id"] = session.id;

    if (!session) {
      return false;
    }
  }

  const response = await fetch(_config__WEBPACK_IMPORTED_MODULE_2__["default"].url, {
    method: "POST",
    body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
      operationName: "update",
      query: gql,
      variables: {
        data: postData
      }
    }),
    headers
  });
  const json = await response.json();

  if (response.status !== 200) {
    if (json && json.errors && json.errors[0] && json.errors[0].message) {
      throw `
(Update Record Failed) ${json.errors[0].message} 

GraphQL Mutation:
${gql}

Data: 
${_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data, null, 2).replace(/"/gi, "'")}
        `.trim();
    }

    return null;
  }

  return json;
});

/***/ }),

/***/ "./libs/queries/user/checkSession.ts":
/*!*******************************************!*\
  !*** ./libs/queries/user/checkSession.ts ***!
  \*******************************************/
/*! exports provided: checkSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkSession", function() { return checkSession; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./libs/config.ts");
/* harmony import */ var _getsetSession__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getsetSession */ "./libs/queries/user/getsetSession.ts");




const get = __webpack_require__(/*! lodash.get */ "lodash.get");

const checkSession = async () => {
  const session = await Object(_getsetSession__WEBPACK_IMPORTED_MODULE_2__["getSession"])();
  if (!session) return null;

  try {
    const response = await fetch(_config__WEBPACK_IMPORTED_MODULE_1__["default"].url, {
      method: "POST",
      body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
        query: `{
          session(where:{id:{_eq:"${session.id}"}}) {
            id
            ${_config__WEBPACK_IMPORTED_MODULE_1__["default"].table} {
              ${_config__WEBPACK_IMPORTED_MODULE_1__["default"].user.columns.join("\n")}
            }
          }
        }`
      }),
      headers: {
        "Content-Type": "application/json",
        "X-Hasura-Session-Id": session.id
      }
    });
    const res = await response.json();
    return get(res, `data.session[0]`);
  } catch (e) {
    return session;
  }
};

/***/ }),

/***/ "./libs/queries/user/getsetSession.ts":
/*!********************************************!*\
  !*** ./libs/queries/user/getsetSession.ts ***!
  \********************************************/
/*! exports provided: setSession, getSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSession", function() { return setSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSession", function() { return getSession; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _crud_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../crud/query */ "./libs/queries/crud/query.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./libs/config.ts");




async function setSession(value) {
  try {
    await react_native_web__WEBPACK_IMPORTED_MODULE_1__["AsyncStorage"].setItem("SESSION", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(value));
  } catch (error) {
    return;
  }
}
async function getSession(loadFromCache = true) {
  try {
    const sessionRaw = await react_native_web__WEBPACK_IMPORTED_MODULE_1__["AsyncStorage"].getItem("SESSION");

    if (sessionRaw !== null) {
      let session = JSON.parse(sessionRaw);

      if (loadFromCache === false) {
        session.user = await Object(_crud_query__WEBPACK_IMPORTED_MODULE_2__["default"])("user", [..._config__WEBPACK_IMPORTED_MODULE_3__["default"].user.columns], {
          where: {
            username: session.user.username
          }
        });
        setSession(session);
      }

      return session;
    }

    return null;
  } catch (error) {
    return null;
  }
}

/***/ }),

/***/ "./libs/queries/user/hashPassword.ts":
/*!*******************************************!*\
  !*** ./libs/queries/user/hashPassword.ts ***!
  \*******************************************/
/*! exports provided: hashPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hashPassword", function() { return hashPassword; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./libs/config.ts");


const hashPassword = async user_id => {
  let res = await fetch(_config__WEBPACK_IMPORTED_MODULE_1__["default"].url, {
    method: "POST",
    body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
      query: `{
          session(limit:1) {
            id
          }
        }`
    }),
    headers: {
      "Content-Type": "application/json",
      "X-Hasura-ChangePass-Uid": user_id
    }
  });
};

/***/ }),

/***/ "./libs/queries/user/login.ts":
/*!************************************!*\
  !*** ./libs/queries/user/login.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./libs/config.ts");



const get = __webpack_require__(/*! lodash.get */ "lodash.get");

/* harmony default export */ __webpack_exports__["default"] = (async (client_id, username = "", password = "") => {
  const query = `query ($u: String!, $c: Int!) {
    ${_config__WEBPACK_IMPORTED_MODULE_1__["default"].table}(where: {_and: {${_config__WEBPACK_IMPORTED_MODULE_1__["default"].identifier.client_id}: {_eq: $c}, ${_config__WEBPACK_IMPORTED_MODULE_1__["default"].identifier.username}: {_eq: $u}}}) {
      sessions(limit: 1, order_by: {tstamp: desc}) {
        id
        ${_config__WEBPACK_IMPORTED_MODULE_1__["default"].table} {
          ${_config__WEBPACK_IMPORTED_MODULE_1__["default"].user.columns.join("\n")}
        }
      }
    }
  }`;
  const response = await fetch(_config__WEBPACK_IMPORTED_MODULE_1__["default"].url, {
    method: "POST",
    body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
      query,
      variables: {
        u: username,
        c: client_id
      }
    }),
    headers: {
      "Content-Type": "application/json",
      "X-Hasura-Username": username,
      "X-Hasura-Password": password,
      "X-Hasura-Cid": client_id
    }
  });
  const res = await response.json();
  return get(res, `data.${_config__WEBPACK_IMPORTED_MODULE_1__["default"].table}[0].sessions[0]`);
});

/***/ }),

/***/ "./libs/stores/RootStore.ts":
/*!**********************************!*\
  !*** ./libs/stores/RootStore.ts ***!
  \**********************************/
/*! exports provided: RootStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootStore", function() { return RootStore; });
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-state-tree */ "mobx-state-tree");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Session */ "./libs/stores/Session.ts");


const Root = mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].model("RootStore", {
  session: _Session__WEBPACK_IMPORTED_MODULE_1__["SessionRecord"]
});
const RootStore = Root.create({
  session: {
    user: {}
  }
});

/***/ }),

/***/ "./libs/stores/Session.ts":
/*!********************************!*\
  !*** ./libs/stores/Session.ts ***!
  \********************************/
/*! exports provided: SessionRecord, SessionList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionRecord", function() { return SessionRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionList", function() { return SessionList; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _queries_user_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../queries/user/login */ "./libs/queries/user/login.ts");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-state-tree */ "mobx-state-tree");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_AsyncStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/AsyncStorage */ "./libs/utils/AsyncStorage.ts");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./User */ "./libs/stores/User.ts");
/* harmony import */ var _utils_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/List */ "./libs/utils/List.ts");
/* harmony import */ var _utils_Record__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/Record */ "./libs/utils/Record.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config */ "./libs/config.ts");
/* harmony import */ var _queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../queries/crud/rawQuery */ "./libs/queries/crud/rawQuery.ts");









const SessionRecord = Object(_utils_Record__WEBPACK_IMPORTED_MODULE_6__["default"])({
  tableName: 'session',
  columns: {
    id: mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["types"].maybe(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["types"].string),
    client_id: mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["types"].maybe(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["types"].integer),
    user: _User__WEBPACK_IMPORTED_MODULE_4__["UserRecord"]
  },
  actions: self => ({
    login: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["flow"])(function* (client_id, username, password) {
      try {
        const response = yield Object(_queries_user_login__WEBPACK_IMPORTED_MODULE_1__["default"])(client_id, username, password);
        yield _utils_AsyncStorage__WEBPACK_IMPORTED_MODULE_3__["default"].setItem('SESSION', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(response));
        const result = yield Object(_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_8__["default"])(`{
          kelas_murid(where: {murid_id: {_eq: ${response.murid.id}}}) {
            kelas {
              sekolah {
                id
                margin
                nama_sekolah
              }
              nama_kelas
              id
            }
          }
        }`);

        if (result) {
          response.kelas = {
            id: result.kelas_murid[0].kelas.id,
            nama: result.kelas_murid[0].kelas.nama_kelas
          };
          response.sekolah = {
            id: result.kelas_murid[0].kelas.sekolah.id,
            margin: result.kelas_murid[0].kelas.sekolah.margin,
            nama: result.kelas_murid[0].kelas.sekolah.nama_sekolah
          };
        }

        yield _utils_AsyncStorage__WEBPACK_IMPORTED_MODULE_3__["default"].setItem('SESSION', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(response));
        return response;
      } catch (e) {
        console.warn(e);
        return false;
      }
    }),
    restore: function (session) {
      self.id = session.id;
      self[_config__WEBPACK_IMPORTED_MODULE_7__["default"].table + '_id'] = session[_config__WEBPACK_IMPORTED_MODULE_7__["default"].table + '_id'];
      self[_config__WEBPACK_IMPORTED_MODULE_7__["default"].table] = session[_config__WEBPACK_IMPORTED_MODULE_7__["default"].table];
    },
    logout: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_2__["flow"])(function* () {
      yield _utils_AsyncStorage__WEBPACK_IMPORTED_MODULE_3__["default"].removeItem('SESSION');
      self.id = null;
      self[_config__WEBPACK_IMPORTED_MODULE_7__["default"].table + '_id'] = null;
      self[_config__WEBPACK_IMPORTED_MODULE_7__["default"].table] = null;
    })
  })
});
const SessionList = Object(_utils_List__WEBPACK_IMPORTED_MODULE_5__["default"])({
  record: SessionRecord,
  query: `{
    id
    user_id
  }`
});

/***/ }),

/***/ "./libs/stores/User.ts":
/*!*****************************!*\
  !*** ./libs/stores/User.ts ***!
  \*****************************/
/*! exports provided: UserRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRecord", function() { return UserRecord; });
/* harmony import */ var _utils_Record__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Record */ "./libs/utils/Record.ts");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-state-tree */ "mobx-state-tree");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__);


const UserRecord = Object(_utils_Record__WEBPACK_IMPORTED_MODULE_0__["default"])({
  tableName: "user",
  columns: {
    id: mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].integer, 0),
    username: mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].string, ""),
    password: mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].maybeNull(mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].string),
    role: mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].string, "sales"),
    sekolah_id: mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].integer, 0),
    status: mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_1__["types"].string, "active")
  }
});

/***/ }),

/***/ "./libs/ui/Style.tsx":
/*!***************************!*\
  !*** ./libs/ui/Style.tsx ***!
  \***************************/
/*! exports provided: ResponsiveHandler, Responsive, S, St */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveHandler", function() { return ResponsiveHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Responsive", function() { return Responsive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "St", function() { return St; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_2__);



const inputSpacing = 12;
const fontSize = 14;
const ResponsiveHandler = obs => {
  const handler = () => {
    obs.width = react_native_web__WEBPACK_IMPORTED_MODULE_2__["Dimensions"].get('window').width;
  };

  return () => {
    react_native_web__WEBPACK_IMPORTED_MODULE_2__["Dimensions"].addEventListener('change', handler);
    handler();
    return () => {
      react_native_web__WEBPACK_IMPORTED_MODULE_2__["Dimensions"].removeEventListener('change', handler);
    };
  };
};
const Responsive = (style, width) => {
  const styleKeys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(style);

  const firstKey = styleKeys[0];
  const first = style[firstKey];

  if (width <= 410) {
    return style.xs || first;
  } else if (width >= 411 && width <= 567) {
    return style.sm || style.xs || first;
  } else if (width >= 568 && width <= 767) {
    return style.md || style.sm || style.xs || first;
  } else if (width >= 768 && width <= 1023) {
    return style.lg || style.md || style.sm || style.xs || first;
  } else if (width >= 1024 && width <= 1279) {
    return style.xl || style.lg || style.md || style.sm || style.xs || first;
  } else if (width >= 1280) {
    return style.xxl || style.xl || style.lg || style.md || style.sm || style.xs || first;
  }

  return first;
};
const S = (...style) => {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, react_native_web__WEBPACK_IMPORTED_MODULE_2__["StyleSheet"].flatten(style));
};
const St = react_native_web__WEBPACK_IMPORTED_MODULE_2__["StyleSheet"].create({
  Field: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#C4C4C4',
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#fff'
  },
  FieldActive: {
    borderColor: '#bf151c'
  },
  Label: {
    position: 'absolute',
    top: 6,
    fontSize: 13,
    color: '#666'
  },
  SubLabel: {
    fontSize: 12,
    color: '#999'
  },
  LabelFocus: {
    position: 'absolute',
    fontSize: 13,
    left: -4,
    transform: [{
      translateY: -17
    }, {
      scaleY: 1
    }],
    backgroundColor: '#fff',
    color: '#666',
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 5
  },
  LabelActive: {
    color: '#bf151c'
  },
  TextInput: {
    fontSize: 14,
    lineHeight: 30,
    outline: 'none'
  },
  Button: {
    shadowColor: '#bf151c',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  ButtonLabel: {
    fontSize: fontSize,
    padding: 8,
    paddingLeft: 8,
    paddingRight: 8
  },
  ButtonLabelSmall: {
    fontSize: 12,
    padding: 5,
    paddingLeft: 8,
    paddingRight: 8
  },
  ButtonLabelLarge: {
    fontSize: 18,
    padding: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  ButtonLabelSolid: {
    color: '#fff'
  },
  ButtonLabelClear: {
    color: '#bf151c'
  },
  ButtonBlock: {
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 5
  },
  ButtonFull: {
    width: '100%'
  },
  ButtonSolid: {
    backgroundColor: '#bf151c'
  },
  ButtonClear: {
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0
  },
  ButtonOutline: {
    borderColor: '#bf151c',
    borderWidth: 1
  },
  Select2: {
    paddingTop: 15,
    paddingBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center'
  },
  SelectHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#ccc'
  },
  SelectList: {},
  SelectItem: {
    margin: 0,
    borderRadius: 0,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#ccc',
    elevation: 0
  },
  SelectItemLabel: {
    color: '#bf151c',
    fontSize: 18
  },
  LabelHidden: {
    display: 'none'
  },
  SelectLabel: {
    width: '100%',
    marginRight: -15,
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontSize: 16,
    paddingLeft: 5,
    paddingRight: 5
  },
  SelectLabelActive: {
    color: '#000'
  },
  SelectIcon: {
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  Modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000090',
    height: '100%'
  },
  ModalView: {
    display: 'flex',
    height: '50%',
    width: '95%',
    backgroundColor: '#fff',
    flexDirection: 'column',
    borderRadius: 10
  },
  ModalHeader: {
    paddingLeft: 15,
    paddingRight: 15,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ModalContent: {
    paddingBottom: 10,
    height: '80%'
  },
  ModalFooter: {
    paddingLeft: 10,
    paddingRight: 10,
    height: '20%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row'
  },
  Card: {
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    minHeight: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  Row: {
    flexDirection: 'row'
  },
  Col1: {
    paddingRight: inputSpacing,
    flexGrow: 0,
    flexBasis: Math.round(100 / inputSpacing) + '%'
  },
  Col2: {
    paddingRight: inputSpacing,
    flexGrow: 0,
    flexBasis: Math.round(100 / inputSpacing * 2) + '%'
  },
  Col3: {
    paddingRight: inputSpacing,
    flexGrow: 0,
    flexBasis: Math.round(100 / inputSpacing * 3) + '%'
  },
  Col4: {
    paddingRight: inputSpacing,
    flexGrow: 0,
    flexBasis: Math.round(100 / inputSpacing * 4) + '%'
  },
  Col5: {
    paddingRight: inputSpacing,
    flexGrow: 0,
    flexBasis: Math.round(100 / inputSpacing * 5) + '%'
  },
  Col6: {
    paddingRight: inputSpacing,
    flexGrow: 0,
    flexBasis: Math.round(100 / inputSpacing * 6) + '%'
  },
  Col7: {
    paddingRight: inputSpacing,
    flexGrow: 0,
    flexBasis: Math.round(100 / inputSpacing * 7) + '%'
  },
  Col8: {
    paddingRight: inputSpacing,
    flexGrow: 0,
    flexBasis: Math.round(100 / inputSpacing * 8) + '%'
  },
  Col9: {
    paddingRight: inputSpacing,
    flexGrow: 0,
    flexBasis: Math.round(100 / inputSpacing * 9) + '%'
  },
  Col10: {
    paddingRight: inputSpacing,
    flexGrow: 0,
    flexBasis: Math.round(100 / inputSpacing * 10) + '%'
  },
  Col11: {
    paddingRight: inputSpacing,
    flexGrow: 0,
    flexBasis: Math.round(100 / inputSpacing * 11) + '%'
  },
  ColinputSpacing: {
    paddingRight: inputSpacing,
    flexGrow: 0,
    flexBasis: Math.round(100 / inputSpacing * inputSpacing) + '%'
  },
  Table: {
    flex: 1,
    padding: 16,
    paddingTop: 30
  },
  TableHead: {
    height: 50,
    backgroundColor: '#537791',
    fontWeight: '100'
  },
  TableRow: {
    height: 40,
    backgroundColor: '#fff',
    fontWeight: '80'
  },
  TableWrapper: {
    marginTop: -1
  }
});

/***/ }),

/***/ "./libs/ui/UIBody.tsx":
/*!****************************!*\
  !*** ./libs/ui/UIBody.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/riz/Documents/edumatis-web/libs/ui/UIBody.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (({
  children,
  style
}) => {
  let CustomTag = react_native_web__WEBPACK_IMPORTED_MODULE_2__["ScrollView"];
  let CustomStyle = {
    paddingVertical: 10,
    paddingHorizontal: 25
  };
  react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.forEach(children, (child, index) => {
    if (index === 0 && child.type.name === "UIList") {
      CustomTag = react_native_web__WEBPACK_IMPORTED_MODULE_2__["View"];
      CustomStyle = {};
    }
  });
  return __jsx(CustomTag, {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      flex: 1
    }, CustomStyle, style),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, children);
});

/***/ }),

/***/ "./libs/ui/UIButton.tsx":
/*!******************************!*\
  !*** ./libs/ui/UIButton.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Style */ "./libs/ui/Style.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/riz/Documents/edumatis-web/libs/ui/UIButton.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (({
  children,
  icon,
  iconMode = "start",
  expand = "block",
  fill = "solid",
  size,
  style,
  labelStyle,
  buttonProps = {},
  onPress
}) => {
  const btnExpand = "Button" + expand.charAt(0).toUpperCase() + expand.slice(1).toLowerCase();
  const btnFIll = "Button" + fill.charAt(0).toUpperCase() + fill.slice(1).toLowerCase();
  const labelClear = fill == "outline" || fill == "clear" ? "ButtonLabelClear" : "ButtonLabelSolid";
  style = Object(_Style__WEBPACK_IMPORTED_MODULE_1__["S"])(_Style__WEBPACK_IMPORTED_MODULE_1__["St"].Button, _Style__WEBPACK_IMPORTED_MODULE_1__["St"][btnExpand], _Style__WEBPACK_IMPORTED_MODULE_1__["St"][btnFIll], style);
  const defaultLabelStyle = Object(_Style__WEBPACK_IMPORTED_MODULE_1__["S"])(_Style__WEBPACK_IMPORTED_MODULE_1__["St"].ButtonLabel, _Style__WEBPACK_IMPORTED_MODULE_1__["St"][labelClear], size == "small" && _Style__WEBPACK_IMPORTED_MODULE_1__["St"].ButtonLabelSmall, size == "large" && _Style__WEBPACK_IMPORTED_MODULE_1__["St"].ButtonLabelLarge);

  if (children.length === 1 || typeof children === "string") {
    labelStyle = Object(_Style__WEBPACK_IMPORTED_MODULE_1__["S"])(defaultLabelStyle, labelStyle);
  }

  return __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_3__["TouchableOpacity"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    onPress: onPress
  }, buttonProps, {
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }), icon && iconMode == "start" && __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, icon), children.map && children.length > 1 ? __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_3__["View"], {
    style: Object(_Style__WEBPACK_IMPORTED_MODULE_1__["S"])(labelStyle, {
      paddingVertical: 10
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, children.map((C, i) => {
    if (typeof C !== "object") {
      if (typeof C === "string" && C.trim() === "") return null;
      return __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_3__["Text"], {
        key: i,
        style: Object(_Style__WEBPACK_IMPORTED_MODULE_1__["S"])(defaultLabelStyle, {
          paddingVertical: 1,
          marginVertical: 1,
          lineHeight: "auto"
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: undefined
      }, C);
    } else {
      return C;
    }
  })) : __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    style: labelStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, children), icon && iconMode == "end" && __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, icon));
});

/***/ }),

/***/ "./libs/ui/UICol.tsx":
/*!***************************!*\
  !*** ./libs/ui/UICol.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Style */ "./libs/ui/Style.tsx");
var _jsxFileName = "/Users/riz/Documents/edumatis-web/libs/ui/UICol.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const width = react_native_web__WEBPACK_IMPORTED_MODULE_1__["Dimensions"].get("window").width;
/* harmony default export */ __webpack_exports__["default"] = (({
  size = 12,
  children,
  sizexs,
  sizesm,
  sizemd,
  sizelg,
  sizexl,
  sizexxl
}) => {
  let current = size;

  if (width <= 410) {
    current = sizesm || size;
  } else if (width >= 411 && width <= 567) {
    current = sizesm || size;
  } else if (width >= 568 && width <= 767) {
    current = sizemd || size;
  } else if (width >= 768 && width <= 1023) {
    current = sizelg || size;
  } else if (width >= 1024 && width <= 1279) {
    current = sizexl || size;
  } else if (width >= 1280) {
    current = sizexxl || size;
  }

  return __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: {
      flexBasis: current / 12 * 100 + "%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, children && children.map && children.length > 1 ? children.map((C, i) => {
    if (typeof C !== "object") {
      if (typeof C === "string" && C.trim() === "") return null;
      return __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        key: i,
        style: Object(_Style__WEBPACK_IMPORTED_MODULE_2__["S"])({
          paddingVertical: 1,
          marginVertical: 1
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: undefined
      }, C);
    } else {
      return C;
    }
  }) : typeof children === "object" ? children : __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, children));
});

/***/ }),

/***/ "./libs/ui/UIContainer.tsx":
/*!*********************************!*\
  !*** ./libs/ui/UIContainer.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/riz/Documents/edumatis-web/libs/ui/UIContainer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (({
  children
}) => {
  return __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: {
      flex: 1,
      flexDirection: "column"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, children);
});

/***/ }),

/***/ "./libs/ui/UIField.tsx":
/*!*****************************!*\
  !*** ./libs/ui/UIField.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Style */ "./libs/ui/Style.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/riz/Documents/edumatis-web/libs/ui/UIField.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (({
  label,
  style,
  children
}) => {
  return __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_2__["View"], {
    style: Object(_Style__WEBPACK_IMPORTED_MODULE_0__["S"])(_Style__WEBPACK_IMPORTED_MODULE_0__["St"].Field, style),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, !!label && __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_2__["View"], {
    pointerEvents: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    style: Object(_Style__WEBPACK_IMPORTED_MODULE_0__["S"])(_Style__WEBPACK_IMPORTED_MODULE_0__["St"].LabelFocus),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, label)), children);
});

/***/ }),

/***/ "./libs/ui/UIFieldSelectNative.tsx":
/*!*****************************************!*\
  !*** ./libs/ui/UIFieldSelectNative.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Style */ "./libs/ui/Style.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/riz/Documents/edumatis-web/libs/ui/UIFieldSelectNative.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (({
  setValue,
  value,
  items,
  label,
  style,
  fieldActiveStyle,
  inputStyle = Object(_Style__WEBPACK_IMPORTED_MODULE_0__["S"])(_Style__WEBPACK_IMPORTED_MODULE_0__["St"].TextInput),
  inputProps
}) => {
  const {
    0: temp,
    1: setTemp
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: focused,
    1: setFocused
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const SLabel = !!value || !!temp ? _Style__WEBPACK_IMPORTED_MODULE_0__["St"].LabelFocus : _Style__WEBPACK_IMPORTED_MODULE_0__["St"].SelectLabel;
  return __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_2__["View"], {
    style: focused ? Object(_Style__WEBPACK_IMPORTED_MODULE_0__["S"])(Object(_Style__WEBPACK_IMPORTED_MODULE_0__["S"])(_Style__WEBPACK_IMPORTED_MODULE_0__["St"].Field, style), Object(_Style__WEBPACK_IMPORTED_MODULE_0__["S"])(_Style__WEBPACK_IMPORTED_MODULE_0__["St"].FieldActive, fieldActiveStyle)) : Object(_Style__WEBPACK_IMPORTED_MODULE_0__["S"])(_Style__WEBPACK_IMPORTED_MODULE_0__["St"].Field, style),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, !!label && __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    style: Object(_Style__WEBPACK_IMPORTED_MODULE_0__["S"])(_Style__WEBPACK_IMPORTED_MODULE_0__["St"].LabelFocus, {
      marginLeft: 10
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, label), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_2__["Picker"], {
    mode: "dialog",
    style: {
      marginVertical: 5
    },
    selectedValue: value || temp,
    onValueChange: (itemValue, itemIndex) => setValue != undefined ? setValue(itemValue) : setTemp(itemValue),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, items.map((item, index) => {
    if (typeof item === "string") return __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_2__["Picker"].Item, {
      key: index,
      label: item,
      value: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: undefined
    });
    return __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_2__["Picker"].Item, {
      key: index,
      label: item.label,
      value: item.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: undefined
    });
  })));
});

/***/ }),

/***/ "./libs/ui/UIFieldText.tsx":
/*!*********************************!*\
  !*** ./libs/ui/UIFieldText.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Style */ "./libs/ui/Style.tsx");

var _jsxFileName = "/Users/riz/Documents/edumatis-web/libs/ui/UIFieldText.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (({
  setValue,
  value = "",
  sublabel,
  label,
  style,
  fieldActiveStyle,
  inputStyle = Object(_Style__WEBPACK_IMPORTED_MODULE_3__["S"])(_Style__WEBPACK_IMPORTED_MODULE_3__["St"].TextInput),
  inputProps,
  onBlur,
  type = "string"
}) => {
  const {
    0: internalValue,
    1: setInternalValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(value);
  const {
    0: focused,
    1: setFocused
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const SLabel = !!value || !!internalValue ? _Style__WEBPACK_IMPORTED_MODULE_3__["St"].LabelFocus : _Style__WEBPACK_IMPORTED_MODULE_3__["St"].Label;
  return __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_2__["View"], {
    style: focused ? Object(_Style__WEBPACK_IMPORTED_MODULE_3__["S"])(_Style__WEBPACK_IMPORTED_MODULE_3__["St"].Field, _Style__WEBPACK_IMPORTED_MODULE_3__["St"].FieldActive, fieldActiveStyle, style) : Object(_Style__WEBPACK_IMPORTED_MODULE_3__["S"])(_Style__WEBPACK_IMPORTED_MODULE_3__["St"].Field, style),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, !!label && __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_2__["View"], {
    pointerEvents: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    style: focused ? Object(_Style__WEBPACK_IMPORTED_MODULE_3__["S"])(_Style__WEBPACK_IMPORTED_MODULE_3__["St"].LabelFocus, _Style__WEBPACK_IMPORTED_MODULE_3__["St"].LabelActive) : SLabel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, label)), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_2__["TextInput"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref,
    secureTextEntry: type === "password",
    onFocus: () => setFocused(true),
    onBlur: () => {
      setFocused(false);

      if (typeof onBlur === "function") {
        onBlur();
      }
    },
    style: inputStyle,
    onChangeText: text => {
      if (setValue != undefined) setValue(text);
      setInternalValue(text);
    },
    value: value.toString()
  }, inputProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  })), !!sublabel && __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    style: _Style__WEBPACK_IMPORTED_MODULE_3__["St"].SubLabel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, sublabel));
});

/***/ }),

/***/ "./libs/ui/UIHead.tsx":
/*!****************************!*\
  !*** ./libs/ui/UIHead.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UIImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UIImage */ "./libs/ui/UIImage.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Style */ "./libs/ui/Style.tsx");

var _jsxFileName = "/Users/riz/Documents/edumatis-web/libs/ui/UIHead.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__["observer"])(({
  title,
  children,
  onBack,
  navigation
}) => {
  const obs = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__["useObservable"])({});
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(Object(_Style__WEBPACK_IMPORTED_MODULE_5__["ResponsiveHandler"])(obs), []);
  const sideBtnStyle = {};
  const viewStyle = {
    paddingVertical: 15,
    paddingHorizontal: 25,
    flexBasis: 75,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  };
  return __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_2__["View"], {
    style: Object(_Style__WEBPACK_IMPORTED_MODULE_5__["Responsive"])({
      xs: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, viewStyle, {
        paddingRight: 0
      }),
      sm: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, viewStyle, {
        paddingRight: 0
      }),
      md: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, viewStyle),
      lg: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, viewStyle),
      xl: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, viewStyle),
      xxl: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, viewStyle)
    }, obs.width),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_2__["View"], {
    style: {
      flexDirection: "row",
      alignItems: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, navigation && !onBack && __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_2__["TouchableOpacity"], {
    style: Object(_Style__WEBPACK_IMPORTED_MODULE_5__["Responsive"])({
      xs: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sideBtnStyle),
      sm: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sideBtnStyle),
      md: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sideBtnStyle, {
        display: "none"
      }),
      lg: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sideBtnStyle, {
        display: "none"
      }),
      xl: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sideBtnStyle, {
        display: "none"
      }),
      xxl: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sideBtnStyle, {
        display: "none"
      })
    }, obs.width),
    onPress: () => {
      if (navigation.toggleDrawer) {
        navigation.toggleDrawer();
      } else {
        const parent = navigation.dangerouslyGetParent();

        if (parent.toggleDrawer) {
          parent.toggleDrawer();
        }
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx(_UIImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      width: 20,
      height: 20,
      marginLeft: -5,
      marginRight: 20
    },
    source: __webpack_require__(/*! ./imgs/line-menu.png */ "./libs/ui/imgs/line-menu.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  })), onBack && __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_2__["TouchableOpacity"], {
    style: {
      width: 20,
      height: 20,
      marginLeft: -10,
      marginRight: 10,
      marginTop: 3
    },
    onPress: onBack,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, __jsx(_UIImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      width: 20,
      height: 20
    },
    source: __webpack_require__(/*! ./imgs/back.png */ "./libs/ui/imgs/back.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  })), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    style: {
      fontSize: 22,
      color: "#555",
      flex: 1,
      flexWrap: "wrap"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, (title || "").trim())), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_2__["View"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, children));
}));

/***/ }),

/***/ "./libs/ui/UIImage.tsx":
/*!*****************************!*\
  !*** ./libs/ui/UIImage.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/riz/Documents/edumatis-web/libs/ui/UIImage.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (props => {
  const myprops = {
    src: props.source,
    style: props.style
  };
  return __jsx("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, myprops, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }));
});

/***/ }),

/***/ "./libs/ui/UIJson.tsx":
/*!****************************!*\
  !*** ./libs/ui/UIJson.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/riz/Documents/edumatis-web/libs/ui/UIJson.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (({
  data
}) => {
  return __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_2__["View"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data, null, 4).replace(/\{\}/gi, "")));
});

/***/ }),

/***/ "./libs/ui/UIList.tsx":
/*!****************************!*\
  !*** ./libs/ui/UIList.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UIButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UIButton */ "./libs/ui/UIButton.tsx");

var _jsxFileName = "/Users/riz/Documents/edumatis-web/libs/ui/UIList.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const UIList = props => {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (props.reload) props.reload();
  }, []);
  return __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_2__["ScrollView"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.style, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), props.loading && __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    style: {
      margin: 15
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "Loading..."), props.data.length === 0 ? !props.loading && __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_2__["View"], {
    style: {
      alignItems: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    style: {
      textAlign: "center",
      margin: 15
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "\u2014 Empty \u2014"), __jsx(_UIButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onPress: props.reload,
    size: "small",
    style: {
      width: 100
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "Refresh")) : __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_2__["FlatList"], {
    extraData: props.extraData,
    data: props.data,
    keyExtractor: (item, index) => {
      return index.toString();
    },
    refreshing: props.loading,
    onRefresh: props.reload,
    renderItem: data => {
      return props.render(data);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }));
};

UIList.defaultProps = {
  name: "UIList"
};
/* harmony default export */ __webpack_exports__["default"] = (UIList);

/***/ }),

/***/ "./libs/ui/UIListItem.tsx":
/*!********************************!*\
  !*** ./libs/ui/UIListItem.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/riz/Documents/edumatis-web/libs/ui/UIListItem.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const width = react_native_web__WEBPACK_IMPORTED_MODULE_2__["Dimensions"].get("window").width;
/* harmony default export */ __webpack_exports__["default"] = (props => {
  const style = width >= 568 ? {
    paddingHorizontal: 15
  } : {
    paddingHorizontal: 10
  };
  return __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_2__["View"], {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style, props.style, {
      borderBottomColor: "#ccc",
      borderBottomWidth: 1
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_2__["TouchableOpacity"], {
    style: {
      padding: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    },
    onPress: props.onPress,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, props.children));
});

/***/ }),

/***/ "./libs/ui/UIRow.tsx":
/*!***************************!*\
  !*** ./libs/ui/UIRow.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/riz/Documents/edumatis-web/libs/ui/UIRow.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (props => {
  return __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_2__["View"], {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.style, {
      flexDirection: "row",
      flexWrap: "wrap"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, props.children);
});

/***/ }),

/***/ "./libs/ui/UIWebView.tsx":
/*!*******************************!*\
  !*** ./libs/ui/UIWebView.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/riz/Documents/edumatis-web/libs/ui/UIWebView.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (props => {
  return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    dangerouslySetInnerHTML: {
      __html: props.source.html
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }));
});

/***/ }),

/***/ "./libs/ui/imgs/back.png":
/*!*******************************!*\
  !*** ./libs/ui/imgs/back.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./libs/ui/imgs/line-menu.png":
/*!************************************!*\
  !*** ./libs/ui/imgs/line-menu.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./libs/utils/AsyncStorage.ts":
/*!************************************!*\
  !*** ./libs/utils/AsyncStorage.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (react_native_web__WEBPACK_IMPORTED_MODULE_0__["AsyncStorage"]);

/***/ }),

/***/ "./libs/utils/GraphQL.ts":
/*!*******************************!*\
  !*** ./libs/utils/GraphQL.ts ***!
  \*******************************/
/*! exports provided: format, getUnique */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnique", function() { return getUnique; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./libs/config.ts");

function format(column, value) {
  if (_config__WEBPACK_IMPORTED_MODULE_0__["default"].identifierType[column] === "int") return value;else return `"${value}"`;
}
function getUnique(arr, comp) {
  const unique = arr.map(e => e[comp]) // store the keys of the unique objects
  .map((e, i, final) => final.indexOf(e) === i && i) // eliminate the dead keys & store unique objects
  .filter(e => arr[e]).map(e => arr[e]);
  return unique;
}

/***/ }),

/***/ "./libs/utils/List.ts":
/*!****************************!*\
  !*** ./libs/utils/List.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _queries_crud_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../queries/crud/query */ "./libs/queries/crud/query.ts");
/* harmony import */ var _queries_crud_streamQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../queries/crud/streamQuery */ "./libs/queries/crud/streamQuery.ts");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-state-tree */ "mobx-state-tree");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__);






/* harmony default export */ __webpack_exports__["default"] = (opt => {
  return mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].model({
    query: mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].string, opt.query || ""),
    loading: mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].boolean, false),
    list: mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["types"].array(opt.record)
  }).actions(self => {
    const meta = JSON.parse(opt.record.properties._meta._defaultValue);
    return {
      afterCreate: function () {
        if (opt.stream) {
          self.startStream();
        } else {
          self.requery();
        }
      },
      startStream: function () {
        const where = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(opt.where || {}).map(w => {
          return `${w}: {_eq: ${_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(opt.where[w])}}`;
        });

        if (where.length > 0) {
          where[0] = ",where:{" + where[0];
          where[where.length - 1] = where[where.length - 1] + "}";
        }

        let tableArgs = `${opt.args || ""} ${where.join(",")}`.trim();

        if (tableArgs.length > 0) {
          tableArgs = `(${tableArgs})`;
        }

        const record = JSON.parse(opt.record.properties._meta._defaultValue);
        const query = `subscription {
            ${record.tableName}${tableArgs} 
              ${opt.query} 
          }`;
        Object(_queries_crud_streamQuery__WEBPACK_IMPORTED_MODULE_3__["default"])(query, result => {
          if (result.type !== "error" && result.payload && result.payload.data && result.payload.data[record.tableName]) {
            self.setList(result.payload.data[record.tableName].map(item => {
              return opt.record.create(item);
            }));
          }
        });
      },
      requery: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["flow"])(function* () {
        let queryOpt = {};
        if (opt.where) queryOpt["where"] = opt.where;
        if (opt.args) queryOpt["args"] = opt.args;
        const result = yield Object(_queries_crud_query__WEBPACK_IMPORTED_MODULE_2__["default"])(meta.tableName, opt.query, queryOpt);
        self.list = (result || []).map(item => {
          return opt.record.create(item);
        });
      }),
      serverModify: function (list) {
        self.list = list;
      },
      localUpdate: function (criteria, data) {
        self.list.forEach(item => {
          let shouldUpdate = true;

          for (let i in criteria) {
            if (criteria[i] !== item[i]) {
              shouldUpdate = false;
              break;
            }
          }

          if (shouldUpdate) {
            for (let i in data) {
              item[i] = data[i];
            }
          }
        });
      },
      localDelete: function (criteria) {
        const newlist = [];
        self.list.forEach(item => {
          let shouldDelete = true;

          for (let i in criteria) {
            if (criteria[i] !== item[i]) {
              shouldDelete = false;
              break;
            }
          }

          if (!shouldDelete) {
            newlist.push(item);
          }
        });
        self.list = newlist;
      },
      setList: function (newList) {
        self.list = newList;
      },
      localSave: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["flow"])(function* () {
        self.loading = true;
        yield react_native_web__WEBPACK_IMPORTED_MODULE_4__["AsyncStorage"].setItem(meta.tableName, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(self.list));
        self.loading = false;
      }),
      localLoad: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_5__["flow"])(function* () {
        self.loading = true;
        const result = yield react_native_web__WEBPACK_IMPORTED_MODULE_4__["AsyncStorage"].getItem(meta.tableName);
        self.list = JSON.parse(result || "");
        self.loading = false;
      })
    };
  });
});

/***/ }),

/***/ "./libs/utils/Record.ts":
/*!******************************!*\
  !*** ./libs/utils/Record.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _queries_crud_createRecord__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../queries/crud/createRecord */ "./libs/queries/crud/createRecord.ts");
/* harmony import */ var _queries_crud_deleteRecord__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../queries/crud/deleteRecord */ "./libs/queries/crud/deleteRecord.ts");
/* harmony import */ var _queries_crud_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../queries/crud/query */ "./libs/queries/crud/query.ts");
/* harmony import */ var _queries_crud_updateRecord__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../queries/crud/updateRecord */ "./libs/queries/crud/updateRecord.ts");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mobx-state-tree */ "mobx-state-tree");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_8__);










/* harmony default export */ __webpack_exports__["default"] = (opt => {
  let primaryKey = !opt.primaryKey ? "id" : opt.primaryKey;
  let columns = {};

  for (let i in opt.columns) {
    const c = opt.columns[i];

    if (typeof c !== typeof mobx_state_tree__WEBPACK_IMPORTED_MODULE_8__["types"].maybeNull) {
      columns[i] = mobx_state_tree__WEBPACK_IMPORTED_MODULE_8__["types"].maybeNull(c);
    } else {
      columns[i] = c;
    }
  }

  const recordResult = mobx_state_tree__WEBPACK_IMPORTED_MODULE_8__["types"].model(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, columns, {
    _meta: mobx_state_tree__WEBPACK_IMPORTED_MODULE_8__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_8__["types"].string, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()({
      primaryKey: primaryKey,
      tableName: opt.tableName
    })),
    loading: mobx_state_tree__WEBPACK_IMPORTED_MODULE_8__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_8__["types"].boolean, false),
    errors: mobx_state_tree__WEBPACK_IMPORTED_MODULE_8__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_8__["types"].array(mobx_state_tree__WEBPACK_IMPORTED_MODULE_8__["types"].string), []),
    isSaved: mobx_state_tree__WEBPACK_IMPORTED_MODULE_8__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_8__["types"].boolean, false)
  })).views(self => ({
    get isNewRecord() {
      return !self[primaryKey];
    },

    get rawData() {
      const col = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(opt.columns);

      const result = {};
      col.forEach(key => {
        if (self[key] !== null) {
          result[key] = self[key];
        }
      });
      return result;
    }

  })).actions(self => {
    let actions = {};

    if (opt.actions) {
      actions = opt.actions(self);
    }

    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, actions, {
      set: function (key, value) {
        if (typeof key === "string") {
          self[key] = value;

          if (self[key] !== value) {
            self.isSaved = false;
          }
        } else {
          for (let i in key) {
            self[i] = key[i];
          }

          self.isSaved = false;
        }
      },
      save: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_8__["flow"])(function* () {
        self.validate();

        if (self.errors.length === 0) {
          if (self.isNewRecord) {
            self.set("loading", true);
            const id = yield Object(_queries_crud_createRecord__WEBPACK_IMPORTED_MODULE_4__["default"])(opt.tableName, self.rawData, {
              primaryKey
            });

            if (id) {
              self.set(primaryKey, id);
              self.set("isSaved", true);
            }

            self.set("loading", false);
          } else {
            yield Object(_queries_crud_updateRecord__WEBPACK_IMPORTED_MODULE_7__["default"])(opt.tableName, self.rawData, {
              primaryKey
            });
          }
        }
      }),
      validate: function () {
        if (opt.validations) {
          const validations = opt.validations;
          const errors = [];

          _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(validations).forEach(key => {
            if (validations[key] === "required") {
              if (self[key] === undefined || self[key] === null || self[key] === "") {
                errors.push(`${key} is required.`);
              }
            }
          });

          self.errors = errors;
        }
      },
      load: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_8__["flow"])(function* () {
        if (!self.isNewRecord) {
          yield self.find({
            [primaryKey]: self[primaryKey]
          });
        }
      }),
      find: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_8__["flow"])(function* (where, findopt) {
        self.set("loading", true);

        try {
          const columns = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(opt.columns).map(c => {
            if (Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_8__["isLateType"])(opt.columns[c]) || Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_8__["isUnionType"])(opt.columns[c])) {
              let query = ``;
              const col = opt.columns[c];
              if (col._subType) query = col._subType.properties.query._defaultValue;

              if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(col._types)) {
                col._types.forEach(e => {
                  if (Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_8__["isLateType"])(e)) {
                    if (e._subType) {
                      query = `{ ${e._subType.columns.join("\n")} }`;
                    }
                  }
                });
              }

              if (findopt && findopt.query && findopt.query[c]) {
                query = findopt.query[c];
              }

              if (query) {
                return `${c} ${query}`;
              } else {
                return ``;
              }
            }

            return c;
          });

          let record = (yield Object(_queries_crud_query__WEBPACK_IMPORTED_MODULE_6__["default"])(opt.tableName, columns, {
            where
          })) || {};

          for (let c in record) {
            const value = record[c];

            if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(value) && Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_8__["isLateType"])(opt.columns[c])) {
              self.set(c, {
                list: value,
                loading: false
              });
            } else {
              self.set(c, value);
            }
          }

          self.set("isSaved", true);
          self.set("loading", false);
        } catch (e) {
          self.set("loading", false);
          console.warn(e);
        }
      }),
      delete: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_8__["flow"])(function* () {
        try {
          const row = yield Object(_queries_crud_deleteRecord__WEBPACK_IMPORTED_MODULE_5__["default"])(opt.tableName, self.rawData, {
            primaryKey
          });

          _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(opt.columns).forEach(c => {
            if (self[c] !== null) {
              self.set(c, null);
            }
          });
        } catch (e) {}
      })
    });
  });
  recordResult.columns = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(columns);
  return recordResult;
});

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./pages/app/App.tsx":
/*!***************************!*\
  !*** ./pages/app/App.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_nav_StackNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../libs/nav/StackNav */ "./libs/nav/StackNav.tsx");
/* harmony import */ var _screens_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/Home */ "./pages/app/screens/Home.tsx");
/* harmony import */ var _screens_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screens/Login */ "./pages/app/screens/Login.tsx");
/* harmony import */ var _screens_siswa_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screens/siswa/Home */ "./pages/app/screens/siswa/Home.tsx");
/* harmony import */ var _screens_admin_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screens/admin/Home */ "./pages/app/screens/admin/Home.tsx");





/* harmony default export */ __webpack_exports__["default"] = (Object(_libs_nav_StackNav__WEBPACK_IMPORTED_MODULE_0__["default"])({
  Home: {
    screen: _screens_Home__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  Login: {
    screen: _screens_Login__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  Admin: {
    screen: _screens_admin_Home__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  Siswa: {
    screen: _screens_siswa_Home__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
}, {}, true));

/***/ }),

/***/ "./pages/app/imgs/kelas.png":
/*!**********************************!*\
  !*** ./pages/app/imgs/kelas.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/kelas-16d60aae64a6e22d1b2df293dac9b2f2.png";

/***/ }),

/***/ "./pages/app/imgs/kewajiban.png":
/*!**************************************!*\
  !*** ./pages/app/imgs/kewajiban.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./pages/app/imgs/logo-edumatis_a.png":
/*!********************************************!*\
  !*** ./pages/app/imgs/logo-edumatis_a.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-edumatis_a-22d319dc31fb34fa8c1506cb74c16a34.png";

/***/ }),

/***/ "./pages/app/imgs/logo-edumatis_b.png":
/*!********************************************!*\
  !*** ./pages/app/imgs/logo-edumatis_b.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-edumatis_b-3047318ec0021d2247804b38306bf6cc.png";

/***/ }),

/***/ "./pages/app/imgs/logout.png":
/*!***********************************!*\
  !*** ./pages/app/imgs/logout.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./pages/app/imgs/pengumuman.png":
/*!***************************************!*\
  !*** ./pages/app/imgs/pengumuman.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/pengumuman-a2ff39c764984d7902649e2c479ca11a.png";

/***/ }),

/***/ "./pages/app/imgs/plus.png":
/*!*********************************!*\
  !*** ./pages/app/imgs/plus.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./pages/app/imgs/print.png":
/*!**********************************!*\
  !*** ./pages/app/imgs/print.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./pages/app/imgs/share.png":
/*!**********************************!*\
  !*** ./pages/app/imgs/share.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAAQMAAABmvDolAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAZQTFRFAAAAVFLk4TgmFAAAAAJ0Uk5TAP9bkSK1AAADNUlEQVR4nO3ZTY4bIRCGYaJI6WWO4KP4aOZoHKWOwJIFomP3z5j6Cuqz1BplM+ysfmYG3u7YMYTwM/7f+HMZLBREBhIDwkBmoDBQGWgMrBTEyyAxIAyQUstKSi0rKbWspNSyklJPEBlIDMhl4Jd6Ar/UE/ilnsAv9QR+qReIDCQGhAE3xAu4IV7ADfERcEu9gFtqA5GBxIAw4JXagFdqA16IDXghNuCF+BBEBhIDwoBTagdOqR04pXbglNqBE+IAkYF0GQgD81IHmJc6wLzUAealDjAvdYLIQGJAGJiGOME0hAvWboxKPXowKPV3VcNc/6Wv21LwC2wpuG5KLQiw1B0BhsDrGML8BQxxY+BhgC6FlV5DlbJTgFJ2ClBqMAVVajQFVer3CPSl8E5uow9xH4E+xGiOfYjhHHswnGNfajjHvtRtDN6lxovoSo2vv0tNFvEuNVnEu9ToYdjGGWKyyneI+wycIR4zcIaYXT/BbJVfpaarPEtNV3mWmq7yLHWbg+hnOEs95kD8DEeIeYYjhAeq3+kA805HKafTXurGwP0KaCTkvgrvLxTSaUvtAiEht9vthdweGBew0o2VpqCy0oWVzgwIuxWJgchuBXvo20cPvQcK+1dBQWY3UxhI7GZGBtgbVGOgsnewwkC+/B6YPgLe4xAZCAQ08mlzdHJAYWDv5DxQwkBiYMvAP/EuAPqhenws38yPwfeLm/kp+AqjQb9wGQDpwd5JPfVNpYsW6LbBgGPh8GWwA6JAtSAMwePretGgGJA0yAYEDQRBAZAQCICIIAAIACqAr/+tnr8gA6gIEoCCIADIACoCAZAZSAgSgIAgalANCBpkBA2AIKgAIgL8ZhEQZA2qAaJBNiBpIAZEDRIDwYCgQDOgaVAMqBpkA4oGYkDWIBogGgQDkgLNgqhAsSAokA1oGggDyYCqQTSgaBAMyArgng+cHdjdFDiesPsxcMAx3NEJCiQDmgbRgKpBMEBN2+5swVGR3RtDYHbX4DTKbuDBeZbdAoQTMbs1BoduA6DXZXff4ODP7t/B0aHdAYTDR7uHuIh6aXch4QDUbnQCEAuiepks0C+jAfSc92d8z/gHbCf7NUBeIQYAAAAASUVORK5CYII="

/***/ }),

/***/ "./pages/app/imgs/shield.png":
/*!***********************************!*\
  !*** ./pages/app/imgs/shield.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC0FBMVEUAAAAAAP9UU+VUU+VVVf9UU+VUUeRAQP9VVdVUU+RVUuNgYN9dXehVUuVUUuROTutaS+FUUuRVUuRRUeRXUOJTUuRUUuRVVeVSUuVUUuRUUuRUVONTU+VUUuRVUuRUUuOAgP9bSe1UU+NUUuVXUeZUUeNTUuRTU+NUUeRUUuRUUuRUUuNTUuRNTeZUU+RUU+RTU+NVU+RUUuRVU+NVVd9UUuRUUeNSUuRUUeRUUuRRUehUUuRZTeZUUuRUU+RVUORUUuRUU+RVUONQUN9UUuRUUuRTUuRVVd1VUuVUUuRUUuRTU+RTU+VUUuRTU+NUUuRUVOZTU+FUUuRUU+RVVedTU+VUU+RSUuRVUeZVUuRTU+VmZsxTU+RVUuRTU+NYTuJUUeNTUuRUUuVSUuZUUuRVUuRUUuVUUuRTUuRVU+VXUeRTU+FVVeZUUuVUUeNVU+RYT+VVUOZTUuRUUuRUUuRTUeVUUuVUUuRUU+RUUuRTUeNUU+NUUuRVUeNVVeNRUeRTU+NUUuRUU+NUUuRTUeNVVedVVeNUVORVUuNUUuNVU+RUUuNTUuNVUuRUUuVUUuRUUuRUUuRVU+RVU+VUUeVVU+NUUuVUUuRUUuRUUuRUUuRTUeRUUuRUUuRUUuRUUuVUUuRUUuRUUeNTUuRUUuVVUuRVUuRUUuRUUuRUUuRUUuRVUuRUUuRUUuRUUuRUUuRUUuRUUuRUUeNUUuNTUeRTUeVVUuRUUeRUU+RUUeVTU+NVUuVVUeVSUuZTU+JUUuVTUuNVVeNVUuRUUeVVUeRUUuVTUeRTUeNVUuRUVOZTU+ZJSdtVUuVUUuRUUeRVVepTUuRUUeNSUuJVUuRTUeRUUeNTU+JUUeRTUuVVU+VVT+NSUuJUUuRRUeJSUuBUUuRVUuRTU+ZUUuRUUuRUUeRVVehTUeRUUuRVUeNSUuRZTulUVOVVUuRVVeNUUuQAAAC0K0NiAAAA7nRSTlMAAYiRA5qgBAaqrwgLuL0NEcXKEyPW2ic76u1AYvlggAIOsK4p1dkuXvX3ZKIK0s8lZvNvGLS5HFXwFqsU6+4wxsw2EPz9mQ9j6OZfRNE3wD0r/q0qMbM4PMRNBVbNUxp34ucf+7t/3dx+JiIeasJpHTOop+CHt++2hmWU8j8bL0pni/aKFSRDUW17iZyyy+Xkc3J1dHh2enl9goSFjI+SmJWdn6S1vsPIyc7T1+Pp7Pj08d5oa6yjl2FcTkUyNJuTEl1YQtSNbktGKAdX4bwM36Y+0JBSR6mlbC01uiwZ21RQofrYIXFwSEEXOscJq/IOcwAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjBQwVBQMgoTcgAAALEUlEQVR42uWdC2NUxRmGZ9kgRgETEoxBQxYoSmgILKEQBAKYBFrCzbVcIpYETIoSQEIAU6CI5R6BVESKVq2XtliKt5ZUWi02lra2tFzUVqtCL/RuO7+h2Swhu5vds+eb+b755sDzAzLv856zezbnzJkRghVfD7+PNwEvaT2lvKYXdwo+rk2X7Vx3PXcOLnr3kR30vYE7CQ8ZmfIS/bK4s3CQ3V9e5sYc7jTmuSlXRjHgZu48prklT8aQN5A7kVF8+bIb/gB3KnMMGiwTMOSquRh8ZqhMyK23cSczw7ACmYThn+XOZoDre0oHCkdw56Mmp0g6MnIUd0JSfMHRMgUFxVfwv4djPpdKP8zYcdw5qSgZ4MZfyvFB7qQk3D7EnX6YCRO506LjGzbJvb+UpcUB7sS4TJ4C0Q8z9Q7uzIiU+cuh/lJWTJvOnRuJtM9/Aa4fZkZlgDs7BjNnqemH6V/CnV6b2XPU9cNMmcttoMWd1+nptxO664vcFsrMK1T47utOxfwF3CZKLJyPYR+h6m5uGyiL7vkSnn6Yfou99ACpumYJrn6YpT3u5fZyR2Bmei2+fpiKupI0bruU5Hx5GY19hPvuX85t6MS44qoQpX4HQ/PruT0Ts2Llqgpy+w4q5jywmts2jrSG/Kn0xz6aZf6Zi7itO8keuKbUqPwlBjRW8n8Y6oOFaznkO1k6v6YhwKMeWH7PuvUPcsp3Utr0lZJRJlvwjbt5w8aqlPe3zbKpauOGr24mPuZjHtry8NeGFG3llk3O1qIh24JbHhqD8WhhUEbG9vr6HQ07d1Xubn5kz959LUS/7yio/fq+vXsead5duWtnw476+u0ZGYOA+o9yK+CzH1TAY9xx8TkAKuBx7rj4HAQV8A3uuPgcAhXwBHdcfJpBBeTrD2gb94MKeJI7Lj75oAK+yR0XnydBBazjjovPU6ACtnHHxWcdqICnuePisw1UwDPccfF5GlSAnzsuPs+ACtjIHRefb4EKeJY7Lj7PgQp4njsuPj1BBRRyx8XnBVABjdxx8fk2qIAJ3HHxWQMqYLD+gLZxF6iA73DHxWcvqICx3HHxaQIV8F3uuPjUgQo4zB0XnzmgAl7kjotPJqiAqdxx8fkeqACN+b22cgRUQH/9AW3j+6ACbuWOi89RUAGkc914uBFUAOu8FxqWgQp4iTsuPmtBBczgjovPS6ACXuaOi88MUAGvcMfF52VQAVbMf8PlFVABm7jj4vMgqIAC/QFtYxOogFe54+JTACrAQ3MC3fIqqACzc9+NUAvxD3CnJSAEKWARd1oKAld7AZAZ1GncYQkAfQQEd1oCykEFGHr/yyR5oAKuwN8Bw0EF5OkPaBuwX4IWvxajymhQAa9xx8VnPKiAH3DHxacUVMBVf0PE5bJnXgJ2SyxXf0DbWAoqQHHtJ5tpARVwBT4XWAIqwIonQyHU95NhT4Z+yC0f9j/WUIr45+4DFWDB/IBQqxDzEB/QwOYHHOHW7/BHbaAfqIBM/QEx/DEbWAUqoK8l/ogNjAUVwDxVtssfr4HBoAJ+ZI0/WgOw2eKvs/ofiw2DczW8BlTAcU7/1vg0kzHOAdhLU4xvjnb3x2kA9uos3/oBifxRGngcVECxXf4YDawEFfBjy/wRGvgJqIDFtvnrN/AGqIA3rfPXbgC2l9UdLP7HnEPdovXXfwoqIJvDv9U50zy9O7UrQAVMxzTb4+qf61TH/4TmrfreoAIwHw6+FSjr58Kf9vgDHw1i3hV9KyBE6gao/YG3BIUowvRP3QC5v5wKLADrzcmIf6oG6P1lH2AB6bj+zg0Y8Ae+PS/Ez1D8j0fNzGpLei2g/v7vALaGihCHMPy7jr/TOWDi+Ev5KLCAt9H9kzVgxl/+HFjASXz/9gb2sfnLucACcgj8EzVgyl9CV+HuTeHfvQFj/iHwBufjKfzjGzDmD5wgE+YXWuMdTzozOSvqahh6wDnDiVIsfzkLXIDWs6Fkxz/2HDB3/KHPhcLorCd33HFmeuc5YPD4S/lLcAG/0hgt3XlPoMg5YPL4Q+8Jh3lHZzgXDZj1l78GF/AbrfFSNmDYX2aDCzil98pAo/OWSFm/dR4d9fPfTq3Cjiy/0xsyXWdvMOzjD5whFeG05piN6ttiYR9/KdcrpNBeV1X5HEA//tAlZSNs0B5VsQECfzlQIccC/WGVGqDwlw0KQc4gvD+s0ACJf8UIlVPxLMLI4AZI/IFrCHWyF2NoYAM0/sDlNDt5CmVsUANE/sDNFTopwRn8nPvfA/jX/0vsUipgBdLors8BquMvZbVSAaLFbAN0/rCXRbpAW1zYVQN0/nKCYgEoT4fcNkDoD9xlqwuEhyOuG6D0l+8qFnADyt7prhog9S8/o1iA5q3xWByvhmTXvw7eU/UXz2HGcDgHSI+/lO8rF/B71BxJGyD2B84RjaYM8UsgeQPU/uVlygVgLzCdsAFqf+CS0rFgvzeRoAFyf+AeW7H8ATtMtwbo/eWbGgWMQF9X8IPYBgz45wHnyMbSFz3Ph9G/B2iv/xFO6/hrPSJNQtQ5YOD4S/lHrQLuJVhZ8XIDRvxDq7UKECMJMl1qwIg/eI5wPCTbz3Y0YMZfPqFZwGSSVO0NGPKXH2kWQLSYxgcfG/I/q+sv3qcJZmrBQvjcoHhmG0pKBOxdsYQc5XbQYai+v2jmltDhIEIBKzy8vmjFaoQCvLzx2icY/mxvkiPwNkoBZzy7vuZryvfDY9nDLaLKszj+4rxXF9u/DakAMYfbRA29WyHRLOZWUUP9eUA8aTYsLwjmrPpU1W7UcMuosB/PX2R48EpY0IZYgNjIrQNH/ZFoIi54brX14ZtRC/DeKYB7AnjvFMA+ATx3Cvix/T12CuCfAB47BfBPACGqURe6pmX0BYICvHRzELZ4oltO/Ynbyy3LwIsFuOPP3GJu+QuNvxCfcJu5oy+Vv7jTExtQlWs/D00O53LDroEtIAwjywN7j7RkEBYg3uDWSw3ZN2CEc9x+qfgrrb/1H4IZqPeBEmH5h0DtBTkQjdyOTrxO7y8mWvwhWJploABxEvctAkQqdOZFAyCZO4hBsxl/EejDbZqYOsRHQc60reV2TcSSiab8hZht4a60F28y5y/Efm7d7uw26S98a7h94/nQqL8Q11o2d2zVKcMFiLa/cTtHc5T8X4Du/N2iX4STdpj3F+KENZMGti7g8BfiHUt+E1cQ3wNJTiu3egT4cplo/IPbPcwhPn8rGqB5DOadBpj92Rtg92duwAJ/IQ6wzaUO/ZPbPULlRR7/2g3c5p3s1FyLX41N/+L27uK85iLEKrRM5raOptr4ZuVFq7mdYznTZNa/bjq3cTyLXjDp/7zCWuHkBI3dKa2t4XZNzEK8Pfocyf03t2kyNmea8D+suEKoCXrlk79oHPLb+PHv4iTxxyDXol8/iblA+uCwaQy3X2p8QbJZ1VuLffr5DFB/mMb/xeXcZm7pdZDg7YqCA8aefiNQfxrb/3AOtxMM38MYG4VepjTojU9/NG1+tN8EocL/cNso8bGLHbfd8J7RqQ+Y9GqdpK+fu9JLX37xlPUYrqd/0a+xKK4VZE/QuGkcSofulWojHylv4113gjs7Ep8qLULy35PcuRHZMgWqn2n9v31AFtZB9Kvu5s5LwLvrXX4dhprmcmclYpTfxUUxr/A8d05CqnuUOusPWEfy3rNFnBrmsFTxkaDWQuBeYWFjwicIeec+5U5mjIzgrHj9oTW3c6cyS8O0qFuHpdMQVn/1HP8rmd/xMnZ5XYndt/oJ2fxY0cji7awR/g/uT/9bxKmkfQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wNS0xMlQxOTowNTowMyswMjowMI3MjFkAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDUtMTJUMTk6MDU6MDMrMDI6MDD8kTTlAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./pages/app/imgs/signout.png":
/*!************************************!*\
  !*** ./pages/app/imgs/signout.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./pages/app/imgs/transaksi.png":
/*!**************************************!*\
  !*** ./pages/app/imgs/transaksi.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC0FBMVEUAAAD//////////////////////////////////////////////v7//v7//v7//v7//////////////v7//v7//v7//v7//////////v7//v7//////////f3//v7//v7//////////////v7//v7//////////v7//v7//////v7//////////v7//v7//f3//f3//////v7//////////v7//////f3//////v7//v7//////////v7//v7//////////f3//f3//v7//v7//v7//v7//v7//v7//v7//f3//////////////////////////////v7//v7//v7//v7//////f3//v7//////v7//////////////f3//////v7//v7//////////////////////v7//v7//f3//////f3//////////////v7//////////////v7//v7//////v7//v7//////////f3//f3//////f3//////////f3//////v7//v7//f3//////f3//v7//v7//f3//f3//////f3//f3//////f3//v7//v7//v7//////v7//////////f3//////f3//////////////////v7//f3//////////////v7//////////////v7//////f3//////f3//f3//////////v7//////v7//////v7//////////////f3//v7//////v7//v7//f3//f3//v7//v7//v7//////v7//v7//////f3//////v7//////////v7//////f3//////v7//v7//////////////v7//////////////f3//////v7//////v7//////////////////////v7//////////v7//v7//f3//v7//////v7//f3//v7//v7//////v4AAAAQ4MAdAAAA7nRSTlMABy5UandoUioFHnm/+PW5cRhDuv38sDgtwrQjA4L793IBFMCxDRrTzBbaEQzRwaKMWf5EDuUIhW/v425YtfphSZmD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"

/***/ }),

/***/ "./pages/app/imgs/user.png":
/*!*********************************!*\
  !*** ./pages/app/imgs/user.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./pages/app/imgs/users.png":
/*!**********************************!*\
  !*** ./pages/app/imgs/users.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/users-849339344e2670ecdd846cd63f783d1c.png";

/***/ }),

/***/ "./pages/app/screens/Home.tsx":
/*!************************************!*\
  !*** ./pages/app/screens/Home.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_nav_NavContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../libs/nav/NavContainer */ "./libs/nav/NavContainer.tsx");
/* harmony import */ var _libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../libs/ui/UIButton */ "./libs/ui/UIButton.tsx");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../libs/ui/UIContainer */ "./libs/ui/UIContainer.tsx");
/* harmony import */ var _libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../libs/ui/UIImage */ "./libs/ui/UIImage.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _libs_queries_user_checkSession__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../libs/queries/user/checkSession */ "./libs/queries/user/checkSession.ts");
var _jsxFileName = "/Users/riz/Documents/edumatis-web/pages/app/screens/Home.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;








/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__["observer"])(({
  navigation
}) => {
  const navigateTo = Object(_libs_nav_NavContainer__WEBPACK_IMPORTED_MODULE_0__["createNavigateTo"])(navigation);
  const meta = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__["useObservable"])({
    loading: true
  });
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    (async () => {
      const session = await Object(_libs_queries_user_checkSession__WEBPACK_IMPORTED_MODULE_7__["checkSession"])();

      if (session && session.murid && session.murid.nsa) {
        if (session.murid.nsa === 'admin') {
          navigation.replace('Admin');
        } else {
          navigation.replace('Siswa');
        }

        return;
      }

      meta.loading = false;
    })();
  }, []);
  if (meta.loading) return null;
  return __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_6__["ScrollView"], {
    style: {
      backgroundColor: '#fff'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_6__["View"], {
    style: {
      alignSelf: 'center',
      flexBasis: '100%',
      minWidth: 400
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx(_libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    source: __webpack_require__(/*! ../imgs/logo-edumatis_a.png */ "./pages/app/imgs/logo-edumatis_a.png"),
    mobileStyle: {
      height: 150,
      marginBottom: -10
    },
    style: {
      width: 200,
      alignSelf: 'center',
      marginTop: 50
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    style: {
      fontSize: 14,
      fontWeight: 'bold',
      alignSelf: 'center',
      color: '#808080',
      marginBottom: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "Aman . Mudah . Handal . Hemat"), __jsx(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    style: {
      fontSize: 18,
      fontWeight: 'bold',
      alignSelf: 'center',
      marginTop: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, "EDUMATIS PAYMENT SYSTEM"), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    style: {
      alignSelf: 'center',
      color: 'dimgrey',
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, "Sistem Pembayaran dan Keuangan Terpadu Untuk Lembaga Pendidikan"), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_6__["View"], {
    style: {
      flexDirection: 'row',
      alignSelf: 'center',
      justifyContent: 'center',
      marginBottom: 20,
      padding: 10,
      minWidth: 400
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    style: {
      marginTop: 20,
      color: 'dimgrey',
      fontSize: 14
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    style: {
      alignSelf: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      fontSize: 18,
      color: '#e62129'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, "Tentang EDUmatis"), '\n', "Solusi berbasis teknologi informasi terkini yang", ' ', __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    style: {
      fontStyle: 'italic',
      fontWeight: 'bold'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, "efisien, efektif, akuntable, reliable"), ' ', "dan ", __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    style: {},
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, "simple"), " untuk berbagai layanan terkait dengan proses administrasi dan support proses belajar mengajar.", '\n', "Mengelola dan menjalankan layanan administrasi dan support prasarana belajar mengajar :", '\n', __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    style: {
      fontWeight: 'bold',
      marginLeft: 20
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, "a. Administrasi Data Siswa dan Guru / Karyawan"), '\n', __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    style: {
      fontWeight: 'bold',
      marginLeft: 20
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, "b. Sistem Komunikasi berbasis SMS"), ' ', "untuk siswa, orang tua siswa dan guru/karyawan", '\n', __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    style: {
      fontWeight: 'bold',
      marginLeft: 20
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, "c. Sistem Administrasi Keuangan"), '\n', __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    style: {
      marginLeft: 40
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, "i) Sistem Manajemen Keuangan Untuk Sekolah"), '\n', __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    style: {
      marginLeft: 40
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, "ii) Sistem Pembayaran Biaya Sekolah online untuk siswa"), '\n', __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    style: {
      marginLeft: 50
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }, "- Biaya Rutin Sekolah : SPP, dan sebagainya"), '\n', __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    style: {
      marginLeft: 50
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }, "- Biaya Insidentil (Tidak Rutin) :Biaya Uang Gedung, Biaya Test, Biaya Laboratoriun, dan sebagainya"), '\n', __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    style: {
      marginLeft: 20
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    style: {
      fontWeight: 'bold'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  }, "d. Marketplace :"), ' ', "Penyediaan berbagai kebutuhan pendukung kegiatan belajar mengajar untuk siswa, misal buku ajar, seragam sekolah dan sebagainya."))), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_6__["View"], {
    style: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 20
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }, __jsx(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    mode: "contained",
    style: {
      marginTop: 20,
      width: 100,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#e62129'
    },
    onPress: () => {
      navigateTo('Login');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    style: {
      color: 'white',
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: undefined
  }, "Login"))))));
}));

/***/ }),

/***/ "./pages/app/screens/Login.tsx":
/*!*************************************!*\
  !*** ./pages/app/screens/Login.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_queries_crud_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../libs/queries/crud/query */ "./libs/queries/crud/query.ts");
/* harmony import */ var _libs_queries_user_checkSession__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../libs/queries/user/checkSession */ "./libs/queries/user/checkSession.ts");
/* harmony import */ var _libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../libs/ui/UIButton */ "./libs/ui/UIButton.tsx");
/* harmony import */ var _libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../libs/ui/UIFieldText */ "./libs/ui/UIFieldText.tsx");
/* harmony import */ var _libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../libs/ui/UIImage */ "./libs/ui/UIImage.tsx");
/* harmony import */ var _libs_stores_RootStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../libs/stores/RootStore */ "./libs/stores/RootStore.ts");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _libs_nav_NavContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../libs/nav/NavContainer */ "./libs/nav/NavContainer.tsx");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../libs/ui/UIHead */ "./libs/ui/UIHead.tsx");

var _jsxFileName = "/Users/riz/Documents/edumatis-web/pages/app/screens/Login.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;











/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__["observer"])(({
  navigation
}) => {
  const navigateTo = Object(_libs_nav_NavContainer__WEBPACK_IMPORTED_MODULE_10__["createNavigateTo"])(navigation);
  const data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__["useObservable"])({
    sekolah_id: "",
    nsa: "",
    password: ""
  });
  const meta = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__["useObservable"])({
    sekolah: "",
    murid: "",
    loading: true
  });
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(() => {
    (async () => {
      const session = await Object(_libs_queries_user_checkSession__WEBPACK_IMPORTED_MODULE_2__["checkSession"])();

      if (session && session.murid && session.murid.nsa) {
        if (session.murid.nsa === "admin") {
          navigation.replace("Admin");
        } else {
          navigation.replace("Siswa");
        }

        return;
      }

      meta.loading = false;
    })();
  }, []);

  if (meta.loading) {
    return __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_9__["View"], {
      style: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: undefined
    }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_9__["Text"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: undefined
    }, "Loading..."));
  }

  return __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_9__["ScrollView"], {
    style: {
      backgroundColor: "#fff"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_9__["View"], {
    style: {
      alignSelf: "center",
      flexBasis: "100%",
      minWidth: 400
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_11__["default"], {
    navigation: navigation,
    title: "Menu Awal",
    onBack: () => {
      navigateTo("Home");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }), __jsx(_libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    source: __webpack_require__(/*! ../imgs/logo-edumatis_a.png */ "./pages/app/imgs/logo-edumatis_a.png"),
    mobileStyle: {
      height: 150,
      marginBottom: -10
    },
    style: {
      width: 200,
      alignSelf: "center",
      marginTop: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_9__["Text"], {
    style: {
      fontSize: 14,
      fontWeight: 'bold',
      alignSelf: 'center',
      color: '#808080',
      marginBottom: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, "Aman . Mudah . Handal . Hemat"), __jsx(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "ID Sekolah",
    sublabel: meta.sekolah,
    value: data.sekolah_id,
    setValue: value => data.sekolah_id = value,
    onBlur: async () => {
      try {
        let res = await Object(_libs_queries_crud_query__WEBPACK_IMPORTED_MODULE_1__["default"])("sekolah", ["nama_sekolah"], {
          where: {
            id: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(data.sekolah_id)
          },
          useSession: false
        });

        if (res && res.nama_sekolah) {
          meta.sekolah = res.nama_sekolah;
        } else {
          meta.sekolah = "Sekolah tidak ditemukan";
        }
      } catch (e) {}
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }), __jsx(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "Nomor Induk / NSA",
    sublabel: meta.murid,
    value: data.nsa,
    setValue: value => data.nsa = value,
    onBlur: async () => {
      let res = await Object(_libs_queries_crud_query__WEBPACK_IMPORTED_MODULE_1__["default"])("murid", ["nama_murid"], {
        where: {
          sekolah_id: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(data.sekolah_id),
          nsa: data.nsa
        },
        useSession: false
      });

      if (res && res.nama_murid) {
        meta.murid = "Nama: " + res.nama_murid;
      } else {
        meta.murid = "Nomor Induk tidak ditemukan";
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }), __jsx(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "password",
    label: "Password",
    value: data.password,
    setValue: value => data.password = value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }), __jsx(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onPress: async () => {
      meta.loading = true;
      let session = await _libs_stores_RootStore__WEBPACK_IMPORTED_MODULE_6__["RootStore"].session.login(data.sekolah_id, data.nsa, data.password);

      if (session && session.murid && session.murid.nsa) {
        if (session.murid.nsa === "admin") {
          navigation.replace("Admin");
        } else {
          navigation.replace("Siswa");
        }

        return;
      }

      meta.loading = false;
      location.reload();
    },
    style: {
      alignItems: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, "Login")));
}));

/***/ }),

/***/ "./pages/app/screens/admin/EditProfile.tsx":
/*!*************************************************!*\
  !*** ./pages/app/screens/admin/EditProfile.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../libs/ui/UIBody */ "./libs/ui/UIBody.tsx");
/* harmony import */ var _libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../libs/ui/UIButton */ "./libs/ui/UIButton.tsx");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../libs/ui/UIContainer */ "./libs/ui/UIContainer.tsx");
/* harmony import */ var _libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../libs/ui/UIFieldText */ "./libs/ui/UIFieldText.tsx");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../libs/ui/UIHead */ "./libs/ui/UIHead.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _libs_queries_user_getsetSession__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../libs/queries/user/getsetSession */ "./libs/queries/user/getsetSession.ts");
/* harmony import */ var _libs_queries_crud_updateRecord__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../libs/queries/crud/updateRecord */ "./libs/queries/crud/updateRecord.ts");
/* harmony import */ var _libs_queries_user_hashPassword__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../libs/queries/user/hashPassword */ "./libs/queries/user/hashPassword.ts");
var _jsxFileName = "/Users/riz/Documents/edumatis-web/pages/app/screens/admin/EditProfile.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;











/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__["observer"])(({
  navigation
}) => {
  const data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__["useObservable"])({
    new1: "",
    new2: "",
    old: "",
    loading: false
  });
  return __jsx(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_4__["default"], {
    navigation: navigation,
    title: "Ubah Password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), __jsx(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_0__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "password",
    label: "Password Lama",
    value: data.old,
    setValue: value => data.old = value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), __jsx(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "password",
    label: "Password Baru",
    value: data.new1,
    setValue: value => data.new1 = value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }), __jsx(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "password",
    label: "Ulangi Password Baru",
    value: data.new2,
    setValue: value => data.new2 = value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }), data.loading ? __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "Loading...") : __jsx(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onPress: async () => {
      const a = react_native_web__WEBPACK_IMPORTED_MODULE_7__["Platform"].OS === "web" ? alert : react_native_web__WEBPACK_IMPORTED_MODULE_7__["Alert"].alert;
      const session = await Object(_libs_queries_user_getsetSession__WEBPACK_IMPORTED_MODULE_8__["getSession"])();

      if (!data.new1 || !data.new2 || !data.old) {
        a("Mohon isi password dengan lengkap");
        return false;
      }

      if (data.new1 !== data.new2) {
        a("Password tidak sama ");
        return false;
      }

      data.loading = true;
      const response = await fetch("https://backend.cap.edumatis.id", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Hasura-Username": session.nama_sekolah.nsa,
          "X-Hasura-Password": data.old,
          "X-Hasura-Cid": session.nama_sekolah + ""
        }
      });
      let res = await response.json();
      console.log(res, {
        "Content-Type": "application/json",
        "X-Hasura-Username": session.nama_sekolah.nsa,
        "X-Hasura-Password": data.old,
        "X-Hasura-Cid": session.nama_sekolah + ""
      });

      if (res["X-Hasura-Role"] !== "anonymous") {
        await Object(_libs_queries_crud_updateRecord__WEBPACK_IMPORTED_MODULE_9__["default"])("nama_sekolah", {
          id: session.nama_sekolah.id,
          password: data.new1
        });
        await Object(_libs_queries_user_hashPassword__WEBPACK_IMPORTED_MODULE_10__["hashPassword"])(session.nama_sekolah.id);
        a("Password berhasil di-ubah!");
      } else {
        a("Password lama salah");
      }

      data.loading = false;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "Ubah Password")));
}));

/***/ }),

/***/ "./pages/app/screens/admin/Home.tsx":
/*!******************************************!*\
  !*** ./pages/app/screens/admin/Home.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_nav_SideNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../libs/nav/SideNav */ "./libs/nav/SideNav.tsx");
/* harmony import */ var _Kewajiban_Kewajiban__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Kewajiban/Kewajiban */ "./pages/app/screens/admin/Kewajiban/Kewajiban.tsx");
/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideBar */ "./pages/app/screens/admin/SideBar.tsx");
/* harmony import */ var _Pengumuman_Pengumuman__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pengumuman/Pengumuman */ "./pages/app/screens/admin/Pengumuman/Pengumuman.tsx");
/* harmony import */ var _Kelas_Kelas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Kelas/Kelas */ "./pages/app/screens/admin/Kelas/Kelas.tsx");
/* harmony import */ var _Transaksi_Transaksi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Transaksi/Transaksi */ "./pages/app/screens/admin/Transaksi/Transaksi.tsx");
/* harmony import */ var _Report__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Report */ "./pages/app/screens/admin/Report.tsx");
/* harmony import */ var _EditProfile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EditProfile */ "./pages/app/screens/admin/EditProfile.tsx");








/* harmony default export */ __webpack_exports__["default"] = (Object(_libs_nav_SideNav__WEBPACK_IMPORTED_MODULE_0__["default"])({
  Transaksi: {
    screen: _Transaksi_Transaksi__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  Kewajiban: {
    screen: _Kewajiban_Kewajiban__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  Pengumuman: {
    screen: _Pengumuman_Pengumuman__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  Kelas: {
    screen: _Kelas_Kelas__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  Report: {
    screen: _Report__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  EditProfile: {
    screen: _EditProfile__WEBPACK_IMPORTED_MODULE_7__["default"]
  }
}, {
  contentComponent: _SideBar__WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ }),

/***/ "./pages/app/screens/admin/Kelas/Kelas.tsx":
/*!*************************************************!*\
  !*** ./pages/app/screens/admin/Kelas/Kelas.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_nav_StackNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/nav/StackNav */ "./libs/nav/StackNav.tsx");
/* harmony import */ var _libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/queries/crud/rawQuery */ "./libs/queries/crud/rawQuery.ts");
/* harmony import */ var _libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/ui/UIBody */ "./libs/ui/UIBody.tsx");
/* harmony import */ var _libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/ui/UIButton */ "./libs/ui/UIButton.tsx");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/ui/UIContainer */ "./libs/ui/UIContainer.tsx");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/ui/UIHead */ "./libs/ui/UIHead.tsx");
/* harmony import */ var _libs_ui_UIList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/ui/UIList */ "./libs/ui/UIList.tsx");
/* harmony import */ var _libs_ui_UIListItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/ui/UIListItem */ "./libs/ui/UIListItem.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _KelasDetail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./KelasDetail */ "./pages/app/screens/admin/Kelas/KelasDetail.tsx");
/* harmony import */ var _MuridDetail__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./MuridDetail */ "./pages/app/screens/admin/Kelas/MuridDetail.tsx");
var _jsxFileName = "/Users/riz/Documents/edumatis-web/pages/app/screens/admin/Kelas/Kelas.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;













const Kelas = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_8__["observer"])(({
  navigation
}) => {
  const data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_8__["useObservable"])({
    list: [],
    loading: true
  });
  Object(react__WEBPACK_IMPORTED_MODULE_9__["useEffect"])(() => {
    let fetch = async () => {
      const result = await Object(_libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_1__["default"])(`{
        kelas(order_by: {id: asc}) {
          id
          kelas_murids_aggregate {
            aggregate {
              count
            }
          }
          nama_kelas
        }
      }
      `);

      if (result && result.kelas) {
        data.list = result.kelas;
      }

      data.loading = false;
    };

    fetch();
  }, []);
  return __jsx(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_5__["default"], {
    navigation: navigation,
    title: "Kelas",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: "small",
    onPress: () => {
      navigation.navigate("KelasDetail", {
        item: {}
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "+ Kelas Baru")), __jsx(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx(_libs_ui_UIList__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: data.list,
    loading: data.loading,
    render: list => {
      const item = list.item;
      return __jsx(_libs_ui_UIListItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onPress: () => {
          navigation.navigate("KelasDetail", {
            item: item
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: undefined
      }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_10__["View"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: undefined
      }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        style: {
          fontSize: 15,
          fontWeight: "bold",
          color: "#555"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: undefined
      }, item.nama_kelas), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: undefined
      }, `${item.kelas_murids_aggregate.aggregate.count} murid`)), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_10__["View"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: undefined
      }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: undefined
      })));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_libs_nav_StackNav__WEBPACK_IMPORTED_MODULE_0__["default"])({
  Kelas: {
    screen: Kelas
  },
  MuridDetail: {
    screen: _MuridDetail__WEBPACK_IMPORTED_MODULE_12__["default"]
  },
  KelasDetail: {
    screen: _KelasDetail__WEBPACK_IMPORTED_MODULE_11__["default"]
  }
}));

/***/ }),

/***/ "./pages/app/screens/admin/Kelas/KelasDetail.tsx":
/*!*******************************************************!*\
  !*** ./pages/app/screens/admin/Kelas/KelasDetail.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _libs_queries_crud_createRecord__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/queries/crud/createRecord */ "./libs/queries/crud/createRecord.ts");
/* harmony import */ var _libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/queries/crud/rawQuery */ "./libs/queries/crud/rawQuery.ts");
/* harmony import */ var _libs_queries_crud_updateRecord__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/queries/crud/updateRecord */ "./libs/queries/crud/updateRecord.ts");
/* harmony import */ var _libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/ui/UIBody */ "./libs/ui/UIBody.tsx");
/* harmony import */ var _libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/ui/UIButton */ "./libs/ui/UIButton.tsx");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/ui/UIContainer */ "./libs/ui/UIContainer.tsx");
/* harmony import */ var _libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/ui/UIFieldText */ "./libs/ui/UIFieldText.tsx");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../libs/ui/UIHead */ "./libs/ui/UIHead.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _MuridList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MuridList */ "./pages/app/screens/admin/Kelas/MuridList.tsx");

var _jsxFileName = "/Users/riz/Documents/edumatis-web/pages/app/screens/admin/Kelas/KelasDetail.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;











/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__["observer"])(({
  navigation
}) => {
  const data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__["useObservable"])({
    loading: true,
    murids: [],
    form: (navigation || {
      getParam: () => ({})
    }).getParam("item")
  });
  Object(react__WEBPACK_IMPORTED_MODULE_10__["useEffect"])(() => {
    const fetch = async function () {
      let res = await Object(_libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_2__["default"])(`{
        murid(where: {kelas_murids: {kelas_id: {_eq: ${data.form.id}}}}) {
          id
          email
          data
          is_active
          nisn
          no_akta_kelahiran
          nsa
          tgl_lahir
          updated_at
          nama_murid
        }
      }
      `);
      data.murids = res.murid;
      data.loading = false;
    };

    fetch();
  }, []);
  return __jsx(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_8__["default"], {
    navigation: navigation,
    title: ` Kelas ` + (data.form.id ? `#${data.form.id}` : `Baru`),
    onBack: () => {
      navigation.goBack();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onPress: async () => {
      const form = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, data.form);

      delete form.kelas_murids_aggregate;

      if (form.id) {
        await Object(_libs_queries_crud_updateRecord__WEBPACK_IMPORTED_MODULE_3__["default"])("kelas", form);
      } else {
        await Object(_libs_queries_crud_createRecord__WEBPACK_IMPORTED_MODULE_1__["default"])("kelas", form);
      }

      navigation.goBack();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "Simpan")), __jsx(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, __jsx(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: "Nama Kelas",
    setValue: value => {
      data.form.nama_kelas = value;
    },
    value: data.form.nama_kelas || "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }), __jsx(_MuridList__WEBPACK_IMPORTED_MODULE_11__["default"], {
    kelas: data.form,
    list: data.murids,
    loading: data.loading,
    navigation: navigation,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  })));
}));

/***/ }),

/***/ "./pages/app/screens/admin/Kelas/KelasPicker.tsx":
/*!*******************************************************!*\
  !*** ./pages/app/screens/admin/Kelas/KelasPicker.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/queries/crud/rawQuery */ "./libs/queries/crud/rawQuery.ts");
/* harmony import */ var _libs_ui_UICol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/ui/UICol */ "./libs/ui/UICol.tsx");
/* harmony import */ var _libs_ui_UIField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/ui/UIField */ "./libs/ui/UIField.tsx");
/* harmony import */ var _libs_ui_UIFieldSelectNative__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/ui/UIFieldSelectNative */ "./libs/ui/UIFieldSelectNative.tsx");
/* harmony import */ var _libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/ui/UIRow */ "./libs/ui/UIRow.tsx");
/* harmony import */ var _libs_utils_GraphQL__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/utils/GraphQL */ "./libs/utils/GraphQL.ts");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "/Users/riz/Documents/edumatis-web/pages/app/screens/admin/Kelas/KelasPicker.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;









/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__["observer"])(({
  form,
  renderMurid,
  renderKelas,
  renderKelasTitle
}) => {
  const data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__["useObservable"])({
    expandKelas: [],
    kelas: [],
    kelasMurid: {}
  });
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(() => {
    data.kelas = [];
    Object(_libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_1__["default"])(`{
        kelas {
          id 
          nama_kelas
        }
      }`).then(res => {
      data.kelas = res.kelas;
    });
  }, []);
  return __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 6,
    sizexs: 12,
    sizesm: 12,
    sizemd: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx(_libs_ui_UIField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Berlaku untuk kelas:",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, data.kelas && data.kelas.map((k, index) => {
    const allkelas = form.kelas || {};
    const kelas = allkelas[k.id];
    return __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_9__["View"], {
      key: k.id,
      style: {
        borderBottomWidth: index + 1 === data.kelas.length ? 0 : 1,
        marginHorizontal: -12,
        padding: 5,
        paddingHorizontal: 12,
        borderBottomColor: "#ddd"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: undefined
    }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_9__["TouchableOpacity"], {
      onPress: async () => {
        if (!data.kelasMurid[k.id]) {
          let res = await Object(_libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_1__["default"])(`{
                                murid(where: {kelas_murids: {kelas_id: {_eq: ${k.id}}}}) {
                                  id
                                  nama_murid
                                }
                              }
                              `);

          if (res && res.murid) {
            const kelasMurid = res.murid.map(m => {
              return {
                value: m.id,
                label: m.nama_murid
              };
            });
            data.kelasMurid[k.id] = [{
              value: 0,
              label: ""
            }, ...kelasMurid];
          }
        }

        if (kelas) {
          data.expandKelas = [k.id];
        } else {
          allkelas[k.id] = {
            nominal: form.nominal,
            murid: [{}]
          };
          data.expandKelas = [k.id];
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: undefined
    }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_9__["Text"], {
      style: {
        fontSize: 17,
        height: 25
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: undefined
    }, kelas ? "☑" : "☐", "\xA0", k.nama_kelas)), kelas && __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_9__["View"], {
      style: {
        flexDirection: "row",
        marginLeft: 30,
        alignItems: "center",
        position: "absolute",
        right: 10
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: undefined
    }, renderKelasTitle && renderKelasTitle(kelas, k), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_9__["TouchableOpacity"], {
      onPress: () => {
        allkelas[k.id] = undefined;
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: undefined
    }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_9__["Text"], {
      style: {
        color: "red"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: undefined
    }, " Hapus"))), kelas && data.expandKelas.indexOf(k.id) >= 0 && __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_9__["View"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: undefined
    }, renderKelas && renderKelas(kelas, k), kelas.murid.map((murid, midx) => {
      return __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_5__["default"], {
        key: midx,
        style: {
          flexDirection: "row"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: undefined
      }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_2__["default"], {
        size: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: undefined
      }, __jsx(_libs_ui_UIFieldSelectNative__WEBPACK_IMPORTED_MODULE_4__["default"], {
        label: "Murid",
        items: data.kelasMurid[k.id] || [],
        value: murid.id || 0,
        setValue: value => {
          value = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(value);
          murid.id = value;
          const unique = Object(_libs_utils_GraphQL__WEBPACK_IMPORTED_MODULE_6__["getUnique"])(kelas.murid, "id").filter(m => {
            return m.id !== 0;
          });
          kelas.murid.splice(0, kelas.murid.length);
          unique.forEach(m => {
            kelas.murid.push(m);
          });
          kelas.murid.push({
            id: 0
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: undefined
      })), renderMurid && renderMurid(murid, kelas, k));
    })));
  }))));
}));

/***/ }),

/***/ "./pages/app/screens/admin/Kelas/MuridDetail.tsx":
/*!*******************************************************!*\
  !*** ./pages/app/screens/admin/Kelas/MuridDetail.tsx ***!
  \*******************************************************/
/*! exports provided: saveUser, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveUser", function() { return saveUser; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _libs_nav_StackNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/nav/StackNav */ "./libs/nav/StackNav.tsx");
/* harmony import */ var _libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/ui/UIBody */ "./libs/ui/UIBody.tsx");
/* harmony import */ var _libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/ui/UIButton */ "./libs/ui/UIButton.tsx");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/ui/UIContainer */ "./libs/ui/UIContainer.tsx");
/* harmony import */ var _libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/ui/UIFieldText */ "./libs/ui/UIFieldText.tsx");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/ui/UIHead */ "./libs/ui/UIHead.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _MuridDetailProfil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MuridDetailProfil */ "./pages/app/screens/admin/Kelas/MuridDetailProfil.tsx");
/* harmony import */ var _MuridDetailSide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MuridDetailSide */ "./pages/app/screens/admin/Kelas/MuridDetailSide.tsx");
/* harmony import */ var _libs_queries_crud_updateRecord__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../libs/queries/crud/updateRecord */ "./libs/queries/crud/updateRecord.ts");
/* harmony import */ var _libs_queries_crud_createRecord__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../libs/queries/crud/createRecord */ "./libs/queries/crud/createRecord.ts");
/* harmony import */ var _libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../libs/ui/UIRow */ "./libs/ui/UIRow.tsx");
/* harmony import */ var _libs_ui_UICol__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../libs/ui/UICol */ "./libs/ui/UICol.tsx");
/* harmony import */ var _libs_ui_UIFieldSelectNative__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../libs/ui/UIFieldSelectNative */ "./libs/ui/UIFieldSelectNative.tsx");
/* harmony import */ var _libs_queries_user_hashPassword__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../libs/queries/user/hashPassword */ "./libs/queries/user/hashPassword.ts");

var _jsxFileName = "/Users/riz/Documents/edumatis-web/pages/app/screens/admin/Kelas/MuridDetail.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

















async function saveUser(form, kelas_id) {
  if (form.id) {
    await Object(_libs_queries_crud_updateRecord__WEBPACK_IMPORTED_MODULE_12__["default"])("murid", form);
  } else {
    form.id = await Object(_libs_queries_crud_createRecord__WEBPACK_IMPORTED_MODULE_13__["default"])("murid", form);

    if (form.id > 0 && kelas_id) {
      await Object(_libs_queries_crud_createRecord__WEBPACK_IMPORTED_MODULE_13__["default"])("kelas_murid", {
        kelas_id: kelas_id,
        murid_id: form.id,
        is_active: "y"
      });
    }
  }

  if (!!form.password) {
    await Object(_libs_queries_user_hashPassword__WEBPACK_IMPORTED_MODULE_17__["hashPassword"])(form.id);
  }
}
const MuridSistem = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__["observer"])(({
  navigation,
  parentNavigation
}) => {
  const data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__["useObservable"])({
    loading: true,
    form: (parentNavigation || {
      getParam: () => ({})
    }).getParam("item"),
    kelas: (parentNavigation || {
      getParam: () => ({})
    }).getParam("kelas")
  });
  return __jsx(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_6__["default"], {
    navigation: navigation,
    title: data.form.id ? `Detail Siswa #${data.form.id}` : `Buat Siswa Baru`,
    onBack: () => {
      parentNavigation.goBack();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onPress: async () => {
      const form = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, data.form);

      await saveUser(form, data.kelas.id);
      parentNavigation.goBack();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, "Simpan")), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_9__["View"], {
    style: {
      flexDirection: "row",
      flex: 1,
      borderTopColor: "#ccc",
      borderTopWidth: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, __jsx(_MuridDetailSide__WEBPACK_IMPORTED_MODULE_11__["default"], {
    navigation: navigation,
    form: data.form,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }), __jsx(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_15__["default"], {
    size: 6,
    sizexs: 12,
    sizesm: 12,
    sizemd: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, __jsx(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "NSA (Username)",
    setValue: value => {
      data.form.nsa = value;
    },
    value: data.form.nsa,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  })), __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_15__["default"], {
    size: 6,
    sizexs: 12,
    sizesm: 12,
    sizemd: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, __jsx(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "NISN",
    setValue: value => {
      data.form.nisn = value;
    },
    value: data.form.nisn,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }))), __jsx(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Nama Lengkap",
    setValue: value => {
      data.form.nama_murid = value;
    },
    value: data.form.nama_murid,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }), __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_15__["default"], {
    size: 4,
    sizexs: 12,
    sizesm: 12,
    sizemd: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, __jsx(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "E-Mail",
    setValue: value => {
      data.form.email = value;
    },
    value: data.form.email || "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }))), __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_15__["default"], {
    size: 4,
    sizexs: 12,
    sizesm: 12,
    sizemd: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, __jsx(_libs_ui_UIFieldSelectNative__WEBPACK_IMPORTED_MODULE_16__["default"], {
    label: "Status",
    items: [{
      value: "y",
      label: "Aktif"
    }, {
      value: "n",
      label: "Non-Aktif"
    }],
    setValue: value => {
      data.form.is_active = value;
    },
    value: data.form.is_active,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }))), __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_15__["default"], {
    size: 4,
    sizexs: 12,
    sizesm: 12,
    sizemd: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }, __jsx(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Ubah Password",
    type: "password",
    setValue: value => {
      data.form.password = value;
    },
    value: data.form.password || "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }))))));
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_libs_nav_StackNav__WEBPACK_IMPORTED_MODULE_1__["default"])({
  MuridSistem: {
    screen: MuridSistem
  },
  MuridProfil: {
    screen: _MuridDetailProfil__WEBPACK_IMPORTED_MODULE_10__["default"]
  }
}));

/***/ }),

/***/ "./pages/app/screens/admin/Kelas/MuridDetailProfil.tsx":
/*!*************************************************************!*\
  !*** ./pages/app/screens/admin/Kelas/MuridDetailProfil.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/ui/UIBody */ "./libs/ui/UIBody.tsx");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/ui/UIContainer */ "./libs/ui/UIContainer.tsx");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/ui/UIHead */ "./libs/ui/UIHead.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _MuridDetailSide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MuridDetailSide */ "./pages/app/screens/admin/Kelas/MuridDetailSide.tsx");
/* harmony import */ var _libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../libs/ui/UIButton */ "./libs/ui/UIButton.tsx");
/* harmony import */ var _MuridDetail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MuridDetail */ "./pages/app/screens/admin/Kelas/MuridDetail.tsx");
/* harmony import */ var _libs_ui_UIJson__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../libs/ui/UIJson */ "./libs/ui/UIJson.tsx");

var _jsxFileName = "/Users/riz/Documents/edumatis-web/pages/app/screens/admin/Kelas/MuridDetailProfil.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;










/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__["observer"])(({
  navigation,
  parentNavigation
}) => {
  const data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__["useObservable"])({
    loading: true,
    form: (parentNavigation || {
      getParam: () => ({})
    }).getParam("item"),
    kelas: (parentNavigation || {
      getParam: () => ({})
    }).getParam("kelas")
  });
  return __jsx(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_3__["default"], {
    navigation: navigation,
    title: data.form.id ? `Detail Siswa #${data.form.id}` : `Buat Siswa Baru`,
    onBack: () => {
      parentNavigation.goBack();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onPress: async () => {
      const form = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, data.form);

      await Object(_MuridDetail__WEBPACK_IMPORTED_MODULE_9__["saveUser"])(form, data.kelas.id);
      parentNavigation.goBack();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "Simpan")), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_6__["View"], {
    style: {
      flexDirection: "row",
      flex: 1,
      borderTopColor: "#ccc",
      borderTopWidth: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx(_MuridDetailSide__WEBPACK_IMPORTED_MODULE_7__["default"], {
    navigation: navigation,
    form: data.form,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }), __jsx(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, data.form.data ? __jsx(_libs_ui_UIJson__WEBPACK_IMPORTED_MODULE_10__["default"], {
    data: data.form.data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }) : __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "\u2014 Data Diri Kosong \u2014 "))));
}));

/***/ }),

/***/ "./pages/app/screens/admin/Kelas/MuridDetailSide.tsx":
/*!***********************************************************!*\
  !*** ./pages/app/screens/admin/Kelas/MuridDetailSide.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/config */ "./libs/config.ts");
/* harmony import */ var _libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/ui/UIImage */ "./libs/ui/UIImage.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/riz/Documents/edumatis-web/pages/app/screens/admin/Kelas/MuridDetailSide.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





const Button = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["observer"])(props => {
  return __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_4__["TouchableOpacity"], {
    onPress: props.onPress,
    style: {
      flexDirection: "row",
      alignItems: "center",
      alignContent: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx(_libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: {
      width: 20,
      padding: 10,
      height: 20
    },
    source: props.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    style: {
      color: _libs_config__WEBPACK_IMPORTED_MODULE_0__["default"].color.main
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, props.text));
});
/* harmony default export */ __webpack_exports__["default"] = (({
  navigation,
  form
}) => {
  return __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_4__["View"], {
    style: {
      flexBasis: 200,
      borderRightWidth: 1,
      backgroundColor: "#ececeb",
      borderRightColor: "#ccc"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx(Button, {
    text: "Data Sistem",
    onPress: () => {
      navigation.replace("MuridSistem");
    },
    image: __webpack_require__(/*! ../../../imgs/shield.png */ "./pages/app/imgs/shield.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }), form && form.id && __jsx(Button, {
    text: "Data Diri",
    onPress: () => {
      navigation.replace("MuridProfil");
    },
    image: __webpack_require__(/*! ../../../imgs/user.png */ "./pages/app/imgs/user.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }));
});

/***/ }),

/***/ "./pages/app/screens/admin/Kelas/MuridList.tsx":
/*!*****************************************************!*\
  !*** ./pages/app/screens/admin/Kelas/MuridList.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/ui/UIButton */ "./libs/ui/UIButton.tsx");
/* harmony import */ var _libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/ui/UIImage */ "./libs/ui/UIImage.tsx");
/* harmony import */ var _libs_ui_UIList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/ui/UIList */ "./libs/ui/UIList.tsx");
/* harmony import */ var _libs_ui_UIListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/ui/UIListItem */ "./libs/ui/UIListItem.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "/Users/riz/Documents/edumatis-web/pages/app/screens/admin/Kelas/MuridList.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;








/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__["observer"])(data => {
  const meta = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__["useObservable"])({
    checked: []
  });
  if (!data.list) return null;
  return __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_7__["View"], {
    style: {
      paddingHorizontal: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_7__["View"], {
    style: {
      borderBottomColor: '#ddd',
      borderBottomWidth: 2,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      justifyContent: 'space-between'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    style: {
      color: '#999'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "Total Murid: ", data.list.length, meta.checked.length > 0 && ` • Murid Terpilih: ${meta.checked.length}`), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_7__["View"], {
    style: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  },  false && false, __jsx(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: "small",
    fill: "outline",
    style: {
      margin: 0,
      marginLeft: 8
    },
    labelStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: 2,
      paddingBottom: 2,
      paddingHorizontal: 0
    },
    onPress: () => {
      let hasDetail = false;
      const list = Object(mobx__WEBPACK_IMPORTED_MODULE_8__["toJS"])(data.list);
      list.forEach(item => {
        if (item.data && item.data.nik) {
          hasDetail = true;
        }
      });
      const header = [];
      const finalList = [];
      header.push('nisn');
      header.push('nsa');
      header.push('nama_lengkap');
      header.push('tgl_lahir');

      if (hasDetail) {
        list.forEach(item => {
          if (item.data && item.data.nik) {
            for (let i in item.data) {
              header.push(i);
            }
          }
        });
      }

      finalList.push(header);
      list.forEach(item => {
        const row = [];
        row.push(item['nisn']);
        row.push(item['nsa']);
        row.push(item['nama_murid']);
        row.push(item['tgl_lahir']);

        if (item.data && item.data.nik) {
          for (let i in item.data) {
            row.push(item.data[i]);
          }
        }

        finalList.push(row);
      });
      console.log(finalList);
      var finalVal = '';

      for (var i = 0; i < finalList.length; i++) {
        var value = finalList[i];

        for (var j = 0; j < value.length; j++) {
          var innerValue = value[j] === null ? '' : value[j].toString();
          var result = innerValue.replace(/"/g, '""');
          if (result.search(/("|,|\n)/g) >= 0) result = '"' + result + '"';
          if (j > 0) finalVal += ',';
          finalVal += result;
        }

        finalVal += '\n';
      }

      var pom = document.createElement('a');
      var csvContent = finalVal; //here we load our csv data

      var blob = new Blob([csvContent], {
        type: 'text/csv;charset=utf-8;'
      });
      var url = URL.createObjectURL(blob);
      pom.href = url;
      pom.setAttribute('download', `Kelas_${data.kelas.nama_kelas.replace(/[\W_]+/g, '_')}.csv`);
      pom.click();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx(_libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    source: __webpack_require__(/*! ../../../imgs/share.png */ "./pages/app/imgs/share.png"),
    style: {
      width: 12,
      height: 12,
      marginLeft: 8
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }), "Export CSV"), __jsx(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: "small",
    style: {
      margin: 0,
      marginLeft: 8
    },
    labelStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: 2,
      paddingBottom: 2,
      paddingHorizontal: 0
    },
    onPress: () => {
      data.navigation.navigate('MuridDetail', {
        item: {},
        kelas: data.kelas
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }, __jsx(_libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    source: __webpack_require__(/*! ../../../imgs/plus.png */ "./pages/app/imgs/plus.png"),
    style: {
      width: 12,
      height: 12,
      marginLeft: 8
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: undefined
  }), "Tambah Siswa"))), __jsx(_libs_ui_UIList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: data.list,
    extraData: meta.checked.length,
    loading: data.loading,
    render: list => {
      const item = list.item;
      return __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_7__["View"], {
        style: {
          flexDirection: 'row',
          alignItems: 'center',
          flex: 1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: undefined
      }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_7__["TouchableOpacity"], {
        style: {
          height: 60,
          paddingLeft: 10,
          paddingRight: 3,
          borderBottomColor: '#ccc',
          borderBottomWidth: 1,
          alignItems: 'center',
          justifyContent: 'center'
        },
        onPress: () => {
          const idx = meta.checked.indexOf(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(item.id));

          if (idx >= 0) {
            meta.checked.splice(idx, 1);
          } else {
            meta.checked.push(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(item.id));
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: undefined
      }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_7__["Text"], {
        style: {
          fontSize: 20
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: undefined
      }, meta.checked.indexOf(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(item.id)) >= 0 ? '☑' : '☐')), __jsx(_libs_ui_UIListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
        style: {
          height: 60,
          flex: 1
        },
        onPress: () => {
          data.navigation.navigate('MuridDetail', {
            item,
            kelas: data.kelas
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: undefined
      }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_7__["View"], {
        style: {
          flexDirection: 'row',
          alignItems: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: undefined
      }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_7__["Text"], {
        style: {
          paddingRight: 10,
          fontSize: 17,
          fontWeight: 'bold'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: undefined
      }, list.index + 1), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_7__["View"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: undefined
      }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_7__["Text"], {
        style: {
          fontSize: 16
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: undefined
      }, item.nama_murid), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_7__["View"], {
        style: {
          flexDirection: 'row',
          alignItems: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: undefined
      }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_7__["Text"], {
        style: {
          fontSize: 13
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: undefined
      }, item.is_active === 'y' ? 'Aktif' : 'Non-Aktif', "\xA0 \u2022 \xA0"), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_7__["Text"], {
        style: {
          fontSize: 13,
          color: !item.data ? '#ccc' : 'green'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: undefined
      }, item.data ? `Data diri tersedia` : `Tanpa data diri`)))), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_7__["View"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: undefined
      }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_7__["Text"], {
        style: {
          fontSize: 12,
          color: '#999',
          textAlign: 'right'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: undefined
      }, "NSA: ", item.nsa), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_7__["Text"], {
        style: {
          fontSize: 12,
          color: '#999',
          textAlign: 'right'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: undefined
      }, "NISN: ", item.nisn))));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: undefined
  }));
}));

/***/ }),

/***/ "./pages/app/screens/admin/Kewajiban/Kewajiban.tsx":
/*!*********************************************************!*\
  !*** ./pages/app/screens/admin/Kewajiban/Kewajiban.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/queries/crud/rawQuery */ "./libs/queries/crud/rawQuery.ts");
/* harmony import */ var _libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/ui/UIBody */ "./libs/ui/UIBody.tsx");
/* harmony import */ var _libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/ui/UIButton */ "./libs/ui/UIButton.tsx");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/ui/UIContainer */ "./libs/ui/UIContainer.tsx");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/ui/UIHead */ "./libs/ui/UIHead.tsx");
/* harmony import */ var _libs_ui_UIList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/ui/UIList */ "./libs/ui/UIList.tsx");
/* harmony import */ var _libs_ui_UIListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/ui/UIListItem */ "./libs/ui/UIListItem.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _libs_nav_StackNav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../libs/nav/StackNav */ "./libs/nav/StackNav.tsx");
/* harmony import */ var _KewajibanDetail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./KewajibanDetail */ "./pages/app/screens/admin/Kewajiban/KewajibanDetail.tsx");
var _jsxFileName = "/Users/riz/Documents/edumatis-web/pages/app/screens/admin/Kewajiban/Kewajiban.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;












const Kewajiban = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__["observer"])(({
  navigation
}) => {
  const data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__["useObservable"])({
    list: [],
    loading: true
  });
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(() => {
    let fetch = async () => {
      const result = await Object(_libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_0__["default"])(`{
        kewajiban(order_by: [{tipe_pembayaran: asc},{id: asc}, ]) {
          id
          nama_kewajiban
          nominal
          tipe_pembayaran
        }
      }
      
      `);
      data.list = result.kewajiban;
      data.loading = false;
    };

    fetch();
  }, []);
  return __jsx(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_4__["default"], {
    navigation: navigation,
    title: "Kewajiban",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: "small",
    onPress: () => {
      navigation.navigate("KewajibanDetail", {
        item: {
          nominal: 100000,
          kelas: {}
        }
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, "+ Kewajiban Baru")), __jsx(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx(_libs_ui_UIList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: data.list,
    loading: data.loading,
    render: list => {
      const item = list.item;
      return __jsx(_libs_ui_UIListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        onPress: () => {
          navigation.navigate("KewajibanDetail", {
            item: item
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: undefined
      }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_9__["View"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: undefined
      }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        style: {
          fontSize: 15,
          fontWeight: "bold",
          color: "#555"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: undefined
      }, item.nama_kewajiban), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        style: {
          fontSize: 14
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: undefined
      }, "Rp ", item.nominal.toLocaleString())), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_9__["View"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: undefined
      }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: undefined
      }, item.tipe_pembayaran)));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_libs_nav_StackNav__WEBPACK_IMPORTED_MODULE_10__["default"])({
  Kewajiban: {
    screen: Kewajiban
  },
  KewajibanDetail: {
    screen: _KewajibanDetail__WEBPACK_IMPORTED_MODULE_11__["default"]
  }
}));

/***/ }),

/***/ "./pages/app/screens/admin/Kewajiban/KewajibanDetail.tsx":
/*!***************************************************************!*\
  !*** ./pages/app/screens/admin/Kewajiban/KewajibanDetail.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_queries_crud_createRecord__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/queries/crud/createRecord */ "./libs/queries/crud/createRecord.ts");
/* harmony import */ var _libs_queries_crud_deleteRecord__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/queries/crud/deleteRecord */ "./libs/queries/crud/deleteRecord.ts");
/* harmony import */ var _libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/queries/crud/rawQuery */ "./libs/queries/crud/rawQuery.ts");
/* harmony import */ var _libs_queries_crud_updateRecord__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/queries/crud/updateRecord */ "./libs/queries/crud/updateRecord.ts");
/* harmony import */ var _libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/ui/UIBody */ "./libs/ui/UIBody.tsx");
/* harmony import */ var _libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/ui/UIButton */ "./libs/ui/UIButton.tsx");
/* harmony import */ var _libs_ui_UICol__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/ui/UICol */ "./libs/ui/UICol.tsx");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../libs/ui/UIContainer */ "./libs/ui/UIContainer.tsx");
/* harmony import */ var _libs_ui_UIFieldSelectNative__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../libs/ui/UIFieldSelectNative */ "./libs/ui/UIFieldSelectNative.tsx");
/* harmony import */ var _libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../libs/ui/UIFieldText */ "./libs/ui/UIFieldText.tsx");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../libs/ui/UIHead */ "./libs/ui/UIHead.tsx");
/* harmony import */ var _libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../libs/ui/UIRow */ "./libs/ui/UIRow.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Kelas_KelasPicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Kelas/KelasPicker */ "./pages/app/screens/admin/Kelas/KelasPicker.tsx");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lodash.get */ "lodash.get");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_17__);

var _jsxFileName = "/Users/riz/Documents/edumatis-web/pages/app/screens/admin/Kewajiban/KewajibanDetail.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement;

















/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_13__["observer"])(({
  navigation
}) => {
  const data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_13__["useObservable"])({
    form: (navigation || {
      getParam: () => ({})
    }).getParam("item")
  });
  const count = lodash_get__WEBPACK_IMPORTED_MODULE_17___default()(data, "form.transaksi_aggregate.aggregate.count");
  Object(react__WEBPACK_IMPORTED_MODULE_14__["useEffect"])(() => {
    if (data.form.id) {
      Object(_libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_3__["default"])(`
      {
        kewajiban(where: {id: {_eq: ${data.form.id}}}) {
          kelas
          batas_pembayaran
          id
          nominal
          nama_kewajiban
          status
          tgl_batas_pembayaran_bulan
          tipe_pembayaran
          transaksi_aggregate {
            aggregate {
              count
            }
          }
        }
      }
    `).then(res => {
        data.form = res.kewajiban[0];
      });
    }
  }, []);
  return __jsx(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_11__["default"], {
    navigation: navigation,
    title: ` Kewajiban ` + (data.form.id ? `#${data.form.id}: ${data.form.nama_kewajiban}` : `Baru`),
    onBack: () => {
      navigation.goBack();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onPress: async () => {
      if (data.form.id) {
        await Object(_libs_queries_crud_updateRecord__WEBPACK_IMPORTED_MODULE_4__["default"])("kewajiban", data.form);
      } else {
        await Object(_libs_queries_crud_createRecord__WEBPACK_IMPORTED_MODULE_1__["default"])("kewajiban", data.form);
      }

      navigation.goBack();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, "Simpan"), count === 0 && __jsx(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: {
      backgroundColor: "red",
      marginLeft: -5
    },
    onPress: async () => {
      if (react_native_web__WEBPACK_IMPORTED_MODULE_15__["Platform"].OS === "web") {
        if (confirm("Apakah anda yakin ingin menghapus kewajiban ini ?")) {
          if (data.form.id) {
            await Object(_libs_queries_crud_deleteRecord__WEBPACK_IMPORTED_MODULE_2__["default"])("kewajiban", {
              id: data.form.id
            });
          }

          navigation.goBack();
        }
      } else {
        react_native_web__WEBPACK_IMPORTED_MODULE_15__["Alert"].alert("Menghapus Kewajiban", "Apakah Anda yakin ingin menghapus kewajiban ini ?", [{
          text: "NO",
          style: "cancel",
          onPress: () => {}
        }, {
          text: "YES",
          onPress: async () => {
            if (data.form.id) {
              await Object(_libs_queries_crud_deleteRecord__WEBPACK_IMPORTED_MODULE_2__["default"])("kewajiban", {
                id: data.form.id
              });
            }

            navigation.goBack();
          }
        }]);
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, "Hapus"))), __jsx(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_12__["default"], {
    style: {
      paddingBottom: 25
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, count === 0 ? __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_15__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }, "Transaksi untuk kewajiban ini masih kosong.") : __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_15__["TouchableOpacity"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }, __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_15__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }, "Terdapat"), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_15__["Text"], {
    style: {
      marginHorizontal: 5,
      textDecorationLine: "underline"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }, count, " transaksi"), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_15__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }, " untuk kewajiban ini.")))), __jsx(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: "Nama Kewajiban",
    setValue: value => {
      data.form.nama_kewajiban = value;
    },
    value: data.form.nama_kewajiban,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }), __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_7__["default"], {
    size: 4,
    sizesm: 6,
    sizexs: 6,
    sizemd: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  }, __jsx(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: "Nominal",
    setValue: value => {
      data.form.nominal = value;
    },
    value: data.form.nominal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: undefined
  })), __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_7__["default"], {
    size: 4,
    sizesm: 6,
    sizexs: 6,
    sizemd: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: undefined
  }, __jsx(_libs_ui_UIFieldSelectNative__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: "Status Kewajiban",
    items: ["aktif", "non-aktif"],
    setValue: value => {
      data.form.status = value;
    },
    value: data.form.status,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: undefined
  })), __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_7__["default"], {
    size: 4,
    sizesm: 6,
    sizexs: 6,
    sizemd: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: undefined
  }, __jsx(_libs_ui_UIFieldSelectNative__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: "Tipe Pembayaran",
    items: ["Bulanan", "Insidentil"],
    setValue: value => {
      data.form.tipe_pembayaran = value;
    },
    value: data.form.tipe_pembayaran,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: undefined
  }))), __jsx(_Kelas_KelasPicker__WEBPACK_IMPORTED_MODULE_16__["default"], {
    form: data.form,
    renderKelasTitle: kelas => __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_15__["Text"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: undefined
    }, "Rp ", _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(kelas.nominal).toLocaleString(), " "),
    renderKelas: (kelas, k) => {
      return __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_15__["View"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: undefined
      }, __jsx(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: `Nominal untuk murid kelas ${k.nama_kelas}`,
        value: kelas.nominal,
        setValue: value => {
          kelas.nominal = value;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: undefined
      }), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_15__["Text"], {
        style: {
          padding: 10,
          paddingLeft: 15,
          color: "#333"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: undefined
      }, "Khusus untuk murid ini, di set sesuai nominal tertera:"));
    },
    renderMurid: (murid, kelas) => {
      return __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_7__["default"], {
        size: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: undefined
      }, __jsx(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: "Nominal",
        value: murid.nominal || kelas.nominal,
        setValue: value => {
          murid.nominal = value;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: undefined
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: undefined
  })));
}));

/***/ }),

/***/ "./pages/app/screens/admin/Pengumuman/Pengumuman.tsx":
/*!***********************************************************!*\
  !*** ./pages/app/screens/admin/Pengumuman/Pengumuman.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/queries/crud/rawQuery */ "./libs/queries/crud/rawQuery.ts");
/* harmony import */ var _libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/ui/UIBody */ "./libs/ui/UIBody.tsx");
/* harmony import */ var _libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/ui/UIButton */ "./libs/ui/UIButton.tsx");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/ui/UIContainer */ "./libs/ui/UIContainer.tsx");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/ui/UIHead */ "./libs/ui/UIHead.tsx");
/* harmony import */ var _libs_ui_UIList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/ui/UIList */ "./libs/ui/UIList.tsx");
/* harmony import */ var _libs_ui_UIListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/ui/UIListItem */ "./libs/ui/UIListItem.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _libs_nav_StackNav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../libs/nav/StackNav */ "./libs/nav/StackNav.tsx");
/* harmony import */ var _PengumumanDetail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PengumumanDetail */ "./pages/app/screens/admin/Pengumuman/PengumumanDetail.tsx");
var _jsxFileName = "/Users/riz/Documents/edumatis-web/pages/app/screens/admin/Pengumuman/Pengumuman.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;












const Pengumuman = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__["observer"])(({
  navigation
}) => {
  const data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__["useObservable"])({
    list: [],
    loading: true
  });
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(() => {
    let fetch = async () => {
      const result = await Object(_libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_0__["default"])(`{
        pengumuman(order_by: {status: asc, id: asc}) {
          id
          pengumuman
          tgl
          status
          kelas
        }
      }`);

      if (result && result.pengumuman) {
        data.list = result.pengumuman;
      }

      data.loading = false;
    };

    fetch();
  }, []);
  return __jsx(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_4__["default"], {
    navigation: navigation,
    title: "Pengumuman",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: "small",
    onPress: () => {
      navigation.navigate("PengumumanDetail", {
        item: {
          kelas: {}
        }
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "+ Pengumuman Baru")), __jsx(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx(_libs_ui_UIList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: data.list,
    loading: data.loading,
    render: list => {
      const item = list.item;
      return __jsx(_libs_ui_UIListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        onPress: () => {
          navigation.navigate("PengumumanDetail", {
            item: item
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: undefined
      }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_9__["View"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: undefined
      }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        style: {
          fontSize: 15,
          fontWeight: "bold",
          color: "#555"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: undefined
      }, item.pengumuman)), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_9__["View"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: undefined
      }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: undefined
      }, item.status)));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_9__["View"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_libs_nav_StackNav__WEBPACK_IMPORTED_MODULE_10__["default"])({
  Pengumuman: {
    screen: Pengumuman
  },
  PengumumanDetail: {
    screen: _PengumumanDetail__WEBPACK_IMPORTED_MODULE_11__["default"]
  }
}));

/***/ }),

/***/ "./pages/app/screens/admin/Pengumuman/PengumumanDetail.tsx":
/*!*****************************************************************!*\
  !*** ./pages/app/screens/admin/Pengumuman/PengumumanDetail.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/ui/UIBody */ "./libs/ui/UIBody.tsx");
/* harmony import */ var _libs_ui_UICol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/ui/UICol */ "./libs/ui/UICol.tsx");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/ui/UIContainer */ "./libs/ui/UIContainer.tsx");
/* harmony import */ var _libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/ui/UIFieldText */ "./libs/ui/UIFieldText.tsx");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/ui/UIHead */ "./libs/ui/UIHead.tsx");
/* harmony import */ var _libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/ui/UIRow */ "./libs/ui/UIRow.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _libs_ui_UIFieldSelectNative__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../libs/ui/UIFieldSelectNative */ "./libs/ui/UIFieldSelectNative.tsx");
/* harmony import */ var _Kelas_KelasPicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Kelas/KelasPicker */ "./pages/app/screens/admin/Kelas/KelasPicker.tsx");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../libs/ui/UIButton */ "./libs/ui/UIButton.tsx");
/* harmony import */ var _libs_queries_crud_updateRecord__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../libs/queries/crud/updateRecord */ "./libs/queries/crud/updateRecord.ts");
/* harmony import */ var _libs_queries_crud_createRecord__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../libs/queries/crud/createRecord */ "./libs/queries/crud/createRecord.ts");
/* harmony import */ var _libs_queries_crud_deleteRecord__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../libs/queries/crud/deleteRecord */ "./libs/queries/crud/deleteRecord.ts");


var _jsxFileName = "/Users/riz/Documents/edumatis-web/pages/app/screens/admin/Pengumuman/PengumumanDetail.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;















/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_8__["observer"])(({
  navigation
}) => {
  const data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_8__["useObservable"])({
    loading: true,
    form: (navigation || {
      getParam: () => ({})
    }).getParam("item")
  });
  return __jsx(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_6__["default"], {
    navigation: navigation,
    title: ` Pengumuman ` + (data.form.id ? `#${data.form.id}` : `Baru`),
    onBack: () => {
      navigation.goBack();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onPress: async () => {
      if (data.form.id) {
        data.form.id = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(data.form.id);
        await Object(_libs_queries_crud_updateRecord__WEBPACK_IMPORTED_MODULE_14__["default"])("pengumuman", data.form);
      } else {
        await Object(_libs_queries_crud_createRecord__WEBPACK_IMPORTED_MODULE_15__["default"])("pengumuman", data.form);
      }

      navigation.goBack();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "Simpan"), __jsx(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_13__["default"], {
    style: {
      backgroundColor: "red",
      marginLeft: -5
    },
    onPress: async () => {
      if (react_native_web__WEBPACK_IMPORTED_MODULE_12__["Platform"].OS === "web") {
        if (confirm("Apakah anda yakin ingin menghapus pengumuman ini ?")) {
          if (data.form.id) {
            await Object(_libs_queries_crud_deleteRecord__WEBPACK_IMPORTED_MODULE_16__["default"])("pengumuman", {
              id: data.form.id
            });
          }

          navigation.goBack();
        }
      } else {
        react_native_web__WEBPACK_IMPORTED_MODULE_12__["Alert"].alert("Menghapus Kewajiban", "Apakah Anda yakin ingin menghapus pengumuman ini ?", [{
          text: "NO",
          style: "cancel",
          onPress: () => {}
        }, {
          text: "YES",
          onPress: async () => {
            if (data.form.id) {
              await Object(_libs_queries_crud_deleteRecord__WEBPACK_IMPORTED_MODULE_16__["default"])("pengumuman", {
                id: data.form.id
              });
            }

            navigation.goBack();
          }
        }]);
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "Hapus"))), __jsx(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, __jsx(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Text Pengumuman",
    setValue: value => {
      data.form.pengumuman = value;
    },
    value: data.form.pengumuman,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }), __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, __jsx(_libs_ui_UIFieldSelectNative__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: "Status",
    items: [{
      value: "aktif",
      label: "Aktif"
    }, {
      value: "non-aktif",
      label: "Non-Aktif"
    }],
    value: data.form.status,
    setValue: v => {
      data.form.status = v;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }))), __jsx(_Kelas_KelasPicker__WEBPACK_IMPORTED_MODULE_11__["default"], {
    form: data.form,
    renderKelas: (kelas, detail) => {
      return __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_12__["Text"], {
        style: {
          paddingLeft: 15,
          paddingVertical: 10,
          color: "#333"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: undefined
      }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(kelas.murid).length === 1 ? `Untuk semua murid di kelas ${detail.nama_kelas}` : `Khusus untuk murid dibawah ini`);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  })));
}));

/***/ }),

/***/ "./pages/app/screens/admin/Report.tsx":
/*!********************************************!*\
  !*** ./pages/app/screens/admin/Report.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _libs_nav_StackNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../libs/nav/StackNav */ "./libs/nav/StackNav.tsx");
/* harmony import */ var _libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../libs/queries/crud/rawQuery */ "./libs/queries/crud/rawQuery.ts");
/* harmony import */ var _libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../libs/ui/UIBody */ "./libs/ui/UIBody.tsx");
/* harmony import */ var _libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../libs/ui/UIButton */ "./libs/ui/UIButton.tsx");
/* harmony import */ var _libs_ui_UICol__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../libs/ui/UICol */ "./libs/ui/UICol.tsx");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../libs/ui/UIContainer */ "./libs/ui/UIContainer.tsx");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../libs/ui/UIHead */ "./libs/ui/UIHead.tsx");
/* harmony import */ var _libs_ui_UIList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../libs/ui/UIList */ "./libs/ui/UIList.tsx");
/* harmony import */ var _libs_ui_UIListItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../libs/ui/UIListItem */ "./libs/ui/UIListItem.tsx");
/* harmony import */ var _libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../libs/ui/UIRow */ "./libs/ui/UIRow.tsx");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "dayjs/plugin/relativeTime");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash.get */ "lodash.get");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_17__);


var _jsxFileName = "/Users/riz/Documents/edumatis-web/pages/app/screens/admin/Report.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement;

















const dayjs = __webpack_require__(/*! dayjs */ "dayjs");

dayjs.extend(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_12___default.a);
const Report = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_15__["observer"])(({
  navigation
}) => {
  const data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_15__["useObservable"])({
    listRaw: [],
    filter: {
      kewajiban: '',
      kelas: ''
    },
    loading: true
  });
  const kelasList = {
    '-Semua Kelas-': true
  };
  const kewajibanList = {
    '-Semua Kewajiban-': true
  };
  const list = data.listRaw.filter(row => {
    let match = true;

    const kelas = lodash__WEBPACK_IMPORTED_MODULE_13___default.a.get(row, 'murid.kelas_murids[0].kelas.nama_kelas');

    const kewajiban = lodash__WEBPACK_IMPORTED_MODULE_13___default.a.get(row, 'kewajiban.nama_kewajiban');

    if (kelas && !kelasList[kelas]) {
      kelasList[kelas] = true;
    }

    if (kewajiban && !kewajibanList[kewajiban]) {
      kewajibanList[kewajiban] = true;
    }

    if (data.filter.kewajiban && data.filter.kewajiban !== '-Semua Kewajiban-') {
      if (kewajiban !== data.filter.kewajiban) {
        match = false;
      }
    }

    if (data.filter.kelas && data.filter.kelas !== '-Semua Kelas-') {
      if (kelas.trim() !== data.filter.kelas.trim()) {
        match = false;
      }
    }

    console.log(data.filter.kelas);
    return match;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_16__["useEffect"])(() => {
    let fetch = async () => {
      const result = await Object(_libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_3__["default"])(`{
        transaksi(order_by: {tstamp: asc}) {
          id
          status
          tstamp
          amount: detail(path:"amount")
          detail(path:"status")
          paid(path:"status")
          murid {
            id
            nama_murid
            nsa
            kelas_murids {
              kelas {
                nama_kelas
              }
            }
          }
          kewajiban {
            nama_kewajiban
          }
        }
      }
      `);
      data.listRaw = result.transaksi;
      data.loading = false;
    };

    fetch();
  }, []);
  return __jsx(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, __jsx(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_8__["default"], {
    navigation: navigation,
    title: "Laporan Transaksi",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, __jsx(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: "small",
    onPress: () => {
      const parse = (e, isRoot = false) => {
        return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(e).map(r => {
          const row = e[r];
          if (isRoot) return r;
          return row;
        }).join(',');
      };

      const csvList = [];
      list.map(e => {
        const res = {};

        for (let i in e) {
          const row = e[i];

          if (typeof row === 'object' && row !== null) {
            if (row.nama_kewajiban) res['nama_kewajiban'] = row.nama_kewajiban;

            if (row.nama_murid) {
              res['nama_murid'] = lodash__WEBPACK_IMPORTED_MODULE_13___default.a.get(row, 'nama_murid');
              res['nsa'] = lodash__WEBPACK_IMPORTED_MODULE_13___default.a.get(row, 'nsa');
              res['kelas'] = lodash__WEBPACK_IMPORTED_MODULE_13___default.a.get(row, 'kelas_murids.0.kelas.nama_kelas');
            }
          } else res[i] = row;
        }

        csvList.push(res);
      });
      let csvContent = 'data:text/csv;charset=utf-8,' + parse(csvList[0], true) + '\n' + csvList.map(e => parse(e)).join('\n');
      var encodedUri = encodeURI(csvContent);
      var link = document.createElement('a');
      link.setAttribute('href', encodedUri);
      link.setAttribute('download', 'report.csv');
      document.body.appendChild(link); // Required for FF

      link.click(); // This will download the data file named "my_data.csv".
    },
    style: {
      flexDirection: 'column',
      alignItems: 'center',
      width: 150
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, "Download CSV")), __jsx(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }, __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: undefined
  }, __jsx("select", {
    style: {
      margin: 10
    },
    value: data.filter.kelas,
    onChange: e => {
      data.filter.kelas = e.target.value;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(kelasList).map((i, idx) => __jsx("option", {
    value: i,
    key: idx,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: undefined
  }, i))), __jsx("select", {
    style: {
      margin: 10
    },
    value: data.filter.kewajiban,
    onChange: e => {
      data.filter.kewajiban = e.target.value;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: undefined
  }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(kewajibanList).map((i, idx) => __jsx("option", {
    value: i,
    key: idx,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: undefined
  }, i)))), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_17__["ScrollView"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: undefined
  }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_17__["View"], {
    style: {
      flexDirection: 'row',
      paddingLeft: 25
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: undefined
  }, __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      width: 40
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: undefined
  }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: undefined
  }, "No.")), __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      width: 200
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: undefined
  }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: undefined
  }, "Nama")), __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      width: 100
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: undefined
  }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: undefined
  }, "Kelas")), __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      width: 240
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: undefined
  }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: undefined
  }, "Kewajiban")), __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      width: 100
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: undefined
  }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: undefined
  }, "Biaya (Rp)")), __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      width: 100
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: undefined
  }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: undefined
  }, "Status")), __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      width: 150
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: undefined
  }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: undefined
  }, "Waktu")), __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      width: 150
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: undefined
  }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: undefined
  }, "Log"))), __jsx(_libs_ui_UIList__WEBPACK_IMPORTED_MODULE_9__["default"], {
    data: list,
    loading: data.loading,
    render: list => {
      const item = list.item;
      const tgl = dayjs(item.tstamp);
      const fromday = tgl.fromNow();
      const kelas = lodash_get__WEBPACK_IMPORTED_MODULE_14___default()(item, 'murid.kelas_murids[0].kelas.nama_kelas') || 'Semua Kelas';

      const nominal = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(item.amount || item.nominal);

      let status = (item.paid || item.detail || item.status).toLowerCase();
      if (status === 'paid') status = 'success';
      return __jsx(_libs_ui_UIListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onPress: () => {
          navigation.navigate('TransaksiDetail', {
            item: item
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: undefined
      }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_17__["View"], {
        style: {
          flexDirection: 'row'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: undefined
      }, __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_11__["default"], {
        style: {
          width: 40
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: undefined
      }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: undefined
      }, item.id)), __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_11__["default"], {
        style: {
          width: 200
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: undefined
      }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: undefined
      }, item.murid.nama_murid)), __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_11__["default"], {
        style: {
          width: 100
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: undefined
      }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: undefined
      }, kelas)), __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_11__["default"], {
        style: {
          width: 240
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: undefined
      }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: undefined
      }, item.kewajiban.nama_kewajiban)), __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_11__["default"], {
        style: {
          width: 100
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: undefined
      }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: undefined
      }, (nominal || 0).toLocaleString())), __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_11__["default"], {
        style: {
          width: 100
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: undefined
      }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: undefined
      }, status)), __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_11__["default"], {
        style: {
          width: 150
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: undefined
      }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: undefined
      }, tgl.format('DD MMM YYYY - hh.mm'))), __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_11__["default"], {
        style: {
          width: 150
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: undefined
      }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: undefined
      }, fromday))));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: undefined
  }))));
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_libs_nav_StackNav__WEBPACK_IMPORTED_MODULE_2__["default"])({
  Report: {
    screen: Report
  }
}));

/***/ }),

/***/ "./pages/app/screens/admin/SideBar.tsx":
/*!*********************************************!*\
  !*** ./pages/app/screens/admin/SideBar.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _libs_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../libs/config */ "./libs/config.ts");
/* harmony import */ var _libs_nav_NavContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../libs/nav/NavContainer */ "./libs/nav/NavContainer.tsx");
/* harmony import */ var _libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../libs/ui/UIImage */ "./libs/ui/UIImage.tsx");
/* harmony import */ var _libs_stores_RootStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../libs/stores/RootStore */ "./libs/stores/RootStore.ts");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "/Users/riz/Documents/edumatis-web/pages/app/screens/admin/SideBar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;







const Button = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__["observer"])(props => {
  return __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_7__["TouchableOpacity"], {
    onPress: props.onPress,
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.style, {
      flexDirection: "row",
      alignItems: "center",
      alignContent: "center"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx(_libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      width: 20,
      margin: 10,
      height: 20
    },
    source: props.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    style: {
      color: _libs_config__WEBPACK_IMPORTED_MODULE_1__["default"].color.mainText
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, props.text));
});
/* harmony default export */ __webpack_exports__["default"] = (({
  navigation
}) => {
  const navigateTo = Object(_libs_nav_NavContainer__WEBPACK_IMPORTED_MODULE_2__["createNavigateTo"])(navigation);
  return __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_7__["View"], {
    style: s.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_7__["View"], {
    style: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: '#4f4f4f'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx(_libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    source: __webpack_require__(/*! ../../imgs/logo-edumatis_b.png */ "./pages/app/imgs/logo-edumatis_b.png"),
    mobileStyle: {
      height: 160
    },
    style: {
      width: "70%",
      paddingTop: 20
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    style: {
      color: '#fff',
      paddingBottom: 25
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, "Payment System")), __jsx(Button, {
    text: "Transaksi",
    onPress: () => {
      navigateTo("Transaksi");
    },
    image: __webpack_require__(/*! ../../imgs/transaksi.png */ "./pages/app/imgs/transaksi.png"),
    style: {
      marginTop: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }), __jsx(Button, {
    text: "Kewajiban",
    onPress: () => {
      navigateTo("Kewajiban");
    },
    image: __webpack_require__(/*! ../../imgs/kewajiban.png */ "./pages/app/imgs/kewajiban.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }), __jsx(Button, {
    text: "Pengumuman",
    onPress: () => {
      navigateTo("Pengumuman");
    },
    image: __webpack_require__(/*! ../../imgs/pengumuman.png */ "./pages/app/imgs/pengumuman.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }), __jsx(Button, {
    text: "Kelas & Murid",
    onPress: () => {
      navigateTo("Kelas");
    },
    image: __webpack_require__(/*! ../../imgs/kelas.png */ "./pages/app/imgs/kelas.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }), __jsx(Button, {
    text: "Report Print",
    onPress: () => {
      navigateTo("Report");
    },
    image: __webpack_require__(/*! ../../imgs/print.png */ "./pages/app/imgs/print.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }), __jsx(Button, {
    text: "Edit Profile",
    onPress: () => {
      navigateTo("EditProfile");
    },
    image: __webpack_require__(/*! ../../imgs/users.png */ "./pages/app/imgs/users.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }), __jsx(Button, {
    text: "Logout",
    style: {
      marginTop: 20
    },
    image: __webpack_require__(/*! ../../imgs/signout.png */ "./pages/app/imgs/signout.png"),
    onPress: () => {
      _libs_stores_RootStore__WEBPACK_IMPORTED_MODULE_4__["RootStore"].session.logout();
      navigation.popToTop();
      navigation.replace("Login");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }));
});
const s = react_native_web__WEBPACK_IMPORTED_MODULE_7__["StyleSheet"].create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    // backgroundColor: config.color.main
    backgroundColor: 'dimgrey'
  }
});

/***/ }),

/***/ "./pages/app/screens/admin/Transaksi/Transaksi.tsx":
/*!*********************************************************!*\
  !*** ./pages/app/screens/admin/Transaksi/Transaksi.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/queries/crud/rawQuery */ "./libs/queries/crud/rawQuery.ts");
/* harmony import */ var _libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/ui/UIBody */ "./libs/ui/UIBody.tsx");
/* harmony import */ var _libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/ui/UIButton */ "./libs/ui/UIButton.tsx");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/ui/UIContainer */ "./libs/ui/UIContainer.tsx");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/ui/UIHead */ "./libs/ui/UIHead.tsx");
/* harmony import */ var _libs_ui_UIList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/ui/UIList */ "./libs/ui/UIList.tsx");
/* harmony import */ var _libs_ui_UIListItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/ui/UIListItem */ "./libs/ui/UIListItem.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _libs_nav_StackNav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../libs/nav/StackNav */ "./libs/nav/StackNav.tsx");
/* harmony import */ var _TransaksiDetail__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TransaksiDetail */ "./pages/app/screens/admin/Transaksi/TransaksiDetail.tsx");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "dayjs/plugin/relativeTime");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash.get */ "lodash.get");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_14__);

var _jsxFileName = "/Users/riz/Documents/edumatis-web/pages/app/screens/admin/Transaksi/Transaksi.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;













const dayjs = __webpack_require__(/*! dayjs */ "dayjs");



dayjs.extend(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_13___default.a);
const Transaksi = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_8__["observer"])(({
  navigation
}) => {
  const data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_8__["useObservable"])({
    list: [],
    loading: true
  });
  Object(react__WEBPACK_IMPORTED_MODULE_9__["useEffect"])(() => {
    let fetch = async () => {
      const result = await Object(_libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_1__["default"])(`{
        transaksi(order_by: {tstamp: asc}) {
          id
          status
          tstamp
          amount: detail(path:"amount")
          detail(path:"status")
          paid(path:"status")
          murid {
            id
            nama_murid
            nsa
            kelas_murids {
              kelas {
                nama_kelas
              }
            }
          }
          kewajiban {
            nama_kewajiban
          }
        }
      }
      `);
      data.list = result.transaksi;
      data.loading = false;
    };

    fetch();
  }, []);
  return __jsx(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_5__["default"], {
    navigation: navigation,
    title: "Transaksi",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: "small",
    onPress: () => {
      navigation.navigate("TransaksiDetail", {
        item: {
          nominal: 100000,
          kelas: {}
        }
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, "+ Transaksi Baru")), __jsx(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, __jsx(_libs_ui_UIList__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: data.list,
    loading: data.loading,
    render: list => {
      const item = list.item;
      const tgl = dayjs(item.tstamp);
      const fromday = tgl.fromNow();
      const kelas = lodash_get__WEBPACK_IMPORTED_MODULE_14___default()(item, "murid.kelas_murids[0].kelas.nama_kelas") || "Semua Kelas";

      const nominal = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(item.amount || item.nominal);

      let status = (item.paid || item.detail || item.status).toLowerCase();
      if (status === "paid") status = "success";
      return __jsx(_libs_ui_UIListItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onPress: () => {
          navigation.navigate("TransaksiDetail", {
            item: item
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: undefined
      }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_10__["View"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: undefined
      }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        style: {
          fontSize: 15,
          fontWeight: "bold",
          color: "#555"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: undefined
      }, "#", item.id, " ", item.kewajiban.nama_kewajiban, " - Rp", " ", (nominal || 0).toLocaleString(), " ", "(", status, ")"), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        style: {
          fontSize: 14
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: undefined
      }, item.murid.nama_murid, " - ", kelas)), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_10__["View"], {
        style: {
          alignItems: "flex-end"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: undefined
      }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: undefined
      }, fromday), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        style: {
          fontSize: 12
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: undefined
      }, tgl.format("DD MMM YYYY - hh.mm"))));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_libs_nav_StackNav__WEBPACK_IMPORTED_MODULE_11__["default"])({
  Transaksi: {
    screen: Transaksi
  },
  TransaksiDetail: {
    screen: _TransaksiDetail__WEBPACK_IMPORTED_MODULE_12__["default"]
  }
}));

/***/ }),

/***/ "./pages/app/screens/admin/Transaksi/TransaksiDetail.tsx":
/*!***************************************************************!*\
  !*** ./pages/app/screens/admin/Transaksi/TransaksiDetail.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/ui/UIBody */ "./libs/ui/UIBody.tsx");
/* harmony import */ var _libs_ui_UICol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/ui/UICol */ "./libs/ui/UICol.tsx");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/ui/UIContainer */ "./libs/ui/UIContainer.tsx");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/ui/UIHead */ "./libs/ui/UIHead.tsx");
/* harmony import */ var _libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/ui/UIRow */ "./libs/ui/UIRow.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "/Users/riz/Documents/edumatis-web/pages/app/screens/admin/Transaksi/TransaksiDetail.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;








/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__["observer"])(({
  navigation
}) => {
  const data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__["useObservable"])({
    form: (navigation || {
      getParam: () => ({})
    }).getParam('item')
  });
  const item = data.form;

  const nominal = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(item.amount || item.nominal || 0);

  let status = (item.paid || item.detail || item.status || '').toLowerCase();
  if (status === 'paid') status = 'success';
  return __jsx(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_4__["default"], {
    navigation: navigation,
    title: `#${item.id} ${(item.kewajiban || '').nama_kewajiban} - Rp ${nominal.toLocaleString()}`,
    onBack: () => {
      navigation.goBack();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), status !== '' && __jsx(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 1,
    sizexs: 4,
    sizemd: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "Siswa:"), __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 11,
    sizexs: 8,
    sizemd: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, item.murid.nama_murid)), __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 1,
    sizexs: 4,
    sizemd: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "Kelas:"), __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 11,
    sizexs: 8,
    sizemd: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, item.murid.kelas_murids[0].kelas.nama_kelas || 'Semua Kelas')), __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 1,
    sizexs: 4,
    sizemd: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "Nominal:"), __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 11,
    sizexs: 8,
    sizemd: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, "Rp ", nominal.toLocaleString()))), __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 1,
    sizexs: 4,
    sizemd: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, "Status:"), __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 11,
    sizexs: 8,
    sizemd: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, status))));
}));

/***/ }),

/***/ "./pages/app/screens/siswa/Home.tsx":
/*!******************************************!*\
  !*** ./pages/app/screens/siswa/Home.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Kewajiban_Kewajiban__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Kewajiban/Kewajiban */ "./pages/app/screens/siswa/Kewajiban/Kewajiban.tsx");
/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideBar */ "./pages/app/screens/siswa/SideBar.tsx");
/* harmony import */ var _libs_nav_SideNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../libs/nav/SideNav */ "./libs/nav/SideNav.tsx");
/* harmony import */ var _Pengumuman_Pengumuman__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pengumuman/Pengumuman */ "./pages/app/screens/siswa/Pengumuman/Pengumuman.tsx");
/* harmony import */ var _UbahPassword__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UbahPassword */ "./pages/app/screens/siswa/UbahPassword.tsx");





/* harmony default export */ __webpack_exports__["default"] = (Object(_libs_nav_SideNav__WEBPACK_IMPORTED_MODULE_2__["default"])({
  Kewajiban: {
    screen: _Kewajiban_Kewajiban__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  Pengumuman: {
    screen: _Pengumuman_Pengumuman__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  UbahPassword: {
    screen: _UbahPassword__WEBPACK_IMPORTED_MODULE_4__["default"]
  }
}, {
  contentComponent: _SideBar__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./pages/app/screens/siswa/Kewajiban/Kewajiban.tsx":
/*!*********************************************************!*\
  !*** ./pages/app/screens/siswa/Kewajiban/Kewajiban.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _libs_nav_StackNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/nav/StackNav */ "./libs/nav/StackNav.tsx");
/* harmony import */ var _libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/queries/crud/rawQuery */ "./libs/queries/crud/rawQuery.ts");
/* harmony import */ var _libs_queries_user_getsetSession__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/queries/user/getsetSession */ "./libs/queries/user/getsetSession.ts");
/* harmony import */ var _libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/ui/UIBody */ "./libs/ui/UIBody.tsx");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/ui/UIContainer */ "./libs/ui/UIContainer.tsx");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/ui/UIHead */ "./libs/ui/UIHead.tsx");
/* harmony import */ var _libs_ui_UIList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../libs/ui/UIList */ "./libs/ui/UIList.tsx");
/* harmony import */ var _libs_ui_UIListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../libs/ui/UIListItem */ "./libs/ui/UIListItem.tsx");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! dayjs */ "dayjs");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _KewajibanDetail__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./KewajibanDetail */ "./pages/app/screens/siswa/Kewajiban/KewajibanDetail.tsx");


var _jsxFileName = "/Users/riz/Documents/edumatis-web/pages/app/screens/siswa/Kewajiban/Kewajiban.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement;













const Kewajiban = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_11__["observer"])(({
  navigation
}) => {
  const data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_11__["useObservable"])({
    list: [],
    loading: true
  });
  return __jsx(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Kewajiban bulan ini",
    navigation: navigation,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), __jsx(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx(_libs_ui_UIList__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: data.list,
    loading: data.loading,
    render: list => {
      const item = list.item;
      return __jsx(_libs_ui_UIListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onPress: () => {
          navigation.navigate("KewajibanDetail", {
            item: item
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: undefined
      }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_13__["View"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: undefined
      }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_13__["Text"], {
        style: {
          fontSize: 15,
          fontWeight: "bold",
          color: "#555"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: undefined
      }, item.nama_kewajiban), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_13__["Text"], {
        style: {
          fontSize: 14
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: undefined
      }, "Rp ", item.nominal.toLocaleString(), " (", item.status, ")")), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_13__["View"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: undefined
      }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_13__["Text"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: undefined
      }, item.tipe_pembayaran)));
    },
    reload: async () => {
      const session = await Object(_libs_queries_user_getsetSession__WEBPACK_IMPORTED_MODULE_4__["getSession"])();
      const kelasRaw = await Object(_libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_3__["default"])(`{
              kelas_murid(where: {murid_id: {_eq: ${session.murid.id}}}) {
                kelas_id
              }
            }`);

      if (kelasRaw && kelasRaw.kelas_murid && kelasRaw.kelas_murid.length > 0) {
        const kelas = kelasRaw.kelas_murid.map(k => {
          return k.kelas_id.toString();
        });
        const monthStart = dayjs__WEBPACK_IMPORTED_MODULE_10___default()().startOf("month").subtract(1, "day").format("YYYY-MM-DD");
        const monthEnd = dayjs__WEBPACK_IMPORTED_MODULE_10___default()().endOf("month").add(1, "day").format("YYYY-MM-DD");
        const result = await Object(_libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_3__["default"])(`{
                kewajiban(order_by: [{tipe_pembayaran: asc}, {id: asc}], 
                  where: {kelas: {_has_keys_any: ${_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(kelas)}}}) {
                  id
                  nama_kewajiban
                  nominal
                  tipe_pembayaran
                  kelas
                  transaksi(
                    where: {
                      kewajiban: {
                        _or:[
                          {_and:[
                            {tipe_pembayaran:{_eq:"Bulanan"}},
                            {transaksi: {
                               _and:[
                                {tstamp: {_gte: "${monthStart}"}},
                                {tstamp: {_lte: "${monthEnd}"}},
                              ] 
                            }}
                          ]},
                          {tipe_pembayaran:{_eq:"Insidentil"}}
                        ]
                      }
                    }
                  ) {
                    id
                    status
                    tstamp
                    detail
                  }
                }  
              }`);
        data.list = result.kewajiban.map(item => {
          _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(item.kelas).forEach(i => {
            const k = item.kelas[i];

            if (kelas.indexOf(k.id + "") >= 0 && k.nominal !== undefined) {
              item.nominal = k.nominal * 1;
            }

            k.murid.forEach(m => {
              if (m && session.murid && m.id === session.murid.id) {
                if (m.nominal !== undefined) {
                  item.nominal = m.nominal * 1;
                }
              }
            });
          });

          item.status = "Belum Lunas";
          item.transaksi.forEach(t => {
            if (t.paid === "success") {
              item.status = "Lunas";
            }
          });
          return item;
        });
      }

      data.loading = false;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_libs_nav_StackNav__WEBPACK_IMPORTED_MODULE_2__["default"])({
  Kewajiban: {
    screen: Kewajiban
  },
  KewajibanDetail: {
    screen: _KewajibanDetail__WEBPACK_IMPORTED_MODULE_14__["default"]
  }
}));

/***/ }),

/***/ "./pages/app/screens/siswa/Kewajiban/KewajibanDetail.tsx":
/*!***************************************************************!*\
  !*** ./pages/app/screens/siswa/Kewajiban/KewajibanDetail.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _libs_queries_crud_createRecord__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/queries/crud/createRecord */ "./libs/queries/crud/createRecord.ts");
/* harmony import */ var _libs_queries_crud_updateRecord__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/queries/crud/updateRecord */ "./libs/queries/crud/updateRecord.ts");
/* harmony import */ var _libs_queries_user_getsetSession__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/queries/user/getsetSession */ "./libs/queries/user/getsetSession.ts");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/ui/UIContainer */ "./libs/ui/UIContainer.tsx");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/ui/UIHead */ "./libs/ui/UIHead.tsx");
/* harmony import */ var _libs_ui_UIWebView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/ui/UIWebView */ "./libs/ui/UIWebView.tsx");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! dayjs */ "dayjs");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_12__);


var _jsxFileName = "/Users/riz/Documents/edumatis-web/pages/app/screens/siswa/Kewajiban/KewajibanDetail.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;











/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_10__["observer"])(({
  navigation
}) => {
  const data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_10__["useObservable"])({
    error: '',
    form: (navigation || {
      getParam: () => ({
        transaksi: []
      })
    }).getParam('item')
  });
  let transaksi = {};

  if (data.form.transaksi.length > 0) {
    transaksi = data.form.transaksi[0];
  }

  Object(react__WEBPACK_IMPORTED_MODULE_11__["useEffect"])(() => {
    const req = async function () {
      const session = await Object(_libs_queries_user_getsetSession__WEBPACK_IMPORTED_MODULE_4__["getSession"])();

      const nominalBeda = data.form.status === 'Belum Lunas' && transaksi && transaksi.detail && _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(transaksi.detail.amount) !== _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(data.form.nominal);

      const expired = data.form.status === 'Belum Lunas' && transaksi && transaksi.detail && dayjs__WEBPACK_IMPORTED_MODULE_8___default()(transaksi.detail.expiry_date).isBefore(dayjs__WEBPACK_IMPORTED_MODULE_8___default()());

      if (!transaksi || !transaksi.detail || nominalBeda || expired) {
        if (!transaksi || !transaksi.detail) {
          let res = await Object(_libs_queries_crud_createRecord__WEBPACK_IMPORTED_MODULE_2__["default"])('transaksi', {
            kewajiban_id: Object(mobx__WEBPACK_IMPORTED_MODULE_9__["toJS"])(data.form.id)
          });
          data.form.transaksi.push({
            id: res
          });
          transaksi = data.form.transaksi[0];
          transaksi.id = res;
        }

        if (nominalBeda) {
          data.form.transaksi[0].detail = null;
        }

        var params = {
          external_id: transaksi.id,
          payer_email: session.murid.email || `j@edumatis.id`,
          description: `${session.sekolah.nama} - ${session.kelas.nama} - ${session.murid.nama_murid} - ${data.form.nama_kewajiban}`,
          amount: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(data.form.nominal) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(session.sekolah.margin)
        };
        var myHeaders = new Headers();
        myHeaders.append('pragma', 'no-cache');
        myHeaders.append('cache-control', 'no-cache');
        const response = await fetch(`https://backend.cap.edumatis.id/invoice`, {
          method: 'POST',
          body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(params),
          headers: myHeaders
        });

        if (response.status !== 200) {
          const json = await response.json();
          data.error = json.message;
          return;
        }

        const json = await response.json();
        await Object(_libs_queries_crud_updateRecord__WEBPACK_IMPORTED_MODULE_3__["default"])('transaksi', {
          id: transaksi.id,
          nominal: data.form.nominal,
          detail: json
        });
        data.form.transaksi[0].detail = json;
      }
    };

    req();
  }, []);
  return __jsx(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      backgroundColor: '#F5FAFD'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, __jsx(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_6__["default"], {
    navigation: navigation,
    title: `${data.form.nama_kewajiban} (${data.form.status})`,
    onBack: () => {
      navigation.goBack();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_12__["View"], {
    style: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, data.error === '' && !transaksi.detail && __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_12__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, "Membuat Invoice..."), data.error != '' && __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_12__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, data.error), data.error === '' && transaksi.detail && !transaksi.paid && __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_12__["View"], {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, __jsx(_libs_ui_UIWebView__WEBPACK_IMPORTED_MODULE_7__["default"], {
    style: {
      flex: 1
    },
    source: {
      html: `
            <!DOCTYPE html>
            <html>
                <head>
                <meta name="viewport" content=" initial-scale=1">
                </head> 
                <body>
                <center style="margin:100px">Memuat<br/> Instruksi Pembayaran...</center>
                <iframe 
                style="position:absolute;left:0;right:0;bottom:0;top:0;"
                width="100%" height="100%" src="${transaksi.detail.invoice_url}"  frameborder="0"></iframe></div> 
            </body>
            </html>`
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }))));
}));

/***/ }),

/***/ "./pages/app/screens/siswa/Pengumuman/Pengumuman.tsx":
/*!***********************************************************!*\
  !*** ./pages/app/screens/siswa/Pengumuman/Pengumuman.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/queries/crud/rawQuery */ "./libs/queries/crud/rawQuery.ts");
/* harmony import */ var _libs_queries_user_getsetSession__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/queries/user/getsetSession */ "./libs/queries/user/getsetSession.ts");
/* harmony import */ var _libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/ui/UIBody */ "./libs/ui/UIBody.tsx");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/ui/UIContainer */ "./libs/ui/UIContainer.tsx");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/ui/UIHead */ "./libs/ui/UIHead.tsx");
/* harmony import */ var _libs_ui_UIList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/ui/UIList */ "./libs/ui/UIList.tsx");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dayjs */ "dayjs");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "dayjs/plugin/relativeTime");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "/Users/riz/Documents/edumatis-web/pages/app/screens/siswa/Pengumuman/Pengumuman.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;











dayjs__WEBPACK_IMPORTED_MODULE_7___default.a.extend(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_8___default.a);
/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__["observer"])(({
  navigation
}) => {
  const data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__["useObservable"])({
    loading: true,
    list: []
  });
  return __jsx(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_5__["default"], {
    navigation: navigation,
    title: "Pengumuman",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), __jsx(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx(_libs_ui_UIList__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: data.list,
    loading: data.loading,
    render: list => {
      const item = list.item;
      const date = dayjs__WEBPACK_IMPORTED_MODULE_7___default()(item.tgl).fromNow();
      return __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_11__["View"], {
        style: {
          padding: 10,
          paddingHorizontal: 15
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: undefined
      }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_11__["View"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: undefined
      }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_11__["Text"], {
        style: {
          fontSize: 15,
          fontWeight: "bold",
          color: "#555"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: undefined
      }, item.pengumuman), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_11__["Text"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: undefined
      }, date)));
    },
    reload: async () => {
      const session = await Object(_libs_queries_user_getsetSession__WEBPACK_IMPORTED_MODULE_2__["getSession"])();
      const kelasRaw = await Object(_libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_1__["default"])(`{
              kelas_murid(where: {murid_id: {_eq: ${session.murid.id}}}) {
                kelas_id
              }
            }`);

      if (kelasRaw && kelasRaw.kelas_murid && kelasRaw.kelas_murid.length > 0) {
        const kelas = kelasRaw.kelas_murid.map(k => {
          return k.kelas_id.toString();
        });
        const result = await Object(_libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_1__["default"])(`{
                  pengumuman(where: {status: {_eq: "aktif"}, kelas: {_has_keys_any: ${_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(kelas)}}}) {
                    pengumuman
                    status
                    tgl
                  }
                }
                `);
        data.list = result.pengumuman.map(item => {
          return item;
        });
      }

      data.loading = false;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  })));
}));

/***/ }),

/***/ "./pages/app/screens/siswa/SideBar.tsx":
/*!*********************************************!*\
  !*** ./pages/app/screens/siswa/SideBar.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _libs_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../libs/config */ "./libs/config.ts");
/* harmony import */ var _libs_nav_NavContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../libs/nav/NavContainer */ "./libs/nav/NavContainer.tsx");
/* harmony import */ var _libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../libs/queries/crud/rawQuery */ "./libs/queries/crud/rawQuery.ts");
/* harmony import */ var _libs_queries_user_getsetSession__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../libs/queries/user/getsetSession */ "./libs/queries/user/getsetSession.ts");
/* harmony import */ var _libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../libs/ui/UIImage */ "./libs/ui/UIImage.tsx");
/* harmony import */ var _libs_stores_RootStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../libs/stores/RootStore */ "./libs/stores/RootStore.ts");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "/Users/riz/Documents/edumatis-web/pages/app/screens/siswa/SideBar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;









const Button = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__["observer"])(props => {
  return __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_9__["TouchableOpacity"], {
    onPress: props.onPress,
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.style, {
      flexDirection: "row",
      alignItems: "center",
      alignContent: "center"
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx(_libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      width: 20,
      margin: 10,
      height: 20
    },
    source: props.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_9__["Text"], {
    style: {
      color: _libs_config__WEBPACK_IMPORTED_MODULE_1__["default"].color.mainText
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, props.text));
});
/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__["observer"])(({
  navigation
}) => {
  const navigateTo = Object(_libs_nav_NavContainer__WEBPACK_IMPORTED_MODULE_2__["createNavigateTo"])(navigation);
  const data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_7__["useObservable"])({
    session: {
      murid: {}
    },
    kelas: {}
  });
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(() => {
    const load = async function () {
      data.session = await Object(_libs_queries_user_getsetSession__WEBPACK_IMPORTED_MODULE_4__["getSession"])();
      let kelas = await Object(_libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_3__["default"])(`{
        kelas_murid(where: {murid_id: {_eq: ${data.session.murid.id}}}) {
          kelas {
            nama_kelas
          }
        }
      }
      `);

      if (kelas.kelas_murid.length > 0) {
        data.kelas = kelas.kelas_murid[0].kelas;
      }
    };

    load();
  }, []);
  return __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_9__["View"], {
    style: s.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_9__["View"], {
    style: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: '#4f4f4f'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx(_libs_ui_UIImage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    source: __webpack_require__(/*! ../../imgs/logo-edumatis_b.png */ "./pages/app/imgs/logo-edumatis_b.png"),
    mobileStyle: {
      height: 160
    },
    style: {
      width: "70%",
      paddingTop: 20
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_9__["Text"], {
    style: {
      color: '#fff',
      paddingBottom: 25
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, "Payment System")), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_9__["View"], {
    style: {
      borderTopColor: "#8F7DD8",
      borderTopWidth: 1,
      marginBottom: 15
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_9__["Text"], {
    style: {
      padding: 10,
      paddingVertical: 2,
      color: "white"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, "NSA: ", data.session.murid.nsa), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_9__["Text"], {
    style: {
      padding: 10,
      paddingVertical: 2,
      color: "white"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, "Nama: ", data.session.murid.nama_murid), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_9__["Text"], {
    style: {
      padding: 10,
      paddingVertical: 2,
      color: "white"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, "Kelas: ", data.kelas.nama_kelas), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_9__["TouchableOpacity"], {
    style: {
      marginTop: 10,
      marginLeft: 3
    },
    onPress: () => {
      navigateTo("UbahPassword");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_9__["Text"], {
    style: {
      padding: 7,
      paddingVertical: 2,
      color: "white",
      fontSize: 11
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, "Ubah Password")), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_9__["View"], {
    style: {
      borderTopColor: "#8F7DD8",
      borderTopWidth: 1,
      marginVertical: 15
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_9__["View"], {
    style: {
      flex: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, __jsx(Button, {
    text: "Kewajiban",
    onPress: () => {
      navigateTo("Kewajiban");
    },
    image: __webpack_require__(/*! ../../imgs/kewajiban.png */ "./pages/app/imgs/kewajiban.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }), __jsx(Button, {
    text: "Pengumuman",
    onPress: () => {
      navigateTo("Pengumuman");
    },
    image: __webpack_require__(/*! ../../imgs/pengumuman.png */ "./pages/app/imgs/pengumuman.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }), __jsx(Button, {
    text: "Logout",
    style: {
      marginTop: 20
    },
    image: __webpack_require__(/*! ../../imgs/logout.png */ "./pages/app/imgs/logout.png"),
    onPress: () => {
      _libs_stores_RootStore__WEBPACK_IMPORTED_MODULE_6__["RootStore"].session.logout();
      navigation.popToTop();
      navigation.replace("Login");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  })));
}));
const s = react_native_web__WEBPACK_IMPORTED_MODULE_9__["StyleSheet"].create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    // backgroundColor: config.color.main
    backgroundColor: 'dimgrey'
  }
});

/***/ }),

/***/ "./pages/app/screens/siswa/UbahPassword.tsx":
/*!**************************************************!*\
  !*** ./pages/app/screens/siswa/UbahPassword.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../libs/ui/UIBody */ "./libs/ui/UIBody.tsx");
/* harmony import */ var _libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../libs/ui/UIButton */ "./libs/ui/UIButton.tsx");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../libs/ui/UIContainer */ "./libs/ui/UIContainer.tsx");
/* harmony import */ var _libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../libs/ui/UIFieldText */ "./libs/ui/UIFieldText.tsx");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../libs/ui/UIHead */ "./libs/ui/UIHead.tsx");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-native-web */ "react-native-web");
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_native_web__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _libs_queries_user_getsetSession__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../libs/queries/user/getsetSession */ "./libs/queries/user/getsetSession.ts");
/* harmony import */ var _libs_queries_crud_updateRecord__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../libs/queries/crud/updateRecord */ "./libs/queries/crud/updateRecord.ts");
/* harmony import */ var _libs_queries_user_hashPassword__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../libs/queries/user/hashPassword */ "./libs/queries/user/hashPassword.ts");
var _jsxFileName = "/Users/riz/Documents/edumatis-web/pages/app/screens/siswa/UbahPassword.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;











/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__["observer"])(({
  navigation
}) => {
  const data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__["useObservable"])({
    new1: "",
    new2: "",
    old: "",
    loading: false
  });
  return __jsx(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_4__["default"], {
    navigation: navigation,
    title: "Ubah Password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), __jsx(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_0__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "password",
    label: "Password Lama",
    value: data.old,
    setValue: value => data.old = value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), __jsx(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "password",
    label: "Password Baru",
    value: data.new1,
    setValue: value => data.new1 = value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }), __jsx(_libs_ui_UIFieldText__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "password",
    label: "Ulangi Password Baru",
    value: data.new2,
    setValue: value => data.new2 = value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }), data.loading ? __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "Loading...") : __jsx(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onPress: async () => {
      const a = react_native_web__WEBPACK_IMPORTED_MODULE_7__["Platform"].OS === "web" ? alert : react_native_web__WEBPACK_IMPORTED_MODULE_7__["Alert"].alert;
      const session = await Object(_libs_queries_user_getsetSession__WEBPACK_IMPORTED_MODULE_8__["getSession"])();

      if (!data.new1 || !data.new2 || !data.old) {
        a("Mohon isi password dengan lengkap");
        return false;
      }

      if (data.new1 !== data.new2) {
        a("Password tidak sama ");
        return false;
      }

      data.loading = true;
      const response = await fetch("https://backend.cap.edumatis.id", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Hasura-Username": session.murid.nsa,
          "X-Hasura-Password": data.old,
          "X-Hasura-Cid": session.murid.sekolah_id + ""
        }
      });
      let res = await response.json();
      console.log(res, {
        "Content-Type": "application/json",
        "X-Hasura-Username": session.murid.nsa,
        "X-Hasura-Password": data.old,
        "X-Hasura-Cid": session.murid.sekolah_id + ""
      });

      if (res["X-Hasura-Role"] !== "anonymous") {
        await Object(_libs_queries_crud_updateRecord__WEBPACK_IMPORTED_MODULE_9__["default"])("murid", {
          id: session.murid.id,
          password: data.new1
        });
        await Object(_libs_queries_user_hashPassword__WEBPACK_IMPORTED_MODULE_10__["hashPassword"])(session.murid.id);
        a("Password berhasil di-ubah!");
      } else {
        a("Password lama salah");
      }

      data.loading = false;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "Ubah Password")));
}));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/App */ "./pages/app/App.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_app_App__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/riz/Documents/edumatis-web/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "dayjs":
/*!************************!*\
  !*** external "dayjs" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dayjs");

/***/ }),

/***/ "dayjs/plugin/relativeTime":
/*!********************************************!*\
  !*** external "dayjs/plugin/relativeTime" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dayjs/plugin/relativeTime");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "lodash.get":
/*!*****************************!*\
  !*** external "lodash.get" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.get");

/***/ }),

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),

/***/ "mobx-react-lite":
/*!**********************************!*\
  !*** external "mobx-react-lite" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-react-lite");

/***/ }),

/***/ "mobx-state-tree":
/*!**********************************!*\
  !*** external "mobx-state-tree" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-state-tree");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-native-web":
/*!***********************************!*\
  !*** external "react-native-web" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-native-web");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map