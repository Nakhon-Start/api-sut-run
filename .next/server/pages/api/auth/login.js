"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/login";
exports.ids = ["pages/api/auth/login"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "serverless-mysql":
/*!***********************************!*\
  !*** external "serverless-mysql" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("serverless-mysql");

/***/ }),

/***/ "./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"sql_query\": () => (/* binding */ sql_query)\n/* harmony export */ });\n/* harmony import */ var serverless_mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! serverless-mysql */ \"serverless-mysql\");\n/* harmony import */ var serverless_mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(serverless_mysql__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = serverless_mysql__WEBPACK_IMPORTED_MODULE_0___default()({\n    config: {\n        host: process.env.MYSQL_HOST,\n        database: process.env.MYSQL_DATABASE,\n        user: process.env.MYSQL_USER,\n        password: process.env.MYSQL_PASSWORD\n    }\n});\nasync function sql_query(query_string, values = []) {\n    try {\n        const results = await db.query(query_string, values);\n        await db.end();\n        return results;\n    } catch (e) {\n        throw Error(e.message);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFvQztBQUU3QixLQUFLLENBQUNDLEVBQUUsR0FBR0QsdURBQUssQ0FBQyxDQUFDO0lBQ3ZCRSxNQUFNLEVBQUUsQ0FBQztRQUNQQyxJQUFJLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVO1FBQzVCQyxRQUFRLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxjQUFjO1FBQ3BDQyxJQUFJLEVBQUVMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxVQUFVO1FBQzVCQyxRQUFRLEVBQUVQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTyxjQUFjO0lBQ3RDLENBQUM7QUFDSCxDQUFDO0FBR00sZUFBZUMsU0FBUyxDQUFDQyxZQUFZLEVBQUVDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzFELEdBQUcsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDQyxPQUFPLEdBQUcsS0FBSyxDQUFDZixFQUFFLENBQUNnQixLQUFLLENBQUNILFlBQVksRUFBRUMsTUFBTTtRQUNuRCxLQUFLLENBQUNkLEVBQUUsQ0FBQ2lCLEdBQUc7UUFDWixNQUFNLENBQUNGLE9BQU87SUFDaEIsQ0FBQyxDQUFDLEtBQUssRUFBRUcsQ0FBQyxFQUFFLENBQUM7UUFDWCxLQUFLLENBQUNDLEtBQUssQ0FBQ0QsQ0FBQyxDQUFDRSxPQUFPO0lBQ3ZCLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3V0cnVuLy4vbGliL2RiLmpzPzNkYzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG15c3FsIGZyb20gXCJzZXJ2ZXJsZXNzLW15c3FsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZGIgPSBteXNxbCh7XHJcbiAgY29uZmlnOiB7XHJcbiAgICBob3N0OiBwcm9jZXNzLmVudi5NWVNRTF9IT1NULFxyXG4gICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52Lk1ZU1FMX0RBVEFCQVNFLFxyXG4gICAgdXNlcjogcHJvY2Vzcy5lbnYuTVlTUUxfVVNFUixcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5NWVNRTF9QQVNTV09SRCxcclxuICB9LFxyXG59KTtcclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3FsX3F1ZXJ5KHF1ZXJ5X3N0cmluZywgdmFsdWVzID0gW10pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGRiLnF1ZXJ5KHF1ZXJ5X3N0cmluZywgdmFsdWVzKTtcclxuICAgIGF3YWl0IGRiLmVuZCgpO1xyXG4gICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgdGhyb3cgRXJyb3IoZS5tZXNzYWdlKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIm15c3FsIiwiZGIiLCJjb25maWciLCJob3N0IiwicHJvY2VzcyIsImVudiIsIk1ZU1FMX0hPU1QiLCJkYXRhYmFzZSIsIk1ZU1FMX0RBVEFCQVNFIiwidXNlciIsIk1ZU1FMX1VTRVIiLCJwYXNzd29yZCIsIk1ZU1FMX1BBU1NXT1JEIiwic3FsX3F1ZXJ5IiwicXVlcnlfc3RyaW5nIiwidmFsdWVzIiwicmVzdWx0cyIsInF1ZXJ5IiwiZW5kIiwiZSIsIkVycm9yIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/db.js\n");

/***/ }),

/***/ "./pages/api/auth/Secret.js":
/*!**********************************!*\
  !*** ./pages/api/auth/Secret.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"secret\": () => (/* binding */ secret)\n/* harmony export */ });\nconst secret = '0e900be1-0ac5-4e6a-bf4b-38f8b21a189b';\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9TZWNyZXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLEtBQUssQ0FBQ0EsTUFBTSxHQUFHLENBQXNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3V0cnVuLy4vcGFnZXMvYXBpL2F1dGgvU2VjcmV0LmpzP2ZlN2IiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNlY3JldCA9ICcwZTkwMGJlMS0wYWM1LTRlNmEtYmY0Yi0zOGY4YjIxYTE4OWInOyJdLCJuYW1lcyI6WyJzZWNyZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/auth/Secret.js\n");

/***/ }),

/***/ "./pages/api/auth/login.js":
/*!*********************************!*\
  !*** ./pages/api/auth/login.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/db */ \"./lib/db.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Secret__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Secret */ \"./pages/api/auth/Secret.js\");\n\n\n\n\nconst handler = async (req, res)=>{\n    const { email , password  } = req.body;\n    if (req.method === \"POST\") {\n        const user = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__.sql_query)(`SELECT * FROM user WHERE email=\"${email}\"`);\n        const payload = {\n            name: user[0].name,\n            email: user[0].email,\n            employee_id: user[0].employee_id,\n            bureau: user[0].bureau,\n            operating_age: user[0].operating_age,\n            contact_number: user[0].contact_number,\n            weight: user[0].weight,\n            height: user[0].height,\n            status: user[0].status\n        };\n        (0,bcrypt__WEBPACK_IMPORTED_MODULE_1__.compare)(password, user[0].password.toString(), function(err, result) {\n            if (!err && result) {\n                const jwt = (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__.sign)(payload, _Secret__WEBPACK_IMPORTED_MODULE_3__.secret, {\n                    expiresIn: \"7d\"\n                });\n                return res.status(200).json({\n                    authToken: jwt\n                });\n            } else {\n                return res.status(400).json({\n                    message: \"Invalid email or password\"\n                });\n            }\n        });\n    } else {\n        return res.status(405).json({\n            message: \"We only support POST\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTJDO0FBQ1g7QUFDRztBQUNGO0FBRWpDLEtBQUssQ0FBQ0ksT0FBTyxVQUFVQyxHQUFHLEVBQUVDLEdBQUcsR0FBSyxDQUFDO0lBQ25DLEtBQUssQ0FBQyxDQUFDLENBQUNDLEtBQUssR0FBRUMsUUFBUSxFQUFDLENBQUMsR0FBR0gsR0FBRyxDQUFDSSxJQUFJO0lBQ3BDLEVBQUUsRUFBRUosR0FBRyxDQUFDSyxNQUFNLEtBQUssQ0FBTSxPQUFFLENBQUM7UUFDMUIsS0FBSyxDQUFDQyxJQUFJLEdBQUcsS0FBSyxDQUFDWCxrREFBUyxFQUFFLGdDQUFnQyxFQUFFTyxLQUFLLENBQUMsQ0FBQztRQUN2RSxLQUFLLENBQUNLLE9BQU8sR0FBRyxDQUFDO1lBQ2ZDLElBQUksRUFBRUYsSUFBSSxDQUFDLENBQUMsRUFBRUUsSUFBSTtZQUNsQk4sS0FBSyxFQUFFSSxJQUFJLENBQUMsQ0FBQyxFQUFFSixLQUFLO1lBQ3BCTyxXQUFXLEVBQUVILElBQUksQ0FBQyxDQUFDLEVBQUVHLFdBQVc7WUFDaENDLE1BQU0sRUFBRUosSUFBSSxDQUFDLENBQUMsRUFBRUksTUFBTTtZQUN0QkMsYUFBYSxFQUFFTCxJQUFJLENBQUMsQ0FBQyxFQUFFSyxhQUFhO1lBQ3BDQyxjQUFjLEVBQUVOLElBQUksQ0FBQyxDQUFDLEVBQUVNLGNBQWM7WUFDdENDLE1BQU0sRUFBRVAsSUFBSSxDQUFDLENBQUMsRUFBRU8sTUFBTTtZQUN0QkMsTUFBTSxFQUFFUixJQUFJLENBQUMsQ0FBQyxFQUFFUSxNQUFNO1lBQ3RCQyxNQUFNLEVBQUVULElBQUksQ0FBQyxDQUFDLEVBQUVTLE1BQU07UUFDeEIsQ0FBQztRQUNEbkIsK0NBQU8sQ0FBQ08sUUFBUSxFQUFFRyxJQUFJLENBQUMsQ0FBQyxFQUFFSCxRQUFRLENBQUNhLFFBQVEsSUFBSSxRQUFRLENBQUVDLEdBQUcsRUFBRUMsTUFBTSxFQUFFLENBQUM7WUFDckUsRUFBRSxHQUFHRCxHQUFHLElBQUlDLE1BQU0sRUFBRSxDQUFDO2dCQUNuQixLQUFLLENBQUNDLEdBQUcsR0FBR3RCLGtEQUFJLENBQUNVLE9BQU8sRUFBRVQsMkNBQU0sRUFBRSxDQUFDO29CQUFDc0IsU0FBUyxFQUFFLENBQUk7Z0JBQUMsQ0FBQztnQkFDckQsTUFBTSxDQUFDbkIsR0FBRyxDQUFDYyxNQUFNLENBQUMsR0FBRyxFQUFFTSxJQUFJLENBQUMsQ0FBQztvQkFBQ0MsU0FBUyxFQUFFSCxHQUFHO2dCQUFDLENBQUM7WUFDaEQsQ0FBQyxNQUFNLENBQUM7Z0JBQ04sTUFBTSxDQUFDbEIsR0FBRyxDQUFDYyxNQUFNLENBQUMsR0FBRyxFQUFFTSxJQUFJLENBQUMsQ0FBQztvQkFBQ0UsT0FBTyxFQUFFLENBQTJCO2dCQUFDLENBQUM7WUFDdEUsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDLE1BQU0sQ0FBQztRQUNOLE1BQU0sQ0FBQ3RCLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDLEdBQUcsRUFBRU0sSUFBSSxDQUFDLENBQUM7WUFBQ0UsT0FBTyxFQUFFLENBQXNCO1FBQUMsQ0FBQztJQUNqRSxDQUFDO0FBQ0gsQ0FBQztBQUNELGlFQUFleEIsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3V0cnVuLy4vcGFnZXMvYXBpL2F1dGgvbG9naW4uanM/MTMxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzcWxfcXVlcnkgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2RiXCI7XHJcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiYmNyeXB0XCI7XHJcbmltcG9ydCB7IHNpZ24gfSBmcm9tIFwianNvbndlYnRva2VuXCI7XHJcbmltcG9ydCB7IHNlY3JldCB9IGZyb20gXCIuL1NlY3JldFwiO1xyXG5cclxuY29uc3QgaGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBzcWxfcXVlcnkoYFNFTEVDVCAqIEZST00gdXNlciBXSEVSRSBlbWFpbD1cIiR7ZW1haWx9XCJgKTtcclxuICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgIG5hbWU6IHVzZXJbMF0ubmFtZSxcclxuICAgICAgZW1haWw6IHVzZXJbMF0uZW1haWwsXHJcbiAgICAgIGVtcGxveWVlX2lkOiB1c2VyWzBdLmVtcGxveWVlX2lkLFxyXG4gICAgICBidXJlYXU6IHVzZXJbMF0uYnVyZWF1LFxyXG4gICAgICBvcGVyYXRpbmdfYWdlOiB1c2VyWzBdLm9wZXJhdGluZ19hZ2UsXHJcbiAgICAgIGNvbnRhY3RfbnVtYmVyOiB1c2VyWzBdLmNvbnRhY3RfbnVtYmVyLFxyXG4gICAgICB3ZWlnaHQ6IHVzZXJbMF0ud2VpZ2h0LFxyXG4gICAgICBoZWlnaHQ6IHVzZXJbMF0uaGVpZ2h0LFxyXG4gICAgICBzdGF0dXM6IHVzZXJbMF0uc3RhdHVzLFxyXG4gICAgfTtcclxuICAgIGNvbXBhcmUocGFzc3dvcmQsIHVzZXJbMF0ucGFzc3dvcmQudG9TdHJpbmcoKSwgZnVuY3Rpb24gKGVyciwgcmVzdWx0KSB7XHJcbiAgICAgIGlmICghZXJyICYmIHJlc3VsdCkge1xyXG4gICAgICAgIGNvbnN0IGp3dCA9IHNpZ24ocGF5bG9hZCwgc2VjcmV0LCB7IGV4cGlyZXNJbjogXCI3ZFwiIH0pO1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IGF1dGhUb2tlbjogand0IH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6IFwiSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZFwiIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogXCJXZSBvbmx5IHN1cHBvcnQgUE9TVFwiIH0pO1xyXG4gIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcclxuIl0sIm5hbWVzIjpbInNxbF9xdWVyeSIsImNvbXBhcmUiLCJzaWduIiwic2VjcmV0IiwiaGFuZGxlciIsInJlcSIsInJlcyIsImVtYWlsIiwicGFzc3dvcmQiLCJib2R5IiwibWV0aG9kIiwidXNlciIsInBheWxvYWQiLCJuYW1lIiwiZW1wbG95ZWVfaWQiLCJidXJlYXUiLCJvcGVyYXRpbmdfYWdlIiwiY29udGFjdF9udW1iZXIiLCJ3ZWlnaHQiLCJoZWlnaHQiLCJzdGF0dXMiLCJ0b1N0cmluZyIsImVyciIsInJlc3VsdCIsImp3dCIsImV4cGlyZXNJbiIsImpzb24iLCJhdXRoVG9rZW4iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/auth/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/login.js"));
module.exports = __webpack_exports__;

})();