"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var react_1 = __importDefault(require("react"));
var ReactCountriesFlags = function ReactCountriesFlags(_a) {
  var isoCode = _a.isoCode,
    _b = _a.alt,
    alt = _b === void 0 ? 'flag' : _b,
    _c = _a.width,
    width = _c === void 0 ? 25 : _c,
    _d = _a.height,
    height = _d === void 0 ? 15 : _d;
  var flag;
  var iso = isoCode === null || isoCode === void 0 ? void 0 : isoCode.toString().toLowerCase();
  try {
    flag = require("../flags/".concat(iso, ".png"));
  } catch (e) {
    iso ? console.warn("Flag for ".concat(iso, " not found. Using default flag instead.")) : console.warn("Using default flag instead.");
    flag = require("../flags/default.png");
  }
  return react_1["default"].createElement("div", {
    className: "reactCountriesFlags",
    style: {
      width: width + "px",
      height: height + "px",
      margin: 0,
      padding: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }, react_1["default"].createElement("img", {
    src: flag,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      border: "1px solid #eeeeee",
      backgroundPosition: "center",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat"
    }
  }));
};
exports["default"] = ReactCountriesFlags;