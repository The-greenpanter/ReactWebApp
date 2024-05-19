"use strict";
exports.__esModule = true;
var react_1 = require("react");
var output_module_css_1 = require("../Estilos/output.module.css");
var finalSection = function () {
    return (react_1["default"].createElement("section", { className: output_module_css_1["default"]["social-media"] },
        react_1["default"].createElement("div", { className: output_module_css_1["default"].container },
            react_1["default"].createElement("a", { href: "https://www.instagram.com/the.green_panter/", className: output_module_css_1["default"].IG, "aria-label": "Instagram" },
                react_1["default"].createElement("i", { className: "fa fa-instagram" })),
            react_1["default"].createElement("a", { href: "https://github.com/The-greenpanter", className: output_module_css_1["default"].GitHub, "aria-label": "GitHub" },
                react_1["default"].createElement("i", { className: "fa fa-github" })),
            react_1["default"].createElement("a", { href: "https://www.linkedin.com/in/juan-diego-pe\u00F1a-castillo-932396138/", className: output_module_css_1["default"].Linkin, "aria-label": "LinkedIn" },
                react_1["default"].createElement("i", { className: "fa fa-linkedin" })))));
};
exports["default"] = finalSection;
