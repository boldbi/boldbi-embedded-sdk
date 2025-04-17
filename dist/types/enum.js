"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Theme = exports.Environment = exports.EmbedType = exports.Mode = void 0;
// enums.ts
var Mode;
(function (Mode) {
    Mode["View"] = "view";
    Mode["Design"] = "design";
    Mode["Connection"] = "connection";
    Mode["DataSource"] = "datasource";
})(Mode || (exports.Mode = Mode = {}));
var EmbedType;
(function (EmbedType) {
    EmbedType["Component"] = "component";
    EmbedType["IFrame"] = "iframe";
})(EmbedType || (exports.EmbedType = EmbedType = {}));
var Environment;
(function (Environment) {
    Environment["Enterprise"] = "onpremise";
    Environment["Cloud"] = "cloud";
})(Environment || (exports.Environment = Environment = {}));
var Theme;
(function (Theme) {
    Theme["Off"] = "off";
    Theme["Light"] = "light";
    Theme["Dark"] = "dark";
})(Theme || (exports.Theme = Theme = {}));
