"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireWildcard(require("react"));

var _jquery = _interopRequireDefault(require("jquery"));

var _reactRouterDom = require("react-router-dom");

var _music = _interopRequireDefault(require("../Music/music.tsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

(0, _jquery["default"])(document).ready(function () {
  //Efecto menu
  (0, _jquery["default"])('.menu a').each(function (index, elemento) {
    (0, _jquery["default"])(this).css({
      top: '-200px'
    });
    (0, _jquery["default"])(this).animate({
      top: '0'
    }, 200 + index * 500);
  }); // Efecto header

  if ((0, _jquery["default"])(window).width() > 800) {
    (0, _jquery["default"])('header .textos').css({
      opacity: 0,
      marginTop: 0
    });
    (0, _jquery["default"])('header .textos').animate({
      opacity: 1,
      marginTop: '-52px'
    }, 3000);
  } //Scroll Elementos Menu


  var acercaDe = (0, _jquery["default"])('#generalInfo').offset().top,
      Trabajos = (0, _jquery["default"])('#Trabajos').offset().top,
      Contacto = (0, _jquery["default"])('#contacto').offset().top;
  (0, _jquery["default"])('#btn-acerca-de').on('click', function (e) {
    e.preventDefault();
    (0, _jquery["default"])('html, body').animate({
      scrollTop: acercaDe - 100
    }, 500);
  });
  (0, _jquery["default"])('#btn-Trabajos').on('click', function (e) {
    e.preventDefault();
    (0, _jquery["default"])('html, body').animate({
      scrollTop: Trabajos - 20
    }, 500);
  });
  (0, _jquery["default"])('#btn-contacto').on('click', function (e) {
    e.preventDefault();
    (0, _jquery["default"])('html, body').animate({
      scrollTop: Contacto - 80
    }, 500);
  });
});