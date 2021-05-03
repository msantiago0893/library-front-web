"use strict";
exports.__esModule = true;
exports.Alert = void 0;
var sweetalert2_1 = require("sweetalert2");
var Alert = /** @class */ (function () {
    function Alert() {
    }
    //warning, success, error
    Alert.msgTimer = function (type, title, msg) {
        return sweetalert2_1["default"].fire({
            icon: type,
            title: title,
            text: msg,
            showConfirmButton: false,
            timer: 2000
        });
    };
    Alert.msg = function (type, msg, title) {
        return sweetalert2_1["default"].fire({
            icon: type,
            title: title,
            text: msg
        });
    };
    Alert.questions = function (question) {
        return sweetalert2_1["default"].fire({
            title: question,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí',
            cancelButtonText: 'Cancelar'
        });
    };
    return Alert;
}());
exports.Alert = Alert;
