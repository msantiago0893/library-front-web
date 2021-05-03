"use strict";
exports.__esModule = true;
exports.MESSAGE = exports.TYPE_ALERT = exports.API_ENDPOINT = void 0;
exports.API_ENDPOINT = "http://127.0.0.1:6666/api/";
exports.TYPE_ALERT = {
    WARNING: "warning",
    SUCCESS: "success",
    ERROR: "error"
};
exports.MESSAGE = {
    ADD: "¡Se ha agregado con éxito!",
    MODIFY: "¡Se ha actualizado con éxito!",
    DONE: "¡El elemento se ha removido con éxito!",
    QUESTION: "¿Está seguro de eliminar el elemento?",
    UPDATE_FAILED: "¡¡No se pudo actualizar correctamente!!",
    DELETE_FAILED: '¡¡No se pudo eliminar correctamente!!'
};
