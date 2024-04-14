"use strict";
var __assign = (this && this.__assign) || function () {
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
exports.__esModule = true;
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var finalSection_1 = require("./finalSection");
var react_hook_form_1 = require("react-hook-form");
var Footrt = function () {
    var _a = react_hook_form_1.useForm(), register = _a.register, handleSubmit = _a.handleSubmit;
    // { defaultValues: { name: '', email: '', mensaje: '' } }
    var onSubmit = function (data) {
        console.log(data);
    };
    return (react_1["default"].createElement("footer", null,
        react_1["default"].createElement("section", { className: "contacto" },
            react_1["default"].createElement("div", { className: "container" },
                react_1["default"].createElement("h3", { className: "titulo", id: "contacto" }, "Contact"),
                react_1["default"].createElement("form", { className: "formulario", onSubmit: handleSubmit(onSubmit) },
                    react_1["default"].createElement("input", __assign({ className: "InsertNombre", type: "text", placeholder: "Name" }, register("name"))),
                    react_1["default"].createElement("input", __assign({ className: "InsertCorreo", type: "email", placeholder: "Email" }, register("email"))),
                    react_1["default"].createElement("textarea", __assign({ placeholder: "Message" }, register("mensaje"))),
                    react_1["default"].createElement("input", { className: "boton", type: "submit", value: "Send" }))),
            react_1["default"].createElement(finalSection_1["default"], null))));
};
Footrt.protoTypes = {
    initialValues: prop_types_1["default"].shape({
        nombre: prop_types_1["default"].string.isRequired,
        correo: prop_types_1["default"].string.isRequired,
        Mensaje: prop_types_1["default"].string.isRequired
    }),
    onSubmit: prop_types_1["default"].func.isRequired,
    errors: prop_types_1["default"].object
};
exports["default"] = Footrt;
