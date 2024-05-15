"use strict";
exports.__esModule = true;
var Header_tsx_1 = require("./Resources/Header.tsx");
var Body_tsx_1 = require("./Resources/Body.tsx");
var Footrt_tsx_1 = require("./Resources/Footrt.tsx");
var react_1 = require("react");
// import "./js/jqueryD-3.6.1.js"
// import "./js/jquery-3.6.1.min.js"
// import "./js/efectos.js"
function App() {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Header_tsx_1["default"], null),
        react_1["default"].createElement(Body_tsx_1["default"], null),
        react_1["default"].createElement(Footrt_tsx_1["default"], null)));
}
exports["default"] = App;
