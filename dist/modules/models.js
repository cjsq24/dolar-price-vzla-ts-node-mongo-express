"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DolarPriceHistory", {
  enumerable: true,
  get: function get() {
    return _dolarPriceHistory["default"];
  }
});
Object.defineProperty(exports, "DolarPriceToday", {
  enumerable: true,
  get: function get() {
    return _dolarPriceToday["default"];
  }
});
Object.defineProperty(exports, "IDolarPriceHistory", {
  enumerable: true,
  get: function get() {
    return _dolarPriceHistory.IDolarPriceHistory;
  }
});
Object.defineProperty(exports, "IDolarPriceToday", {
  enumerable: true,
  get: function get() {
    return _dolarPriceToday.IDolarPriceToday;
  }
});
Object.defineProperty(exports, "IPlatform", {
  enumerable: true,
  get: function get() {
    return _platforms.IPlatform;
  }
});
Object.defineProperty(exports, "Platform", {
  enumerable: true,
  get: function get() {
    return _platforms["default"];
  }
});

var _platforms = _interopRequireWildcard(require("./platforms/platforms.model"));

var _dolarPriceToday = _interopRequireWildcard(require("./dolarPrice/dolarPriceToday.model"));

var _dolarPriceHistory = _interopRequireWildcard(require("./dolarPrice/dolarPriceHistory.model"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }