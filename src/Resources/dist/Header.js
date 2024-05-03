"use strict";
exports.__esModule = true;
var react_1 = require("react");
var output_module_css_1 = require("../Estilos/output.module.css");
var Header = function () {
    return (react_1["default"].createElement("header", { className: output_module_css_1["default"].encabezado },
        react_1["default"].createElement("section", { className: output_module_css_1["default"].Radio },
            react_1["default"].createElement("iframe", { className: output_module_css_1["default"].iframe, src: "https://zeno.fm/player/chispero-records", frameborder: "0", scrolling: "no" }),
            react_1["default"].createElement("a", { href: "https://zeno.fm/", target: "_blank", style: { fontSize: '0.9em', lineHeight: '10px' } })),
        react_1["default"].createElement("div", { className: output_module_css_1["default"].conteiner },
            react_1["default"].createElement("nav", { className: output_module_css_1["default"].menu },
                react_1["default"].createElement("a", { id: "btn-acerca-de", className: output_module_css_1["default"].acercade }, "Acerca de"),
                react_1["default"].createElement("a", { id: "btn-Trabajos", className: output_module_css_1["default"].Diseños }, "Dise\u00F1os"),
                react_1["default"].createElement("a", { id: "btn-contacto", className: output_module_css_1["default"].contacto }, "Contacto")),
            react_1["default"].createElement("div", { className: output_module_css_1["default"].titlecontainer, id: "" },
                react_1["default"].createElement("div", { className: output_module_css_1["default"].texto },
                    react_1["default"].createElement("h1", { className: output_module_css_1["default"].Tituloprincipal },
                        "The Green ",
                        react_1["default"].createElement("h1", { className: output_module_css_1["default"].Tituloprincipal }, "Panter "),
                        " "),
                    react_1["default"].createElement("h2", { className: output_module_css_1["default"].descripcion }, "Dise\u00F1ador Digital"))))));
};
exports["default"] = Header;
