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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var finalSection_1 = require("./finalSection");
var react_hook_form_1 = require("react-hook-form");
var zod_1 = require("zod");
var zod_2 = require("@hookform/resolvers/zod");
var schema = zod_1.z.object({
    name: zod_1.z.string().min(8),
    mensaje: zod_1.z.string().max(200).min(20),
    email: zod_1.z.string().email()
});
var Footrt = function () {
    var _a = react_hook_form_1.useForm({ resolver: zod_2.zodResolver(schema) }), register = _a.register, handleSubmit = _a.handleSubmit, setError = _a.setError, _b = _a.formState, errors = _b.errors, isSubmitting = _b.isSubmitting;
    // { defaultValues: { name: '', email: '', mensaje: '' } }
    var onSubmit = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1000); })];
                case 1:
                    _a.sent();
                    console.log(data);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    setError("root", {
                        message: "Please enter a valid email \n Por favor ingrese un email valido"
                    });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement("footer", null,
        react_1["default"].createElement("section", { className: "contacto" },
            react_1["default"].createElement("div", { className: "container" },
                react_1["default"].createElement("h3", { className: "titulo", id: "contacto" }, "Contact"),
                react_1["default"].createElement("form", { className: "formulario", onSubmit: handleSubmit(onSubmit) },
                    react_1["default"].createElement("input", __assign({ className: "InsertNombre", type: "text", placeholder: "Name" }, register("name"))),
                    errors.name && (react_1["default"].createElement("div", { className: "error-message" }, errors.name.message)),
                    react_1["default"].createElement("input", __assign({ className: "InsertCorreo", type: "email", placeholder: "Email" }, register("email"))),
                    errors.email && (react_1["default"].createElement("div", { className: "error-message" }, errors.email.message)),
                    react_1["default"].createElement("textarea", __assign({ placeholder: "Message" }, register("mensaje"))),
                    errors.mensaje && (react_1["default"].createElement("div", { className: "error-message" }, errors.mensaje.message)),
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
