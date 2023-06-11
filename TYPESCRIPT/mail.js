"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mail = void 0;
var mail = /** @class */ (function () {
    function mail(tipo, mail) {
        this._tipo = tipo;
        this._mail = mail;
    }
    Object.defineProperty(mail.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (value) {
            this._tipo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(mail.prototype, "mail", {
        get: function () {
            return this._mail;
        },
        set: function (value) {
            this._mail = value;
        },
        enumerable: false,
        configurable: true
    });
    return mail;
}());
exports.mail = mail;
