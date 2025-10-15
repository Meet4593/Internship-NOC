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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/index.css */ \"./src/index.css\");\n/* harmony import */ var _src_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_index_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_AuthProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/AuthProvider */ \"./src/components/AuthProvider.jsx\");\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_AuthProvider__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"D:\\\\Project\\\\Internship-NOC\\\\frontend\\\\pages\\\\_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Project\\\\Internship-NOC\\\\frontend\\\\pages\\\\_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUI7QUFDb0M7QUFFOUMsU0FBU0MsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNsRCxxQkFDRSw4REFBQ0gsc0VBQVlBO2tCQUNYLDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zcmMvaW5kZXguY3NzJ1xyXG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9BdXRoUHJvdmlkZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoUHJvdmlkZXI+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvQXV0aFByb3ZpZGVyPlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiQXV0aFByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./src/components/AuthProvider.jsx":
/*!*****************************************!*\
  !*** ./src/components/AuthProvider.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/auth */ \"./src/utils/auth.js\");\n\n\n\n\n/**\r\n * Authentication Context Provider\r\n * Manages global authentication state across the application\r\n * Provides login/logout functionality and user data\r\n */ const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction useAuth() {\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n    if (!context) {\n        throw new Error(\"useAuth must be used within an AuthProvider\");\n    }\n    return context;\n}\nfunction AuthProvider({ children }) {\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // Check for existing authentication on app load\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const checkAuth = ()=>{\n            try {\n                const authData = (0,_utils_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)();\n                if (authData && authData.token) {\n                    setUser(authData);\n                }\n            } catch (error) {\n                console.error(\"Error checking auth:\", error);\n                (0,_utils_auth__WEBPACK_IMPORTED_MODULE_3__.clearAuth)();\n            } finally{\n                setLoading(false);\n            }\n        };\n        checkAuth();\n    }, []);\n    // Login function\n    const login = (authData)=>{\n        setUser(authData);\n        // Redirect to dashboard after successful login\n        router.push(\"/dashboard\");\n    };\n    // Logout function\n    const logout = ()=>{\n        setUser(null);\n        (0,_utils_auth__WEBPACK_IMPORTED_MODULE_3__.clearAuth)();\n        // Redirect to login page after logout\n        router.push(\"/login\");\n    };\n    // Protected route wrapper\n    const requireAuth = (WrappedComponent)=>{\n        return function ProtectedRoute(props) {\n            (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n                if (!loading && !user) {\n                    router.push(\"/login\");\n                }\n            }, [\n                user,\n                loading,\n                router\n            ]);\n            if (loading) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"min-h-screen flex items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Project\\\\Internship-NOC\\\\frontend\\\\src\\\\components\\\\AuthProvider.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Project\\\\Internship-NOC\\\\frontend\\\\src\\\\components\\\\AuthProvider.jsx\",\n                    lineNumber: 71,\n                    columnNumber: 11\n                }, this);\n            }\n            if (!user) {\n                return null;\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WrappedComponent, {\n                ...props\n            }, void 0, false, {\n                fileName: \"D:\\\\Project\\\\Internship-NOC\\\\frontend\\\\src\\\\components\\\\AuthProvider.jsx\",\n                lineNumber: 81,\n                columnNumber: 14\n            }, this);\n        };\n    };\n    const value = {\n        user,\n        login,\n        logout,\n        isAuthenticated: !!user,\n        loading,\n        requireAuth\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Project\\\\Internship-NOC\\\\frontend\\\\src\\\\components\\\\AuthProvider.jsx\",\n        lineNumber: 95,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BdXRoUHJvdmlkZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBNkU7QUFDdEM7QUFDNEI7QUFFbkU7Ozs7Q0FJQyxHQUVELE1BQU1TLDRCQUFjUixvREFBYUE7QUFFMUIsU0FBU1M7SUFDZCxNQUFNQyxVQUFVVCxpREFBVUEsQ0FBQ087SUFDM0IsSUFBSSxDQUFDRSxTQUFTO1FBQ1osTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0lBQ0EsT0FBT0Q7QUFDVDtBQUVPLFNBQVNFLGFBQWEsRUFBRUMsUUFBUSxFQUFFO0lBQ3ZDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNjLFNBQVNDLFdBQVcsR0FBR2YsK0NBQVFBLENBQUM7SUFDdkMsTUFBTWdCLFNBQVNkLHNEQUFTQTtJQUV4QixnREFBZ0Q7SUFDaERELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWdCLFlBQVk7WUFDaEIsSUFBSTtnQkFDRixNQUFNQyxXQUFXZixvREFBT0E7Z0JBQ3hCLElBQUllLFlBQVlBLFNBQVNDLEtBQUssRUFBRTtvQkFDOUJOLFFBQVFLO2dCQUNWO1lBQ0YsRUFBRSxPQUFPRSxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUMsd0JBQXdCQTtnQkFDdENoQixzREFBU0E7WUFDWCxTQUFVO2dCQUNSVyxXQUFXO1lBQ2I7UUFDRjtRQUVBRTtJQUNGLEdBQUcsRUFBRTtJQUVMLGlCQUFpQjtJQUNqQixNQUFNSyxRQUFRLENBQUNKO1FBQ2JMLFFBQVFLO1FBQ1IsK0NBQStDO1FBQy9DRixPQUFPTyxJQUFJLENBQUM7SUFDZDtJQUVBLGtCQUFrQjtJQUNsQixNQUFNQyxTQUFTO1FBQ2JYLFFBQVE7UUFDUlQsc0RBQVNBO1FBQ1Qsc0NBQXNDO1FBQ3RDWSxPQUFPTyxJQUFJLENBQUM7SUFDZDtJQUVBLDBCQUEwQjtJQUMxQixNQUFNRSxjQUFjLENBQUNDO1FBQ25CLE9BQU8sU0FBU0MsZUFBZUMsS0FBSztZQUNsQzNCLGdEQUFTQSxDQUFDO2dCQUNSLElBQUksQ0FBQ2EsV0FBVyxDQUFDRixNQUFNO29CQUNyQkksT0FBT08sSUFBSSxDQUFDO2dCQUNkO1lBQ0YsR0FBRztnQkFBQ1g7Z0JBQU1FO2dCQUFTRTthQUFPO1lBRTFCLElBQUlGLFNBQVM7Z0JBQ1gscUJBQ0UsOERBQUNlO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7WUFHckI7WUFFQSxJQUFJLENBQUNsQixNQUFNO2dCQUNULE9BQU87WUFDVDtZQUVBLHFCQUFPLDhEQUFDYztnQkFBa0IsR0FBR0UsS0FBSzs7Ozs7O1FBQ3BDO0lBQ0Y7SUFFQSxNQUFNRyxRQUFRO1FBQ1puQjtRQUNBVTtRQUNBRTtRQUNBbkIsaUJBQWlCLENBQUMsQ0FBQ087UUFDbkJFO1FBQ0FXO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ25CLFlBQVkwQixRQUFRO1FBQUNELE9BQU9BO2tCQUMxQnBCOzs7Ozs7QUFHUCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvQXV0aFByb3ZpZGVyLmpzeD9jNDMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBnZXRBdXRoLCBjbGVhckF1dGgsIGlzQXV0aGVudGljYXRlZCB9IGZyb20gJy4uL3V0aWxzL2F1dGgnXHJcblxyXG4vKipcclxuICogQXV0aGVudGljYXRpb24gQ29udGV4dCBQcm92aWRlclxyXG4gKiBNYW5hZ2VzIGdsb2JhbCBhdXRoZW50aWNhdGlvbiBzdGF0ZSBhY3Jvc3MgdGhlIGFwcGxpY2F0aW9uXHJcbiAqIFByb3ZpZGVzIGxvZ2luL2xvZ291dCBmdW5jdGlvbmFsaXR5IGFuZCB1c2VyIGRhdGFcclxuICovXHJcblxyXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUF1dGgoKSB7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpXHJcbiAgaWYgKCFjb250ZXh0KSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZUF1dGggbXVzdCBiZSB1c2VkIHdpdGhpbiBhbiBBdXRoUHJvdmlkZXInKVxyXG4gIH1cclxuICByZXR1cm4gY29udGV4dFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAvLyBDaGVjayBmb3IgZXhpc3RpbmcgYXV0aGVudGljYXRpb24gb24gYXBwIGxvYWRcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgY2hlY2tBdXRoID0gKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGF1dGhEYXRhID0gZ2V0QXV0aCgpXHJcbiAgICAgICAgaWYgKGF1dGhEYXRhICYmIGF1dGhEYXRhLnRva2VuKSB7XHJcbiAgICAgICAgICBzZXRVc2VyKGF1dGhEYXRhKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyBhdXRoOicsIGVycm9yKVxyXG4gICAgICAgIGNsZWFyQXV0aCgpXHJcbiAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrQXV0aCgpXHJcbiAgfSwgW10pXHJcblxyXG4gIC8vIExvZ2luIGZ1bmN0aW9uXHJcbiAgY29uc3QgbG9naW4gPSAoYXV0aERhdGEpID0+IHtcclxuICAgIHNldFVzZXIoYXV0aERhdGEpXHJcbiAgICAvLyBSZWRpcmVjdCB0byBkYXNoYm9hcmQgYWZ0ZXIgc3VjY2Vzc2Z1bCBsb2dpblxyXG4gICAgcm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKVxyXG4gIH1cclxuXHJcbiAgLy8gTG9nb3V0IGZ1bmN0aW9uXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgc2V0VXNlcihudWxsKVxyXG4gICAgY2xlYXJBdXRoKClcclxuICAgIC8vIFJlZGlyZWN0IHRvIGxvZ2luIHBhZ2UgYWZ0ZXIgbG9nb3V0XHJcbiAgICByb3V0ZXIucHVzaCgnL2xvZ2luJylcclxuICB9XHJcblxyXG4gIC8vIFByb3RlY3RlZCByb3V0ZSB3cmFwcGVyXHJcbiAgY29uc3QgcmVxdWlyZUF1dGggPSAoV3JhcHBlZENvbXBvbmVudCkgPT4ge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIFByb3RlY3RlZFJvdXRlKHByb3BzKSB7XHJcbiAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFsb2FkaW5nICYmICF1c2VyKSB7XHJcbiAgICAgICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJylcclxuICAgICAgICB9XHJcbiAgICAgIH0sIFt1c2VyLCBsb2FkaW5nLCByb3V0ZXJdKVxyXG5cclxuICAgICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlLXNwaW4gcm91bmRlZC1mdWxsIGgtOCB3LTggYm9yZGVyLWItMiBib3JkZXItdGVhbC02MDBcIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50IHsuLi5wcm9wc30gLz5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHZhbHVlID0ge1xyXG4gICAgdXNlcixcclxuICAgIGxvZ2luLFxyXG4gICAgbG9nb3V0LFxyXG4gICAgaXNBdXRoZW50aWNhdGVkOiAhIXVzZXIsXHJcbiAgICBsb2FkaW5nLFxyXG4gICAgcmVxdWlyZUF1dGgsXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJnZXRBdXRoIiwiY2xlYXJBdXRoIiwiaXNBdXRoZW50aWNhdGVkIiwiQXV0aENvbnRleHQiLCJ1c2VBdXRoIiwiY29udGV4dCIsIkVycm9yIiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicm91dGVyIiwiY2hlY2tBdXRoIiwiYXV0aERhdGEiLCJ0b2tlbiIsImVycm9yIiwiY29uc29sZSIsImxvZ2luIiwicHVzaCIsImxvZ291dCIsInJlcXVpcmVBdXRoIiwiV3JhcHBlZENvbXBvbmVudCIsIlByb3RlY3RlZFJvdXRlIiwicHJvcHMiLCJkaXYiLCJjbGFzc05hbWUiLCJ2YWx1ZSIsIlByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/AuthProvider.jsx\n");

/***/ }),

/***/ "./src/utils/auth.js":
/*!***************************!*\
  !*** ./src/utils/auth.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearAuth: () => (/* binding */ clearAuth),\n/* harmony export */   getAuth: () => (/* binding */ getAuth),\n/* harmony export */   isAuthenticated: () => (/* binding */ isAuthenticated),\n/* harmony export */   isValidCharusatEmail: () => (/* binding */ isValidCharusatEmail),\n/* harmony export */   loginRequest: () => (/* binding */ loginRequest),\n/* harmony export */   saveAuth: () => (/* binding */ saveAuth)\n/* harmony export */ });\n/**\r\n * Authentication utility functions\r\n * Handles localStorage operations and API calls for authentication\r\n * TODO: Replace with Google OAuth that enforces @charusat.edu.in and @charusat.ac.in domains\r\n */ const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || \"http://localhost:3000\";\n/**\r\n * Login request to backend API\r\n * @param {string} email - User email\r\n * @param {string} password - User password\r\n * @returns {Promise<Object>} - Response from API\r\n */ async function loginRequest(email, password) {\n    try {\n        const response = await fetch(`${API_BASE_URL}/api/auth/simple-login`, {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                email,\n                password\n            })\n        });\n        const data = await response.json();\n        if (!response.ok) {\n            throw new Error(data.message || \"Login failed\");\n        }\n        return data;\n    } catch (error) {\n        console.error(\"Login request failed:\", error);\n        throw error;\n    }\n}\n/**\r\n * Save authentication data to localStorage\r\n * @param {Object} authData - Authentication data containing token and user info\r\n */ function saveAuth(authData) {\n    if (false) {}\n}\n/**\r\n * Clear authentication data from localStorage\r\n */ function clearAuth() {\n    if (false) {}\n}\n/**\r\n * Get authentication data from localStorage\r\n * @returns {Object|null} - Authentication data or null if not found\r\n */ function getAuth() {\n    if (false) {}\n    return null;\n}\n/**\r\n * Check if user is authenticated\r\n * @returns {boolean} - True if user is authenticated\r\n */ function isAuthenticated() {\n    const auth = getAuth();\n    return auth && auth.token;\n}\n/**\r\n * Validate email domain for Charusat (for future Google OAuth integration)\r\n * @param {string} email - Email to validate\r\n * @returns {boolean} - True if email is from allowed Charusat domains\r\n */ function isValidCharusatEmail(email) {\n    return email.endsWith(\"@charusat.edu.in\") || email.endsWith(\"@charusat.ac.in\");\n} // Google OAuth integration notes:\n // 1. Install @google-cloud/oauth2 or use react-google-login\n // 2. After successful Google OAuth, validate domain:\n //    if (!isValidCharusatEmail(email)) {\n //      throw new Error('Please use your Charusat email address')\n //    }\n // 3. Exchange Google token for your backend JWT\n // 4. Save auth data using saveAuth()\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztDQUlDLEdBRUQsTUFBTUEsZUFBZUMsUUFBUUMsR0FBRyxDQUFDQyxtQkFBbUIsSUFBSTtBQUV4RDs7Ozs7Q0FLQyxHQUNNLGVBQWVDLGFBQWFDLEtBQUssRUFBRUMsUUFBUTtJQUNoRCxJQUFJO1FBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLENBQUMsRUFBRVIsYUFBYSxzQkFBc0IsQ0FBQyxFQUFFO1lBQ3BFUyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFBRVI7Z0JBQU9DO1lBQVM7UUFDekM7UUFFQSxNQUFNUSxPQUFPLE1BQU1QLFNBQVNRLElBQUk7UUFFaEMsSUFBSSxDQUFDUixTQUFTUyxFQUFFLEVBQUU7WUFDaEIsTUFBTSxJQUFJQyxNQUFNSCxLQUFLSSxPQUFPLElBQUk7UUFDbEM7UUFFQSxPQUFPSjtJQUNULEVBQUUsT0FBT0ssT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMseUJBQXlCQTtRQUN2QyxNQUFNQTtJQUNSO0FBQ0Y7QUFFQTs7O0NBR0MsR0FDTSxTQUFTRSxTQUFTQyxRQUFRO0lBQy9CLElBQUksS0FBa0IsRUFBYSxFQUVsQztBQUNIO0FBRUE7O0NBRUMsR0FDTSxTQUFTRztJQUNkLElBQUksS0FBa0IsRUFBYSxFQUVsQztBQUNIO0FBRUE7OztDQUdDLEdBQ00sU0FBU0U7SUFDZCxJQUFJLEtBQWtCLEVBQWEsRUFRbEM7SUFDRCxPQUFPO0FBQ1Q7QUFFQTs7O0NBR0MsR0FDTSxTQUFTRztJQUNkLE1BQU1DLE9BQU9KO0lBQ2IsT0FBT0ksUUFBUUEsS0FBS0MsS0FBSztBQUMzQjtBQUVBOzs7O0NBSUMsR0FDTSxTQUFTQyxxQkFBcUI1QixLQUFLO0lBQ3hDLE9BQU9BLE1BQU02QixRQUFRLENBQUMsdUJBQXVCN0IsTUFBTTZCLFFBQVEsQ0FBQztBQUM5RCxFQUVBLGtDQUFrQztDQUNsQyw0REFBNEQ7Q0FDNUQscURBQXFEO0NBQ3JELHlDQUF5QztDQUN6QyxpRUFBaUU7Q0FDakUsT0FBTztDQUNQLGdEQUFnRDtDQUNoRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy91dGlscy9hdXRoLmpzPzQ0ODIiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEF1dGhlbnRpY2F0aW9uIHV0aWxpdHkgZnVuY3Rpb25zXHJcbiAqIEhhbmRsZXMgbG9jYWxTdG9yYWdlIG9wZXJhdGlvbnMgYW5kIEFQSSBjYWxscyBmb3IgYXV0aGVudGljYXRpb25cclxuICogVE9ETzogUmVwbGFjZSB3aXRoIEdvb2dsZSBPQXV0aCB0aGF0IGVuZm9yY2VzIEBjaGFydXNhdC5lZHUuaW4gYW5kIEBjaGFydXNhdC5hYy5pbiBkb21haW5zXHJcbiAqL1xyXG5cclxuY29uc3QgQVBJX0JBU0VfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDozMDAwJ1xyXG5cclxuLyoqXHJcbiAqIExvZ2luIHJlcXVlc3QgdG8gYmFja2VuZCBBUElcclxuICogQHBhcmFtIHtzdHJpbmd9IGVtYWlsIC0gVXNlciBlbWFpbFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFzc3dvcmQgLSBVc2VyIHBhc3N3b3JkXHJcbiAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD59IC0gUmVzcG9uc2UgZnJvbSBBUElcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dpblJlcXVlc3QoZW1haWwsIHBhc3N3b3JkKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0VfVVJMfS9hcGkvYXV0aC9zaW1wbGUtbG9naW5gLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgcGFzc3dvcmQgfSksXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuXHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihkYXRhLm1lc3NhZ2UgfHwgJ0xvZ2luIGZhaWxlZCcpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGFcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignTG9naW4gcmVxdWVzdCBmYWlsZWQ6JywgZXJyb3IpXHJcbiAgICB0aHJvdyBlcnJvclxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFNhdmUgYXV0aGVudGljYXRpb24gZGF0YSB0byBsb2NhbFN0b3JhZ2VcclxuICogQHBhcmFtIHtPYmplY3R9IGF1dGhEYXRhIC0gQXV0aGVudGljYXRpb24gZGF0YSBjb250YWluaW5nIHRva2VuIGFuZCB1c2VyIGluZm9cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlQXV0aChhdXRoRGF0YSkge1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2F1dGgnLCBKU09OLnN0cmluZ2lmeShhdXRoRGF0YSkpXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ2xlYXIgYXV0aGVudGljYXRpb24gZGF0YSBmcm9tIGxvY2FsU3RvcmFnZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQXV0aCgpIHtcclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhdXRoJylcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYXV0aGVudGljYXRpb24gZGF0YSBmcm9tIGxvY2FsU3RvcmFnZVxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fG51bGx9IC0gQXV0aGVudGljYXRpb24gZGF0YSBvciBudWxsIGlmIG5vdCBmb3VuZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEF1dGgoKSB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBhdXRoRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJylcclxuICAgICAgcmV0dXJuIGF1dGhEYXRhID8gSlNPTi5wYXJzZShhdXRoRGF0YSkgOiBudWxsXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBwYXJzaW5nIGF1dGggZGF0YTonLCBlcnJvcilcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG51bGxcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIHVzZXIgaXMgYXV0aGVudGljYXRlZFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSBUcnVlIGlmIHVzZXIgaXMgYXV0aGVudGljYXRlZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQXV0aGVudGljYXRlZCgpIHtcclxuICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpXHJcbiAgcmV0dXJuIGF1dGggJiYgYXV0aC50b2tlblxyXG59XHJcblxyXG4vKipcclxuICogVmFsaWRhdGUgZW1haWwgZG9tYWluIGZvciBDaGFydXNhdCAoZm9yIGZ1dHVyZSBHb29nbGUgT0F1dGggaW50ZWdyYXRpb24pXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBlbWFpbCAtIEVtYWlsIHRvIHZhbGlkYXRlXHJcbiAqIEByZXR1cm5zIHtib29sZWFufSAtIFRydWUgaWYgZW1haWwgaXMgZnJvbSBhbGxvd2VkIENoYXJ1c2F0IGRvbWFpbnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkQ2hhcnVzYXRFbWFpbChlbWFpbCkge1xyXG4gIHJldHVybiBlbWFpbC5lbmRzV2l0aCgnQGNoYXJ1c2F0LmVkdS5pbicpIHx8IGVtYWlsLmVuZHNXaXRoKCdAY2hhcnVzYXQuYWMuaW4nKVxyXG59XHJcblxyXG4vLyBHb29nbGUgT0F1dGggaW50ZWdyYXRpb24gbm90ZXM6XHJcbi8vIDEuIEluc3RhbGwgQGdvb2dsZS1jbG91ZC9vYXV0aDIgb3IgdXNlIHJlYWN0LWdvb2dsZS1sb2dpblxyXG4vLyAyLiBBZnRlciBzdWNjZXNzZnVsIEdvb2dsZSBPQXV0aCwgdmFsaWRhdGUgZG9tYWluOlxyXG4vLyAgICBpZiAoIWlzVmFsaWRDaGFydXNhdEVtYWlsKGVtYWlsKSkge1xyXG4vLyAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHVzZSB5b3VyIENoYXJ1c2F0IGVtYWlsIGFkZHJlc3MnKVxyXG4vLyAgICB9XHJcbi8vIDMuIEV4Y2hhbmdlIEdvb2dsZSB0b2tlbiBmb3IgeW91ciBiYWNrZW5kIEpXVFxyXG4vLyA0LiBTYXZlIGF1dGggZGF0YSB1c2luZyBzYXZlQXV0aCgpXHJcbiJdLCJuYW1lcyI6WyJBUElfQkFTRV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsImxvZ2luUmVxdWVzdCIsImVtYWlsIiwicGFzc3dvcmQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImpzb24iLCJvayIsIkVycm9yIiwibWVzc2FnZSIsImVycm9yIiwiY29uc29sZSIsInNhdmVBdXRoIiwiYXV0aERhdGEiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiY2xlYXJBdXRoIiwicmVtb3ZlSXRlbSIsImdldEF1dGgiLCJnZXRJdGVtIiwicGFyc2UiLCJpc0F1dGhlbnRpY2F0ZWQiLCJhdXRoIiwidG9rZW4iLCJpc1ZhbGlkQ2hhcnVzYXRFbWFpbCIsImVuZHNXaXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/auth.js\n");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();