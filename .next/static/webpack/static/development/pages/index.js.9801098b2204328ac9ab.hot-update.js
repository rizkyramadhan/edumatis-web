webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _libs_nav_StackNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../libs/nav/StackNav */ "./libs/nav/StackNav.tsx");
/* harmony import */ var _libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../libs/queries/crud/rawQuery */ "./libs/queries/crud/rawQuery.ts");
/* harmony import */ var _libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../libs/ui/UIBody */ "./libs/ui/UIBody.tsx");
/* harmony import */ var _libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../libs/ui/UIButton */ "./libs/ui/UIButton.tsx");
/* harmony import */ var _libs_ui_UICol__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../libs/ui/UICol */ "./libs/ui/UICol.tsx");
/* harmony import */ var _libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../libs/ui/UIContainer */ "./libs/ui/UIContainer.tsx");
/* harmony import */ var _libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../libs/ui/UIHead */ "./libs/ui/UIHead.tsx");
/* harmony import */ var _libs_ui_UIList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../libs/ui/UIList */ "./libs/ui/UIList.tsx");
/* harmony import */ var _libs_ui_UIListItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../libs/ui/UIListItem */ "./libs/ui/UIListItem.tsx");
/* harmony import */ var _libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../libs/ui/UIRow */ "./libs/ui/UIRow.tsx");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "./node_modules/dayjs/plugin/relativeTime.js");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lodash.get */ "./node_modules/lodash.get/index.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/dist/index.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_native_web__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-native-web */ "./node_modules/react-native-web/dist/index.js");




var _jsxFileName = "/Users/riz/Documents/edumatis-web/pages/app/screens/admin/Report.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement;

















var dayjs = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");

dayjs.extend(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_14___default.a);
var Report = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_17__["observer"])(function (_ref) {
  var navigation = _ref.navigation;
  var data = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_17__["useObservable"])({
    listRaw: [],
    filter: {
      kewajiban: '',
      kelas: ''
    },
    loading: true
  });
  var kelasList = {
    ' Semua Kelas': true
  };
  var list = data.listRaw.filter(function (row) {
    var match = true;

    var kelas = lodash__WEBPACK_IMPORTED_MODULE_15___default.a.get(row, 'murid.kelas_murids[0].kelas.nama_kelas');

    if (kelasList[kelas]) {
      kelasList[kelas] = true;
    }

    if (data.filter.kewajiban) {
      if (row.nama_kewajiban !== data.filter.kewajiban) {
        match = false;
      }
    }

    if (data.filter.kelas && data.filter.kelas !== ' Semua kelas') {
      if (kelas.trim() !== data.filter.kelas.trim()) {
        match = false;
      }
    }

    return match;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_18__["useEffect"])(function () {
    var fetch =
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
        var result;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_libs_queries_crud_rawQuery__WEBPACK_IMPORTED_MODULE_5__["default"])("{\n        transaksi(order_by: {tstamp: asc}) {\n          id\n          status\n          tstamp\n          amount: detail(path:\"amount\")\n          detail(path:\"status\")\n          paid(path:\"status\")\n          murid {\n            id\n            nama_murid\n            nsa\n            kelas_murids {\n              kelas {\n                nama_kelas\n              }\n            }\n          }\n          kewajiban {\n            nama_kewajiban\n          }\n        }\n      }\n      ");

              case 2:
                result = _context.sent;
                data.listRaw = result.transaksi;
                data.loading = false;

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetch() {
        return _ref2.apply(this, arguments);
      };
    }();

    fetch();
  }, []);
  return __jsx(_libs_ui_UIContainer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(_libs_ui_UIHead__WEBPACK_IMPORTED_MODULE_10__["default"], {
    navigation: navigation,
    title: "Laporan Transaksi",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(_libs_ui_UIButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    size: "small",
    onPress: function onPress() {
      var parse = function parse(e) {
        var isRoot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(e).map(function (r) {
          var row = e[r];
          if (isRoot) return r;
          return row;
        }).join(',');
      };

      var csvList = [];
      list.map(function (e) {
        var res = {};

        for (var i in e) {
          var row = e[i];

          if (typeof row === 'object' && row !== null) {
            if (row.nama_kewajiban) res['nama_kewajiban'] = row.nama_kewajiban;

            if (row.nama_murid) {
              res['nama_murid'] = lodash__WEBPACK_IMPORTED_MODULE_15___default.a.get(row, 'nama_murid');
              res['nsa'] = lodash__WEBPACK_IMPORTED_MODULE_15___default.a.get(row, 'nsa');
              res['kelas'] = lodash__WEBPACK_IMPORTED_MODULE_15___default.a.get(row, 'kelas_murids.0.kelas.nama_kelas');
            }
          } else res[i] = row;
        }

        csvList.push(res);
      });
      var csvContent = 'data:text/csv;charset=utf-8,' + parse(csvList[0], true) + '\n' + csvList.map(function (e) {
        return parse(e);
      }).join('\n');
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
      lineNumber: 86
    },
    __self: this
  }, "Download CSV")), __jsx(_libs_ui_UIBody__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx("select", {
    value: data.filter.kelas,
    onChange: function onChange(e) {
      data.filter.kelas = e.target.value;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(kelasList).map(function (i, idx) {
    return __jsx("option", {
      value: i,
      key: idx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, i);
  }))), __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_19__["ScrollView"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_19__["View"], {
    style: {
      flexDirection: 'row',
      paddingLeft: 25
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_13__["default"], {
    style: {
      width: 40
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "No.")), __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_13__["default"], {
    style: {
      width: 200
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "Nama")), __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_13__["default"], {
    style: {
      width: 100
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, "Kelas")), __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_13__["default"], {
    style: {
      width: 240
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, "Kewajiban")), __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_13__["default"], {
    style: {
      width: 100
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, "Biaya (Rp)")), __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_13__["default"], {
    style: {
      width: 100
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, "Status")), __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_13__["default"], {
    style: {
      width: 150
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, "Waktu")), __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_13__["default"], {
    style: {
      width: 150
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, "Log"))), __jsx(_libs_ui_UIList__WEBPACK_IMPORTED_MODULE_11__["default"], {
    data: list,
    loading: data.loading,
    render: function render(list) {
      var item = list.item;
      var tgl = dayjs(item.tstamp);
      var fromday = tgl.fromNow();
      var kelas = lodash_get__WEBPACK_IMPORTED_MODULE_16___default()(item, 'murid.kelas_murids[0].kelas.nama_kelas') || 'Semua Kelas';

      var nominal = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(item.amount || item.nominal);

      var status = (item.paid || item.detail || item.status).toLowerCase();
      if (status === 'paid') status = 'success';
      return __jsx(_libs_ui_UIListItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onPress: function onPress() {
          navigation.navigate('TransaksiDetail', {
            item: item
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, __jsx(react_native_web__WEBPACK_IMPORTED_MODULE_19__["View"], {
        style: {
          flexDirection: 'row'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_13__["default"], {
        style: {
          width: 40
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, item.id)), __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_13__["default"], {
        style: {
          width: 200
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, item.murid.nama_murid)), __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_13__["default"], {
        style: {
          width: 100
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, kelas)), __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_13__["default"], {
        style: {
          width: 240
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }, item.kewajiban.nama_kewajiban)), __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_13__["default"], {
        style: {
          width: 100
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, (nominal || 0).toLocaleString())), __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_13__["default"], {
        style: {
          width: 100
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, status)), __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_13__["default"], {
        style: {
          width: 150
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, tgl.format('DD MMM YYYY - hh.mm'))), __jsx(_libs_ui_UIRow__WEBPACK_IMPORTED_MODULE_13__["default"], {
        style: {
          width: 150
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, __jsx(_libs_ui_UICol__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, fromday))));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }))));
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_libs_nav_StackNav__WEBPACK_IMPORTED_MODULE_4__["default"])({
  Report: {
    screen: Report
  }
}));

/***/ })

})
//# sourceMappingURL=index.js.9801098b2204328ac9ab.hot-update.js.map