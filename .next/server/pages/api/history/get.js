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
exports.id = "pages/api/history/get";
exports.ids = ["pages/api/history/get"];
exports.modules = {

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

/***/ "./pages/api/auth/verify.js":
/*!**********************************!*\
  !*** ./pages/api/auth/verify.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Verify\": () => (/* binding */ Verify)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Secret__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Secret */ \"./pages/api/auth/Secret.js\");\n\n\nconst Verify = (bearerHearder)=>{\n    const tokens = bearerHearder.split(\" \")[1];\n    if (tokens) {\n        try {\n            return (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.verify)(tokens, _Secret__WEBPACK_IMPORTED_MODULE_1__.secret);\n        } catch (err) {\n            return false;\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC92ZXJpZnkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFxQztBQUNKO0FBRTFCLEtBQUssQ0FBQ0UsTUFBTSxJQUFJQyxhQUFhLEdBQUssQ0FBQztJQUN4QyxLQUFLLENBQUNDLE1BQU0sR0FBR0QsYUFBYSxDQUFDRSxLQUFLLENBQUMsQ0FBRyxJQUFFLENBQUM7SUFDekMsRUFBRSxFQUFFRCxNQUFNLEVBQUUsQ0FBQztRQUNYLEdBQUcsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDSixvREFBTSxDQUFDSSxNQUFNLEVBQUVILDJDQUFNO1FBQzlCLENBQUMsQ0FBQyxLQUFLLEVBQUVLLEdBQUcsRUFBRSxDQUFDO1lBQ2IsTUFBTSxDQUFDLEtBQUs7UUFDZCxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdXRydW4vLi9wYWdlcy9hcGkvYXV0aC92ZXJpZnkuanM/YTUyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB2ZXJpZnkgfSBmcm9tIFwianNvbndlYnRva2VuXCI7XHJcbmltcG9ydCB7IHNlY3JldCB9IGZyb20gXCIuL1NlY3JldFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFZlcmlmeSA9IChiZWFyZXJIZWFyZGVyKSA9PiB7XHJcbiAgY29uc3QgdG9rZW5zID0gYmVhcmVySGVhcmRlci5zcGxpdChcIiBcIilbMV07XHJcbiAgaWYgKHRva2Vucykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIHZlcmlmeSh0b2tlbnMsIHNlY3JldCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuIl0sIm5hbWVzIjpbInZlcmlmeSIsInNlY3JldCIsIlZlcmlmeSIsImJlYXJlckhlYXJkZXIiLCJ0b2tlbnMiLCJzcGxpdCIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/auth/verify.js\n");

/***/ }),

/***/ "./pages/api/history/get.js":
/*!**********************************!*\
  !*** ./pages/api/history/get.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/db */ \"./lib/db.js\");\n/* harmony import */ var _auth_verify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/verify */ \"./pages/api/auth/verify.js\");\n\n\nconst handler = async (req, res)=>{\n    if (req.method === \"GET\") {\n        const bearerHearder = req.headers.authorization;\n        const v = (0,_auth_verify__WEBPACK_IMPORTED_MODULE_1__.Verify)(bearerHearder);\n        if (!v) {\n            return res.status(401).json(\"Unauthenticated\");\n        } else {\n            try {\n                const result = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__.sql_query)(`\n        SELECT history.employee_id,history.date,history.distance,history.time,history.status,history.img\n        FROM history\n        INNER JOIN user\n        ON history.employee_id = user.employee_id\n        WHERE user.employee_id=${v.employee_id}`);\n                return res.json(result);\n            } catch (e) {\n                res.status(404).json({\n                    message: e.message\n                });\n            }\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvaGlzdG9yeS9nZXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBQ0o7QUFFdkMsS0FBSyxDQUFDRSxPQUFPLFVBQVVDLEdBQUcsRUFBRUMsR0FBRyxHQUFLLENBQUM7SUFDbkMsRUFBRSxFQUFFRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxDQUFLLE1BQUUsQ0FBQztRQUN6QixLQUFLLENBQUNDLGFBQWEsR0FBR0gsR0FBRyxDQUFDSSxPQUFPLENBQUNDLGFBQWE7UUFDL0MsS0FBSyxDQUFDQyxDQUFDLEdBQUdSLG9EQUFNLENBQUNLLGFBQWE7UUFDOUIsRUFBRSxHQUFHRyxDQUFDLEVBQUUsQ0FBQztZQUNQLE1BQU0sQ0FBQ0wsR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBaUI7UUFDL0MsQ0FBQyxNQUFNLENBQUM7WUFDTixHQUFHLENBQUMsQ0FBQztnQkFDSCxLQUFLLENBQUNDLE1BQU0sR0FBRyxLQUFLLENBQUNaLGtEQUFTLEVBQUU7Z0JBTWhDLE1BQU0sQ0FBQ0ksR0FBRyxDQUFDTyxJQUFJLENBQUNDLE1BQU07WUFDeEIsQ0FBQyxDQUFDLEtBQUs7Z0JBQ0xSLEdBQUcsQ0FBQ007b0JBQW1CSyxPQUFPLEVBQUVELENBQUMsQ0FBQ0MsT0FBTztnQkFBQyxDQUFDO1lBQzdDLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFDRCxNQUFNLFNBQVNiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3V0cnVuLy4vcGFnZXMvYXBpL2hpc3RvcnkvZ2V0LmpzPzZmYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3FsX3F1ZXJ5IH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9kYlwiO1xyXG5pbXBvcnQgeyBWZXJpZnkgfSBmcm9tIFwiLi4vYXV0aC92ZXJpZnlcIjtcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xyXG4gICAgY29uc3QgYmVhcmVySGVhcmRlciA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb247XHJcbiAgICBjb25zdCB2ID0gVmVyaWZ5KGJlYXJlckhlYXJkZXIpO1xyXG4gICAgaWYgKCF2KSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbihcIlVuYXV0aGVudGljYXRlZFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3FsX3F1ZXJ5KGBcclxuICAgICAgICBTRUxFQ1QgaGlzdG9yeS5lbXBsb3llZV9pZCxoaXN0b3J5LmRhdGUsaGlzdG9yeS5kaXN0YW5jZSxoaXN0b3J5LnRpbWUsaGlzdG9yeS5zdGF0dXMsaGlzdG9yeS5pbWdcclxuICAgICAgICBGUk9NIGhpc3RvcnlcclxuICAgICAgICBJTk5FUiBKT0lOIHVzZXJcclxuICAgICAgICBPTiBoaXN0b3J5LmVtcGxveWVlX2lkID0gdXNlci5lbXBsb3llZV9pZFxyXG4gICAgICAgIFdIRVJFIHVzZXIuZW1wbG95ZWVfaWQ9JHt2LmVtcGxveWVlX2lkfWApO1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbihyZXN1bHQpO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiBlLm1lc3NhZ2UgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XHJcbiJdLCJuYW1lcyI6WyJzcWxfcXVlcnkiLCJWZXJpZnkiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiYmVhcmVySGVhcmRlciIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwidiIsInN0YXR1cyIsImpzb24iLCJyZXN1bHQiLCJlbXBsb3llZV9pZCIsImUiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/history/get.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/history/get.js"));
module.exports = __webpack_exports__;

})();