"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var music_tsx_1 = require("../Music/music.tsx");
var Body = function () {
    return (react_1["default"].createElement("section", { className: "main" },
        react_1["default"].createElement("section", { className: "Acercade", id: "generalInfo" },
            react_1["default"].createElement("div", { className: "container" },
                react_1["default"].createElement("div", { className: "IMGportada" },
                    react_1["default"].createElement("img", { src: "/img/IMG_20211216_032205_333.jpg", alt: "The Green Panter", width: "115", className: "portada" })),
                react_1["default"].createElement("div", { className: "generalInfo", id: "generalInfo" },
                    react_1["default"].createElement("h3", { className: "AcercaD" }, "Acerca de"),
                    react_1["default"].createElement("p", null,
                        "La marca ",
                        react_1["default"].createElement("span", { className: "bold" }, " The Green Panter"),
                        " es especialista de dise\u00F1o digital, pensando siempre en la mejor experiencia para el usuario; Recopila y emplea ideas y referencias de los entornos naturales, ya que ",
                        react_1["default"].createElement("span", { className: "bold" }, " los modelos y esquemas de la vida llevan miles de a\u00F1os evolucionando"),
                        ". Manejo lenguaje HTML5, CSS, JavaScript, jQuery, y PHP entre otros para el ",
                        react_1["default"].createElement("span", { className: "bold" }, "dise\u00F1o web, front-end"),
                        " ademas con expandimos nuestro dise\u00F1o para ser portatil y lo lleven en applicativos para dispositivos",
                        react_1["default"].createElement("span", { className: "bold" }, " IOs y Android mediante reactNative"),
                        " ")))),
        react_1["default"].createElement("section", { className: "trabajos", id: "Trabajos" },
            react_1["default"].createElement("div", { className: "container" },
                react_1["default"].createElement("h3", { className: "titulo" }, "Trabajos"),
                react_1["default"].createElement("div", { className: "trabanos" },
                    react_1["default"].createElement("div", { className: "work" },
                        react_1["default"].createElement("div", { className: "thumb" },
                            react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
                                react_1["default"].createElement(react_router_dom_1.Routes, null,
                                    react_1["default"].createElement(react_router_dom_1.Route, { path: "../Music/", element: react_1["default"].createElement(music_tsx_1["default"], null) })),
                                react_1["default"].createElement(react_router_dom_1.Link, { to: "../Music/music.tsx'", className: "link" },
                                    react_1["default"].createElement("img", { src: "img/music.png", alt: "", className: "Iuno" }),
                                    react_1["default"].createElement("div", { className: "descripcion" },
                                        react_1["default"].createElement("p", { className: "smalltittle" }, "Produccion musica"),
                                        react_1["default"].createElement("p", { className: "smalldescription" }, "Grabacion, edicion y composicion")))))),
                    react_1["default"].createElement("div", { className: "work" },
                        react_1["default"].createElement("div", { className: "thumb" },
                            react_1["default"].createElement("a", { href: "#", className: "link" },
                                react_1["default"].createElement("a", { href: "#/Articuloflexbox/", className: "link" },
                                    react_1["default"].createElement("img", { src: "img/Landscape.png", alt: "", className: "Iuno" }),
                                    react_1["default"].createElement("div", { className: "descripcion" },
                                        react_1["default"].createElement("p", { className: "smalltittle" }, "Biologia"),
                                        react_1["default"].createElement("p", { className: "smalldescription" }, "Detalles de un Biologo egresado de la UNAL-Sede Bogota ")))))),
                    react_1["default"].createElement("div", { className: "work" },
                        react_1["default"].createElement("div", { className: "thumb" },
                            react_1["default"].createElement("a", { href: "#../src/Practicjquery/index.html", className: "link" },
                                react_1["default"].createElement("img", { src: "img/Disenho.png", alt: "", className: "Iuno" }),
                                react_1["default"].createElement("div", { className: "descripcion" },
                                    react_1["default"].createElement("p", { className: "smalltittle" }, "Dise\u00F1ado para start up"),
                                    react_1["default"].createElement("p", { className: "smalldescription" }, "Dise\u00F1o web dinamico con jQuery "))))),
                    react_1["default"].createElement("div", { className: "work" },
                        react_1["default"].createElement("div", { className: "thumb" },
                            react_1["default"].createElement("a", { href: "#/TemaParawordpress/index.html", className: "link" },
                                react_1["default"].createElement("img", { src: "img/PSX_20220321_084354(1).png", alt: "", className: "Iuno" }),
                                react_1["default"].createElement("div", { className: "descripcion" },
                                    react_1["default"].createElement("p", { className: "smalltittle" }, "Cafe Euphonia"),
                                    react_1["default"].createElement("p", { className: "smalldescription" }, "De la finca a la taza"))))),
                    react_1["default"].createElement("div", { className: "work" },
                        react_1["default"].createElement("div", { className: "thumb" },
                            react_1["default"].createElement("a", { href: "#", className: "link" },
                                react_1["default"].createElement("img", { src: "img/sun.png", alt: "", className: "Iuno" }),
                                react_1["default"].createElement("div", { className: "descripcion" },
                                    react_1["default"].createElement("p", { className: "smalltittle" }, "Title of work"),
                                    react_1["default"].createElement("p", { className: "smalldescription" }, "Tools and ideas main"))))),
                    react_1["default"].createElement("div", { className: "work" },
                        react_1["default"].createElement("div", { className: "thumb" },
                            react_1["default"].createElement("a", { href: "#/target", className: "link" },
                                react_1["default"].createElement("img", { src: "img/Travel.png", alt: "", className: "Iuno" }),
                                react_1["default"].createElement("div", { className: "descripcion" },
                                    react_1["default"].createElement("p", { className: "smalltittle" }, "Title of work"),
                                    react_1["default"].createElement("p", { className: "smalldescription" }, "Tools and ideas main"))))))))));
};
exports["default"] = Body;
