"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ReactCountriesFlags;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ReactCountriesFlags(_ref) {
  var isoCode = _ref.isoCode,
    _ref$alt = _ref.alt,
    alt = _ref$alt === void 0 ? "flag" : _ref$alt,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? 25 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 15 : _ref$height;
  var flag;
  var iso = isoCode === null || isoCode === void 0 ? void 0 : isoCode.toString().toLowerCase();
  try {
    flag = require("../flags/".concat(iso, ".png"));
  } catch (e) {
    iso ? console.warn("Flag for ".concat(iso, " not found. Using default flag instead.")) : console.warn("Using default flag instead.");
    flag = require("../flags/default.png");
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
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
  }, /*#__PURE__*/_react["default"].createElement("img", {
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
}
;