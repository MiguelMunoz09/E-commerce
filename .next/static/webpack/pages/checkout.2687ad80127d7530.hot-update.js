/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/checkout",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[7].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[7].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./src/styles/Checkout.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[7].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[7].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./src/styles/Checkout.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".Checkout_Checkout__gcoyI {\\n  width: 100%;\\n  height: 100vh;\\n  display: grid;\\n  place-items: center;\\n}\\n\\n.Checkout_title__RvQHh {\\n  font-size: 18px;\\n  margin-bottom: 40px;\\n}\\n\\n.Checkout_Checkout-container__3Rsh3 {\\n  display: grid;\\n  grid-template-rows: auto 1fr auto;\\n  width: 300px;\\n}\\n\\n.Checkout_Checkout-content__Iev9O {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.Checkout_order__t8Klv {\\n  display: grid;\\n  grid-template-columns: auto 1fr;\\n  grid-gap: 16px;\\n  gap: 16px;\\n  align-items: center;\\n  background-color: #F7F7F7;\\n  margin-bottom: 24px;\\n  border-radius: 8px;\\n  padding: 0 24px;\\n}\\n\\n.Checkout_order__t8Klv p:nth-child(1) {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.Checkout_order__t8Klv p span:nth-child(1) {\\n  font-size: 16px;\\n  font-weight: bold;\\n}\\n\\n.Checkout_order__t8Klv p span:nth-child(2) {\\n  font-size: 14px;\\n  color: #C7C7C7;\\n}\\n\\n.Checkout_order__t8Klv p:nth-child(2) {\\n  text-align: end;\\n  font-weight: bold;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/Checkout.module.scss\",\"webpack://src/styles/_vars.scss\"],\"names\":[],\"mappings\":\"AAEA;EACC,WAAA;EACA,aAAA;EACA,aAAA;EACA,mBAAA;AADD;;AAIA;EACC,eCFU;EDGV,mBAAA;AADD;;AAGA;EACC,aAAA;EACA,iCAAA;EACA,YAAA;AAAD;;AAEA;EACC,aAAA;EACA,sBAAA;AACD;;AACA;EACC,aAAA;EACA,+BAAA;EACA,cAAA;EAAA,SAAA;EACA,mBAAA;EACA,yBCvBwB;EDwBxB,mBAAA;EACA,kBAAA;EACA,eAAA;AAED;;AAAA;EACC,aAAA;EACA,sBAAA;AAGD;;AADA;EACC,eC9BU;ED+BV,iBAAA;AAID;;AAFA;EACC,eCnCU;EDoCV,cCvCuB;AD4CxB;;AAHA;EACC,eAAA;EACA,iBAAA;AAMD\",\"sourcesContent\":[\"@import 'vars';\\n\\n.Checkout {\\n\\twidth: 100%;\\n\\theight: 100vh;\\n\\tdisplay: grid;\\n\\tplace-items: center;\\n\\t\\n}\\n.title {\\n\\tfont-size: $--lg;\\n\\tmargin-bottom: 40px;\\n}\\n.Checkout-container {\\n\\tdisplay: grid;\\n\\tgrid-template-rows: auto 1fr auto;\\n\\twidth: 300px;\\n}\\n.Checkout-content {\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n}\\n.order {\\n\\tdisplay: grid;\\n\\tgrid-template-columns: auto 1fr;\\n\\tgap: 16px;\\n\\talign-items: center;\\n\\tbackground-color: $--text-input-field;\\n\\tmargin-bottom: 24px;\\n\\tborder-radius: 8px;\\n\\tpadding: 0 24px;\\n}\\n.order p:nth-child(1) {\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n}\\n.order p span:nth-child(1) {\\n\\tfont-size: $--md;\\n\\tfont-weight: bold;\\n}\\n.order p span:nth-child(2) {\\n\\tfont-size: $--sm;\\n\\tcolor: $--very-light-pink;\\n}\\n.order p:nth-child(2) {\\n\\ttext-align: end;\\n\\tfont-weight: bold;\\n}\",\"\\n    $--white: #FFFFFF;\\n    $--black: #000000;\\n    $--very-light-pink: #C7C7C7;\\n    $--text-input-field: #F7F7F7;\\n    $--hospital-green: #ACD9B2;\\n    $--sm: 14px;\\n    $--md: 16px;\\n    $--lg: 18px;\\n\\n\\n  \"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"Checkout\": \"Checkout_Checkout__gcoyI\",\n\t\"title\": \"Checkout_title__RvQHh\",\n\t\"Checkout-container\": \"Checkout_Checkout-container__3Rsh3\",\n\t\"Checkout-content\": \"Checkout_Checkout-content__Iev9O\",\n\t\"order\": \"Checkout_order__t8Klv\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls3XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbN10udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzddLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzddLnVzZVs0XSEuL3NyYy9zdHlsZXMvQ2hlY2tvdXQubW9kdWxlLnNjc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxzS0FBa0Y7QUFDNUg7QUFDQTtBQUNBLHFFQUFxRSxnQkFBZ0Isa0JBQWtCLGtCQUFrQix3QkFBd0IsR0FBRyw0QkFBNEIsb0JBQW9CLHdCQUF3QixHQUFHLHlDQUF5QyxrQkFBa0Isc0NBQXNDLGlCQUFpQixHQUFHLHVDQUF1QyxrQkFBa0IsMkJBQTJCLEdBQUcsNEJBQTRCLGtCQUFrQixvQ0FBb0MsbUJBQW1CLGNBQWMsd0JBQXdCLDhCQUE4Qix3QkFBd0IsdUJBQXVCLG9CQUFvQixHQUFHLDJDQUEyQyxrQkFBa0IsMkJBQTJCLEdBQUcsZ0RBQWdELG9CQUFvQixzQkFBc0IsR0FBRyxnREFBZ0Qsb0JBQW9CLG1CQUFtQixHQUFHLDJDQUEyQyxvQkFBb0Isc0JBQXNCLEdBQUcsT0FBTyxrSUFBa0ksVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFlBQVksTUFBTSxLQUFLLFdBQVcsYUFBYSxRQUFRLEtBQUssVUFBVSxXQUFXLHdDQUF3QyxlQUFlLGdCQUFnQixrQkFBa0Isa0JBQWtCLHdCQUF3QixPQUFPLFVBQVUscUJBQXFCLHdCQUF3QixHQUFHLHVCQUF1QixrQkFBa0Isc0NBQXNDLGlCQUFpQixHQUFHLHFCQUFxQixrQkFBa0IsMkJBQTJCLEdBQUcsVUFBVSxrQkFBa0Isb0NBQW9DLGNBQWMsd0JBQXdCLDBDQUEwQyx3QkFBd0IsdUJBQXVCLG9CQUFvQixHQUFHLHlCQUF5QixrQkFBa0IsMkJBQTJCLEdBQUcsOEJBQThCLHFCQUFxQixzQkFBc0IsR0FBRyw4QkFBOEIscUJBQXFCLDhCQUE4QixHQUFHLHlCQUF5QixvQkFBb0Isc0JBQXNCLEdBQUcsMkJBQTJCLHdCQUF3QixrQ0FBa0MsbUNBQW1DLGlDQUFpQyxrQkFBa0Isa0JBQWtCLGtCQUFrQiwyQkFBMkI7QUFDaG5GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3R5bGVzL0NoZWNrb3V0Lm1vZHVsZS5zY3NzP2Y2NjciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5DaGVja291dF9DaGVja291dF9fZ2NveUkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5DaGVja291dF90aXRsZV9fUnZRSGgge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG59XFxuXFxuLkNoZWNrb3V0X0NoZWNrb3V0LWNvbnRhaW5lcl9fM1JzaDMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXG4gIHdpZHRoOiAzMDBweDtcXG59XFxuXFxuLkNoZWNrb3V0X0NoZWNrb3V0LWNvbnRlbnRfX0lldjlPIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uQ2hlY2tvdXRfb3JkZXJfX3Q4S2x2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgZ3JpZC1nYXA6IDE2cHg7XFxuICBnYXA6IDE2cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGNztcXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiAwIDI0cHg7XFxufVxcblxcbi5DaGVja291dF9vcmRlcl9fdDhLbHYgcDpudGgtY2hpbGQoMSkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5DaGVja291dF9vcmRlcl9fdDhLbHYgcCBzcGFuOm50aC1jaGlsZCgxKSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLkNoZWNrb3V0X29yZGVyX190OEtsdiBwIHNwYW46bnRoLWNoaWxkKDIpIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjQzdDN0M3O1xcbn1cXG5cXG4uQ2hlY2tvdXRfb3JkZXJfX3Q4S2x2IHA6bnRoLWNoaWxkKDIpIHtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy9DaGVja291dC5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zdHlsZXMvX3ZhcnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNDLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBREQ7O0FBSUE7RUFDQyxlQ0ZVO0VER1YsbUJBQUE7QUFERDs7QUFHQTtFQUNDLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7QUFBRDs7QUFFQTtFQUNDLGFBQUE7RUFDQSxzQkFBQTtBQUNEOztBQUNBO0VBQ0MsYUFBQTtFQUNBLCtCQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQ3ZCd0I7RUR3QnhCLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBRUQ7O0FBQUE7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7QUFHRDs7QUFEQTtFQUNDLGVDOUJVO0VEK0JWLGlCQUFBO0FBSUQ7O0FBRkE7RUFDQyxlQ25DVTtFRG9DVixjQ3ZDdUI7QUQ0Q3hCOztBQUhBO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0FBTURcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAndmFycyc7XFxuXFxuLkNoZWNrb3V0IHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0cGxhY2UtaXRlbXM6IGNlbnRlcjtcXG5cXHRcXG59XFxuLnRpdGxlIHtcXG5cXHRmb250LXNpemU6ICQtLWxnO1xcblxcdG1hcmdpbi1ib3R0b206IDQwcHg7XFxufVxcbi5DaGVja291dC1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcblxcdHdpZHRoOiAzMDBweDtcXG59XFxuLkNoZWNrb3V0LWNvbnRlbnQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLm9yZGVyIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuXFx0Z2FwOiAxNnB4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJC0tdGV4dC1pbnB1dC1maWVsZDtcXG5cXHRtYXJnaW4tYm90dG9tOiAyNHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDhweDtcXG5cXHRwYWRkaW5nOiAwIDI0cHg7XFxufVxcbi5vcmRlciBwOm50aC1jaGlsZCgxKSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ub3JkZXIgcCBzcGFuOm50aC1jaGlsZCgxKSB7XFxuXFx0Zm9udC1zaXplOiAkLS1tZDtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuLm9yZGVyIHAgc3BhbjpudGgtY2hpbGQoMikge1xcblxcdGZvbnQtc2l6ZTogJC0tc207XFxuXFx0Y29sb3I6ICQtLXZlcnktbGlnaHQtcGluaztcXG59XFxuLm9yZGVyIHA6bnRoLWNoaWxkKDIpIHtcXG5cXHR0ZXh0LWFsaWduOiBlbmQ7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVwiLFwiXFxuICAgICQtLXdoaXRlOiAjRkZGRkZGO1xcbiAgICAkLS1ibGFjazogIzAwMDAwMDtcXG4gICAgJC0tdmVyeS1saWdodC1waW5rOiAjQzdDN0M3O1xcbiAgICAkLS10ZXh0LWlucHV0LWZpZWxkOiAjRjdGN0Y3O1xcbiAgICAkLS1ob3NwaXRhbC1ncmVlbjogI0FDRDlCMjtcXG4gICAgJC0tc206IDE0cHg7XFxuICAgICQtLW1kOiAxNnB4O1xcbiAgICAkLS1sZzogMThweDtcXG5cXG5cXG4gIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIkNoZWNrb3V0XCI6IFwiQ2hlY2tvdXRfQ2hlY2tvdXRfX2djb3lJXCIsXG5cdFwidGl0bGVcIjogXCJDaGVja291dF90aXRsZV9fUnZRSGhcIixcblx0XCJDaGVja291dC1jb250YWluZXJcIjogXCJDaGVja291dF9DaGVja291dC1jb250YWluZXJfXzNSc2gzXCIsXG5cdFwiQ2hlY2tvdXQtY29udGVudFwiOiBcIkNoZWNrb3V0X0NoZWNrb3V0LWNvbnRlbnRfX0lldjlPXCIsXG5cdFwib3JkZXJcIjogXCJDaGVja291dF9vcmRlcl9fdDhLbHZcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[7].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[7].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[7].use[4]!./src/styles/Checkout.module.scss\n"));

/***/ })

});