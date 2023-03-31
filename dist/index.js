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
  var url;
  try {
    url = require("../flags/".concat(isoCode === null || isoCode === void 0 ? void 0 : isoCode.toLowerCase(), ".png"));
  } catch (error) {
    console.warn("Flag for ".concat(isoCode.toLowerCase(), " not found. Using default flag instead."));
    url = require("../flags/default.png");
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
    src: url,
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