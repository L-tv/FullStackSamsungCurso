"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.direccion = void 0;
var direccion = /** @class */ (function () {
    function direccion(calle, numero, piso, letra, provincia, localidad, codigoPostal) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._provincia = provincia;
        this._localidad = localidad;
        this._codigoPostal = codigoPostal;
    }
    Object.defineProperty(direccion.prototype, "calle", {
        get: function () {
            return this._calle;
        },
        set: function (value) {
            this._calle = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(direccion.prototype, "letra", {
        get: function () {
            return this._letra;
        },
        set: function (value) {
            this._letra = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(direccion.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        set: function (value) {
            this._numero = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(direccion.prototype, "piso", {
        get: function () {
            return this._piso;
        },
        set: function (value) {
            this._piso = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(direccion.prototype, "provincia", {
        get: function () {
            return this._provincia;
        },
        set: function (value) {
            this._provincia = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(direccion.prototype, "localidad", {
        get: function () {
            return this._localidad;
        },
        set: function (value) {
            this._localidad = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(direccion.prototype, "codigoPostal", {
        get: function () {
            return this._codigoPostal;
        },
        set: function (value) {
            this._codigoPostal = value;
        },
        enumerable: false,
        configurable: true
    });
    return direccion;
}());
exports.direccion = direccion;
