"use strict";
exports.__esModule = true;
var react_1 = require("react");
var client_1 = require("react-dom/client");
var App_tsx_1 = require("./App.tsx");
var music_tsx_1 = require("./Music/music.tsx");
var react_router_dom_1 = require("react-router-dom");
var router = react_router_dom_1.createBrowserRouter([
    {
        path: "/",
        element: react_1["default"].createElement(App_tsx_1["default"], null)
    },
    {
        path: "/Music",
        element: react_1["default"].createElement(music_tsx_1["default"], null)
    }
]);
var root = client_1["default"].createRoot(document.getElementById('root'));
root.render(
// const root =  ReactDOM.createRoot(document.getElementById("root")).render(
react_1["default"].createElement(react_1["default"].StrictMode, null,
    react_1["default"].createElement(react_router_dom_1.RouterProvider, { router: router })));
//   // <React.StrictMode>
//     <App />
//   // </React.StrictMode>
// );
// import reportWebVitals from './reportWebVitals';
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
